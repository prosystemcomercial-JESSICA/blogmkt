// Mockups de telas do Prosystem: só notebook e desktop, em balcão ou escritório. Celular e tablet são proibidos.
// Gera, a partir de banco imagens/telas-prosystem/:
//  - banco imagens/mockups-prosystem/<ambiente>/<tela>-<aparelho>.jpg  (limpos, para qualquer peça)
//  - blog/assets/images/telas/<tela>.jpg  (notebook, com a mensagem ampliada)
//  - outputs/criativos/funcoes-prosystem/carrossel-<segmento>-<tema>-v1-<página>.png  (modelo V2 do caderno)
// Uso (na raiz do projeto): node outputs/criativos/funcoes-prosystem/gerar.js
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const AQUI = __dirname;
const RAIZ = path.resolve(AQUI, '../../..');
const url = (p) => 'file:///' + p.replace(/\\/g, '/').replace(/ /g, '%20');
const tela = (n) => url(path.join(RAIZ, 'banco imagens/telas-prosystem', n + '.png'));
const FOTOS = path.join(RAIZ, 'outputs/criativos/modelos/carrossel/fotos');
const LOGO = url(path.join(RAIZ, 'docs/design/guia-de-estilos/assets/logo-light.png'));
const BANCO = path.join(RAIZ, 'banco imagens/mockups-prosystem');
const BLOG = path.join(RAIZ, 'blog/assets/images/telas');
const SITE = 'prosystemnet.com.br';

// ---------- telas ----------
const F = ['farmacia'];
const NEUTRA = ['padaria', 'farmacia'];
const TELAS = {
  'uso-continuo-alerta': { amb: F, titulo: 'Pré-venda', lupa: 'A medicação desse cliente está próxima de acabar.<br>Previsão próxima compra: 8 dias' },
  'uso-continuo-proxima-compra': { amb: F, titulo: 'Venda de produto de uso contínuo' },
  'uso-continuo-relatorio': { amb: F, titulo: 'Relatórios de clientes', escritorio: true },
  'perda-vendas-motivo': { amb: NEUTRA, titulo: 'Exclusão de item', chips: ['Falta do Produto', 'Oferta Concorrência', 'Problema Pagto', 'Tempo de Atendimento', 'Consulta Preço'] },
  'perda-vendas-lista': { amb: F, titulo: 'Produtos não vendidos' },
  'perda-vendas-painel': { amb: F, titulo: 'Painel de indicadores', escritorio: true },
  'sangria-aviso': { amb: NEUTRA, titulo: 'Aviso de sangria', lupa: 'Favor efetuar Sangria programada no caixa, evite bloqueio nas operações.' },
  'sangria-bloqueio': { amb: NEUTRA, titulo: 'Caixa bloqueado', lupa: 'Caixa bloqueado, favor efetuar a sangria programada.' },
  'sangria-registro': { amb: NEUTRA, titulo: 'Sangria', chips: ['R$ 60,00 em dinheiro', 'Histórico: gasolina motoboy', 'Movimentação: sangria'] },
  'whats-config': { amb: NEUTRA, titulo: 'Gerenciador de avisos', escritorio: true },
  'whats-fechamento': { amb: NEUTRA, zap: true, largura: 410 },
  'whats-contas': { amb: NEUTRA, zap: true, largura: 560 },
  'whats-desconto': { amb: NEUTRA, zap: true, largura: 600 },
  'painel-vendas': { amb: F, titulo: 'Painel de indicadores', cheia: true, escritorio: true },
  'painel-estoque': { amb: F, titulo: 'Painel de indicadores', cheia: true, escritorio: true },
  'painel-delivery': { amb: F, titulo: 'Painel de indicadores', cheia: true, escritorio: true },
};
const BLOG_AMB = (n) => (/^(sangria|whats)/.test(n) ? 'padaria' : 'farmacia');

// ---------- cena ----------
const CENAS = { farmacia: 'prateleiras-escuras.jpg', padaria: 'paes-prateleira.jpg', escritorio: 'calculadora.jpg' };

const conteudo = (n) => {
  const t = TELAS[n];
  if (t.zap) {
    return `<div class="zap"><div class="zap-lista"><b>Conversas</b><p class="ativa">Avisos Prosystem<small>Relatórios automáticos</small></p></div>
      <div class="zap-conversa"><div class="zap-topo">Avisos Prosystem</div><div class="zap-corpo"><img style="width:${t.largura}px" src="${tela(n)}"></div></div></div>`;
  }
  return `<div class="area"><div class="janela${t.cheia ? ' cheia' : ''}"><div class="barra"><i></i><span>${t.titulo}</span><u></u><u></u><u></u></div><img src="${tela(n)}"></div></div><div class="tarefas"></div>`;
};

