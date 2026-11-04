# Prepara as fotos do Wikimedia Commons usadas nas peças "farmácia dentro do supermercado" (04/11/2026).
# Originais em fotos/_originais/. Desfoca letreiros, marcas e rótulos e tira o amarelo forte das placas,
# porque o caderno proíbe amarelo e texto legível de terceiros.
# Uso: python -I outputs/criativos/farmacia-supermercado/preparar.py
import pathlib
from PIL import Image, ImageFilter, ImageDraw

AQUI = pathlib.Path(__file__).resolve().parent
ORIG = AQUI / "fotos" / "_originais"
SAIDA = AQUI / "fotos"


def sem_amarelo(im, forca=0.85):
    """Tira a saturação dos tons de amarelo e laranja-claro (matiz de 25° a 70°)."""
    hsv = im.convert("HSV")
    h, s, v = hsv.split()
    hp, sp = h.load(), s.load()
    for y in range(im.height):
        for x in range(im.width):
            if 18 <= hp[x, y] <= 50:
                sp[x, y] = int(sp[x, y] * (1 - forca))
    return Image.merge("HSV", (h, s, v)).convert("RGB")


def desfoca(im, caixa, raio):
    """Desfoca só uma região, com borda suave. caixa em frações da imagem (x0, y0, x1, y1)."""
    w, h = im.size
    x0, y0, x1, y1 = (int(caixa[0] * w), int(caixa[1] * h), int(caixa[2] * w), int(caixa[3] * h))
    borrada = im.filter(ImageFilter.GaussianBlur(raio))
    mascara = Image.new("L", im.size, 0)
    ImageDraw.Draw(mascara).rectangle((x0, y0, x1, y1), fill=255)
    mascara = mascara.filter(ImageFilter.GaussianBlur(raio * 2))
    return Image.composite(borrada, im, mascara)


def salvar(im, nome, largura=1600):
    if im.width > largura:
        im = im.resize((largura, round(im.height * largura / im.width)), Image.LANCZOS)
    im.save(SAIDA / f"{nome}.jpg", quality=88)
    print(nome, im.size)


# Caixas do supermercado: corte no lado direito, onde estão os caixas; tudo levemente desfocado
# e as placas com a marca da rede bem desfocadas.
im = sem_amarelo(Image.open(ORIG / "mercado-caixas.jpg").convert("RGB"))
w, h = im.size
im = im.crop((int(w * 0.30), int(h * 0.30), w, h))
im = desfoca(im, (0, 0, 1, 0.36), 20)
im = im.filter(ImageFilter.GaussianBlur(4))
salvar(im, "mercado-caixas")

# Carrinho: os pacotes dentro dele e o adesivo do chão desfocados.
im = sem_amarelo(Image.open(ORIG / "carrinho-compras.jpg").convert("RGB"))
im = desfoca(im, (0.30, 0.28, 0.82, 0.78), 26)
im = desfoca(im, (0.82, 0.30, 1, 0.55), 26)
salvar(im, "carrinho-compras")

# Corredor com seta no chão: o alto (pessoas, preços e placas) desfocado.
im = sem_amarelo(Image.open(ORIG / "corredor-seta.jpg").convert("RGB"))
im = desfoca(im, (0, 0, 1, 0.33), 24)
salvar(im, "corredor-seta", largura=1200)
