"""Monta as LPs de farmácia e padaria a partir do lp.tpl.html.

Os planos e a tabela vêm de planos-prosystem-2025.csv, copiado da base de conhecimento
(suporte-tecnico/procedimentos-e-orientacoes/planos-prosystem-2025, atualizado em 06/02/2025).
As telas são reais (banco imagens/telas-prosystem). Nenhum preço é citado.
Uso: python site/lp/montar_lp.py   (gera site/lp/farmacia.html e site/lp/padaria.html)
"""
import base64, csv, html, io, json
from pathlib import Path
from PIL import Image

AQUI = Path(__file__).parent
RAIZ = AQUI.parent.parent
TELAS = RAIZ / "banco imagens" / "telas-prosystem"
WA = "https://api.whatsapp.com/message/6BX6LTHQ6SUWB1?autoload=1&amp;app_absent=0"
IMG_BIO = json.loads((AQUI.parent / "linknabio" / "imagens.json").read_text())

_cache = {}


def img(caminho, largura=900, q=82):
    """Arquivo de imagem em data URI webp, reduzido à largura dada."""
    chave = (str(caminho), largura)
    if chave not in _cache:
        im = Image.open(caminho).convert("RGB")
        if im.width > largura:
            im = im.resize((largura, round(im.height * largura / im.width)), Image.LANCZOS)
        b = io.BytesIO()
        im.save(b, "WEBP", quality=q, method=6)
        _cache[chave] = "data:image/webp;base64," + base64.b64encode(b.getvalue()).decode()
    return _cache[chave]


def tela(nome, largura=900):
    return img(TELAS / f"{nome}.png", largura)


# ---------- planos ----------
PLANOS = list(csv.DictReader(open(AQUI / "planos-prosystem-2025.csv", encoding="utf-8"), delimiter=";"))
LINHA = {r["funcao"]: r for r in PLANOS}

