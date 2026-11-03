// Gera as peças do planejamento de 04/11/2026 a 22/01/2027, 1080×1350, em PNG, e o arquivo legendas.md.
// Os estilos vêm de docs/conteudo-prosystem/feed_modelo.html, o feed simulado entregue à Jessica.
// Telas: se existir mockups/<tela>.png, feito pela Jessica, ele entra no lugar do cartão provisório.
// Uso: node outputs/criativos/nov-dez/gerar.js [id da peça]
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const AQUI = __dirname;
const RAIZ = path.join(AQUI, '..', '..', '..');
const SAIDA = path.join(AQUI, 'pecas');
const SITE = 'prosystemnet.com.br';
const url = (p) => 'file:///' + p.split(path.sep).join('/').replace(/ /g, '%20');

const PASTAS = [path.join(AQUI, 'fotos'), path.join(RAIZ, 'outputs/criativos/modelos/carrossel/fotos'), path.join(RAIZ, 'outputs/criativos/suporte/fotos')];
function img(n) {
  for (const d of PASTAS) { const f = path.join(d, n + '.jpg'); if (fs.existsSync(f)) return url(f); }
  throw new Error('foto não encontrada: ' + n);
}
const TELAS = [path.join(AQUI, 'telas'), path.join(RAIZ, 'banco imagens/telas-para-mockup/00-recortadas')];
function arqTela(n) {
  for (const d of TELAS) { const f = path.join(d, n + '.png'); if (fs.existsSync(f)) return f; }
  throw new Error('tela não encontrada: ' + n);
}
// Largura e altura ficam no cabeçalho do PNG.
function proporcao(f) { const b = fs.readFileSync(f); return b.readUInt32BE(16) / b.readUInt32BE(20); }

