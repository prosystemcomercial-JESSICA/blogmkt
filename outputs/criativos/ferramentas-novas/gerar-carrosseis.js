// Carrosséis das ferramentas que ainda não tinham aparecido no conteúdo (04/11/2026): recarga online,
// orçamento pelo WhatsApp e balanço com a loja aberta. 1080×1350, em PNG.
// Estilos copiados de ../farmacia-supermercado/gerar-carrosseis.js (V2 e V3). Um modelo por carrossel, nunca misturados.
// Sem tela do sistema e sem celular nas fotos (caderno de marca); a Jessica põe mockup em notebook, se quiser.
// Uso: node outputs/criativos/ferramentas-novas/gerar-carrosseis.js
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const AQUI = __dirname;
const url = (p) => 'file:///' + p.split(path.sep).join('/').replace(/ /g, '%20');
const RAIZ = path.join(AQUI, '..', '..', '..');
const LOGOS = url(path.join(RAIZ, 'docs/design/guia-de-estilos/assets'));
const SAIDA = path.join(AQUI, 'pecas');
const SITE = 'prosystemnet.com.br';

const carrosseis = [
  // Farmácia e padaria (azul), V3 impacto.
  { id: 'carrossel-recarga-online-v1', tema: 'azul', estilo: 'v3',
    capa: { titulo: 'Quem entra para <b>recarregar</b> sai com mais uma compra.', foto: 'carrinho-compras' },
    itens: [
      { n: 1, titulo: 'Recarga <b>no mesmo caixa</b> da venda.', apoio: 'No caixa do Prosystem, a recarga fica a <b>um atalho</b> de distância.', foto: 'farmaceutico-computador' },
      { n: 2, titulo: 'Cliente na loja é <b>chance de venda.</b>', apoio: 'Quem vem pela recarga passa pelo balcão e <b>leva mais alguma coisa.</b>', foto: 'paezinhos-cesta' },
      { n: 3, titulo: 'Mais um motivo para <b>escolher a sua loja.</b>', apoio: 'Recarga de celular e <b>outros serviços</b> sem o cliente ir a outro lugar.', foto: 'farmacia-corredor' },
    ],
    sol: { titulo: 'Recarga online dentro do Prosystem', apoio: 'Na farmácia e na padaria, o serviço sai do próprio caixa.', foto: 'padeiros-padaria' },
    fim: { titulo: 'Sua loja já <b>faz recarga?</b>', fotos: ['pao-frances', 'farmaceutico-conferindo'] } },
  // Farmácia (azul), V2 foto em destaque.
  { id: 'carrossel-orcamento-whatsapp-v1', tema: 'azul', estilo: 'v2',
    capa: { titulo: 'Orçamento pelo WhatsApp <b>em segundos.</b>', apoio: 'Sem digitar item por item', foto: 'farmaceutica-receita' },
    itens: [
      { n: 1, titulo: 'Monte a venda <b>no caixa,</b> como sempre.', apoio: 'Produtos, quantidades e <b>descontos</b> já ficam lançados.', foto: 'maos-teclado-mesa' },
      { n: 2, titulo: 'Um clique <b>copia o orçamento.</b>', apoio: 'O botão monta o texto com os itens, o <b>preço de e por</b> e o total.', foto: 'calculadora' },
      { n: 3, titulo: 'Cole no WhatsApp <b>e envie.</b>', apoio: 'O cliente recebe tudo organizado, <b>com o nome do vendedor.</b>', foto: 'maos-digitando' },
    ],
    sol: { titulo: 'Quem pede preço está comparando', apoio: 'Responda antes da concorrência, com o orçamento certinho.', foto: 'prateleiras-desfocadas' },
    fim: { titulo: 'Sua farmácia responde orçamento <b>em quanto tempo?</b>', foto: 'farmaceutica-recorte', pos: '50% 30%' } },
  // Padaria (laranja), V2 foto em destaque.
  { id: 'carrossel-padaria-balanco-loja-aberta-v1', tema: 'laranja', estilo: 'v2',
    capa: { titulo: 'Balanço de fim de ano <b>sem fechar a padaria.</b>', apoio: '3 passos para contar o estoque', foto: 'paes-prateleira-sem-etiqueta' },
    itens: [
      { n: 1, titulo: 'Conte <b>com a loja aberta.</b>', apoio: 'A contagem é feita <b>prateleira por prateleira,</b> sem parar o caixa.', foto: 'farinha-trigo' },
      { n: 2, titulo: 'Sem comprar <b>coletor de dados.</b>', apoio: 'O aplicativo de contagem lê o código pela <b>câmera do celular.</b>', foto: 'embalagem-papel' },
      { n: 3, titulo: 'O resultado <b>volta ao sistema.</b>', apoio: 'A contagem entra no Prosystem e <b>atualiza o estoque.</b>', foto: 'paes-grade' },
    ],
    sol: { titulo: 'Estoque certo, compra certa em 2027', apoio: 'Saiba o que tem de verdade antes de pedir farinha e embalagem.', foto: 'rolos-bandeja' },
    fim: { titulo: 'Seu balanço ainda <b>fecha a padaria?</b>', foto: 'forno-pa' } },
];

