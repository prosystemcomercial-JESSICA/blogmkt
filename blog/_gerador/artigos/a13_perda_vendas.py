from base import cta, tela

WHATS = "Olá! Li o artigo sobre perda de vendas no blog da ProSystem e quero medir isso na minha farmácia."

JS = """<script>
document.addEventListener('DOMContentLoaded', function () {
  var ids = ['pv-dia', 'pv-ticket', 'pv-dias'];
  function val(i) { return parseFloat(String(document.getElementById(i).value).replace(',', '.')); }
  function calcula() {
    var q = val('pv-dia'), t = val('pv-ticket'), d = val('pv-dias');
    var m = document.getElementById('pv-mes'), a = document.getElementById('pv-ano');
    if (!(q >= 0) || !(t > 0) || !(d > 0)) { m.textContent = '—'; a.textContent = '—'; return; }
    m.textContent = 'R$ ' + num(q * t * d, 0);
    a.textContent = 'R$ ' + num(q * t * d * 12, 0);
  }
  ids.forEach(function (i) { document.getElementById(i).addEventListener('input', calcula); });
  calcula();
});
</script>"""

ARTIGO = {
    "slug": "perda-de-vendas-farmacia-como-medir-motivos",
    "data_iso": "2026-10-30T09:00:00-03:00",
    "data_curta": "30 out. 2026",
    "data_longa": "30 de outubro de 2026",
    "titulo_tag": "Perda de vendas na farmácia: como medir os motivos | ProSystem",
    "descricao": "Falta de produto, preço, atendimento: a venda perdida não aparece no caixa. Veja como registrar os motivos, calcular o impacto e agir no que mais pesa na sua farmácia.",
    "og_titulo": "A venda perdida não aparece no caixa. Mas dá para medir.",
    "og_desc": "Como registrar por que o cliente não comprou e transformar os motivos em decisões de compra, preço e atendimento.",
    "og_linhas": ["A venda perdida não", "aparece no caixa.", "Mas dá para medir."],
    "og_chips": [("7,65%", "de ruptura comercial no varejo"), ("30 dias", "para o padrão aparecer")],
    "chamada": "Farmácia · Vendas",
    "secao": "Farmácia",
    "trilha": "Perda de vendas",
    "h1": "A venda perdida não aparece no caixa. Mas dá para medir.",
    "linha_fina": "O relatório mostra o que foi vendido. O que o cliente pediu e não levou costuma desaparecer sem registro. Saber por que isso aconteceu muda o que você compra, o preço que pratica e como atende.",
    "minutos": 7,
    "keywords": "perda de vendas farmácia, indicador de perda de vendas, ruptura farmácia, venda não realizada, motivos de perda de venda, gestão de farmácia",
    "whats": WHATS,
    "barra": "Medir na minha farmácia",
    "cta_lateral": ("Perda de vendas no sistema", "Motivo registrado no balcão, relatório por produto e painel de indicadores.", "Falar com a ProSystem"),
    "aviso": "Telas reais do Prosystem, com nomes de produtos ocultados e dados de exemplo. Os valores da simulação são exemplos.",
    "resumo": [
        "Venda não realizada não entra no relatório de vendas. Sem registro, a perda fica <strong>invisível</strong>.",
        "O indicador de perda de vendas grava <strong>o que não foi vendido e o motivo</strong>: falta, concorrência, pagamento, atendimento ou consulta de preço.",
        "Em cerca de <strong>30 dias</strong> de registro já dá para identificar um padrão e montar um plano de ação.",
        "Cada motivo pede uma resposta diferente. Falta de produto se resolve em compras; preço, na estratégia comercial.",
    ],
    "toc": [
        ("invisivel", "Por que essa perda é invisível"),
        ("conta", "Quanto ela pode custar"),
        ("como-medir", "Como registrar os motivos"),
        ("o-que-fazer", "O que fazer com cada motivo"),
    ],
    "corpo": f"""
    <p>"Tem esse aqui?" "No momento, não." O cliente agradece e sai. Dez minutos depois, ninguém lembra do que ele pediu. No fim do dia, o relatório de vendas mostra tudo o que foi vendido e nada sobre o que deixou de ser.</p>

    <p>Essa é a dificuldade da venda perdida: ela não deixa rastro, a menos que você crie um.</p>

    <h2 id="invisivel">Por que essa perda é invisível</h2>

    <p>A falta de produto é a causa mais lembrada, mas não é a única. O cliente também desiste por causa do preço, de um problema no pagamento ou da demora no atendimento. Às vezes, ele só queria consultar o valor.</p>

    <p>A falta de mercadoria já é, sozinha, um problema relevante no varejo.</p>

    <div class="numero">
      <b>7,65%</b>
      <p>de ruptura comercial média no varejo brasileiro, além de 6,11% de ruptura operacional, ambas em alta em relação a 2022.<small>Fonte: Pesquisa Abrappe de Perdas no Varejo Brasileiro 2024, citada pela <a href="https://centraldovarejo.com.br/o-que-e-ruptura-de-estoque-e-por-que-ela-afeta-as-vendas-no-varejo/" target="_blank" rel="noopener">Central do Varejo</a>. O dado é do varejo em geral, sem recorte específico de farmácias.</small></p>
    </div>

    <p>Esse número não diz quanto a sua farmácia perde. Para descobrir, a saída é medir na própria loja.</p>

    <h2 id="conta">Quanto ela pode custar</h2>

    <p>Uma conta simples ajuda a dimensionar o problema. Conte, por alguns dias, quantos atendimentos terminam sem venda e use a sua média de valor.</p>

    <div class="calc">
      <h3>Simule o valor das vendas perdidas</h3>
      <p>Troque os exemplos pelos números da sua farmácia.</p>
      <div class="calc__campos">
        <label for="pv-dia">Vendas perdidas por dia<input type="number" id="pv-dia" min="0" step="1" value="5" inputmode="decimal"></label>
        <label for="pv-ticket">Valor médio (R$)<input type="number" id="pv-ticket" min="0" step="5" value="40" inputmode="decimal"></label>
        <label for="pv-dias">Dias abertos por mês<input type="number" id="pv-dias" min="1" max="31" step="1" value="26" inputmode="decimal"></label>
      </div>
      <div class="calc__saida" aria-live="polite">
        <div><span>Por mês</span><b id="pv-mes">—</b></div>
        <div><span>Por ano</span><b id="pv-ano">—</b></div>
      </div>
    </div>

    <p>Nem toda perda é recuperável. Quem só veio consultar o preço talvez nunca comprasse. Mesmo assim, conhecer o tamanho do problema ajuda a decidir onde agir primeiro.</p>

    <h2 id="como-medir">Como registrar os motivos</h2>

    <p>No Prosystem, o registro acontece no momento do atendimento. Ao excluir um produto da tela de vendas ou uma pré-venda, o sistema abre uma janela para informar o motivo.</p>

{tela("perda-vendas-motivo", "Janela do Prosystem pedindo o motivo da exclusão do item, com opções de falta do produto, oferta da concorrência, problema de pagamento, tempo de atendimento e consulta de preço", "Os motivos ficam disponíveis no momento da exclusão do item.")}

    <p>A preferência "Registrar Produto Não Vendido" define como isso funciona na loja: sem registro, com motivo obrigatório ou com motivo opcional. Para que a análise seja confiável, o motivo obrigatório costuma dar um retrato mais completo.</p>

    <p>Depois, os produtos não vendidos podem ser consultados nas funções do Caixa Frente de Loja ou no relatório "Perda de Vendas", no Admin Retaguarda.</p>

{tela("perda-vendas-lista", "Tela de produtos não vendidos no Prosystem, com motivo, quantidade e data", "Consulta por período, com motivo, quantidade e data. Os nomes dos produtos foram ocultados nesta imagem.")}

    <p>No plano Plus, o Painel de Indicadores também mostra as vendas perdidas por motivo em um gráfico.</p>

{tela("perda-vendas-painel", "Gráfico do painel de indicadores do Prosystem com vendas perdidas por motivo", "Painel de indicadores, disponível no plano Plus. Dados de exemplo.")}

{cta("Quer saber por que sua farmácia perde vendas?", "Fale com a ProSystem e veja como registrar os motivos no balcão e acompanhar os resultados nos relatórios.", WHATS)}

    <h2 id="o-que-fazer">O que fazer com cada motivo</h2>

    <p>Depois de cerca de 30 dias de registro, os motivos tendem a formar um padrão. Cada um aponta para uma área diferente da farmácia.</p>

    <div class="tabela">
      <table>
        <caption>Do motivo registrado ao plano de ação</caption>
        <thead><tr><th>Motivo</th><th>O que pode indicar</th><th>Por onde começar</th></tr></thead>
        <tbody>
          <tr><td><strong>Falta do produto</strong></td><td>Falha na compra ou estoque incorreto</td><td>Revise a sugestão de compras e o estoque mínimo dos itens mais citados</td></tr>
          <tr><td><strong>Oferta da concorrência</strong></td><td>Preço fora do mercado em itens que o cliente compara</td><td>Reavalie o preço desses itens, olhando também a margem</td></tr>
          <tr><td><strong>Problema de pagamento</strong></td><td>Forma de pagamento ou condição indisponível</td><td>Confira as formas aceitas e os horários em que o problema se repete</td></tr>
          <tr><td><strong>Tempo de atendimento</strong></td><td>Fila ou equipe insuficiente em certos horários</td><td>Compare as ocorrências com os horários de maior movimento</td></tr>
          <tr><td><strong>Consulta de preço</strong></td><td>Cliente pesquisando antes de decidir</td><td>Treine a equipe para oferecer alternativas e registrar o contato autorizado</td></tr>
        </tbody>
      </table>
    </div>

    <div class="quadro">
      <span class="quadro__titulo">Na prática</span>
      <p>Comece pelo motivo mais frequente e pelos cinco produtos mais citados. Mude uma coisa de cada vez e compare o mês seguinte com o anterior.</p>
      <p>Explique à equipe o objetivo do registro. Ele serve para melhorar a compra e o preço, não para cobrar o vendedor por cada desistência. Sem essa conversa, o motivo tende a ser preenchido às pressas.</p>
    </div>
""",
    "faq": [
        ("O que é o indicador de perda de vendas?", "É o registro das vendas que não se concretizaram e dos seus motivos, como falta do produto, preço mais baixo na concorrência ou demora no atendimento. A análise ajuda a identificar padrões e definir ações."),
        ("Em quanto tempo o indicador começa a mostrar resultado?", "Com o registro feito de forma consistente, um período de 30 dias já costuma permitir a identificação de um padrão nas perdas."),
        ("Como o Prosystem registra uma venda perdida?", "Ao excluir um produto da tela de vendas ou uma pré-venda, o sistema pode pedir o motivo. Os dados ficam disponíveis nas funções do caixa e no relatório Perda de Vendas, e o plano Plus também os apresenta no Painel de Indicadores."),
        ("Ruptura e perda de vendas são a mesma coisa?", "Não. Ruptura é a falta do produto. Perda de vendas é mais ampla e inclui outros motivos, como preço, pagamento e tempo de atendimento."),
    ],
    "fontes": [
        ("https://universidade.prosystemnet.com/base-conhecimento/admin-retaguarda/ferramentas-gerenciais/indicador-de-perda-de-vendas-voce-ja-se-perguntou-as-razoes-da-perda-de-vendas", "Indicador de perda de vendas", "Universidade Prosystem"),
        ("https://universidade.prosystemnet.com/base-conhecimento/admin-retaguarda/ferramentas-gerenciais/novo-dashboard-painel-de-afericao-de-indicadores", "Novo Dashboard: painel de aferição de indicadores", "Universidade Prosystem"),
        ("https://centraldovarejo.com.br/o-que-e-ruptura-de-estoque-e-por-que-ela-afeta-as-vendas-no-varejo/", "O que é ruptura de estoque e por que ela afeta as vendas no varejo", "Central do Varejo"),
    ],
    "relacionados": [
        ("cliente-uso-continuo-farmacia-recompra-pos-venda", "Farmácia", "O remédio do seu cliente acaba em 8 dias. Quem lembra dele primeiro?"),
        ("controle-estoque-farmacia-evitar-perdas-vencimento", "Farmácia", "Controle de estoque: como evitar perdas por vencimento"),
        ("precificacao-farmacia-markup-margem-lucratividade", "Farmácia", "Precificação na farmácia: markup e margem"),
    ],
    "js": JS,
}
