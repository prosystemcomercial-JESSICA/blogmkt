# Prepara as telas reais do Prosystem para uso em marketing: baixa da base de conhecimento,
# recorta o trecho que importa e remove CNPJ, marcas de medicamento e amarelo. Os dados das telas são fictícios.
# Uso (na raiz do projeto):  python -I outputs/criativos/funcoes-prosystem/preparar_telas.py
# Saída: banco imagens/telas-prosystem/*.png  (originais em _originais/, fora do git)
import pathlib
import urllib.request

from PIL import Image, ImageDraw, ImageFilter, ImageFont

RAIZ = pathlib.Path(__file__).resolve().parents[3]
DESTINO = RAIZ / "banco imagens" / "telas-prosystem"
ORIGINAIS = DESTINO / "_originais"
BASE = "https://universidade.prosystemnet.com/kb/imagens/"
ARIAL = "C:/Windows/Fonts/arial.ttf"


def original(nome):
    ORIGINAIS.mkdir(parents=True, exist_ok=True)
    p = ORIGINAIS / nome
    if not p.exists():
        pedido = urllib.request.Request(BASE + nome, headers={"User-Agent": "Mozilla/5.0"})
        p.write_bytes(urllib.request.urlopen(pedido, timeout=40).read())
    return Image.open(p).convert("RGB")


def cobrir(im, caixa, cor="white"):
    ImageDraw.Draw(im).rectangle(caixa, fill=cor)


def borrar(im, caixa, raio=7):
    trecho = im.crop(caixa).filter(ImageFilter.GaussianBlur(raio))
    im.paste(trecho, caixa[:2])


def salvar(im, nome, escala=1):
    if escala != 1:
        im = im.resize((im.width * escala, im.height * escala), Image.LANCZOS)
    DESTINO.mkdir(parents=True, exist_ok=True)
    im.save(DESTINO / f"{nome}.png", optimize=True)
    print(nome, im.size)


def empilhar(trechos, fundo):
    largura = max(t.width for t in trechos)
    saida = Image.new("RGB", (largura, sum(t.height for t in trechos)), fundo)
    y = 0
    for t in trechos:
        saida.paste(t, (0, y))
        y += t.height
    return saida


# ---------- uso contínuo ----------
im = original("8d99c0e6c87e07f3.png")
cobrir(im, (316, 340, 530, 362))              # marca do fabricante
cobrir(im, (0, 505, 856, 767))                # o que aparece atrás do aviso
cobrir(im, (966, 0, 1027, 500))
salvar(im.crop((63, 260, 1012, 556)), "uso-continuo-alerta")

im = original("683c55d04974955e.jpg")
cobrir(im, (15, 333, 371, 350))               # nome comercial vira princípio ativo
ImageDraw.Draw(im).text((18, 334), "CAPTOPRIL 25MG CX 30 COMP", fill="black", font=ImageFont.truetype(ARIAL, 13))
salvar(im.crop((4, 310, 386, 424)), "uso-continuo-proxima-compra", 2)

im = original("aa06887080574788.png")
salvar(im.crop((0, 0, 382, 176)), "uso-continuo-relatorio", 2)

# ---------- perda de vendas ----------
im = original("553479c43cf33f9d.png")
cobrir(im, (0, 542, 795, 669))                # o que aparece atrás do aviso
cobrir(im, (903, 298, 1024, 538))
salvar(im.crop((0, 298, 1024, 669)), "perda-vendas-motivo")

im = original("c78b09cfc1ea0b32.png")
borrar(im, (18, 55, 215, 160))                # marcas de medicamento
salvar(im.crop((0, 12, 478, 205)), "perda-vendas-lista", 2)

im = original("df0de257e30e5594.png")
pix = im.load()
for x in range(im.width):                     # o amarelo é proibido na marca: a fatia vira azul-acinzentado
    for y in range(im.height):
        r, g, b = pix[x, y]
        if r > 180 and g > 170 and b < 150 and abs(r - g) < 45:
            pix[x, y] = (126, 164, 208)
salvar(im, "perda-vendas-painel")

# ---------- sangria ----------
salvar(original("605f01640e271a67.png").crop((65, 270, 965, 496)), "sangria-aviso")
salvar(original("de5c738269276638.png").crop((65, 270, 965, 496)), "sangria-bloqueio")
salvar(original("706528ee2feaf230.png"), "sangria-registro", 2)

# ---------- avisos por WhatsApp ----------
im = original("44d77a8722f75912.jpg")
BOLHA = im.getpixel((800, 300))
salvar(empilhar([im.crop((0, 190, 854, 490)), im.crop((0, 1070, 854, 1965))], BOLHA), "whats-fechamento")

im = original("b1c80b585f90c7b0.jpg")
BOLHA = im.getpixel((740, 300))
salvar(empilhar([im.crop((0, 180, 762, 262)), im.crop((0, 940, 762, 1332))], BOLHA), "whats-contas")

salvar(original("e71f28f2e8c910e1.png").crop((0, 170, 829, 441)), "whats-desconto")
salvar(original("76bbe87c9febe582.png").crop((8, 112, 585, 440)), "whats-config", 2)

# ---------- painel de indicadores (interface mais atual; cita "Drogaria Modelo", só para farmácia) ----------
salvar(empilhar([original("f44597f9a26fa7cf.png"), original("f60cd09e3a01d4c1.png").resize((1203, 484), Image.LANCZOS)], "white"), "painel-vendas")
salvar(empilhar([original("6faecc1984e153ad.jpg")], "white"), "painel-estoque")
salvar(empilhar([original("9067ea1a576ad72a.jpg"), original("fdf655104d140f5d.png").resize((1204, 473), Image.LANCZOS)], "white"), "painel-delivery")

# ---------- telas do feed de editoriais ----------
im = original("97975ce09fd8f3aa.jpg")
borrar(im, (8, 88, 108, 176), 5)             # nome da impressora
salvar(im, "receitas-scanner", 2)

salvar(original("378d7b36fce91d9d.png"), "dias-sem-giro", 2)
salvar(original("680e42701a95903a.png"), "fechamento-caixa", 2)
salvar(original("51e296e06aeb12ba.png"), "precificacao", 2)
salvar(original("5421b2a3852a604a.png"), "curva-abc", 2)