const css = fs.readFileSync(path.join(RAIZ, 'docs/conteudo-prosystem/feed_modelo.html'), 'utf8')
  .split('/* Peças */')[1].split('</style>')[0]
  .replace(/(?<![\w#.$-])(-?\d+(?:\.\d+)?)U\b/g, 'calc($1*var(--u))');
const LOGOS = path.join(RAIZ, 'docs/design/guia-de-estilos/assets');
// Ajustes sobre o feed simulado, feitos ao ver as peças em tamanho real.
const AJUSTES = `
.frs{top:190px;bottom:130px;justify-content:center}
.frs h4{font-size:116px}
.pnl{top:610px;bottom:70px;padding:36px 40px;gap:24px}
.tom{position:absolute;inset:0;background:rgba(var(--mar),.3);z-index:2}
.dq{position:absolute;left:0;right:0;text-align:center;z-index:6}
.dq span{display:inline-block;padding:12px 26px;border-radius:14px;background:#fff;color:var(--tin);font-size:31px;font-weight:800;box-shadow:0 10px 24px rgba(var(--sb),.4)}
.estr{display:flex;gap:8px;justify-content:center}
.estr svg{width:38px;height:38px;fill:#fff}
.laco{position:absolute;top:-62px;left:50%;margin-left:-62px;width:124px;height:124px;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 10px 24px rgba(var(--sb),.35)}
.laco svg{width:62px;height:86px;fill:none;stroke-width:17}
.pnl.vidro{background:linear-gradient(150deg,rgba(var(--mar),.74),rgba(var(--mar),.5));backdrop-filter:blur(26px) saturate(115%);-webkit-backdrop-filter:blur(26px) saturate(115%);border:2px solid rgba(255,255,255,.45);box-shadow:0 34px 80px rgba(var(--sb),.5),inset 0 2px 0 rgba(255,255,255,.35)}
.pnl.vidro::before{content:'';position:absolute;inset:0;border-radius:inherit;background:linear-gradient(160deg,rgba(255,255,255,.26),rgba(255,255,255,0) 42%);pointer-events:none}
.pnl.vidro>h2,.pnl.vidro>p,.pnl.vidro>span{position:relative}
`;

// ---------- blocos das peças (mesmos do feed simulado) ----------
const lo = (b) => `<i class="g" style="width:${px(310)};height:${px(310)};top:${px(-150)};left:${px(-120)}"></i><i class="gf" style="width:${px(220)};height:${px(220)};top:${px(-90)};right:${px(-70)}"></i><i class="g ${b ? 'b' : ''}" style="width:${px(330)};height:${px(330)};bottom:${px(-180)};right:${px(-100)}"></i><i class="g ${b ? 'b' : ''}" style="width:${px(240)};height:${px(240)};bottom:${px(-130)};left:${px(-70)}"></i>`;
const logo = (e) => `<img class="lg" src="${url(path.join(LOGOS, e ? 'logo-dark.png' : 'logo-light.png'))}" alt="">`;
function px(n) { return `calc(${n}*var(--u))`; }
const foto = (n, st = '') => `<img class="ft" src="${img(n)}" alt="" style="${st}">`;
const usadas = new Set();
// Mensagem que fica pequena na tela: o caderno manda repetir o texto real ampliado, sem mudar as palavras.
const DESTAQUE = {
  'sangria-aviso': 'Favor efetuar Sangria programada no caixa',
  'sangria-bloqueio': 'Caixa bloqueado, favor efetuar a sangria programada',
  'uso-continuo-alerta': 'Previsão próxima compra: 8 DIAS',
  'dias-sem-giro': 'Dias Sem Giro: 30 dias',
  'painel-estoque': 'Inventário (custo): R$ 915.912,20',
  'rentabilidade-relatorio': '0-Geral   1-Positivos   2-Negativos',
};
function tela(n, x, y, w, h, giro = 0) {
  usadas.add(n);
  const mk = path.join(AQUI, 'mockups', n + '.png');
  const pronto = fs.existsSync(mk);
  const a = proporcao(pronto ? mk : arqTela(n)); const W = Math.min(w, h * a); const H = W / a;
  const topo = y + (h - H) / 2;
  const caixa = `left:${px(x + (w - W) / 2)};top:${px(topo)};width:${px(W)};height:${px(H)};transform:rotate(${giro}deg)`;
  const dq = DESTAQUE[n] ? `<div class="dq" style="top:${px(topo + H + 12)}"><span>${DESTAQUE[n]}</span></div>` : '';
  if (pronto) return `<img src="${url(mk)}" alt="" style="position:absolute;z-index:5;object-fit:contain;max-width:none;${caixa}">${dq}`;
  // Tela em faixa fina: sem margem, para o texto ocupar toda a largura.
  return `<div class="tl" style="${caixa}${H < 80 ? ';padding:0;border-radius:0' : ''}"><img src="${url(arqTela(n))}" alt=""></div>${dq}`;
}
const cena = (f, altura, canto, dentro) => `<div class="cn" style="height:${px(altura)};${canto ? `border-radius:0 0 ${px(70)} ${px(70)}` : ''}">${foto(f)}${dentro || ''}</div>`;
const provas = '<div class="prv"><div><strong>+600</strong><span>clientes</span></div><i></i><div><strong>+16</strong><span>anos de experiência</span></div></div>';
const num = (i) => `<div class="num">${i} / 6</div>`;
const pg = (tema, cl, corpo) => `<div class="p ${tema} ${cl}">${corpo}</div>`;
const pilAbs = (cl, t) => `<div style="position:absolute;left:0;right:0;bottom:${px(66)};text-align:center;z-index:7"><span class="${cl}">${t}</span></div>`;

function v2(c) {
  const t = c.tema;
  const out = [pg(t, 'forte sob', `${cena(c.capa.foto, 900, 0, c.capa.tela ? tela(c.capa.tela, 90, 180, 900, 400) : '')}<div class="gr"></div><div class="som"></div>${logo()}<div class="cap"><h2>${c.capa.titulo}</h2><p>${c.capa.apoio}</p><span class="pl o">Arraste para o lado →</span></div>`)];
  c.itens.forEach((it, k) => out.push(pg(t, 'bra', `${cena(it.foto, 700, 1, it.tela ? tela(it.tela, 110, 170, 860, 410) : '')}<div class="som"></div>${logo()}<div class="sel"><span>${k + 1}</span></div><div class="txt"><h2>${it.titulo}</h2><p class="fx">${it.apoio}</p></div>${num(k + 2)}`)));
  out.push(pg(t, 'forte sob', `${cena(c.sol.foto, 1350, 0, c.sol.tela ? tela(c.sol.tela, 80, 190, 920, 600) : '')}<div class="som"></div>${logo()}<div class="pain"><h2>${c.sol.titulo}</h2><p>${c.sol.apoio}</p></div>${num(5)}`));
  out.push(pg(t, 'forte sob', `${cena(c.fim.foto, 560, 1, c.fim.tela ? tela(c.fim.tela, 170, 170, 740, 330) : '')}<div class="som"></div>${logo()}<div class="fim"><h2>${c.fim.titulo}</h2>${provas}<span class="pl">Fale com um especialista</span><div class="site">${SITE}</div></div>`));
  return out;
}

function v3(c) {
  const t = c.tema;
  const cartao = (x, y, w, h, g1, g2, f, fundo = true) => `${fundo ? `<div class="atr" style="left:${px(x)};top:${px(y)};width:${px(w)};height:${px(h)};transform:rotate(${g1}deg)"></div>` : ''}<img class="car" src="${img(f)}" alt="" style="left:${px(x)};top:${px(y)};width:${px(w)};height:${px(h)};transform:rotate(${g2}deg)">`;
  const sobre = (it, i) => pg(t, 'sob', `<img class="cheia" src="${img(it.foto)}" alt=""><div class="tint"></div><div class="som"></div>${logo()}<div class="sb3"><div class="n3">${it.n}</div><h2>${it.titulo}</h2><p>${it.apoio}</p></div>${num(i)}`);
  const out = [pg(t, 'forte', `${lo()}${logo()}<div class="c3"><h2 style="font-size:${px(c.capa.fs || 110)}">${c.capa.titulo}</h2></div>${cartao(170, 740, 740, 420, 4, -3, c.capa.foto)}<div class="pb"><span class="pl o">Arraste para o lado →</span></div>`)];
  out.push(sobre(c.itens[0], 2));
  const m = c.itens[1];
  out.push(pg(t, 'bra', `${logo(1)}<div class="dia"><img src="${img(m.foto)}" alt=""></div><div class="n3b">${m.n}</div><div class="t3"><h2>${m.titulo}</h2><p class="fx">${m.apoio}</p></div>${num(3)}`));
  out.push(sobre(c.itens[2], 4));
  out.push(pg(t, 'forte sob', `${lo()}${logo()}${c.sol.tela ? tela(c.sol.tela, 110, 200, 860, 520, -1.5) : cartao(130, 210, 820, 500, 3, -2, c.sol.foto)}<div class="s3"><h2>${c.sol.titulo}</h2><p>${c.sol.apoio}</p></div>${num(5)}`));
  out.push(pg(t, 'forte', `${lo()}${logo()}<div class="f3"><h2>${c.fim.titulo}</h2>${provas}<span class="pl">Fale com um especialista</span><div class="site">${SITE}</div></div>${cartao(70, 930, 470, 340, 0, -5, c.fim.fotos[0], false)}${cartao(540, 950, 470, 340, 0, 4, c.fim.fotos[1], false)}`));
  return out;
}

// Laço vermelho do Dezembro Vermelho, acima do título da frase.
const LACO_VERMELHO = `<svg viewBox="0 0 100 140" style="width:${px(92)};height:${px(128)};fill:none;stroke-width:17;margin:0 auto ${px(36)};flex:none"><path d="M50 16C29 16 25 40 34 58L74 126" stroke="#a5161d"/><path d="M50 16C71 16 75 40 66 58L26 126" stroke="#d62828"/></svg>`;
// Laço branco do Janeiro Branco: contorno fino por baixo do traço branco, para aparecer no fundo branco.
const LACO_BRANCO = `<svg viewBox="0 0 100 140" style="width:${px(92)};height:${px(128)};fill:none;stroke-linecap:butt;margin:0 auto ${px(36)};flex:none;filter:drop-shadow(0 ${px(6)} ${px(10)} rgba(15,76,150,.18))"><path d="M50 16C29 16 25 40 34 58L74 126" stroke="#6f8fb8" stroke-width="25"/><path d="M50 16C29 16 25 40 34 58L74 126" stroke="#e3eaf3" stroke-width="19"/><path d="M50 16C71 16 75 40 66 58L26 126" stroke="#6f8fb8" stroke-width="25"/><path d="M50 16C71 16 75 40 66 58L26 126" stroke="#fff" stroke-width="19"/></svg>`;
const LACOS_FRASE = { vermelho: LACO_VERMELHO, branco: LACO_BRANCO };
const frase = (c) => [pg(c.tema, 'bra', `${lo(1)}${logo(1)}<div class="frs">${LACOS_FRASE[c.laco] || ''}<h4${c.fs ? ` style="font-size:${px(c.fs)}"` : ''}>${c.titulo}</h4><p>${c.apoio}</p></div>`)];
// Título, tela, faixa e pílula. Três blocos de texto, como pede o caderno.
function comTela(c) {
  const cl = c.fundo === 'bra' ? 'bra' : 'forte sob';
  const pil = c.fundo === 'bra' ? 'pl oe' : 'pl o';
  const alturaTitulo = c.alturaTitulo || 270;
  const y = 176 + alturaTitulo + 16; const h = 1350 - y - (c.pilula ? 330 : 240);
  // Com foto: a tela é só uma faixa de totais, sobre a foto do assunto.
  // Com fotoCima: a foto do produto em cartão inclinado e a tela inteira logo abaixo, sobrepondo a borda da foto.
  const hTela = 920 / proporcao(arqTela(c.tela)); const yFoto = y + 30; const hFoto = h - hTela - 45;
  const miolo = c.fotoCima
    ? `<div class="atr" style="left:${px(150)};top:${px(yFoto)};width:${px(780)};height:${px(hFoto)};transform:rotate(3deg)"></div><img class="car" src="${img(c.fotoCima)}" alt="" style="left:${px(150)};top:${px(yFoto)};width:${px(780)};height:${px(hFoto)};transform:rotate(-2deg)">${tela(c.tela, 80, yFoto + hFoto - 60, 920, hTela)}`
    : c.foto
    ? `<img class="car" src="${img(c.foto)}" alt="" style="left:${px(80)};top:${px(y)};width:${px(920)};height:${px(h)}">${tela(c.tela, 110, y + h - 130, 860, 100)}`
    : tela(c.tela, 80, y, 920, h);
  return [pg(c.tema, cl, `${lo(c.fundo === 'bra')}${logo(c.fundo === 'bra')}<div class="col" style="justify-content:flex-start"><h2 style="font-size:${px(c.fs || 74)}">${c.titulo}</h2></div>${miolo}<div style="position:absolute;left:${px(80)};right:${px(80)};bottom:${px(66)};display:flex;flex-direction:column;align-items:center;gap:${px(22)};z-index:6"><p class="fx">${c.faixa}</p>${c.pilula ? `<span class="${pil}">${c.pilula}</span>` : ''}</div>`)];
}
// Laço azul do Novembro Azul, num selo branco sobre a borda de cima do painel.
const LACO = `<div class="laco"><svg viewBox="0 0 100 140"><path d="M50 16C29 16 25 40 34 58L74 126" stroke="#0f4c96"/><path d="M50 16C71 16 75 40 66 58L26 126" stroke="#2f8de4"/></svg></div>`;
// Painel de vidro: sem linha própria (soLaco tira a parte de trás, quando ela cortaria um rosto), a linha passa por trás do painel e laça o canto de cima à direita, pela altura do painel.
const linhaVidro = (t) => ({
  tras: `M-20,${t - 70} C200,${t - 140} 430,${t - 90} 600,${t + 50} C760,${t + 180} 880,${t + 250} 1100,${t + 220}`,
  frente: `M1100,${t - 90} C960,${t - 110} 880,${t - 30} 915,${t + 50} C945,${t + 120} 1050,${t + 95} 1035,${t + 20}`,
});
const fotoPainel = (c) => { if (c.vidro && !c.tras) c = { ...c, ...linhaVidro(c.painelTopo || 610), ...(c.soLaco ? { tras: '' } : {}) }; return [pg(c.tema, 'sob', `<img class="cheia" src="${img(c.foto)}" alt="" style="object-position:${c.posicao || '50% 30%'};${c.ajuste || ''}"><div class="tom"${c.tomFraco ? ' style="opacity:.25"' : ''}></div>${linha(c.tras, '#fff', 3, 0.9)}<div class="som"></div>${c.cantos ? `<i class="gf" style="width:${px(260)};height:${px(260)};bottom:${px(-150)};left:${px(-110)};z-index:4"></i><i class="g" style="width:${px(330)};height:${px(330)};bottom:${px(-200)};right:${px(-130)};z-index:4"></i>` : ''}${c.losangos ? `<i class="g" style="width:${px(310)};height:${px(310)};top:${px(-150)};left:${px(-120)};z-index:6"></i><i class="gf" style="width:${px(220)};height:${px(220)};top:${px(-90)};right:${px(-70)};z-index:6"></i>` : ''}${logo()}<div class="pnl${c.vidro ? ' vidro' : ''}"${c.painelTopo ? ` style="top:${c.painelTopo}px"` : ''}>${c.laco ? LACO : ''}<h2 style="font-size:${px(c.fs || 82)}">${c.titulo}</h2><p class="fx">${c.faixa}</p><span class="pl o">${c.pilula}</span></div>${linha(c.frente, '#fff', 7)}`)]; };
// Padaria com foto: título, foto em cartão e pílula branca.
const padariaFoto = (c) => [pg(c.tema, 'forte', `${c.tras ? '' : lo()}${linha(c.tras, '#fff', 2)}${logo()}<div class="c3"><h2 style="font-size:${px(c.fs || 96)}">${c.titulo}</h2></div><div class="atr" style="left:${px(120)};top:${px(520)};width:${px(840)};height:${px(600)};transform:rotate(3deg)"></div><img class="car" src="${img(c.foto)}" alt="" style="left:${px(120)};top:${px(520)};width:${px(840)};height:${px(600)};transform:rotate(-2deg)">${linha(c.frente, '#fff', 5)}${pilAbs('pl', c.pilula)}`)];
// Linha única sobre a foto, com partes atrás e à frente do assunto. Conceito do reel de @thiagor.designer, pedido em 31/10/2026.
const linha = (d, cor, z, op = 1) => (d ? `<svg viewBox="0 0 1080 1350" style="position:absolute;inset:0;width:100%;height:100%;z-index:${z};overflow:visible" fill="none" stroke="${cor}" stroke-opacity="${op}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"><path d="${d}"/></svg>` : '');
// Foto cheia, escura no fundo: a foto repetida em modo screen põe as luzes na frente da linha de trás.
const fotoLinha = (c) => [pg(c.tema, 'sob', `<div style="position:absolute;inset:0;background:#05070f"></div><img class="cheia" src="${img(c.foto)}" alt="" style="z-index:1;object-position:${c.posicao || '50% 50%'};${c.ajuste || ''}"><div style="position:absolute;inset:0;z-index:2;background:rgba(var(--mar),.22)"></div>${linha(c.tras, c.corLinha || '#fff', 3, 0.5)}<img class="cheia" src="${img(c.foto)}" alt="" style="z-index:4;mix-blend-mode:screen;object-position:${c.posicao || '50% 50%'};${c.ajuste || ''};-webkit-mask-image:linear-gradient(180deg,#000 60%,transparent 74%)"><div style="position:absolute;inset:0;z-index:5;background:linear-gradient(180deg,rgba(var(--mar),0) 56%,rgba(var(--mar),.96) 72%,rgba(var(--mar),1) 100%)"></div>${linha(c.frente, c.corLinha || '#fff', 6)}<div class="som" style="z-index:7"></div>${logo()}<div style="position:absolute;left:${px(80)};right:${px(80)};bottom:${px(70)};z-index:8;display:flex;flex-direction:column;gap:${px(22)};text-align:center;align-items:center"><h2 style="font-size:${px(c.fs || 78)};line-height:1.08">${c.titulo}</h2><p style="margin:0;font-size:${px(36)};line-height:1.3;font-weight:500;text-wrap:balance">${c.apoio}</p><div class="site">ProSystem Sistemas</div></div>`)];
// Natal: degradê da marca, pontos de luz ao fundo, losangos e guirlanda complementando a árvore.
const natalRico = (c) => [pg(c.tema, 'sob', `<div style="position:absolute;inset:0;background:linear-gradient(172deg,#060E26 0%,#0B2050 48%,#2E6DB4 76%,#3898D8 100%)"></div><img class="cheia" src="${img('luzes-desfocadas')}" alt="" style="z-index:1;mix-blend-mode:screen;opacity:.13;-webkit-mask-image:linear-gradient(180deg,#000 40%,transparent 66%)"><i class="gf" style="left:50%;top:${px(290)};width:${px(460)};height:${px(460)};margin-left:${px(-230)};z-index:2;background:linear-gradient(135deg,rgba(46,109,180,.55),rgba(8,19,48,.75))"></i><i class="g" style="left:50%;top:${px(260)};width:${px(520)};height:${px(520)};margin-left:${px(-260)};z-index:2;border-color:rgba(56,200,248,.75)"></i><img src="${img(c.foto)}" alt="" style="position:absolute;z-index:4;left:${px(155)};top:${px(138)};width:${px(770)};height:auto;max-width:none;mix-blend-mode:screen;-webkit-mask-image:linear-gradient(180deg,#000 80%,transparent 98%)"><div style="position:absolute;inset:0;z-index:5;background:linear-gradient(180deg,rgba(var(--mar),0) 62%,rgba(var(--mar),.92) 72%,rgba(var(--mar),1) 100%)"></div><div style="position:absolute;inset:0;z-index:6"><i class="g" style="width:${px(310)};height:${px(310)};top:${px(-150)};left:${px(-120)}"></i><i class="gf" style="width:${px(220)};height:${px(220)};top:${px(-90)};right:${px(-70)}"></i><i class="g" style="width:${px(240)};height:${px(240)};bottom:${px(-140)};right:${px(-90)}"></i><i class="g" style="width:${px(240)};height:${px(240)};bottom:${px(-140)};left:${px(-90)}"></i></div>${logo()}<div style="position:absolute;left:${px(90)};right:${px(90)};bottom:${px(78)};z-index:8;display:flex;flex-direction:column;gap:${px(20)};text-align:center;align-items:center"><h2 style="font-size:${px(c.fs || 72)};line-height:1.08">${c.titulo}</h2><p style="margin:0;font-size:${px(35)};line-height:1.3;font-weight:500;text-wrap:balance">${c.apoio}</p><div class="site">ProSystem Sistemas</div></div>`)];
// Página 5 do carrossel da Tatiana: a v2 usava um mockup reprovado; a foto da atendente entra no lugar.
const tatiana5 = (c) => [pg('azul', 'forte sob', `${lo()}${logo()}<div class="atr" style="left:${px(190)};top:${px(200)};width:${px(700)};height:${px(530)};transform:rotate(3deg)"></div><img class="car" src="${img('atendente-suporte')}" alt="" style="left:${px(190)};top:${px(200)};width:${px(700)};height:${px(530)};transform:rotate(-2deg);object-position:50% 25%"><div class="s3"><h2>“Só tenho a <b>agradecer</b> por todo o suporte e comprometimento oferecidos pela equipe.”</h2><p><b>Tatiana Souza</b><br>Farmácia Pharmavida</p><div class="estr">${'<svg viewBox="0 0 24 24"><polygon points="12,2.6 14.9,8.6 21.5,9.5 16.7,14.1 17.9,20.7 12,17.5 6.1,20.7 7.3,14.1 2.5,9.5 9.1,8.6" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/></svg>'.repeat(5)}</div></div>${num(5)}`)];
// Homenagem: degradê escuro da marca, a pessoa homenageada dentro de um losango grande, a data em pílula na ponta de baixo.
const homenagem = (c) => [pg(c.tema, 'sob', `<div style="position:absolute;inset:0;background:linear-gradient(172deg,#060E26 0%,#0B2050 44%,#2E6DB4 80%,#3898D8 100%)"></div><i class="gf" style="left:${px(650)};top:${px(250)};width:${px(380)};height:${px(380)};z-index:2;background:linear-gradient(135deg,rgba(56,200,248,.5),rgba(46,109,180,.15))"></i><i class="g" style="left:50%;top:${px(c.yLos - 20)};width:${px(500)};height:${px(500)};margin-left:${px(-250)};z-index:2;border-color:rgba(56,200,248,.8)"></i><div class="dia" style="top:${px(c.yLos)};width:${px(460)};height:${px(460)};margin-left:${px(-230)};border-radius:${px(64)};box-shadow:0 ${px(30)} ${px(70)} rgba(4,10,30,.6)"><img src="${img(c.foto)}" alt="" style="object-position:${c.posicao || '50% 30%'};${c.ajuste || ''}"></div><i class="g" style="width:${px(240)};height:${px(240)};bottom:${px(-140)};right:${px(-90)};z-index:3"></i><i class="g" style="width:${px(240)};height:${px(240)};bottom:${px(-140)};left:${px(-90)};z-index:3"></i>${logo()}<div style="position:absolute;left:0;right:0;top:${px(c.yLos + 230 + 325 - 34)};text-align:center;z-index:7"><span class="pl" style="box-shadow:0 ${px(12)} ${px(30)} rgba(4,10,30,.45)">${c.pilula}</span></div><div style="position:absolute;left:${px(90)};right:${px(90)};bottom:${px(70)};z-index:8;display:flex;flex-direction:column;gap:${px(20)};text-align:center;align-items:center"><h2 style="font-size:${px(c.fs || 68)};line-height:1.08">${c.titulo}</h2><p style="margin:0;font-size:${px(35)};line-height:1.3;font-weight:500;text-wrap:balance">${c.apoio}</p><div class="site" style="opacity:.85">ProSystem Sistemas</div></div>`)];
const RENDER = { v2, v3, frase, comTela, fotoPainel, fotoLinha, natalRico, padariaFoto, tatiana5, homenagem };

// Página completa, com fonte e estilos. Também usada por motion.js, que anima a mesma página.
const documento = (pagina, extra = '') => `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600;700;800&display=swap" rel="stylesheet"><style>*{box-sizing:border-box}html,body{margin:0}${css}${AJUSTES}</style></head><body><div class="post" style="width:1080px">${pagina}</div>${extra}</body></html>`;
module.exports = { RENDER, documento, url };

const DADOS = require('./pecas-dados.js');

if (require.main === module) (async () => {
  fs.mkdirSync(SAIDA, { recursive: true });
  const filtro = process.argv[2];
  const lista = DADOS.P.filter((p) => !filtro || p.id === filtro);
  const b = await puppeteer.launch({ headless: 'new', args: ['--allow-file-access-from-files'] });
  const p = await b.newPage();
  await p.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 1 });
  const problemas = [];
  for (const c of lista) {
    const paginas = RENDER[c.tipo](c);
    // Peça aprovada e já programada pela Jessica: o arquivo não é gerado de novo.
    if (c.travada) continue;
    for (let i = 0; i < paginas.length; i++) {
      const nome = paginas.length > 1 ? `${c.id}-${i + 1}` : c.id;
      const html = documento(paginas[i]);
      const tmp = path.join(require('os').tmpdir(), 'prosystem-nov-dez-pagina.html');
      fs.writeFileSync(tmp, html);
      await p.goto(url(tmp), { waitUntil: 'networkidle0', timeout: 90000 });
      await p.evaluate(() => document.fonts.ready);
      const fora = await p.evaluate(() => {
        const r = [];
        const blocos = [...document.querySelectorAll('h2,h4,p,.pl,.site,.prv')];
        for (const e of blocos) {
          const q = e.getBoundingClientRect();
          if (q.left < 30 || q.right > 1050 || q.top < 30 || q.bottom > 1340) r.push('fora da peça: ' + e.textContent.slice(0, 40));
        }
        const pais = [...document.querySelectorAll('.cap,.txt,.pain,.fim,.sb3,.t3,.s3,.f3,.col,.frs,.pnl')];
        for (const e of pais) if (e.scrollHeight > e.clientHeight + 2) r.push(`estouro em .${e.className}: ${e.scrollHeight} > ${e.clientHeight}`);
        const tl = [...document.querySelectorAll('.tl,.car')].map((e) => e.getBoundingClientRect());
        for (const e of [...document.querySelectorAll('h2,h4,p.fx')]) {
          const q = e.getBoundingClientRect();
          for (const t of tl) if (q.left < t.right && q.right > t.left && q.top < t.bottom - 6 && q.bottom > t.top + 6 && !e.closest('.cn')) r.push('texto sobre imagem: ' + e.textContent.slice(0, 40));
        }
        return r;
      });
      fora.forEach((f) => problemas.push(`${nome}: ${f}`));
      await p.screenshot({ path: path.join(SAIDA, nome + '.png'), clip: { x: 0, y: 0, width: 1080, height: 1350 } });
      fs.rmSync(tmp, { force: true });
    }
  }
  await b.close();
  // Carrossel da Tatiana: as outras páginas são as da v2, e a v3 fica junto dos demais depoimentos.
  const DEP = path.join(RAIZ, 'outputs/criativos/depoimentos');
  const p5 = path.join(SAIDA, 'carrossel-farmacia-depoimento-v3-5.png');
  if (fs.existsSync(p5)) {
    fs.renameSync(p5, path.join(DEP, 'carrossel-farmacia-depoimento-v3-5.png'));
    for (const i of [1, 2, 3, 4, 6]) fs.copyFileSync(path.join(DEP, `carrossel-farmacia-depoimento-v2-${i}.png`), path.join(DEP, `carrossel-farmacia-depoimento-v3-${i}.png`));
  }
  if (!filtro) fs.writeFileSync(path.join(AQUI, 'legendas.md'), DADOS.legendas(usadas));
  console.log(problemas.length ? problemas.join('\n') : 'sem estouro');
  console.log('peças:', lista.length, '| telas sem mockup:', [...usadas].filter((n) => !fs.existsSync(path.join(AQUI, 'mockups', n + '.png'))).join(', '));
})();