# (grupo, rótulo na página, função na tabela oficial)
COMPARAR = {
    "farma": [
        ("Caixa", "Venda, orçamento e devolução", "Orçamento - F1"),
        ("Caixa", "NF-e e venda com TEF", "Nfe"),
        ("Caixa", "Sangria, suprimento e fechamento", "Fechamento - F9"),
        ("Caixa", "Conferência cega das vendas", "Conferência Cega Vendas"),
        ("Caixa", "PBM", "PBM"),
        ("Caixa", "Encomendas", "Encomenda"),
        ("Caixa", "Entregas", "Entregas - F12"),
        ("Produtos e estoque", "Balanço de estoque", "Produtos>Balanço"),
        ("Produtos e estoque", "Atualização de preços pelo dicionário", "Produtos>Atualizações Preços/Dic"),
        ("Produtos e estoque", "Produtos controlados (SNGPC)", "Produtos>Controlado"),
        ("Produtos e estoque", "Conferência cega na entrada de notas", "Produtos>Movimentação> Conferência Cega Entradas"),
        ("Produtos e estoque", "Tabloides", "Auxiliares>Produtos>Tablóides"),
        ("Produtos e estoque", "Políticas de preços", "Auxiliares>Políticas de Preços"),
        ("Produtos e estoque", "Análises e processamentos", "Produtos>Análises & Processamentos"),
        ("Fiscal", "SPED, Sintegra e tributação", "Produtos>Fiscal>Sped"),
        ("Gestão", "Auditoria de acessos", "Sistema>Auditoria"),
        ("Gestão", "Financeiro (caixa, sangrias, cheques)", "Financeiro>Caixa"),
        ("Gestão", "Registro de ponto", "Auxiliares>Funcionários> Registro de Ponto"),
        ("Gestão", "Tabela de comissões", "Auxiliares>Tabela de comissões"),
        ("Gestão", "Fluxo de caixa, banco e boleto", "Financeiro>Fluxo de caixa"),
        ("Gestão", "Metas de funcionários", "Financeiro>Meta funcionário"),
        ("Gestão", "Demonstrativo de resultados (DRE)", "Financeiro>Demonstrativos de Resultados"),
        ("Gestão", "Prosystem Gerencial", "Gerencial"),
        ("Gestão", "Painel de indicadores (Dashboard)", "Dashboard"),
        ("Gestão", "Integrações", "Integrações *"),
        ("Clientes", "Cadastro de prescritores", "Cadastros>Prescritores"),
        ("Clientes", "Atenção farmacêutica", "Auxiliares>Clientes> Características (AF)"),
        ("Manipulação", "Módulo de manipulação", "Manipulação"),
    ],
    "loja": [
        ("Caixa", "Venda, orçamento e devolução", "Orçamento - F1"),
        ("Caixa", "NF-e e venda com TEF", "Nfe"),
        ("Caixa", "Sangria, suprimento e fechamento", "Fechamento - F9"),
        ("Caixa", "Conferência cega das vendas", "Conferência Cega Vendas"),
        ("Caixa", "Entregas", "Entregas - F12"),
        ("Produtos e estoque", "Balanço de estoque", "Produtos>Balanço"),
        ("Produtos e estoque", "Produção", "Produtos>Movimentação> Produção"),
        ("Produtos e estoque", "Conferência cega na entrada de notas", "Produtos>Movimentação> Conferência Cega Entradas"),
        ("Produtos e estoque", "Tabloides", "Auxiliares>Produtos>Tablóides"),
        ("Produtos e estoque", "Políticas de preços", "Auxiliares>Políticas de Preços"),
        ("Produtos e estoque", "Análises e processamentos", "Produtos>Análises & Processamentos"),
        ("Fiscal", "SPED, Sintegra e tributação", "Produtos>Fiscal>Sped"),
        ("Gestão", "Auditoria de acessos", "Sistema>Auditoria"),
        ("Gestão", "Financeiro (caixa, sangrias, cheques)", "Financeiro>Caixa"),
        ("Gestão", "Registro de ponto", "Auxiliares>Funcionários> Registro de Ponto"),
        ("Gestão", "Tabela de comissões", "Auxiliares>Tabela de comissões"),
        ("Gestão", "Fluxo de caixa, banco e boleto", "Financeiro>Fluxo de caixa"),
        ("Gestão", "Metas de funcionários", "Financeiro>Meta funcionário"),
        ("Gestão", "Demonstrativo de resultados (DRE)", "Financeiro>Demonstrativos de Resultados"),
        ("Gestão", "Prosystem Gerencial", "Gerencial"),
        ("Gestão", "Painel de indicadores (Dashboard)", "Dashboard"),
        ("Gestão", "Controle de mesas", "Controle de Mesas"),
        ("Gestão", "Integrações", "Integrações *"),
    ],
}


def tabela(linha):
    cols = [f"{linha}_basic", f"{linha}_pro", f"{linha}_plus"]
    nome = "Farma" if linha == "farma" else "Loja"
    h = [f'<table><thead><tr><th scope="col">Função</th>' + "".join(f'<th scope="col">{nome} {p}</th>' for p in ("Basic", "Pro", "Plus")) + "</tr></thead><tbody>"]
    grupo = None
    for g, rot, fun in COMPARAR[linha]:
        if g != grupo:
            h.append(f'<tr class="grupo"><td colspan="4">{g}</td></tr>')
            grupo = g
        r = LINHA[fun]
        cel = "".join('<td><span class="sim" role="img" aria-label="Sim"></span></td>' if r[c] == "Sim" else '<td><span class="nao" role="img" aria-label="Não"></span></td>' for c in cols)
        h.append(f"<tr><td>{rot}</td>{cel}</tr>")
    return "".join(h) + "</tbody></table>"


def confere_planos(linha, cartoes):
    """Cada item listado num cartão precisa estar no plano conforme a tabela oficial."""
    col = {"Basic": f"{linha}_basic", "Pro": f"{linha}_pro", "Plus": f"{linha}_plus"}
    for c in cartoes:
        for _, fun in c["itens"]:
            if fun and LINHA[fun][col[c["nome"]]] != "Sim":
                raise SystemExit(f"{linha} {c['nome']}: '{fun}' não está no plano")


