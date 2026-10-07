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

// A05: Farmácia Popular brasileira real — balcão, jaleco, prateleiras
// Overlay inferior cobre o banner vermelho, mantém a cena do balcão visível no topo
var imgPBM = toDataURL(path.join(base, "_assets", "a05-farmacia-popular-balcao.jpg"));

var arte5 = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=1080">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800;900&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
* { margin:0; padding:0; box-sizing:border-box; }
body { width:1080px; height:1350px; overflow:hidden; font-family:'Montserrat',sans-serif; background:#1D3A5F; position:relative; }

.zone-image { position:absolute; inset:0; }
.zone-image img {
  width:100%; height:100%;
  object-fit:cover;
  /* Foco no terço superior — cena do balcão, farmacêutico, prateleiras */
  object-position:50% 8%;
  /* Saturação reduzida para neutralizar o vermelho excessivo */
  filter: saturate(0.45) brightness(0.90);
}

/* Overlay: topo semi-leve (cena visível) → base totalmente opaca (cobre o banner) */
.overlay { position:absolute; inset:0;
  background: linear-gradient(to top,
    rgba(29,58,95,1.00) 0%,
    rgba(29,58,95,0.97) 22%,
    rgba(29,58,95,0.85) 40%,
    rgba(29,58,95,0.60) 56%,
    rgba(29,58,95,0.25) 70%,
    rgba(29,58,95,0.08) 84%,
    transparent 100%
  );
}
/* Overlay top — logo legível */
.overlay-top { position:absolute; top:0; left:0; right:0; height:220px;
  background:linear-gradient(to bottom, rgba(29,58,95,0.82), transparent);
}

.zone-logo { position:absolute; top:64px; left:50%; transform:translateX(-50%); z-index:4; }
.zone-logo img { width:520px; height:auto; filter:drop-shadow(0 2px 12px rgba(0,0,0,0.65)); }

.zone-content { position:absolute; bottom:0; left:0; right:0; padding:0 108px 96px 108px; z-index:3; }

.pre-hl { font-family:'Inter',sans-serif; font-size:13px; font-weight:700; letter-spacing:3px; text-transform:uppercase; color:rgba(168,196,224,0.80); margin-bottom:20px; }

.num-bloco { margin-bottom:18px; }
.num-grande { font-size:150px; font-weight:900; line-height:0.88; color:#FFFFFF; display:block; text-shadow:0 4px 32px rgba(0,0,0,0.4); }
.num-unidade { font-size:40px; font-weight:800; color:rgba(168,196,224,0.90); display:block; margin-top:4px; }

.divider { width:72px; height:4px; background:rgba(255,255,255,0.25); border-radius:2px; margin:24px 0; }

.headline { font-size:46px; font-weight:800; line-height:1.18; color:#FFFFFF; margin-bottom:16px; text-shadow:0 2px 18px rgba(0,0,0,0.3); }
.sub { font-family:'Inter',sans-serif; font-size:22px; font-weight:400; line-height:1.58; color:rgba(255,255,255,0.75); margin-bottom:38px; }
.cta { display:inline-block; background:#FFFFFF; color:#1D3A5F; font-family:'Montserrat',sans-serif; font-size:19px; font-weight:700; padding:14px 28px; border-radius:8px; }
</style>
</head>
<body>
  <div class="zone-image"><img src="${imgPBM}" alt="Farmácia brasileira balcão farmacêutico jaleco prateleiras medicamentos"></div>
  <div class="overlay"></div>
  <div class="overlay-top"></div>
  <div class="zone-logo"><img src="${logo}" alt="ProSystem Sistemas"></div>
  <div class="zone-content">
    <div class="pre-hl">PBM · Convênios · Ticket Médio</div>
    <div class="num-bloco">
      <span class="num-grande">+40%</span>
      <span class="num-unidade">no ticket médio</span>
    </div>
    <div class="divider"></div>
    <div class="headline">com PBM integrado ao seu ERP</div>
    <div class="sub">Convênios farmacêuticos aumentam o valor médio por venda e fidelizam clientes.</div>
    <div class="cta">Como o PBM funciona</div>
  </div>
</body>
</html>`;

fs.writeFileSync(path.join(outDir, "arte-05.html"), arte5, "utf-8");
console.log("arte-05.html salva (PBM - farmacia popular brasileira balcao)");


