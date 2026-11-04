// Carrossel V4: instrução (04/11/2026). Adaptação do formato do post de instrução do @rotaconsultoria
// (https://www.instagram.com/p/DfGsQ09AD2c/) às regras do caderno de marca:
// - voz de especialista falando direto com o dono ("Se eu fosse você...", "Eu pararia aqui");
// - foto cheia escurecida pelo degradê do segmento, texto no pé, na parte mais escura;
// - tarjas no lugar das tarjas amarelas da referência: laranja #F88818 na farmácia, branca na padaria (amarelo é proibido);
// - só Montserrat (a referência usa fonte condensada), losangos de contorno nos cantos e logo no alto.
// Sequência de 6 páginas: capa, cena (as desculpas), 3 passos e solução com chamada. Não se mistura com V2 e V3.
// Uso: node outputs/criativos/modelos/instrucao/gerar.js
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const AQUI = __dirname;
const url = (p) => 'file:///' + p.split(path.sep).join('/').replace(/ /g, '%20');
const RAIZ = path.join(AQUI, '..', '..', '..', '..');
const LOGO = url(path.join(RAIZ, 'docs/design/guia-de-estilos/assets/logo-light.png'));
const SAIDA = path.join(AQUI, 'pecas');
const SITE = 'prosystemnet.com.br';
const PASTAS = ['nov-dez/fotos', 'modelos/carrossel/fotos', 'suporte/fotos', 'farmacia-supermercado/fotos'].map((d) => path.join(RAIZ, 'outputs/criativos', d));
function foto(n) {
  for (const d of PASTAS) { const f = path.join(d, n + '.jpg'); if (fs.existsSync(f)) return url(f); }
  throw new Error('foto não encontrada: ' + n);
}

const carrosseis = [
  { id: 'carrossel-instrucao-farmacia-estoque-v1', tema: 'azul',
    capa: { publico: 'Dono de farmácia...', titulo: 'Antes do próximo pedido, <span class="dest">olhe para essa prateleira.</span>', foto: 'prateleiras-escuras' },
    cena: { texto: 'Você tem estoque para semanas, mas continua comprando toda semana porque:', desculpas: ['“o representante deu prazo”', '“estava em oferta”', '“vai que falta”'], veredito: 'Eu pararia aqui.', foto: 'farmaceutico-conferindo' },
    passos: [
      { titulo: 'Liste o que está <b>parado há 60 dias.</b>', apoio: 'Produto sem giro é dinheiro preso na prateleira.', foto: 'cartelas-azuis' },
      { titulo: 'Compre pela <b>média de venda,</b> não pela oferta.', apoio: 'Estoque mínimo e máximo de cada item antes de fechar o pedido.', foto: 'conferindo-frasco-sem-rotulo' },
      { titulo: 'Proteja primeiro a <b>curva A.</b>', apoio: 'O que mais vende não pode faltar. O resto pode esperar.', foto: 'prateleiras-recorte' },
    ],
    fim: { titulo: 'O Prosystem <b>faz essa conta</b> para você.', apoio: 'Sugestão de compras com média de venda, curva ABC e dias sem giro na mesma tela.', foto: 'cartelas-detalhe' } },
  { id: 'carrossel-instrucao-padaria-preco-v1', tema: 'laranja',
    capa: { publico: 'Dono de padaria...', titulo: 'Antes de reajustar o preço, <span class="dest">faça esta conta.</span>', foto: 'pao-frances' },
    cena: { texto: 'Você aumenta o preço de tudo igual porque:', desculpas: ['“o trigo subiu”', '“o vizinho aumentou”', '“sempre fiz assim”'], veredito: 'Eu pararia aqui.', foto: 'forno' },
    passos: [
      { titulo: 'Descubra o <b>custo de cada produto.</b>', apoio: 'Farinha, gordura, embalagem e mão de obra na conta.', foto: 'sovando-massa' },
      { titulo: 'Veja quais dão <b>prejuízo.</b>', apoio: 'Tem produto que vende muito e não deixa nada no caixa.', foto: 'croissants-bandeja' },
      { titulo: 'Reajuste pelo custo, <b>não pelo vizinho.</b>', apoio: 'Cada produto com o preço que paga a produção.', foto: 'maos-massa' },
    ],
    fim: { titulo: 'O Prosystem <b>mostra o lucro</b> de cada pão.', apoio: 'Composição de custo, preço de venda e rentabilidade por produto.', foto: 'paes-assadeira' } },
];

