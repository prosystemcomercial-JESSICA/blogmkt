const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const SQUAD_ROOT = path.join(__dirname, '..');
const OUTPUT_DIR = path.join(SQUAD_ROOT, 'outputs', 'Social Media', 'Maio_2026');
const ASSETS_DIR = path.join(SQUAD_ROOT, '_assets');

const artes = [
  { file: 'arte-01.html', img: 'img-farmacia-fila.jpg',    imgToken: '{{IMG_01}}' },
  { file: 'arte-02.html', img: 'img-compliance.jpg',       imgToken: '{{IMG_02}}' },
  { file: 'arte-03.html', img: 'img-farmacia-interior.jpg',imgToken: '{{IMG_03}}' },
  { file: 'arte-04.html', img: 'img-farmacista.jpg',       imgToken: '{{IMG_04}}' },
  { file: 'arte-05.html', img: 'img-regulacao.jpg',        imgToken: '{{IMG_05}}' },
];

function toDataUrl(filePath, mime) {
  const data = fs.readFileSync(filePath);
  return `data:${mime};base64,` + data.toString('base64');
}

(async () => {
  const logoLight = toDataUrl(path.join(ASSETS_DIR, 'logo-light.png'), 'image/png');
  const logoDark  = toDataUrl(path.join(ASSETS_DIR, 'logo-dark.png'),  'image/png');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  for (const { file, img, imgToken } of artes) {
    const htmlPath = path.join(OUTPUT_DIR, file);
    const pngPath  = htmlPath.replace('.html', '.png');
    const imgMime  = img.endsWith('.png') ? 'image/png' : 'image/jpeg';
    const imgData  = toDataUrl(path.join(ASSETS_DIR, img), imgMime);

    console.log(`Exportando ${file}...`);

    let html = fs.readFileSync(htmlPath, 'utf8');
    html = html.replace(imgToken, imgData);
    html = html.replace(/src="{{LOGO_LIGHT}}"/g, `src="${logoLight}"`);
    html = html.replace(/src="{{LOGO_DARK}}"/g,  `src="${logoDark}"`);

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

    await page.close();
    console.log(`  Salvo: ${path.basename(pngPath)}`);
  }

  await browser.close();
  console.log('\nExportação concluída.');
})();
