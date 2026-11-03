"""Monta a prévia do link na bio: troca os {{marcadores}} do modelo pelos links, depoimentos e imagens embutidas.
Uso: python site/linknabio/montar.py <imgs.json> <saida.html>"""
import json, sys, html
from pathlib import Path

AQUI = Path(__file__).parent
WA = "https://api.whatsapp.com/message/6BX6LTHQ6SUWB1?autoload=1&amp;app_absent=0"

LINKS = [  # (sigla no losango, título, apoio, url, destaque)
    ("WA", "Fale com um especialista", "WhatsApp, das 7h às 22h, todos os dias", WA, True),
    ("BL", "Blog ProSystem", "Artigos novos para farmácia e padaria", "https://prosystemnet.com/blog/", False),
    ("PDF", "E-book gratuito de precificação", "Margem de lucro na farmácia, sem fórmula mágica", "https://prosystemnet.com/ebook/", False),
    ("PS", "Conheça o sistema", "Ferramentas, planos e funções do Prosystem", "https://prosystemnet.com/", False),
]

# Avaliações reais do Google (autorizadas em 30/10/2026), trechos sem alterar o sentido
DEPOS = [
    ("Rodrigo Amancio", "Trabalho com eles há 13 anos e não pretendo mudar. Me atendem super bem e com rapidez e sempre resolvem as minhas demandas."),
    ("Samuel Ferreira", "O sistema é excelente, tudo funciona. Suporte humanizado de segunda a sexta e também sábado e domingo, sem aquelas frescuras de falar com robô."),
    ("Thalita Silva", "Sistema muito bem estruturado, de fácil acesso, atendimento nota 1000, todos muito atenciosos e prestativos."),
    ("Sirleia Moreira", "Sistema muito fácil de trabalhar e eles dão ótima assistência."),
    ("Verônica Xavier", "Atendimento excelente, serviço de ótima qualidade e muita atenção aos detalhes. Recomendo."),
    ("Juliana Barcellos Brejenski", "Atendimento sempre rápido, e com excelência."),
]

ESTRELA = ('<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.2l2.6 5.5 6 .8-4.4 4.1 1.1 5.9L12 16.6l-5.3 2.9 1.1-5.9L3.4 9.5l6-.8z" '
           'fill="#FFFFFF" stroke="#FFFFFF" stroke-width="2.2" stroke-linejoin="round"/></svg>')


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
        f'<figure class="cit" style="margin:0"><blockquote>{html.escape(t)}</blockquote><footer>'
        f'<span class="estrelas" aria-label="5 estrelas">{ESTRELA * 5}</span><strong>{html.escape(n)}</strong></footer></figure>'
        for n, t in DEPOS)


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
