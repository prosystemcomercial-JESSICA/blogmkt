const puppeteer = require('puppeteer');
const path = require('path');

const BASE = path.resolve(__dirname);
const files = [
  { src: 'tofu/ani01-v4.html', out: 'tofu/ani01.png' },
  { src: 'tofu/ani02.html',    out: 'tofu/ani02.png' },
  { src: 'tofu/ani03.html',    out: 'tofu/ani03.png' },
];

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--allow-file-access-from-files', '--font-render-hinting=none'],
  });

  for (const { src, out } of files) {
    const htmlPath = path.join(BASE, src);
    const pngPath  = path.join(BASE, out);
    const page = await browser.newPage();
    await page.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 2 });
    await page.goto(`file:///${htmlPath.replace(/\\/g, '/')}`, { waitUntil: 'networkidle0', timeout: 30000 });
    await page.evaluate(() => document.fonts.ready).catch(() => {});
    await new Promise(r => setTimeout(r, 1200));
    await page.screenshot({ path: pngPath, clip: { x: 0, y: 0, width: 1080, height: 1350 } });
    await page.close();
    console.log(`✅ ${out}`);
  }

  await browser.close();
  console.log('\n✅ TOFU — 3 estáticos exportados (1080×1350 4:5)');
})();
