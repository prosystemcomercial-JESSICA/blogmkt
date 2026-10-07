# Gerador dos artigos do blog ProSystem (modelo editorial v2).
# Cada artigo em _gerador/artigos/*.py define um dict ARTIGO; este módulo monta o HTML
# final em blog/<slug>.html e a imagem de compartilhamento em blog/assets/images/og-<slug>.jpg.
import html
import json
from urllib.parse import quote

SITE = "https://prosystemnet.com"
BLOG = SITE + "/blog/"
WHATS = "5527997521370"
DATA_ISO = "2026-10-06T09:00:00-03:00"
DATA_CURTA = "6 out. 2026"
DATA_LONGA = "6 de outubro de 2026"

ICON_WHATS = '<svg width="18" height="18" aria-hidden="true"><use href="#i-whats"/></svg>'


def wa(texto):
    return f"https://wa.me/{WHATS}?text={quote(texto)}"


def esc(t):
    return html.escape(t, quote=True)


SPRITE = """<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <symbol id="i-whats" viewBox="0 0 24 24"><path fill="currentColor" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.15a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.23 8.23 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.55-3.7 8.24-8.24 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.22-.08-.39-.12-.55.13-.17.24-.64.8-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.990-1.23-.74-.66-1.230-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.55-1.34-.76-1.83-.2-.48-.4-.42-.55-.42h-.47c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.06 0 1.22.89 2.39 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.670-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z"/></symbol>
  <symbol id="i-in" viewBox="0 0 24 24"><path fill="currentColor" d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.270 2.37 4.270 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.56V9h3.56v11.45Z"/></symbol>
  <symbol id="i-link" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1-1"/></symbol>
</svg>"""


def schema(a, url, og):
    faq = [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": r}} for q, r in a["faq"]]
    grafo = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BlogPosting",
                "@id": url + "#artigo",
                "headline": a["h1"],
                "description": a["descricao"],
                "image": og,
                "datePublished": DATA_ISO,
                "dateModified": DATA_ISO,
                "inLanguage": "pt-BR",
                "articleSection": a["secao"],
                "keywords": a["keywords"],
                "author": {"@type": "Organization", "name": "ProSystem Sistemas", "url": SITE + "/"},
                "publisher": {"@type": "Organization", "name": "ProSystem Sistemas", "url": SITE + "/",
                              "logo": {"@type": "ImageObject", "url": BLOG + "assets/logo/logo-h.png"}},
                "mainEntityOfPage": url,
                "citation": [f[0] for f in a["fontes"]],
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {"@type": "ListItem", "position": 1, "name": "Início", "item": SITE + "/"},
                    {"@type": "ListItem", "position": 2, "name": "Blog", "item": BLOG},
                    {"@type": "ListItem", "position": 3, "name": a["trilha"]},
                ],
            },
            {"@type": "FAQPage", "mainEntity": faq},
        ],
    }
    return json.dumps(grafo, ensure_ascii=False, indent=2)