const aparelho = (n, tipo) => (tipo === 'notebook'
  ? `<div class="nb"><div class="nb-tampa"><div class="visor">${conteudo(n)}</div></div><div class="nb-base"></div></div>`
  : `<div class="pc"><div class="pc-monitor"><div class="visor">${conteudo(n)}</div></div><div class="pc-haste"></div><div class="pc-pe"></div><div class="pc-teclado"></div><div class="pc-mouse"></div></div>`);

const destaque = (n) => {
  const t = TELAS[n];
  if (t.lupa) return `<div class="lupa">${t.lupa}</div>`;
  if (t.chips) return `<div class="lupa chips">${t.chips.map((c) => `<span>${c}</span>`).join('')}</div>`;
  return '';
};

// altura e dy permitem cenas mais altas (capa do carrossel); reducao abre espaço para o logo.
function cena(n, tipo, amb, { lupa = false, altura = 900, dy = 0, reducao = 1 } = {}) {
  return `<div class="cena ${amb}" style="height:${altura}px">
    <div class="fundo" style="background-image:url('${url(path.join(FOTOS, CENAS[amb]))}')"></div>
    <div class="balcao" style="top:${640 + dy}px"></div>
    <div class="grupo" style="transform:translateY(${dy}px) scale(${reducao})">${aparelho(n, tipo)}</div>
    ${lupa ? destaque(n) : ''}
  </div>`;
}

