// Publica no Instagram (@prosystemoficial) os posts de agenda.json cujo horário já chegou.
// Roda no GitHub Actions a cada 15 minutos (.github/workflows/instagram.yml) ou à mão:
//   node instagram/publicar.mjs            publica o que estiver na hora
//   node instagram/publicar.mjs --teste    só confere token, conta e imagens; não publica nada
//   node instagram/publicar.mjs --agora ID publica o post ID já, sem esperar o horário
// O token vem de IG_TOKEN (secret do GitHub ou .env local). Nunca imprimir o token.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PASTA = path.dirname(fileURLToPath(import.meta.url));
const AGENDA = path.join(PASTA, 'agenda.json');
const API = 'https://graph.facebook.com/v21.0';
const REPO = process.env.GITHUB_REPOSITORY || 'prosystemcomercial-JESSICA/blogmkt';
const MAX_TENTATIVAS = 3;

// Fora do GitHub, lê IG_TOKEN e IG_USER_ID do .env da raiz.
const env = path.join(PASTA, '..', '.env');
if (!process.env.IG_TOKEN && fs.existsSync(env)) {
  for (const linha of fs.readFileSync(env, 'utf8').split(/\r?\n/)) {
    const m = linha.match(/^(IG_TOKEN|IG_USER_ID)=(.*)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim().replace(/^"|"$/g, '');
  }
}
const TOKEN = process.env.IG_TOKEN;
const IG = process.env.IG_USER_ID || '17841407290869129';
if (!TOKEN) { console.error('IG_TOKEN não definido.'); process.exit(1); }

const args = process.argv.slice(2);
const TESTE = args.includes('--teste');
const AGORA = args.includes('--agora') ? args[args.indexOf('--agora') + 1] : (process.env.PUBLICAR_ID || '');

async function api(metodo, rota, params = {}) {
  const url = new URL(API + rota);
  const opcoes = { method: metodo, headers: { Authorization: `Bearer ${TOKEN}` } };
  if (metodo === 'GET') for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);
  else opcoes.body = new URLSearchParams(params);
  const r = await fetch(url, opcoes);
  const json = await r.json();
  if (json.error) throw new Error(`${rota}: ${json.error.message} (código ${json.error.code})`);
  return json;
}

const espera = (ms) => new Promise((ok) => setTimeout(ok, ms));

// O Instagram baixa a imagem pelo link; o contêiner só pode ser publicado com status FINISHED.
async function aguardar(id) {
  for (let i = 0; i < 30; i++) {
    const { status_code: s } = await api('GET', `/${id}`, { fields: 'status_code' });
    if (s === 'FINISHED') return;
    if (s === 'ERROR' || s === 'EXPIRED') throw new Error(`contêiner ${id} ficou ${s}`);
    await espera(5000);
  }
  throw new Error(`contêiner ${id} não ficou pronto em 2,5 minutos`);
}

// Link público da imagem no repositório (que é público). O SHA evita cache de versão antiga.
const link = (arq) => `https://raw.githubusercontent.com/${REPO}/${process.env.GITHUB_SHA || 'main'}/${arq}`;

async function publicar(post) {
  const legenda = post.legenda + (post.tags ? `\n\n${post.tags}` : '');
  let criacao;
  if (post.imagens.length === 1) {
    criacao = (await api('POST', `/${IG}/media`, { image_url: link(post.imagens[0]), caption: legenda })).id;
  } else {
    const filhos = [];
    for (const arq of post.imagens) {
      filhos.push((await api('POST', `/${IG}/media`, { image_url: link(arq), is_carousel_item: 'true' })).id);
    }
    for (const f of filhos) await aguardar(f);
    criacao = (await api('POST', `/${IG}/media`, { media_type: 'CAROUSEL', children: filhos.join(','), caption: legenda })).id;
  }
  await aguardar(criacao);
  const { id } = await api('POST', `/${IG}/media_publish`, { creation_id: criacao });
  const { permalink } = await api('GET', `/${id}`, { fields: 'permalink' });
  return { id, permalink };
}

const agenda = JSON.parse(fs.readFileSync(AGENDA, 'utf8'));
const conta = await api('GET', `/${IG}`, { fields: 'username' });
console.log(`Conta: @${conta.username}`);

if (TESTE) {
  let ok = true;
  for (const post of agenda.filter((p) => p.status === 'agendado')) {
    const faltam = post.imagens.filter((a) => !fs.existsSync(path.join(PASTA, '..', a)));
    console.log(`${post.id} (${post.quando}): ${post.imagens.length} imagem(ns)${faltam.length ? `, FALTAM: ${faltam.join(', ')}` : ''}`);
    if (faltam.length) ok = false;
  }
  const { quota_usage: usados } = (await api('GET', `/${IG}/content_publishing_limit`, { fields: 'quota_usage' })).data[0] || {};
  console.log(`Posts publicados pela API nas últimas 24h: ${usados ?? 0} de 100`);
  process.exit(ok ? 0 : 1);
}

const agora = new Date();
const daVez = agenda.filter((p) => p.status === 'agendado' && (AGORA ? p.id === AGORA : new Date(p.quando) <= agora));
if (AGORA && !daVez.length) { console.error(`Nenhum post agendado com o id ${AGORA}.`); process.exit(1); }
if (!daVez.length) { console.log('Nada para publicar agora.'); process.exit(0); }

let falhou = false;
for (const post of daVez) {
  try {
    const { id, permalink } = await publicar(post);
    Object.assign(post, { status: 'publicado', publicado_em: new Date().toISOString(), media_id: id, link: permalink });
    delete post.erro;
    console.log(`Publicado: ${post.id} -> ${permalink}`);
  } catch (e) {
    falhou = true;
    post.tentativas = (post.tentativas || 0) + 1;
    post.erro = e.message;
    if (post.tentativas >= MAX_TENTATIVAS) post.status = 'erro';
    console.error(`Falhou: ${post.id} (tentativa ${post.tentativas}): ${e.message}`);
  }
}
fs.writeFileSync(AGENDA, JSON.stringify(agenda, null, 2) + '\n');
process.exit(falhou ? 1 : 0);