def planos_html(linha, cartoes):
    confere_planos(linha, cartoes)
    nome = "Farma" if linha == "farma" else "Loja"
    out = []
    for k, c in enumerate(cartoes):
        itens = "".join(f'<li class="{"base" if f is None else ""}">{t}</li>' for t, f in c["itens"])
        out.append(
            f'<article class="plano rv{" top" if c.get("top") else ""}" style="--d:{k * .1:.1f}s">'
            f'<span class="nome">{nome} {c["nome"]}</span><h3>{c["titulo"]}</h3><p class="para">{c["para"]}</p>'
            f'<ul>{itens}</ul><a class="btn cor pequeno" href="{WA}" target="_blank" rel="noopener">Quero o {nome} {c["nome"]} <span class="seta">→</span></a></article>')
    return "".join(out)


# ---------- avaliações (Google, autorizadas em 30/10/2026; texto como está, sem emoji) ----------
DEPOS = {
    "rodrigo": ("Rodrigo Amancio", 5, "Trabalho com eles a 13 anos e não pretendo mudar. Me atendem super bem e com rapidez e sempre resolvem as minhas demandas de maneira muito eficaz. São nota 1000 e estão de parabéns."),
    "krisley": ("Krisley Kretli de Oliveira", 5, "Eu tenho duas farmácias e a quase 15 anos de empresa trabalho com o software da Prosystem! Amo o trabalho deles,o programa é super simples de aprender e o suporte que eles oferecem é super ágil e eficaz"),
    "samuel": ("Samuel Ferreira", 5, "O sistema é excelente, tudo funciona, muito personalizável, integração, detalhamentos e o suporte humanizado tanto segunda a sexta quando sábado e domingo, sem aquelas frescuras de falar com robô. O suporte do Matheus de Carvalho excelente"),
    "thalita": ("Thalita Silva", 5, "Sistema muito bem estruturado de fácil acesso, atendimento nota 1000, todos muito atenciosos e prestativos quando precisamos!!!"),
    "paulo": ("Paulo Siqueira", 5, "A Prossystem foi o programa que resolveu aqui na loja, já tive outros mas o único que os funcionários não reclamam aqui é a Prossystem, suporte na hora que precisa, temos o telefone direto com o técnico responsável, recomendo demais"),
    "veronica": ("Verônica Xavier", 5, "Tive uma experiência incrível com a Prosystem! Atendimento excelente, serviço de ótima qualidade e muita atenção aos detalhes. Recomendo para quem procura confiança e profissionalismo."),
    "katiane": ("Katiane Avancini", 5, "Trabalhamos com a Prossystem a muitos anos, nos atendem rapidamente em tudo que precisamos do sistema! A pessoa que nos atende João Vitor super educado e sempre rápido."),
    "sirleia": ("Sirleia Moreira", 5, "Sistema muito fácil de trabalhar e eles dão ótima assistência."),
    "claudiele": ("Claudiele Castro", 5, "Sistema muito bom. Aprovado. Técnico João Victor nos atende com extrema qualidade e paciência."),
}
ESTRELA = ('<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.2l2.6 5.5 6 .8-4.4 4.1 1.1 5.9L12 16.6l-5.3 2.9 1.1-5.9L3.4 9.5l6-.8z" '
           'fill="{f}" stroke="#FFFFFF" stroke-width="2.2" stroke-linejoin="round"/></svg>')


def depos(chaves):
    out = []
    for k in chaves:
        nome, n, t = DEPOS[k]
        est = ESTRELA.format(f="#FFFFFF") * n + ESTRELA.format(f="none") * (5 - n)
        out.append(f'<figure class="cit"><span class="estrelas" role="img" aria-label="{n} de 5 estrelas">{est}</span>'
                   f'<blockquote>{html.escape(t)}</blockquote><figcaption>{html.escape(nome)}</figcaption></figure>')
    return "".join(out)


