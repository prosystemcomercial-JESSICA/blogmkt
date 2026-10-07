const puppeteer = require('puppeteer');
const path = require('path');

const BASE = path.resolve(__dirname);
const files = [
  'padaria/bofu/ani07-dor.html',
  'padaria/bofu/ani08-consciencia.html',
  'padaria/bofu/ani10-comparativo.html',
  'padaria/bofu/ani11-prova-social.html',
  'padaria/bofu/ani12-urgencia.html',
];

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--allow-file-access-from-files', '--font-render-hinting=none'],
  });

  for (const rel of files) {
    const htmlPath = path.join(BASE, rel);
    const pngPath = htmlPath.replace('.html', '.png');
    const page = await browser.newPage();
    await page.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 2 });
    await page.goto(`file:///${htmlPath.replace(/\\/g, '/')}`, { waitUntil: 'networkidle0', timeout: 30000 });
    await page.evaluate(() => document.fonts.ready).catch(() => {});
    await new Promise(r => setTimeout(r, 1200));
    await page.screenshot({ path: pngPath, clip: { x: 0, y: 0, width: 1080, height: 1350 } });
    await page.close();
    console.log(`✅ ${rel.replace('.html', '.png')}`);
  }

  await browser.close();
  console.log('\n✅ Padaria BOFU — 5 estáticos exportados (1080×1350 4:5)');
})();
