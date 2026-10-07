const https = require("https");
const KEY = "mR5SBZ0whk1mThi9GXtJDWRawkeXmzaguchxJKg9z3A";

var candidatos = [
  // Arte 1 - SNGPC: farmacêutica jaleco conferindo
  { id: "nrRTmzmTZFs", arte: "A1", nota: "woman lab coat holding paper" },
  { id: "zIE36UQrVkA", arte: "A1/A3", nota: "woman white lab coat shelf bottles" },
  { id: "RtakOBTTdvY", arte: "A1", nota: "woman white coat posing" },
  { id: "L5SN-LBJyDE", arte: "A1", nota: "pharmacists protest rights" },

  // Arte 2 - PDV: fila pessoas caixa
  { id: "eAqHdLhCqQA", arte: "A2", nota: "man blue shirt beside man gray shirt" },
  { id: "lnAjt6gt_rs", arte: "A2", nota: "people escalator brightly lit store" },
  { id: "XqLtIxLP-eA", arte: "A2", nota: "group people sitting food stand" },

  // Arte 3 - Estoque: prateleiras medicamentos farmácia
  { id: "kooSjlL8LnQ", arte: "A3", nota: "male pharmacist examining drug pharmacy" },
  { id: "fzIHEPZryEc", arte: "A3", nota: "woman standing stacks white boxes" },
  { id: "R2F33Ym-13I", arte: "A3", nota: "shopkeeper apothecary shelves glass jars" },

  // Arte 4 - Precificação: gestora negócio
  { id: "8Jlz0eFuUG4", arte: "A4", nota: "woman behind desk design samples" },
  { id: "rfViXskEGIo", arte: "A4", nota: "friendly woman holding pack mixed nuts" },
  { id: "DmHafT1WyS0", arte: "A6", nota: "man standing store arms crossed" },

  // Arte 6 - KPIs: gestor farmácia
  { id: "IFPuwHGkDTw", arte: "A6", nota: "man in convenience store" },
  { id: "asw0N1O20AM", arte: "A2/A6", nota: "man black shirt leaning display counter" },
  { id: "FQm9dY7xsyA", arte: "A6", nota: "man standing front of store" }
];

candidatos.forEach(function(c) {
  var url = "https://api.unsplash.com/photos/" + c.id + "?client_id=" + KEY;
  https.get(url, {headers:{"Accept-Version":"v1"}}, function(res) {
    var d = "";
    res.on("data", function(chunk){ d+=chunk; });
    res.on("end", function(){
      try {
        var j = JSON.parse(d);
        console.log("=== " + c.arte + " | id=" + c.id + " | " + c.nota + " ===");
        console.log("Desc: " + (j.description||j.alt_description||"sem desc"));
        console.log("Tags: " + (j.tags||[]).slice(0,10).map(function(t){return t.title;}).join(", "));
        console.log("URL: " + j.urls.regular);
        console.log("");
      } catch(e) { console.log("ERRO " + c.id + ": " + d.substring(0,60)); }
    });
  });
});
