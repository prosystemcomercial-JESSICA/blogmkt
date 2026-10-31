// Confere as regras de texto das peças: palavra-chave na primeira frase, 2027 na legenda, hashtags,
// texto alternativo em cada página, 3 blocos sem palavras proibidas.
// Uso: node outputs/criativos/nov-dez/conferir.js
const { P, PRONTAS } = require('./pecas-dados.js');

const semAcento = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const PROIBIDAS = /24 horas|posologia|rentabilidade|tíquete|dashboard|capital parado|curva de|garant/i;
const erros = [];
for (const p of [...P.filter((x) => !x.pagina), ...PRONTAS.filter((x) => x.cap)]) {
  const nome = p.id || p.arq;
  const primeira = p.cap.split(/\n\n/)[0];
  if (p.kw && !semAcento(primeira).includes(semAcento(p.kw))) erros.push(`${nome}: palavra-chave "${p.kw}" fora do primeiro parágrafo`);
  if (!p.semAno && !p.cap.includes('2027')) erros.push(`${nome}: legenda sem 2027`);
  const tags = p.tags.split(' ').length;
  if (tags < 3 || tags > 5) erros.push(`${nome}: ${tags} hashtags`);
  if (PROIBIDAS.test(p.cap)) erros.push(`${nome}: palavra proibida ou difícil na legenda`);
  if (p.alts) {
    const paginas = p.tipo === 'v2' || p.tipo === 'v3' ? 6 : 1;
    if (p.alts.length !== paginas) erros.push(`${nome}: ${p.alts.length} textos alternativos para ${paginas} páginas`);
  }
}
for (const p of P) {
  const textos = JSON.stringify(p);
  if (/[\u{1F300}-\u{1FAFF}]/u.test(textos)) erros.push(`${p.id}: emoji`);
  if (p.seg === 'Padaria' && /farmácia|remédio|drogaria/i.test(p.cap || '')) erros.push(`${p.id}: padaria falando de farmácia`);
  if (p.seg === 'Farmácia' && /padaria|pão\b/i.test(p.cap || '')) erros.push(`${p.id}: farmácia falando de padaria`);
  if (p.seg === 'Padaria' && p.tema && p.tema !== 'lar') erros.push(`${p.id}: padaria fora do laranja`);
}
// Capa nenhuma repete foto ou tela de outro post. Pedido da Jessica em 31/10/2026.
const capas = {};
const marca = (k, nome) => { (capas[k] = capas[k] || []).push(nome); };
marca('foto teclado-azul', 'suporte-v3');
marca('foto cartelas-azuis', 'depoimento-v3');
for (const p of P) {
  if (p.pagina) continue;
  const foto = p.capa ? p.capa.foto : p.foto;
  const tela = p.capa ? p.capa.tela : p.tela;
  if (foto) marca('foto ' + foto, p.id);
  if (tela) marca('tela ' + tela, p.id);
}
for (const [k, v] of Object.entries(capas)) if (v.length > 1) erros.push(`capa repetida, ${k}: ${v.join(', ')}`);
console.log(erros.length ? erros.join('\n') : 'tudo certo');
console.log('peças conferidas:', P.filter((x) => !x.pagina).length + PRONTAS.length);
