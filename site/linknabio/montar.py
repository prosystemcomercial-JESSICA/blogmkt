"""Monta a prévia do link na bio: troca os {{marcadores}} do modelo pelos links, depoimentos e imagens embutidas.
Uso: python site/linknabio/montar.py <imgs.json> <saida.html>"""
import html, json, sys
from pathlib import Path

AQUI = Path(__file__).parent
WA = "https://api.whatsapp.com/message/6BX6LTHQ6SUWB1?autoload=1&amp;app_absent=0"
# Destino dos cartões de segmento: por enquanto, as prévias das LPs (site/lp). No site, trocar pelos endereços das páginas.
LP_FARMACIA = "https://claude.ai/artifact/RgoAoEjoV4fMAPazhA6zWG"
LP_PADARIA = "https://claude.ai/artifact/AvgXmvxUuNJhh71qc7QiRB"

LINKS = [  # (sigla no losango, título, apoio, url, destaque)
    ("WA", "Fale com um especialista", "WhatsApp, das 7h às 22h, todos os dias", WA, True),
    ("BL", "Blog ProSystem", "Artigos novos para farmácia e padaria", "https://prosystemnet.com/blog/", False),
    ("PDF", "E-book gratuito de precificação", "Margem de lucro na farmácia, sem fórmula mágica", "https://prosystemnet.com/ebook/", False),
    ("PS", "Conheça o sistema", "Ferramentas, planos e funções do Prosystem", "https://prosystemnet.com/", False),
]

# Avaliações do Google (autorizadas em 30/10/2026): texto completo, como está no Google, e a nota de cada uma.
# Só sai o emoji. Fonte: banco imagens/depoimentos-google/transcricao.md (fora do git).
DEPOS = [  # (nome, estrelas, texto)
    ("Rodrigo Amancio", 5, "Trabalho com eles a 13 anos e não pretendo mudar. Me atendem super bem e com rapidez e sempre resolvem as minhas demandas de maneira muito eficaz. São nota 1000 e estão de parabéns."),
    ("Krisley Kretli de Oliveira", 5, "Eu tenho duas farmácias e a quase 15 anos de empresa trabalho com o software da Prosystem! Amo o trabalho deles,o programa é super simples de aprender e o suporte que eles oferecem é super ágil e eficaz"),
    ("Samuel Ferreira", 5, "O sistema é excelente, tudo funciona, muito personalizável, integração, detalhamentos e o suporte humanizado tanto segunda a sexta quando sábado e domingo, sem aquelas frescuras de falar com robô. O suporte do Matheus de Carvalho excelente"),
    ("Thalita Silva", 5, "Sistema muito bem estruturado de fácil acesso, atendimento nota 1000, todos muito atenciosos e prestativos quando precisamos!!!"),
    ("Paulo Siqueira", 5, "A Prossystem foi o programa que resolveu aqui na loja, já tive outros mas o único que os funcionários não reclamam aqui é a Prossystem, suporte na hora que precisa, temos o telefone direto com o técnico responsável, recomendo demais"),
    ("Verônica Xavier", 5, "Tive uma experiência incrível com a Prosystem! Atendimento excelente, serviço de ótima qualidade e muita atenção aos detalhes. Recomendo para quem procura confiança e profissionalismo."),
    ("Katiane Avancini", 5, "Trabalhamos com a Prossystem a muitos anos, nos atendem rapidamente em tudo que precisamos do sistema! A pessoa que nos atende João Vitor super educado e sempre rápido."),
    ("Sirleia Moreira", 5, "Sistema muito fácil de trabalhar e eles dão ótima assistência."),
    ("Claudiele Castro", 5, "Sistema muito bom. Aprovado. Técnico João Victor nos atende com extrema qualidade e paciência."),
]

# Estrela branca de pontas redondas (caderno de marca); a apagada é só contorno
ESTRELA = ('<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.2l2.6 5.5 6 .8-4.4 4.1 1.1 5.9L12 16.6l-5.3 2.9 1.1-5.9L3.4 9.5l6-.8z" '
           'fill="{f}" stroke="#FFFFFF" stroke-width="2.2" stroke-linejoin="round"/></svg>')


def estrelas(n):
    return ESTRELA.format(f="#FFFFFF") * n + ESTRELA.format(f="none") * (5 - n)


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
        f'<figure class="cit"><span class="estrelas" role="img" aria-label="{n} de 5 estrelas">{estrelas(n)}</span>'
        f'<blockquote>{html.escape(t)}</blockquote><figcaption>{html.escape(nome)}</figcaption></figure>'
        for nome, n, t in DEPOS)


def main(imgs, saida):
    img = json.loads(Path(imgs).read_text())
    s = (AQUI / "linknabio.tpl.html").read_text(encoding="utf-8")
    troca = {"links": links(), "depos": depos(), "wa": WA, "lp_farmacia": LP_FARMACIA, "lp_padaria": LP_PADARIA, **img}
    for k, v in troca.items():
        s = s.replace("{{" + k + "}}", v)
    assert "{{" not in s, "marcador sem valor"
    Path(saida).write_text(s, encoding="utf-8")


if __name__ == "__main__":
    main(*sys.argv[1:3])
