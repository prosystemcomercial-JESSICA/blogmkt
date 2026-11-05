"""Gera destaques.html: guia visual de todos os destaques (capas, stories, datas, situação e passo a passo).
Lê instagram/agenda.json. As miniaturas (p/*.jpg) são copiadas do artifact dos destaques na publicação."""
import json, datetime
from pathlib import Path

RAIZ = Path(__file__).resolve().parents[4]
RAW = "https://raw.githubusercontent.com/prosystemcomercial-JESSICA/blogmkt/main/outputs/criativos/destaques/"
GUIA_LINK = "https://claude.ai/artifact/AspHixJMaVMQ1NTVLQ6QFy"
DIAS = ["seg", "ter", "qua", "qui", "sex", "sáb", "dom"]

GRUPOS = [
    ("quem-somos", "Quem somos", "Usa o destaque Quem somos que já existe. A sequência inteira sai em 05/11. O antigo Quem Somos? pode sair depois."),
    ("segmentos", "Segmentos", "No destaque Nossos Nichos, troque a capa e mude o nome para Segmentos."),
    ("ferramentas", "Ferramentas", "Usa o destaque Ferramentas que já existe. São 33 stories, na ordem do dia da loja."),
    ("integracoes", "Integrações", "Usa o destaque Integrações que já existe."),
    ("suporte", "Suporte", "Destaque novo. Em 12/11, ao destacar o story 1, toque em Novo e dê o nome Suporte. Depois, troque a capa."),
    ("depoimentos", "Depoimentos", "Usa o destaque Depoimentos que já existe."),
    ("contato", "Contato", "No destaque Redes Sociais, troque a capa e mude o nome para Contato. Os 3 stories já foram postados em 04/11."),
]
SITU = {"publicado": ("Publicado", "pub"), "agendado": ("API posta", "api"), "manual": ("Você posta", "voce")}

agenda = json.loads((RAIZ / "instagram/agenda.json").read_text(encoding="utf-8"))
dest = [e for e in agenda if e["id"].startswith("destaque-")]

def num(e):
    return int(e["id"].rsplit("-", 1)[1])

capas, secoes, totais = "", "", {"publicado": 0, "agendado": 0, "manual": 0}
for k, nome, nota in GRUPOS:
    itens = sorted([e for e in dest if e["id"].startswith(f"destaque-{k}-v1-")], key=num)
    pub = sum(e["status"] == "publicado" for e in itens)
    capas += f'<a class="bola" href="#{k}"><img src="p/capa-{k}-v1.jpg" alt="" width="180" height="180"><b>{nome}</b><small>{pub} de {len(itens)}</small></a>'
    cards = ""
    for e in itens:
        totais[e["status"]] += 1
        q = datetime.datetime.fromisoformat(e["quando"])
        rot, cls = SITU[e["status"]]
        video = e["midias"][0].endswith(".mp4")
        if e["status"] == "publicado" and e.get("publicado_em", "")[:10] == "2026-11-04":
            quando = "04/11/2026"
            hora = ""
        else:
            quando = f"{q:%d/%m/%Y} · {DIAS[q.weekday()]}"
            hora = f"{q.hour}h" + (f"{q.minute:02d}" if q.minute else "")
        extra = f'<a class="mini" href="{GUIA_LINK}" target="_blank" rel="noopener">Link e arquivo</a>' if e["status"] == "manual" else ""
        cards += (f'<figure class="st {cls}"><a href="https://raw.githubusercontent.com/prosystemcomercial-JESSICA/blogmkt/main/{e["midias"][0]}" target="_blank" rel="noopener" title="Abrir em tamanho real"><img src="p/destaque-{k}-v1-{num(e)}.jpg" alt="Story {num(e)} de {nome}" loading="lazy" width="540" height="960"></a>'
                  f'<figcaption><div class="l1"><span class="n">{num(e)}</span>{"<i>vídeo</i>" if video else ""}<b class="tag {cls}">{rot}</b></div>'
                  f'<div class="l2">{quando}{" · " + hora if hora else ""}</div>{extra}</figcaption></figure>')
    secoes += f'''<section class="grupo" id="{k}"><header><a href="{RAW}capas/capa-{k}-v1.png" target="_blank" rel="noopener" title="Abrir capa para salvar"><img src="p/capa-{k}-v1.jpg" alt="Capa {nome}" width="180" height="180"></a>
<div><h2>{nome}</h2><p>{nota}</p><p class="cont">{len(itens)} stories · {pub} publicado{"s" if pub != 1 else ""} · <a href="{RAW}capas/capa-{k}-v1.png" target="_blank" rel="noopener">salvar capa</a></p></div></header>
<div class="fila">{cards}</div></section>'''

