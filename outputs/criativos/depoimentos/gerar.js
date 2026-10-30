// Gera os depoimentos e as peças de prova social, 1080×1350, em PNG.
// Textos: trechos reais de avaliações do Google. Nunca inventar nem mudar o sentido.
// Nomes completos: uso autorizado pela Jessica em 30/10/2026. Os prints ficam fora do git.
// Uso: node outputs/criativos/depoimentos/gerar.js
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const AQUI = __dirname;
const LOGOS = '../../../docs/design/guia-de-estilos/assets';
const FOTOS = '../modelos/carrossel/fotos';
const SITE = 'prosystemnet.com.br';
// Estrelas brancas de pontas redondas, pedido da Jessica. Nunca amarelas.
const ESTRELA = '<svg viewBox="0 0 24 24"><polygon points="12,2.6 14.9,8.6 21.5,9.5 16.7,14.1 17.9,20.7 12,17.5 6.1,20.7 7.3,14.1 2.5,9.5 9.1,8.6" fill="#fff" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/></svg>';
const ESTRELAS = `<span class="estrelas">${ESTRELA.repeat(5)}</span>`;

// fundo: forte (degradê) ou branco, alternados para a grade não repetir.
const depoimentos = [
  { id: 'depoimento-krisley-v2', tema: 'azul', fundo: 'forte', tam: 66, texto: 'Eu tenho <b>duas farmácias</b> e há quase <b>15 anos</b> de empresa trabalho com o software da Prosystem!', nome: 'Krisley Kretli de Oliveira', sobre: 'Dona de duas farmácias' },
  { id: 'depoimento-rodrigo-v2', tema: 'azul', fundo: 'branco', tam: 86, texto: 'Trabalho com eles há <b>13 anos</b> e não pretendo mudar.', nome: 'Rodrigo Amancio', sobre: 'Cliente ProSystem' },
  { id: 'depoimento-samuel-v2', tema: 'azul', fundo: 'forte', tam: 62, texto: 'Suporte humanizado tanto segunda a sexta quanto <b>sábado e domingo,</b> sem aquelas frescuras de falar com robô.', nome: 'Samuel Ferreira', sobre: 'Cliente ProSystem' },
  { id: 'depoimento-paulo-v2', tema: 'azul', fundo: 'branco', tam: 70, texto: 'Já tive outros, mas o <b>único que os funcionários não reclamam</b> aqui é a Prosystem.', nome: 'Paulo Siqueira', sobre: 'Cliente ProSystem' },
  { id: 'depoimento-sirleia-v2', tema: 'azul', fundo: 'forte', tam: 78, texto: 'Sistema <b>muito fácil</b> de trabalhar e eles dão <b>ótima assistência.</b>', nome: 'Sirleia Moreira', sobre: 'Cliente ProSystem' },
  { id: 'depoimento-veronica-v2', tema: 'azul', fundo: 'branco', tam: 78, texto: 'Recomendo para quem procura <b>confiança e profissionalismo.</b>', nome: 'Verônica Xavier', sobre: 'Cliente ProSystem' },
];

const provasSociais = [
  { id: 'prova-social-15-anos-v1', tema: 'azul', fundo: 'forte', titulo: 'Tem cliente com a gente há <b>quase 15 anos.</b>', apoio: '<b>+600 clientes</b> e <b>+16 anos</b> de experiência' },
  { id: 'prova-social-rapido-v2', tema: 'azul', fundo: 'branco', titulo: 'Uma palavra que se repete nas nossas avaliações: <b>rápido.</b>', apoio: `${ESTRELAS}<br>“Atendimento sempre rápido, e com excelência.”<br><b>Juliana Barcellos Brejenski</b>` },
];

// Modelo V3 do caderno, inteiro. Avaliação de uma cliente de farmácia.
const tatiana = { id: 'carrossel-farmacia-depoimento-v2', tema: 'azul' };

