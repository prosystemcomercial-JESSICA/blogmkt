// Stories das ferramentas novas (04/11/2026): recarga online, orçamento pelo WhatsApp e balanço com a loja aberta.
// 1080×1920, estilos do feed simulado (como ../farmacia-supermercado/gerar-stories.js). A Jessica põe a figurinha de link
// "Fale com a ProSystem" no espaço livre abaixo da pílula (de 1300 a 1580px). Sem celular e sem tela do sistema nas imagens.
// Zonas seguras: nada importante nos 250px do alto nem nos 340px de baixo.
// Uso: node outputs/criativos/ferramentas-novas/gerar-stories.js
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const AQUI = __dirname;
const RAIZ = path.join(AQUI, '..', '..', '..');
const SAIDA = path.join(AQUI, 'stories');
const PASTAS = [path.join(AQUI, 'fotos'), ...['farmacia-supermercado/fotos', 'nov-dez/fotos', 'modelos/carrossel/fotos', 'suporte/fotos'].map((d) => path.join(AQUI, '..', d))];
const LOGOS = path.join(RAIZ, 'docs/design/guia-de-estilos/assets');
const url = (p) => 'file:///' + p.split(path.sep).join('/').replace(/ /g, '%20');
function img(n) {
  for (const d of PASTAS) { const f = path.join(d, n + '.jpg'); if (fs.existsSync(f)) return url(f); }
  throw new Error('foto não encontrada: ' + n);
}

const css = fs.readFileSync(path.join(RAIZ, 'docs/conteudo-prosystem/feed_modelo.html'), 'utf8')
  .split('/* Peças */')[1].split('</style>')[0]
  .replace(/(?<![\w#.$-])(-?\d+(?:\.\d+)?)U\b/g, 'calc($1*var(--u))');
const STORY = `
.post{aspect-ratio:9/16;width:1080px;container-type:inline-size;position:relative;overflow:hidden}
.p h2{margin:0;font-weight:300;line-height:1.06;text-wrap:balance}
.p h2 b{font-weight:800}
.lg{top:260px}
.bloco{position:absolute;left:90px;right:90px;top:430px;bottom:760px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:44px;text-align:center;z-index:6}
.bloco p{margin:0}
.rodape{position:absolute;left:0;right:0;bottom:640px;text-align:center;z-index:7}
.selo{display:inline-block;padding:12px 30px;border-radius:99px;font-size:30px;font-weight:700;letter-spacing:.06em;text-transform:uppercase}
.bra .selo{background:var(--esc);color:#fff}
.forte .selo,.sob .selo{background:#fff;color:var(--esc)}
.bra h2{font-size:112px;color:var(--esc)}
.bra .apoio{font-size:42px;line-height:1.25;color:var(--tin)}
.forte h2,.sob h2{font-size:96px;color:#fff}
.cart{position:absolute;left:170px;width:740px;height:360px;object-fit:cover;border-radius:34px;box-shadow:0 26px 50px rgba(var(--sb),.45);z-index:4;max-width:none}
.atr{position:absolute;left:170px;width:740px;height:360px;border-radius:34px;background:rgba(255,255,255,.25);z-index:3}
.cheia{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:1}
`;

const logo = (e) => `<img class="lg" src="${url(path.join(LOGOS, e ? 'logo-dark.png' : 'logo-light.png'))}" alt="">`;
// Losangos nos cantos, longe do logo e do texto.
const lo = (b) => `<i class="g" style="width:340px;height:340px;top:-170px;left:-140px"></i><i class="gf" style="width:240px;height:240px;top:-100px;right:-80px"></i><i class="g ${b ? 'b' : ''}" style="width:360px;height:360px;bottom:-190px;right:-110px"></i><i class="g ${b ? 'b' : ''}" style="width:260px;height:260px;bottom:-140px;left:-80px"></i>`;
const pg = (cl, corpo, tema = 'azul') => `<div class="p ${tema} ${cl}">${corpo}</div>`;
const pilula = (cl) => `<div class="rodape"><span class="pl ${cl}">Toque no link e fale com a gente ↓</span></div>`;

const STORIES = [
  { id: 'story-recarga-online-v1', html: pg('bra', `${lo(1)}${logo(1)}<div class="bloco"><span class="selo">Ferramenta Prosystem</span><h2>Recarga online <b>no seu caixa.</b></h2><p class="apoio">Quem entra para recarregar o celular sai com mais uma compra.</p></div>${pilula('oe')}`) },
  { id: 'story-orcamento-whatsapp-v1', html: pg('forte', `${lo()}${logo()}<div class="atr" style="top:420px;transform:rotate(4deg)"></div><img class="cart" src="${img('maos-digitando')}" alt="" style="top:420px;transform:rotate(-3deg)"><div class="bloco" style="top:820px;bottom:740px;gap:30px"><h2 style="font-size:68px">Orçamento pelo WhatsApp <b>em um clique.</b></h2><p class="fx">Monte a venda no caixa, copie o texto pronto e envie.</p></div>${pilula('')}`) },
  { id: 'story-padaria-balanco-loja-aberta-v1', html: pg('sob', `<img class="cheia" src="${img('paes-assadeira')}" alt=""><div class="tint"></div>${logo()}<div class="bloco"><span class="selo">Ferramenta Prosystem</span><h2>Balanço <b>com a padaria aberta.</b></h2><p class="fx">Conte o estoque sem coletor e sem parar o caixa.</p></div>${pilula('')}`, 'lar') },
];

(async () => {
  fs.mkdirSync(SAIDA, { recursive: true });
  const b = await puppeteer.launch({ headless: 'new', args: ['--allow-file-access-from-files'] });
  const p = await b.newPage();
  await p.setViewport({ width: 1080, height: 1920, deviceScaleFactor: 1 });
  const problemas = [];
  for (const s of STORIES) {
    const html = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600;700;800&display=swap" rel="stylesheet"><style>*{box-sizing:border-box}html,body{margin:0}${css}${STORY}</style></head><body><div class="post">${s.html}</div></body></html>`;
    const tmp = path.join(require('os').tmpdir(), 'prosystem-story.html');
    fs.writeFileSync(tmp, html);
    await p.goto(url(tmp), { waitUntil: 'networkidle0', timeout: 90000 });
    await p.evaluate(() => document.fonts.ready);
    // Texto fora da zona segura ou bloco estourado.
    const fora = await p.evaluate(() => {
      const r = [];
      for (const e of document.querySelectorAll('h2,p,.pl,.selo')) {
        const q = e.getBoundingClientRect();
        if (q.left < 60 || q.right > 1020 || q.top < 250 || q.bottom > 1580) r.push('fora da zona segura: ' + e.textContent.slice(0, 40));
      }
      for (const e of document.querySelectorAll('.bloco')) if (e.scrollHeight > e.clientHeight + 2) r.push(`estouro: ${e.scrollHeight} > ${e.clientHeight}`);
      return r;
    });
    fora.forEach((f) => problemas.push(`${s.id}: ${f}`));
    await p.screenshot({ path: path.join(SAIDA, s.id + '.png'), clip: { x: 0, y: 0, width: 1080, height: 1920 } });
    fs.rmSync(tmp, { force: true });
  }
  await b.close();
  console.log(problemas.length ? problemas.join('\n') : 'sem estouro');
})();