# ---------- blocos ----------
def palco(itens):
    cls = ["a", "b", "c"]
    return "".join(
        f'<figure class="flut {cls[k]}" style="--d:{.35 + k * .18:.2f}s;margin:0"><div class="topo"><i></i>{rot}</div><img src="{tela(t, 760)}" alt=""></figure>'
        for k, (t, rot) in enumerate(itens))


def faixa(itens):
    return "".join(f"<span>{t}</span>" for t in itens)


def dores(itens):
    return "".join(f'<article class="dor rv" style="--d:{k * .1:.1f}s"><q>{h}</q><p>{p}</p></article>' for k, (h, p) in enumerate(itens))


def ferramentas(itens):
    out = []
    for t, mod, tit, txt, plano in itens:
        if t.startswith("texto:"):
            grande, peq = t[6:].split("|")
            topo = f'<div class="tela sem"><div><strong>{grande}</strong><small>{peq}</small></div></div>'
        else:
            topo = f'<div class="tela"><img src="{tela(t)}" alt="Tela do Prosystem: {html.escape(tit)}" loading="lazy"></div>'
        pil = f'<span class="pilula selo">{plano}</span>' if plano else ""
        out.append(f'<article class="ferr">{topo}<div class="corpo"><div class="meta"><span class="mod">{mod}</span>{pil}</div><h3>{tit}</h3><p>{txt}</p></div></article>')
    return "".join(out)


def dia(itens):
    visor = "".join(f'<img src="{tela(t)}" alt="">' for _, _, _, t in itens)
    passos = "".join(
        f'<article class="passo" data-k="{k}"><span class="hora">{hora}</span><h3>{tit}</h3><p>{txt}</p>'
        f'<div class="mini"><img src="{tela(t, 700)}" alt="Tela do Prosystem: {html.escape(tit)}" loading="lazy"></div></article>'
        for k, (hora, tit, txt, t) in enumerate(itens))
    return visor, passos


# ---------- conteúdo ----------
TEMA_FARMA = ""  # usa os tokens padrão (azul)
TEMA_PADARIA = """:root{
  --c-escuro:#C2410C; --c-medio:#D9500B; --c-vivo:#EA580C; --c-claro:#F88818;
  --degrade:linear-gradient(155deg,#B83C0A 0%,#D9500B 50%,#F07A12 85%,#F88818 100%);
  --tinta:#2B1408; --nevoa:#FFF5EC; --linha:#F2DCC9; --apoio:#6B4A38;
  --pilula-bg:#2B1408; --pilula-tx:#FFFFFF; --brilho:rgba(255,190,120,.4);
}"""