const CSS = `
*{margin:0;padding:0;box-sizing:border-box}
body{background:#8a93a3;font-family:'Montserrat',Arial,sans-serif}
.pg{width:1080px;height:1350px;position:relative;overflow:hidden;margin:0 0 30px;background:#fff;color:#081330}
.azul{--escuro:#2E6DB4;--tinta:#081330;--sombra:8,19,48;--marca:46,109,180;--realce:#38C8F8;--grad:linear-gradient(155deg,#2E6DB4 0%,#417ABC 48%,#3898D8 78%,#38C8F8 100%);--pil:#F88818;--piltx:#081330}
.laranja{--escuro:#C2410C;--tinta:#2B1408;--sombra:43,20,8;--marca:176,58,10;--realce:#F88818;--grad:linear-gradient(155deg,#B83C0A 0%,#D9500B 50%,#F07A12 85%,#F88818 100%);--pil:#fff;--piltx:#B83C0A}
.forte{background:var(--grad);color:#fff}
.logo{position:absolute;top:70px;left:50%;transform:translateX(-50%);width:324px;height:auto;z-index:5}
.cheia{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.pil{display:inline-block;padding:20px 46px;border-radius:99px;font-size:34px;font-weight:800;background:var(--pil);color:var(--piltx)}
.pil.contorno{background:transparent;border:3px solid #fff;color:#fff;font-weight:700}
.faixa{padding:28px 38px;border-radius:22px;background:var(--escuro);color:#fff;font-size:37px;line-height:1.28;font-weight:500;text-wrap:balance;text-align:center}
.faixa b{font-weight:800}
.num{position:absolute;bottom:34px;left:0;right:0;text-align:center;font-size:24px;font-weight:700;letter-spacing:.08em;color:var(--tinta);opacity:.7;z-index:4}
.forte .num,.sobre .num{color:#fff;opacity:.85}
.provas{display:flex;align-items:stretch;gap:44px;justify-content:center}
.provas div{display:flex;flex-direction:column;gap:6px;text-align:center}
.provas strong{font-size:72px;line-height:1;font-weight:800}
.provas span{font-size:29px;font-weight:500}
.provas i{width:3px;background:rgba(255,255,255,.7)}
.site{font-size:32px;font-weight:700}
.los{position:absolute;transform:rotate(45deg);border-radius:46px;border:4px solid rgba(255,255,255,.75);z-index:1}
.losf{position:absolute;transform:rotate(45deg);border-radius:46px;background:linear-gradient(135deg,rgba(56,200,248,.95),rgba(65,122,188,.55));z-index:1}
.branco .los{border-color:var(--realce)}

/* Depoimento: citação em cartão */
.cartao{position:absolute;left:80px;right:80px;top:270px;bottom:210px;border-radius:30px;padding:70px 64px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:44px;z-index:3}
.forte .cartao{background:#fff;color:#081330}
.branco .cartao{background:var(--escuro);color:#fff}
.aspas{font-size:210px;line-height:.7;height:96px;font-weight:800;color:var(--realce)}
.fala{font-weight:300;line-height:1.16;letter-spacing:-.015em;text-wrap:balance}
.fala b{font-weight:800}
.quem{font-size:36px;line-height:1.3;font-weight:500}
.quem b{font-weight:800;font-size:40px}
.forte .quem{color:var(--escuro)}
.selo{position:absolute;left:0;right:0;bottom:84px;text-align:center;z-index:4}
.estrelas{display:inline-flex;gap:8px;vertical-align:middle}
.estrelas svg{width:44px;height:44px}
.pil.google{display:inline-flex;align-items:center;gap:22px;background:var(--escuro);color:#fff;padding:18px 44px;font-weight:700}
.pil.google .estrelas svg{width:40px;height:40px}

/* Prova social: frase grande */
.frase{position:absolute;left:90px;right:90px;top:250px;bottom:190px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:60px;z-index:3}
.frase h2{font-size:104px;line-height:1.05;font-weight:300;letter-spacing:-.025em;text-wrap:balance}
.frase h2 b{font-weight:800}
.branco .frase h2{color:var(--escuro)}
.forte .frase .faixa{background:#fff;color:var(--tinta)}
.frase .faixa{font-size:40px}

/* Carrossel, modelo V3 */
.v3-cap{position:absolute;left:70px;right:70px;top:170px;text-align:center;z-index:4}
.v3-cap h2{font-size:112px;line-height:1;font-weight:300;letter-spacing:-.03em;text-wrap:balance}
.v3-cap h2 b{font-weight:800}
.v3-card{position:absolute;object-fit:cover;border-radius:34px;box-shadow:0 26px 50px rgba(var(--sombra),.45);z-index:3}
.v3-atras{position:absolute;border-radius:34px;background:#fff;opacity:.9;z-index:2}
.v3-pil{position:absolute;left:0;right:0;bottom:72px;text-align:center;z-index:5}
.tinta{position:absolute;inset:0;background:linear-gradient(180deg,rgba(var(--sombra),.55) 0%,rgba(var(--marca),.15) 22%,rgba(var(--marca),.88) 50%,rgba(var(--marca),.97) 100%);z-index:1}
.v3-sobre{position:absolute;left:84px;right:84px;top:210px;bottom:100px;z-index:4;color:#fff;display:flex;flex-direction:column;justify-content:flex-end;gap:34px}
.v3-n{font-size:120px;line-height:.9;font-weight:800;color:#fff}
.v3-sobre h2{font-size:88px;line-height:1.06;font-weight:300;letter-spacing:-.02em;text-wrap:balance}
.v3-sobre h2 b{font-weight:800}
.v3-sobre p{font-size:42px;line-height:1.3;font-weight:500;text-wrap:balance}
.dia{position:absolute;left:360px;top:250px;width:360px;height:360px;transform:rotate(45deg);border-radius:46px;overflow:hidden;z-index:2}
.dia img{position:absolute;left:-80px;top:-80px;width:520px;height:520px;object-fit:cover;transform:rotate(-45deg)}
.dia-linha{position:absolute;left:335px;top:225px;width:410px;height:410px;transform:rotate(45deg);border-radius:54px;border:4px solid var(--realce);z-index:1}
.v3-sel{position:absolute;left:0;right:0;top:745px;text-align:center;font-size:120px;line-height:1;font-weight:800;color:var(--escuro);z-index:4}
.v3-txt{position:absolute;left:76px;right:76px;top:890px;bottom:82px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:26px;text-align:center;z-index:4}
.v3-txt h2{font-size:58px;line-height:1.08;font-weight:300;letter-spacing:-.015em;color:var(--escuro);text-wrap:balance}
.v3-txt h2 b{font-weight:800}
.v3-txt .faixa{font-size:34px;padding:24px 34px}
.v3-sol{position:absolute;left:76px;right:76px;top:770px;bottom:90px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:24px;color:#fff;z-index:4}
.v3-sol h2{font-size:68px;line-height:1.08;font-weight:300;letter-spacing:-.02em;text-wrap:balance}
.v3-sol h2 b{font-weight:800}
.v3-sol p{font-size:38px;font-weight:500;line-height:1.3;text-wrap:balance}
.v3-sol p b{font-weight:800}
.escuro-txt{background:linear-gradient(155deg,#2E6DB4 0%,#2E6DB4 72%,#417ABC 100%)}
.v3-fim{position:absolute;left:70px;right:70px;top:170px;display:flex;flex-direction:column;align-items:center;text-align:center;gap:30px;color:#fff;z-index:4}
.v3-fim h2{font-size:84px;line-height:1.04;font-weight:300;letter-spacing:-.02em;text-wrap:balance}
.v3-fim h2 b{font-weight:800}
`;

