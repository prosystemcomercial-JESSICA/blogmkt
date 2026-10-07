const https = require("https");
const KEY = "mR5SBZ0whk1mThi9GXtJDWRawkeXmzaguchxJKg9z3A";

var candidatos = [
  { id: "z8DcWATjs1w", tag: "A06-apresentacao" },
  { id: "LMgnn-OYswg", tag: "A06-escrivaninha" },
  { id: "fgdmH3iqvMw", tag: "A06-engenheira" },
  { id: "gM1rH1cnoT4", tag: "A06-mulher-caneta" },
  { id: "ftd-Qk0om20", tag: "A06-engenheira-b" },
  { id: "-68PdYVLh3U", tag: "A06-engenheira-c" },
  { id: "CXj2uFlySyI", tag: "A06-mulher-arquivos" }
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
          setTimeout(function() { run(i); }, 8000); return;
        }
        var j = JSON.parse(d);
        if (!j.urls) { console.log("ERR [" + c.id + "]"); }
        else {
          var tags = (j.tags || []).slice(0, 8).map(function(t) { return t.title; }).join(", ");
          console.log("[" + c.tag + "] id=" + c.id);
          console.log("  desc: " + (j.description || j.alt_description || "sem desc").substring(0, 120));
          console.log("  tags: " + tags);
          console.log("  url:  " + j.urls.regular.substring(0, 95));
        }
      } catch(e) { console.log("PARSE [" + c.id + "]"); }
      setTimeout(function() { run(i + 1); }, 900);
    });
  }).on("error", function(e) {
    setTimeout(function() { run(i + 1); }, 900);
  });
}
run(0);
