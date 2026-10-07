const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--allow-file-access-from-files', '--font-render-hinting=none'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 2 });

  const htmlPath = path.resolve(__dirname, 'ani01-v3.html');
  await page.goto(`file:///${htmlPath.replace(/\\/g, '/')}`, { waitUntil: 'networkidle0', timeout: 30000 });
  await page.evaluate(() => document.fonts.ready).catch(() => {});
  await new Promise(r => setTimeout(r, 1500));

  await page.screenshot({
    path: path.resolve(__dirname, 'ani01-v3.png'),
    clip: { x: 0, y: 0, width: 1080, height: 1350 },
  });

  await browser.close();
  console.log('✅ ani01-v3.png exportado 1080×1350 4:5 (2x → 2160×2700 equivalente)');
})();