def render(a):
    url = f"{BLOG}{a['slug']}/"
    og = f"{BLOG}assets/images/og-{a['slug']}.jpg"
    wtopo = wa(a["whats"])
    share_txt = quote(f"{a['og_titulo']} {url}")
    share_url = quote(url, safe="")

    toc = a["toc"] + [("perguntas-frequentes", "Perguntas frequentes")]
    toc_html = "\n      ".join(f'<a href="#{i}">{esc(t)}</a>' for i, t in toc)
    resumo = "\n        ".join(f"<li>{r}</li>" for r in a["resumo"])
    faq_html = "\n      ".join(
        f"<details><summary>{esc(q)}</summary><p>{esc(r)}</p></details>" for q, r in a["faq"])
    fontes = "\n      ".join(
        f'<li><a href="{esc(u)}" target="_blank" rel="noopener">{esc(t)}</a> ({esc(o)})</li>' for u, t, o in a["fontes"])
    rel = "\n      ".join(
        f'<a href="{s}.html"><span>{esc(tag)}</span><strong>{esc(t)}</strong></a>' for s, tag, t in a["relacionados"])
    lt, ltxt, lbtn = a["cta_lateral"]

    return f"""<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{esc(a['titulo_tag'])}</title>
  <meta name="description" content="{esc(a['descricao'])}">
  <link rel="canonical" href="{url}">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <meta property="og:type" content="article">
  <meta property="og:locale" content="pt_BR">
  <meta property="og:site_name" content="ProSystem Sistemas">
  <meta property="og:title" content="{esc(a['og_titulo'])}">
  <meta property="og:description" content="{esc(a['og_desc'])}">
  <meta property="og:url" content="{url}">
  <meta property="og:image" content="{og}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="article:published_time" content="{DATA_ISO}">
  <meta property="article:modified_time" content="{DATA_ISO}">
  <meta property="article:section" content="{esc(a['secao'])}">
  <meta name="twitter:card" content="summary_large_image">

  <script type="application/ld+json">
{schema(a, url, og)}
  </script>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;600;700&family=Source+Serif+4:opsz,wght@8..60,600;8..60,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/artigo.css">
</head>
<body>

{SPRITE}

<div class="progresso" aria-hidden="true"></div>

<header class="topo">
  <div class="topo__in">
    <a class="topo__marca" href="{BLOG}"><img src="assets/logo/logo-h.png" alt="ProSystem Sistemas" width="168" height="24"><span>Blog</span></a>
    <nav class="topo__nav" aria-label="Site">
      <a href="{SITE}/drogaria/">Farmácias</a>
      <a href="{SITE}/padaria/">Padarias</a>
      <a href="{SITE}/varejo/">Varejo</a>
      <a class="botao botao--whats botao--peq" href="{wtopo}" target="_blank" rel="noopener">{ICON_WHATS}Fale conosco</a>
    </nav>
  </div>
</header>

<main>
<div class="cabeca">
  <nav class="trilha" aria-label="Você está em"><a href="{SITE}/">Início</a> › <a href="{BLOG}">Blog</a> › <span>{esc(a['secao'])}</span></nav>
  <span class="chamada">{esc(a['chamada'])}</span>
  <h1>{a['h1_html'] if 'h1_html' in a else esc(a['h1'])}</h1>
  <p class="linha-fina">{a['linha_fina']}</p>
  <div class="assinatura">
    <span>Por <strong>ProSystem Sistemas</strong></span>
    <span>Atualizado em <time datetime="{DATA_ISO[:10]}">{DATA_CURTA}</time></span>
    <span>{a['minutos']} min de leitura</span>
    <span class="assinatura__comp">
      <a href="https://wa.me/?text={share_txt}" target="_blank" rel="noopener" aria-label="Compartilhar no WhatsApp"><svg width="17" height="17"><use href="#i-whats"/></svg></a>
      <a href="https://www.linkedin.com/sharing/share-offsite/?url={share_url}" target="_blank" rel="noopener" aria-label="Compartilhar no LinkedIn"><svg width="15" height="15"><use href="#i-in"/></svg></a>
      <button type="button" data-copiar aria-label="Copiar link"><svg width="17" height="17"><use href="#i-link"/></svg></button>
    </span>
  </div>
</div>

<div class="grade">
  <article class="texto">

    <section class="resumo" aria-labelledby="resumo-t">
      <h2 id="resumo-t">Em 30 segundos</h2>
      <ul>
        {resumo}
      </ul>
    </section>

{a['corpo']}

    <h2 id="perguntas-frequentes">Perguntas frequentes</h2>
    <div class="faq">
      {faq_html}
    </div>

    <h2 id="fontes">Fontes</h2>
    <ol class="fontes">
      {fontes}
    </ol>
    <p class="aviso">Conteúdo informativo, atualizado em {DATA_LONGA}. {a.get('aviso', '')}</p>
  </article>

  <aside class="lateral" aria-label="Neste artigo">
    <nav class="sumario">
      <b>Neste artigo</b>
      {toc_html}
    </nav>
    <div class="lateral__cta">
      <b>{esc(lt)}</b>
      <p>{esc(ltxt)}</p>
      <a class="botao botao--whats botao--peq" href="{wtopo}" target="_blank" rel="noopener">{ICON_WHATS}{esc(lbtn)}</a>
    </div>
  </aside>
</div>

<div class="depois">
  <div class="sobre">
    <img src="assets/logo/logo-icone.png" alt="" width="56" height="56">
    <div><strong>ProSystem Sistemas</strong><p>Há mais de 16 anos desenvolvendo sistemas de gestão para farmácias, drogarias, padarias e varejo. Este conteúdo foi produzido a partir da legislação e das fontes citadas.</p></div>
  </div>
  <section class="leia">
    <h2>Leia também</h2>
    <div class="leia__grade">
      {rel}
    </div>
  </section>
</div>
</main>

<footer class="rodape">
  <div class="rodape__in">
    <div>
      <img src="assets/logo/logo-h.png" alt="ProSystem Sistemas" width="182" height="26">
      <b>Sistema de gestão para farmácias, drogarias e padarias</b>
      <p>PDV, emissão fiscal, estoque e financeiro no mesmo lugar, com suporte 24 horas.</p>
    </div>
    <a class="botao botao--whats" href="{wa('Olá! Vim pelo blog da ProSystem e quero conhecer o sistema.')}" target="_blank" rel="noopener">{ICON_WHATS}Conhecer o sistema</a>
  </div>
  <small>© 2026 ProSystem Sistemas. Todos os direitos reservados.</small>
</footer>

<div class="barra-whats">
  <a class="botao botao--whats" href="{wtopo}" target="_blank" rel="noopener">{ICON_WHATS}{esc(a['barra'])}</a>
</div>
{a.get('js', '')}
<script src="assets/js/artigo.js" defer></script>
</body>
</html>
"""