const CSS_CENA = `
.cena{position:relative;width:1400px;overflow:hidden;background:#222}
.fundo{position:absolute;inset:-24px;background-size:cover;background-position:center;filter:blur(7px) brightness(.72) saturate(.9)}
.escritorio .fundo{filter:blur(12px) brightness(.62) saturate(.5)}
.balcao{position:absolute;left:0;right:0;bottom:0}
.balcao::before{content:'';position:absolute;left:0;right:0;top:0;height:6px;background:rgba(255,255,255,.55)}
.balcao::after{content:'';position:absolute;left:0;right:0;bottom:0;top:170px;background:rgba(0,0,0,.32);border-top:2px solid rgba(255,255,255,.14)}
.farmacia .balcao{background:linear-gradient(180deg,#F4F5F7,#D5D9DF)}
.padaria .balcao{background:repeating-linear-gradient(92deg,rgba(60,28,8,.09) 0 3px,transparent 3px 46px,rgba(60,28,8,.05) 46px 49px,transparent 49px 120px),linear-gradient(180deg,#B47C49,#8D5A2F)}
.escritorio .balcao{background:repeating-linear-gradient(91deg,rgba(0,0,0,.1) 0 2px,transparent 2px 70px),linear-gradient(180deg,#6E5443,#4F3B2E)}
.grupo{position:absolute;inset:0;transform-origin:700px 740px}
.visor{position:relative;overflow:hidden;background:#D7DBE0;width:100%;height:100%}
.area{position:absolute;left:0;right:0;top:0;bottom:30px;display:flex;align-items:center;justify-content:center;padding:18px}
.tarefas{position:absolute;left:0;right:0;bottom:0;height:30px;background:#20262E}
.janela{width:100%;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 10px 28px rgba(0,0,0,.28)}
.janela img{display:block;width:100%;height:auto}
.janela.cheia{align-self:flex-start}
.barra{display:flex;align-items:center;gap:9px;height:32px;padding:0 13px;background:#EBEDF0;color:#374151;font-size:14px;font-weight:600}
.barra i{width:13px;height:13px;border-radius:50%;background:#8A93A0;flex:none}
.barra span{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.barra u{width:11px;height:2px;background:#6B7280;flex:none}
.zap{position:absolute;inset:0;display:flex;background:#fff;font-size:17px;color:#1F2937}
.zap-lista{width:26%;flex:none;border-right:1px solid #DDE1E6;padding:16px 0}
.zap-lista b{display:block;padding:0 16px 12px;font-size:21px}
.zap-lista p{padding:12px 16px;font-weight:600}
.zap-lista .ativa{background:#EEF0F2}
.zap-lista small{display:block;font-weight:400;font-size:14px;color:#6B7280}
.zap-conversa{flex:1;min-width:0;display:flex;flex-direction:column}
.zap-topo{padding:14px 20px;background:#F0F2F5;font-weight:700;border-bottom:1px solid #DDE1E6}
.zap-corpo{flex:1;min-height:0;background:#E5DDD5;padding:20px;overflow:hidden;display:flex;justify-content:flex-end;align-items:flex-start}
.zap-corpo img{display:block;height:auto;border-radius:10px;box-shadow:0 1px 2px rgba(0,0,0,.18)}
.nb{position:absolute;left:190px;top:62px;width:1020px}
.nb-tampa{height:650px;padding:16px 16px 22px;background:#1A1D22;border-radius:18px 18px 4px 4px;box-shadow:0 0 0 2px #3A3F47}
.nb-base{position:relative;left:-90px;width:1200px;height:26px;background:linear-gradient(180deg,#D3D6DB,#9EA3AB);border-radius:3px 3px 18px 18px;box-shadow:0 22px 34px rgba(0,0,0,.42)}
.nb-base::before{content:'';position:absolute;left:50%;top:0;width:170px;height:9px;margin-left:-85px;background:#8E939B;border-radius:0 0 9px 9px}
.pc{position:absolute;left:240px;top:34px;width:920px}
.pc-monitor{height:560px;padding:14px;background:#17191D;border-radius:12px;box-shadow:0 0 0 2px #33373E}
.pc-haste{width:112px;height:78px;margin:0 auto;background:linear-gradient(90deg,#3A3E45,#22252A)}
.pc-pe{width:320px;height:18px;margin:0 auto;background:linear-gradient(180deg,#42464E,#23262B);border-radius:9px 9px 4px 4px;box-shadow:0 18px 26px rgba(0,0,0,.42)}
.pc-teclado{position:absolute;left:190px;top:688px;width:470px;height:62px;background:repeating-linear-gradient(0deg,#2B2E34 0 11px,#1B1D21 11px 15px);border-radius:7px;box-shadow:0 12px 18px rgba(0,0,0,.36)}
.pc-mouse{position:absolute;left:690px;top:694px;width:44px;height:62px;background:linear-gradient(180deg,#34383F,#1D2024);border-radius:22px;box-shadow:0 10px 14px rgba(0,0,0,.36)}
.lupa{position:absolute;left:170px;right:170px;bottom:136px;padding:24px 34px;background:#fff;border-radius:18px;box-shadow:0 18px 44px rgba(0,0,0,.45);font:700 34px/1.3 'Courier New',monospace;color:#1F2937;text-align:center}
.lupa.chips{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;font:700 27px/1.2 Montserrat,Arial,sans-serif}
.lupa.chips span{padding:9px 18px;border:2px solid #9CA3AF;border-radius:12px}
`;

