const https = require("https");
const fs = require("fs");

// URLs confirmadas via API — seleção minuciosa por descrição e tags
var fotos = [
  {
    // jqBOb3IThyA: Asian female lendo booklet no balcão farmácia, farmacêutico ao fundo jaleco branco
    // → perfeita para A05 (farmacêutico atendendo cliente)
    url: "https://images.unsplash.com/photo-1580281798366-ea571ecb5fc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    out: "_assets/v4-a05-farmaceutico-atendimento.jpg",
    arte: "A05 - farmaceutico atendimento balcao"
  },
  {
    // dUeA6UTDfPo: pharmacist - man, algeria (árabe/moreno = fenotipo próximo latino)
    // → candidato A05 alternativo
    url: "https://images.unsplash.com/photo-1657551882668-53fdd523c9ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    out: "_assets/v4-a05-farmaceutico-b.jpg",
    arte: "A05 candidato B - farmaceutico retrato"
  },
  {
    // ETqK4jBdXR8: man and woman standing at a counter - happy customer, payment
    // → A04 balcão atendimento
    url: "https://images.unsplash.com/photo-1715635846028-f162249377c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    out: "_assets/v4-a04-balcao-atendimento.jpg",
    arte: "A04 - balcao atendimento cliente"
  },
  {
    // bMXwCe0QmFY: man and woman standing - indian girl, product, shopping
    // → A04 alternativo
    url: "https://images.unsplash.com/photo-1681874981393-003413f08d51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    out: "_assets/v4-a04-balcao-b.jpg",
    arte: "A04 candidato B - balcao"
  },
  {
    // nGsVMkRatgM: Designer - desk, drawing, office
    // → A06 pessoa analisando papel/documentos (sem tela)
    url: "https://images.unsplash.com/photo-1598368195835-91e67f80c9d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    out: "_assets/v4-a06-analise-documentos.jpg",
    arte: "A06 - analise documentos designer"
  },
  {
    // a7bBJZmdqK4: person's hand on two stack of paper
    // → A06 mãos em papéis/relatórios
    url: "https://images.unsplash.com/photo-1573146179771-d58c297104a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    out: "_assets/v4-a06-papeis-b.jpg",
    arte: "A06 candidato B - maos papeis"
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
        file.close();
        setTimeout(function() { downloadOne(i + 1); }, 1200);
        return;
      }
      r.pipe(file);
      file.on("finish", function() {
        done++;
        var stat = fs.statSync(foto.out);
        console.log("OK [" + done + "/" + fotos.length + "] " + foto.arte + " | " + Math.round(stat.size / 1024) + "KB");
        setTimeout(function() { downloadOne(i + 1); }, 1200);
      });
    }).on("error", function(e) {
      console.log("ERR " + foto.arte + ": " + e.message);
      setTimeout(function() { downloadOne(i + 1); }, 1200);
    });
  }
  get(foto.url);
}

downloadOne(0);