const CSS = `
*{margin:0;padding:0;box-sizing:border-box}
body{background:#8a93a3;font-family:'Montserrat',Arial,sans-serif}
.pg{width:1080px;height:1350px;position:relative;overflow:hidden;margin:0 0 30px;background:#fff}
.azul{--escuro:#2E6DB4;--tinta:#081330;--sombra:8,19,48;--marca:46,109,180;--realce:#38C8F8;--grad:linear-gradient(155deg,#2E6DB4 0%,#417ABC 48%,#3898D8 78%,#38C8F8 100%);--pil:#F88818;--piltx:#081330}
.laranja{--escuro:#C2410C;--tinta:#2B1408;--sombra:43,20,8;--marca:176,58,10;--realce:#F88818;--grad:linear-gradient(155deg,#B83C0A 0%,#D9500B 50%,#F07A12 85%,#F88818 100%);--pil:#fff;--piltx:#B83C0A}
.forte{background:var(--grad);color:#fff}
.logo{position:absolute;top:70px;left:50%;transform:translateX(-50%);width:324px;height:auto;z-index:5}
.cheia{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.topo-sombra{position:absolute;left:0;right:0;top:0;height:300px;background:linear-gradient(180deg,rgba(var(--sombra),.72),rgba(var(--sombra),0));z-index:2}
.pil{display:inline-block;padding:20px 46px;border-radius:99px;font-size:34px;font-weight:800;background:var(--pil);color:var(--piltx)}
.pil.contorno{background:transparent;border:3px solid #fff;color:#fff;font-weight:700}
.faixa{padding:28px 38px;border-radius:22px;background:var(--escuro);color:#fff;font-size:37px;line-height:1.28;font-weight:500;text-wrap:balance;text-align:center}
.faixa b{font-weight:800}
.num{position:absolute;bottom:34px;left:0;right:0;text-align:center;font-size:24px;font-weight:700;letter-spacing:.08em;color:var(--tinta);opacity:.7;z-index:4}
.branco .num,.forte .num,.sobre .num{color:#fff;opacity:.85}
.provas{display:flex;align-items:stretch;gap:44px;justify-content:center}
.provas div{display:flex;flex-direction:column;gap:6px;text-align:center}
.provas strong{font-size:72px;line-height:1;font-weight:800}
.provas span{font-size:29px;font-weight:500}
.provas i{width:3px;background:rgba(255,255,255,.7)}
.site{font-size:32px;font-weight:700}
.los{position:absolute;width:300px;height:300px;transform:rotate(45deg);border-radius:46px;border:4px solid rgba(255,255,255,.75);z-index:3}
.los.cor{border-color:var(--realce)}

/* V2: foto em destaque */
.v2-cap-grad{position:absolute;inset:0;background:linear-gradient(180deg,rgba(var(--marca),0) 30%,rgba(var(--marca),.9) 62%,rgba(var(--marca),1) 100%);z-index:2}
.v2-cap{position:absolute;left:80px;right:80px;bottom:110px;z-index:4;color:#fff;display:flex;flex-direction:column;gap:36px;align-items:flex-start}
.v2-cap h2{font-size:112px;line-height:1.03;font-weight:300;letter-spacing:-.025em;text-wrap:balance}
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

/* V3: impacto */
.v3-cap{position:absolute;left:70px;right:70px;top:170px;text-align:center;z-index:4}
.v3-cap h2{font-size:122px;line-height:1;font-weight:300;letter-spacing:-.03em;text-wrap:balance}
.v3-cap h2 b{font-weight:800}
.v3-card{position:absolute;object-fit:cover;border-radius:34px;box-shadow:0 26px 50px rgba(var(--sombra),.45);z-index:3}
.v3-atras{position:absolute;border-radius:34px;background:#fff;opacity:.9;z-index:2}
.v3-pil{position:absolute;left:0;right:0;bottom:72px;text-align:center;z-index:5}
.tinta{position:absolute;inset:0;background:linear-gradient(180deg,rgba(var(--sombra),.55) 0%,rgba(var(--marca),.15) 22%,rgba(var(--marca),.88) 50%,rgba(var(--marca),.97) 100%);z-index:1}
.v3-sobre{position:absolute;left:84px;right:84px;top:210px;bottom:100px;z-index:4;color:#fff;display:flex;flex-direction:column;justify-content:flex-end;gap:34px}
.v3-n{font-size:200px;line-height:.85;font-weight:800;color:#fff}
.v3-sobre h2{font-size:92px;line-height:1.06;font-weight:300;letter-spacing:-.02em;text-wrap:balance}
.v3-sobre h2 b{font-weight:800}
.v3-sobre p{font-size:42px;line-height:1.3;font-weight:500;text-wrap:balance}
.v3-sobre p b{font-weight:800}
.dia{position:absolute;left:320px;top:300px;width:440px;height:440px;transform:rotate(45deg);border-radius:46px;overflow:hidden;z-index:2}
.dia img{position:absolute;left:-100px;top:-100px;width:640px;height:640px;object-fit:cover;transform:rotate(-45deg)}
.dia-linha{position:absolute;left:290px;top:270px;width:500px;height:500px;transform:rotate(45deg);border-radius:54px;border:4px solid var(--realce);z-index:1}
.v3-sel{position:absolute;left:110px;top:640px;font-size:190px;line-height:1;font-weight:800;color:var(--escuro);z-index:4}
.v3-txt{position:absolute;left:76px;right:76px;top:880px;bottom:82px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:26px;text-align:center;z-index:4}
.v3-txt h2{font-size:62px;line-height:1.08;font-weight:300;letter-spacing:-.015em;color:var(--escuro);text-wrap:balance}
.v3-txt h2 b{font-weight:800}
.v3-txt .faixa{font-size:34px;padding:24px 34px}
.v3-sol{position:absolute;left:76px;right:76px;top:770px;bottom:90px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:24px;color:#fff;z-index:4}
.v3-sol h2{font-size:80px;line-height:1.05;font-weight:800;letter-spacing:-.02em;text-wrap:balance}
.v3-sol p{font-size:40px;font-weight:500;line-height:1.3;text-wrap:balance}
.v3-fim{position:absolute;left:70px;right:70px;top:170px;display:flex;flex-direction:column;align-items:center;text-align:center;gap:30px;color:#fff;z-index:4}
.v3-fim h2{font-size:88px;line-height:1.04;font-weight:300;letter-spacing:-.02em;text-wrap:balance}
.v3-fim h2 b{font-weight:800}
`;

