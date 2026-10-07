# Gera a página inicial de prévia do blog (para aprovação) a partir dos artigos já gerados.
# Uso (a partir da pasta blog/):  python _gerador/previa_home.py <pasta-de-saida>
import pathlib
import re
import sys

saida = pathlib.Path(sys.argv[1])
CATS = {
    "simples-nacional-2027-prazo-opcao-ibs-cbs-farmacia-padaria": "gestao",
    "sncr-receita-eletronica-controlados-farmacia-2026": "farmacia",
    "desenrola-mei-pequeno-valor-como-negociar-dividas": "gestao",
    "igp-m-setembro-2026-reajuste-aluguel-loja": "gestao",
    "vender-mais-nao-e-lucrar-mais-margem-varejo": "gestao",
    "manual-boas-praticas-pop-padaria-rdc-216": "padaria",
    "peps-estoque-padaria-primeiro-que-entra-primeiro-que-sai": "padaria",
    "controle-de-sobras-padaria-ajustar-producao": "padaria",
    "ficha-tecnica-padaria-padronizar-receitas-rendimento": "padaria",
    "identificacao-alimentos-preparados-padaria-etiqueta-validade": "padaria",
    "prazo-de-validade-produtos-embalados-padaria-guia-16-anvisa": "padaria",
}

arts = []
for s, c in CATS.items():
    src = pathlib.Path(s + ".html").read_text(encoding="utf-8")
    arts.append(dict(
        s=s, c=c,
        og=re.search(r'og:image" content="[^"]*/(og-[^"]+\.jpg)"', src).group(1),
        h1=re.search(r"<h1>(.*?)</h1>", src, re.S).group(1),
        dek=re.search(r'class="linha-fina">(.*?)</p>', src, re.S).group(1),
        mins=re.search(r"(\d+) min de leitura", src).group(1),
        cham=re.search(r'class="chamada">(.*?)<', src).group(1),
    ))
dest, resto = arts[0], arts[1:]


def card(a):
    return f"""      <li class="card" data-cat="{a['c']}">
        <a href="{a['s']}.html">
          <img src="assets/images/{a['og']}" alt="" width="1200" height="630" loading="lazy">
          <span class="card__cat">{a['cham']}</span>
          <h3>{a['h1']}</h3>
          <p>{a['dek']}</p>
          <span class="card__meta">{a['mins']} min de leitura</span>
        </a>
      </li>"""


cards = "\n".join(card(a) for a in resto)
WA = "https://wa.me/5527997521370?text=Ol%C3%A1!%20Vim%20pelo%20blog%20da%20ProSystem%20e%20quero%20falar%20com%20um%20especialista."
ICON = ('<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm4.52 11.99c-.25-.12-1.47-.72-1.7-.81-.22-.08-.39-.12-.55.13-.17.24-.64.8-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.55-1.34-.76-1.83-.2-.48-.4-.42-.55-.42h-.47c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.06 0 1.22.89 2.39 1.01 2.56.12.17 1.75 2.67 4.23 3.74 2.48 1.07 2.48.71 2.93.67.45-.04 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z"/></svg>')