const CSS = `
*{margin:0;padding:0;box-sizing:border-box}
body{background:#8a93a3;font-family:'Montserrat',Arial,sans-serif}
.pg{width:1080px;height:1350px;position:relative;overflow:hidden;margin:0 0 30px;color:#fff}
.azul{--fundo:12,34,86;--sombra:8,19,48;--faixa:#2E6DB4;--tarja:#F88818;--tarjatx:#081330;--ver:#F88818;--los:rgba(56,200,248,.8)}
.laranja{--fundo:92,30,6;--sombra:43,20,8;--faixa:#C2410C;--tarja:#fff;--tarjatx:#B83C0A;--ver:#fff;--los:rgba(248,136,24,.9)}
.cheia{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.tom{position:absolute;inset:0;background:linear-gradient(180deg,rgba(var(--sombra),.7) 0%,rgba(var(--sombra),.1) 20%,rgba(var(--fundo),.35) 38%,rgba(var(--fundo),.88) 58%,rgba(var(--fundo),.97) 78%,rgba(var(--fundo),1) 100%)}
.logo{position:absolute;top:70px;left:50%;transform:translateX(-50%);width:324px;z-index:5}
.los{position:absolute;transform:rotate(45deg);border-radius:46px;border:4px solid var(--los);z-index:3}
.txt{position:absolute;left:72px;right:72px;bottom:120px;z-index:4;display:flex;flex-direction:column;align-items:center;text-align:center;gap:26px}
.tarja{display:inline-block;background:var(--tarja);color:var(--tarjatx);font-weight:800;text-transform:uppercase;letter-spacing:-.01em;line-height:1.1;padding:12px 30px}
.publico{font-size:62px;white-space:nowrap}
.passo{font-size:40px;padding:10px 26px}
h2{font-size:78px;line-height:1.08;font-weight:300;letter-spacing:-.02em;text-wrap:balance;text-shadow:0 4px 24px rgba(0,0,0,.35)}
h2 b{font-weight:800}
.dest{font-weight:800;font-style:italic;color:var(--ver)}
.laranja .dest{color:#fff;text-decoration:underline;text-decoration-thickness:6px;text-underline-offset:12px}
.capa h2{font-size:88px}
.cena p{font-size:46px;line-height:1.25;font-weight:600;text-wrap:balance}
.desculpas{display:flex;flex-direction:column;align-items:center;gap:16px}
.desculpas span{font-size:48px;padding:10px 28px;text-transform:none}
.veredito{font-size:96px;font-weight:800;text-transform:uppercase;letter-spacing:-.02em;color:var(--ver);line-height:1}
.faixa{padding:24px 34px;border-radius:22px;background:var(--faixa);font-size:38px;line-height:1.28;font-weight:500;text-wrap:balance}
.pil{display:inline-block;padding:20px 46px;border-radius:99px;font-size:34px;font-weight:800;background:var(--tarja);color:var(--tarjatx)}
.pil.contorno{background:transparent;border:3px solid #fff;color:#fff;font-weight:700}
.provas{display:flex;align-items:stretch;gap:44px;justify-content:center}
.provas div{display:flex;flex-direction:column;gap:6px}
.provas strong{font-size:64px;line-height:1;font-weight:800}
.provas span{font-size:28px;font-weight:500}
.provas i{width:3px;background:rgba(255,255,255,.7)}
.site{font-size:30px;font-weight:700}
.num{position:absolute;bottom:40px;left:0;right:0;text-align:center;font-size:24px;font-weight:700;letter-spacing:.08em;opacity:.8;z-index:4}
`;

const los = '<i class="los" style="width:300px;height:300px;left:-170px;top:-150px"></i><i class="los" style="width:240px;height:240px;right:-150px;top:430px"></i>';
const pg = (c, i, cls, f, corpo, pos) => `<section class="pg ${c.tema} ${cls}" data-nome="${c.id}-${i}"><img class="cheia" src="${foto(f)}" alt="" style="object-position:${pos || '50% 35%'}"><div class="tom"></div>${los}<img class="logo" src="${LOGO}" alt="ProSystem"><div class="txt">${corpo}</div>${i > 1 ? `<div class="num">${i} / 6</div>` : ''}</section>`;

function paginas(c) {
  const out = [];
  out.push(pg(c, 1, 'capa', c.capa.foto, `<span class="tarja publico">${c.capa.publico}</span><h2>${c.capa.titulo}</h2><span class="pil contorno">Arraste para o lado →</span>`));
  out.push(pg(c, 2, 'cena', c.cena.foto, `<p>${c.cena.texto}</p><div class="desculpas">${c.cena.desculpas.map((d) => `<span class="tarja">${d}</span>`).join('')}</div><div class="veredito">${c.cena.veredito}</div>`));
  c.passos.forEach((p, k) => out.push(pg(c, k + 3, 'passo-pg', p.foto, `<span class="tarja passo">Passo ${k + 1}</span><h2>${p.titulo}</h2><p class="faixa">${p.apoio}</p>`)));
  out.push(pg(c, 6, 'fim', c.fim.foto, `<h2>${c.fim.titulo}</h2><p class="faixa">${c.fim.apoio}</p><div class="provas"><div><strong>+600</strong><span>clientes</span></div><i></i><div><strong>+16</strong><span>anos de experiência</span></div></div><span class="pil">Fale com um especialista</span><div class="site">${SITE}</div>`));
  return out;
}

(async () => {
  fs.mkdirSync(SAIDA, { recursive: true });
  const html = `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,500;0,600;0,700;0,800;1,800&display=swap" rel="stylesheet"><style>${CSS}</style></head><body>${carrosseis.map((c) => paginas(c).join('\n')).join('\n')}</body></html>`;
  const arquivo = path.join(require('os').tmpdir(), 'prosystem-instrucao.html');
  fs.writeFileSync(arquivo, html);
  const b = await puppeteer.launch({ headless: 'new', args: ['--allow-file-access-from-files'] });
  const p = await b.newPage();
  await p.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 1 });
  await p.goto(url(arquivo), { waitUntil: 'networkidle0', timeout: 90000 });
  await p.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 800));
  // Texto não pode subir até o logo (que termina por volta de 170px).
  const problemas = await p.evaluate(() => [...document.querySelectorAll('.pg')].filter((s) => s.querySelector('.txt').getBoundingClientRect().top - s.getBoundingClientRect().top < 300).map((s) => 'texto alto demais: ' + s.dataset.nome));
  for (const el of await p.$$('.pg')) {
    const nome = await el.evaluate((e) => e.dataset.nome);
    await el.screenshot({ path: path.join(SAIDA, nome + '.png') });
  }
  await b.close();
  fs.rmSync(arquivo, { force: true });
  console.log(problemas.length ? problemas.join('\n') : 'ok');
})();
