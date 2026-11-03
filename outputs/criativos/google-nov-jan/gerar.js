// Gera as imagens das postagens do Google (1200×900, JPG), confere os textos e monta guia.html e GUIA.md.
// Os estilos vêm de docs/conteudo-prosystem/feed_modelo.html, como em ../nov-dez/gerar.js, com a peça em 4:3.
// O título, a faixa e a pílula ficam no quadrado central, porque o Google às vezes corta a imagem em quadrado.
// Uso: node outputs/criativos/google-nov-jan/gerar.js [id do post]
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const { P } = require('./dados.js');

const AQUI = __dirname;
const RAIZ = path.join(AQUI, '..', '..', '..');
const SAIDA = path.join(AQUI, 'imagens');
const url = (p) => 'file:///' + p.split(path.sep).join('/').replace(/ /g, '%20');

const PASTAS = ['nov-dez/fotos', 'modelos/carrossel/fotos', 'suporte/fotos'].map((d) => path.join(RAIZ, 'outputs/criativos', d));
function img(n) {
  for (const d of PASTAS) { const f = path.join(d, n + '.jpg'); if (fs.existsSync(f)) return url(f); }
  throw new Error('foto não encontrada: ' + n);
}
const css = fs.readFileSync(path.join(RAIZ, 'docs/conteudo-prosystem/feed_modelo.html'), 'utf8')
  .split('/* Peças */')[1].split('</style>')[0]
  .replace(/(?<![\w#.$-])(-?\d+(?:\.\d+)?)U\b/g, 'calc($1*var(--u))');
const LOGO = url(path.join(RAIZ, 'docs/design/guia-de-estilos/assets/logo-light.png'));
const px = (n) => `calc(${n}*var(--u))`;
// A unidade continua sendo 1/1080 da largura: a peça tem 1080 × 810 unidades.
const AJUSTES = `
.post{aspect-ratio:4/3}
.tom{position:absolute;inset:0;z-index:2;background:linear-gradient(180deg,rgba(var(--sb),.8) 0%,rgba(var(--sb),.15) 24%,rgba(var(--mar),.3) 40%,rgba(var(--mar),.9) 62%,rgba(var(--mar),.97) 100%)}
.lg{top:${px(36)};width:${px(300)}}
.bloco{position:absolute;left:${px(150)};right:${px(150)};bottom:${px(58)};z-index:7;display:flex;flex-direction:column;align-items:center;gap:${px(20)};text-align:center}
.bloco h2{font-size:${px(58)};line-height:1.08}
.bloco .fx{font-size:${px(27)};padding:${px(16)} ${px(28)}}
.bloco .pl{font-size:${px(25)};padding:${px(13)} ${px(34)}}
`;

// desfoque: a foto inteira (número, em px) ou só uma região ([x%, y%, raio em px]), para esconder marca ou texto legível.
function peca(c) {
  const base = `inset:0;width:100%;height:100%;object-position:${c.posicao}`;
  const tudo = typeof c.desfoque === 'number' ? `;filter:blur(${c.desfoque}px);transform:scale(1.04)` : '';
  const regiao = Array.isArray(c.desfoque) ? `<img class="ft" src="${img(c.foto)}" alt="" style="${base};z-index:1;filter:blur(9px);-webkit-mask-image:radial-gradient(circle ${c.desfoque[2]}px at ${c.desfoque[0]}% ${c.desfoque[1]}%,#000 60%,transparent 100%)">` : '';
  return `<div class="p ${c.tema} sob">
<img class="ft" src="${img(c.foto)}" alt="" style="${base}${tudo}">${regiao}
<div class="tom"></div>
<i class="g" style="width:${px(260)};height:${px(260)};top:${px(-130)};left:${px(-110)};z-index:3"></i>
<i class="gf" style="width:${px(180)};height:${px(180)};top:${px(-80)};right:${px(-60)};z-index:3"></i>
<i class="g" style="width:${px(280)};height:${px(280)};bottom:${px(-170)};right:${px(-90)};z-index:3"></i>
<i class="g" style="width:${px(200)};height:${px(200)};bottom:${px(-120)};left:${px(-60)};z-index:3"></i>
<img class="lg" src="${LOGO}" alt="">
<div class="bloco"><h2>${c.titulo}</h2><p class="fx">${c.faixa}</p><span class="pl">${c.pilula}</span></div>
</div>`;
}

const semTags = (t) => t.replace(/<[^>]+>/g, '');
const arquivo = (c) => `${c.data}-${c.id}.jpg`;

// Regras do Google (ajuda oficial e política de conteúdo, lidas em 03/11/2026) e do caderno de marca.
function conferir() {
  const r = [];
  const fotos = new Set();
  for (const c of P) {
    const t = c.texto;
    const primeira = t.split(/[.:]\s/)[0].toLowerCase();
    if (t.length > 1500) r.push(`${c.id}: texto com ${t.length} caracteres (máximo 1500)`);
    if (!primeira.includes(c.palavra.toLowerCase())) r.push(`${c.id}: palavra-chave fora da primeira frase`);
    if (!t.includes('2027')) r.push(`${c.id}: texto não cita 2027`);
    if (/\(?\d{2}\)?\s?9?\d{4}-?\d{4}/.test(t)) r.push(`${c.id}: parece ter telefone`);
    if (/@|instagram|facebook|wa\.me/i.test(t)) r.push(`${c.id}: e-mail ou rede social no texto`);
    if (/24 horas/i.test(t)) r.push(`${c.id}: "24 horas" é proibido no caderno`);
    if (c.tema === 'lar' && /farmác/i.test(t + c.titulo + c.faixa)) r.push(`${c.id}: padaria falando de farmácia`);
    if (fotos.has(c.foto)) r.push(`${c.id}: foto repetida (${c.foto})`);
    fotos.add(c.foto);
  }
  return r;
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function guiaMd() {
  const linhas = P.map((c) => `| ${c.dia} | ${c.seg} | \`imagens/${arquivo(c)}\` | ${c.botao} | ${c.link} |`);
  const posts = P.map((c) => `## ${c.dia}/${c.data.slice(0, 4)} · ${c.seg}\n\n- **Imagem:** \`imagens/${arquivo(c)}\`\n- **Programar para:** ${c.data.split('-').reverse().join('/')}, 09:00\n- **Botão:** ${c.botao} → ${c.link}${c.linkDepois ? `\n- **Se o artigo já estiver no ar:** ${c.linkDepois}` : ''}\n- **Palavra-chave:** ${c.palavra}\n\n${c.texto}\n`);
  return `# Postagens do Google: 05/11/2026 a 20/01/2027

Arquivo gerado por \`gerar.js\`. Para mudar um texto, altere \`dados.js\` e gere de novo. O guia visual, com botão de copiar, sai em \`guia.html\`.

Tipo de postagem: **Atualização**, em todas. Horário: 9h. Pausa de 23/12 a 02/01.

| Data | Para quem | Imagem | Botão | Link |
|---|---|---|---|---|
${linhas.join('\n')}

${posts.join('\n')}`;
}

function guiaHtml() {
  const modelo = fs.readFileSync(path.join(AQUI, 'guia-modelo.html'), 'utf8');
  const cartoes = P.map((c, i) => {
    const d = c.data.split('-').reverse().join('/');
    return `<article class="post" id="p${i + 1}">
<div class="post-img"><img src="imagens/${arquivo(c)}" alt="${esc(semTags(c.titulo))}" loading="lazy" width="1200" height="900"></div>
<div class="post-corpo">
<div class="post-topo"><span class="data">${c.dia}</span><span class="seg seg-${c.tema}">${c.seg}</span></div>
<h3>${esc(semTags(c.titulo))}</h3>
<dl class="campos">
<div><dt>Programar</dt><dd>${d} às 09:00</dd></div>
<div><dt>Botão</dt><dd>${c.botao}</dd></div>
<div><dt>Link</dt><dd><a href="${c.link}" target="_blank" rel="noopener">${c.link.replace('https://', '')}</a><button class="copiar mini" data-alvo="l${i}">Copiar link</button><span hidden id="l${i}">${c.link}</span>${c.linkDepois ? `<small>Se o artigo já estiver no ar, use <code>${c.linkDepois.replace('https://', '')}</code>.</small>` : ''}</dd></div>
<div><dt>Imagem</dt><dd><code>${arquivo(c)}</code></dd></div>
</dl>
<div class="texto-topo"><span>Texto da postagem · ${c.texto.length} caracteres</span><button class="copiar" data-alvo="t${i}">Copiar texto</button></div>
<pre class="texto" id="t${i}">${esc(c.texto)}</pre>
</div>
</article>`;
  });
  const tabela = P.map((c, i) => `${i && P[i - 1].data < '2026-12-23' && c.data > '2027-01-02' ? '<tr class="pausa"><td class="num">23/12 a 02/01</td><td>-</td><td>Pausa, sem postagem no Google</td></tr>\n' : ''}<tr><td class="num">${c.dia}</td><td>${c.seg}</td><td><a href="#p${i + 1}">${esc(semTags(c.titulo))}</a></td></tr>`).join('\n');
  return modelo.replace('<!--TABELA-->', tabela).replace('<!--POSTS-->', cartoes.join('\n'));
}

(async () => {
  const problemas = conferir();
  fs.mkdirSync(SAIDA, { recursive: true });
  const filtro = process.argv[2];
  const b = await puppeteer.launch({ headless: 'new', args: ['--allow-file-access-from-files'] });
  const p = await b.newPage();
  await p.setViewport({ width: 1200, height: 900, deviceScaleFactor: 1 });
  for (const c of P.filter((x) => !filtro || x.id === filtro)) {
    const html = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600;700;800&display=swap" rel="stylesheet"><style>*{box-sizing:border-box}html,body{margin:0}${css}${AJUSTES}</style></head><body><div class="post" style="width:1200px">${peca(c)}</div></body></html>`;
    const tmp = path.join(require('os').tmpdir(), 'prosystem-google-pagina.html');
    fs.writeFileSync(tmp, html);
    await p.goto(url(tmp), { waitUntil: 'networkidle0', timeout: 90000 });
    await p.evaluate(() => document.fonts.ready);
    // Texto fora do quadrado central (150 a 1050 px) ou encostado no logo.
    const fora = await p.evaluate(() => {
      const r = [];
      const lg = document.querySelector('.lg').getBoundingClientRect();
      for (const e of document.querySelectorAll('.bloco h2,.bloco p,.bloco span')) {
        const q = e.getBoundingClientRect();
        if (q.left < 150 || q.right > 1050 || q.bottom > 880) r.push('fora do quadrado central: ' + e.textContent.slice(0, 40));
        if (q.top < lg.bottom + 40) r.push('perto do logo: ' + e.textContent.slice(0, 40));
      }
      return r;
    });
    fora.forEach((f) => problemas.push(`${c.id}: ${f}`));
    await p.screenshot({ path: path.join(SAIDA, arquivo(c)), type: 'jpeg', quality: 90, clip: { x: 0, y: 0, width: 1200, height: 900 } });
    fs.rmSync(tmp, { force: true });
  }
  await b.close();
  if (!filtro) {
    fs.writeFileSync(path.join(AQUI, 'GUIA.md'), guiaMd());
    fs.writeFileSync(path.join(AQUI, 'guia.html'), guiaHtml());
  }
  console.log(problemas.length ? problemas.join('\n') : 'sem problema');
  console.log('posts:', P.length);
})();
