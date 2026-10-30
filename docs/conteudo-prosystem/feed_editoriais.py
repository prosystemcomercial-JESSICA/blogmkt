# Simulação do feed do Instagram com os editoriais propostos.
# Uso (na raiz do projeto): python -I docs/conteudo-prosystem/feed_editoriais.py
# Lê feed_modelo.html, embute as imagens e gera feed-editoriais.html (um arquivo só, para abrir ou enviar).
# As telas entram sem aparelho: os mockups de notebook e desktop são feitos pela Jessica.
import base64
import io
import json
import pathlib
import re

from PIL import Image, ImageFilter

AQUI = pathlib.Path(__file__).resolve().parent
RAIZ = AQUI.parents[1]
RECORTES = RAIZ / "banco imagens" / "telas-para-mockup" / "00-recortadas"
FOTOS = RAIZ / "outputs" / "criativos" / "modelos" / "carrossel" / "fotos"
LOGOS = RAIZ / "docs" / "design" / "guia-de-estilos" / "assets"

TELAS = {n: RECORTES / f"{n}.png" for n in [
    "painel-estoque", "painel-vendas", "perda-vendas-motivo", "sangria-aviso", "sangria-bloqueio", "sangria-registro",
    "uso-continuo-alerta", "uso-continuo-proxima-compra", "uso-continuo-relatorio", "whats-fechamento", "whats-desconto",
    "receitas-scanner", "dias-sem-giro", "fechamento-caixa", "precificacao", "curva-abc",
]}
OUTRAS = {n: FOTOS / f"{n}.jpg" for n in [
    "prateleiras-escuras", "farmaceutica-prateleira", "calculadora", "farinha-trigo",
    "paes-grade", "forno", "sovando-massa", "maos-massa", "paes-prateleira", "carrinho-paes",
]}
OUTRAS["depoimento-paulo"] = RAIZ / "outputs" / "criativos" / "depoimentos" / "depoimento-paulo-v2.png"


# Fotos com rótulo legível: a prateleira é desfocada e a farmacêutica é cortada antes da caixa com texto em inglês.
AJUSTE = {
    "prateleiras-escuras": lambda im: im.filter(ImageFilter.GaussianBlur(im.width / 220)),
    "farmaceutica-prateleira": lambda im: im.crop((0, 0, round(im.width * 0.70), im.height)),
}


def jpg(caminho, largura, qualidade):
    im = Image.open(caminho).convert("RGB")
    im = AJUSTE.get(caminho.stem, lambda x: x)(im)
    if im.width > largura:
        im = im.resize((largura, round(im.height * largura / im.width)), Image.LANCZOS)
    saida = io.BytesIO()
    im.save(saida, "JPEG", quality=qualidade, optimize=True)
    return "data:image/jpeg;base64," + base64.b64encode(saida.getvalue()).decode(), im.width / im.height


def png(caminho, largura):
    im = Image.open(caminho).convert("RGBA")
    im = im.resize((largura, round(im.height * largura / im.width)), Image.LANCZOS)
    saida = io.BytesIO()
    im.save(saida, "PNG", optimize=True)
    return "data:image/png;base64," + base64.b64encode(saida.getvalue()).decode()


imagens, proporcao = {}, {}
for nome, caminho in TELAS.items():
    imagens[nome], proporcao[nome] = jpg(caminho, 1000, 82)
for nome, caminho in OUTRAS.items():
    imagens[nome], proporcao[nome] = jpg(caminho, 800, 68)
imagens["logo-light"] = png(LOGOS / "logo-light.png", 420)
imagens["logo-dark"] = png(LOGOS / "logo-dark.png", 420)

modelo = (AQUI / "feed_modelo.html").read_text(encoding="utf-8")
# "92U" no modelo significa 92px da peça de 1080×1350, em qualquer tamanho de tela.
modelo = re.sub(r"(?<![\w#.$-])(-?\d+(?:\.\d+)?)U\b", r"calc(\1*var(--u))", modelo)
saida = modelo.replace("/*__IMAGENS__*/{}", json.dumps(imagens)).replace("/*__PROPORCAO__*/{}", json.dumps(proporcao))
destino = AQUI / "feed-editoriais.html"
destino.write_text(saida, encoding="utf-8")
print(destino.name, round(destino.stat().st_size / 1024 / 1024, 2), "MB")
