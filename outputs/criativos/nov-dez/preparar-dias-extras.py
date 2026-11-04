# Prepara fotos e telas das peças que completam o feed com um post por dia (pedido de 04/11/2026).
# As fotos novas do Wikimedia Commons ficam em fotos/_originais (baixadas em 04/11/2026; créditos em fotos/CREDITOS.md).
# Uso (na raiz do projeto): python -I outputs/criativos/nov-dez/preparar-dias-extras.py
import pathlib

from PIL import Image, ImageDraw, ImageFilter

AQUI = pathlib.Path(__file__).resolve().parent
RAIZ = AQUI.parents[2]
ORIG = AQUI / "fotos" / "_originais"
FOTOS = AQUI / "fotos"
BANCO = RAIZ / "banco imagens"
TELAS = BANCO / "telas-para-mockup"
MODELOS = RAIZ / "outputs" / "criativos" / "modelos" / "carrossel" / "fotos"


def salvar(im, nome, largura=2000):
    im = im.convert("RGB")
    if im.width > largura:
        im = im.resize((largura, round(im.height * largura / im.width)), Image.LANCZOS)
    im.save(FOTOS / f"{nome}.jpg", quality=88)


def borrar(im, caixas, raio):
    """Desfoca só as caixas (frações da imagem), com borda suave."""
    borrada = im.filter(ImageFilter.GaussianBlur(raio))
    mascara = Image.new("L", im.size, 0)
    pincel = ImageDraw.Draw(mascara)
    for x0, y0, x1, y1 in caixas:
        pincel.rectangle((round(im.width * x0), round(im.height * y0), round(im.width * x1), round(im.height * y1)), fill=255)
    mascara = mascara.filter(ImageFilter.GaussianBlur(raio))
    return Image.composite(borrada, im, mascara)


# Fotos novas, usadas inteiras.
for nome in ("pao-frances", "paes-forma-prateleira", "paes-assadeira", "forno-pa", "panetone-grade"):
    salvar(Image.open(ORIG / f"{nome}.jpg"), nome)

# Farmacêutico no computador: os frascos ao fundo têm rótulo em inglês. A estante é desfocada.
im = Image.open(ORIG / "farmaceutico-computador.jpg").convert("RGB")
salvar(borrar(im, [(0.38, 0.0, 0.70, 0.30), (0.70, 0.0, 1.0, 0.13), (0.93, 0.13, 1.0, 1.0)], im.width / 160), "farmaceutico-computador")

# Corredor de farmácia: rótulos em inglês nas prateleiras. A foto inteira é levemente desfocada.
im = Image.open(ORIG / "farmacia-corredor.jpg").convert("RGB")
salvar(im.filter(ImageFilter.GaussianBlur(im.width / 260)), "farmacia-corredor")

# Conferindo o frasco: o rótulo está em inglês. Só o rótulo é desfocado.
im = Image.open(MODELOS / "conferindo-frasco.jpg").convert("RGB")
salvar(borrar(im, [(0.52, 0.2, 0.82, 0.5)], im.width / 70), "conferindo-frasco-sem-rotulo")

# Banco local da padaria: rolos de massa na assadeira e padeiros com bandejas.
salvar(Image.open(next((BANCO / "padaria").glob("centraliza*-1.jpg"))), "rolos-bandeja")
salvar(Image.open(BANCO / "padaria" / "padeiros-padaria.jpg"), "padeiros-padaria")

# Telas.
# Metas: só as três primeiras linhas, por subgrupo. As duas de baixo trazem nomes de fabricante.
im = Image.open(TELAS / "17-equipe-metas-e-ponto" / "melhor-db599e1a.png").convert("RGB")
im.crop((8, 34, 800, 110)).save(AQUI / "telas" / "metas-subgrupo.png")

# Painel de indicadores: só os cartões de totais, sem o filtro com "Drogaria Modelo" e o CNPJ.
im = Image.open(TELAS / "00-recortadas" / "painel-vendas.png").convert("RGB")
im.crop((205, 178, 950, 350)).save(AQUI / "telas" / "painel-totais.png")

# Fidelimax: a caixa de confirmação de pontos, ampliada 2x para não perder nitidez na peça.
im = Image.open(TELAS / "16-fidelidade" / "melhor-cebc537b.png").convert("RGB")
im.resize((im.width * 2, im.height * 2), Image.LANCZOS).save(AQUI / "telas" / "fidelimax-pontos.png")
print("ok")
