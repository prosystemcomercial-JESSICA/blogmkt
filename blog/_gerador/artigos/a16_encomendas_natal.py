from base import cta

WHATS = "Olá! Li o artigo sobre encomendas de Natal no blog da ProSystem e quero organizar melhor a minha padaria."

ARTIGO = {
    "slug": "encomendas-de-natal-padaria-5-combinados",
    "data_iso": "2026-11-25T09:00:00-03:00",
    "data_curta": "25 nov. 2026",
    "data_longa": "25 de novembro de 2026",
    "titulo_tag": "Encomendas de Natal na padaria: 5 combinados | ProSystem",
    "descricao": "Encomenda no caderno vira erro na retirada. Veja 5 combinados para anotar pedido, sinal e prazo na padaria, e o que muda no Simples em 2027.",
    "og_titulo": "Encomenda de Natal no caderno. E se faltar?",
    "og_desc": "Cinco combinados para anotar pedido, sinal, retirada e limite de produção antes de dezembro.",
    "og_linhas": ["Encomenda de Natal", "no caderno.", "E se faltar?"],
    "og_chips": [("5 combinados", "para fazer agora"), ("1 ficha", "por pedido")],
    "chamada": "Padaria · Natal",
    "secao": "Padaria",
    "trilha": "Encomendas de Natal",
    "h1": "Encomendas de Natal na padaria: 5 combinados que evitam prejuízo em dezembro",
    "linha_fina": "O erro de uma encomenda quase nunca aparece quando o pedido é anotado. Ele aparece no dia 24, com o cliente no balcão e a produção já encerrada.",
    "minutos": 6,
    "keywords": "encomendas de Natal na padaria, encomenda de ceia, controle de encomendas padaria, sinal de encomenda, panetone padaria, Simples Nacional 2027 entrega futura",
    "whats": WHATS,
    "barra": "Falar com a ProSystem",
    "cta_lateral": ("Natal com o caixa em ordem", "Vendas, estoque e fechamento no mesmo sistema, para a padaria atravessar dezembro com os números na mão.", "Falar com a ProSystem"),
    "aviso": "Os 5 combinados são orientação da ProSystem, a partir da rotina de lojas do setor. O exemplo da ficha é ilustrativo.",
    "resumo": [
        "Encomenda de Natal na padaria precisa de <strong>nome, telefone, item, quantidade, dia, hora e sinal</strong> anotados no mesmo lugar.",
        "Defina <strong>até quando aceita pedido</strong> antes de abrir a lista, de acordo com o que a produção consegue entregar.",
        "Escreva o que acontece com o <strong>sinal</strong> se o cliente cancelar, e confirme o pedido de volta com ele.",
        "No Simples, a partir de 2027, o faturamento passa a seguir o <strong>documento fiscal</strong>, inclusive em venda para entrega futura. Confirme com seu contador.",
    ],
    "toc": [
        ("por-que", "Por que o caderno falha"),
        ("combinados", "Os 5 combinados"),
        ("ficha", "A ficha de cada pedido"),
        ("simples", "O que muda em 2027"),
    ],
    "corpo": f"""
    <p>Véspera de Natal, nove da manhã. O cliente chega para buscar dois panetones e uma torta. No caderno, está escrito "Marcos, torta". Não diz qual torta, nem que hora, nem se ele deixou sinal. Tem outro Marcos duas linhas abaixo.</p>

    <p>Nessa hora, a padaria tem duas saídas ruins: improvisar com o que sobrou ou perder o cliente no dia em que ele mais precisava dela.</p>

    <h2 id="por-que">Por que o caderno falha em dezembro</h2>

    <p><strong>O caderno funciona enquanto os pedidos cabem na cabeça de quem anotou.</strong> Em dezembro, várias pessoas atendem, o telefone e o WhatsApp tocam juntos, e quem anota nem sempre é quem produz.</p>

    <p>O problema não é o papel. É a falta de um combinado sobre o que precisa ser anotado. No dia da retirada, dá para entender a letra, mas não dá para adivinhar uma informação que ninguém perguntou.</p>

    <blockquote class="citacao">Encomenda mal anotada não falha quando entra. Falha no dia da retirada, quando não há mais tempo de corrigir.</blockquote>

    <h2 id="combinados">Os 5 combinados, antes de abrir a lista</h2>

    <div class="casos">
      <div class="caso">
        <div><span class="selo selo--acao">1</span><h3>Nome e telefone de quem pediu</h3></div>
        <p>Nome completo e um telefone que atende. Sem isso, não há como avisar se faltar um ingrediente ou se o cliente não aparecer.</p>
      </div>
      <div class="caso">
        <div><span class="selo selo--acao">2</span><h3>Item e quantidade, sem abreviar</h3></div>
        <p>"Torta" não é pedido. Escreva sabor, tamanho, peso e quantidade. Se a produção precisar perguntar, a anotação está incompleta.</p>
      </div>
      <div class="caso">
        <div><span class="selo selo--acao">3</span><h3>Dia e hora da retirada</h3></div>
        <p>Com a hora marcada, dá para espalhar a retirada ao longo do dia e montar a produção de trás para a frente.</p>
      </div>
      <div class="caso">
        <div><span class="selo selo--alerta">4</span><h3>Sinal combinado e registrado</h3></div>
        <p>Combine o valor, anote quanto foi pago e como. Deixe escrito o que acontece com o sinal se o cliente cancelar.</p>
      </div>
      <div class="caso">
        <div><span class="selo selo--alerta">5</span><h3>Data limite para aceitar pedido</h3></div>
        <p>Calcule quanto a produção consegue entregar e defina até quando a lista fica aberta. Pode ser por data ou por quantidade.</p>
      </div>
    </div>

    <div class="quadro">
      <span class="quadro__titulo">Na prática</span>
      <p>Depois de anotar, leia o pedido de volta para o cliente ou mande por WhatsApp: item, quantidade, dia, hora e valor que falta pagar. Um minuto de confirmação evita a discussão no balcão.</p>
    </div>

    <h2 id="ficha">A ficha de cada pedido</h2>

    <p>Uma ficha por pedido, em papel ou planilha, resolve. Com ela, a produção lê o mesmo que o atendimento anotou, e dá para somar quanto de cada item será preciso por dia.</p>

    <div class="tabela">
      <table>
        <caption>Exemplo de ficha de encomenda</caption>
        <thead><tr><th>Campo</th><th>Exemplo</th></tr></thead>
        <tbody>
          <tr><td><strong>Cliente e telefone</strong></td><td>Marcos Souza, (00) 00000-0000</td></tr>
          <tr><td><strong>Itens</strong></td><td>2 panetones de frutas de 500 g e 1 torta de nozes de 1,5 kg</td></tr>
          <tr><td><strong>Retirada</strong></td><td>24/12, às 10h</td></tr>
          <tr><td><strong>Valor e sinal</strong></td><td>Total de R$ 200, sinal de R$ 100 pago por Pix em 05/12</td></tr>
          <tr><td><strong>Quem anotou</strong></td><td>Ana, em 05/12</td></tr>
        </tbody>
      </table>
    </div>
    <p class="calc__nota">Nome, telefone e valores ilustrativos.</p>

    <p>Na semana do Natal, some as fichas por item e por dia de retirada. O resultado é a lista de produção e de compras. Se o total passar do que a equipe consegue fazer, a lista fecha antes, e isso também evita desperdício. Para acertar a conta de cada item, veja como montar a <a href="ficha-tecnica-padaria-padronizar-receitas-rendimento.html">ficha técnica da padaria</a>.</p>

{cta("Dezembro é o mês em que o caixa mais pesa", "A ProSystem não substitui a sua ficha de encomendas, mas ajuda no resto do mês: vendas, estoque e fechamento de caixa no mesmo sistema. Fale com a gente e veja como isso funciona numa padaria.", WHATS)}

    <h2 id="simples">O que muda em 2027 para quem está no Simples</h2>

    <p>A mudança não é para este Natal, mas é bom saber agora. O Comitê Gestor do Simples Nacional decidiu <a href="https://www.gov.br/receitafederal/pt-br/assuntos/noticias/2026/agosto/cgsn-atualiza-regras-do-simples-nacional-para-adequacao-a-reforma-tributaria-do-consumo" target="_blank" rel="noopener">vincular o faturamento à emissão do documento fiscal</a>, e a regra alcança as operações para entrega futura. As alterações valem, em regra, a partir de 1º de janeiro de 2027.</p>

    <p>A encomenda é paga antes e entregue depois, então esse é um assunto para levar ao contador. A notícia da Receita não trata de adiantamentos, por isso pergunte como ele quer que o sinal seja tratado na sua padaria a partir de 2027.</p>

    <p>Passado o Natal, compare o que foi encomendado com o que foi entregue e o que sobrou. Esse registro ajuda a montar a lista do próximo ano. Veja como fazer o <a href="controle-de-sobras-padaria-ajustar-producao.html">controle de sobras da padaria</a>.</p>
""",
    "faq": [
        ("O que anotar em uma encomenda de Natal?", "Nome e telefone de quem pediu, item com sabor, tamanho e quantidade, dia e hora da retirada, valor total, sinal pago e quem anotou o pedido."),
        ("A padaria pode cobrar sinal na encomenda?", "Muitas lojas combinam um adiantamento. O importante é informar o valor antes, registrar o pagamento e deixar claro o que acontece se o cliente cancelar. Em caso de dúvida sobre as regras, consulte seu contador ou advogado."),
        ("Até quando aceitar encomendas de Natal?", "Não existe uma data única. Ela depende de quanto a equipe e os fornos conseguem produzir. Some os pedidos por item e por dia e feche a lista antes de passar desse limite."),
        ("O que muda nas encomendas para quem está no Simples em 2027?", "A Receita informa que o faturamento passa a ser vinculado à emissão do documento fiscal, regra que alcança as operações para entrega futura, em regra a partir de 1º de janeiro de 2027. Como isso se aplica ao sinal deve ser confirmado com o contador."),
    ],
    "fontes": [
        ("https://www.gov.br/receitafederal/pt-br/assuntos/noticias/2026/agosto/cgsn-atualiza-regras-do-simples-nacional-para-adequacao-a-reforma-tributaria-do-consumo", "CGSN atualiza regras do Simples Nacional para adequação à reforma tributária do consumo", "Receita Federal"),
    ],
    "relacionados": [
        ("controle-de-sobras-padaria-ajustar-producao", "Padaria", "Sobras na padaria: como registrar e ajustar a produção"),
        ("ficha-tecnica-padaria-padronizar-receitas-rendimento", "Padaria", "Ficha técnica: como padronizar receitas e medir rendimento"),
        ("sangria-de-caixa-padaria-como-evitar-dinheiro-acumulado", "Padaria", "Quanto dinheiro tem na gaveta da sua padaria agora?"),
    ],
}
