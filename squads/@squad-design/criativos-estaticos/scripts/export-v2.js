const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

var outDir = path.resolve(__dirname, "..", "outputs", "Social Media", "Junho_2026");

async function exportArte(num) {
  var numStr = num < 10 ? "0" + num : "" + num;
  var htmlFile = path.join(outDir, "arte-" + numStr + ".html");
  var pngFile = path.join(outDir, "arte-" + numStr + ".png");
  var html = fs.readFileSync(htmlFile, "utf-8");

  var browser = await puppeteer.launch({ args: ["--no-sandbox", "--disable-setuid-sandbox"] });
  var page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 2 });
  await page.setContent(html, { waitUntil: "networkidle0" });
  await page.evaluate(function() { return document.fonts.ready; });
  await new Promise(function(r){ setTimeout(r, 1400); });
  await page.screenshot({
    path: pngFile,
    type: "png",
    clip: { x: 0, y: 0, width: 1080, height: 1350 }
  });
  await browser.close();

  var stat = fs.statSync(pngFile);
  console.log("OK arte-" + numStr + ".png | " + Math.round(stat.size / 1024) + " KB");
}

(async function() {
  for (var i = 1; i <= 6; i++) {
    await exportArte(i);
  }
  console.log("\nTodos os 6 PNGs v2 exportados.");
})();