FARMACIA = dict(
    arquivo="farmacia.html",
    titulo="Prosystem para Farmácias",
    meta_desc="Sistema para farmácia e drogaria: caixa, estoque, SNGPC, PBM e fiscal em um só lugar, com suporte das 7h às 22h, inclusive sábado e domingo.",
    tema=TEMA_FARMA, seg_nome="farmácia", linha="farma",
    h_olho="Sistema para farmácia e drogaria",
    h1="A <b>gestão</b> da sua <b>FARMÁCIA</b> em um só sistema.",
    h_sub="Caixa, estoque, controlados, PBM e fiscal conectados. E especialistas de verdade no suporte, das 7h às 22h, inclusive sábado e domingo.",
    palco=[("painel-vendas", "Painel de indicadores"), ("whats-fechamento", "Fechamento no WhatsApp"), ("uso-continuo-alerta", "Uso contínuo")],
    faixa=["Caixa rápido", "NF-e e TEF", "SNGPC", "PBM e Farmácia Popular", "Lote e validade", "Uso contínuo", "Curva ABC", "Acesso por biometria", "Avisos no WhatsApp", "Painel de indicadores"],
    d_olho="O que tira o sono do dono", d_h2="O lucro da farmácia some nos <b>detalhes</b>.",
    d_lead="Cliente que recompra no concorrente, venda que ninguém registrou, número espalhado em relatório. O Prosystem mostra cada um deles.",
    dores=[("O remédio do seu cliente acaba em 8 dias. Quem vai lembrar dele primeiro?", "O uso contínuo calcula a próxima compra pela posologia e avisa o balcão antes."),
           ("A venda perdida não aparece no caixa. Mas dá para medir.", "Cada item excluído pede um motivo: falta do produto, preço da concorrência, demora no atendimento."),
           ("Sua loja cresceu. Você consegue provar isso em 30 segundos?", "O painel de indicadores junta vendas, estoque, financeiro e delivery numa tela.")],
    f_h2="O que o Prosystem faz <b>pela sua farmácia</b>.",
    ferramentas=[
        ("painel-vendas", "Gerencial", "Painel de indicadores", "Vendas, estoque, financeiro, compras e delivery em painéis, com filtro por período.", "Farma Plus"),
        ("uso-continuo-alerta", "Clientes", "Uso contínuo ativo", "Calcula a próxima compra pela posologia e avisa o balcão nos dias anteriores, para o cliente voltar à sua loja.", ""),
        ("perda-vendas-painel", "Gerencial", "Indicador de perda de vendas", "Registra o motivo de cada item excluído e mostra o gráfico do que você deixou de vender.", ""),
        ("whats-fechamento", "Gerencial", "Avisos via WhatsApp", "Fechamento de caixa, vendas, contas, metas e logins chegam no WhatsApp de quem você escolher.", "Farma Plus"),
        ("sangria-aviso", "Caixa", "Sangria obrigatória", "Avisa o caixa num valor e bloqueia a venda em outro, até a sangria ser feita.", ""),
        ("receitas-scanner", "PBM", "Scanner de receitas do Farmácia Popular", "Digitaliza e guarda as receitas em mídia externa ou na nuvem.", "Pro e Plus"),
        ("curva-abc", "Estoque", "Curva ABC e XYZ", "Classifica os itens por valor, quantidade e criticidade para você comprar melhor.", ""),
        ("dias-sem-giro", "Estoque", "Produtos sem giro", "Mostra há quantos dias cada item não vende e o que está parado na prateleira.", ""),
        ("texto:Digital|Login e liberações com a impressão digital, sem senha emprestada.", "Acessos", "Acesso e liberações por biometria", "Descontos, cancelamentos e ajustes ficam ligados ao colaborador que pôs o dedo no leitor.", "Novidade"),
    ],
    dia_h2="Um dia na sua farmácia, <b>com o Prosystem</b>.",
    dia_lead="Role a página: a tela muda junto com o dia.",
    dia=[("Abertura", "O estoque na tela antes da porta abrir", "Ruptura, estoque excedente e inventário no painel, para saber o que repor primeiro.", "painel-estoque"),
         ("No balcão", "O sistema lembra do cliente por você", "Na venda, o aviso mostra que o remédio de uso contínuo está perto de acabar.", "uso-continuo-alerta"),
         ("Horário de pico", "Dinheiro na gaveta sob controle", "Passou do limite, o caixa é avisado. Passou do segundo, a venda para até a sangria.", "sangria-bloqueio"),
         ("Fim do dia", "O fechamento chega no seu WhatsApp", "Venda bruta, descontos, sangrias e formas de pagamento, onde você estiver.", "whats-fechamento")],
    p_lead="Os planos para farmácia e drogaria vêm da tabela oficial do Prosystem. Fale com um especialista para saber o valor do plano certo para a sua loja.",
    planos=[
        dict(nome="Basic", titulo="O <b>essencial</b> do balcão", para="Para quem quer o caixa e o fiscal em dia.",
             itens=[("Venda, orçamento e devolução", "Orçamento - F1"), ("NF-e, TEF e recarga", "Nfe"), ("Sangria e fechamento de caixa", "Fechamento - F9"),
                    ("SPED, Sintegra e tributação", "Produtos>Fiscal>Sped"), ("Balanço de estoque", "Produtos>Balanço"),
                    ("Atualização de preços pelo dicionário", "Produtos>Atualizações Preços/Dic"), ("Classes terapêuticas e genéricos", "Auxiliares>Genéricos")]),
        dict(nome="Pro", titulo="A farmácia <b>completa</b>", para="Para quem vende controlados e trabalha com PBM.",
             itens=[("Tudo do Farma Basic, mais:", None), ("Produtos controlados (SNGPC)", "Produtos>Controlado"), ("PBM e cadastro de prescritores", "PBM"),
                    ("Encomendas e entregas", "Encomenda"), ("Conferência cega na venda e na entrada de notas", "Conferência Cega Vendas"),
                    ("Auditoria de acessos", "Sistema>Auditoria"), ("Financeiro, ponto e comissões", "Auxiliares>Tabela de comissões"),
                    ("Prosystem Gerencial e integrações", "Integrações *")]),
        dict(nome="Plus", titulo="A gestão <b>na palma da mão</b>", para="Para quem quer os números da loja em tempo real.", top=True,
             itens=[("Tudo do Farma Pro, mais:", None), ("Painel de indicadores (Dashboard)", "Dashboard"), ("Avisos via WhatsApp", None),
                    ("Fluxo de caixa, banco e boleto", "Financeiro>Fluxo de caixa"), ("Demonstrativo de resultados (DRE)", "Financeiro>Demonstrativos de Resultados"),
                    ("Metas de funcionários", "Financeiro>Meta funcionário"), ("Atenção farmacêutica", "Auxiliares>Clientes> Características (AF)"),
                    ("Módulo de manipulação", "Manipulação")]),
    ],
    p_nota="Fonte: tabela Planos Prosystem 2025 da base de conhecimento. Integrações dos planos Pro e Plus: Napp, FarmaciasApp, Tray, Imendes, Avant, Farmácia Popular, E-Diretor, RV-Tecnologia, TEF, Balanço Coletor, Balanço Celular e PG Farma. Também há o plano Prosystem MEI.",
    depos=["krisley", "rodrigo", "samuel", "thalita", "veronica", "katiane", "claudiele", "sirleia"],
    fim_h2="Pronto para ver o Prosystem <b>na sua farmácia</b>?",
    fim_p="Converse com um especialista pelo WhatsApp. Ele entende a sua rotina e indica o plano certo.",
    foto=RAIZ / "outputs/criativos/nov-dez/fotos/farmaceutica-receita.jpg", foto_corte=(250, 130, 850, 600),
    veu="linear-gradient(180deg,rgba(46,109,180,.88),rgba(46,109,180,.94))",
    credito="Foto: Cristine Rochol / PMPA",
)

