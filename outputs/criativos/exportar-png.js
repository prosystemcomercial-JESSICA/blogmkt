const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const BASE = path.resolve(__dirname);

const files = [
  // BOFU Farmácia
  'farmacia/bofu/ani01-dor.html',
  'farmacia/bofu/ani02-consciencia.html',
  'farmacia/bofu/ani03-carrossel.html',
  'farmacia/bofu/ani04-comparativo.html',
  'farmacia/bofu/ani05-prova-social.html',
  'farmacia/bofu/ani06-urgencia.html',
  // BOFU Padaria
  'padaria/bofu/ani07-dor.html',
  'padaria/bofu/ani08-consciencia.html',
  'padaria/bofu/ani09-carrossel.html',
  'padaria/bofu/ani10-comparativo.html',
  'padaria/bofu/ani11-prova-social.html',
  'padaria/bofu/ani12-urgencia.html',
  // TOFU
  'tofu/ani01.html',
  'tofu/ani02.html',
  'tofu/ani03.html',
];

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
  });

  for (const rel of files) {
    const htmlPath = path.join(BASE, rel);
    if (!fs.existsSync(htmlPath)) {
      console.warn(`⚠️  Não encontrado: ${rel}`);
      continue;
    }

    const isCarrossel = rel.includes('carrossel');
    const basePng = htmlPath.replace(/\.html$/, '.png');

    if (isCarrossel) {
      // ── CARROSSEL: uma viewport larga para renderizar tudo, depois recorta card a card ──
      const page = await browser.newPage();
      await page.setViewport({ width: 6000, height: 1080, deviceScaleFactor: 1 });
      await page.goto(`file:///${htmlPath.replace(/\\/g, '/')}`, {
        waitUntil: 'networkidle0',
        timeout: 30000,
      });
      await page.evaluate(() => document.fonts.ready).catch(() => {});

      // Conta quantos cards existem
      const cardCount = await page.evaluate(() => document.querySelectorAll('.card').length);

      // Pasta de cards: mesma pasta do HTML, sub-pasta com nome do criativo
      const carrosselName = path.basename(rel, '.html'); // ex: ani03-carrossel
      const cardsDir = path.join(path.dirname(htmlPath), carrosselName + '-cards');
      if (!fs.existsSync(cardsDir)) fs.mkdirSync(cardsDir, { recursive: true });

      for (let i = 0; i < cardCount; i++) {
        const cardEl = await page.$(`.card:nth-child(${i + 1})`);
        if (!cardEl) continue;
        const box = await cardEl.boundingBox();
        const cardPng = path.join(cardsDir, `card-${String(i + 1).padStart(2, '0')}.png`);
        await page.screenshot({
          path: cardPng,
          clip: { x: box.x, y: box.y, width: box.width, height: box.height },
        });
        console.log(`   ↳ card ${i + 1}/${cardCount} → ${path.relative(BASE, cardPng)}`);
      }

      // Também gera a imagem completa (todos os cards horizontais) para referência
      const totalWidth = await page.evaluate(() => document.body.scrollWidth);
      await page.setViewport({ width: totalWidth, height: 1080 });
      await page.screenshot({ path: basePng, fullPage: false });
      console.log(`✅  ${rel.replace('.html', '.png')} (completo + ${cardCount} cards separados)`);

      await page.close();
    } else {
      // ── ESTÁTICO: captura 1080×1080 ──
      const page = await browser.newPage();
      await page.setViewport({ width: 1080, height: 1080, deviceScaleFactor: 1 });
      await page.goto(`file:///${htmlPath.replace(/\\/g, '/')}`, {
        waitUntil: 'networkidle0',
        timeout: 30000,
      });
      await page.evaluate(() => document.fonts.ready).catch(() => {});
      await page.screenshot({ path: basePng, clip: { x: 0, y: 0, width: 1080, height: 1080 } });
      await page.close();
      console.log(`✅  ${rel.replace('.html', '.png')}`);
    }
  }

  await browser.close();
  console.log('\nExportação concluída.');
})();
