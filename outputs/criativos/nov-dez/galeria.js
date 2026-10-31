// Monta a página de revisão das peças de 04/11/2026 a 22/01/2027, com as imagens embutidas e a legenda de cada post.
// Uso: node outputs/criativos/nov-dez/galeria.js <arquivo de saída .html>
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { P, PRONTAS } = require('./pecas-dados.js');

const AQUI = __dirname;
const RAIZ = path.join(AQUI, '..', '..', '..');
const saida = process.argv[2];
if (!saida) throw new Error('informe o arquivo de saída');

const ordem = (d) => (d.data.slice(7, 9) === '01' ? '13' : d.data.slice(7, 9)) + d.data.slice(4, 6);
const telas = (p) => [...new Set([p.tela, p.capa && p.capa.tela, p.sol && p.sol.tela, p.fim && p.fim.tela, ...(p.itens || []).map((i) => i.tela)].filter(Boolean))]
  .filter((t) => !fs.existsSync(path.join(AQUI, 'mockups', t + '.png')));
const legSuporte = fs.readFileSync(path.join(RAIZ, 'outputs/criativos/suporte/legendas.md'), 'utf8').split('## carrossel-farmacia-suporte-v3')[1].split('## Texto alternativo')[0].trim();

const posts = [...P.filter((p) => !p.pagina), ...PRONTAS].sort((a, b) => ordem(a).localeCompare(ordem(b))).map((p) => {
  let arqs;
  if (p.arq) arqs = p.arq.includes('<página>') ? [1, 2, 3, 4, 5, 6].map((i) => p.arq.replace('<página>', i)) : [p.arq];
  else arqs = p.tipo === 'v2' || p.tipo === 'v3' ? [1, 2, 3, 4, 5, 6].map((i) => `outputs/criativos/nov-dez/pecas/${p.id}-${i}.png`) : [`outputs/criativos/nov-dez/pecas/${p.id}.png`];
  return { data: p.data, seg: p.seg, formato: p.formato, nome: p.arq ? p.arq.split('/').pop().replace('-<página>.png', '').replace('.png', '') : p.id, nova: !!p.nova, faltam: p.arq ? [] : telas(p), nota: p.nota || '', cap: p.cap ? `${p.cap}\n\n${p.tags}` : legSuporte, conferir: p.conferir || [], arqs };
});

// Miniaturas em JPEG, feitas com Pillow, para a página caber no limite de tamanho.
const lista = posts.flatMap((p) => p.arqs.map((a) => path.join(RAIZ, a)));
const py = 'import sys,io,json,base64\nfrom PIL import Image\nout=[]\nfor a in json.load(sys.stdin):\n    im=Image.open(a).convert("RGB").resize((480,600),Image.LANCZOS)\n    b=io.BytesIO(); im.save(b,"JPEG",quality=74,optimize=True)\n    out.append(base64.b64encode(b.getvalue()).decode())\nprint(json.dumps(out))';
const b64 = JSON.parse(execFileSync('python', ['-I', '-c', py], { input: JSON.stringify(lista), maxBuffer: 1 << 28 }).toString());
let k = 0;
for (const p of posts) p.imgs = p.arqs.map(() => 'data:image/jpeg;base64,' + b64[k++]);

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const situacao = (p) => {
  if (p.faltam.length) return `<span class="sit falta">Aguarda mockup</span>`;
  if (p.conferir.length) return `<span class="sit confere">Sem mockup pendente, com itens a conferir</span>`;
  return `<span class="sit livre">Pronta para sua revisão</span>`;
};
const cartao = (p, i) => `<article class="post" data-seg="${p.seg}" data-sit="${p.faltam.length ? 'falta' : 'sem'}">
  <header><div class="dat">${p.data}</div><div class="meta"><b>${esc(p.nome)}</b><span>${p.seg} · ${esc(p.formato)}${p.nova ? ' · texto novo' : ''}</span></div>${situacao(p)}</header>
  <div class="tira">${p.imgs.map((s, j) => `<img src="${s}" alt="${esc(p.nome)}, página ${j + 1}" loading="lazy" width="480" height="600">`).join('')}</div>
  ${p.nota ? `<p class="nota">${esc(p.nota)}</p>` : ''}
  ${p.faltam.length ? `<p class="mk"><b>Mockups:</b> ${p.faltam.map((t) => `<code>${t}</code>`).join(' ')}</p>` : ''}
  <details><summary>Legenda${p.conferir.length ? ` e ${p.conferir.length} ${p.conferir.length > 1 ? 'itens' : 'item'} a conferir` : ''}</summary>
    <pre id="leg${i}">${esc(p.cap)}</pre><button type="button" data-copiar="leg${i}">Copiar legenda</button>
    ${p.conferir.length ? `<ul>${p.conferir.map((c) => `<li>${esc(c)}</li>`).join('')}</ul>` : ''}
  </details></article>`;
const nFalta = posts.filter((p) => p.faltam.length).length;

