// Gera, a partir de banco imagens/telas-prosystem/ (já sem dados de pessoas):
//  - os mockups dos artigos em blog/assets/images/telas/*.jpg
//  - os carrosséis (1080×1350) em outputs/criativos/funcoes-prosystem/<id>/pagina-N.png
// Uso (na raiz do projeto): node outputs/criativos/funcoes-prosystem/gerar.js
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const AQUI = __dirname;
const RAIZ = path.resolve(AQUI, '../../..');
const TELAS = path.join(RAIZ, 'banco imagens/telas-prosystem');
const LOGO = path.join(RAIZ, 'docs/design/guia-de-estilos/assets/logo-light.png');
const BLOG = path.join(RAIZ, 'blog/assets/images/telas');
const url = (p) => 'file:///' + p.replace(/\\/g, '/').replace(/ /g, '%20');
const tela = (n) => url(path.join(TELAS, n + '.png'));

// ---------- mockups ----------
const janela = (n, titulo) => `<div class="janela"><div class="barra"><i></i><span>${titulo}</span><u></u><u></u><u></u></div><img src="${tela(n)}"></div>`;
const celular = (n) => `<div class="celular"><div class="zap"><b>P</b><span>Avisos Prosystem<small>relatórios automáticos</small></span></div><div class="conversa"><img src="${tela(n)}"></div></div>`;
const mock = (m) => (m.tipo === 'celular' ? celular(m.n) : janela(m.n, m.titulo));

const MOCKS = {
  'uso-continuo-alerta': { titulo: 'Pré-venda · Caixa Frente de Loja' },
  'uso-continuo-proxima-compra': { titulo: 'Venda de produto de uso contínuo' },
  'uso-continuo-relatorio': { titulo: 'Admin Retaguarda · Relatórios de clientes' },
  'perda-vendas-motivo': { titulo: 'Caixa Frente de Loja · Exclusão de item' },
  'perda-vendas-lista': { titulo: 'Caixa Frente de Loja · Funções' },
  'perda-vendas-painel': { titulo: 'Prosystem Dashboard · Painel de indicadores' },
  'sangria-aviso': { titulo: 'Caixa Frente de Loja · Aviso de sangria' },
  'sangria-bloqueio': { titulo: 'Caixa Frente de Loja · Caixa bloqueado' },
  'sangria-registro': { titulo: 'Caixa Frente de Loja · Sangria' },
  'whats-config': { titulo: 'Admin Retaguarda · Gerenciador de avisos' },
  'whats-fechamento': { tipo: 'celular' },
  'whats-contas': { tipo: 'celular' },
  'whats-desconto': { tipo: 'celular' },
};
Object.keys(MOCKS).forEach((n) => { MOCKS[n].n = n; });

const CSS_MOCK = `
.janela{background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 22px 60px rgba(8,19,48,.32);border:1px solid rgba(8,19,48,.16)}
.janela img{display:block;width:100%;height:auto}
.barra{display:flex;align-items:center;gap:10px;height:44px;padding:0 16px;background:#E8EDF4;color:#374151;font-size:17px;font-weight:600}
.barra i{width:18px;height:18px;border-radius:50%;background:#2E6DB4;flex:none}
.barra span{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.barra u{width:13px;height:2px;background:#6B7280;flex:none}
.celular{background:#10161f;padding:14px;border-radius:44px;box-shadow:0 26px 70px rgba(8,19,48,.42)}
.zap{display:flex;align-items:center;gap:14px;padding:18px 20px;background:#075E54;color:#fff;border-radius:30px 30px 0 0;font-size:24px;font-weight:700}
.zap b{width:48px;height:48px;border-radius:50%;background:#fff;color:#075E54;display:flex;align-items:center;justify-content:center;flex:none}
.zap small{display:block;font-size:17px;font-weight:400;opacity:.85}
.conversa{background:#E5DDD5;padding:22px;border-radius:0 0 30px 30px}
.conversa img{display:block;width:100%;height:auto;border-radius:12px}
`;

