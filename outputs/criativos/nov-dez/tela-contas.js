// Refaz a mensagem de contas a pagar do WhatsApp (whats-contas) para a peça de 28/11/2026.
// O print original é de 26/03/2025, com números sublinhados pelo WhatsApp e R$ 71 mil em atraso.
// Aqui as linhas e o formato são os do aviso real; os valores são fictícios e a data é a do post.
// Uso: node outputs/criativos/nov-dez/tela-contas.js
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const SAIDA = path.join(__dirname, 'telas', 'whats-contas-v2.png');
const url = (p) => 'file:///' + p.split(path.sep).join('/').replace(/ /g, '%20');

const html = `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box}html,body{margin:0;background:transparent}
.m{width:780px;padding:18px 24px 14px;background:#e2fbd9;font:400 44px/1.36 Roboto,sans-serif;color:#111}
.t{font-size:46px;white-space:nowrap;margin-bottom:22px}
.h{font-size:24px;color:#667;text-align:right;margin-top:-6px}
.mk{background:#ffd9b0;box-shadow:inset 0 0 0 4px #f07a12;border-radius:10px;padding:0 10px;margin:0 -10px}
</style></head><body><div class="m">
<div class="t">CONTAS A PAGAR - 28/11/2026</div>
<div>Total a pagar:</div>
<div>Hoje: R$ 1240.35</div>
<div>Amanhã: R$ 0.00</div>
<div class="mk">Prox. 5 dias: R$ 8735.90</div>
<div>Mês atual: R$ 21480.60</div>
<div>Em atraso: R$ 0.00</div>
<div class="h">07:00 ✓✓</div>
</div></body></html>`;

(async () => {
  const b = await puppeteer.launch({ headless: 'new' });
  const p = await b.newPage();
  await p.setViewport({ width: 800, height: 900, deviceScaleFactor: 1 });
  const tmp = path.join(__dirname, '_tela.html');
  fs.writeFileSync(tmp, html);
  await p.goto(url(tmp), { waitUntil: 'networkidle0', timeout: 60000 });
  await p.evaluate(() => document.fonts.ready);
  await (await p.$('.m')).screenshot({ path: SAIDA, omitBackground: true });
  fs.unlinkSync(tmp);
  await b.close();
  console.log('tela salva:', SAIDA);
})();
