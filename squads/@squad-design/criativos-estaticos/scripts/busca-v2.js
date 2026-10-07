const https = require("https");
const KEY = "mR5SBZ0whk1mThi9GXtJDWRawkeXmzaguchxJKg9z3A";

const searches = [
  // ARTE 1 - SNGPC: farmacêutica verificando sistema/documentos
  "pharmacist woman checking computer medication",
  "female pharmacist tablet records pharmacy counter",
  "pharmacy technician computer system documentation",
  // ARTE 2 - PDV: atendimento no balcão de farmácia
  "pharmacy cashier serving customer counter",
  "drugstore counter service woman helping customer",
  "pharmacist attending customer at point of sale",
  // ARTE 3 - Estoque: medicamentos prateleira organização
  "pharmacist organizing medicine shelves drugstore",
  "pharmacy inventory management expiration date check",
  "woman checking medicine stock pharmacy shelf",
  // ARTE 4 - Precificação: gestor analisando preços/margem
  "small business owner woman reviewing pricing store",
  "retail manager woman analyzing profit data",
  "latin woman entrepreneur financial data tablet",
  // ARTE 6 - KPIs: gestor farmácia com dados
  "pharmacy manager reviewing business performance",
  "drugstore owner woman working computer analytics",
  "small business woman analyzing results dashboard"
];

searches.forEach(function(q, i) {
  var url = "https://api.unsplash.com/search/photos?query=" + encodeURIComponent(q) + "&per_page=5&orientation=portrait&client_id=" + KEY;
  https.get(url, {headers:{"Accept-Version":"v1"}}, function(res) {
    var d = "";
    res.on("data", function(c){ d+=c; });
    res.on("end", function(){
      try {
        var j = JSON.parse(d);
        console.log("=== Q" + (i+1) + ": " + q + " ===");
        (j.results||[]).slice(0,4).forEach(function(r,k){
          console.log(k + ": id=" + r.id + " | " + (r.description || r.alt_description || "sem desc").substring(0,90));
        });
      } catch(e) { console.log("ERRO Q" + (i+1) + ": " + e.message); }
    });
  });
});
