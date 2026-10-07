const https = require("https");
const fs = require("fs");

var fotos = [
  // A04 candidatos — mulher morena em loja/varejo
  {
    url: "https://images.unsplash.com/photo-1770739318724-f7b285d8620b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    out: "_assets/br-a04-mulher-supermercado.jpg",
    arte: "A04-a mulher supermercado sorrindo"
  },
  {
    url: "https://images.unsplash.com/photo-1697624898774-c72e67a6a57d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    out: "_assets/br-a04-mulher-loja.jpg",
    arte: "A04-b mulher loja prateleira"
  },
  // A01/A05 — mulher jaleco farmácia
  {
    url: "https://images.unsplash.com/photo-1683348757495-a479b9cebe75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    out: "_assets/br-a01-farmaceutica-papel.jpg",
    arte: "A01/A05-a farmaceutica jaleco papel"
  },
  {
    url: "https://images.unsplash.com/photo-1683348758447-05c0c0755a2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    out: "_assets/br-a01-farmaceutica-b.jpg",
    arte: "A01/A05-b farmaceutica jaleco retrato"
  },
  {
    url: "https://images.unsplash.com/photo-1683348757327-f1505b93f7a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    out: "_assets/br-a01-farmaceutica-c.jpg",
    arte: "A01/A05-c farmaceutica jaleco papel c"
  },
  // A05 — pessoa jaleco em loja/farmácia
  {
    url: "https://images.unsplash.com/photo-1662388049705-8d6cf0b50686?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    out: "_assets/br-a05-jaleco-loja.jpg",
    arte: "A05 jaleco loja mercado"
  },
  // A06 — mulher analisando papel/relatório
  {
    url: "https://images.unsplash.com/photo-1607430590478-8ddfaefd617b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    out: "_assets/br-a06-mulher-escrevendo.jpg",
    arte: "A06-a mulher escrevendo papel"
  },
  {
    url: "https://images.unsplash.com/photo-1646032540224-4ab44f77e6f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    out: "_assets/br-a06-mulher-documento.jpg",
    arte: "A06-b mulher segurando documento"
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
