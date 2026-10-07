const https = require("https");
const KEY = "mR5SBZ0whk1mThi9GXtJDWRawkeXmzaguchxJKg9z3A";

// Foco: farmacêutico ATUANDO — ação específica por tema
// Fenotipo: moreno/latino/brasileiro, sem tela de dispositivo móvel
var buscas = [
  // A01 SNGPC — farmacêutico verificando produto, embalagem, prateleira (ação de compliance/conferência)
  { q: "pharmacist checking medicine bottles shelf verification latin", tag: "A01" },
  { q: "pharmacist hispanic woman organizing pharmacy shelf medicines", tag: "A01" },
  { q: "pharmacy worker latin checking stock counting medicines", tag: "A01" },

  // A04 Precificação — farmacêutico/gestor analisando dados, tela de computador, relatório impresso
  { q: "pharmacist latin analyzing computer screen data pricing", tag: "A04" },
  { q: "pharmacy manager dark hair looking at computer monitor data", tag: "A04" },
  { q: "latin woman pharmacist working computer pharmacy desk", tag: "A04" },
  { q: "drugstore manager hispanic analyzing financial data screen", tag: "A04" },

  // A05 PBM — farmacêutico atendendo cliente no balcão, entregando medicamento, consulta
  { q: "pharmacist latin handing medicine bag patient counter service", tag: "A05" },
  { q: "hispanic pharmacist helping customer at pharmacy counter prescription", tag: "A05" },
  { q: "pharmacist woman dark hair serving client counter drugstore", tag: "A05" },
  { q: "latin pharmacist consultation patient counter smiling", tag: "A05" }
];

function run(i) {
  if (i >= buscas.length) { console.log("\nBusca completa."); return; }
  var item = buscas[i];
  var url = "https://api.unsplash.com/search/photos?query=" + encodeURIComponent(item.q) +
    "&per_page=6&orientation=portrait&client_id=" + KEY;
  https.get(url, { headers: { "Accept-Version": "v1" } }, function(res) {
    var d = "";
    res.on("data", function(c) { d += c; });
    res.on("end", function() {
      try {
        if (d.indexOf("Rate Limit") > -1) {
          console.log("RATE [" + item.tag + "] retry 10s...");
          setTimeout(function() { run(i); }, 10000); return;
        }
        var j = JSON.parse(d);
        var results = j.results || [];
        if (!results.length) {
          console.log("[" + item.tag + "] SEM RESULTADO: " + item.q);
        } else {
          console.log("=== [" + item.tag + "] " + item.q + " ===");
          results.slice(0, 5).forEach(function(r, k) {
            console.log("  " + k + ": id=" + r.id + " | " + (r.description || r.alt_description || "sem desc").substring(0, 110));
          });
        }
      } catch(e) { console.log("ERR [" + item.tag + "]: " + d.substring(0, 60)); }
      setTimeout(function() { run(i + 1); }, 1800);
    });
  }).on("error", function(e) {
    console.log("NET [" + item.tag + "]: " + e.message);
    setTimeout(function() { run(i + 1); }, 1800);
  });
}
run(0);
