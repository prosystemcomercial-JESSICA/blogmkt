const https = require("https");
const fs = require("fs");

var imgs = [
  {
    url: "https://images.unsplash.com/photo-1691934286085-70d08eecebd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    out: "_assets/v2-sngpc-profissional.jpg",
    nota: "Arte1 SNGPC - profissional saude computador"
  },
  {
    url: "https://images.unsplash.com/photo-1711397818306-863530cd27c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    out: "_assets/v2-pdv-balcao-pos.jpg",
    nota: "Arte2 PDV - balcao com terminal pagamento"
  },
  {
    url: "https://images.unsplash.com/photo-1580281658460-2d1114999983?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    out: "_assets/v2-estoque-farmacista-vial.jpg",
    nota: "Arte3 Estoque - farmacista examinando frasco"
  },
  {
    url: "https://images.unsplash.com/photo-1674104151261-fdade9ab2466?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    out: "_assets/v2-precificacao-tablet-grafico.jpg",
    nota: "Arte4 Precificacao - mulher tablet com grafico"
  },
  {
    url: "https://images.unsplash.com/photo-1507206130118-b5907f817163?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    out: "_assets/v2-kpis-gestora-laptop.jpg",
    nota: "Arte6 KPIs - gestora profissional laptop"
  }
];

var done = 0;

function download(url, out, nota) {
  var file = fs.createWriteStream(out);
  function get(u) {
    https.get(u, function(r) {
      if (r.statusCode === 301 || r.statusCode === 302) {
        get(r.headers.location);
      } else {
        r.pipe(file);
        file.on("finish", function() {
          done++;
          var stat = fs.statSync(out);
          console.log("OK [" + done + "/" + imgs.length + "] " + out + " | " + Math.round(stat.size/1024) + "KB | " + nota);
        });
      }
    });
  }
  get(url);
}

imgs.forEach(function(img) {
  download(img.url, img.out, img.nota);
});
