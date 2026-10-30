// Gera as peças do planejamento de 04/11 a 31/12/2026, 1080×1350, em PNG, e o arquivo legendas.md.
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

// ---------- blocos das peças (mesmos do feed simulado) ----------
const lo = (b) => `<i class="g" style="width:${px(310)};height:${px(310)};top:${px(-150)};left:${px(-120)}"></i><i class="gf" style="width:${px(220)};height:${px(220)};top:${px(-90)};right:${px(-70)}"></i><i class="g ${b ? 'b' : ''}" style="width:${px(330)};height:${px(330)};bottom:${px(-180)};right:${px(-100)}"></i><i class="g ${b ? 'b' : ''}" style="width:${px(240)};height:${px(240)};bottom:${px(-130)};left:${px(-70)}"></i>`;
const logo = (e) => `<img class="lg" src="${url(path.join(LOGOS, e ? 'logo-dark.png' : 'logo-light.png'))}" alt="">`;
function px(n) { return `calc(${n}*var(--u))`; }
const foto = (n, st = '') => `<img class="ft" src="${img(n)}" alt="" style="${st}">`;
const usadas = new Set();
function tela(n, x, y, w, h, giro = 0) {
  usadas.add(n);
  const mk = path.join(AQUI, 'mockups', n + '.png');
  const pronto = fs.existsSync(mk);
  const a = proporcao(pronto ? mk : arqTela(n)); const W = Math.min(w, h * a); const H = W / a;
  const caixa = `left:${px(x + (w - W) / 2)};top:${px(y + (h - H) / 2)};width:${px(W)};height:${px(H)};transform:rotate(${giro}deg)`;
  if (pronto) return `<img src="${url(mk)}" alt="" style="position:absolute;z-index:5;object-fit:contain;max-width:none;${caixa}">`;
  return `<div class="tl" style="${caixa}"><img src="${url(arqTela(n))}" alt=""></div>`;
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

const frase = (c) => [pg(c.tema, 'bra', `${lo(1)}${logo(1)}<div class="frs"><h4${c.fs ? ` style="font-size:${px(c.fs)}"` : ''}>${c.titulo}</h4><p>${c.apoio}</p></div>`)];
// Título, tela, faixa e pílula. Três blocos de texto, como pede o caderno.
function comTela(c) {
  const cl = c.fundo === 'bra' ? 'bra' : 'forte sob';
  const pil = c.fundo === 'bra' ? 'pl oe' : 'pl o';
  const alturaTitulo = c.alturaTitulo || 270;
  const y = 176 + alturaTitulo + 16; const h = 1350 - y - (c.pilula ? 330 : 240);
  // Com foto: a tela é só uma faixa de totais, sobre a foto do assunto.
  const miolo = c.foto
    ? `<img class="car" src="${img(c.foto)}" alt="" style="left:${px(80)};top:${px(y)};width:${px(920)};height:${px(h)}">${tela(c.tela, 110, y + h - 130, 860, 100)}`
    : tela(c.tela, 80, y, 920, h);
  return [pg(c.tema, cl, `${lo(c.fundo === 'bra')}${logo(c.fundo === 'bra')}<div class="col" style="justify-content:flex-start"><h2 style="font-size:${px(c.fs || 74)}">${c.titulo}</h2></div>${miolo}<div style="position:absolute;left:${px(80)};right:${px(80)};bottom:${px(66)};display:flex;flex-direction:column;align-items:center;gap:${px(22)};z-index:6"><p class="fx">${c.faixa}</p>${c.pilula ? `<span class="${pil}">${c.pilula}</span>` : ''}</div>`)];
}
const fotoPainel = (c) => [pg(c.tema, 'sob', `<img class="cheia" src="${img(c.foto)}" alt=""><div class="som"></div>${logo()}<div class="pnl"><h2 style="font-size:${px(c.fs || 82)}">${c.titulo}</h2><p class="fx">${c.faixa}</p><span class="pl o">${c.pilula}</span></div>`)];
// Padaria com foto: título, foto em cartão e pílula branca.
const padariaFoto = (c) => [pg(c.tema, 'forte', `${lo()}${logo()}<div class="c3"><h2 style="font-size:${px(c.fs || 96)}">${c.titulo}</h2></div><div class="atr" style="left:${px(120)};top:${px(520)};width:${px(840)};height:${px(600)};transform:rotate(3deg)"></div><img class="car" src="${img(c.foto)}" alt="" style="left:${px(120)};top:${px(520)};width:${px(840)};height:${px(600)};transform:rotate(-2deg)">${pilAbs('pl', c.pilula)}`)];
// Página 5 do carrossel da Tatiana: a v2 usava um mockup reprovado; a foto da atendente entra no lugar.
const tatiana5 = (c) => [pg('azul', 'forte sob', `${lo()}${logo()}<div class="atr" style="left:${px(190)};top:${px(200)};width:${px(700)};height:${px(530)};transform:rotate(3deg)"></div><img class="car" src="${img('atendente-suporte')}" alt="" style="left:${px(190)};top:${px(200)};width:${px(700)};height:${px(530)};transform:rotate(-2deg);object-position:50% 25%"><div class="s3"><h2>“Só tenho a <b>agradecer</b> por todo o suporte e comprometimento oferecidos pela equipe.”</h2><p><b>Tatiana Souza</b><br>Farmácia Pharmavida</p></div>${num(5)}`)];
const RENDER = { v2, v3, frase, comTela, fotoPainel, padariaFoto, tatiana5 };

const DADOS = require('./pecas-dados.js');

(async () => {
  fs.mkdirSync(SAIDA, { recursive: true });
  const filtro = process.argv[2];
  const lista = DADOS.P.filter((p) => !filtro || p.id === filtro);
  const b = await puppeteer.launch({ headless: 'new', args: ['--allow-file-access-from-files'] });
  const p = await b.newPage();
  await p.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 1 });
  const problemas = [];
  for (const c of lista) {
    const paginas = RENDER[c.tipo](c);
    for (let i = 0; i < paginas.length; i++) {
      const nome = paginas.length > 1 ? `${c.id}-${i + 1}` : c.id;
      const html = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600;700;800&display=swap" rel="stylesheet"><style>*{box-sizing:border-box}html,body{margin:0}${css}</style></head><body><div class="post" style="width:1080px">${paginas[i]}</div></body></html>`;
      const tmp = path.join(AQUI, '_pagina.html');
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
      fs.unlinkSync(tmp);
    }
  }
  await b.close();
  if (!filtro) fs.writeFileSync(path.join(AQUI, 'legendas.md'), DADOS.legendas(usadas));
  console.log(problemas.length ? problemas.join('\n') : 'sem estouro');
  console.log('peças:', lista.length, '| telas sem mockup:', [...usadas].filter((n) => !fs.existsSync(path.join(AQUI, 'mockups', n + '.png'))).join(', '));
})();