const foto = (n) => `${FOTOS}/${n}.jpg`;
const mockup = (n) => `../../../banco imagens/mockups-prosystem/farmacia/${n}.jpg`;
const claro = `<img class="logo" src="${LOGOS}/logo-light.png" alt="ProSystem">`;
const escuro = `<img class="logo" src="${LOGOS}/logo-dark.png" alt="ProSystem">`;
const logo = (fundo) => (fundo === 'forte' ? claro : escuro);
const provas = '<div class="provas"><div><strong>+600</strong><span>clientes</span></div><i></i><div><strong>+16</strong><span>anos de experiência</span></div></div>';
const num = (i) => `<div class="num">${i} / 6</div>`;
const pg = (nome, tema, cls, html) => `<div class="${tema}"><section class="pg ${cls}" data-nome="${nome}">${html}</section></div>`;

// Losangos nos cantos, longe do texto e do logo.
const cantos = '<i class="los" style="width:300px;height:300px;top:-170px;left:-150px"></i><i class="los" style="width:260px;height:260px;top:-150px;right:-110px"></i><i class="losf" style="width:240px;height:240px;bottom:-140px;left:-100px"></i><i class="los" style="width:280px;height:280px;bottom:-180px;right:-80px"></i>';

const depoimento = (d) => pg(d.id, d.tema, d.fundo, `${cantos}${logo(d.fundo)}<div class="cartao"><div class="aspas">&ldquo;</div><p class="fala" style="font-size:${d.tam}px">${d.texto}</p><p class="quem"><b>${d.nome}</b><br>${d.sobre}</p></div><div class="selo"><span class="pil google">${ESTRELAS}Avaliação no Google</span></div>`);