// ---------- carrosséis (modelo V2 do caderno de marca) ----------
const CARROSSEIS = [
  {
    id: 'carrossel-farmacia-uso-continuo-v1', tema: 'azul', amb: 'farmacia',
    capa: { n: 'uso-continuo-alerta', tipo: 'notebook', titulo: 'O remédio do seu cliente acaba em <b>8 dias.</b>', apoio: 'Quem vai lembrar dele primeiro?' },
    itens: [
      { n: 'uso-continuo-proxima-compra', tipo: 'notebook', titulo: 'Na venda, a posologia vira <b>data.</b>', apoio: 'Com o cliente identificado, o sistema calcula a próxima compra.' },
      { n: 'uso-continuo-alerta', tipo: 'desktop', titulo: 'Na volta dele, o balcão é <b>avisado.</b>', apoio: 'Nos 9 dias antes do fim da medicação, o alerta aparece na pré-venda.' },
      { n: 'uso-continuo-relatorio', tipo: 'notebook', amb: 'escritorio', titulo: 'Quem deve comprar vira <b>lista.</b>', apoio: 'Relatório por período de próxima compra. Contato só com autorização do cliente.' },
    ],
    sol: { n: 'uso-continuo-proxima-compra', tipo: 'desktop', titulo: 'Reposição com data marcada', apoio: 'Sem lembrete, ela vira nova cotação. Com a data, sua farmácia chega antes.' },
    fim: { n: 'uso-continuo-alerta', tipo: 'notebook', titulo: 'Quer ver o uso contínuo na <b>sua farmácia?</b>' },
  },
  {
    id: 'carrossel-farmacia-perda-de-vendas-v1', tema: 'azul', amb: 'farmacia',
    capa: { n: 'perda-vendas-painel', tipo: 'notebook', titulo: 'A venda perdida <b>não aparece</b> no caixa.', apoio: 'Mas dá para medir.' },
    itens: [
      { n: 'perda-vendas-motivo', tipo: 'desktop', titulo: 'Item excluído? O sistema <b>pergunta por quê.</b>', apoio: 'O motivo fica escolhido no próprio atendimento.' },
      { n: 'perda-vendas-lista', tipo: 'notebook', titulo: 'Cada motivo fica <b>registrado.</b>', apoio: 'Por produto, quantidade e data, no caixa e em relatório.' },
      { n: 'perda-vendas-painel', tipo: 'notebook', amb: 'escritorio', titulo: 'Em 30 dias, o <b>padrão aparece.</b>', apoio: 'Painel de indicadores do plano Plus. Dados fictícios.' },
    ],
    sol: { n: 'perda-vendas-painel', tipo: 'desktop', titulo: 'Cada motivo aponta o que corrigir', apoio: 'Falta do produto? Revise compras. Concorrência? Reveja o preço.' },
    fim: { n: 'perda-vendas-motivo', tipo: 'notebook', titulo: 'Quer saber por que sua farmácia <b>perde vendas?</b>' },
  },
  {
    id: 'carrossel-padaria-sangria-v1', tema: 'laranja', amb: 'padaria',
    capa: { n: 'sangria-bloqueio', tipo: 'desktop', titulo: 'Quanto dinheiro tem na sua <b>gaveta agora?</b>', apoio: 'Sangria que depende de memória falha.' },
    itens: [
      { n: 'sangria-aviso', tipo: 'desktop', titulo: 'Chegou no valor, o caixa <b>avisa.</b>', apoio: 'Exemplo: a partir de R$ 600 em dinheiro. A venda continua.' },
      { n: 'sangria-bloqueio', tipo: 'notebook', titulo: 'Passou do limite, o caixa <b>trava.</b>', apoio: 'Exemplo: em R$ 900, a baixa de vendas só volta depois da sangria.' },
      { n: 'sangria-registro', tipo: 'desktop', titulo: 'Toda retirada fica <b>registrada.</b>', apoio: 'Valor, histórico e centro de custo, prontos para a conferência.' },
    ],
    sol: { n: 'sangria-aviso', tipo: 'notebook', titulo: 'Sangria com regra, não com memória', apoio: 'Menos dinheiro exposto na gaveta e um fechamento mais fácil de conferir.' },
    fim: { n: 'sangria-registro', tipo: 'notebook', titulo: 'Quer esse controle no caixa da <b>sua padaria?</b>' },
  },
  {
    id: 'carrossel-padaria-whatsapp-v1', tema: 'laranja', amb: 'padaria',
    capa: { n: 'whats-fechamento', tipo: 'notebook', titulo: 'O caixa fechou. O resumo chega no seu <b>WhatsApp.</b>', apoio: 'Sem você precisar estar na loja.' },
    itens: [
      { n: 'whats-fechamento', tipo: 'desktop', titulo: 'Fechamento <b>na hora.</b>', apoio: 'Venda, descontos, sangrias e formas de pagamento.' },
      { n: 'whats-contas', tipo: 'notebook', titulo: 'Contas antes de virar <b>atraso.</b>', apoio: 'Hoje, amanhã, próximos 5 dias e o que já venceu.' },
      { n: 'whats-desconto', tipo: 'notebook', titulo: 'Desconto liberado? <b>Você fica sabendo.</b>', apoio: 'Autorizações com login podem gerar aviso ao responsável.' },
    ],
    sol: { n: 'whats-config', tipo: 'desktop', titulo: 'Cada pessoa recebe o que precisa', apoio: 'Você escolhe os relatórios e a frequência. Funcionalidade da versão Plus.' },
    fim: { n: 'whats-contas', tipo: 'desktop', titulo: 'Quer receber os números da <b>sua padaria?</b>' },
  },
];

