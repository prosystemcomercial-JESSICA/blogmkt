# Converte as peças PNG em JPEG (a API do Instagram só aceita JPEG) e grava em instagram/midia/.
# Uso: python instagram/preparar.py outputs/criativos/nov-dez/pecas/carrossel-padaria-reforma-tributaria-v2-*.png
import sys
from pathlib import Path

from PIL import Image

destino = Path(__file__).parent / 'midia'
destino.mkdir(exist_ok=True)
for arq in sys.argv[1:]:
    origem = Path(arq)
    saida = destino / (origem.stem + '.jpg')
    Image.open(origem).convert('RGB').save(saida, 'JPEG', quality=92, optimize=True)
    print(saida.as_posix())
