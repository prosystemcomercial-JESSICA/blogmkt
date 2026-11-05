"""Gera stories-com-link.html: guia só dos 6 stories de destaque com figurinha de link."""
from pathlib import Path

W = "https://wa.me/5527997521370?text="
R = "https://raw.githubusercontent.com/prosystemcomercial-JESSICA/blogmkt/main/outputs/criativos/destaques/stories/"
S = [
    ("05/11/2026", "qui", "quem-somos-v1-4", "Quem somos 4", "Quem somos", "png", "https://prosystemnet.com/linknabio/", "Conhecer o Prosystem"),
    ("16/11/2026", "seg", "contato-v1-1", "Contato 1", "Contato (o antigo Redes Sociais)", "mp4", W + "Ol%C3%A1%21%20Vim%20pelo%20Instagram%20e%20quero%20falar%20com%20um%20especialista.", "Falar no WhatsApp"),
    ("17/12/2026", "qui", "contato-v1-2", "Contato 2", "Contato (o antigo Redes Sociais)", "png", "https://prosystemnet.com/blog/", "Ler o blog"),
    ("02/03/2027", "ter", "integracoes-v1-3", "Integrações 3", "Integrações", "png", W + "Ol%C3%A1%21%20Quero%20saber%20se%20o%20Prosystem%20integra%20com%20o%20programa%20que%20eu%20uso.", "Perguntar no WhatsApp"),
    ("09/03/2027", "ter", "contato-v1-3", "Contato 3", "Contato (o antigo Redes Sociais)", "png", "https://prosystemnet.com/ebook/", "Baixar o e-book"),
    ("15/04/2027", "qui", "ferramentas-v1-33", "Ferramentas 33", "Ferramentas", "png", W + "Ol%C3%A1%21%20Vi%20as%20ferramentas%20no%20Instagram%20e%20quero%20ver%20o%20Prosystem%20no%20meu%20neg%C3%B3cio.", "Falar com um especialista"),
]

POSTADOS = {"contato-v1-1", "contato-v1-2", "contato-v1-3"}  # Jessica postou em 04/11/2026
cards = ""
for d, w, k, n, dest, ext, l, t in S:
    passos = [
        "Salve o arquivo no celular: abra pelo botão acima e segure o dedo para <b>Salvar</b>.",
        "Toque no <b>+</b> do perfil, escolha <b>Story</b> e pegue o arquivo na galeria.",
        "Toque na <b>figurinha</b> (quadrado sorrindo) e escolha <b>Link</b>.",
        "Cole o <b>link</b>. Em <b>Personalizar texto da figurinha</b>, cole o texto.",
        "Arraste a figurinha para a <b>faixa livre abaixo de \"Toque no link\"</b> e publique em <b>Seu story</b>.",
        f"Abra o story, toque em <b>Destacar</b> e escolha <b>{dest}</b>.",
    ]
    li = "".join(f'<li><label><input type="checkbox" id="{k}-{i}"><span>{p}</span></label></li>' for i, p in enumerate(passos))
    rot = "Abrir vídeo para salvar" if ext == "mp4" else "Abrir imagem para salvar"
    cards += f'''<article class="card{" feito" if k in POSTADOS else ""}"><header><div class="data"><b>{d[:5]}</b><span>{w} · {d[6:]}</span><i>{"11h" if k=="quem-somos-v1-4" else "10h"}</i></div><div><h2>{n}{"<em>Já postado em 04/11</em>" if k in POSTADOS else ""}</h2><p>Destaque: <b>{dest}</b></p></div></header>
<div class="corpo"><img src="p/destaque-{k}.jpg" alt="Story {n}" loading="lazy" width="540" height="960"><div class="info">
<a class="baixar" href="{R}destaque-{k}.{ext}" target="_blank" rel="noopener">{rot}</a>
<div class="campo"><span>Link da figurinha</span><div class="copiar"><code id="l-{k}">{l}</code><button type="button" data-copiar="l-{k}">Copiar</button></div></div>
<div class="campo"><span>Texto da figurinha</span><div class="copiar"><code id="t-{k}">{t}</code><button type="button" data-copiar="t-{k}">Copiar</button></div></div>
<ol class="check">{li}</ol></div></div></article>
'''