const CSS_PECA = `
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Montserrat',Arial,sans-serif}
.pg{width:1080px;height:1350px;position:relative;overflow:hidden;background:#fff}
.azul{--escuro:#2E6DB4;--tinta:#081330;--sombra:8,19,48;--marca:46,109,180;--grad:linear-gradient(155deg,#2E6DB4 0%,#417ABC 48%,#3898D8 78%,#38C8F8 100%);--pil:#F88818;--piltx:#081330}
.laranja{--escuro:#C2410C;--tinta:#2B1408;--sombra:43,20,8;--marca:176,58,10;--grad:linear-gradient(155deg,#B83C0A 0%,#D9500B 50%,#F07A12 85%,#F88818 100%);--pil:#fff;--piltx:#B83C0A}
.forte{background:var(--grad);color:#fff}
.logo{position:absolute;top:70px;left:50%;transform:translateX(-50%);width:324px;height:auto;z-index:5}
.topo-sombra{position:absolute;left:0;right:0;top:0;height:300px;background:linear-gradient(180deg,rgba(var(--sombra),.78),rgba(var(--sombra),0));z-index:2}
.encaixe{position:absolute;left:0;top:0;transform-origin:0 0;transform:scale(.7714)}
.foto{position:absolute;left:0;top:0;width:100%;overflow:hidden}
.pil{display:inline-block;padding:20px 46px;border-radius:99px;font-size:34px;font-weight:800;background:var(--pil);color:var(--piltx)}
.pil.contorno{background:transparent;border:3px solid #fff;color:#fff;font-weight:700}
.faixa{padding:28px 38px;border-radius:22px;background:var(--escuro);color:#fff;font-size:37px;line-height:1.28;font-weight:500;text-wrap:balance;text-align:center}
.num{position:absolute;bottom:34px;left:0;right:0;text-align:center;font-size:24px;font-weight:700;letter-spacing:.08em;color:var(--tinta);opacity:.7;z-index:4}
.sobre .num,.forte .num{color:#fff;opacity:.85}
.provas{display:flex;align-items:stretch;gap:44px;justify-content:center}
.provas div{display:flex;flex-direction:column;gap:6px;text-align:center}
.provas strong{font-size:72px;line-height:1;font-weight:800}
.provas span{font-size:29px;font-weight:500}
.provas i{width:3px;background:rgba(255,255,255,.7)}
.site{font-size:32px;font-weight:700}
.v2-cap-grad{position:absolute;inset:0;background:linear-gradient(180deg,rgba(var(--marca),0) 46%,rgba(var(--marca),.92) 66%,rgba(var(--marca),1) 100%);z-index:2}
.v2-cap{position:absolute;left:80px;right:80px;bottom:90px;z-index:4;color:#fff;display:flex;flex-direction:column;gap:28px;align-items:flex-start}
.v2-cap h2{font-size:92px;line-height:1.04;font-weight:300;letter-spacing:-.025em;text-wrap:balance}
.v2-cap h2 b,.v2-txt h2 b,.v2-fim h2 b{font-weight:800}
.v2-cap p{font-size:42px;font-weight:600}
.v2-foto{height:700px;border-radius:0 0 70px 70px}
.v2-sel{position:absolute;left:50%;top:620px;transform:translateX(-50%) rotate(45deg);width:130px;height:130px;border-radius:30px;background:var(--grad);z-index:4;display:flex;align-items:center;justify-content:center}
.v2-sel span{transform:rotate(-45deg);color:#fff;font-size:76px;font-weight:800}
.v2-txt{position:absolute;left:76px;right:76px;top:790px;bottom:82px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:30px;text-align:center}
.v2-txt h2{font-size:70px;line-height:1.08;font-weight:300;letter-spacing:-.015em;color:var(--escuro);text-wrap:balance}
.v2-painel{position:absolute;left:70px;right:70px;bottom:90px;padding:46px 46px;border-radius:30px;background:rgba(var(--marca),.97);color:#fff;text-align:center;display:flex;flex-direction:column;gap:20px;z-index:4}
.v2-painel h2{font-size:66px;line-height:1.05;font-weight:800;letter-spacing:-.02em;text-wrap:balance}
.v2-painel p{font-size:36px;line-height:1.3;font-weight:500;text-wrap:balance}
.v2-fim-foto{height:560px;border-radius:0 0 70px 70px}
.v2-fim{position:absolute;left:70px;right:70px;top:590px;bottom:60px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:36px;color:#fff}
.v2-fim h2{font-size:80px;line-height:1.05;font-weight:300;letter-spacing:-.02em;text-wrap:balance}
${CSS_CENA}
`;

