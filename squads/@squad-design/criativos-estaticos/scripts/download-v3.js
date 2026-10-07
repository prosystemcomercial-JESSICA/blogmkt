const https = require("https");
const fs = require("fs");
const KEY = "mR5SBZ0whk1mThi9GXtJDWRawkeXmzaguchxJKg9z3A";

// Buscar URL de download de cada foto confirmada
var fotos = [
  { id: "zIE36UQrVkA", out: "_assets/v3-sngpc-farmaceutica-jaleco.jpg", arte: "A1 SNGPC" },
  { id: "eAqHdLhCqQA", out: "_assets/v3-pdv-pessoas-varejo.jpg", arte: "A2 PDV" },
  { id: "kooSjlL8LnQ", out: "_assets/v3-estoque-farmaceutico-exame.jpg", arte: "A3 Estoque" },
  { id: "8Jlz0eFuUG4", out: "_assets/v3-precificacao-empreendedora.jpg", arte: "A4 Prec" },
  { id: "DmHafT1WyS0", out: "_assets/v3-kpis-gestor-loja.jpg", arte: "A6 KPIs" }
];

var done = 0;
var total = fotos.length;

function downloadFoto(foto) {
  // Primeiro obter URL via API para download autorizado
  var apiUrl = "https://api.unsplash.com/photos/" + foto.id + "?client_id=" + KEY;
  https.get(apiUrl, {headers:{"Accept-Version":"v1"}}, function(res) {
    var d = "";
    res.on("data", function(c){ d+=c; });
    res.on("end", function(){
      try {
        var j = JSON.parse(d);
        if (j.errors || d.indexOf("Rate Limit") > -1) {
          // Usar URL direta do Unsplash com parametros padrão
          var directUrl = "https://images.unsplash.com/photo-" + foto.id + "?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080";
          downloadDirect(directUrl, foto);
        } else {
          var imgUrl = j.urls.regular;
          downloadDirect(imgUrl, foto);
        }
      } catch(e) {
        // fallback URL padrão
        var fallUrl = "https://images.unsplash.com/" + foto.id + "?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080";
        downloadDirect(fallUrl, foto);
      }
    });
  });
}

function downloadDirect(url, foto) {
  var file = fs.createWriteStream(foto.out);
  function get(u) {
    https.get(u, function(r) {
      if (r.statusCode === 301 || r.statusCode === 302) {
        get(r.headers.location);
      } else if (r.statusCode === 200) {
        r.pipe(file);
        file.on("finish", function() {
          done++;
          var stat = fs.statSync(foto.out);
          console.log("OK [" + done + "/" + total + "] " + foto.arte + " -> " + foto.out + " | " + Math.round(stat.size/1024) + "KB");
        });
      } else {
        console.log("HTTP " + r.statusCode + " para " + foto.arte + " | URL: " + u.substring(0,60));
      }
    }).on("error", function(e){
      console.log("NET ERR " + foto.arte + ": " + e.message);
    });
  }
  get(url);
}

// Aguardar 3s entre cada download para não bater rate limit
fotos.forEach(function(foto, i) {
  setTimeout(function() {
    downloadFoto(foto);
  }, i * 1500);
});