// ---------- carrosséis ----------
const FALE = 'Fale com um especialista';
const CARROSSEIS = [
  {
    id: 'farmacia-uso-continuo', tema: 'azul',
    paginas: [
      { tipo: 'capa', titulo: 'O remédio do seu cliente acaba em <b>8 dias.</b>', apoio: 'Quem vai lembrar dele primeiro?' },
      { tipo: 'item', titulo: 'Ele não avisa. Ele só <b>compra.</b>', apoio: 'Sem lembrete, a reposição vira uma <b>nova cotação</b> entre farmácias.' },
      { tipo: 'tela', m: 'uso-continuo-proxima-compra', titulo: 'Na venda, a posologia vira <b>data.</b>', apoio: 'Com o cliente identificado, o sistema calcula a próxima compra.' },
      { tipo: 'tela', m: 'uso-continuo-alerta', lupa: 'A medicação desse cliente está próxima de acabar.<br>Previsão próxima compra: 8 dias', titulo: 'Na volta dele, o balcão é <b>avisado.</b>', apoio: 'Nos 9 dias antes do fim da medicação, o alerta aparece na pré-venda.' },
      { tipo: 'tela', m: 'uso-continuo-relatorio', titulo: 'Quem deve comprar vira <b>lista.</b>', apoio: 'Relatório por período de próxima compra. Contato só com autorização do cliente.' },
      { tipo: 'fim', titulo: 'Quer ver o uso contínuo na <b>sua farmácia?</b>' },
    ],
  },
  {
    id: 'farmacia-perda-de-vendas', tema: 'azul',
    paginas: [
      { tipo: 'capa', titulo: 'A venda perdida <b>não aparece</b> no caixa.', apoio: 'Mas dá para medir.' },
      { tipo: 'item', titulo: '"Não tem." "Tá caro." <b>"Vou ver depois."</b>', apoio: 'O cliente vai embora e o <b>motivo</b> vai junto.' },
      { tipo: 'tela', m: 'perda-vendas-motivo', chips: ['Falta do Produto', 'Oferta Concorrência', 'Problema Pagto', 'Tempo de Atendimento', 'Consulta Preço'], titulo: 'Item excluído? O sistema <b>pergunta por quê.</b>', apoio: 'Falta, concorrência, pagamento, tempo de atendimento ou consulta de preço.' },
      { tipo: 'tela', m: 'perda-vendas-lista', titulo: 'Cada motivo fica <b>registrado.</b>', apoio: 'Por produto, quantidade e data, no caixa e em relatório.' },
      { tipo: 'tela', m: 'perda-vendas-painel', larg: 690, titulo: 'Em 30 dias, o <b>padrão aparece.</b>', apoio: 'Painel de indicadores do plano Plus. Dados de exemplo.' },
      { tipo: 'fim', titulo: 'Quer saber por que sua farmácia <b>perde vendas?</b>' },
    ],
  },
  {
    id: 'padaria-sangria', tema: 'laranja',
    paginas: [
      { tipo: 'capa', titulo: 'Quanto dinheiro tem na sua <b>gaveta agora?</b>', apoio: 'Sangria que depende de memória falha.' },
      { tipo: 'item', titulo: 'Fila no caixa, café da manhã cheio, <b>sangria esquecida.</b>', apoio: 'Dinheiro acumulado é <b>risco.</b> Retirada sem registro vira diferença no fechamento.' },
      { tipo: 'tela', m: 'sangria-aviso', lupa: 'Favor efetuar Sangria programada no caixa, evite bloqueio nas operações.', titulo: 'Chegou no valor, o caixa <b>avisa.</b>', apoio: 'Exemplo: a partir de R$ 600 em dinheiro. A venda continua.' },
      { tipo: 'tela', m: 'sangria-bloqueio', lupa: 'Caixa bloqueado, favor efetuar a sangria programada.', titulo: 'Passou do limite, o caixa <b>trava.</b>', apoio: 'Exemplo: em R$ 900, a baixa de vendas só volta depois da sangria.' },
      { tipo: 'tela', m: 'sangria-registro', chips: ['R$ 60,00 em dinheiro', 'Histórico: gasolina motoboy', 'Movimentação: sangria'], titulo: 'Toda retirada fica <b>registrada.</b>', apoio: 'Valor, histórico e centro de custo, prontos para a conferência.' },
      { tipo: 'fim', titulo: 'Quer esse controle no caixa da <b>sua padaria?</b>' },
    ],
  },
  {
    id: 'padaria-whatsapp', tema: 'laranja',
    paginas: [
      { tipo: 'capa', titulo: 'O caixa fechou. O resumo chega no seu <b>WhatsApp.</b>', apoio: 'Sem você precisar estar na loja.' },
      { tipo: 'item', titulo: 'Você ainda liga para a loja para saber <b>como foi o dia?</b>', apoio: 'Os números já existem. Só falta <b>chegarem até você.</b>' },
      { tipo: 'tela', m: 'whats-fechamento', titulo: 'Fechamento <b>no celular.</b>', apoio: 'Venda, descontos, sangrias e formas de pagamento.', alto: true },
      { tipo: 'tela', m: 'whats-contas', titulo: 'Contas antes de virar <b>atraso.</b>', apoio: 'Hoje, amanhã, próximos 5 dias e o que já venceu.' },
      { tipo: 'tela', m: 'whats-desconto', titulo: 'Desconto liberado? <b>Você fica sabendo.</b>', apoio: 'Autorizações com login podem gerar aviso ao responsável.' },
      { tipo: 'fim', titulo: 'Quer receber os números da <b>sua padaria?</b>', nota: 'Funcionalidade da versão Plus.' },
    ],
  },
];

