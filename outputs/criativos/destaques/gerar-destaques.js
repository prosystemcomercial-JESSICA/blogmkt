// Stories dos destaques do Instagram (1080×1920) e capas dos destaques (1080×1080).
// Estilos do feed (docs/conteudo-prosystem/feed_modelo.html) + ajustes de story, como em ../nov-dez/stories/gerar-stories.js.
// Zonas seguras: nada importante nos 250px do alto nem nos 340px de baixo. Stories com `link: true` deixam
// a faixa de 1300 a 1580px livre para a figurinha de link, colocada pela Jessica.
// Stories com `motion: true` também saem em MP4 (8 s, 30 qps); o último quadro é igual ao PNG.
// Uso: node outputs/criativos/destaques/gerar-destaques.js [png|mp4|capas] [id]
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');
const puppeteer = require('puppeteer');

const AQUI = __dirname;
const RAIZ = path.join(AQUI, '..', '..', '..');
const SAIDA = path.join(AQUI, 'stories');
const CAPAS = path.join(AQUI, 'capas');
const LOGOS = path.join(RAIZ, 'docs/design/guia-de-estilos/assets');
const url = (p) => 'file:///' + p.split(path.sep).join('/').replace(/ /g, '%20');

const PASTAS = ['outputs/criativos/nov-dez/fotos', 'outputs/criativos/modelos/carrossel/fotos', 'outputs/criativos/suporte/fotos'].map((d) => path.join(RAIZ, d));
function img(n) {
  for (const d of PASTAS) { const f = path.join(d, n + '.jpg'); if (fs.existsSync(f)) return url(f); }
  throw new Error('foto não encontrada: ' + n);
}
// Telas reais do sistema. Se a Jessica salvar um mockup em nov-dez/mockups/<tela>.png, ele entra no lugar do cartão.
const TELAS = ['outputs/criativos/nov-dez/telas', 'banco imagens/telas-para-mockup/00-recortadas'].map((d) => path.join(RAIZ, d));
const MOCKUPS = path.join(RAIZ, 'outputs/criativos/nov-dez/mockups');
function arqTela(n) {
  for (const d of TELAS) { const f = path.join(d, n + '.png'); if (fs.existsSync(f)) return f; }
  throw new Error('tela não encontrada: ' + n);
}
const proporcao = (f) => { const b = fs.readFileSync(f); return b.readUInt32BE(16) / b.readUInt32BE(20); };

