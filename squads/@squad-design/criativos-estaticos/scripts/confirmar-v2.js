const https = require("https");
const KEY = "mR5SBZ0whk1mThi9GXtJDWRawkeXmzaguchxJKg9z3A";

// Candidatos para confirmação semântica
const candidatos = [
  // Arte 1 - SNGPC compliance: mulher usando computador contexto profissional
  { id: "HzR3W1JD0_k", arte: 1, desc: "woman sitting desk computer" },
  { id: "h0SVizhJyLw", arte: 1, desc: "woman desk computer screen" },
  { id: "jQvkte13Emc", arte: 1, desc: "woman sitting desk computer" },
  { id: "O13g6-Gtb5o", arte: 3, desc: "female pharmacist examining vial pharmacy" },
  { id: "xxTMKulfOl4", arte: 3, desc: "pharmacist" },
  { id: "dUeA6UTDfPo", arte: 3, desc: "pharmacist" },
  // Arte 2 PDV - pagamento/caixa com contexto moderno
  { id: "LYafbAC9eJI", arte: 2, desc: "customer payment beauty salon sumup pos" },
  { id: "bpHR9U5XiTE", arte: 2, desc: "salon owner transaction sumup smile" },
  // Arte 4 precificacao - mulher analisando dados tablet
  { id: "AUmY7IjqgAs", arte: 4, desc: "woman holding tablet chart" },
  { id: "bXgiCqLqZaA", arte: 4, desc: "staff tablet scan inventory" },
  // Arte 6 KPIs gestor
  { id: "wS73LE0GnKs", arte: 6, desc: "woman striped shirt working desk laptop" },
  { id: "jQvkte13Emc", arte: 6, desc: "woman desk computer" }
];

candidatos.forEach(function(c) {
  var url = "https://api.unsplash.com/photos/" + c.id + "?client_id=" + KEY;
  https.get(url, {headers:{"Accept-Version":"v1"}}, function(res) {
    var d = "";
    res.on("data", function(chunk){ d+=chunk; });
    res.on("end", function(){
      try {
        var j = JSON.parse(d);
        console.log("=== ARTE " + c.arte + " | id=" + c.id + " ===");
        console.log("Desc: " + (j.description || j.alt_description || "sem desc"));
        console.log("Tags: " + (j.tags||[]).slice(0,10).map(function(t){return t.title;}).join(", "));
        console.log("URL: " + j.urls.regular);
        console.log("");
      } catch(e) { console.log("ERRO " + c.id + ": " + e.message); }
    });
  });
});