CSS = """
:root{--fundo:#F3F7FC;--cartao:#fff;--tinta:#081330;--apoio:#4A5A75;--linha:#D9E4F2;--suave:#E8F1FB;--azul:#2E6DB4;--ciano:#38C8F8;--laranja:#F88818;--ok:#1F8A5B;--grad:linear-gradient(155deg,#2E6DB4 0%,#417ABC 48%,#3898D8 78%,#38C8F8 100%);--f:'Montserrat',Arial,sans-serif}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--fundo:#071022;--cartao:#0E1B36;--tinta:#EAF2FC;--apoio:#9FB3D1;--linha:#1F3156;--suave:#13264A;--ok:#4CC38A;color-scheme:dark}}
:root[data-theme="dark"]{--fundo:#071022;--cartao:#0E1B36;--tinta:#EAF2FC;--apoio:#9FB3D1;--linha:#1F3156;--suave:#13264A;--ok:#4CC38A;color-scheme:dark}
*{box-sizing:border-box}body{margin:0;background:var(--fundo);color:var(--tinta);font-family:var(--f);font-size:16px;line-height:1.5}
.in{max-width:900px;margin:0 auto;padding:0 16px}
.topo{background:var(--grad);color:#fff}.topo .in{padding-block:36px 30px;display:flex;flex-direction:column;gap:10px}
.topo small{font-size:13px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;opacity:.85}
h1{margin:0;font-size:clamp(28px,5vw,44px);font-weight:300;line-height:1.05}h1 b{font-weight:800}.topo p{margin:0;max-width:62ch;font-weight:500}
main{display:flex;flex-direction:column;gap:22px;padding-block:28px 60px}
.card{background:var(--cartao);border:1px solid var(--linha);border-radius:18px;padding:18px;display:flex;flex-direction:column;gap:16px}
.card header{display:flex;gap:16px;align-items:center}
.data{flex:none;background:var(--laranja);color:#081330;border-radius:14px;padding:8px 12px;display:flex;flex-direction:column;align-items:center;min-width:84px}
.data b{font-size:24px;font-weight:800;line-height:1.1;font-variant-numeric:tabular-nums}.data i{font-style:normal;font-weight:800;font-size:15px;margin-top:2px}.data span{font-size:12px;font-weight:700;text-transform:uppercase}
h2{margin:0;font-size:21px;font-weight:800}.card header p{margin:2px 0 0;color:var(--apoio)}
.corpo{display:grid;grid-template-columns:170px 1fr;gap:18px;align-items:start}
.corpo img{width:100%;aspect-ratio:9/16;object-fit:cover;border-radius:12px;display:block;background:var(--linha)}
.info{display:flex;flex-direction:column;gap:12px;min-width:0}
.baixar{text-align:center;text-decoration:none;font-weight:800;font-size:14px;padding:10px;border-radius:10px;border:2px solid var(--azul);color:var(--azul)}
.campo{display:flex;flex-direction:column;gap:5px}.campo>span{font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--apoio)}
.copiar{display:flex;gap:8px}.copiar code{flex:1;min-width:0;font:13px ui-monospace,Consolas,monospace;background:var(--suave);border-radius:10px;padding:9px 10px;overflow-wrap:anywhere;user-select:all}
button{font:800 13px var(--f);border:0;border-radius:10px;padding:0 14px;background:var(--azul);color:#fff;cursor:pointer;min-height:40px}button.ok{background:var(--ok)}
button:focus-visible,a:focus-visible{outline:3px solid var(--ciano);outline-offset:2px}
.check{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:6px}
.check label{display:flex;gap:10px;align-items:flex-start;cursor:pointer;padding:7px 10px;border-radius:10px;background:var(--suave);font-size:15px}
.check input{width:20px;height:20px;flex:none;margin:2px 0 0;accent-color:var(--azul)}.check input:checked+span{text-decoration:line-through;color:var(--apoio)}
.card.feito{opacity:.6}.card.feito .data{background:var(--ok);color:#fff}h2 em{font-style:normal;font-size:12px;font-weight:800;background:var(--ok);color:#fff;border-radius:99px;padding:3px 10px;margin-left:10px;vertical-align:middle}
@media (max-width:600px){.corpo{grid-template-columns:1fr}.corpo img{width:180px}}
"""

JS = """
document.querySelectorAll('[data-copiar]').forEach(b=>b.addEventListener('click',async()=>{const c=document.getElementById(b.dataset.copiar);try{await navigator.clipboard.writeText(c.textContent);b.textContent='Copiado';b.classList.add('ok')}catch(e){const r=document.createRange();r.selectNodeContents(c);const s=getSelection();s.removeAllRanges();s.addRange(r);b.textContent='Selecionado'}setTimeout(()=>{b.textContent='Copiar';b.classList.remove('ok')},2200)}));
let f={};try{f=JSON.parse(localStorage.getItem('stories-link')||'{}')}catch(e){}
document.querySelectorAll('.check input').forEach(c=>{c.checked=!!f[c.id];c.addEventListener('change',()=>{f[c.id]=c.checked;try{localStorage.setItem('stories-link',JSON.stringify(f))}catch(e){}})});
"""

html = f'''<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Stories com Link</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700;800&display=swap">
<style>{CSS}</style></head><body>
<header class="topo"><div class="in"><small>Instagram · Destaques</small><h1>Stories com <b>link</b></h1><p>Estes 6 stories levam figurinha de link, e a API não consegue colocá-la. No dia e na hora marcados (às 10h, como os stories da API; o Quem somos 4 é hoje às 11h, depois do 2 e do 3), salve o arquivo, poste pelo app com a figurinha e coloque no destaque. Os itens que você marcar ficam salvos neste aparelho.</p></div></header>
<main class="in">{cards}</main>
<script>{JS}</script></body></html>'''

Path(__file__).with_name("stories-com-link.html").write_text(html, encoding="utf-8")