const css = fs.readFileSync(path.join(RAIZ, 'docs/conteudo-prosystem/feed_modelo.html'), 'utf8')
  .split('/* Peças */')[1].split('</style>')[0]
  .replace(/(?<![\w#.$-])(-?\d+(?:\.\d+)?)U\b/g, 'calc($1*var(--u))');

const STORY = `
.post{aspect-ratio:9/16;width:1080px}
.lg{top:262px}
.luz{position:absolute;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.30),rgba(255,255,255,0) 66%);z-index:0;pointer-events:none}
.bra .luz{background:radial-gradient(circle,rgba(56,200,248,.16),rgba(56,200,248,0) 66%)}
.z{position:absolute;left:90px;right:90px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:40px;z-index:6}
.z h2{font-size:104px;line-height:1.04;letter-spacing:-.028em}
.bra .z h2{color:var(--esc)}
.ap{margin:0;font-size:42px;line-height:1.28;font-weight:600;text-wrap:balance}
.bra .ap{color:var(--tin);font-weight:500}
.selo{display:inline-block;padding:14px 34px;border-radius:99px;font-size:29px;font-weight:700;letter-spacing:.09em;text-transform:uppercase;line-height:1.2}
.bra .selo{background:var(--esc);color:#fff}
.forte .selo,.sob .selo{background:rgba(255,255,255,.14);border:2.5px solid rgba(255,255,255,.75);color:#fff}
.car{border-radius:34px}
.atr{border-radius:34px}
.tl{border-radius:22px;padding:14px;box-shadow:0 30px 70px rgba(var(--sb),.45)}
.dq{position:absolute;left:0;right:0;text-align:center;z-index:7}
.dq span{display:inline-block;padding:14px 28px;border-radius:16px;background:#fff;color:var(--tin);font-size:33px;font-weight:800;box-shadow:0 12px 28px rgba(var(--sb),.35)}
.bra .dq span{background:var(--esc);color:#fff}
.fx{font-size:38px}
.pnl.vidro{background:linear-gradient(150deg,rgba(var(--mar),.72),rgba(var(--mar),.5));backdrop-filter:blur(26px) saturate(115%);-webkit-backdrop-filter:blur(26px) saturate(115%);border:2px solid rgba(255,255,255,.45);box-shadow:0 34px 80px rgba(var(--sb),.5),inset 0 2px 0 rgba(255,255,255,.35)}
.estr{display:flex;gap:12px;justify-content:center}
.estr svg{fill:#fff}
.bra .estr svg{fill:var(--esc)}
.bra .estr svg path{stroke:var(--esc)}
.nums{display:flex;flex-direction:column;align-items:center;gap:26px}
.nums strong{display:block;font-size:220px;line-height:.9;font-weight:800;letter-spacing:-.04em;color:var(--esc)}
.nums span{display:block;font-size:44px;font-weight:600;color:var(--tin);margin-top:8px}
.nums i{width:46px;height:46px;transform:rotate(45deg);border-radius:12px;background:var(--grad)}
.aspas{font-size:300px;line-height:.6;font-weight:800;height:150px;font-family:Georgia,serif}
.bra .aspas{color:#38C8F8}
.forte .aspas,.sob .aspas{color:rgba(255,255,255,.55)}
.fala{margin:0;font-size:74px;line-height:1.12;font-weight:300;letter-spacing:-.02em;text-wrap:balance}
.fala b{font-weight:800}
.bra .fala{color:var(--esc)}
.quem{margin:0;font-size:36px;line-height:1.35}
.quem b{font-size:42px;font-weight:800}
.bra .quem{color:var(--tin)}
.chips{display:flex;flex-wrap:wrap;justify-content:center;gap:18px}
.chips span{padding:18px 30px;border-radius:99px;font-size:34px;font-weight:800;background:#fff;color:var(--tin);box-shadow:0 10px 26px rgba(var(--sb),.18);border:2.5px solid rgba(56,200,248,.7)}
.dias{display:flex;gap:10px;justify-content:center}
.dias span{width:112px;padding:22px 0;border-radius:24px;background:#fff;color:var(--esc);font-size:31px;font-weight:800;text-align:center;box-shadow:0 12px 26px rgba(var(--sb),.3)}
.dias span.fds{background:var(--pil);color:var(--piltx)}
.passos{display:flex;flex-direction:column;gap:34px;width:100%}
.passo{display:flex;align-items:center;gap:44px;padding:30px 40px 30px 34px;border-radius:30px;background:#fff;box-shadow:0 18px 44px rgba(8,19,48,.13);text-align:left}
.passo .n{flex:none;width:104px;height:104px;margin:10px;transform:rotate(45deg);border-radius:26px;background:var(--grad);display:flex;align-items:center;justify-content:center}
.passo .n b{transform:rotate(-45deg);color:#fff;font-size:58px;font-weight:800}
.passo p{margin:0;font-size:44px;line-height:1.2;color:var(--tin);font-weight:500}
.passo p b{font-weight:800;color:var(--esc)}
.seg{position:absolute;width:210px;height:210px;transform:rotate(45deg);border-radius:44px;overflow:hidden;z-index:4;box-shadow:0 24px 50px rgba(var(--sb),.45);border:5px solid #fff}
.seg img{position:absolute;left:-20%;top:-20%;width:140%;height:140%;object-fit:cover;transform:rotate(-45deg);max-width:none}
.rot{position:absolute;width:300px;text-align:center;font-size:36px;font-weight:800;z-index:5}
.no{position:absolute;padding:16px 28px;border-radius:99px;background:#fff;color:var(--tin);font-size:32px;font-weight:800;white-space:nowrap;transform:translate(-50%,-50%);z-index:5;box-shadow:0 14px 30px rgba(var(--sb),.35)}
`;

// ---------- blocos ----------
const logo = (e) => `<img class="lg" src="${url(path.join(LOGOS, e ? 'logo-dark.png' : 'logo-light.png'))}" alt="">`;
// Losangos nos cantos, longe do logo e do texto.
const lo = (b) => `<i class="g" style="width:340px;height:340px;top:-170px;left:-140px"></i><i class="gf" style="width:240px;height:240px;top:-100px;right:-80px"></i><i class="g ${b ? 'b' : ''}" style="width:360px;height:360px;bottom:-190px;right:-110px"></i><i class="g ${b ? 'b' : ''}" style="width:260px;height:260px;bottom:-140px;left:-80px"></i>`;
// Pontos de luz no fundo (pedido da Jessica em 31/10/2026: "mais pontos de luz").
const luzes = () => `<div class="luz" style="left:-320px;top:380px;width:1000px;height:1000px"></div><div class="luz" style="right:-360px;top:1100px;width:900px;height:900px;opacity:.7"></div>`;
const pg = (tema, cl, corpo) => `<div class="p ${tema} ${cl}">${corpo}</div>`;
const selo = (t) => `<span class="selo" data-a="up">${t}</span>`;
const ESTRELA = (t) => `<svg viewBox="0 0 24 24" style="width:${t}px;height:${t}px"><path d="M12 3.2l2.6 5.5 6 .8-4.4 4.1 1.1 5.9L12 16.6l-5.3 2.9 1.1-5.9L3.4 9.5l6-.8z" stroke="#fff" stroke-width="2.2" stroke-linejoin="round"/></svg>`;
const estrelas = (t, a = '') => `<div class="estr"${a ? ` data-a="${a}"` : ''}>${ESTRELA(t).repeat(5)}</div>`;
// Foto em cartão inclinado, com o cartão branco atrás.
const cartao = (f, x, y, w, h, g1, g2, pos = '50% 50%') => `<div data-a="card"><div class="atr" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px;transform:rotate(${g1}deg)"></div><img class="car" src="${img(f)}" alt="" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px;transform:rotate(${g2}deg);object-position:${pos}"></div>`;
// Tela real em cartão, centrada na área [y0, y1], com o texto da tela repetido em destaque quando fica pequeno.
function tela(n, y0, y1, w, giro = 0, dq = '', dx = 0) {
  const mk = path.join(MOCKUPS, n + '.png');
  const pronto = fs.existsSync(mk);
  const a = proporcao(pronto ? mk : arqTela(n));
  const area = y1 - y0 - (dq ? 90 : 0);
  const W = Math.min(w, area * a); const H = W / a; const top = y0 + (area - H) / 2;
  const x = (1080 - W) / 2 + dx;
  const caixa = `left:${x}px;top:${top}px;width:${W}px;height:${H}px;transform:rotate(${giro}deg)`;
  const d = dq ? `<div class="dq" style="top:${top + H + 30}px" data-a="pop"><span>${dq}</span></div>` : '';
  const atr = `<div class="atr" style="left:${x}px;top:${top}px;width:${W}px;height:${H}px;transform:rotate(${giro + 3}deg);opacity:.35"></div>`;
  if (pronto) return `<div data-a="card"><img src="${url(mk)}" alt="" style="position:absolute;z-index:5;object-fit:contain;max-width:none;${caixa}"></div>${d}`;
  return `<div data-a="card">${atr}<div class="tl" style="${caixa}"><img src="${url(arqTela(n))}" alt=""></div></div>${d}`;
}
const pilula = (t, cl = '', top = 1180) => `<div style="position:absolute;left:0;right:0;top:${top}px;text-align:center;z-index:7" data-a="pop"><span class="pl ${cl}">${t}</span></div>`;
const provas = '<div class="prv" data-a="up"><div><strong>+600</strong><span>clientes</span></div><i></i><div><strong>+16</strong><span>anos de experiência</span></div></div>';
// Foto cheia com tom da marca e degradê forte embaixo, onde fica o texto.
const fotoCheia = (f, pos = '50% 30%') => `<img class="cheia" src="${img(f)}" alt="" style="object-position:${pos}"><div style="position:absolute;inset:0;z-index:2;background:rgba(var(--mar),.22)"></div><div style="position:absolute;inset:0;z-index:3;background:linear-gradient(180deg,rgba(var(--sb),.55) 0%,rgba(var(--mar),0) 22%,rgba(var(--mar),0) 44%,rgba(var(--mar),.9) 62%,rgba(var(--mar),1) 100%)"></div>`;
const depo = (tema, cl, fala, nome, sobre, fs = 74, fundo = '') => pg(tema, cl, `${fundo}${cl === 'bra' ? luzes() + lo(1) : cl === 'forte' ? luzes() + lo() : ''}${logo(cl === 'bra')}<div class="z" style="top:400px;height:1180px;gap:44px"><div class="aspas" data-a="pop">&ldquo;</div><p class="fala" style="font-size:${fs}px" data-a="words">${fala}</p><p class="quem" data-a="up"><b>${nome}</b><br>${sobre}</p>${estrelas(46, 'stagger')}<span class="selo" data-a="up">Avaliação no Google</span></div>`);

// ---------- os destaques ----------
const D = [
  { grupo: 'quem-somos', nome: 'Quem somos', icone: 'pessoas', stories: [
    { motion: true, html: pg('azul', 'forte', `${luzes()}${lo()}${logo()}<div class="z" style="top:400px;height:730px">${selo('Quem somos')}<h2 style="font-size:98px" data-a="words">Há <b>mais de 16 anos</b> na gestão de quem <b>vende todo dia.</b></h2><p class="ap" data-a="up">ERP para farmácias, drogarias e padarias.</p></div>${cartao('maos-teclado-mesa', 160, 1185, 760, 380, 3, -2)}`) },
    { motion: true, html: pg('azul', 'bra', `${luzes()}${lo(1)}${logo(1)}<div class="z" style="top:390px;height:1190px;gap:56px"><h2 style="font-size:116px" data-a="words">Quem usa, <b>fica.</b></h2><div class="nums"><div data-a="up"><strong data-a="count" data-to="600">+600</strong><span>clientes</span></div><i data-a="pop"></i><div data-a="up"><strong data-a="count" data-to="16">+16</strong><span>anos de experiência</span></div></div><p class="fx" data-a="up">Suporte humanizado das <b>7h às 22h</b>, inclusive sábado e domingo.</p></div>`) },
    { html: pg('azul', 'forte', `${luzes()}${lo()}${logo()}<div class="z" style="top:400px;height:400px"><h2 style="font-size:86px" data-a="words">Caixa, estoque, fiscal e gestão em <b>um só sistema.</b></h2></div>${tela('fechamento-caixa', 850, 1360, 900, -2)}<div class="z" style="top:1400px;height:180px"><p class="fx" style="background:#fff;color:var(--tin)" data-a="up">Com especialistas de verdade no suporte.</p></div>`) },
    { link: true, html: pg('azul', 'forte', `${luzes()}${lo()}<i class="gf" style="left:50%;top:520px;width:620px;height:620px;margin-left:-310px;opacity:.18;z-index:0"></i>${logo()}<div class="z" style="top:400px;height:740px;gap:60px"><h2 style="font-size:104px" data-a="words">Quer ver o Prosystem <b>no seu negócio?</b></h2>${provas}</div>${pilula('Toque no link ↓', '', 1170)}`) },
  ] },
  { grupo: 'segmentos', nome: 'Segmentos', icone: 'loja', stories: [
    { motion: true, html: pg('azul', 'forte', `${luzes()}${lo()}${logo()}<div class="z" style="top:400px;height:560px">${selo('Segmentos')}<h2 style="font-size:104px" data-a="words">Feito para quem <b>vende todo dia.</b></h2></div><div data-a="stagger"><div class="seg" style="left:${245 - 105}px;top:1060px"><img src="${img('farmaceutica-recorte')}" alt="" style="object-position:30% 30%"></div><div class="seg" style="left:${540 - 105}px;top:1060px"><img src="${img('comprimidos-coloridos')}" alt=""></div><div class="seg" style="left:${835 - 105}px;top:1060px;border-color:#F88818"><img src="${img('paezinhos-cesta')}" alt=""></div></div><div data-a="stagger"><div class="rot" style="left:95px;top:1395px">Farmácia</div><div class="rot" style="left:390px;top:1395px">Manipulação</div><div class="rot" style="left:685px;top:1395px">Padaria</div></div>`) },
    { html: pg('azul', 'bra', `${luzes()}${lo(1)}${logo(1)}<i class="g" style="left:50%;top:470px;width:590px;height:590px;margin-left:-295px;z-index:2;border-color:#38C8F8"></i><div class="dia" data-a="pop" style="top:500px;width:530px;height:530px;margin-left:-265px;border-radius:70px;box-shadow:0 30px 70px rgba(8,19,48,.3)"><img src="${img('farmaceutica-recorte')}" alt="" style="object-position:35% 30%"></div><div class="z" style="top:1190px;height:390px;gap:34px"><h2 style="font-size:100px" data-a="words">Farmácia e <b>drogaria</b></h2><p class="fx" data-a="up">Caixa, <b>SNGPC</b>, <b>PBM</b>, lote, validade e uso contínuo.</p></div>`) },
    { html: pg('azul', 'sob', `${fotoCheia('comprimidos-coloridos', '50% 50%')}<div class="som" style="height:420px"></div><i class="g" style="width:420px;height:420px;top:430px;right:-200px;z-index:4"></i><i class="gf" style="width:200px;height:200px;top:760px;right:70px;z-index:4;opacity:.8"></i>${logo()}<div class="z" style="top:1080px;height:500px;gap:30px">${selo('Manipulação')}<h2 style="font-size:96px" data-a="words">Farmácia de <b>manipulação</b></h2><p class="fx" style="background:#fff;color:var(--tin)" data-a="up">Módulo de manipulação no plano <b>Farma Plus.</b></p></div>`) },
    { html: pg('lar', 'forte', `${luzes()}${lo()}${logo()}<div class="z" style="top:400px;height:430px"><h2 style="font-size:96px" data-a="words">Na <b>padaria</b>, o caixa no ritmo da <b>fornada.</b></h2></div>${cartao('carrinho-paes', 210, 880, 660, 470, 4, -3, '50% 40%')}<div class="z" style="top:1400px;height:180px"><p class="fx" style="background:#fff;color:var(--esc)" data-a="up">Pesagem no caixa, sangria com aviso, produção e controle de mesas.</p></div>`) },
  ] },
  { grupo: 'ferramentas', nome: 'Ferramentas', icone: 'ferramenta', stories: [
    { motion: true, html: pg('azul', 'forte', `${luzes()}${lo()}${logo()}<div class="z" style="top:400px;height:560px">${selo('Ferramentas')}<h2 style="font-size:100px" data-a="words">O que o Prosystem faz <b>pelo seu negócio.</b></h2></div>${tela('painel-vendas', 1000, 1330, 560, -8, '', -200)}${tela('curva-abc', 1040, 1370, 560, 7, '', 200)}${tela('painel-estoque', 1150, 1560, 640, -1)}`) },
    { html: pg('azul', 'bra', `${luzes()}${lo(1)}${logo(1)}<div class="z" style="top:400px;height:420px;gap:34px">${selo('Uso contínuo')}<h2 style="font-size:84px" data-a="words">O remédio do seu cliente acaba em <b>8 dias.</b></h2></div>${tela('uso-continuo-alerta', 850, 1310, 900, -1.5, 'Previsão próxima compra: 8 DIAS')}<div class="z" style="top:1340px;height:240px"><p class="fx" data-a="up">O sistema calcula a próxima compra pela posologia e <b>avisa o balcão antes.</b></p></div>`) },
    { html: pg('azul', 'forte', `${luzes()}${lo()}${logo()}<div class="z" style="top:400px;height:420px;gap:34px">${selo('Sangria obrigatória')}<h2 style="font-size:92px" data-a="words">Gaveta cheia <b>não passa batido.</b></h2></div>${tela('sangria-bloqueio', 850, 1310, 900, 1.5, 'Caixa bloqueado, favor efetuar a sangria programada')}<div class="z" style="top:1340px;height:240px"><p class="fx" style="background:#fff;color:var(--tin)" data-a="up">Avisa o caixa num valor e <b>bloqueia a venda</b> em outro, até a sangria ser feita.</p></div>`) },
    { html: pg('azul', 'bra', `${luzes()}${lo(1)}${logo(1)}<div class="z" style="top:400px;height:420px;gap:34px">${selo('Avisos no WhatsApp')}<h2 style="font-size:88px" data-a="words">O fechamento do caixa <b>no seu WhatsApp.</b></h2></div>${tela('whats-fechamento', 850, 1330, 900, -1.5)}<div class="z" style="top:1360px;height:220px"><p class="fx" data-a="up">Venda bruta, descontos, sangrias e pagamentos, onde você estiver. <b>No plano Plus.</b></p></div>`) },
    { html: pg('azul', 'forte', `${luzes()}${lo()}${logo()}<div class="z" style="top:400px;height:420px;gap:34px">${selo('Perda de vendas')}<h2 style="font-size:92px" data-a="words">A venda perdida <b>também tem motivo.</b></h2></div>${tela('perda-vendas-painel', 850, 1330, 900, 1.5)}<div class="z" style="top:1360px;height:220px"><p class="fx" style="background:#fff;color:var(--tin)" data-a="up">Cada item excluído pede um motivo, e o gráfico mostra <b>o que você deixou de vender.</b></p></div>`) },
  ] },
  { grupo: 'integracoes', nome: 'Integrações', icone: 'elo', stories: [
    { motion: true, html: pg('azul', 'forte', `${luzes()}${lo()}${logo()}<div class="z" style="top:400px;height:520px">${selo('Integrações')}<h2 style="font-size:92px" data-a="words">O seu sistema <b>conversa</b> com o que você já usa.</h2></div>${rede()}`) },
    { html: pg('azul', 'bra', `${luzes()}${lo(1)}${logo(1)}<div class="z" style="top:400px;height:1180px;gap:50px">${selo('Planos Pro e Plus')}<h2 style="font-size:88px" data-a="words">Integrações <b>prontas</b> para a sua farmácia.</h2><div class="chips" data-a="stagger">${['Farmácia Popular', 'TEF', 'Napp', 'FarmaciasApp', 'Tray', 'Imendes', 'Avant', 'E-Diretor', 'RV-Tecnologia', 'PG Farma', 'Balanço Coletor', 'Balanço Celular'].map((n) => `<span>${n}</span>`).join('')}</div><p class="fx" data-a="up">A lista muda conforme o plano. <b>Pergunte pela sua.</b></p></div>`) },
    { link: true, html: pg('azul', 'forte', `${luzes()}${lo()}${logo()}<div class="z" style="top:400px;height:740px;gap:50px"><h2 style="font-size:100px" data-a="words">Usa outro programa? <b>Pergunte para a gente.</b></h2><p class="ap" data-a="up">Um especialista confirma a integração para o seu caso.</p></div>${pilula('Toque no link ↓', '', 1170)}`) },
  ] },
  { grupo: 'suporte', nome: 'Suporte', icone: 'fone', stories: [
    { motion: true, html: pg('azul', 'forte', `${luzes()}${lo()}<i class="g" style="left:50%;top:560px;width:560px;height:560px;margin-left:-280px;opacity:.35;z-index:0"></i>${logo()}<div class="z" style="top:400px;height:800px;gap:46px">${selo('Suporte')}<h2 style="font-size:150px;line-height:.98" data-a="words">Das <b>7h às 22h.</b></h2><p class="ap" style="font-size:52px" data-a="up">Inclusive <b>sábado e domingo.</b></p></div><div style="position:absolute;left:0;right:0;top:1290px;z-index:6"><div class="dias" data-a="stagger">${['SEG', 'TER', 'QUA', 'QUI', 'SEX'].map((d) => `<span>${d}</span>`).join('')}<span class="fds">SÁB</span><span class="fds">DOM</span></div></div>`) },
    { html: pg('azul', 'sob', `${fotoCheia('atendente-suporte', '50% 18%')}<div class="som" style="height:420px"></div><i class="g" style="width:380px;height:380px;top:420px;left:-230px;z-index:4"></i>${logo()}<div class="z" style="top:1130px;height:450px;gap:36px"><h2 style="font-size:100px" data-a="words">Gente de verdade <b>do outro lado.</b></h2><p class="fx" style="background:#fff;color:var(--tin)" data-a="up">Suporte humanizado, com <b>especialistas técnicos.</b></p></div>`) },
    { html: pg('azul', 'bra', `${luzes()}${lo(1)}${logo(1)}<div class="z" style="top:400px;height:1180px;gap:64px"><h2 style="font-size:96px" data-a="words">Precisou de ajuda? <b>É assim:</b></h2><div class="passos" data-a="stagger"><div class="passo"><div class="n"><b>1</b></div><p>Chame no <b>WhatsApp.</b></p></div><div class="passo"><div class="n"><b>2</b></div><p>Mande <b>áudio, texto ou print</b> da tela.</p></div><div class="passo"><div class="n"><b>3</b></div><p>Um <b>especialista técnico</b> atende você.</p></div></div></div>`) },
  ] },
  { grupo: 'depoimentos', nome: 'Depoimentos', icone: 'estrela', stories: [
    { motion: true, html: pg('azul', 'forte', `${luzes()}${lo()}${logo()}<div class="z" style="top:400px;height:1180px;gap:60px">${selo('Depoimentos')}<h2 style="font-size:124px" data-a="words">Quem usa, <b>recomenda.</b></h2>${estrelas(104, 'stagger')}<p class="ap" data-a="up">Avaliações de clientes no Google.</p></div>`) },
    { html: depo('azul', 'bra', 'Eu tenho <b>duas farmácias</b> e há quase <b>15 anos</b> de empresa trabalho com o software da Prosystem!', 'Krisley Kretli de Oliveira', 'Dona de duas farmácias', 70) },
    { html: depo('azul', 'forte', 'Suporte humanizado tanto segunda a sexta quanto <b>sábado e domingo,</b> sem aquelas frescuras de falar com robô.', 'Samuel Ferreira', 'Cliente ProSystem', 68) },
    { html: depo('azul', 'sob', 'Já tive outros, mas o <b>único que os funcionários não reclamam</b> aqui é a Prosystem.', 'Paulo Siqueira', 'Cliente ProSystem', 72, `<img class="cheia" src="${img('prateleiras-desfocadas')}" alt="" style="filter:blur(6px) brightness(.8);transform:scale(1.06)"><div style="position:absolute;inset:0;z-index:1;background:linear-gradient(170deg,rgba(8,19,48,.75),rgba(46,109,180,.82) 55%,rgba(56,152,216,.75))"></div><div class="som" style="height:420px"></div>`) },
    { html: depo('azul', 'bra', 'Trabalho com eles há <b>13 anos</b> e não pretendo mudar.', 'Rodrigo Amancio', 'Cliente ProSystem', 84) },
  ] },
  { grupo: 'contato', nome: 'Contato', icone: 'conversa', stories: [
    { motion: true, link: true, html: pg('azul', 'forte', `${luzes()}${lo()}${logo()}<div class="z" style="top:390px;height:420px;gap:40px">${selo('Contato')}<h2 style="font-size:108px" data-a="words">Fale com um <b>especialista.</b></h2></div>${cartao('maos-digitando', 210, 850, 660, 210, 3, -2, '50% 60%')}<div class="z" style="top:1095px;height:70px"><p class="ap" style="font-size:38px" data-a="up">WhatsApp, das 7h às 22h, todos os dias.</p></div>${pilula('Toque no link ↓', '', 1195)}`) },
    { link: true, html: pg('azul', 'bra', `${luzes()}${lo(1)}${logo(1)}${cartao('farmaceutica-receita', 230, 440, 620, 340, 3, -2, '50% 35%')}<div class="z" style="top:820px;height:340px;gap:30px">${selo('Blog ProSystem')}<h2 style="font-size:78px" data-a="words">Artigos novos para <b>farmácia e padaria.</b></h2></div>${pilula('Toque no link ↓', 'oe', 1195)}`) },
    { link: true, html: pg('azul', 'forte', `${luzes()}${lo()}${logo()}${cartao('calculadora', 230, 440, 620, 340, -3, 2)}<div class="z" style="top:820px;height:340px;gap:30px">${selo('E-book gratuito')}<h2 style="font-size:72px" data-a="words">Margem de lucro na farmácia, <b>sem fórmula mágica.</b></h2></div>${pilula('Toque no link ↓', '', 1195)}`) },
  ] },
];

// Rede de integrações: o Prosystem no centro, ligado a seis nós por linhas que se desenham no vídeo.
function rede() {
  const cx = 540, cy = 1260;
  const nos = [['TEF', -330, -200], ['Farmácia Popular', 260, -230], ['Tray', -380, 60], ['Imendes', 370, 40], ['Napp', -250, 270], ['Balanço Coletor', 250, 280]];
  const linhas = nos.map(([, dx, dy]) => `<path data-a="draw" d="M${cx} ${cy} Q ${cx + dx * 0.5} ${cy + dy * 0.1} ${cx + dx} ${cy + dy}"/>`).join('');
  return `<svg viewBox="0 0 1080 1920" style="position:absolute;inset:0;width:100%;height:100%;z-index:3" fill="none" stroke="rgba(255,255,255,.85)" stroke-width="4" stroke-linecap="round" stroke-dasharray="2 14">${linhas}</svg>`
    + `<i class="g" data-a="pop" style="left:${cx - 170}px;top:${cy - 170}px;width:340px;height:340px;z-index:3;border-color:rgba(56,200,248,.9)"></i>`
    + `<div data-a="pop" style="position:absolute;left:${cx - 125}px;top:${cy - 125}px;width:250px;height:250px;transform:rotate(45deg);border-radius:50px;background:#fff;z-index:4;box-shadow:0 26px 60px rgba(8,19,48,.45);display:flex;align-items:center;justify-content:center"><img src="${url(path.join(LOGOS, 'logo-dark.png'))}" alt="" style="width:200px;transform:rotate(-45deg);max-width:none"></div>`
    + `<div data-a="stagger">${nos.map(([n, dx, dy]) => `<div class="no" style="left:${cx + dx}px;top:${cy + dy}px">${n}</div>`).join('')}</div>`;
}

// ---------- capas (1080×1080; o Instagram recorta em círculo) ----------
// Ícones de traço (Lucide, licença ISC). O caderno ainda não tem biblioteca de ícones aprovada: proposta para a Jessica.
const ICONES = {
  pessoas: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  loja: '<path d="M3 9.5 5 4h14l2 5.5"/><path d="M3 9.5a3 3 0 0 0 6 0a3 3 0 0 0 6 0a3 3 0 0 0 6 0"/><path d="M5 12.3V20h14v-7.7"/><path d="M10 20v-5h4v5"/>',
  ferramenta: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  elo: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
  fone: '<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>',
  estrela: '<path d="M12 3.2l2.6 5.5 6 .8-4.4 4.1 1.1 5.9L12 16.6l-5.3 2.9 1.1-5.9L3.4 9.5l6-.8z"/>',
  conversa: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M8 12h.01M12 12h.01M16 12h.01" stroke-width="2.6"/>',
};
const capa = (icone) => `<div style="position:absolute;inset:0;overflow:hidden;background:linear-gradient(155deg,#2E6DB4 0%,#417ABC 48%,#3898D8 78%,#38C8F8 100%)">
<div style="position:absolute;left:-200px;top:-240px;width:900px;height:900px;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.32),rgba(255,255,255,0) 66%)"></div>
<div style="position:absolute;left:640px;top:170px;width:270px;height:270px;transform:rotate(45deg);border-radius:56px;background:linear-gradient(135deg,rgba(56,200,248,.95),rgba(65,122,188,.35))"></div>
<div style="position:absolute;left:50%;top:50%;width:560px;height:560px;margin:-280px 0 0 -280px;transform:rotate(45deg);border-radius:110px;background:linear-gradient(135deg,rgba(255,255,255,.26),rgba(255,255,255,.08));border:7px solid rgba(255,255,255,.9);box-shadow:0 40px 90px rgba(8,19,48,.35),inset 0 2px 0 rgba(255,255,255,.4)"></div>
<svg viewBox="0 0 24 24" style="position:absolute;left:50%;top:50%;width:350px;height:350px;margin:-175px 0 0 -175px;filter:drop-shadow(0 10px 18px rgba(8,19,48,.3))" fill="none" stroke="#fff" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">${ICONES[icone]}</svg></div>`;

// ---------- página e animação ----------
const documento = (corpo, w, h) => `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600;700;800&display=swap" rel="stylesheet"><style>*{box-sizing:border-box}html,body{margin:0}${css}${STORY}</style></head><body><div class="post" style="width:${w}px;height:${h}px">${corpo}</div></body></html>`;

// Divide os títulos animados em palavras (também no PNG, para a quebra de linha ser igual à do vídeo).
function dividir() {
  const partir = (n) => {
    const f = document.createDocumentFragment();
    for (const p of n.textContent.split(/(\s+)/)) {
      if (!p) continue;
      if (/^\s+$/.test(p)) { f.append(p); continue; }
      const s = document.createElement('span'); s.className = 'w'; s.style.display = 'inline-block'; s.textContent = p; f.append(s);
    }
    n.replaceWith(f);
  };
  for (const el of document.querySelectorAll('[data-a="words"]')) {
    for (const n of [...el.childNodes]) {
      if (n.nodeType === 3) partir(n);
      else if (n.nodeName === 'B') [...n.childNodes].filter((c) => c.nodeType === 3).forEach(partir);
    }
  }
}

// Roda dentro da página: monta as animações pausadas e expõe ir(ms). Tudo termina na pose final, igual ao PNG.
function montar() {
  const ease = 'cubic-bezier(.2,.8,.2,1)';
  const anim = (el, kf, ini, dur, o = {}) => el.animate(kf, { delay: ini, duration: dur, easing: ease, fill: 'both', ...o });
  const W = 1080, H = 1920;
  document.querySelectorAll('.luz').forEach((l, k) => {
    anim(l, [{ opacity: 0, scale: '.6' }, { opacity: getComputedStyle(l).opacity, scale: '1' }], k * 200, 1800);
    anim(l, [{ translate: '0 0' }, { translate: `${k ? -40 : 40}px ${k ? 30 : -30}px` }], 1800, 3200, { iterations: Infinity, direction: 'alternate', easing: 'ease-in-out', composite: 'add' });
  });
  [...document.querySelectorAll('.p > i.g:not([data-a]), .p > i.gf:not([data-a])')].forEach((l, k) => {
    const r = l.getBoundingClientRect();
    const dx = (r.left + r.width / 2 < W / 2 ? -1 : 1) * 160, dy = (r.top + r.height / 2 < H / 2 ? -1 : 1) * 160;
    anim(l, [{ opacity: 0, translate: `${dx}px ${dy}px`, scale: '.6' }, { opacity: getComputedStyle(l).opacity, translate: '0 0', scale: '1' }], k * 90, 1100);
  });
  const lg = document.querySelector('.lg');
  if (lg) anim(lg, [{ opacity: 0, translate: '0 -30px' }, { opacity: 1, translate: '0 0' }], 200, 700);
  const contas = [];
  let t = 650;
  for (const el of document.querySelectorAll('[data-a]')) {
    const tipo = el.dataset.a;
    const ini = t;
    if (tipo === 'words') {
      const ws = [...el.querySelectorAll('.w')];
      ws.forEach((w, k) => {
        if (w.parentNode.nodeName === 'B') anim(w, [{ opacity: 0, scale: '1.5' }, { opacity: 1, scale: '.95', offset: 0.7 }, { opacity: 1, scale: '1' }], ini + k * 105, 600);
        else anim(w, [{ opacity: 0, translate: '0 .35em', filter: 'blur(10px)' }, { opacity: 1, translate: '0 0', filter: 'blur(0)' }], ini + k * 105, 650);
      });
      t = ini + ws.length * 105 + 250;
    } else if (tipo === 'up') { anim(el, [{ opacity: 0, translate: '0 44px' }, { opacity: 1, translate: '0 0' }], ini, 750); t = ini + 220; }
    else if (tipo === 'pop') { anim(el, [{ opacity: 0, scale: '.55' }, { opacity: 1, scale: '1.06', offset: 0.7 }, { opacity: 1, scale: '1' }], ini, 650); t = ini + 220; }
    else if (tipo === 'card') { anim(el, [{ opacity: 0, translate: '0 220px', rotate: '-7deg' }, { opacity: 1, translate: '0 0', rotate: '0deg' }], ini, 950); t = ini + 300; }
    else if (tipo === 'stagger') { [...el.children].forEach((c, k) => anim(c, [{ opacity: 0, scale: '.4' }, { opacity: 1, scale: '1.1', offset: 0.7 }, { opacity: 1, scale: '1' }], ini + k * 110, 600)); t = ini + el.children.length * 110 + 150; }
    else if (tipo === 'draw') { const L = el.getTotalLength(); el.style.strokeDasharray = 'none'; anim(el, [{ strokeDasharray: `0 ${L}` }, { strokeDasharray: `${L} 0` }], ini, 900); t = ini + 80; }
    else if (tipo === 'count') { contas.push({ el, ini, dur: 1500, to: +el.dataset.to }); }
  }
  window.ir = (ms) => {
    document.getAnimations().forEach((a) => { a.pause(); a.currentTime = ms; });
    for (const c of contas) { const x = Math.min(1, Math.max(0, (ms - c.ini) / c.dur)); c.el.textContent = '+' + Math.round(c.to * (1 - Math.pow(1 - x, 3))); }
  };
  window.ir(0);
  return t;
}

const FPS = 30, DURACAO = 8000;

async function abrir(p, html, fonte = true) {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'prosystem-destaque-'));
  fs.writeFileSync(path.join(tmp, 'pagina.html'), html);
  await p.goto(url(path.join(tmp, 'pagina.html')), { waitUntil: 'networkidle0', timeout: 90000 });
  await p.evaluate(() => document.fonts.ready);
  if (fonte && !(await p.evaluate(() => document.fonts.check('800 40px Montserrat') && document.fonts.check('300 40px Montserrat')))) throw new Error('Montserrat não carregou; gere de novo');
  return tmp;
}

// Texto fora da zona segura, bloco estourado e figurinha sem espaço.
const conferir = (link) => {
  const r = [];
  for (const e of document.querySelectorAll('h2,p,.pl,.selo,.no,.rot,.prv,.chips,.dias span,.passos,.estr')) {
    const q = e.getBoundingClientRect();
    if (q.left < 50 || q.right > 1030 || q.top < 250 || q.bottom > 1580) r.push('fora da zona segura: ' + e.textContent.trim().slice(0, 40));
    if (link && q.bottom > 1290 && q.top < 1580) r.push('em cima da figurinha: ' + e.textContent.trim().slice(0, 40));
  }
  for (const e of document.querySelectorAll('.z')) if (e.scrollHeight > e.clientHeight + 2) r.push(`estouro: ${e.scrollHeight} > ${e.clientHeight} (${e.textContent.trim().slice(0, 30)})`);
  return r;
};

(async () => {
  const [modo = 'tudo', filtro] = process.argv.slice(2);
  fs.mkdirSync(SAIDA, { recursive: true });
  fs.mkdirSync(CAPAS, { recursive: true });
  const b = await puppeteer.launch({ headless: 'new', args: ['--allow-file-access-from-files'] });
  const p = await b.newPage();
  const problemas = [];
  const lista = D.flatMap((d) => d.stories.map((s, i) => ({ ...s, id: `destaque-${d.grupo}-v1-${i + 1}` }))).filter((s) => !filtro || s.id.includes(filtro));

  if (modo === 'tudo' || modo === 'png') {
    await p.setViewport({ width: 1080, height: 1920, deviceScaleFactor: 1 });
    for (const s of lista) {
      const tmp = await abrir(p, documento(s.html, 1080, 1920));
      await p.evaluate(dividir);
      (await p.evaluate(conferir, !!s.link)).forEach((f) => problemas.push(`${s.id}: ${f}`));
      await p.screenshot({ path: path.join(SAIDA, s.id + '.png'), clip: { x: 0, y: 0, width: 1080, height: 1920 } });
      fs.rmSync(tmp, { recursive: true, force: true });
    }
    console.log('stories:', lista.length);
  }

  if (modo === 'tudo' || modo === 'capas') {
    await p.setViewport({ width: 1080, height: 1080, deviceScaleFactor: 1 });
    for (const d of D.filter((x) => !filtro || x.grupo.includes(filtro))) {
      const tmp = await abrir(p, documento(capa(d.icone), 1080, 1080).replace('aspect-ratio:9/16', 'aspect-ratio:1'), false);
      await p.screenshot({ path: path.join(CAPAS, `capa-${d.grupo}-v1.png`), clip: { x: 0, y: 0, width: 1080, height: 1080 } });
      fs.rmSync(tmp, { recursive: true, force: true });
    }
    console.log('capas:', D.length);
  }

  if (modo === 'tudo' || modo === 'mp4') {
    await p.setViewport({ width: 1080, height: 1920, deviceScaleFactor: 1 });
    for (const s of lista.filter((x) => x.motion)) {
      const tmp = await abrir(p, documento(s.html, 1080, 1920));
      await p.evaluate(dividir);
      const fim = await p.evaluate(montar);
      if (fim > DURACAO - 2500) throw new Error(`${s.id}: animação termina em ${fim} ms; aumente DURACAO`);
      const quadros = Math.round((DURACAO / 1000) * FPS);
      for (let q = 0; q < quadros; q++) {
        await p.evaluate((ms) => window.ir(ms), (q * 1000) / FPS);
        await p.screenshot({ path: path.join(tmp, `q${String(q).padStart(4, '0')}.jpg`), type: 'jpeg', quality: 95, clip: { x: 0, y: 0, width: 1080, height: 1920 } });
      }
      execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', String(FPS), '-i', path.join(tmp, 'q%04d.jpg'), '-c:v', 'libx264', '-preset', 'slow', '-crf', '17', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', path.join(SAIDA, s.id + '.mp4')]);
      fs.rmSync(tmp, { recursive: true, force: true });
      console.log(`${s.id}.mp4: animação até ${fim} ms`);
    }
  }
  await b.close();
  console.log(problemas.length ? problemas.join('\n') : 'sem estouro');
})();
