const puppeteer = require(require('path').join('C:\\Users\\prosy\\Documents\\mkt reuniao 1', 'node_modules', 'puppeteer'));
const path = require('path');
const fs = require('fs');

const SQUAD_ROOT = path.join(__dirname, '..');
const OUTPUT_DIR = path.join(SQUAD_ROOT, 'outputs', 'Social Media', 'Agosto_2026');
const ASSETS_DIR = path.join(SQUAD_ROOT, '_assets');

function toDataUrl(filePath, mime) {
  const data = fs.readFileSync(filePath);
  return `data:${mime};base64,` + data.toString('base64');
}

(async () => {
  const logoLight = toDataUrl(path.join(ASSETS_DIR, 'logo-light.png'), 'image/png');
  const imgModelo = toDataUrl(path.join(ASSETS_DIR, 'img-farmaceutica-hero-modelo.jpg'), 'image/jpeg');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const htmlPath = path.join(OUTPUT_DIR, 'arte-01.html');
  const pngPath = path.join(OUTPUT_DIR, 'arte-01.png');

  let html = fs.readFileSync(htmlPath, 'utf8');
  html = html.replace('{{IMG_MODELO}}', imgModelo);
  html = html.replace('{{LOGO_LIGHT}}', logoLight);

  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 2 });
  await page.setContent(html, { waitUntil: 'networkidle0', timeout: 30000 });
  await page.evaluate(() => document.fonts.ready);
  await new Promise(r => setTimeout(r, 1200));

  await page.screenshot({
    path: pngPath,
    clip: { x: 0, y: 0, width: 1080, height: 1350 },
    type: 'png',
  });

  await browser.close();
  console.log('Salvo:', pngPath);
})();
