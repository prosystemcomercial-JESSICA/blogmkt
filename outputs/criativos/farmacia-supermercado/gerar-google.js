// Postagem do Perfil da Empresa no Google sobre farmácia dentro do supermercado (04/11/2026), no visual de ../google-nov-jan/gerar.js.
// É extra: as 39 de google-nov-jan já estão programadas. Data sugerida 11/11/2026, um dia sem postagem.
// Uso: node outputs/criativos/farmacia-supermercado/gerar-google.js
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const { P: JA } = require('../google-nov-jan/dados.js');
const { N: JA2 } = require('../google-nov-jan/dados-novos.js');
const LP_F = 'https://prosystemnet.com/sistema-para-farmacia/';
const ARTIGO = 'https://prosystemnet.com/blog/farmacia-dentro-do-supermercado-lei-15357/';
const N = [
  {
    data: '2026-11-11', dia: 'Qua 11/11', seg: 'Farmácia', id: 'farmacia-dentro-do-supermercado', tema: 'azul',
    foto: 'mercado-caixas', posicao: '50% 50%',
    palavra: 'farmácia dentro do supermercado',
    titulo: 'O supermercado agora <b>pode ter farmácia.</b>',
    faixa: 'Lei 15.357: espaço próprio e farmacêutico o tempo todo.', pilula: 'Sistema para farmácia',
    botao: 'Saiba mais', link: LP_F, linkDepois: ARTIGO,
    texto: `Farmácia dentro do supermercado já é permitida: a Lei 15.357, publicada em 23 de março de 2026, liberou a farmácia na área de vendas do mercado. As grandes redes já começaram a abrir, e o movimento deve crescer em 2027.

O que a lei exige:
1. Espaço delimitado, separado e exclusivo para a farmácia.
2. Farmacêutico durante todo o horário de funcionamento.
3. Nada de remédio em gôndola aberta. O controlado só é entregue depois de pago, ou vai lacrado até o caixa.

Para a farmácia do bairro, a vantagem é conhecer o cliente. No Prosystem, o uso contínuo calcula a próxima compra e avisa o balcão antes de o remédio acabar, e o cartão fidelidade dá um motivo para o cliente voltar.

Conheça o sistema para farmácia da ProSystem.`,
  },
];
const P = N;
const USADAS = new Set([...JA, ...JA2].map((c) => c.foto));
const AQUI = __dirname;
const RAIZ = path.join(AQUI, '..', '..', '..');
const SAIDA = path.join(AQUI, 'google');
const url = (p) => 'file:///' + p.split(path.sep).join('/').replace(/ /g, '%20');

