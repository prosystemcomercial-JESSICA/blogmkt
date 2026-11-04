// Stories do Instagram com o visual das postagens do Google (foto cheia, degradê azul ou laranja, título e pílula).
// Pedido da Jessica em 04/11/2026: "gostei bastante daqueles posts", aproveitar no Instagram. O feed já tem um post
// por dia; os stories saem às 17h no mesmo dia do post do Google, para os dois canais falarem do mesmo assunto.
// A pausa de 23/12 a 02/01 segue a do feed: só Natal (25/12) e Feliz 2027 (31/12).
// Formato 1080×1920, JPG. Zonas seguras: nada nos 250 px do alto nem nos 340 px de baixo.
// A API não põe figurinha de link: onde o Google manda para o blog, a pílula diz "link na bio".
// Uso (na raiz): node outputs/criativos/google-nov-jan/stories.js [id] [--agenda]
//   --agenda grava as entradas em instagram/agenda.json (só as que ainda não estão lá) e copia as imagens.
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const { P: JA } = require('./dados.js');
const { N } = require('./dados-novos.js');

const AQUI = __dirname;
const RAIZ = path.join(AQUI, '..', '..', '..');
const SAIDA = path.join(AQUI, 'stories');
const MIDIA = path.join(RAIZ, 'instagram', 'midia', 'stories-google');
const AGENDA = path.join(RAIZ, 'instagram', 'agenda.json');
const url = (p) => 'file:///' + p.split(path.sep).join('/').replace(/ /g, '%20');

const FORA = ['suporte-sistema-fim-de-ano', 'biometria-login-farmacia', 'planejamento-2027-padaria']; // dentro da pausa
const PILULA = { 'Leia no blog': 'Leia no blog · link na bio', 'Avalie aqui no Google': 'Procure ProSystem no Google' };
const SELO = { 'Farmácia': 'Farmácia', 'Padaria': 'Padaria', 'Os dois': 'Farmácia e padaria' };
const S = [...JA, ...N].filter((c) => !FORA.includes(c.id)).sort((a, b) => a.data.localeCompare(b.data));

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
// A unidade é 1/1080 da largura: a peça tem 1080 × 1920 unidades.
const AJUSTES = `
.post{aspect-ratio:9/16}
.tom{position:absolute;inset:0;z-index:2;background:linear-gradient(180deg,rgba(var(--sb),.75) 0%,rgba(var(--sb),.1) 16%,rgba(var(--mar),.15) 40%,rgba(var(--mar),.88) 58%,rgba(var(--mar),.97) 72%,rgba(var(--mar),1) 100%)}
.lg{top:${px(270)};width:${px(330)}}
.bloco{position:absolute;left:${px(90)};right:${px(90)};bottom:${px(380)};z-index:7;display:flex;flex-direction:column;align-items:center;gap:${px(40)};text-align:center}
.selo{font-size:${px(32)};font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#fff;padding:${px(12)} ${px(30)};border:${px(2)} solid rgba(255,255,255,.7);border-radius:${px(40)}}
.bloco h2{font-size:${px(100)};line-height:1.04}
.bloco .fx{font-size:${px(40)};padding:${px(24)} ${px(40)}}
.bloco .pl{font-size:${px(38)};padding:${px(22)} ${px(52)}}
`;

