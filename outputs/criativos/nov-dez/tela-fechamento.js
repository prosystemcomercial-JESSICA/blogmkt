// Refaz a mensagem de fechamento de caixa do WhatsApp (whats-fechamento) para a peça de 16/11.
// O print original tem os números sublinhados pelo WhatsApp, data de 2025 e valores que não fecham.
// Aqui os valores são fictícios e fecham: venda líquida = total de pagamentos. As linhas que a peça explica ficam marcadas.
// Uso: node outputs/criativos/nov-dez/tela-fechamento.js
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const SAIDA = path.join(__dirname, 'telas', 'whats-fechamento-v2.png');
const url = (p) => 'file:///' + p.split(path.sep).join('/').replace(/ /g, '%20');

// [rótulo, valor, marcada]
const TOTAIS = [
  ['Venda Bruta', '1512,40'], ['Cancelamentos', '0,00'], ['Descontos', '18,60'], ['Venda Liquida', '1493,80'],
  ['Sangrias', '300,00', true], ['Recebimentos', '0,00'], ['Suprimentos', '0,00'],
];
const PAGAMENTOS = [['Dinheiro', '312,50'], ['Cartão', '648,90'], ['Convenio', '96,40'], ['PIX', '436,00']];

const linha = ([r, v, m]) => `<div class="ln${m ? ' mk' : ''}"><span>${r}</span><i></i><span>: R$ ${v}</span></div>`;
const pag = ([r, v]) => `<div class="pg"><span>${r}:</span><span>${v}</span></div>`;

const html = `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box}html,body{margin:0;background:transparent}
.m{width:854px;padding:14px 22px 26px;background:#e2fbd9;font:400 43px/1.38 Roboto,sans-serif;color:#111}
.c{text-align:center}
.ln{display:flex;align-items:baseline;padding:0 10px;margin:0 -10px;border-radius:10px}
.ln i{flex:1;border-bottom:4px dotted #333;margin:0 4px 11px}
.ln span:last-child{width:290px}
.mk,.bl{background:#ffd9b0;box-shadow:inset 0 0 0 4px #f07a12}
.sep{border-top:3px dashed #555;margin:22px 0 12px}
.bl{border-radius:10px;padding:2px 10px;margin:0 -10px}
.pg{display:grid;grid-template-columns:380px 1fr}
.pg span:last-child{text-align:right;width:180px}
</style></head><body><div class="m">
<div class="c">FECHAMENTO DE CAIXA</div>
<div>Caixa: 1&nbsp;&nbsp;&nbsp;&nbsp; Fundo:&nbsp;&nbsp;&nbsp; 200,00</div>
<div>Responsável: 0001-PROSYSTEM</div>
<div>Período: 13/11/2026 06:00 a<br>13/11/2026 20:30</div>
<div class="c" style="margin-top:14px">TOTALIZADORES</div>
${TOTAIS.map(linha).join('')}
<div class="sep"></div>
<div class="c">FORMAS DE PAGAMENTO</div>
<div class="bl">${PAGAMENTOS.map(pag).join('')}</div>
<div class="pg"><span>Total Pagamentos:</span><span>1493,80</span></div>
</div></body></html>`;

(async () => {
  const b = await puppeteer.launch({ headless: 'new' });
  const p = await b.newPage();
  await p.setViewport({ width: 854, height: 1400, deviceScaleFactor: 1 });
  const tmp = path.join(__dirname, '_tela.html');
  fs.writeFileSync(tmp, html);
  await p.goto(url(tmp), { waitUntil: 'networkidle0', timeout: 60000 });
  await p.evaluate(() => document.fonts.ready);
  const el = await p.$('.m');
  await el.screenshot({ path: SAIDA, omitBackground: true });
  fs.unlinkSync(tmp);
  await b.close();
  console.log('tela salva:', SAIDA);
})();
