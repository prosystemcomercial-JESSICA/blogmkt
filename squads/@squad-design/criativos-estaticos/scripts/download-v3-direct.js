const https = require("https");
const fs = require("fs");

// URLs diretas já conhecidas dos candidatos confirmados nas buscas v3
// Usando formato Unsplash CDN direto — sem precisar da API
var fotos = [
  {
    // zIE36UQrVkA: "A woman in a white lab coat is looking at a shelf of bottles"
    url: "https://images.unsplash.com/photo-1576602976047-174e57a47881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    out: "_assets/v3-sngpc-farmaceutica-jaleco.jpg",
    arte: "A1 SNGPC - farmaceutica jaleco prateleira"
  },
  {
    // eAqHdLhCqQA: "man in blue long sleeve shirt standing beside man in gray long sleeve shirt"
    url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    out: "_assets/v3-pdv-pessoas-varejo.jpg",
    arte: "A2 PDV - pessoas varejo"
  },
  {
    // kooSjlL8LnQ: "A male pharmacist is examining a drug in a pharmacy"
    url: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    out: "_assets/v3-estoque-farmaceutico.jpg",
    arte: "A3 Estoque - farmaceutico examinando"
  },
  {
    // 8Jlz0eFuUG4: "A smiling woman stands behind a desk with design samples"
    url: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    out: "_assets/v3-precificacao-empreendedora.jpg",
    arte: "A4 Precificacao - empreendedora balcao"
  },
  {
    // DmHafT1WyS0: "a man standing in a store with his arms crossed"
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    out: "_assets/v3-kpis-gestor-loja.jpg",
    arte: "A6 KPIs - gestor loja confiante"
  }
];

var done = 0;

function downloadOne(i) {
  if (i >= fotos.length) return;
  var foto = fotos[i];
  var file = fs.createWriteStream(foto.out);

  function get(u) {
    https.get(u, function(r) {
      if (r.statusCode === 301 || r.statusCode === 302) {
        get(r.headers.location);
        return;
      }
      if (r.statusCode !== 200) {
        console.log("HTTP " + r.statusCode + " | " + foto.arte);
        file.close();
        setTimeout(function(){ downloadOne(i+1); }, 1000);
        return;
      }
      r.pipe(file);
      file.on("finish", function() {
        done++;
        var stat = fs.statSync(foto.out);
        console.log("OK [" + done + "/" + fotos.length + "] " + foto.arte + " | " + Math.round(stat.size/1024) + "KB");
        setTimeout(function(){ downloadOne(i+1); }, 1200);
      });
    }).on("error", function(e) {
      console.log("ERR " + foto.arte + ": " + e.message);
      setTimeout(function(){ downloadOne(i+1); }, 1200);
    });
  }
  get(foto.url);
}

downloadOne(0);
