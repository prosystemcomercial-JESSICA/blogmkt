const https = require("https");
const KEY = "mR5SBZ0whk1mThi9GXtJDWRawkeXmzaguchxJKg9z3A";

var candidatos = [
  // A04 — balcão/caixa farmácia
  { id: "jqBOb3IThyA", tag: "A04/A05" },
  { id: "dUeA6UTDfPo", tag: "A05" },
  { id: "xxTMKulfOl4", tag: "A05" },
  { id: "O13g6-Gtb5o", tag: "A05" },
  { id: "sc3sxjLyRmk", tag: "A04/A05" },
  { id: "ETqK4jBdXR8", tag: "A04" },
  { id: "bMXwCe0QmFY", tag: "A04/A05" },
  // A06 — análise papel / gráfico
  { id: "_-zXC_X67dU", tag: "A06" },
  { id: "a7bBJZmdqK4", tag: "A06" },
  { id: "vp1CyPdggnI", tag: "A06" },
  { id: "nGsVMkRatgM", tag: "A06" }
];

function run(i) {
  if (i >= candidatos.length) { console.log("\nConfirmacao completa."); return; }
  var c = candidatos[i];
  var url = "https://api.unsplash.com/photos/" + c.id + "?client_id=" + KEY;
  https.get(url, { headers: { "Accept-Version": "v1" } }, function(res) {
    var d = "";
    res.on("data", function(ch) { d += ch; });
    res.on("end", function() {
      try {
        if (d.indexOf("Rate Limit") > -1) {
          console.log("RATE [" + c.tag + "/" + c.id + "] retry 8s");
          setTimeout(function() { run(i); }, 8000);
          return;
        }
        var j = JSON.parse(d);
        if (j.errors || j.error) {
          console.log("ERR [" + c.tag + "/" + c.id + "]: " + (j.errors || j.error));
        } else {
          var tags = (j.tags || []).slice(0, 8).map(function(t) { return t.title; }).join(", ");
          console.log("[" + c.tag + "] id=" + c.id);
          console.log("  desc: " + (j.description || j.alt_description || "sem desc").substring(0, 120));
          console.log("  tags: " + tags);
          console.log("  url:  " + j.urls.regular.substring(0, 90));
        }
      } catch(e) {
        console.log("PARSE [" + c.id + "]: " + d.substring(0, 80));
      }
      setTimeout(function() { run(i + 1); }, 1000);
    });
  }).on("error", function(e) {
    console.log("NET [" + c.id + "]: " + e.message);
    setTimeout(function() { run(i + 1); }, 1000);
  });
}

run(0);
