const https = require("https");
const KEY = "mR5SBZ0whk1mThi9GXtJDWRawkeXmzaguchxJKg9z3A";

var candidatos = [
  // A04 — balcão/loja mulher morena
  { id: "DMAGxc3icGA", tag: "A04" }, // young woman smiles in grocery store aisle
  { id: "hxaBzn6L5UE", tag: "A04" }, // woman standing in front of store shelf
  { id: "8NHUVw-pdic", tag: "A04" }, // woman sitting at table smiling
  // A01/A05 — farmacêutica jaleco, fenotipo latino
  { id: "nrRTmzmTZFs", tag: "A01/A05" }, // woman in lab coat holding paper
  { id: "nTJun4cBCnc", tag: "A01/A05" }, // woman in white lab coat posing
  { id: "Zihx4M9dWSU", tag: "A01/A05" }, // woman in lab coat holding paper
  { id: "gY6Buameaxk", tag: "A05" }, // person in white coat in store
  // A05 — atendimento balcão
  { id: "JABi6GpktFM", tag: "A05" }, // man and woman in the lab
  { id: "Ahsoq1mL4mY", tag: "A05" }, // man standing in front of farmers market
  // A06 — análise documentos mulher morena
  { id: "T9omWFPviok", tag: "A06" }, // woman in black dress holding white paper
  { id: "aot1eBOfMGo", tag: "A06" }, // woman in white shirt writing on white paper
  { id: "vEicCH5FoaA", tag: "A06" }  // woman writing in notebook outdoor cafe
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
          console.log("RATE [" + c.id + "] retry...");
          setTimeout(function() { run(i); }, 8000);
          return;
        }
        var j = JSON.parse(d);
        if (j.errors || j.error) {
          console.log("ERR [" + c.tag + "/" + c.id + "]");
        } else {
          var tags = (j.tags || []).slice(0, 8).map(function(t) { return t.title; }).join(", ");
          console.log("[" + c.tag + "] id=" + c.id);
          console.log("  desc: " + (j.description || j.alt_description || "sem desc").substring(0, 120));
          console.log("  tags: " + tags);
          console.log("  url:  " + j.urls.regular.substring(0, 95));
        }
      } catch(e) {
        console.log("PARSE [" + c.id + "]: " + d.substring(0, 80));
      }
      setTimeout(function() { run(i + 1); }, 900);
    });
  }).on("error", function(e) {
    console.log("NET [" + c.id + "]: " + e.message);
    setTimeout(function() { run(i + 1); }, 900);
  });
}

run(0);
