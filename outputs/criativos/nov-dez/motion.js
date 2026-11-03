// Versão em vídeo das frases de impacto: a mesma página de gerar.js, animada, em MP4 de 1080×1350 a 30 quadros por segundo.
// Peças com `motion: true` em pecas-dados.js. O título é dividido em frases pelo <br>:
// a negrita das primeiras frases embaça e apaga (a ideia que não se sustenta), a da última frase entra carimbada e ganha um grifo.
// No fim tudo volta nítido, e o último quadro é igual à arte parada (que serve de capa).
// Uso: node outputs/criativos/nov-dez/motion.js [id da peça]
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');
const puppeteer = require('puppeteer');
const { RENDER, documento, url } = require('./gerar.js');
const { P } = require('./pecas-dados.js');

const FPS = 30;
const DURACAO = 9000;

// Roda dentro da página: cria as animações pausadas e expõe ir(ms) para posicionar o relógio.
function montar() {
  const ease = 'cubic-bezier(.2,.8,.2,1)';
  const h = document.querySelector('.frs h4');
  // Cada palavra vira um bloco animável; a negrita inteira conta como uma palavra.
  const frases = [[]];
  for (const n of [...h.childNodes]) {
    if (n.nodeName === 'BR') { frases.push([]); continue; }
    if (n.nodeName === 'B') { n.style.display = 'inline-block'; n.classList.add('w'); frases.at(-1).push(n); continue; }
    const pedacos = n.textContent.split(/(\s+)/);
    const f = document.createDocumentFragment();
    for (const t of pedacos) {
      if (!t) continue;
      if (/^\s+$/.test(t)) { f.append(t); continue; }
      const s = document.createElement('span'); s.className = 'w'; s.style.display = 'inline-block'; s.textContent = t;
      f.append(s); frases.at(-1).push(s);
    }
    n.replaceWith(f);
  }
  const anim = (el, kf, ini, dur, o = {}) => el.animate(kf, { delay: ini, duration: dur, easing: ease, fill: 'both', ...o });
  const depois = (el, kf, ini, dur) => anim(el, kf, ini, dur, { fill: 'forwards' });

  // Losangos entram pelos cantos e depois flutuam devagar.
  const W = 1080, H = 1350;
  [...document.querySelectorAll('i.g, i.gf')].forEach((l, k) => {
    const r = l.getBoundingClientRect();
    const dx = (r.left + r.width / 2 < W / 2 ? -1 : 1) * 140, dy = (r.top + r.height / 2 < H / 2 ? -1 : 1) * 140;
    anim(l, [{ opacity: 0, transform: `translate(${dx}px,${dy}px) rotate(45deg) scale(.6)` }, { opacity: 1, transform: 'translate(0,0) rotate(45deg) scale(1)' }], k * 90, 1000);
    anim(l, [{ translate: '0 0' }, { translate: `0 ${k % 2 ? 14 : -14}px` }], 1000, 2600, { iterations: Infinity, direction: 'alternate', easing: 'ease-in-out' });
  });
  const logo = document.querySelector('.lg');
  anim(logo, [{ opacity: 0, transform: 'translateX(-50%) translateY(-24px)' }, { opacity: 1, transform: 'translateX(-50%) translateY(0)' }], 200, 700);

  // Frases palavra por palavra.
  let t = 700;
  const ultima = frases.length - 1;
  const apagadas = [];
  frases.forEach((ws, i) => {
    ws.forEach((w, k) => {
      const ini = t + k * 115;
      if (i === ultima && w.nodeName === 'B') {
        anim(w, [{ opacity: 0, transform: 'scale(1.7)' }, { opacity: 1, transform: 'scale(.94)', offset: 0.7 }, { opacity: 1, transform: 'scale(1)' }], ini, 560);
        w.style.position = 'relative'; w.style.zIndex = 0;
        const g = document.createElement('span');
        g.style.cssText = 'position:absolute;left:-.08em;right:-.08em;bottom:.06em;height:.36em;background:rgba(248,136,24,.32);border-radius:.08em;z-index:-1;transform-origin:left center';
        w.append(g);
        anim(g, [{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], ini + 650, 550);
      } else {
        anim(w, [{ opacity: 0, transform: 'translateY(.35em)', filter: 'blur(10px)' }, { opacity: 1, transform: 'translateY(0)', filter: 'blur(0)' }], ini, 650);
      }
      if (i < ultima) apagadas.push(w);
    });
    const fim = t + (ws.length - 1) * 115 + 650;
    if (i < ultima) {
      // A negrita balança e embaça; depois a frase inteira recua para a próxima entrar.
      ws.filter((w) => w.nodeName === 'B').forEach((b) => {
        depois(b, [{ transform: 'rotate(0)' }, { transform: 'rotate(-3deg)' }, { transform: 'rotate(2.5deg)' }, { transform: 'rotate(-1.5deg)' }, { transform: 'rotate(0)' }], fim, 900);
        depois(b, [{ filter: 'blur(0)' }, { filter: 'blur(3px)' }], fim + 200, 800);
      });
      ws.forEach((w) => depois(w, [{ opacity: 1 }, { opacity: 0.35 }], fim + 1000, 400));
      t = fim + 1300;
    } else t = fim + 600;
  });
  // Tudo volta nítido e entra a chamada.
  apagadas.forEach((w) => { depois(w, [{ opacity: 0.35 }, { opacity: 1 }], t + 400, 500); if (w.nodeName === 'B') depois(w, [{ filter: 'blur(3px)' }, { filter: 'blur(0)' }], t + 400, 500); });
  anim(document.querySelector('.frs p'), [{ opacity: 0, transform: 'translateY(20px)' }, { opacity: 1, transform: 'translateY(0)' }], t + 800, 600);
  window.ir = (ms) => document.getAnimations().forEach((a) => { a.pause(); a.currentTime = ms; });
  window.ir(0);
  return t + 1400;
}

(async () => {
  const filtro = process.argv[2];
  // Peça aprovada (travada) não é gerada de novo, como em gerar.js.
  const lista = P.filter((p) => p.motion && !p.travada && (!filtro || p.id === filtro));
  if (!lista.length) throw new Error('nenhuma peça com motion: ' + (filtro || ''));
  const b = await puppeteer.launch({ headless: 'new', args: ['--allow-file-access-from-files'] });
  const p = await b.newPage();
  await p.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 1 });
  for (const c of lista) {
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'prosystem-motion-'));
    const html = path.join(tmp, 'pagina.html');
    fs.writeFileSync(html, documento(RENDER[c.tipo](c)[0]));
    await p.goto(url(html), { waitUntil: 'networkidle0', timeout: 90000 });
    await p.evaluate(() => document.fonts.ready);
    if (!(await p.evaluate(() => document.fonts.check('800 40px Montserrat')))) throw new Error('Montserrat não carregou; gere de novo');
    const fimAnim = await p.evaluate(montar);
    if (fimAnim > DURACAO - 1500) throw new Error(`animação termina em ${fimAnim} ms; aumente DURACAO`);
    const quadros = Math.round((DURACAO / 1000) * FPS);
    for (let q = 0; q < quadros; q++) {
      await p.evaluate((ms) => window.ir(ms), (q * 1000) / FPS);
      await p.screenshot({ path: path.join(tmp, `q${String(q).padStart(4, '0')}.png`), clip: { x: 0, y: 0, width: 1080, height: 1350 } });
    }
    const saida = path.join(__dirname, 'pecas', c.id + '.mp4');
    execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', String(FPS), '-i', path.join(tmp, 'q%04d.png'), '-c:v', 'libx264', '-preset', 'slow', '-crf', '16', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', saida]);
    fs.rmSync(tmp, { recursive: true, force: true });
    console.log(`${c.id}.mp4: ${quadros} quadros, animação até ${fimAnim} ms`);
  }
  await b.close();
})();
