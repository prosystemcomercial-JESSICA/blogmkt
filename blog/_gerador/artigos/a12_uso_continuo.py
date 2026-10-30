from base import cta, tela

WHATS = "Olá! Li o artigo sobre clientes de uso contínuo no blog da ProSystem e quero ver como funciona na minha farmácia."

JS = """<script>
document.addEventListener('DOMContentLoaded', function () {
  var ids = ['uc-clientes', 'uc-ticket', 'uc-ciclo', 'uc-retidos'];
  function val(i) { return parseFloat(String(document.getElementById(i).value).replace(',', '.')); }
  function calcula() {
    var c = val('uc-clientes'), t = val('uc-ticket'), d = val('uc-ciclo'), r = val('uc-retidos');
    var saida = document.getElementById('uc-ano'), n = document.getElementById('uc-n');
    if (!(c > 0) || !(t > 0) || !(d > 0) || !(r >= 0)) { saida.textContent = '—'; n.textContent = '—'; return; }
    var pessoas = c * r / 100;
    n.textContent = num(pessoas, 0);
    saida.textContent = 'R$ ' + num(pessoas * t * 365 / d, 0);
  }
  ids.forEach(function (i) { document.getElementById(i).addEventListener('input', calcula); });
  calcula();
});
</script>"""