const logo = `<img class="logo" src="${LOGO}">`;
const sombra = '<div class="topo-sombra"></div>';
const provas = '<div class="provas"><div><strong>+600</strong><span>clientes</span></div><i></i><div><strong>+16</strong><span>anos de experiência</span></div></div>';
const num = (i) => `<div class="num">${i} / 6</div>`;
const inteira = (p, amb) => `<div class="foto" style="height:1350px"><div class="encaixe">${cena(p.n, p.tipo, amb, { altura: 1750, dy: 210 })}</div></div>`;

function paginas(c) {
  const a = (p) => p.amb || c.amb;
  const out = [];
  out.push(`<section class="pg sobre">${inteira(c.capa, c.amb)}${sombra}<div class="v2-cap-grad"></div>${logo}<div class="v2-cap"><h2>${c.capa.titulo}</h2><p>${c.capa.apoio}</p><span class="pil contorno">Arraste para o lado →</span></div></section>`);
  c.itens.forEach((it, k) => {
    out.push(`<section class="pg"><div class="foto v2-foto"><div class="encaixe">${cena(it.n, it.tipo, a(it), { lupa: true, altura: 908, dy: 0, reducao: 0.84 })}</div></div>${sombra}${logo}<div class="v2-sel"><span>${k + 1}</span></div><div class="v2-txt"><h2>${it.titulo}</h2><p class="faixa">${it.apoio}</p></div>${num(k + 2)}</section>`);
  });
  out.push(`<section class="pg sobre">${inteira(c.sol, c.amb)}${sombra}${logo}<div class="v2-painel"><h2>${c.sol.titulo}</h2><p>${c.sol.apoio}</p></div>${num(5)}</section>`);
  out.push(`<section class="pg forte"><div class="foto v2-fim-foto"><div class="encaixe">${cena(c.fim.n, c.fim.tipo, c.amb, { altura: 730, dy: -90, reducao: 0.84 })}</div></div>${sombra}${logo}<div class="v2-fim"><h2>${c.fim.titulo}</h2>${provas}<span class="pil">Fale com um especialista</span><div class="site">${SITE}</div></div></section>`);
  return out;
}

const FONTE = '<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600;700;800&display=swap" rel="stylesheet">';

(async () => {
  const nav = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--allow-file-access-from-files'] });
  const pg = await nav.newPage();
  const abrir = async (corpo, css) => {
    const f = path.join(AQUI, '_tmp.html');
    fs.writeFileSync(f, `<!doctype html><html><head><meta charset="utf-8">${FONTE}<style>${css}</style></head><body>${corpo}</body></html>`);
    await pg.goto(url(f), { waitUntil: 'networkidle0' });
    await pg.evaluate(() => document.fonts.ready);
    fs.unlinkSync(f);
  };
  const CSS_SOLTO = `*{margin:0;padding:0;box-sizing:border-box}body{font-family:Montserrat,Arial,sans-serif}${CSS_CENA}`;
  await pg.setViewport({ width: 1400, height: 900, deviceScaleFactor: 1 });

  let total = 0;
  for (const n of Object.keys(TELAS)) {
    const ambientes = [...TELAS[n].amb, ...(TELAS[n].escritorio ? ['escritorio'] : [])];
    for (const amb of ambientes) {
      fs.mkdirSync(path.join(BANCO, amb), { recursive: true });
      for (const tipo of ['notebook', 'desktop']) {
        await abrir(cena(n, tipo, amb), CSS_SOLTO);
        await pg.screenshot({ path: path.join(BANCO, amb, `${n}-${tipo}.jpg`), type: 'jpeg', quality: 80, clip: { x: 0, y: 0, width: 1400, height: 900 } });
        total += 1;
      }
    }
    if (!n.startsWith('painel')) {
      await abrir(cena(n, 'notebook', BLOG_AMB(n), { lupa: true }), CSS_SOLTO);
      await pg.screenshot({ path: path.join(BLOG, `${n}.jpg`), type: 'jpeg', quality: 82, clip: { x: 0, y: 0, width: 1400, height: 900 } });
    }
  }
  console.log('mockups', total);

  await pg.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 1 });
  for (const c of CARROSSEIS) {
    const lista = paginas(c);
    for (let i = 0; i < lista.length; i++) {
      await abrir(`<div class="${c.tema}">${lista[i]}</div>`, CSS_PECA);
      await pg.screenshot({ path: path.join(AQUI, `${c.id}-${i + 1}.png`), clip: { x: 0, y: 0, width: 1080, height: 1350 } });
    }
    console.log(c.id);
  }
  await nav.close();
})();