const html = `<title>Criativos Nov a Jan</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700;800&display=swap">
<style>
/* Layout: uma coluna de posts em ordem de data, cada um com a tira de páginas como aparece no feed. */
:root{--bg:#f4f7fb;--sup:#fff;--fg:#081330;--apoio:#4c5a72;--linha:#d7dfea;--azul:#2E6DB4;--lar:#C2410C;--falta-f:#fde8d8;--falta-t:#8a3208;--ok-f:#e2eefb;--ok-t:#1e4f88}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#0b1324;--sup:#131e35;--fg:#eef3fb;--apoio:#a9b6cc;--linha:#2a3852;--azul:#7db3ee;--lar:#f39a63;--falta-f:#47230f;--falta-t:#ffc9a6;--ok-f:#17345a;--ok-t:#bcd9fa;color-scheme:dark}}
:root[data-theme="dark"]{--bg:#0b1324;--sup:#131e35;--fg:#eef3fb;--apoio:#a9b6cc;--linha:#2a3852;--azul:#7db3ee;--lar:#f39a63;--falta-f:#47230f;--falta-t:#ffc9a6;--ok-f:#17345a;--ok-t:#bcd9fa;color-scheme:dark}
body{background:var(--bg);color:var(--fg);font:15px/1.5 Montserrat,Arial,sans-serif}
.fl{max-width:1120px;margin:0 auto;padding-block:32px 56px;padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px));display:flex;flex-direction:column;gap:18px}
h1{margin:0;font-size:clamp(28px,5vw,44px);font-weight:300;letter-spacing:-.02em;line-height:1.1;text-wrap:balance}
h1 b{font-weight:800}
.lead{margin:0;max-width:68ch;color:var(--apoio)}
.filtros{display:flex;flex-wrap:wrap;gap:8px}
button{font:inherit;font-weight:700;color:var(--fg);background:var(--sup);border:1px solid var(--linha);border-radius:99px;padding:7px 15px;cursor:pointer}
button[aria-pressed="true"]{background:var(--azul);border-color:var(--azul);color:var(--bg)}
button:focus-visible,summary:focus-visible{outline:2px solid var(--azul);outline-offset:2px}
.post{background:var(--sup);border:1px solid var(--linha);border-radius:14px;padding:16px;display:flex;flex-direction:column;gap:12px;min-width:0}
.post[data-seg="Padaria"] .dat{color:var(--lar)}
.post header{display:flex;flex-wrap:wrap;align-items:center;gap:8px 14px}
.dat{font-weight:800;font-size:18px;color:var(--azul);font-variant-numeric:tabular-nums;white-space:nowrap}
.meta{display:flex;flex-direction:column;min-width:0;flex:1 1 240px}
.meta b{overflow-wrap:anywhere;font-size:14px}.meta span{color:var(--apoio);font-size:13px}
.sit{font-size:12px;font-weight:700;padding:4px 11px;border-radius:99px}
.falta{background:var(--falta-f);color:var(--falta-t)}.confere,.livre{background:var(--ok-f);color:var(--ok-t)}
.tira{display:flex;gap:8px;overflow-x:auto;padding-bottom:6px}
.tira img{flex:none;width:clamp(180px,24vw,236px);height:auto;aspect-ratio:4/5;border-radius:6px;display:block}
.nota,.mk{margin:0;font-size:13.5px}.mk code{font-size:12.5px;background:var(--bg);padding:1px 6px;border-radius:5px;overflow-wrap:anywhere}
details{font-size:14px}summary{cursor:pointer;font-weight:700}
pre{white-space:pre-wrap;overflow-wrap:anywhere;font:inherit;margin:10px 0;max-width:72ch}
details ul{margin:12px 0 0;padding-left:18px;color:var(--apoio);max-width:72ch}
</style>
<main class="fl">
<h1>Criativos de <b>04/11 a 22/01</b></h1>
<p class="lead">São ${posts.length} posts na ordem do planejamento, com pausa de 23/12 a 02/01. ${nFalta} mostram a tela em um cartão provisório e aguardam o seu mockup. Nada foi publicado.</p>
<div class="filtros" id="filtros">
<button type="button" data-f="" aria-pressed="true">Todos</button><button type="button" data-f="Farmácia" aria-pressed="false">Farmácia</button><button type="button" data-f="Padaria" aria-pressed="false">Padaria</button><button type="button" data-f="falta" aria-pressed="false">Aguardam mockup</button>
</div>
${posts.map(cartao).join('\n')}
</main>
<script>
document.addEventListener('click', (ev) => {
  const b = ev.target.closest('button'); if (!b) return;
  if (b.dataset.copiar) {
    const pre = document.getElementById(b.dataset.copiar);
    const ok = () => { b.textContent = 'Copiada'; setTimeout(() => { b.textContent = 'Copiar legenda'; }, 1500); };
    const sel = () => { const r = document.createRange(); r.selectNodeContents(pre); const s = getSelection(); s.removeAllRanges(); s.addRange(r); b.textContent = 'Selecionada: copie com Ctrl+C'; };
    if (navigator.clipboard) navigator.clipboard.writeText(pre.textContent).then(ok, sel); else sel();
  }
  if (b.dataset.f !== undefined) {
    document.querySelectorAll('#filtros button').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    const f = b.dataset.f;
    document.querySelectorAll('.post').forEach((p) => { p.hidden = !(!f || p.dataset.seg === f || p.dataset.sit === f); });
  }
});
</script>
`;
fs.writeFileSync(saida, html);
console.log(path.basename(saida), (fs.statSync(saida).size / 1048576).toFixed(1), 'MB;', posts.length, 'posts;', nFalta, 'aguardam mockup');