def cta(titulo, texto, whats_texto, secundario=True):
    """Bloco de chamada no meio do texto."""
    sec = f'<a class="botao botao--linha" href="{SITE}/contato/">Pedir uma demonstração</a>' if secundario else ""
    return f"""    <div class="cta">
      <h3>{titulo}</h3>
      <p>{texto}</p>
      <div class="cta__linha">
        <a class="botao botao--whats" href="{wa(whats_texto)}" target="_blank" rel="noopener">{ICON_WHATS}Falar no WhatsApp</a>
        {sec}
      </div>
    </div>"""


# ---------- imagem de compartilhamento ----------
def og_image(a, destino):
    from PIL import Image, ImageDraw, ImageFont, ImageFilter
    W, H = 1200, 630
    img = Image.new("RGB", (W, H), "#0A2E87")
    glow = Image.new("RGB", (W, H), "#0A2E87")
    ImageDraw.Draw(glow).ellipse((700, -250, 1500, 450), fill="#11B8FF")
    img = Image.blend(img, glow.filter(ImageFilter.GaussianBlur(160)), 0.45)
    d = ImageDraw.Draw(img)
    F = "C:/Windows/Fonts/"
    b = ImageFont.truetype(F + "segoeuib.ttf", 60)
    r = ImageFont.truetype(F + "segoeui.ttf", 27)
    s = ImageFont.truetype(F + "segoeuib.ttf", 22)
    big = ImageFont.truetype(F + "segoeuib.ttf", 50)
    tag = a["chamada"].upper()
    d.rounded_rectangle((72, 64, 72 + d.textlength(tag, font=s) + 40, 104), radius=20, fill="#16409E")
    d.text((92, 70), tag, font=s, fill="#9FDFFF")
    y = 136
    for linha in a["og_linhas"]:
        d.text((72, y), linha, font=b, fill="white")
        y += 74
    x, y = 72, 440
    for grande, pequeno in a.get("og_chips", []):
        w = int(max(d.textlength(pequeno, font=r), d.textlength(grande, font=big))) + 56
        d.rounded_rectangle((x, y, x + w, y + 116), radius=22, fill="#123A9A", outline="#2B5BC4", width=2)
        d.text((x + 28, y + 12), grande, font=big, fill="#11B8FF")
        d.text((x + 28, y + 74), pequeno, font=r, fill="white")
        x += w + 24
    logo = Image.open("assets/logo/logo-h.png").convert("RGBA")
    lw = 230
    logo = logo.resize((lw, int(logo.height * lw / logo.width)))
    px, py = 20, 14
    x0, y0 = W - lw - 72 - px, 84 - logo.height // 2 - py
    d.rounded_rectangle((x0, y0, W - 72 + px, y0 + logo.height + 2 * py), radius=12, fill="white")
    img.paste(logo, (W - lw - 72, 84 - logo.height // 2), logo)
    img.save(destino, quality=88)