CSS = """
/* Layout: página inicial do blog em estilo de revista. Faixa de aviso da prévia, cabeçalho do site,
   artigo em destaque em duas colunas, filtro por tema e grade de 3 colunas; tema claro único, igual aos artigos */
:root { --navy:#0A2E87; --navy-deep:#071F5E; --cyan:#11B8FF; --orange:#F58220; --whats:#1DA851; --whats-dark:#168A42;
  --ink:#101828; --text:#344054; --muted:#667085; --rule:#E4E7EC; --paper:#FFFFFF; --sand:#F8F7F4;
  --serif:"Source Serif 4", Georgia, serif; --sans:"Source Sans 3","Segoe UI",system-ui,sans-serif; color-scheme: light; }
* { box-sizing:border-box; }
body { margin:0; background:var(--paper); color:var(--text); font-family:var(--sans); font-size:17px; line-height:1.6; -webkit-font-smoothing:antialiased; }
img { max-width:100%; height:auto; display:block; }
a { color:inherit; }
:focus-visible { outline:3px solid var(--cyan); outline-offset:3px; }
.aviso { background:var(--sand); border-bottom:1px solid var(--rule); font-size:15px; }
.aviso div { max-width:1120px; margin:0 auto; padding:10px 20px; }
.aviso b { color:var(--ink); }
.topo { border-bottom:1px solid var(--rule); background:var(--paper); position:sticky; top:env(safe-area-inset-top,0px); z-index:5; }
.topo__in { max-width:1120px; margin:0 auto; padding:14px 20px; display:flex; align-items:center; justify-content:space-between; gap:20px; }
.marca { display:flex; align-items:center; gap:12px; text-decoration:none; color:var(--muted); font-weight:600; }
.marca img { height:24px; width:auto; }
.marca span { border-left:1px solid var(--rule); padding-left:12px; }
.nav { display:flex; align-items:center; gap:22px; font-weight:600; }
.nav a { text-decoration:none; color:var(--text); }
.botao { display:inline-flex; align-items:center; gap:10px; font-weight:700; font-size:16px; text-decoration:none; padding:12px 18px; border-radius:6px; background:var(--whats); color:#fff !important; white-space:nowrap; transition:background-color .2s ease; }
.botao:hover { background:var(--whats-dark); }
.botao--peq { font-size:15px; padding:9px 14px; }
main { max-width:1120px; margin:0 auto; padding:40px 20px 24px; }
.abre { display:grid; gap:10px; padding-bottom:26px; border-bottom:2px solid var(--ink); }
.chamada { font-weight:700; color:var(--navy); font-size:15px; }
.chamada::before { content:""; display:inline-block; width:10px; height:10px; background:var(--cyan); margin-right:8px; vertical-align:1px; }
h1 { font-family:var(--serif); color:var(--ink); font-size:clamp(34px,5vw,54px); line-height:1.08; margin:0; letter-spacing:-.01em; text-wrap:balance; }
.abre p { margin:0; font-size:20px; color:var(--muted); max-width:60ch; }
.destaque a { display:grid; grid-template-columns:minmax(0,1.15fr) minmax(0,1fr); gap:32px; align-items:center; padding:30px 0; border-bottom:1px solid var(--rule); text-decoration:none; }
.destaque img { border-radius:4px; }
.destaque .rotulo { display:inline-block; font-size:13px; font-weight:700; color:#fff; background:var(--orange); padding:3px 8px; border-radius:3px; margin-right:8px; }
.destaque h2 { font-family:var(--serif); color:var(--ink); font-size:clamp(26px,3.2vw,36px); line-height:1.15; margin:10px 0 12px; text-wrap:balance; }
.destaque p { margin:0 0 12px; font-size:18px; }
.destaque a:hover h2, .card a:hover h3 { text-decoration:underline; text-underline-offset:4px; text-decoration-thickness:2px; }
.filtro { display:flex; flex-wrap:wrap; gap:8px; align-items:center; padding:24px 0 8px; }
.filtro span { font-weight:700; color:var(--ink); margin-right:6px; }
.filtro button { font:inherit; font-size:15px; font-weight:700; padding:7px 14px; border-radius:4px; border:1px solid var(--rule); background:var(--paper); color:var(--text); cursor:pointer; }
.filtro button[aria-pressed="true"] { background:var(--navy); border-color:var(--navy); color:#fff; }
.grade { list-style:none; margin:0; padding:18px 0 0; display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:36px 28px; }
.card[hidden] { display:none; }
.card a { display:grid; gap:8px; text-decoration:none; }
.card img { border-radius:4px; margin-bottom:6px; }
.card__cat { font-size:14px; font-weight:700; color:var(--navy); }
.card h3 { font-family:var(--serif); color:var(--ink); font-size:21px; line-height:1.25; margin:0; text-wrap:balance; }
.card p { margin:0; font-size:16px; line-height:1.55; display:-webkit-box; -webkit-line-clamp:3; -webkit-box-orient:vertical; overflow:hidden; }
.card__meta { font-size:14px; color:var(--muted); }
.faixa { margin:56px 0 0; background:var(--navy-deep); color:rgba(255,255,255,.82); border-radius:6px; padding:32px; display:flex; flex-wrap:wrap; gap:20px 32px; align-items:center; justify-content:space-between; }
.faixa b { display:block; font-family:var(--serif); color:#fff; font-size:26px; line-height:1.25; margin-bottom:6px; }
.faixa p { margin:0; max-width:52ch; }
footer { background:var(--navy-deep); color:rgba(255,255,255,.6); margin-top:56px; }
footer div { max-width:1120px; margin:0 auto; padding:28px 20px; font-size:14px; display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:12px; }
footer img { height:22px; width:auto; filter:brightness(0) invert(1); }
@media (max-width:900px) { .grade { grid-template-columns:1fr 1fr; } .destaque a { grid-template-columns:1fr; gap:18px; } }
@media (max-width:620px) { .grade { grid-template-columns:1fr; } .nav a:not(.botao) { display:none; } .marca span { display:none; } main { padding:28px 16px 16px; } .faixa { padding:24px 20px; } .abre p { font-size:18px; } }
"""

