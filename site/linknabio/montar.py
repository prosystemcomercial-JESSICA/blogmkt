"""Monta a prévia do link na bio: troca os {{marcadores}} do modelo pelos links, depoimentos e imagens embutidas.
Uso: python site/linknabio/montar.py <imgs.json> <saida.html>"""
import base64, html, io, json, sys
from pathlib import Path

AQUI = Path(__file__).parent
WA = "https://api.whatsapp.com/message/6BX6LTHQ6SUWB1?autoload=1&amp;app_absent=0"

LINKS = [  # (sigla no losango, título, apoio, url, destaque)
    ("WA", "Fale com um especialista", "WhatsApp, das 7h às 22h, todos os dias", WA, True),
    ("BL", "Blog ProSystem", "Artigos novos para farmácia e padaria", "https://prosystemnet.com/blog/", False),
    ("PDF", "E-book gratuito de precificação", "Margem de lucro na farmácia, sem fórmula mágica", "https://prosystemnet.com/ebook/", False),
    ("PS", "Conheça o sistema", "Ferramentas, planos e funções do Prosystem", "https://prosystemnet.com/", False),
]

# Prints das avaliações do Google (autorizadas em 30/10/2026). Ficam só neste computador, fora do git,
# por isso a previa.html montada também fica fora do git.
PRINTS_DIR = AQUI.parent.parent / "banco imagens" / "depoimentos-google"
PRINTS = [  # (arquivo, nome para o texto alternativo)
    ("152647", "Rodrigo Amancio"), ("153223", "Krisley Kretli de Oliveira"), ("152409", "Samuel Ferreira"),
    ("152618", "Thalita Silva"), ("153201", "Paulo Siqueira"), ("152924", "Verônica Xavier"),
    ("153108", "Katiane Avancini"), ("152546", "Sirleia Moreira"), ("152501", "Claudiele Castro"),
]


def print_base64(cod):
    """Corta a sobra branca do print e devolve como PNG em base64."""
    from PIL import Image, ImageChops
    im = Image.open(PRINTS_DIR / f"Captura de tela 2026-10-30 {cod}.png").convert("RGB")
    caixa = ImageChops.difference(im, Image.new("RGB", im.size, "white")).getbbox()
    im = im.crop((0, 0, im.width, min(im.height, caixa[3] + 14)))
    b = io.BytesIO()
    im.quantize(colors=96).save(b, "PNG", optimize=True)
    return "data:image/png;base64," + base64.b64encode(b.getvalue()).decode()


def links():
    itens = []
    for i, (sig, tit, apoio, url, dest) in enumerate(LINKS):
        itens.append(
            f'<li class="rv" style="--d:{.08 * i:.2f}s"><a class="link{" destaque" if dest else ""}" href="{url}" target="_blank" rel="noopener">'
            f'<span class="marca" aria-hidden="true"><em>{sig}</em></span>'
            f'<span class="t"><strong>{tit}</strong><small>{apoio}</small></span><span class="ir" aria-hidden="true">→</span></a></li>')
    return '<ul class="links">' + "".join(itens) + "</ul>"


def depos():
    return "".join(
        f'<figure class="cit"><img src="{print_base64(cod)}" alt="Avaliação de 5 estrelas de {html.escape(n)} no Google" loading="lazy"></figure>'
        for cod, n in PRINTS)


def main(imgs, saida):
    img = json.loads(Path(imgs).read_text())
    s = (AQUI / "linknabio.tpl.html").read_text(encoding="utf-8")
    troca = {"links": links(), "depos": depos(), "wa": WA, **img}
    for k, v in troca.items():
        s = s.replace("{{" + k + "}}", v)
    assert "{{" not in s, "marcador sem valor"
    Path(saida).write_text(s, encoding="utf-8")


if __name__ == "__main__":
    main(*sys.argv[1:3])