const CSS = `
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Montserrat',Arial,sans-serif;background:#fff}
.pg{width:1080px;height:1350px;position:relative;overflow:hidden}
.azul .forte{background:linear-gradient(155deg,#0A2E87 0%,#2E6DB4 58%,#38C8F8 100%);color:#fff}
.laranja .forte{background:linear-gradient(155deg,#B83C0A 0%,#D9500B 50%,#F07A12 85%,#F88818 100%);color:#fff}
.claro{background:#F3F6FB}
.laranja .claro{background:#FFF5EC}
.azul .claro{--d:#0A2E87;color:#081330}
.laranja .claro{--d:#C2410C;color:#2B1408}
.logo{position:absolute;top:66px;left:50%;transform:translateX(-50%);width:300px;height:auto}
.claro .logo{background:var(--d);padding:16px 26px;border-radius:14px;width:320px;box-sizing:border-box}
.num{position:absolute;bottom:50px;left:0;right:0;text-align:center;font-size:26px;font-weight:700;letter-spacing:.08em;opacity:.7}
.meio{position:absolute;left:84px;right:84px;top:210px;bottom:110px;display:flex;flex-direction:column;justify-content:center;gap:40px}
.capa{font-size:98px;line-height:1.06;font-weight:300;letter-spacing:-.02em;text-wrap:balance}
.capa b,.tit b{font-weight:800}
.sub{font-size:44px;font-weight:700;line-height:1.2}
.pil{align-self:flex-start;padding:20px 44px;border-radius:99px;font-size:34px;font-weight:800;border:3px solid #fff;color:#fff}
.pil.cheia{background:#fff}
.azul .pil.cheia{color:#0A2E87}
.laranja .pil.cheia{color:#B83C0A}
.tit{font-size:76px;line-height:1.08;font-weight:300;letter-spacing:-.015em;color:var(--d);text-wrap:balance}
.faixa{padding:30px 38px;border-radius:20px;color:#fff;font-size:38px;line-height:1.3;font-weight:500;background:var(--d);text-wrap:balance}
.faixa b{font-weight:800}
.t-tela{top:190px;gap:34px;justify-content:flex-start}
.t-tela .tit{font-size:64px}
.t-tela .faixa{font-size:32px;padding:24px 32px}
.palco{flex:1;min-height:0;display:flex;align-items:center;justify-content:center}
.palco .janela{width:100%}
.palco .celular{width:640px;max-height:100%;overflow:hidden}
.alto .palco{overflow:hidden;align-items:flex-start;border-radius:44px}
.alto .palco .celular{max-height:none}
.lupa{background:#fff;border:3px solid var(--d);border-radius:18px;padding:26px 32px;font:700 37px/1.32 'Courier New',monospace;color:#1420C8}
.chips{display:flex;flex-wrap:wrap;gap:14px}
.chips span{background:#fff;border:3px solid var(--d);color:var(--d);border-radius:14px;padding:12px 22px;font-size:32px;font-weight:700}
.palco .celular.largo{width:780px}
.nota{font-size:30px;font-weight:500;opacity:.9}
${CSS_MOCK}
`;