CSS = """
:root{--fundo:#F3F7FC;--cartao:#fff;--tinta:#081330;--apoio:#4A5A75;--linha:#D9E4F2;--suave:#E8F1FB;--azul:#2E6DB4;--ciano:#38C8F8;--laranja:#F88818;--ok:#1F8A5B;--grad:linear-gradient(155deg,#2E6DB4 0%,#417ABC 48%,#3898D8 78%,#38C8F8 100%);--f:'Montserrat',Arial,sans-serif}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--fundo:#071022;--cartao:#0E1B36;--tinta:#EAF2FC;--apoio:#9FB3D1;--linha:#1F3156;--suave:#13264A;--ok:#4CC38A;color-scheme:dark}}
:root[data-theme="dark"]{--fundo:#071022;--cartao:#0E1B36;--tinta:#EAF2FC;--apoio:#9FB3D1;--linha:#1F3156;--suave:#13264A;--ok:#4CC38A;color-scheme:dark}
*{box-sizing:border-box}body{margin:0;background:var(--fundo);color:var(--tinta);font-family:var(--f);font-size:16px;line-height:1.5}
a{color:var(--azul)}
.in{max-width:1180px;margin:0 auto;padding:0 16px}
.topo{background:var(--grad);color:#fff}.topo .in{padding-block:38px 26px;display:flex;flex-direction:column;gap:10px}
.topo small{font-size:13px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;opacity:.85}
h1{margin:0;font-size:clamp(30px,5vw,48px);font-weight:300;line-height:1.05}h1 b{font-weight:800}.topo p{margin:0;max-width:64ch;font-weight:500}
.nums{display:flex;flex-wrap:wrap;gap:10px}.nums span{background:rgba(255,255,255,.16);border:1.5px solid rgba(255,255,255,.6);border-radius:99px;padding:6px 14px;font-size:14px;font-weight:700}
.perfil{display:flex;gap:18px;overflow-x:auto;padding:22px 0 6px}
.bola{flex:none;width:96px;display:flex;flex-direction:column;align-items:center;gap:4px;color:#fff;text-decoration:none;text-align:center}
.bola img{width:84px;height:84px;border-radius:50%;padding:3px;background:#fff;transition:transform .2s}.bola:hover img{transform:scale(1.06)}
.bola b{font-size:13px}.bola small{font-size:11px;opacity:.85;font-weight:700}
main{display:flex;flex-direction:column;gap:44px;padding-block:30px 70px}
h2{margin:0;font-size:24px;font-weight:800}
.guia{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:16px}
.passo{background:var(--cartao);border:1px solid var(--linha);border-radius:18px;padding:18px;display:flex;flex-direction:column;gap:8px}
.passo h3{margin:0;font-size:17px;font-weight:800;display:flex;align-items:center;gap:10px}
.passo ol{margin:0;padding-left:20px;color:var(--apoio);display:flex;flex-direction:column;gap:4px;font-size:15px}.passo ol b{color:var(--tinta)}
.grupo{display:flex;flex-direction:column;gap:16px;scroll-margin-top:16px}
.grupo header{display:flex;gap:18px;align-items:center}.grupo header img{width:76px;height:76px;border-radius:50%;flex:none;box-shadow:0 0 0 3px var(--cartao),0 0 0 5px var(--linha)}
.grupo header p{margin:2px 0 0;color:var(--apoio);font-size:15px;max-width:72ch}.grupo header .cont{font-weight:700;font-size:13px}
.fila{display:flex;gap:14px;overflow-x:auto;padding-bottom:10px;scroll-snap-type:x proximity}
.st{flex:none;margin:0;width:min(200px,46vw);scroll-snap-align:start;display:flex;flex-direction:column;gap:7px}
.st img{width:100%;height:auto;aspect-ratio:9/16;object-fit:cover;border-radius:12px;display:block;background:var(--linha);box-shadow:0 8px 22px rgba(8,19,48,.14)}
.st.pub img{opacity:.55}
.l1{display:flex;align-items:center;gap:6px;flex-wrap:wrap}.n{font-weight:800;font-size:15px}.l1 i{font-style:normal;font-size:11px;font-weight:700;color:var(--azul)}
.l2{font-size:12px;color:var(--apoio);font-weight:700;font-variant-numeric:tabular-nums}
.tag{font-size:10.5px;font-weight:800;padding:2px 8px;border-radius:99px;text-transform:uppercase;letter-spacing:.04em}
.tag.pub{background:var(--ok);color:#fff}.tag.api{background:var(--suave);color:var(--azul)}.tag.voce{background:var(--laranja);color:#081330}
.mini{font-size:12px;font-weight:800;text-decoration:none;border:1.5px solid var(--laranja);color:var(--tinta);border-radius:8px;padding:4px 8px;text-align:center}
a:focus-visible{outline:3px solid var(--ciano);outline-offset:2px}
@media (prefers-reduced-motion:reduce){.bola img{transition:none}}
"""

