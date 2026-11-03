// Gera o carrossel de como chamar o suporte, modelo V2, 1080×1350, em PNG.
// Assunto pedido pela Jessica a partir de um post de referência. Texto e layout são nossos.
// Suporte: das 7h às 22h, inclusive sábado e domingo. Nunca escrever "24 horas".
// Uso: node outputs/criativos/suporte/gerar.js
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const AQUI = __dirname;
const LOGOS = '../../../docs/design/guia-de-estilos/assets';
const FOTOS = '../modelos/carrossel/fotos';
const SITE = 'prosystemnet.com.br';

const c = {
  id: 'carrossel-farmacia-suporte-v4',
  tema: 'azul',
  capa: { titulo: 'Travou na farmácia? <b>Chame o suporte assim.</b>', apoio: '3 passos para resolver mais rápido', foto: 'L:teclado-azul' },
  itens: [
    { n: 1, titulo: 'Chame o suporte no <b>WhatsApp.</b>', apoio: 'Diga <b>de qual loja</b> você fala e qual computador está com problema.', foto: 'L:prateleiras-recorte' },
    { n: 2, titulo: 'Conte <b>o problema</b> do seu jeito.', apoio: 'Pode ser por <b>áudio, texto ou print da tela.</b>', foto: 'L:maos-digitando' },
    { n: 3, titulo: 'Deixe o <b>acesso remoto</b> pronto.', apoio: 'Abra o programa e passe ao técnico o número de <b>“Este Dispositivo”.</b>', foto: 'L:maos-teclado-mesa' },
  ],
  sol: { titulo: 'Do outro lado, gente que conhece o sistema', apoio: 'Suporte humanizado, das 7h às 22h, inclusive sábado e domingo.', foto: 'L:atendente-suporte-homem', pos: '45% 50%' },
  fim: { titulo: 'Mostre este passo a passo para <b>sua equipe.</b>', foto: 'cartelas-azuis' },
};

const CSS = `
*{margin:0;padding:0;box-sizing:border-box}
body{background:#8a93a3;font-family:'Montserrat',Arial,sans-serif}
.pg{width:1080px;height:1350px;position:relative;overflow:hidden;margin:0 0 30px;background:#fff}
.azul{--escuro:#2E6DB4;--tinta:#081330;--sombra:8,19,48;--marca:46,109,180;--realce:#38C8F8;--grad:linear-gradient(155deg,#2E6DB4 0%,#417ABC 48%,#3898D8 78%,#38C8F8 100%);--pil:#F88818;--piltx:#081330}
.forte{background:var(--grad);color:#fff}
.logo{position:absolute;top:70px;left:50%;transform:translateX(-50%);width:324px;height:auto;z-index:5}
.cheia{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.topo-sombra{position:absolute;left:0;right:0;top:0;height:300px;background:linear-gradient(180deg,rgba(var(--sombra),.72),rgba(var(--sombra),0));z-index:2}
.pil{display:inline-block;padding:20px 46px;border-radius:99px;font-size:34px;font-weight:800;background:var(--pil);color:var(--piltx)}
.pil.contorno{background:transparent;border:3px solid #fff;color:#fff;font-weight:700}
.faixa{padding:28px 38px;border-radius:22px;background:var(--escuro);color:#fff;font-size:37px;line-height:1.28;font-weight:500;text-wrap:balance;text-align:center}
.faixa b{font-weight:800}
.num{position:absolute;bottom:34px;left:0;right:0;text-align:center;font-size:24px;font-weight:700;letter-spacing:.08em;color:var(--tinta);opacity:.7;z-index:4}
.sobre .num{color:#fff;opacity:.85}
.provas{display:flex;align-items:stretch;gap:44px;justify-content:center}
.provas div{display:flex;flex-direction:column;gap:6px;text-align:center}
.provas strong{font-size:72px;line-height:1;font-weight:800}
.provas span{font-size:29px;font-weight:500}
.provas i{width:3px;background:rgba(255,255,255,.7)}
.site{font-size:32px;font-weight:700}
.los{position:absolute;width:300px;height:300px;transform:rotate(45deg);border-radius:46px;border:4px solid rgba(255,255,255,.75);z-index:3}
.v2-cap-grad{position:absolute;inset:0;background:linear-gradient(180deg,rgba(var(--marca),0) 30%,rgba(var(--marca),.9) 62%,rgba(var(--marca),1) 100%);z-index:2}
.v2-cap{position:absolute;left:80px;right:80px;bottom:110px;z-index:4;color:#fff;display:flex;flex-direction:column;gap:36px;align-items:flex-start}
.v2-cap h2{font-size:104px;line-height:1.03;font-weight:300;letter-spacing:-.025em;text-wrap:balance}
.v2-cap h2 b{font-weight:800}
.v2-cap p{font-size:44px;font-weight:600}
.v2-foto{position:absolute;left:0;top:0;width:100%;height:700px;object-fit:cover;border-radius:0 0 70px 70px}
.v2-sel{position:absolute;left:50%;top:620px;transform:translateX(-50%) rotate(45deg);width:130px;height:130px;border-radius:30px;background:var(--grad);z-index:4;display:flex;align-items:center;justify-content:center}
.v2-sel span{transform:rotate(-45deg);color:#fff;font-size:76px;font-weight:800}
.v2-txt{position:absolute;left:76px;right:76px;top:790px;bottom:82px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:30px;text-align:center}
.v2-txt h2{font-size:74px;line-height:1.08;font-weight:300;letter-spacing:-.015em;color:var(--escuro);text-wrap:balance}
.v2-txt h2 b{font-weight:800}
.v2-painel{position:absolute;left:70px;right:70px;bottom:100px;padding:64px 50px;border-radius:30px;background:rgba(var(--marca),.95);color:#fff;text-align:center;display:flex;flex-direction:column;gap:24px;z-index:4}
.v2-painel h2{font-size:78px;line-height:1.05;font-weight:800;letter-spacing:-.02em;text-wrap:balance}
.v2-painel p{font-size:40px;line-height:1.3;font-weight:500;text-wrap:balance}
.v2-fim-foto{position:absolute;left:0;top:0;width:100%;height:560px;object-fit:cover;border-radius:0 0 70px 70px}
.v2-fim{position:absolute;left:70px;right:70px;top:590px;bottom:60px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:36px;color:#fff}
.v2-fim h2{font-size:84px;line-height:1.05;font-weight:300;letter-spacing:-.02em;text-wrap:balance}
.v2-fim h2 b{font-weight:800}
`;