function pagina(c, p, i) {
  const total = c.paginas.length;
  const logo = `<img class="logo" src="${url(LOGO)}">`;
  const num = `<div class="num">${i + 1}/${total}</div>`;
  if (p.tipo === 'capa') {
    return `<section class="pg forte">${logo}<div class="meio"><div class="capa">${p.titulo}</div><div class="sub">${p.apoio}</div><div class="pil">Arraste para o lado →</div></div>${num}</section>`;
  }
  if (p.tipo === 'fim') {
    return `<section class="pg forte">${logo}<div class="meio"><div class="capa">${p.titulo}</div><div class="pil cheia">${FALE}</div>${p.nota ? `<div class="nota">${p.nota}</div>` : ''}</div>${num}</section>`;
  }
  if (p.tipo === 'item') {
    return `<section class="pg claro">${logo}<div class="meio"><div class="tit">${p.titulo}</div><div class="faixa">${p.apoio}</div></div>${num}</section>`;
  }
  return `<section class="pg claro${p.alto ? ' alto' : ''}">${logo}<div class="meio t-tela"><div class="tit">${p.titulo}</div><div class="palco"${p.larg ? ` style="padding:0 ${(912 - p.larg) / 2}px"` : ''}>${mock(MOCKS[p.m]).replace('class="celular"', p.alto ? 'class="celular"' : 'class="celular largo"')}</div>${p.lupa ? `<div class="lupa">${p.lupa}</div>` : ''}${p.chips ? `<div class="chips">${p.chips.map((c) => `<span>${c}</span>`).join('')}</div>` : ''}<div class="faixa">${p.apoio}</div></div>${num}</section>`;
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

  fs.mkdirSync(BLOG, { recursive: true });
  await pg.setViewport({ width: 1240, height: 900, deviceScaleFactor: 1 });
  for (const n of Object.keys(MOCKS)) {
    const m = MOCKS[n];
    const largura = m.tipo === 'celular' ? 560 : 1120;
    await abrir(`<div id="m" style="width:1240px;padding:40px;display:flex;justify-content:center;background:#EEF2F7"><div style="width:${largura}px">${mock(m)}</div></div>`,
      `*{margin:0;padding:0;box-sizing:border-box}body{font-family:Montserrat,Arial,sans-serif}${CSS_MOCK}`);
    await (await pg.$('#m')).screenshot({ path: path.join(BLOG, n + '.jpg'), type: 'jpeg', quality: 86 });
    console.log('mockup', n);
  }

  await pg.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 1 });
  for (const c of CARROSSEIS) {
    const dir = path.join(AQUI, c.id);
    fs.mkdirSync(dir, { recursive: true });
    for (let i = 0; i < c.paginas.length; i++) {
      await abrir(`<div class="${c.tema}">${pagina(c, c.paginas[i], i)}</div>`, CSS);
      await pg.screenshot({ path: path.join(dir, `pagina-${i + 1}.png`), clip: { x: 0, y: 0, width: 1080, height: 1350 } });
    }
    console.log('carrossel', c.id);
  }
  await nav.close();
})();