hoje = datetime.date.today().strftime("%d/%m/%Y")
html = f'''<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Destaques do Instagram</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700;800&display=swap">
<style>{CSS}</style></head><body>
<header class="topo"><div class="in"><small>Instagram · @prosystemoficial · situação em {hoje}</small>
<h1>Todos os <b>destaques</b></h1>
<p>São 7 destaques e 55 stories, de 04/11/2026 a 15/04/2027. Toque numa capa para ir ao destaque. Os stories esmaecidos já foram publicados. Toque num story para abrir em tamanho real.</p>
<div class="nums"><span>{totais["publicado"]} publicados</span><span>{totais["agendado"]} a API posta</span><span>{totais["manual"]} você posta</span></div>
<nav class="perfil" aria-label="Capas">{capas}</nav></div></header>
<main class="in">
<section class="grupo"><h2>Guia de postagem</h2><div class="guia">
<div class="passo"><h3><b class="tag api">API posta</b> Só destacar</h3><ol><li>A API publica o story no horário (quase sempre às 10h).</li><li>Abra o seu story e toque em <b>Destacar</b> (o coração, embaixo).</li><li>Escolha o destaque. Pronto.</li></ol></div>
<div class="passo"><h3><b class="tag voce">Você posta</b> Story com link</h3><ol><li>Abra o <a href="{GUIA_LINK}" target="_blank" rel="noopener">guia dos stories com link</a> e salve o arquivo.</li><li>Poste pelo app e coloque a <b>figurinha de link</b> na faixa livre abaixo de "Toque no link".</li><li>Depois de publicar, toque em <b>Destacar</b>.</li></ol></div>
<div class="passo"><h3>Capas e nomes</h3><ol><li>Toque em <b>salvar capa</b> no destaque e guarde a imagem no celular.</li><li>No perfil, segure o dedo sobre o destaque e toque em <b>Editar destaque</b>, depois em <b>Editar capa</b>, e escolha a imagem.</li><li>Na mesma tela, mude o nome quando o guia pedir: Nossos Nichos vira Segmentos, e Redes Sociais vira Contato.</li></ol></div>
</div></section>
{secoes}
</main></body></html>'''

Path(__file__).with_name("destaques.html").write_text(html, encoding="utf-8")
print(totais)
