const https = require("https");
const fs = require("fs");

// Candidatos para A05: dupla farmacêuticos jaleco branco + prateleiras
// Semelhante à referência: mulher morena óculos + homem maduro, jaleco, analisando medicamento entre prateleiras
var fotos = [
  {
    // Wellcome Collection / pharmacists at shelf — dupla jaleco farmácia
    url: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    out: "_assets/a05-c1.jpg",
    desc: "C1 pharmacist checking medicine"
  },
  {
    // Dupla pharmacists with medicine bottle in pharmacy
    url: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    out: "_assets/a05-c2.jpg",
    desc: "C2 pharmacist colleagues pharmacy"
  },
  {
    // Two pharmacists in white coats looking at prescription
    url: "https://images.unsplash.com/photo-1576671414121-aa2d60f2a853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    out: "_assets/a05-c3.jpg",
    desc: "C3 pharmacists pharmacy shelves"
  },
  {
    // Pharmacist explaining medicine to colleague at pharmacy counter
    url: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    out: "_assets/a05-c4.jpg",
    desc: "C4 pharmacist consultation"
  },
  {
    // Latin pharmacist woman with medicine at counter
    url: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    out: "_assets/a05-c5.jpg",
    desc: "C5 pharmacist medicine counter"
  }
];

var i = 0;
function next() {
  if (i >= fotos.length) return;
  var f = fotos[i++];
  var file = fs.createWriteStream(f.out);
  function get(u) {
    https.get(u, function(r) {
      if (r.statusCode === 301 || r.statusCode === 302) { get(r.headers.location); return; }
      if (r.statusCode !== 200) {
        console.log("HTTP " + r.statusCode + " | " + f.desc);
        file.close(); setTimeout(next, 800); return;
      }
      r.pipe(file);
      file.on("finish", function() {
        var kb = Math.round(fs.statSync(f.out).size / 1024);
        console.log("OK " + f.out + " | " + kb + "KB | " + f.desc);
        setTimeout(next, 800);
      });
    }).on("error", function(e) {
      console.log("ERR " + f.desc + ": " + e.message);
      setTimeout(next, 800);
    });
  }
  get(f.url);
}
next();
