// Gera os modelos de carrossel (1080×1350) em HTML e exporta cada página em PNG.
// Uso: node outputs/criativos/modelos/carrossel/gerar.js
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const AQUI = __dirname;
const GUIA = '../../../../docs/design/guia-de-estilos/assets';
const NOME_HTML = 'modelos-carrossel-v1.html';

const carrosseis = [
  {
    id: 'carrossel-farmacia-estoque-v1',
    tema: 'azul',
    paginas: [
      { tipo: 'capa', grande: '3 sinais', resto: 'de que o estoque está custando caro', pilula: 'Arraste para o lado →' },
      { tipo: 'item', n: 1, titulo: 'Você só descobre o <b>vencido</b> quando ele já venceu.', apoio: 'Controlar por lote e validade deixa a perda visível <b>antes</b> de acontecer.' },
      { tipo: 'item', n: 2, titulo: 'Falta o que <b>mais vende</b> e sobra o que ninguém procura.', apoio: 'Comprar sem olhar o giro deixa <b>dinheiro parado</b> na prateleira.' },
      { tipo: 'item', n: 3, titulo: 'O sistema diz uma coisa e a <b>prateleira</b> diz outra.', apoio: 'Divergência sem explicação costuma ser <b>perda</b> que ninguém registrou.' },
      { tipo: 'foto', img: 'prateleiras.jpg', titulo: 'Estoque por produto, lote e validade', apoio: 'Menos perdas, rupturas e excesso de mercadoria.' },
      { tipo: 'fim', titulo: 'Quer ver isso na <b>sua farmácia?</b>', pilula: 'Fale com um especialista' },
    ],
  },
  {
    id: 'carrossel-padaria-ficha-tecnica-v1',
    tema: 'laranja',
    paginas: [
      { tipo: 'capa', grande: '3 erros', resto: 'na ficha técnica que comem sua margem', pilula: 'Arraste para o lado →' },
      { tipo: 'item', n: 1, titulo: 'Contar só a receita e esquecer a <b>perda.</b>', apoio: 'Massa que fica na máquina e pão que sai torto também entram no <b>custo.</b>' },
      { tipo: 'item', n: 2, titulo: 'Usar o preço do insumo de <b>meses atrás.</b>', apoio: 'A farinha mudou de preço. A ficha precisa <b>mudar junto.</b>' },
      { tipo: 'item', n: 3, titulo: 'Deixar embalagem, gás e mão de obra <b>de fora.</b>', apoio: 'O que não entra na conta <b>sai do seu lucro.</b>' },
      { tipo: 'foto', img: 'padeiro.jpg', titulo: 'Produção, vendas e estoque em um só sistema', apoio: 'Menos perdas e margens melhores.' },
      { tipo: 'fim', titulo: 'Quer saber quanto sobra em <b>cada fornada?</b>', pilula: 'Fale com um especialista' },
    ],
  },
];

const CSS = `
*{margin:0;padding:0;box-sizing:border-box}
body{background:#8a93a3;font-family:'Montserrat',Arial,sans-serif}
.pg{width:1080px;height:1350px;position:relative;overflow:hidden;margin:0 0 30px}
.azul .forte{background:linear-gradient(155deg,#2E6DB4 0%,#417ABC 48%,#3898D8 78%,#38C8F8 100%);color:#fff}
.laranja .forte{background:linear-gradient(155deg,#B83C0A 0%,#D9500B 50%,#F07A12 85%,#F88818 100%);color:#fff}
.claro{background:#fff}
.azul .claro{color:#081330;--destaque:#2E6DB4;--linha:#38C8F8;--linha2:#417ABC}
.laranja .claro{color:#2B1408;--destaque:#C2410C;--linha:#F88818;--linha2:#C2410C}
.forte{--linha:rgba(255,255,255,.72);--linha2:rgba(255,255,255,.72)}
.los{position:absolute;width:300px;height:300px;transform:rotate(45deg);border-radius:46px;border:4px solid var(--linha)}
.los.b{border-color:var(--linha2)}
.los.cheio{border:0;background:linear-gradient(135deg,rgba(56,200,248,.95),rgba(65,122,188,.55))}
.laranja .los.cheio{background:linear-gradient(135deg,rgba(255,190,120,.8),rgba(234,88,12,.4))}
.logo{position:absolute;top:70px;left:50%;transform:translateX(-50%);width:324px;height:auto}
.num{position:absolute;bottom:62px;left:0;right:0;text-align:center;font-size:26px;font-weight:700;letter-spacing:.08em;opacity:.75}
.meio{position:absolute;left:96px;right:96px;top:230px;bottom:130px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:40px}
.grande{font-size:172px;line-height:1;font-weight:800;letter-spacing:-.03em}
.resto{font-size:84px;line-height:1.1;font-weight:300;letter-spacing:-.015em;text-wrap:balance}
.pil{display:inline-block;padding:20px 46px;border-radius:99px;font-size:34px;font-weight:800}
.azul .pil{background:#F88818;color:#081330}
.laranja .pil{background:#fff;color:#B83C0A}
.pil.contorno{background:transparent!important;border:3px solid #fff;color:#fff!important;font-weight:700}
.numero{font-size:210px;line-height:.85;font-weight:800;color:var(--destaque)}
.tit{font-size:86px;line-height:1.08;font-weight:300;letter-spacing:-.015em;color:var(--destaque);text-wrap:balance}
.tit b{font-weight:800}
.faixa{padding:32px 42px;border-radius:22px;color:#fff;font-size:40px;line-height:1.3;font-weight:500;text-wrap:balance}
.faixa b{font-weight:800}
.azul .faixa{background:#2E6DB4}
.laranja .faixa{background:#C2410C}
.fundo{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:blur(3px) saturate(.9);transform:scale(1.04)}
.azul .fundo{opacity:.42;mix-blend-mode:luminosity}
.cartao{width:100%;height:470px;object-fit:cover;border-radius:30px;display:block}
.painel{width:100%;padding:70px 50px;border-radius:30px;display:flex;flex-direction:column;gap:30px;align-items:center}
.azul .painel{background:rgba(36,86,150,.93)}
.tit-f{font-size:82px;line-height:1.06;font-weight:800;letter-spacing:-.02em;text-wrap:balance}
.apoio-f{font-size:42px;line-height:1.3;font-weight:500;text-wrap:balance}
.tit-fim{font-size:104px;line-height:1.05;font-weight:300;letter-spacing:-.02em;text-wrap:balance}
.tit-fim b{font-weight:800}
.provas{display:flex;align-items:stretch;gap:44px}
.provas div{display:flex;flex-direction:column;gap:6px}
.provas strong{font-size:76px;line-height:1;font-weight:800}
.provas span{font-size:30px;font-weight:500}
.provas i{width:3px;background:rgba(255,255,255,.7)}
.site{font-size:34px;font-weight:700}
`;

