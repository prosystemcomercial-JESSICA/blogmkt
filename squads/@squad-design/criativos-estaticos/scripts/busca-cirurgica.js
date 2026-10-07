const https = require("https");
const KEY = "mR5SBZ0whk1mThi9GXtJDWRawkeXmzaguchxJKg9z3A";

// Buscas muito específicas — farmácia real, pessoas, sem tela, sem tablet
// Prioridade: jaleco, balcão, prateleira, fila, interior farmácia
var buscas = [
  // A1 SNGPC - farmacêutica jaleco no ambiente
  "pharmacist woman white coat dispensing medicine",
  "female pharmacist serving patient counter drugstore",
  "pharmacy woman uniform counter serving",

  // A2 PDV - fila/espera/caixa varejo
  "people waiting line retail store cashier counter",
  "customers queue waiting store checkout",
  "people standing line waiting shop latin",

  // A3 Estoque - interior farmácia prateleira
  "pharmacy interior shelves medicine row organized",
  "drugstore aisle shelves products organized interior",
  "pharmacist woman white coat working pharmacy interior",

  // A4 Precificação - gestor/gerente em loja real
  "store manager woman small business owner smiling",
  "latin woman shop owner confident standing",
  "female small business owner shop interior",

  // A6 KPIs - gestor profissional negócio real
  "business owner man woman standing store confident arms crossed",
  "pharmacy manager professional serious working",
  "small business owner professional standing shop"
];

function buscaSequencial(i) {
  if (i >= buscas.length) {
    console.log("\nBusca completa.");
    return;
  }
  var q = buscas[i];
  var grupo = i < 3 ? "A1" : i < 6 ? "A2" : i < 9 ? "A3" : i < 12 ? "A4" : "A6";
  var url = "https://api.unsplash.com/search/photos?query=" + encodeURIComponent(q) + "&per_page=6&orientation=portrait&client_id=" + KEY;
  https.get(url, {headers:{"Accept-Version":"v1"}}, function(res) {
    var d = "";
    res.on("data", function(c){ d+=c; });
    res.on("end", function(){
      try {
        var j = JSON.parse(d);
        if (j.errors || d.indexOf("Rate Limit") > -1) {
          console.log("RATE LIMIT Q" + (i+1) + " - aguardando...");
          setTimeout(function(){ buscaSequencial(i); }, 5000);
          return;
        }
        console.log("=== [" + grupo + "] Q" + (i+1) + ": " + q + " ===");
        (j.results||[]).slice(0,5).forEach(function(r,k){
          console.log("  " + k + ": id=" + r.id + " | " + (r.description||r.alt_description||"sem desc").substring(0,100));
        });
      } catch(e) {
        console.log("ERR Q"+(i+1)+": " + d.substring(0,60));
      }
      setTimeout(function(){ buscaSequencial(i+1); }, 1200);
    });
  });
}

buscaSequencial(0);