const provaSocial = (p) => pg(p.id, p.tema, p.fundo, `${cantos}${logo(p.fundo)}<div class="frase"><h2>${p.titulo}</h2><p class="faixa">${p.apoio}</p></div><div class="selo"><span class="pil">Fale com um especialista</span></div>`);

function carrossel(c) {
  const n = (i) => `${c.id}-${i}`;
  const t = c.tema;
  const sobre = (i, img, rotulo, titulo, apoio) => pg(n(i), t, 'sobre', `<img class="cheia" src="${img}" alt=""><div class="tinta"></div>${claro}<div class="v3-sobre"><div class="v3-n">${rotulo}</div><h2>${titulo}</h2><p>${apoio}</p></div>${num(i)}`);
  return [
    pg(n(1), t, 'forte', `${claro}<div class="v3-cap"><h2>Seu sistema dá mais <b>problema</b> do que solução?</h2></div><div class="v3-atras" style="left:170px;top:720px;width:740px;height:430px;transform:rotate(4deg)"></div><img class="v3-card" src="${foto('cartelas-azuis')}" alt="" style="left:170px;top:720px;width:740px;height:430px;transform:rotate(-3deg)"><div class="v3-pil"><span class="pil contorno">Arraste para o lado →</span></div>`),
    sobre(2, foto('conferindo-frasco'), 'Antes', '“Um sistema que nos gerava <b>muitos problemas.</b>”', 'Dificuldades no controle das mercadorias, problemas com lançamentos de notas.'),
    pg(n(3), t, '', `${escuro}<i class="dia-linha"></i><div class="dia"><img src="${foto('prateleiras-escuras')}" alt=""></div><div class="v3-sel">Hoje</div><div class="v3-txt"><h2>“Mais <b>organização, praticidade e segurança</b> para nossa rotina.”</h2><p class="faixa">A Prosystem vem nos auxiliando de forma <b>extremamente eficiente.</b></p></div>${num(3)}`),
    sobre(4, foto('farmaceutica-prateleira'), 'Suporte', '“Dispostos a ajudar com <b>atenção, paciência e agilidade.</b>”', 'Humanizado, com especialistas técnicos, das 7h às 22h, inclusive sábado e domingo.'),
    pg(n(5), t, 'forte escuro-txt', `${claro}<div class="v3-atras" style="left:130px;top:220px;width:820px;height:500px;transform:rotate(3deg)"></div><img class="v3-card" src="${mockup('painel-estoque-notebook')}" alt="" style="left:130px;top:220px;width:820px;height:500px;transform:rotate(-2deg)"><div class="v3-sol"><h2>“Só tenho a <b>agradecer</b> por todo o suporte e comprometimento oferecidos pela equipe.”</h2><p><b>Tatiana Souza</b><br>Farmácia Pharmavida</p>${ESTRELAS}</div>${num(5)}`),
    pg(n(6), t, 'forte', `${claro}<div class="v3-fim"><h2>Quer esse suporte na <b>sua farmácia?</b></h2>${provas}<span class="pil">Fale com um especialista</span><div class="site">${SITE}</div></div><img class="v3-card" src="${foto('cartelas-detalhe')}" alt="" style="left:60px;top:900px;width:500px;height:360px;transform:rotate(-5deg)"><img class="v3-card" src="${foto('prateleiras-escuras')}" alt="" style="left:520px;top:930px;width:500px;height:360px;transform:rotate(4deg)">`),
  ];
}

const html = `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><title>Depoimentos e prova social</title>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600;700;800&display=swap" rel="stylesheet"><style>${CSS}</style></head><body>
${depoimentos.map(depoimento).join('\n')}
${provasSociais.map(provaSocial).join('\n')}
${carrossel(tatiana).join('\n')}
</body></html>`;

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
  // Confere se algum texto passou do limite do cartão ou da página.
  const estouros = await p.$$eval('.cartao,.frase,.v3-sobre,.v3-txt,.v3-sol', (els) => els.filter((e) => e.scrollHeight > e.clientHeight + 1 && getComputedStyle(e).height !== 'auto').map((e) => e.closest('.pg').dataset.nome + ' ' + e.className));
  console.log(estouros.length ? 'ESTOURO: ' + estouros.join(', ') : 'sem estouro');
  await b.close();
  console.log('ok');
})();