ARTIGO = {
    "slug": "cliente-uso-continuo-farmacia-recompra-pos-venda",
    "data_iso": "2026-10-30T09:00:00-03:00",
    "data_curta": "30 out. 2026",
    "data_longa": "30 de outubro de 2026",
    "titulo_tag": "Cliente de uso contínuo: como a farmácia não perde a recompra | ProSystem",
    "descricao": "O remédio do cliente vai acabar e ele pode cotar em outra farmácia. Veja como calcular a próxima compra, avisar o balcão e organizar o pós-venda de uso contínuo.",
    "og_titulo": "O remédio do seu cliente acaba em 8 dias. Quem vai lembrar dele primeiro?",
    "og_desc": "Como transformar a posologia em data de recompra e organizar o pós-venda de uso contínuo na farmácia.",
    "og_linhas": ["O remédio do seu cliente", "acaba em 8 dias. Quem", "lembra dele primeiro?"],
    "og_chips": [("9 dias", "de alerta antes do fim"), ("60 dias", "ciclo médio de reposição")],
    "chamada": "Farmácia · Fidelização",
    "secao": "Farmácia",
    "trilha": "Cliente de uso contínuo",
    "h1": "O remédio do seu cliente acaba em 8 dias. Quem vai lembrar dele primeiro?",
    "linha_fina": "Quem toma medicamento todo mês não avisa quando vai comprar. Se ninguém lembrar, a reposição vira uma nova cotação, e a farmácia só descobre que perdeu o cliente meses depois.",
    "minutos": 7,
    "keywords": "cliente de uso contínuo farmácia, pós-venda farmácia, recompra de medicamentos, fidelização farmácia, próxima compra uso contínuo, sistema para farmácia",
    "whats": WHATS,
    "barra": "Ver na minha farmácia",
    "cta_lateral": ("Uso contínuo no sistema", "Posologia na venda, alerta no balcão e relatório de próxima compra.", "Falar com a ProSystem"),
    "aviso": "Telas reais do Prosystem, com nomes de produtos e dados de pessoas ocultados ou substituídos. Os valores da simulação são exemplos.",
    "resumo": [
        "O ciclo para refazer uma medicação contínua é, em média, de <strong>60 dias</strong> e costuma depender de o próprio cliente lembrar.",
        "Sem lembrete, a reposição pode virar <strong>nova cotação</strong> entre farmácias, por preço ou por agilidade.",
        "Informando a posologia na venda, o sistema <strong>calcula a próxima compra</strong> e avisa o balcão nos 9 dias anteriores ao fim da medicação.",
        "Dado de medicamento é <strong>dado de saúde</strong>: combine o pós-venda com regras claras de autorização e LGPD.",
    ],
    "toc": [
        ("problema", "A venda que some sem aviso"),
        ("conta", "Quanto vale essa recompra"),
        ("como-funciona", "Como funciona no sistema"),
        ("rotina", "A rotina de pós-venda"),
        ("lgpd", "Cuidados com a LGPD"),
    ],
    "corpo": f"""
    <p>Dona Maria toma o mesmo medicamento há anos e compra sempre com você. Um dia, a caixa está quase no fim, ela passa em frente a outra farmácia e aproveita. Ninguém reclamou, ninguém cancelou nada. No seu caixa, essa perda não aparece em lugar nenhum.</p>

    <p>É assim que o cliente de uso contínuo costuma ir embora: em silêncio, na hora da reposição.</p>

    <h2 id="problema">A venda que some sem aviso</h2>

    <p>Muitos clientes compram a mesma medicação por longos períodos, para si ou para a família. O ciclo de reposição é, em média, de 60 dias e, na maioria das vezes, parte de uma nova iniciativa do próprio cliente.</p>

    <p>Quando a farmácia não se antecipa, duas coisas podem acontecer: o tratamento corre o risco de ser interrompido, e a reposição vira a oportunidade de comparar preço e agilidade com outras lojas.</p>

    <div class="quadro">
      <span class="quadro__titulo">O ponto central</span>
      <p>Poucas farmácias têm uma rotina para lembrar o paciente de que a medicação está perto do fim. Quem cria essa rotina atende melhor e chega antes da concorrência.</p>
    </div>

    <h2 id="conta">Quanto vale essa recompra</h2>

    <p>Antes de montar qualquer processo, vale fazer a conta com os números da sua loja. A simulação abaixo mostra o que representa, em um ano, deixar de perder uma pequena parte desses clientes.</p>

    <div class="calc">
      <h3>Simule o valor de manter esses clientes</h3>
      <p>Troque os exemplos pelos números da sua farmácia.</p>
      <div class="calc__campos">
        <label for="uc-clientes">Clientes de uso contínuo<input type="number" id="uc-clientes" min="0" step="10" value="200" inputmode="decimal"></label>
        <label for="uc-ticket">Valor de cada recompra (R$)<input type="number" id="uc-ticket" min="0" step="5" value="60" inputmode="decimal"></label>
        <label for="uc-ciclo">Dias entre as recompras<input type="number" id="uc-ciclo" min="1" step="5" value="60" inputmode="decimal"></label>
        <label for="uc-retidos">Clientes mantidos (%)<input type="number" id="uc-retidos" min="0" max="100" step="1" value="5" inputmode="decimal"></label>
      </div>
      <div class="calc__saida" aria-live="polite">
        <div><span>Clientes mantidos</span><b id="uc-n">—</b></div>
        <div><span>Vendas em um ano</span><b id="uc-ano">—</b></div>
      </div>
    </div>

    <p>O resultado é uma estimativa de faturamento, não de lucro, e serve para dimensionar o tamanho da oportunidade na sua loja.</p>

    <h2 id="como-funciona">Como funciona no sistema</h2>

    <p>No Prosystem, o controle começa no cadastro do produto, onde ficam a quantidade de comprimidos ou doses por embalagem e, quando houver, o intervalo entre embalagens. O restante acontece na rotina do balcão.</p>

    <h3>1. Na venda, a posologia vira uma data</h3>

    <p>Ao vender um produto de uso contínuo para um cliente identificado, o sistema pede a posologia e calcula automaticamente a próxima compra. Sem o cliente na venda, essa informação não existe. Por isso, identificar o cliente é o hábito que sustenta todo o processo.</p>

{tela("uso-continuo-proxima-compra", "Tela do Prosystem com posologia informada e data de próxima compra calculada", "Com a posologia informada, a data de próxima compra é calculada na hora.")}

    <h3>2. Na volta do cliente, o balcão é avisado</h3>

    <p>Se esse cliente fizer qualquer compra nos 9 dias anteriores ao fim da medicação, um alerta aparece na pré-venda. O vendedor pode oferecer a reposição ali mesmo e, com um clique em "Inserir/Vender", o produto entra na venda. Se a reposição já tiver sido comprada, o aviso não se repete.</p>

{tela("uso-continuo-alerta", "Alerta do Prosystem informando que a medicação do cliente está próxima de acabar", "O aviso mostra o medicamento e a previsão da próxima compra.")}

    <h3>3. No escritório, quem deve comprar vira lista</h3>

    <p>O relatório "Clientes de Produtos de Uso Contínuo", no Admin Retaguarda, filtra por período de próxima compra e traz nome, contato e produto. É a base para organizar o pós-venda ativo.</p>

{tela("uso-continuo-relatorio", "Lista de relatórios do Prosystem com a opção Clientes de Produtos de Uso Contínuo selecionada", "O relatório é escolhido na lista de relatórios de clientes.")}

{cta("Quer ver isso funcionando na sua farmácia?", "Fale com a ProSystem e veja como a posologia, o alerta no balcão e o relatório de próxima compra entram na rotina da sua loja.", WHATS)}

    <h2 id="rotina">A rotina de pós-venda em cinco passos</h2>

    <ol class="passos">
      <li><div><b>Comece pelos produtos que mais se repetem.</b> Revise o cadastro dos itens de uso contínuo com maior saída, em vez de tentar acertar tudo de uma vez.</div></li>
      <li><div><b>Torne a identificação do cliente um padrão.</b> Combine com a equipe de pedir o cadastro nas vendas desses produtos.</div></li>
      <li><div><b>Confirme a posologia com o cliente.</b> A data só é útil se a dose estiver correta. Em caso de dúvida, o farmacêutico orienta.</div></li>
      <li><div><b>Reserve um horário fixo na semana.</b> Gere o relatório dos próximos dias e defina quem faz os contatos autorizados.</div></li>
      <li><div><b>Meça o retorno.</b> Compare, a cada mês, quantos clientes da lista voltaram a comprar.</div></li>
    </ol>

    <h2 id="lgpd">Cuidados com a LGPD</h2>

    <p>A lista de quem toma qual medicamento merece atenção especial. A Lei Geral de Proteção de Dados classifica o <a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm" target="_blank" rel="noopener">dado referente à saúde como dado pessoal sensível</a> (art. 5º, II), e o art. 11 limita as hipóteses em que ele pode ser tratado.</p>

    <div class="quadro quadro--alerta">
      <span class="quadro__titulo">Antes de fazer contato ativo</span>
      <p>Registre a autorização do cliente para receber lembretes, limite o acesso ao relatório a quem realmente precisa e não cite o medicamento em mensagens que outras pessoas possam ver. Valide o processo com a assessoria jurídica da farmácia.</p>
    </div>
""",
    "faq": [
        ("O que é cliente de uso contínuo na farmácia?", "É o cliente que compra o mesmo medicamento de forma recorrente, para si ou para um familiar, por um longo período. O ciclo de reposição costuma ser, em média, de 60 dias."),
        ("Como o Prosystem calcula a próxima compra?", "Com a quantidade da embalagem informada no cadastro do produto e a posologia informada na venda para um cliente identificado, o sistema calcula e guarda a data da próxima compra."),
        ("Quando o alerta de uso contínuo aparece?", "Quando o cliente faz uma compra nos 9 dias anteriores ao fim da medicação. O aviso aparece na tela de pré-venda e não é repetido se a reposição já tiver sido comprada."),
        ("A farmácia pode entrar em contato para lembrar da reposição?", "Dado de medicamento é dado de saúde, considerado sensível pela LGPD. O contato deve seguir uma base legal adequada, com autorização registrada e acesso restrito às informações, validado pela assessoria jurídica da farmácia."),
    ],
    "fontes": [
        ("https://universidade.prosystemnet.com/base-conhecimento/admin-retaguarda/gestao-de-clientes/clientes-de-uso-continuo-saiba-como-fazer-o-pos-venda", "Clientes de uso contínuo: saiba como fazer o pós-venda", "Universidade Prosystem"),
        ("https://universidade.prosystemnet.com/base-conhecimento/admin-retaguarda/gestao-de-clientes/uso-continuo-ativo-nao-perca-vendas", "Uso contínuo ativo: não perca vendas", "Universidade Prosystem"),
        ("https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm", "Lei nº 13.709/2018 (LGPD), arts. 5º e 11", "Planalto"),
    ],
    "relacionados": [
        ("perda-de-vendas-farmacia-como-medir-motivos", "Farmácia", "A venda perdida não aparece no caixa, mas dá para medir"),
        ("pbm-farmacia-como-aumentar-ticket-medio-convenios", "Farmácia", "PBM na farmácia: como aumentar o ticket médio"),
        ("kpis-indicadores-gestao-farmacia", "Farmácia", "10 indicadores para gestores de farmácia"),
    ],
    "js": JS,
}
