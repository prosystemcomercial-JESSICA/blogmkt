const https = require("https");
const fs = require("fs");

// IDs coletados nas sessões anteriores com descrições confirmadas
// Todos são farmacêuticos ATUANDO — sem selfie, sem fundo neutro
var fotos = [
  {
    // img-compliance.jpg já temos: farmacêutico jaleco pegando caixa em prateleira
    // Esse é excelente para A01 — mas está cortando no split. Vamos usá-lo fullbleed.
    // Novo candidato para A01: O13g6-Gtb5o "A female pharmacist is examining a vial in a pharmacy"
    url: "https://images.unsplash.com/photo-1580281658460-2d1114999983?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    out: "_assets/act-a01-farmaceutica-frasco-farmacia.jpg",
    arte: "A01 - farmaceutica examinando frasco farmacia real"
  },
  {
    // JABi6GpktFM: "A man and a woman in the lab" - healthcare laboratory analysis
    // candidato A04 — dupla em laboratório/farmácia analisando
    url: "https://images.unsplash.com/photo-1760074032649-0243993135b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    out: "_assets/act-a04-dupla-laboratorio.jpg",
    arte: "A04 - dupla farmacia laboratorio analise"
  },
  {
    // jqBOb3IThyA: "Asian female reading booklet at pharmacy counter, male pharmacist working background"
    // A05 — cliente no balcão, farmacêutico ao fundo — contexto atendimento PBM
    url: "https://images.unsplash.com/photo-1580281798366-ea571ecb5fc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    out: "_assets/act-a05-cliente-balcao-farmaceutico.jpg",
    arte: "A05 - cliente balcao farmaceutico atendendo"
  },
  {
    // img-compliance.jpg ID original — farmacêutico jaleco prateleira real
    // Reconfirmar com crop diferente para A01
    url: "https://images.unsplash.com/photo-1576602976047-174e57a47881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    out: "_assets/act-a01-farmaceutico-prateleira-b.jpg",
    arte: "A01-b farmaceutico jaleco prateleira"
  },
  {
    // v2-estoque-farmacista-vial.jpg ID original kooSjlL8LnQ
    // Farmacêutico examinando medicamento em farmácia — ação clara
    url: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    out: "_assets/act-a04-farmaceutico-examinando.jpg",
    arte: "A04 - farmaceutico examinando medicamento farmacia"
  }
];

var done = 0;
function downloadOne(i) {
  if (i >= fotos.length) return;
  var foto = fotos[i];
  var file = fs.createWriteStream(foto.out);
  function get(u) {
    https.get(u, function(r) {
      if (r.statusCode === 301 || r.statusCode === 302) { get(r.headers.location); return; }
      if (r.statusCode !== 200) {
        console.log("HTTP " + r.statusCode + " | " + foto.arte);
        file.close(); setTimeout(function() { downloadOne(i + 1); }, 1200); return;
      }
      r.pipe(file);
      file.on("finish", function() {
        done++;
        var stat = fs.statSync(foto.out);
        console.log("OK [" + done + "/" + fotos.length + "] " + foto.arte + " | " + Math.round(stat.size / 1024) + "KB");
        setTimeout(function() { downloadOne(i + 1); }, 1200);
      });
    }).on("error", function(e) {
      console.log("ERR: " + e.message);
      setTimeout(function() { downloadOne(i + 1); }, 1200);
    });
  }
  get(foto.url);
}
downloadOne(0);
