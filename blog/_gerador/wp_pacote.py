# Monta o pacote de publicação no WordPress a partir dos artigos gerados em blog/*.html.
# Uso (a partir da pasta blog/):  python _gerador/wp_pacote.py
# Saída:
#   _gerador/wp/prosystem-blog/assets/  -> psb.css, psb-home.css, psb.js, logo-icone.png (plugin)
#   _gerador/wp/import/                 -> manifest.json + imagens de capa (para importar_wp.php)
import json
import pathlib
import re
import shutil

BLOG = pathlib.Path(__file__).resolve().parent.parent
WP = BLOG / "_gerador" / "wp"
PLUGIN = WP / "prosystem-blog"
IMPORT = WP / "import"

ARTIGOS = {
    # slug: (categoria, rótulo de destaque, destaque?)
    "simples-nacional-2027-prazo-opcao-ibs-cbs-farmacia-padaria": ("gestao", "Prazo 15/10", True),
    "sncr-receita-eletronica-controlados-farmacia-2026": ("farmacia", "", False),
    "desenrola-mei-pequeno-valor-como-negociar-dividas": ("gestao", "", False),
    "igp-m-setembro-2026-reajuste-aluguel-loja": ("gestao", "", False),
    "vender-mais-nao-e-lucrar-mais-margem-varejo": ("gestao", "", False),
    "manual-boas-praticas-pop-padaria-rdc-216": ("padaria", "", False),
    "peps-estoque-padaria-primeiro-que-entra-primeiro-que-sai": ("padaria", "", False),
    "controle-de-sobras-padaria-ajustar-producao": ("padaria", "", False),
    "ficha-tecnica-padaria-padronizar-receitas-rendimento": ("padaria", "", False),
    "identificacao-alimentos-preparados-padaria-etiqueta-validade": ("padaria", "", False),
    "prazo-de-validade-produtos-embalados-padaria-guia-16-anvisa": ("padaria", "", False),
}


# ---------- CSS com escopo (.psb / .psb-home) ----------
def escopo(css, raiz):
    css = re.sub(r"/\*.*?\*/", "", css, flags=re.S)
    out, i = [], 0
    while i < len(css):
        j = css.find("{", i)
        if j == -1:
            break
        cab = css[i:j].strip()
        if cab.startswith("@media") or cab.startswith("@supports"):
            prof, k = 1, j + 1
            while prof:
                prof += {"{": 1, "}": -1}.get(css[k], 0)
                k += 1
            out.append(cab + " {\n" + escopo(css[j + 1:k - 1], raiz) + "}\n")
            i = k
            continue
        k = css.find("}", j)
        corpo = css[j + 1:k]
        sels = []
        for s in cab.split(","):
            s = s.strip()
            if not s:
                continue
            if s in (":root", "body"):
                sels.append(raiz)
            elif s == "html":
                sels.append("html")
            elif s.startswith("*"):
                sels.append(f"{raiz} {s}")
            else:
                sels.append(f"{raiz} {s}")
        out.append(", ".join(sels) + " {" + corpo + "}\n")
        i = k + 1
    return "".join(out)


# Neutraliza estilos do tema Hello (tabelas, botões, labels) dentro do blog.
RESET = """
{r} table, {r} th, {r} td {{ border: 0; background: none; }}
{r} table tbody > tr:nth-child(odd) > td, {r} table tbody > tr:nth-child(odd) > th {{ background-color: transparent; }}
{r} table caption {{ caption-side: top; }}
{r} button, {r} button:hover, {r} button:focus {{ text-transform: none; letter-spacing: normal; }}
{r} label {{ line-height: inherit; vertical-align: baseline; }}
{r} h1, {r} h2, {r} h3 {{ font-weight: 700; letter-spacing: normal; text-transform: none; }}
{r} p {{ margin-block-start: 0; }}
{r} a:hover, {r} a:active {{ color: inherit; }}
"""

