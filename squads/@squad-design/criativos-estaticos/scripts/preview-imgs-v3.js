const fs = require("fs");
const path = require("path");

var base = path.resolve(__dirname, "..");

function b64(p) {
  return "data:image/jpeg;base64," + fs.readFileSync(path.join(base, p)).toString("base64");
}

var imgs = [
  { f: "_assets/v3-sngpc-farmaceutica-jaleco.jpg", label: "A1 SNGPC - farmaceutica jaleco" },
  { f: "_assets/v3-pdv-pessoas-varejo.jpg", label: "A2 PDV - pessoas varejo" },
  { f: "_assets/v3-estoque-farmaceutico.jpg", label: "A3 Estoque - farmaceutico" },
  { f: "_assets/v3-precificacao-empreendedora.jpg", label: "A4 Precificacao" },
  { f: "_assets/v3-kpis-gestor-loja.jpg", label: "A6 KPIs - gestor loja" }
];

var cards = imgs.map(function(i) {
  return '<div style="display:inline-block;margin:12px;text-align:center;vertical-align:top">' +
    '<img src="' + b64(i.f) + '" style="height:320px;border-radius:8px;display:block">' +
    '<p style="margin-top:8px;font-size:13px">' + i.label + '</p>' +
    '</div>';
}).join("");

var html = '<!DOCTYPE html><html><head><meta charset="UTF-8"></head>' +
  '<body style="background:#111;color:#fff;font-family:sans-serif;padding:20px">' +
  '<h2 style="margin-bottom:20px">Verificacao Visual — Imagens v3</h2>' +
  cards +
  '</body></html>';

var outPath = path.join(base, "_assets", "preview-imagens-v3.html");
fs.writeFileSync(outPath, html, "utf-8");
console.log("Preview salvo: " + outPath);