JS = """
(function () {
  var botoes = document.querySelectorAll('.filtro button');
  var cards = document.querySelectorAll('.card');
  botoes.forEach(function (b) {
    b.addEventListener('click', function () {
      var f = b.getAttribute('data-f');
      botoes.forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      cards.forEach(function (c) { c.hidden = !(f === 'todos' || c.getAttribute('data-cat') === f); });
    });
  });
})();
"""

page = f"""<title>Prévia Blog ProSystem</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;600;700&family=Source+Serif+4:opsz,wght@8..60,600;8..60,700&display=swap" rel="stylesheet">
<style>{CSS}</style>

<div class="aviso"><div><b>Prévia para aprovação.</b> No WordPress, o cabeçalho e o rodapé serão os do site da ProSystem. A página do blog e os artigos mantêm este visual.</div></div>

<header class="topo">
  <div class="topo__in">
    <a class="marca" href="#"><img src="assets/logo/logo-h.png" alt="ProSystem Sistemas" width="168" height="24"><span>Blog</span></a>
    <nav class="nav" aria-label="Site">
      <a href="https://prosystemnet.com/drogaria/">Farmácias</a>
      <a href="https://prosystemnet.com/padaria/">Padarias</a>
      <a href="https://prosystemnet.com/varejo/">Varejo</a>
      <a class="botao botao--peq" href="{WA}" target="_blank" rel="noopener">{ICON}Fale conosco</a>
    </nav>
  </div>
</header>

<main>
  <section class="abre">
    <span class="chamada">Blog ProSystem</span>
    <h1>Gestão, fiscal e rotina para farmácias, drogarias e padarias</h1>
    <p>Mudanças de lei explicadas sem juridiquês, contas que você pode fazer na hora e práticas que reduzem perda no balcão e na produção.</p>
  </section>

  <section class="destaque" aria-label="Em destaque">
    <a href="{dest['s']}.html">
      <img src="assets/images/{dest['og']}" alt="" width="1200" height="630">
      <div>
        <span class="rotulo">Prazo 15/10</span><span class="chamada">{dest['cham']}</span>
        <h2>{dest['h1']}</h2>
        <p>{dest['dek']}</p>
        <span class="card__meta">{dest['mins']} min de leitura</span>
      </div>
    </a>
  </section>

  <div class="filtro" role="group" aria-label="Filtrar por tema">
    <span>Temas</span>
    <button type="button" data-f="todos" aria-pressed="true">Todos</button>
    <button type="button" data-f="farmacia" aria-pressed="false">Farmácia</button>
    <button type="button" data-f="padaria" aria-pressed="false">Padaria</button>
    <button type="button" data-f="gestao" aria-pressed="false">Gestão</button>
  </div>

  <ul class="grade">
{cards}
  </ul>

  <section class="faixa">
    <div>
      <b>Quer ver isso funcionando na sua loja?</b>
      <p>Sistema de gestão para farmácias, drogarias e padarias, com PDV, emissão fiscal, estoque e financeiro no mesmo lugar e suporte 24 horas.</p>
    </div>
    <a class="botao" href="{WA}" target="_blank" rel="noopener">{ICON}Falar com um especialista</a>
  </section>
</main>

<footer><div><img src="assets/logo/logo-h.png" alt="ProSystem Sistemas" width="154" height="22"><span>© 2026 ProSystem Sistemas</span></div></footer>

<script>{JS}</script>
"""
(saida / "index-pauta.html").write_text(page, encoding="utf-8")
print("ok", len(resto), "cards")
