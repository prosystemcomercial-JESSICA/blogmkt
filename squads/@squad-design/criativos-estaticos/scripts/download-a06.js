const https = require("https");
const fs = require("fs");

var fotos = [
  {
    // z8DcWATjs1w: woman giving presentation to group — office team brainstorm
    url: "https://images.unsplash.com/photo-1681949222860-9cb3b0329878?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    out: "_assets/br-a06-apresentacao-grupo.jpg",
    arte: "A06-a mulher apresentacao grupo"
  },
  {
    // LMgnn-OYswg: Woman sitting at desk pencil poised — italy/portrait
    url: "https://images.unsplash.com/photo-1612478388970-1f04b1c3c81d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    out: "_assets/br-a06-mulher-escrivaninha.jpg",
    arte: "A06-b mulher escrivaninha caneta"
  }
];

var done = 0;
function downloadOne(i) {
  if (i >= fotos.length) return;
  var foto = fotos[i];
  var file = fs.createWriteStream(foto.out);
  function get(u) {
    https.get(u, function(r) {
      if (r.statusCode === 301 || r.statusCode === 302) { get(r.headers.location); return; }
      if (r.statusCode !== 200) {
        console.log("HTTP " + r.statusCode + " | " + foto.arte);
        file.close(); setTimeout(function() { downloadOne(i + 1); }, 1200); return;
      }
      r.pipe(file);
      file.on("finish", function() {
        done++;
        var stat = fs.statSync(foto.out);
        console.log("OK [" + done + "/" + fotos.length + "] " + foto.arte + " | " + Math.round(stat.size / 1024) + "KB");
        setTimeout(function() { downloadOne(i + 1); }, 1200);
      });
    }).on("error", function(e) {
      console.log("ERR: " + e.message);
      setTimeout(function() { downloadOne(i + 1); }, 1200);
    });
  }
  get(foto.url);
}
downloadOne(0);
