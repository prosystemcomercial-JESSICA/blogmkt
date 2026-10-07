const https = require("https");
const KEY = "mR5SBZ0whk1mThi9GXtJDWRawkeXmzaguchxJKg9z3A";

// Buscas para 3 imagens faltantes — sem tela, sem tablet
var buscas = [
  // A04 — balcão caixa farmácia/varejo brasileiro — mulher atendendo
  { q: "pharmacy cashier woman counter serving customer latin", tag: "A04-a" },
  { q: "drugstore counter latin woman serving customer smiling", tag: "A04-b" },
  { q: "retail cashier woman smiling latin counter register", tag: "A04-c" },

  // A05 — farmacêutico atendendo cliente no balcão — sem tela
  { q: "pharmacist counseling patient counter drugstore consultation", tag: "A05-a" },
  { q: "pharmacy counter latin man woman customer service consultation", tag: "A05-b" },
  { q: "pharmacist giving medicine bag patient counter", tag: "A05-c" },

  // A06 — gráfico papel / relatório / planilha impresso — pessoa analisando
  { q: "business person analyzing paper charts documents desk", tag: "A06-a" },
  { q: "manager reviewing printed reports financial charts paper", tag: "A06-b" },
  { q: "person pointing graphs paper charts business analysis", tag: "A06-c" }
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
          console.log("RATE LIMIT [" + item.tag + "] — retrying in 8s");
          setTimeout(function() { run(i); }, 8000);
          return;
        }
        var j = JSON.parse(d);
        console.log("=== [" + item.tag + "] " + item.q + " ===");
        (j.results || []).slice(0, 5).forEach(function(r, k) {
          console.log("  " + k + ": id=" + r.id + " | " + (r.description || r.alt_description || "sem desc").substring(0, 110));
        });
      } catch(e) {
        console.log("ERR [" + item.tag + "]: " + d.substring(0, 80));
      }
      setTimeout(function() { run(i + 1); }, 1500);
    });
  }).on("error", function(e) {
    console.log("NET [" + item.tag + "]: " + e.message);
    setTimeout(function() { run(i + 1); }, 1500);
  });
}

run(0);