const PASTAS = ['farmacia-supermercado/fotos', 'nov-dez/fotos', 'modelos/carrossel/fotos', 'suporte/fotos'].map((d) => path.join(RAIZ, 'outputs/criativos', d));
function img(n) {
  for (const d of PASTAS) { const f = path.join(d, n + '.jpg'); if (fs.existsSync(f)) return url(f); }
  throw new Error('foto não encontrada: ' + n);
}
const css = fs.readFileSync(path.join(RAIZ, 'docs/conteudo-prosystem/feed_modelo.html'), 'utf8')
  .split('/* Peças */')[1].split('</style>')[0]
  .replace(/(?<![\w#.$-])(-?\d+(?:\.\d+)?)U\b/g, 'calc($1*var(--u))');
const LOGO = url(path.join(RAIZ, 'docs/design/guia-de-estilos/assets/logo-light.png'));
const px = (n) => `calc(${n}*var(--u))`;
// A unidade continua sendo 1/1080 da largura: a peça tem 1080 × 810 unidades.
const AJUSTES = `
.post{aspect-ratio:4/3}
.tom{position:absolute;inset:0;z-index:2;background:linear-gradient(180deg,rgba(var(--sb),.8) 0%,rgba(var(--sb),.15) 24%,rgba(var(--mar),.3) 40%,rgba(var(--mar),.9) 62%,rgba(var(--mar),.97) 100%)}
.lg{top:${px(36)};width:${px(300)}}
.bloco{position:absolute;left:${px(150)};right:${px(150)};bottom:${px(58)};z-index:7;display:flex;flex-direction:column;align-items:center;gap:${px(20)};text-align:center}
.bloco h2{font-size:${px(58)};line-height:1.08}
.bloco .fx{font-size:${px(27)};padding:${px(16)} ${px(28)}}
.bloco .pl{font-size:${px(25)};padding:${px(13)} ${px(34)}}
`;

// desfoque: a foto inteira (número, em px) ou só uma região ([x%, y%, raio em px]), para esconder marca ou texto legível.
function peca(c) {
  const base = `inset:0;width:100%;height:100%;object-position:${c.posicao}`;
  const tudo = typeof c.desfoque === 'number' ? `;filter:blur(${c.desfoque}px);transform:scale(1.04)` : '';
  const regiao = Array.isArray(c.desfoque) ? `<img class="ft" src="${img(c.foto)}" alt="" style="${base};z-index:1;filter:blur(9px);-webkit-mask-image:radial-gradient(circle ${c.desfoque[2]}px at ${c.desfoque[0]}% ${c.desfoque[1]}%,#000 60%,transparent 100%)">` : '';
  return `<div class="p ${c.tema} sob">
<img class="ft" src="${img(c.foto)}" alt="" style="${base}${tudo}">${regiao}
<div class="tom"></div>
<i class="g" style="width:${px(260)};height:${px(260)};top:${px(-130)};left:${px(-110)};z-index:3"></i>
<i class="gf" style="width:${px(180)};height:${px(180)};top:${px(-80)};right:${px(-60)};z-index:3"></i>
<i class="g" style="width:${px(280)};height:${px(280)};bottom:${px(-170)};right:${px(-90)};z-index:3"></i>
<i class="g" style="width:${px(200)};height:${px(200)};bottom:${px(-120)};left:${px(-60)};z-index:3"></i>
<img class="lg" src="${LOGO}" alt="">
<div class="bloco"><h2>${c.titulo}</h2><p class="fx">${c.faixa}</p><span class="pl">${c.pilula}</span></div>
</div>`;
}

const semTags = (t) => t.replace(/<[^>]+>/g, '');
const arquivo = (c) => `${c.data}-${c.id}.jpg`;

// Regras do Google (ajuda oficial e política de conteúdo, lidas em 03/11/2026) e do caderno de marca.
function conferir() {
  const r = [];
  const fotos = new Set();
  for (const c of P) {
    const t = c.texto;
    const primeira = t.split(/[.:]\s/)[0].toLowerCase();
    if (t.length > 1500) r.push(`${c.id}: texto com ${t.length} caracteres (máximo 1500)`);
    if (!primeira.includes(c.palavra.toLowerCase())) r.push(`${c.id}: palavra-chave fora da primeira frase`);
    if (!t.includes('2027')) r.push(`${c.id}: texto não cita 2027`);
    if (/\(?\d{2}\)?\s?9?\d{4}-?\d{4}/.test(t)) r.push(`${c.id}: parece ter telefone`);
    if (/@|instagram|facebook|wa\.me/i.test(t)) r.push(`${c.id}: e-mail ou rede social no texto`);
    if (/24 horas/i.test(t)) r.push(`${c.id}: "24 horas" é proibido no caderno`);
    if (c.tema === 'lar' && /farmác/i.test(t + c.titulo + c.faixa)) r.push(`${c.id}: padaria falando de farmácia`);
    if (fotos.has(c.foto) || USADAS.has(c.foto)) r.push(`${c.id}: foto repetida (${c.foto})`);
    fotos.add(c.foto);
  }
  return r;
}

(async () => {
  const problemas = conferir();
  fs.mkdirSync(SAIDA, { recursive: true });
  const b = await puppeteer.launch({ headless: 'new', args: ['--allow-file-access-from-files'] });
  const p = await b.newPage();
  await p.setViewport({ width: 1200, height: 900, deviceScaleFactor: 1 });
  for (const c of N) {
    const html = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600;700;800&display=swap" rel="stylesheet"><style>*{box-sizing:border-box}html,body{margin:0}${css}${AJUSTES}</style></head><body><div class="post" style="width:1200px">${peca(c)}</div></body></html>`;
    const tmp = path.join(require('os').tmpdir(), 'prosystem-google-pagina.html');
    fs.writeFileSync(tmp, html);
    await p.goto(url(tmp), { waitUntil: 'networkidle0', timeout: 90000 });
    await p.evaluate(() => document.fonts.ready);
    // Texto fora do quadrado central (150 a 1050 px) ou encostado no logo.
    const fora = await p.evaluate(() => {
      const r = [];
      const lg = document.querySelector('.lg').getBoundingClientRect();
      for (const e of document.querySelectorAll('.bloco h2,.bloco p,.bloco span')) {
        const q = e.getBoundingClientRect();
        if (q.left < 150 || q.right > 1050 || q.bottom > 880) r.push('fora do quadrado central: ' + e.textContent.slice(0, 40));
        if (q.top < lg.bottom + 40) r.push('perto do logo: ' + e.textContent.slice(0, 40));
      }
      return r;
    });
    fora.forEach((f) => problemas.push(`${c.id}: ${f}`));
    await p.screenshot({ path: path.join(SAIDA, arquivo(c)), type: 'jpeg', quality: 90, clip: { x: 0, y: 0, width: 1200, height: 900 } });
    fs.rmSync(tmp, { force: true });
  }
  await b.close();
  console.log(problemas.length ? problemas.join('\n') : 'sem problema');
  fs.writeFileSync(path.join(SAIDA, 'texto.md'), N.map((c) => `# ${c.dia} · ${c.seg}

- Imagem: ${arquivo(c)}
- Programar para: ${c.data.split('-').reverse().join('/')}, 09:00
- Botão: ${c.botao} → ${c.link}
- Se o artigo já estiver no ar: ${c.linkDepois}
- Palavra-chave: ${c.palavra}
- Caracteres: ${c.texto.length}

${c.texto}
`).join('\n'));
})();
