const fs = require("fs");
const path = require("path");

function toDataURL(p) {
  var ext = path.extname(p).slice(1);
  var mime = ext === "png" ? "image/png" : "image/jpeg";
  return "data:" + mime + ";base64," + fs.readFileSync(p).toString("base64");
}

var base = path.resolve(__dirname, "..");
var outDir = path.join(base, "outputs", "Social Media", "Junho_2026");
var logo = toDataURL(path.join(base, "_assets", "logo-light.png"));

// A06 KPIs: farmacêutico jaleco branco pegando caixa em prateleira real
// Referência da Jessica: mulher, jaleco, óculos, prateleira de caixas organizadas
var imgKPIs = toDataURL(path.join(base, "_assets", "img-compliance.jpg"));

// ─────────────────────────────────────────────
// ARTE 6 — KPIs — Farmacêutico na prateleira / fullbleed overlay inferior
// Ação real de farmácia → indicadores de gestão
// ─────────────────────────────────────────────
var arte6 = '<!DOCTYPE html>\n<html>\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=1080">\n<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800;900&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">\n<style>\n* { margin:0; padding:0; box-sizing:border-box; }\nbody { width:1080px; height:1350px; overflow:hidden; font-family:\'Montserrat\',sans-serif; position:relative; }\n\n.zone-image { position:absolute; inset:0; }\n.zone-image img { width:100%; height:100%; object-fit:cover; object-position:65% 30%; }\n\n/* Overlay topo leve (logo visível) + baixo denso (texto legível) */\n.overlay-top { position:absolute; top:0; left:0; right:0; height:280px; background:linear-gradient(to bottom,rgba(29,58,95,0.80),transparent); z-index:2; }\n.overlay-bottom { position:absolute; bottom:0; left:0; right:0; height:720px; background:linear-gradient(to top,rgba(29,58,95,0.98) 0%,rgba(29,58,95,0.92) 28%,rgba(29,58,95,0.65) 52%,rgba(29,58,95,0.20) 72%,transparent 100%); z-index:2; }\n\n.zone-logo { position:absolute; top:64px; left:50%; transform:translateX(-50%); z-index:4; }\n.zone-logo img { width:520px; height:auto; filter:drop-shadow(0 2px 12px rgba(0,0,0,0.65)); }\n\n.zone-content { position:absolute; bottom:0; left:0; right:0; padding:0 108px 100px 108px; z-index:3; }\n\n.pre-hl { font-family:\'Inter\',sans-serif; font-size:13px; font-weight:700; letter-spacing:3px; text-transform:uppercase; color:rgba(168,196,224,0.80); margin-bottom:20px; }\n\n.num-destaque { font-size:128px; font-weight:900; line-height:0.90; color:#FFFFFF; display:block; text-shadow:0 4px 30px rgba(0,0,0,0.4); }\n.num-sufixo { font-size:36px; font-weight:700; color:rgba(168,196,224,0.90); display:block; margin-bottom:22px; }\n\n.headline { font-size:48px; font-weight:800; line-height:1.16; color:#FFFFFF; margin-bottom:20px; text-shadow:0 2px 20px rgba(0,0,0,0.3); }\n.sub { font-family:\'Inter\',sans-serif; font-size:24px; font-weight:400; line-height:1.55; color:rgba(255,255,255,0.78); margin-bottom:40px; }\n\n.cta { display:inline-block; background:#FFFFFF; color:#1D3A5F; font-family:\'Montserrat\',sans-serif; font-size:19px; font-weight:700; padding:14px 28px; border-radius:8px; align-self:flex-start; }\n</style>\n</head>\n<body>\n  <div class="zone-image"><img src="' + imgKPIs + '" alt="Farmaceutico jaleco branco organizando medicamentos prateleira farmacia"></div>\n  <div class="overlay-top"></div>\n  <div class="overlay-bottom"></div>\n  <div class="zone-logo"><img src="' + logo + '" alt="ProSystem Sistemas"></div>\n  <div class="zone-content">\n    <div class="pre-hl">KPIs · Gestão · Farmácia</div>\n    <span class="num-destaque">10</span>\n    <span class="num-sufixo">indicadores essenciais</span>\n    <div class="headline">que separam farmácias lucrativas das demais</div>\n    <div class="sub">Você está gerindo no sentimento — ou com dados reais?</div>\n    <div class="cta">Ver os indicadores</div>\n  </div>\n</body>\n</html>';

fs.writeFileSync(path.join(outDir, "arte-06.html"), arte6, "utf-8");
console.log("arte-06.html salva (KPIs - farmaceutico prateleira jaleco)");