function peca(c) {
  const base = `inset:0;width:100%;height:74%;object-position:${c.posicao}`;
  const tudo = typeof c.desfoque === 'number' ? `;filter:blur(${c.desfoque}px);transform:scale(1.04)` : '';
  const regiao = Array.isArray(c.desfoque) ? `<img class="ft" src="${img(c.foto)}" alt="" style="${base};z-index:1;filter:blur(9px);-webkit-mask-image:radial-gradient(circle ${c.desfoque[2] * 1.6}px at ${c.desfoque[0]}% ${c.desfoque[1]}%,#000 60%,transparent 100%)">` : '';
  return `<div class="p ${c.tema} sob">
<img class="ft" src="${img(c.foto)}" alt="" style="${base}${tudo}">${regiao}
<div class="tom"></div>
<i class="g" style="width:${px(340)};height:${px(340)};top:${px(-170)};left:${px(-140)};z-index:3"></i>
<i class="gf" style="width:${px(240)};height:${px(240)};top:${px(-100)};right:${px(-80)};z-index:3"></i>
<i class="g" style="width:${px(360)};height:${px(360)};bottom:${px(-190)};right:${px(-110)};z-index:3"></i>
<i class="g" style="width:${px(260)};height:${px(260)};bottom:${px(-140)};left:${px(-80)};z-index:3"></i>
<img class="lg" src="${LOGO}" alt="">
<div class="bloco"><span class="selo">${SELO[c.seg]}</span><h2>${c.titulo}</h2><p class="fx">${c.faixa}</p><span class="pl">${PILULA[c.pilula] || c.pilula}</span></div>
</div>`;
}
const arquivo = (c) => `story-${c.data}-${c.id}.jpg`;

(async () => {
  const args = process.argv.slice(2);
  const filtro = args.find((a) => !a.startsWith('--'));
  const problemas = [];
  fs.mkdirSync(SAIDA, { recursive: true });
  const b = await puppeteer.launch({ headless: 'new', args: ['--allow-file-access-from-files'] });
  const p = await b.newPage();
  await p.setViewport({ width: 1080, height: 1920, deviceScaleFactor: 1 });
  for (const c of filtro ? S.filter((x) => x.id === filtro) : S) {
    const html = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600;700;800&display=swap" rel="stylesheet"><style>*{box-sizing:border-box}html,body{margin:0}${css}${AJUSTES}</style></head><body><div class="post" style="width:1080px">${peca(c)}</div></body></html>`;
    const tmp = path.join(require('os').tmpdir(), 'prosystem-story-google.html');
    fs.writeFileSync(tmp, html);
    await p.goto(url(tmp), { waitUntil: 'networkidle0', timeout: 90000 });
    await p.evaluate(() => document.fonts.ready);
    const fora = await p.evaluate(() => {
      const r = [];
      const lg = document.querySelector('.lg').getBoundingClientRect();
      for (const e of document.querySelectorAll('.bloco > *')) {
        const q = e.getBoundingClientRect();
        if (q.left < 60 || q.right > 1020 || q.bottom > 1580 || q.top < 250) r.push('fora da zona segura: ' + e.textContent.slice(0, 40));
        if (q.top < lg.bottom + 40) r.push('perto do logo: ' + e.textContent.slice(0, 40));
      }
      return r;
    });
    fora.forEach((f) => problemas.push(`${c.id}: ${f}`));
    await p.screenshot({ path: path.join(SAIDA, arquivo(c)), type: 'jpeg', quality: 90, clip: { x: 0, y: 0, width: 1080, height: 1920 } });
    fs.rmSync(tmp, { force: true });
  }
  await b.close();

  if (args.includes('--agenda')) {
    fs.mkdirSync(MIDIA, { recursive: true });
    const agenda = JSON.parse(fs.readFileSync(AGENDA, 'utf8'));
    const ja = new Set(agenda.map((x) => x.id));
    let n = 0;
    for (const c of S) {
      const id = `story-google-${c.id}`;
      fs.copyFileSync(path.join(SAIDA, arquivo(c)), path.join(MIDIA, arquivo(c)));
      if (ja.has(id)) continue;
      agenda.push({ id, quando: `${c.data}T17:00:00-03:00`, tipo: 'stories', status: 'agendado',
        nota: `Story no visual do Google, mesmo tema da postagem do Google de ${c.dia}.`, midias: [`instagram/midia/stories-google/${arquivo(c)}`] });
      n++;
    }
    agenda.sort((x, y) => x.quando.localeCompare(y.quando));
    fs.writeFileSync(AGENDA, JSON.stringify(agenda, null, 2) + '\n');
    console.log(`agenda: ${n} stories novos`);
  }
  console.log(problemas.length ? problemas.join('\n') : 'sem problema');
  console.log('stories:', (filtro ? S.filter((x) => x.id === filtro) : S).length);
})();
