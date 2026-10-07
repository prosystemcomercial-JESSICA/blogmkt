const https = require("https");
const KEY = "mR5SBZ0whk1mThi9GXtJDWRawkeXmzaguchxJKg9z3A";

// A06 KPIs — pessoa morena/brasileira com gráficos/indicadores em papel
var buscas = [
  { q: "business woman brown hair pointing graphs whiteboard charts", tag: "A06" },
  { q: "latin woman manager office team meeting charts whiteboard", tag: "A06" },
  { q: "woman dark hair business meeting pointing presentation", tag: "A06" },
  { q: "man woman dark hair office team analyzing charts paper desk", tag: "A06" },
  { q: "business team meeting dark hair morena charts discussion", tag: "A06" },
  { q: "latin woman professional office holding documents reports", tag: "A06" },
  { q: "pharmacist manager dark hair office reviewing results papers", tag: "A06" }
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
          console.log("RATE retry 10s...");
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
            console.log("  " + k + ": id=" + r.id + " | " + (r.description || r.alt_description || "sem desc").substring(0, 110));
          });
        }
      } catch(e) {
        console.log("ERR: " + d.substring(0, 80));
      }
      setTimeout(function() { run(i + 1); }, 1800);
    });
  }).on("error", function(e) {
    console.log("NET: " + e.message);
    setTimeout(function() { run(i + 1); }, 1800);
  });
}
run(0);