PADARIA = dict(
    arquivo="padaria.html",
    titulo="Prosystem para Padarias",
    meta_desc="Sistema para padaria: pesagem no caixa, sangria com aviso, fechamento conferido e os números da padaria no seu WhatsApp. Suporte das 7h às 22h, inclusive sábado e domingo.",
    tema=TEMA_PADARIA, seg_nome="padaria", linha="loja",
    h_olho="Sistema para padaria",
    h1="Você vende pão todo dia. E o <b>lucro</b>?",
    h_sub="Pesagem direto no caixa, sangria com aviso, fechamento conferido e o resumo do dia no seu WhatsApp. Com suporte das 7h às 22h, inclusive sábado e domingo.",
    palco=[("fechamento-caixa", "Fechamento de caixa"), ("whats-fechamento", "Fechamento no WhatsApp"), ("sangria-aviso", "Sangria")],
    faixa=["Pesagem no caixa", "Etiqueta da balança", "Sangria com aviso", "Fechamento conferido", "Controle de mesas", "Entregas", "Produção", "Curva ABC", "Avisos no WhatsApp", "Painel de indicadores"],
    d_olho="O que tira o sono do dono", d_h2="Na padaria, o dinheiro escapa <b>no corre</b>.",
    d_lead="Gaveta cheia no pico, venda que não foi registrada, fechamento conferido no papel. O Prosystem cuida de cada um.",
    dores=[("Quanto dinheiro tem na sua gaveta agora?", "O caixa é avisado num valor e a venda para no outro, até a sangria ser feita."),
           ("A venda perdida não aparece no caixa. Mas dá para medir.", "Cada item excluído pede um motivo, e o gráfico mostra o que a padaria deixou de vender."),
           ("Você fecha a padaria e vai para casa. E o resumo do dia?", "O fechamento de caixa, as contas e as vendas chegam no seu WhatsApp.")],
    f_h2="O que o Prosystem faz <b>pela sua padaria</b>.",
    ferramentas=[
        ("texto:0,250 kg|Pesou, vendeu: o caixa lê o peso da balança.", "Caixa", "Pesagem direto no caixa", "O Prosystem lê o peso registrado na balança, como no pão francês, e também a etiqueta que a balança imprime.", ""),
        ("sangria-aviso", "Caixa", "Sangria obrigatória", "Avisa o caixa num valor e bloqueia a venda em outro, até a sangria ser feita.", ""),
        ("fechamento-caixa", "Caixa", "Fechamento de caixa conferido", "Conferência por forma de pagamento, com caixas simultâneos e caixa pendente.", ""),
        ("whats-fechamento", "Gerencial", "Fechamento no WhatsApp", "O resumo do caixa chega no seu celular assim que o caixa fecha.", "Loja Plus"),
        ("whats-contas", "Gerencial", "Contas a pagar no WhatsApp", "O total de hoje, de amanhã e dos próximos dias, sem abrir o sistema.", "Loja Plus"),
        ("perda-vendas-painel", "Gerencial", "Indicador de perda de vendas", "O motivo de cada item excluído vira gráfico: falta do produto, preço da concorrência, demora.", ""),
        ("texto:Mesas|Pedidos por mesa, do salão ao caixa.", "Caixa", "Controle de mesas", "Para a padaria que serve café, lanche e refeição no salão.", "Loja Plus"),
        ("curva-abc", "Estoque", "Curva ABC e XYZ", "Classifica os itens por valor, quantidade e criticidade para você comprar melhor.", ""),
    ],
    dia_h2="Um dia na sua padaria, <b>com o Prosystem</b>.",
    dia_lead="Role a página: a tela muda junto com o dia.",
    dia=[("Cedo", "As contas do dia antes da primeira fornada", "O total a pagar hoje e nos próximos dias chega no seu WhatsApp.", "whats-contas"),
         ("Hora do pão", "Gaveta cheia não passa batido", "No pico, o caixa é avisado para fazer a sangria antes de acumular dinheiro.", "sangria-aviso"),
         ("Durante o dia", "Cada venda perdida tem um motivo", "Item excluído pede o porquê. No fim do mês, você sabe o que faltou na vitrine.", "perda-vendas-motivo"),
         ("Fechamento", "Caixa conferido e resumo no celular", "Conferência por forma de pagamento e o fechamento enviado para você.", "fechamento-caixa")],
    p_lead="Na padaria, os planos são os da linha Loja, da tabela oficial do Prosystem. Fale com um especialista para saber o valor do plano certo para a sua padaria.",
    planos=[
        dict(nome="Basic", titulo="O <b>essencial</b> do caixa", para="Para quem quer vender e emitir nota sem complicação.",
             itens=[("Venda, orçamento e devolução", "Orçamento - F1"), ("NF-e, TEF e recarga", "Nfe"), ("Sangria e fechamento de caixa", "Fechamento - F9"),
                    ("SPED, Sintegra e tributação", "Produtos>Fiscal>Sped"), ("Balanço de estoque", "Produtos>Balanço")]),
        dict(nome="Pro", titulo="A padaria <b>organizada</b>", para="Para quem produz, entrega e quer controle da equipe.",
             itens=[("Tudo do Loja Basic, mais:", None), ("Produção", "Produtos>Movimentação> Produção"), ("Entregas", "Entregas - F12"),
                    ("Conferência cega na venda e na entrada de notas", "Conferência Cega Vendas"), ("Auditoria de acessos", "Sistema>Auditoria"),
                    ("Financeiro e registro de ponto", "Auxiliares>Funcionários> Registro de Ponto"), ("Tabloides", "Auxiliares>Produtos>Tablóides"),
                    ("Prosystem Gerencial e integrações", "Integrações *")]),
        dict(nome="Plus", titulo="A gestão <b>na palma da mão</b>", para="Para quem quer os números da padaria em tempo real.", top=True,
             itens=[("Tudo do Loja Pro, mais:", None), ("Painel de indicadores (Dashboard)", "Dashboard"), ("Controle de mesas", "Controle de Mesas"),
                    ("Avisos via WhatsApp", None), ("Fluxo de caixa, banco e boleto", "Financeiro>Fluxo de caixa"),
                    ("Demonstrativo de resultados (DRE)", "Financeiro>Demonstrativos de Resultados"), ("Metas e comissões", "Financeiro>Meta funcionário"),
                    ("Políticas de preços", "Auxiliares>Políticas de Preços")]),
    ],
    p_nota="Fonte: tabela Planos Prosystem 2025 da base de conhecimento. Integrações dos planos Pro e Plus: Napp, Tray, Imendes, Avant, E-Diretor, RV-Tecnologia, TEF, Balanço Coletor e Balanço Celular, entre outras. Também há o plano Prosystem MEI.",
    depos=["rodrigo", "paulo", "samuel", "thalita", "veronica", "sirleia", "claudiele", "katiane"],
    fim_h2="Pronto para ver o Prosystem <b>na sua padaria</b>?",
    fim_p="Converse com um especialista pelo WhatsApp. Ele entende a rotina da sua padaria e indica o plano certo.",
    foto=RAIZ / "outputs/criativos/nov-dez/fotos/paezinhos-cesta.jpg", foto_corte=None,
    veu="linear-gradient(180deg,rgba(184,60,10,.86),rgba(184,60,10,.93))",
    credito="Foto: Daniel Sone, domínio público",
)