css_artigo = (BLOG / "assets/css/artigo.css").read_text(encoding="utf-8")
css_artigo = escopo(css_artigo, ".psb") + RESET.format(r=".psb") + """
.psb .texto a:hover, .psb .trilha a:hover { color: var(--navy); }
.psb .botao, .psb .botao:hover, .psb .botao:focus { color: #fff; }
.psb .assinatura__comp button { padding: 0; border: 1px solid var(--rule); color: var(--text); background: var(--paper); border-radius: 50%; }
.psb .assinatura__comp button:hover, .psb .assinatura__comp button:focus { background: var(--paper); color: var(--navy); border-color: var(--navy); }
.psb .faq summary { color: var(--ink); }
.psb .leia a, .psb .leia a:hover { color: var(--ink); }
.psb .sumario a:hover { color: var(--navy); }
.psb-main { display: block; }
/* o cabeçalho do site já tem 80px de margem embaixo */
.psb .cabeca { padding-top: 0; }
@media (max-width: 1024px) { .psb .cabeca { padding-top: 24px; } .psb-home { padding-top: 24px !important; } }
"""
(PLUGIN / "assets").mkdir(parents=True, exist_ok=True)
(PLUGIN / "assets/psb.css").write_text(css_artigo, encoding="utf-8")

# CSS da página do blog: vem do gerador de prévia, sem cabeçalho/rodapé/aviso.
prev = (BLOG / "_gerador/previa_home.py").read_text(encoding="utf-8")
css_home = re.search(r'CSS = """(.*?)"""', prev, re.S).group(1)
css_home = re.sub(r"^\.(aviso|topo|marca|nav)\b.*$", "", css_home, flags=re.M)
css_home = re.sub(r"^footer.*$", "", css_home, flags=re.M)
css_home = css_home.replace("main { max-width:1120px; margin:0 auto; padding:40px 20px 24px; }", "")
css_home = escopo(css_home, ".psb-home") + RESET.format(r=".psb-home") + """
.psb-home { max-width: 1120px; margin: 0 auto; padding: 0 20px 24px; }
.psb-home .filtro button { border: 1px solid var(--rule); color: var(--text); background: var(--paper); padding: 7px 14px; border-radius: 4px; }
.psb-home .filtro button:hover, .psb-home .filtro button:focus { background: var(--paper); color: var(--navy); border-color: var(--navy); }
.psb-home .filtro button[aria-pressed="true"], .psb-home .filtro button[aria-pressed="true"]:hover, .psb-home .filtro button[aria-pressed="true"]:focus { background: var(--navy); border-color: var(--navy); color: #fff; }
.psb-home .card a, .psb-home .card a:hover, .psb-home .destaque a, .psb-home .destaque a:hover { color: inherit; }
.psb-home .botao, .psb-home .botao:hover { color: #fff; }
.psb-home .card img, .psb-home .destaque img { width: 100%; height: auto; aspect-ratio: 1200 / 630; object-fit: cover; }
@media (max-width:620px) { .psb-home { padding: 0 16px 16px; } }
"""
(PLUGIN / "assets/psb-home.css").write_text(css_home, encoding="utf-8")

js = (BLOG / "assets/js/artigo.js").read_text(encoding="utf-8")
js = js.replace("var url = document.querySelector('link[rel=canonical]').href;",
                "var can = document.querySelector('link[rel=canonical]'); var url = can ? can.href : location.href;")
assert "location.href" in js
(PLUGIN / "assets/psb.js").write_text(js, encoding="utf-8")
shutil.copy(BLOG / "assets/logo/logo-icone.png", PLUGIN / "assets/logo-icone.png")


# ---------- manifesto dos artigos ----------
def achar(padrao, txt, flags=re.S):
    m = re.search(padrao, txt, flags)
    if not m:
        raise SystemExit(f"não encontrado: {padrao[:60]}")
    return m.group(1)


def texto(h):
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", "", h)).strip()


slugs_novos = set(ARTIGOS)
if IMPORT.exists():
    shutil.rmtree(IMPORT)
