const https = require("https");
const KEY = "mR5SBZ0whk1mThi9GXtJDWRawkeXmzaguchxJKg9z3A";

// Protocolo v3: farmácia brasileira, pessoas latinas, SEM tablets/smartphones/telas
// Conceitos divididos por arte — 4-5 queries por arte com ângulos diferentes
var searches = [

  // ── ARTE 1 — SNGPC: farmacêutica latina jaleco conferindo na farmácia ──
  "pharmacist woman white coat writing clipboard pharmacy",
  "latin woman pharmacist dispensing medication counter",
  "female pharmacist white coat professional drugstore",
  "brazilian pharmacist woman working drugstore interior",
  "pharmacist woman checking prescription paper counter",

  // ── ARTE 2 — PDV: fila pessoas no caixa farmácia/varejo latino ──
  "people queue waiting cashier pharmacy store latin",
  "customers line drugstore counter waiting service",
  "latin people waiting retail store checkout line",
  "people standing queue pharmacy brazil interior",
  "customers waiting at pharmacy counter service",

  // ── ARTE 3 — Estoque: funcionária prateleiras medicamentos farmácia ──
  "woman pharmacist checking medicine shelf drugstore",
  "pharmacist woman organizing bottles shelf pharmacy",
  "female pharmacy worker medicine shelves interior",
  "drugstore interior shelves medicine organized woman",
  "pharmacist arranging medication shelf white coat",

  // ── ARTE 4 — Precificação: gestor ambiente profissional farmácia/negócio ──
  "latin business woman small store owner professional",
  "woman manager small business store working confident",
  "female entrepreneur small business store front",
  "business owner woman confident store interior",
  "small business manager woman latin professional",

  // ── ARTE 6 — KPIs: dono farmácia gestor ambiente real negócio ──
  "pharmacy owner confident professional store",
  "drugstore manager professional interior",
  "latin business owner man woman pharmacy store confident",
  "small business owner professional standing store",
  "pharmacist manager professional portrait drugstore"
];

searches.forEach(function(q, i) {
  var url = "https://api.unsplash.com/search/photos?query=" + encodeURIComponent(q) + "&per_page=6&orientation=portrait&client_id=" + KEY;
  https.get(url, {headers:{"Accept-Version":"v1"}}, function(res) {
    var d = "";
    res.on("data", function(c){ d+=c; });
    res.on("end", function(){
      try {
        var j = JSON.parse(d);
        console.log("=== Q" + (i+1) + " [" + (i<5?"A1":i<10?"A2":i<15?"A3":i<20?"A4":"A6") + "]: " + q + " ===");
        (j.results||[]).slice(0,5).forEach(function(r,k){
          console.log(" " + k + ": id=" + r.id + " | " + (r.description||r.alt_description||"sem desc").substring(0,100));
        });
      } catch(e) { console.log("ERRO Q"+(i+1)+": "+e.message); }
    });
  });
});
