const https = require("https");
const KEY = "mR5SBZ0whk1mThi9GXtJDWRawkeXmzaguchxJKg9z3A";

// Termos específicos para fenotipo brasileiro/latino sul-americano
// Moreno, traços ibéricos/indígenas, cabelo escuro, pele morena
var buscas = [
  // A01/A04/A05 — farmácia, balcão, atendimento, pessoa morena brasileira
  { q: "brazilian woman pharmacist drugstore counter smiling", tag: "A04/A05" },
  { q: "latin south american woman store owner counter brown hair", tag: "A04" },
  { q: "hispanic pharmacist woman white coat pharmacy brasil", tag: "A01/A05" },
  { q: "latin pharmacist man woman serving client pharmacy", tag: "A05" },
  { q: "brazil pharmacy attendant counter service woman dark hair", tag: "A04/A05" },

  // A06 — pessoa morena/brasileira analisando relatório/indicadores
  { q: "latin business woman analyzing report documents desk", tag: "A06" },
  { q: "south american man reviewing financial documents papers", tag: "A06" },
  { q: "hispanic woman manager office reviewing papers charts printed", tag: "A06" },
  { q: "latin manager woman man documents business meeting table", tag: "A06" }
];

function run(i) {
  if (i >= buscas.length) { console.log("\nBusca completa."); return; }
  var item = buscas[i];
  var url = "https://api.unsplash.com/search/photos?query=" + encodeURIComponent(item.q) +
    "&per_page=8&orientation=portrait&client_id=" + KEY;
  https.get(url, { headers: { "Accept-Version": "v1" } }, function(res) {
    var d = "";
    res.on("data", function(c) { d += c; });
    res.on("end", function() {
      try {
        if (d.indexOf("Rate Limit") > -1) {
          console.log("RATE [" + item.tag + "] retry 10s...");
          setTimeout(function() { run(i); }, 10000);
          return;
        }
        var j = JSON.parse(d);
        var results = j.results || [];
        if (results.length === 0) {
          console.log("[" + item.tag + "] SEM RESULTADO: " + item.q);
        } else {
          console.log("=== [" + item.tag + "] " + item.q + " ===");
          results.slice(0, 5).forEach(function(r, k) {
            var desc = (r.description || r.alt_description || "sem desc").substring(0, 110);
            console.log("  " + k + ": id=" + r.id + " | " + desc);
          });
        }
      } catch(e) {
        console.log("ERR [" + item.tag + "]: " + d.substring(0, 80));
      }
      setTimeout(function() { run(i + 1); }, 1800);
    });
  }).on("error", function(e) {
    console.log("NET [" + item.tag + "]: " + e.message);
    setTimeout(function() { run(i + 1); }, 1800);
  });
}

run(0);
