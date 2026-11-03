"""Prepara as páginas montadas (link na bio e LPs) para o plugin prosystem-blog.

Para cada página: tira <title> e a descrição (quem cuida é o Yoast), troca as imagens em base64 por
arquivos webp/png em paginas/<slug>/img/ e grava paginas/<slug>/corpo.html. O plugin serve esse corpo
dentro de um documento com wp_head() e wp_footer(), para manter Pixel, Clarity e Yoast.
Uso: python site/publicar_paginas.py   (depois de montar as páginas)
"""
import base64, hashlib, re, shutil
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
PLUGIN = RAIZ / "blog" / "_gerador" / "wp" / "prosystem-blog"
URL_PLUGIN = "https://prosystemnet.com/wp-content/plugins/prosystem-blog"
PAGINAS = {  # slug no WordPress: página montada
    "linknabio": RAIZ / "site" / "linknabio" / "previa.html",
    "sistema-para-farmacia": RAIZ / "site" / "lp" / "farmacia.html",
    "sistema-para-padaria": RAIZ / "site" / "lp" / "padaria.html",
}
EXT = {"webp": "webp", "png": "png", "jpeg": "jpg"}


def preparar(slug, origem):
    s = origem.read_text(encoding="utf-8")
    s = re.sub(r"<title>.*?</title>\s*", "", s, count=1, flags=re.S)
    s = re.sub(r'<meta name="description"[^>]*>\s*', "", s, count=1)
    s = re.sub(r'<meta name="claude:[^"]+"[^>]*>\s*', "", s)
    destino = PLUGIN / "paginas" / slug
    if destino.exists():
        shutil.rmtree(destino)
    (destino / "img").mkdir(parents=True)

    def troca(m):
        tipo, dados = m.group(1), m.group(2)
        bruto = base64.b64decode(dados)
        nome = hashlib.sha1(bruto).hexdigest()[:12] + "." + EXT[tipo]
        (destino / "img" / nome).write_bytes(bruto)
        return f"{URL_PLUGIN}/paginas/{slug}/img/{nome}"

    s = re.sub(r"data:image/(webp|png|jpeg);base64,([A-Za-z0-9+/=]+)", troca, s)
    (destino / "corpo.html").write_text(s, encoding="utf-8")
    pesos = sum(f.stat().st_size for f in (destino / "img").iterdir())
    print(f"{slug}: corpo {len(s) // 1024} KB, {len(list((destino / 'img').iterdir()))} imagens, {pesos // 1024} KB")


if __name__ == "__main__":
    for slug, origem in PAGINAS.items():
        preparar(slug, origem)
