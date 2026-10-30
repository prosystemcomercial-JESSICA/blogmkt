# Prepara fotos e telas das peças de 04/11 a 31/12/2026.
# Uso (na raiz do projeto): python -I outputs/criativos/nov-dez/preparar.py
import pathlib

from PIL import Image, ImageFilter

AQUI = pathlib.Path(__file__).resolve().parent
RAIZ = AQUI.parents[2]
FOTOS = RAIZ / "outputs" / "criativos" / "modelos" / "carrossel" / "fotos"
TELAS = RAIZ / "banco imagens" / "telas-para-mockup"

(AQUI / "fotos").mkdir(exist_ok=True)
(AQUI / "telas").mkdir(exist_ok=True)
(AQUI / "mockups").mkdir(exist_ok=True)

# Prateleira desfocada: as caixas têm marcas de medicamento legíveis.
im = Image.open(FOTOS / "prateleiras-escuras.jpg").convert("RGB")
im.filter(ImageFilter.GaussianBlur(im.width / 220)).save(AQUI / "fotos" / "prateleiras-desfocadas.jpg", quality=86)

# Farmacêutica cortada antes da caixa com texto em inglês.
im = Image.open(FOTOS / "farmaceutica-prateleira.jpg").convert("RGB")
im.crop((0, 0, round(im.width * 0.70), im.height)).save(AQUI / "fotos" / "farmaceutica-recorte.jpg", quality=88)

# Análise de descontos: só a parte preenchida da tabela, sem nomes de produto.
im = Image.open(TELAS / "06-analise-de-descontos-e-rentabilidade" / "melhor-504e4117.png").convert("RGB")
im.crop((0, 0, im.width, 345)).save(AQUI / "telas" / "analise-descontos.png")

# Combos: só os totais da venda. O resto da tela tem marca de produto e imagem de farmácia, proibidas em padaria.
im = Image.open(TELAS / "15-combos-tabloides-e-precificacao" / "melhor-2bb69b83.png").convert("RGB")
im.crop((0, 420, im.width, 452)).save(AQUI / "telas" / "combo-totais.png")
print("ok")