(IMPORT / "img").mkdir(parents=True)
manifesto = []
for slug, (cat, rotulo, destaque) in ARTIGOS.items():
    src = (BLOG / f"{slug}.html").read_text(encoding="utf-8")
    import html as h

    corpo = achar(r'<article class="texto">(.*?)</article>', src).strip()
    # links para outros artigos: novos viram /blog/slug/; antigos (ainda não publicados) viram texto
    def troca(m):
        alvo, rot = m.group(1), m.group(2)
        return f'<a href="/blog/{alvo}/">{rot}</a>' if alvo in slugs_novos else rot
    corpo = re.sub(r'<a href="([a-z0-9-]+)\.html">(.*?)</a>', troca, corpo, flags=re.S)
    scripts = [s for s in re.findall(r"<script>.*?</script>", src, re.S)]
    conteudo = "<!-- wp:html -->\n" + corpo + "\n" + "\n".join(scripts) + "\n<!-- /wp:html -->"

    ld = json.loads(achar(r'<script type="application/ld\+json">(.*?)</script>', src))
    grafo = ld["@graph"] if "@graph" in ld else [ld]
    faq = next(g for g in grafo if g["@type"] == "FAQPage")["mainEntity"]
    post = next(g for g in grafo if g["@type"] == "BlogPosting")

    toc = re.findall(r'<a href="#([a-z0-9-]+)">(.*?)</a>', achar(r'<nav class="sumario">(.*?)</nav>', src))
    cta_html = achar(r'<div class="lateral__cta">(.*?)</div>', src)
    cta = [texto(achar(r"<b>(.*?)</b>", cta_html)), texto(achar(r"<p>(.*?)</p>", cta_html)),
           texto(re.sub(r"<svg.*?</svg>", "", achar(r"<a [^>]*>(.*?)</a>", cta_html)))]
    wa = h.unescape(achar(r'class="botao botao--whats botao--peq" href="(https://wa\.me/[^"]+)"', src))
    from urllib.parse import unquote
    whats = unquote(wa.split("?text=", 1)[1])
    rel = re.findall(r'<a href="([a-z0-9-]+)\.html"><span>', achar(r'<div class="leia__grade">(.*?)</div>', src))
    og = achar(r'og:image" content="[^"]*/(og-[^"]+\.jpg)"', src)
    shutil.copy(BLOG / "assets/images" / og, IMPORT / "img" / og)

    manifesto.append({
        "slug": slug,
        "titulo": h.unescape(texto(achar(r"<h1>(.*?)</h1>", src))),
        "resumo": h.unescape(texto(achar(r'<p class="linha-fina">(.*?)</p>', src))),
        "categoria": cat,
        "chamada": h.unescape(achar(r'<span class="chamada">(.*?)</span>', src)),
        "conteudo": conteudo,
        "faq": [[q["name"], q["acceptedAnswer"]["text"]] for q in faq],
        "toc": [[i, h.unescape(texto(t))] for i, t in toc],
        "cta": cta,
        "whats": whats,
        "relacionados": rel,
        "rotulo": rotulo,
        "destaque": destaque,
        "imagem": og,
        "seo_titulo": h.unescape(achar(r"<title>(.*?)</title>", src)),
        "seo_descricao": h.unescape(achar(r'<meta name="description" content="(.*?)">', src)),
        "og_titulo": h.unescape(achar(r'<meta property="og:title" content="(.*?)">', src)),
        "og_descricao": h.unescape(achar(r'<meta property="og:description" content="(.*?)">', src)),
        "palavra_chave": post["keywords"].split(",")[0].strip(),
    })

(IMPORT / "manifest.json").write_text(json.dumps(manifesto, ensure_ascii=False, indent=1), encoding="utf-8")
print(len(manifesto), "artigos no manifesto")
for a in manifesto:
    print(f"- {a['slug']} | {a['categoria']} | rel={a['relacionados']} | links antigos removidos: "
          f"{len(re.findall(r'href=\"[a-z0-9-]+\.html\"', a['conteudo']))}")