def foto_final(c):
    im = Image.open(c["foto"]).convert("RGB")
    if c["foto_corte"]:
        im = im.crop(c["foto_corte"])
    im.thumbnail((1400, 1400))
    b = io.BytesIO()
    im.save(b, "WEBP", quality=70)
    return "data:image/webp;base64," + base64.b64encode(b.getvalue()).decode()


def montar(c):
    s = (AQUI / "lp.tpl.html").read_text(encoding="utf-8")
    visor, passos = dia(c["dia"])
    troca = {
        "titulo": c["titulo"], "meta_desc": c["meta_desc"], "tema": c["tema"] + f'\n:root{{--veu:{c["veu"]}}}', "seg_nome": c["seg_nome"],
        "h_olho": c["h_olho"], "h1": c["h1"], "h_sub": c["h_sub"], "palco": palco(c["palco"]), "faixa": faixa(c["faixa"]),
        "d_olho": c["d_olho"], "d_h2": c["d_h2"], "d_lead": c["d_lead"], "dores": dores(c["dores"]),
        "f_h2": c["f_h2"], "ferramentas": ferramentas(c["ferramentas"]),
        "dia_h2": c["dia_h2"], "dia_lead": c["dia_lead"], "visor": visor, "passos": passos,
        "p_lead": c["p_lead"], "planos": planos_html(c["linha"], c["planos"]), "tabela": tabela(c["linha"]), "p_nota": c["p_nota"],
        "depos": depos(c["depos"]), "fim_h2": c["fim_h2"], "fim_p": c["fim_p"], "foto_final": foto_final(c), "credito": c["credito"],
        "wa": WA, "logoL": IMG_BIO["logoL"], "logoD": IMG_BIO["logoD"],
    }
    for k, v in troca.items():
        s = s.replace("{{" + k + "}}", v)
    assert "{{" not in s, "marcador sem valor"
    (AQUI / c["arquivo"]).write_text(s, encoding="utf-8")
    print(c["arquivo"], len(s) // 1024, "KB")


if __name__ == "__main__":
    for c in (FARMACIA, PADARIA):
        montar(c)
