const https = require("https");
const KEY = "mR5SBZ0whk1mThi9GXtJDWRawkeXmzaguchxJKg9z3A";

// Confirmar sequencialmente com pausa de 700ms entre cada request
var candidatos = [
  { id: "nrRTmzmTZFs", arte: "A1" },
  { id: "zIE36UQrVkA", arte: "A1/A3" },
  { id: "RtakOBTTdvY", arte: "A1" },
  { id: "kooSjlL8LnQ", arte: "A3" },
  { id: "fzIHEPZryEc", arte: "A3" },
  { id: "R2F33Ym-13I", arte: "A3" },
  { id: "eAqHdLhCqQA", arte: "A2" },
  { id: "lnAjt6gt_rs", arte: "A2" },
  { id: "asw0N1O20AM", arte: "A2/A6" },
  { id: "8Jlz0eFuUG4", arte: "A4" },
  { id: "rfViXskEGIo", arte: "A4" },
  { id: "IFPuwHGkDTw", arte: "A6" },
  { id: "DmHafT1WyS0", arte: "A6" },
  { id: "FQm9dY7xsyA", arte: "A6" }
];

function confirmOne(i) {
  if (i >= candidatos.length) {
    console.log("\nConfirmacao completa.");
    return;
  }
  var c = candidatos[i];
  var url = "https://api.unsplash.com/photos/" + c.id + "?client_id=" + KEY;
  https.get(url, {headers:{"Accept-Version":"v1"}}, function(res) {
    var d = "";
    res.on("data", function(chunk){ d+=chunk; });
    res.on("end", function(){
      try {
        var j = JSON.parse(d);
        if (j.errors || j.error) {
          console.log("ERRO " + c.arte + " | " + c.id + ": " + (j.errors||[j.error]).join(", "));
        } else {
          console.log("=== " + c.arte + " | id=" + c.id + " ===");
          console.log("Desc: " + (j.description||j.alt_description||"sem desc").substring(0,120));
          console.log("Tags: " + (j.tags||[]).slice(0,10).map(function(t){return t.title;}).join(", "));
          console.log("URL: " + j.urls.regular.substring(0,80));
        }
      } catch(e) {
        console.log("PARSE ERR " + c.id + ": " + d.substring(0,80));
      }
      setTimeout(function(){ confirmOne(i+1); }, 800);
    });
  }).on("error", function(e){
    console.log("NET ERR " + c.id + ": " + e.message);
    setTimeout(function(){ confirmOne(i+1); }, 800);
  });
}

confirmOne(0);