const PASTAS = [path.join(AQUI, 'fotos'), ...['farmacia-supermercado/fotos', 'nov-dez/fotos', 'modelos/carrossel/fotos', 'suporte/fotos'].map((d) => path.join(AQUI, '..', d))];
function foto(n) {
  for (const d of PASTAS) { const f = path.join(d, n + '.jpg'); if (fs.existsSync(f)) return url(f); }
  throw new Error('foto não encontrada: ' + n);
}
const claro = '<img class="logo" src="' + LOGOS + '/logo-light.png" alt="ProSystem">';
const escuro = '<img class="logo" src="' + LOGOS + '/logo-dark.png" alt="ProSystem">';
const provas = '<div class="provas"><div><strong>+600</strong><span>clientes</span></div><i></i><div><strong>+16</strong><span>anos de experiência</span></div></div>';
const num = (i) => `<div class="num">${i} / 6</div>`;
const pg = (c, i, cls, html) => `<section class="pg ${cls}" data-nome="${c.id}-${i}">${html}</section>`;

function v2(c) {
  const out = [];
  out.push(pg(c, 1, 'sobre', `<img class="cheia" src="${foto(c.capa.foto)}" alt=""><div class="topo-sombra"></div><div class="v2-cap-grad"></div>${claro}<i class="los" style="left:930px;top:30px"></i><div class="v2-cap"><h2>${c.capa.titulo}</h2><p>${c.capa.apoio}</p><span class="pil contorno">Arraste para o lado →</span></div>`));
  c.itens.forEach((it, k) => {
    out.push(pg(c, k + 2, '', `<img class="v2-foto" src="${foto(it.foto)}" alt=""><div class="topo-sombra"></div>${claro}<div class="v2-sel"><span>${it.n}</span></div><div class="v2-txt"><h2>${it.titulo}</h2><p class="faixa">${it.apoio}</p></div>${num(k + 2)}`));
  });
  out.push(pg(c, 5, 'sobre', `<img class="cheia" src="${foto(c.sol.foto)}" alt=""><div class="topo-sombra"></div>${claro}<div class="v2-painel"><h2>${c.sol.titulo}</h2><p>${c.sol.apoio}</p></div>${num(5)}`));
  out.push(pg(c, 6, 'forte', `<img class="v2-fim-foto" src="${foto(c.fim.foto)}" alt="" style="object-position:${c.fim.pos || '50% 50%'}"><div class="topo-sombra"></div>${claro}<div class="v2-fim"><h2>${c.fim.titulo}</h2>${provas}<span class="pil">Fale com um especialista</span><div class="site">${SITE}</div></div>`));
  return out;
}

