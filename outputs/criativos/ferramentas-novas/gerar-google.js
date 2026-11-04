// Postagens do Perfil da Empresa no Google sobre as ferramentas novas (04/11/2026), no visual de ../google-nov-jan/gerar.js.
// São extras: as 39 de google-nov-jan já estão programadas. Datas sugeridas em dias sem postagem.
// Uso: node outputs/criativos/ferramentas-novas/gerar-google.js
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const { P: JA } = require('../google-nov-jan/dados.js');
const { N: JA2 } = require('../google-nov-jan/dados-novos.js');
const LP_F = 'https://prosystemnet.com/sistema-para-farmacia/';
const LP_P = 'https://prosystemnet.com/sistema-para-padaria/';
const CONTATO = 'https://prosystemnet.com/contato/';
const N = [
  {
    data: '2026-11-18', dia: 'Qua 18/11', seg: 'Os dois', id: 'recarga-online-no-caixa', tema: 'azul',
    foto: 'carrinho-compras', posicao: '50% 50%',
    palavra: 'recarga de celular no caixa',
    titulo: 'Recarga de celular <b>no seu caixa.</b>',
    faixa: 'Mais um motivo para o cliente entrar na loja.', pilula: 'Sistema Prosystem',
    botao: 'Saiba mais', link: CONTATO,
    texto: `Recarga de celular no caixa traz gente para dentro da loja. Quem entra para recarregar passa pelo balcão e, muitas vezes, leva mais alguma coisa: o pão da tarde, um item de higiene, uma bebida.

No Prosystem, a recarga online fica no próprio caixa, a um atalho de distância, junto com outros serviços. O operador não precisa de outro aparelho nem de outro sistema, e o cliente não precisa ir a outro lugar.

Para farmácias e padarias que querem aumentar o movimento em 2027, é um serviço simples que vira motivo de visita.

Fale com a ProSystem e veja como ativar a recarga no seu caixa.`,
  },
  {
    data: '2026-11-26', dia: 'Qui 26/11', seg: 'Farmácia', id: 'orcamento-pelo-whatsapp', tema: 'azul',
    foto: 'corredor-seta', posicao: '50% 10%',
    palavra: 'orçamento pelo WhatsApp',
    titulo: 'Orçamento pelo WhatsApp <b>em um clique.</b>',
    faixa: 'Monte a venda no caixa, copie e envie.', pilula: 'Sistema para farmácia',
    botao: 'Saiba mais', link: LP_F,
    texto: `Orçamento pelo WhatsApp não precisa de item digitado à mão. Quem pede preço pela mensagem normalmente está comparando, e quem responde primeiro sai na frente.

Como funciona no Prosystem:
1. Monte a venda no caixa, como sempre, com produtos, quantidades e descontos.
2. Clique no botão de copiar orçamento.
3. Cole no WhatsApp: o texto já vem com os itens, o preço de e por, o total e o nome do vendedor.

Menos erro de digitação, resposta mais rápida e um orçamento organizado para o cliente. Uma forma simples de vender mais pelo WhatsApp em 2027.

Conheça o sistema para farmácia da ProSystem.`,
  },
  {
    data: '2026-12-02', dia: 'Qua 02/12', seg: 'Padaria', id: 'balanco-padaria-loja-aberta', tema: 'lar',
    foto: 'maos-massa', posicao: '50% 40%',
    palavra: 'balanço de estoque na padaria',
    titulo: 'Balanço de estoque <b>com a loja aberta.</b>',
    faixa: 'Sem coletor e sem parar o caixa.', pilula: 'Sistema para padaria',
    botao: 'Saiba mais', link: LP_P,
    texto: `Balanço de estoque na padaria não precisa fechar a loja. O fim do ano é a hora de contar o que tem de verdade, antes de fazer as compras de 2027.

Com o Prosystem:
1. A contagem é feita prateleira por prateleira, com a loja funcionando.
2. O aplicativo de contagem lê o código pela câmera do celular, sem comprar coletor de dados.
3. O resultado volta para o sistema e atualiza o estoque.

Comece pelos insumos que mais pesam no custo: farinha, gordura, embalagem e bebidas de revenda. A diferença entre o sistema e a prateleira mostra onde está a perda.

Conheça o sistema para padaria da ProSystem.`,
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
    const tmp = path.join(require('os').tmpdir(), 'prosystem-google-ferramentas.html');
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
- Palavra-chave: ${c.palavra}
- Caracteres: ${c.texto.length}

${c.texto}
`).join('\n'));
})();
