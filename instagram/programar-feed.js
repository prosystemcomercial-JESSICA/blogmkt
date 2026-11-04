// Programa no instagram/agenda.json os posts do feed de 04/11/2026 a 31/01/2027 (um por dia), a partir de
// outputs/criativos/nov-dez/pecas-dados.js. Só entram peças travadas (aprovadas) e as prontas de outras produções.
// Converte as imagens para JPEG em instagram/midia/ (a API só aceita JPEG) e copia o MP4 do vídeo.
// Não mexe em posts que já estão na agenda (mesmo id): para reprogramar um, apague a entrada antes.
// Uso (na raiz do projeto): node instagram/programar-feed.js [--hoje HH:MM]
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const RAIZ = path.join(__dirname, '..');
const NOVDEZ = path.join(RAIZ, 'outputs/criativos/nov-dez');
const AGENDA = path.join(__dirname, 'agenda.json');
const MIDIA = path.join(__dirname, 'midia');
const HORA = '12:30';
const args = process.argv.slice(2);
const HOJE = args.includes('--hoje') ? args[args.indexOf('--hoje') + 1] : null;

const { P, PRONTAS } = require(path.join(NOVDEZ, 'pecas-dados.js'));
const agenda = JSON.parse(fs.readFileSync(AGENDA, 'utf8'));
const jaTem = new Set(agenda.map((p) => p.id));

const quando = (data, hora) => {
  const [d, m] = data.slice(4, 9).split('/');
  return `${m === '01' ? 2027 : 2026}-${m}-${d}T${hora}:00-03:00`;
};
const hojeIso = new Date(Date.now() - 3 * 3600e3).toISOString().slice(0, 10);

// Legenda do carrossel de suporte (09/11): está no legendas.md da produção de suporte, com as hashtags na última linha.
function legendaSuporte() {
  const s = fs.readFileSync(path.join(RAIZ, 'outputs/criativos/suporte/legendas.md'), 'utf8')
    .split('## carrossel-farmacia-suporte-v4')[1].split('## Texto alternativo')[0].trim().split('\n');
  const tags = s.pop().trim();
  return { legenda: s.join('\n').trim(), tags };
}

const posts = [];
for (const p of [...P.filter((x) => !x.pagina), ...PRONTAS]) {
  let id, origens, legenda, tags;
  if (p.arq) {
    const base = path.basename(p.arq);
    if (base.includes('<página>')) {
      const pre = base.split('<página>')[0];
      const dir = path.join(RAIZ, path.dirname(p.arq));
      origens = fs.readdirSync(dir).filter((f) => f.startsWith(pre) && /^\d+\.png$/.test(f.slice(pre.length)))
        .sort((a, b) => parseInt(a.slice(pre.length)) - parseInt(b.slice(pre.length))).map((f) => path.join(dir, f));
      id = pre.replace(/-$/, '');
    } else {
      origens = [path.join(RAIZ, p.arq)];
      id = base.replace(/\.png$/, '');
    }
    ({ legenda, tags } = p.cap ? { legenda: p.cap, tags: p.tags } : legendaSuporte());
  } else {
    if (!p.travada) { console.log(`fora (não aprovada): ${p.data} ${p.id}`); continue; }
    id = p.id;
    const mp4 = path.join(NOVDEZ, 'pecas', `${id}.mp4`);
    const unica = path.join(NOVDEZ, 'pecas', `${id}.png`);
    if (fs.existsSync(mp4)) origens = [mp4];
    else if (fs.existsSync(unica)) origens = [unica];
    else origens = fs.readdirSync(path.join(NOVDEZ, 'pecas')).filter((f) => new RegExp(`^${id}-\\d+\\.png$`).test(f))
      .sort((a, b) => parseInt(a.slice(id.length + 1)) - parseInt(b.slice(id.length + 1))).map((f) => path.join(NOVDEZ, 'pecas', f));
    legenda = p.cap; tags = p.tags;
  }
  if (jaTem.has(id)) { console.log(`já na agenda: ${p.data} ${id}`); continue; }
  if (!origens.length || !legenda) throw new Error(`${p.data} ${id}: falta imagem ou legenda`);
  let q = quando(p.data, HORA);
  if (q.slice(0, 10) < hojeIso) { console.log(`data passada, fora: ${p.data} ${id}`); continue; }
  if (q.slice(0, 10) === hojeIso && HOJE) q = quando(p.data, HOJE);
  posts.push({ p, id, origens, legenda, tags, q });
}

// Um post por dia: duas peças no mesmo dia indicam erro no calendário.
const dias = {};
for (const x of posts) (dias[x.q.slice(0, 10)] ||= []).push(x.id);
for (const [d, ids] of Object.entries(dias)) if (ids.length > 1) throw new Error(`${d} com ${ids.length} posts: ${ids.join(', ')}`);

const pngs = posts.flatMap((x) => x.origens.filter((o) => o.endsWith('.png')));
if (pngs.length) execFileSync('python', [path.join(__dirname, 'preparar.py'), ...pngs], { stdio: 'ignore' });

for (const x of posts.sort((a, b) => a.q.localeCompare(b.q))) {
  const midias = x.origens.map((o) => {
    if (o.endsWith('.mp4')) { fs.copyFileSync(o, path.join(MIDIA, path.basename(o))); return `instagram/midia/${path.basename(o)}`; }
    return `instagram/midia/${path.basename(o, '.png')}.jpg`;
  });
  const entrada = { id: x.id, quando: x.q, tipo: midias[0].endsWith('.mp4') ? 'reels' : midias.length > 1 ? 'carrossel' : 'imagem', nota: `Feed ${x.p.data}, ${x.p.formato}.`, imagens: midias };
  if (entrada.tipo === 'reels') {
    const capa = path.join(NOVDEZ, 'pecas', `${x.id}.png`);
    execFileSync('python', [path.join(__dirname, 'preparar.py'), capa], { stdio: 'ignore' });
    entrada.capa = `instagram/midia/${x.id}.jpg`;
  }
  Object.assign(entrada, { legenda: x.legenda, tags: x.tags, status: 'agendado' });
  agenda.push(entrada);
  console.log(`${x.q}  ${entrada.tipo.padEnd(9)} ${x.id}`);
}
agenda.sort((a, b) => a.quando.localeCompare(b.quando));
fs.writeFileSync(AGENDA, JSON.stringify(agenda, null, 2) + '\n');
console.log(`${posts.length} posts programados.`);