function sobre(c, i, it) {
  return pg(c, i, 'sobre', `<img class="cheia" src="${foto(it.foto)}" alt=""><div class="tinta"></div>${claro}<i class="los" style="left:930px;top:1090px"></i><div class="v3-sobre"><div class="v3-n">${it.n}</div><h2>${it.titulo}</h2><p>${it.apoio}</p></div>${num(i)}`);
}

function v3(c) {
  const out = [];
  out.push(pg(c, 1, 'forte', `${claro}<div class="v3-cap"><h2>${c.capa.titulo}</h2></div><div class="v3-atras" style="left:170px;top:720px;width:740px;height:450px;transform:rotate(4deg)"></div><img class="v3-card" src="${foto(c.capa.foto)}" alt="" style="left:170px;top:720px;width:740px;height:450px;transform:rotate(-3deg)"><div class="v3-pil"><span class="pil contorno">Arraste para o lado →</span></div>`));
  out.push(sobre(c, 2, c.itens[0]));
  const m = c.itens[1];
  out.push(pg(c, 3, '', `${escuro}<i class="dia-linha"></i><div class="dia"><img src="${foto(m.foto)}" alt=""></div><div class="v3-sel">${m.n}</div><div class="v3-txt"><h2>${m.titulo}</h2><p class="faixa">${m.apoio}</p></div>${num(3)}`));
  out.push(sobre(c, 4, c.itens[2]));
  out.push(pg(c, 5, 'forte', `${claro}<div class="v3-atras" style="left:130px;top:220px;width:820px;height:500px;transform:rotate(3deg)"></div><img class="v3-card" src="${foto(c.sol.foto)}" alt="" style="left:130px;top:220px;width:820px;height:500px;transform:rotate(-2deg)"><div class="v3-sol"><h2>${c.sol.titulo}</h2><p>${c.sol.apoio}</p></div>${num(5)}`));
  out.push(pg(c, 6, 'forte', `${claro}<div class="v3-fim"><h2>${c.fim.titulo}</h2>${provas}<span class="pil">Fale com um especialista</span><div class="site">${SITE}</div></div><img class="v3-card" src="${foto(c.fim.fotos[0])}" alt="" style="left:60px;top:900px;width:500px;height:360px;transform:rotate(-5deg)"><img class="v3-card" src="${foto(c.fim.fotos[1])}" alt="" style="left:520px;top:930px;width:500px;height:360px;transform:rotate(4deg)">`));
  return out;
}

const html = `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><title>Variações de carrossel</title>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600;700;800&display=swap" rel="stylesheet"><style>${CSS}</style></head><body>
${carrosseis.map((c) => `<div class="${c.tema}">${(c.estilo === 'v2' ? v2(c) : v3(c)).join('\n')}</div>`).join('\n')}
</body></html>`;

(async () => {
  fs.mkdirSync(SAIDA, { recursive: true });
  const arquivo = path.join(require('os').tmpdir(), 'prosystem-carrossel-ferramentas.html');
  fs.writeFileSync(arquivo, html);
  const b = await puppeteer.launch({ headless: 'new', args: ['--allow-file-access-from-files'] });
  const p = await b.newPage();
  await p.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 1 });
  await p.goto(url(arquivo), { waitUntil: 'networkidle0', timeout: 90000 });
  await p.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 800));
  for (const el of await p.$$('.pg')) {
    const nome = await el.evaluate((e) => e.dataset.nome);
    await el.screenshot({ path: path.join(SAIDA, nome + '.png') });
  }
  await b.close();
  fs.rmSync(arquivo, { force: true });
  console.log('ok');
})();