// Losangos que atravessam a divisa entre uma página e a seguinte.
// Ficam no alto ou embaixo, sempre fora da área de texto.
const alturas = [50, 1050, 30, 1070, 50];
const divisa = (i) => `<i class="los${i % 2 ? ' b' : ''}" style="left:930px;top:${alturas[i]}px"></i>`;
const entrada = (i) => `<i class="los${i % 2 ? ' b' : ''}" style="left:-150px;top:${alturas[i]}px"></i>`;

function corpo(p, total, idx) {
  if (p.tipo === 'capa') return `<div class="meio"><div class="grande">${p.grande}</div><div class="resto">${p.resto}</div><span class="pil contorno">${p.pilula}</span></div>`;
  if (p.tipo === 'item') return `<div class="meio"><div class="numero">${p.n}</div><h2 class="tit">${p.titulo}</h2><p class="faixa">${p.apoio}</p></div><div class="num">${idx + 1} / ${total}</div>`;
  if (p.tipo === 'foto') {
    if (p.img === 'padeiro.jpg') return `<div class="meio"><img class="cartao" src="${GUIA}/${p.img}" alt="Padeiro com pães"><h2 class="tit-f">${p.titulo}</h2><p class="apoio-f">${p.apoio}</p></div><div class="num">${idx + 1} / ${total}</div>`;
    return `<div class="meio"><div class="painel"><h2 class="tit-f">${p.titulo}</h2><p class="apoio-f">${p.apoio}</p></div></div><div class="num">${idx + 1} / ${total}</div>`;
  }
  return `<div class="meio"><h2 class="tit-fim">${p.titulo}</h2><div class="provas"><div><strong>+600</strong><span>clientes</span></div><i></i><div><strong>+16</strong><span>anos de experiência</span></div></div><span class="pil">${p.pilula}</span><div class="site">prosystemnet.com.br</div></div>`;
}

function pagina(c, p, i) {
  const n = c.paginas.length;
  const clara = p.tipo === 'item';
  const logo = clara ? 'logo-dark.png' : 'logo-light.png';
  const foto = p.tipo === 'foto' && p.img !== 'padeiro.jpg' ? `<img class="fundo" src="${GUIA}/${p.img}" alt="">` : '';
  const formas = (i > 0 ? entrada(i - 1) : '<i class="los" style="left:-150px;top:-150px"></i>') + (i < n - 1 ? divisa(i) : '<i class="los" style="left:930px;top:1050px"></i>');
  const cheio = i % 2 === 0 ? '<i class="los cheio" style="width:240px;height:240px;right:-100px;bottom:-110px"></i>' : '<i class="los cheio" style="width:220px;height:220px;right:-90px;top:-100px"></i>';
  return `<section class="pg ${clara ? 'claro' : 'forte'}" data-nome="${c.id}-${i + 1}">${foto}${formas}${cheio}<img class="logo" src="${GUIA}/${logo}" alt="ProSystem">${corpo(p, n, i)}</section>`;
}

const html = `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><title>Modelos de carrossel</title>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700;800&display=swap" rel="stylesheet"><style>${CSS}</style></head><body>
${carrosseis.map((c) => `<div class="${c.tema}">${c.paginas.map((p, i) => pagina(c, p, i)).join('\n')}</div>`).join('\n')}
</body></html>`;

(async () => {
  const arquivo = path.join(AQUI, NOME_HTML);
  fs.writeFileSync(arquivo, html);
  const b = await puppeteer.launch({ headless: 'new', args: ['--allow-file-access-from-files'] });
  const p = await b.newPage();
  await p.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 1 });
  await p.goto('file:///' + arquivo.split(path.sep).join('/'), { waitUntil: 'networkidle0' });
  await p.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 800));
  for (const el of await p.$$('.pg')) {
    const nome = await el.evaluate((e) => e.dataset.nome);
    await el.screenshot({ path: path.join(AQUI, nome + '.png') });
    console.log(nome);
  }
  await b.close();
})();
