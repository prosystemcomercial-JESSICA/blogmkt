# Uso (a partir da pasta blog/):  python _gerador/gerar.py
# Gera blog/<slug>.html e blog/assets/images/og-<slug>.jpg para cada artigo em _gerador/artigos/.
import importlib.util
import pathlib
import re
import sys

AQUI = pathlib.Path(__file__).resolve().parent
BLOG = AQUI.parent
sys.path.insert(0, str(AQUI))
import base  # noqa: E402

# Usa o mesmo sprite de ícones do artigo de referência (Simples Nacional)
ref = (BLOG / "simples-nacional-2027-prazo-opcao-ibs-cbs-farmacia-padaria.html").read_text(encoding="utf-8")
base.SPRITE = re.search(r'<svg width="0" height="0".*?</svg>', ref, re.S).group(0)

OBRIGATORIOS = ["slug", "titulo_tag", "descricao", "og_titulo", "og_desc", "og_linhas", "chamada", "secao", "trilha",
                "h1", "linha_fina", "minutos", "keywords", "whats", "barra", "cta_lateral", "resumo", "toc", "corpo",
                "faq", "fontes", "relacionados"]

gerados = []
for arq in sorted((AQUI / "artigos").glob("a*.py")):
    spec = importlib.util.spec_from_file_location(arq.stem, arq)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    a = mod.ARTIGO
    faltando = [k for k in OBRIGATORIOS if k not in a]
    if faltando:
        raise SystemExit(f"{arq.name}: faltam campos {faltando}")
    (BLOG / f"{a['slug']}.html").write_text(base.render(a), encoding="utf-8")
    base.og_image(a, str(BLOG / "assets" / "images" / f"og-{a['slug']}.jpg"))
    gerados.append(a["slug"])

print("\n".join(gerados))
