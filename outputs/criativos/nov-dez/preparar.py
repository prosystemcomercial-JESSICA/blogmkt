# Prepara fotos e telas das peças de 04/11/2026 a 22/01/2027.
# Uso (na raiz do projeto): python -I outputs/criativos/nov-dez/preparar.py
import pathlib

from PIL import Image, ImageDraw, ImageFilter

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

# Pães na prateleira: as etiquetas estão em grego, com preço em euro. As duas faixas são desfocadas.
im = Image.open(FOTOS / "paes-prateleira.jpg").convert("RGB")
borrada = im.filter(ImageFilter.GaussianBlur(im.width / 60))
mascara = Image.new("L", im.size, 0)
pincel = ImageDraw.Draw(mascara)
for topo, base in ((0.52, 0.61), (0.92, 1.0)):
    pincel.rectangle((0, round(im.height * topo), im.width, round(im.height * base)), fill=255)
mascara = mascara.filter(ImageFilter.GaussianBlur(im.height / 45))
Image.composite(borrada, im, mascara).save(AQUI / "fotos" / "paes-prateleira-sem-etiqueta.jpg", quality=88)

# Análise de descontos: só a parte preenchida da tabela, sem nomes de produto.
im = Image.open(TELAS / "06-analise-de-descontos-e-rentabilidade" / "melhor-504e4117.png").convert("RGB")
im.crop((0, 0, im.width, 345)).save(AQUI / "telas" / "analise-descontos.png")

# Combos: só os totais da venda. O resto da tela tem marca de produto e imagem de farmácia, proibidas em padaria.
im = Image.open(TELAS / "15-combos-tabloides-e-precificacao" / "melhor-2bb69b83.png").convert("RGB")
im.crop((375, 420, im.width, 452)).save(AQUI / "telas" / "combo-totais.png")
# Atenção farmacêutica: só as respostas da ficha de exemplo, sem nome, foto e contato.
im = Image.open(TELAS / "21-atencao-farmaceutica" / "melhor-24f88350.png").convert("RGB")
im.crop((22, 280, 408, 582)).save(AQUI / "telas" / "atencao-anamnese.png")

# Rentabilidade: a lista de relatórios, que não cita farmácia.
Image.open(TELAS / "06-analise-de-descontos-e-rentabilidade" / "be9b7ef9.png").convert("RGB").save(AQUI / "telas" / "rentabilidade-relatorio.png")

# Delivery: sem a linha de filtro, que traz "Drogaria Modelo" e o CNPJ. A peça é de padaria.
im = Image.open(TELAS / "00-recortadas" / "painel-delivery.png").convert("RGB")
im.crop((0, 172, im.width, im.height)).save(AQUI / "telas" / "painel-entregas.png")
print("ok")