// Prefixo L: foto desta pasta, com créditos em fotos/CREDITOS.md.
const foto = (n) => (n.startsWith('L:') ? `fotos/${n.slice(2)}.jpg` : `${FOTOS}/${n}.jpg`);
const claro = `<img class="logo" src="${LOGOS}/logo-light.png" alt="ProSystem">`;
const provas = '<div class="provas"><div><strong>+600</strong><span>clientes</span></div><i></i><div><strong>+16</strong><span>anos de experiência</span></div></div>';
const num = (i) => `<div class="num">${i} / 6</div>`;
const pg = (i, cls, html) => `<section class="pg ${cls}" data-nome="${c.id}-${i}">${html}</section>`;

const paginas = [
  pg(1, 'sobre', `<img class="cheia" src="${foto(c.capa.foto)}" alt=""><div class="topo-sombra"></div><div class="v2-cap-grad"></div>${claro}<i class="los" style="left:930px;top:30px"></i><div class="v2-cap"><h2>${c.capa.titulo}</h2><p>${c.capa.apoio}</p><span class="pil contorno">Arraste para o lado →</span></div>`),
  ...c.itens.map((it, k) => pg(k + 2, '', `<img class="v2-foto" src="${foto(it.foto)}" alt=""><div class="topo-sombra"></div>${claro}<div class="v2-sel"><span>${it.n}</span></div><div class="v2-txt"><h2>${it.titulo}</h2><p class="faixa">${it.apoio}</p></div>${num(k + 2)}`)),
  pg(5, 'sobre', `<img class="cheia" src="${foto(c.sol.foto)}" alt="" style="object-position:${c.sol.pos}"><div class="topo-sombra"></div>${claro}<div class="v2-painel"><h2>${c.sol.titulo}</h2><p>${c.sol.apoio}</p></div>${num(5)}`),
  pg(6, 'forte', `<img class="v2-fim-foto" src="${foto(c.fim.foto)}" alt=""><div class="topo-sombra"></div>${claro}<div class="v2-fim"><h2>${c.fim.titulo}</h2>${provas}<span class="pil">Salve este post</span><div class="site">${SITE}</div></div>`),
];

const html = `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><title>Carrossel do suporte</title>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600;700;800&display=swap" rel="stylesheet"><style>${CSS}</style></head><body><div class="${c.tema}">
${paginas.join('\n')}
</div></body></html>`;

(async () => {
  const arquivo = path.join(AQUI, 'pecas.html');
  fs.writeFileSync(arquivo, html);
  const b = await puppeteer.launch({ headless: 'new', args: ['--allow-file-access-from-files'] });
  const p = await b.newPage();
  await p.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 1 });
  await p.goto('file:///' + arquivo.split(path.sep).join('/'), { waitUntil: 'networkidle0', timeout: 90000 });
  await p.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 800));
  for (const el of await p.$$('.pg')) {
    const nome = await el.evaluate((e) => e.dataset.nome);
    await el.screenshot({ path: path.join(AQUI, nome + '.png') });
  }
  const estouros = await p.$$eval('.v2-txt,.v2-fim', (els) => els.filter((e) => e.scrollHeight > e.clientHeight + 1).map((e) => e.closest('.pg').dataset.nome));
  console.log(estouros.length ? 'ESTOURO: ' + estouros.join(', ') : 'sem estouro');
  await b.close();
  console.log('ok');
})();
