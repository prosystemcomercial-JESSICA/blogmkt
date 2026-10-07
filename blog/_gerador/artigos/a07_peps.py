from base import cta

WHATS = "Olá! Li o artigo sobre PEPS no blog da ProSystem e quero controlar melhor o estoque da minha padaria."

JS = """<script>
document.addEventListener('DOMContentLoaded', function () {
  var est = document.getElementById('estoque'), cons = document.getElementById('consumo'), val = document.getElementById('validade');
  function calcula() {
    var e = parseFloat(est.value), c = parseFloat(cons.value), v = parseFloat(val.value);
    var out = function (id, x) { document.getElementById(id).textContent = x; };
    var frase = document.getElementById('p-frase');
    if (!(e > 0) || !(c > 0)) { out('p-dias', '—'); out('p-sobra', '—'); frase.textContent = ''; return; }
    var dias = e / c;
    out('p-dias', num(dias, 1) + ' dias');
    if (v > 0) {
      var sobra = Math.max(0, e - c * v);
      out('p-sobra', num(sobra, sobra % 1 ? 1 : 0));
      frase.textContent = sobra > 0
        ? 'Nesse ritmo, cerca de ' + num(sobra, sobra % 1 ? 1 : 0) + ' unidades vão vencer antes de serem usadas. Reduza a próxima compra ou use esse ingrediente primeiro.'
        : 'O estoque deve ser consumido antes do vencimento, desde que o lote mais antigo saia primeiro.';
    } else { out('p-sobra', '—'); frase.textContent = ''; }
  }
  [est, cons, val].forEach(function (i) { i.addEventListener('input', calcula); });
  calcula();
});
</script>"""

ARTIGO = {
    "slug": "peps-estoque-padaria-primeiro-que-entra-primeiro-que-sai",
    "titulo_tag": "PEPS na padaria: como organizar o estoque | ProSystem",
    "descricao": "O método PEPS, primeiro que entra, primeiro que sai, evita ingrediente vencido e compra desnecessária na padaria. Veja como aplicar no estoque seco, na câmara e no freezer.",
    "og_titulo": "PEPS na padaria: como organizar o estoque para não jogar ingrediente fora",
    "og_desc": "Primeiro que entra, primeiro que sai. Como aplicar o PEPS no estoque seco, na câmara e no freezer, com calculadora de cobertura.",
    "og_linhas": ["PEPS na padaria: como", "organizar o estoque para", "não jogar ingrediente fora"],
    "og_chips": [("PEPS", "primeiro que entra, sai"), ("PVPS", "primeiro que vence, sai")],
    "chamada": "Padaria · Estoque",
    "secao": "Padaria",
    "trilha": "PEPS no estoque da padaria",
    "h1": "PEPS na padaria: como organizar o estoque para não jogar ingrediente fora",
    "linha_fina": "Ingrediente que vence na prateleira é dinheiro que sai do caixa sem virar venda. O método recomendado pelo Sebrae é simples de aplicar e começa na hora de guardar a mercadoria.",
    "minutos": 7,
    "keywords": "PEPS padaria, primeiro que entra primeiro que sai, PVPS, estoque padaria, controle de validade ingredientes, desperdício padaria, organização de estoque",
    "whats": WHATS,
    "barra": "Falar com a ProSystem",
    "cta_lateral": ("Estoque que avisa antes de faltar", "Compras e estoque integrados ao PDV da padaria.", "Falar com a ProSystem"),
    "resumo": [
        "<strong>PEPS</strong> significa primeiro que entra, primeiro que sai: o lote mais antigo é usado antes do mais novo.",
        "Quando a validade não segue a ordem de chegada, vale o <strong>PVPS</strong>: primeiro que vence, primeiro que sai.",
        "O método começa no <strong>recebimento</strong>: produto novo vai para trás, o antigo fica na frente.",
        "Ingrediente parado ou vencido é <strong>custo sem retorno</strong> e ainda pode levar a compras desnecessárias.",
    ],
    "toc": [
        ("o-que-e", "O que é PEPS"),
        ("peps-pvps", "PEPS ou PVPS"),
        ("na-pratica", "Como aplicar"),
        ("calculadora", "Quanto tempo dura o estoque"),
        ("erros", "Erros comuns"),
    ],
    "corpo": f"""
    <p>Toda padaria já passou por isso: um saco de fermento esquecido no fundo da câmara, uma caixa de creme de leite que venceu atrás das novas, um pacote de castanha aberto há semanas. Cada item desses foi pago e não virou produto.</p>

    <p>O Sebrae recomenda organizar o estoque pelo método PEPS e acompanhar a movimentação para evitar desperdício e compras desnecessárias. A ideia é simples. O difícil é transformar em hábito da equipe.</p>

    <h2 id="o-que-e">O que é PEPS</h2>

    <p><strong>PEPS é a sigla de "primeiro que entra, primeiro que sai", um método de organização em que o ingrediente que chegou antes é usado antes.</strong> Na prateleira, isso significa que o lote mais antigo fica na frente, ao alcance da mão, e o mais novo vai para trás.</p>

    <p>O efeito aparece em duas frentes. Menos produto vence parado, e o dono passa a enxergar o que realmente tem em estoque antes de fazer o próximo pedido.</p>

    <div class="numero">
      <b>R$ 0</b>
      <p>é o retorno de um ingrediente que vence na prateleira. Ele custou o preço de compra, ocupou espaço e ainda gera trabalho de descarte.<small>Por isso o Sebrae trata ingrediente parado ou vencido como custo sem retorno.</small></p>
    </div>

    <h2 id="peps-pvps">PEPS ou PVPS?</h2>

    <p>Na maioria das vezes, o que chegou primeiro também vence primeiro. Mas nem sempre. Um lote de fermento recebido hoje pode ter validade mais curta do que o recebido na semana passada.</p>

    <div class="lado">
      <div>
        <h3>PEPS</h3>
        <ul>
          <li>Primeiro que <strong>entra</strong>, primeiro que sai</li>
          <li>Funciona pela data de chegada</li>
          <li>Bom para ingredientes de validade longa, como farinha e açúcar</li>
        </ul>
      </div>
      <div>
        <h3>PVPS</h3>
        <ul>
          <li>Primeiro que <strong>vence</strong>, primeiro que sai</li>
          <li>Funciona pela data de validade</li>
          <li>Melhor para refrigerados e itens de validade curta, como fermento fresco e laticínios</li>
        </ul>
      </div>
    </div>

    <p>Na dúvida, siga a validade. O objetivo é que nada vença antes de ser usado.</p>

    <h2 id="na-pratica">Como aplicar no dia a dia</h2>

    <ol class="passos">
      <li><div><b>Confira a validade no recebimento.</b> Antes de guardar, veja a data de cada lote e recuse produto com validade curta demais para o seu consumo.</div></li>
      <li><div><b>Guarde o novo atrás do antigo.</b> Leva alguns minutos a mais na hora da entrega e evita perda depois.</div></li>
      <li><div><b>Identifique o que foi aberto.</b> A RDC 216 exige que ingredientes fracionados tenham nome do produto, data de abertura e validade depois de aberto.</div></li>
      <li><div><b>Separe por zona.</b> Estoque seco, câmara fria e freezer, cada um com a sua prateleira de "usar primeiro".</div></li>
      <li><div><b>Faça uma checagem semanal.</b> Dez minutos por semana olhando o que vence nos próximos dias evitam a maior parte das perdas.</div></li>
    </ol>

    <div class="tabela">
      <table>
        <caption>Mapa do estoque da padaria por zona</caption>
        <thead><tr><th>Zona</th><th>Exemplos</th><th>Regra de saída</th><th>Cuidado principal</th></tr></thead>
        <tbody>
          <tr><td><strong>Estoque seco</strong></td><td>Farinha, açúcar, sal, fermento seco, chocolate em pó, embalagens</td><td>PEPS</td><td>Sacos fora do chão e longe da parede, pacotes abertos bem fechados</td></tr>
          <tr><td><strong>Câmara ou geladeira</strong></td><td>Fermento fresco, manteiga, leite, creme de leite, queijos, recheios</td><td>PVPS</td><td>Validade curta e ingredientes abertos com etiqueta</td></tr>
          <tr><td><strong>Freezer</strong></td><td>Massas congeladas, frutas, carnes para salgados</td><td>PEPS pela data de congelamento</td><td>Identificar o que foi congelado na casa, com data</td></tr>
          <tr><td><strong>Revenda</strong></td><td>Laticínios, frios, bebidas, biscoitos industrializados</td><td>PVPS</td><td>Na gôndola, produto que vence antes fica na frente</td></tr>
        </tbody>
      </table>
    </div>

    <div class="etiqueta-modelo">
      <div class="etiqueta" aria-label="Exemplo de etiqueta de ingrediente aberto">
        <b>Creme de leite</b>
        <dl>
          <dt>Aberto em</dt><dd>06/10/2026</dd>
          <dt>Usar até</dt><dd>conforme fabricante</dd>
          <dt>Responsável</dt><dd>Ana</dd>
        </dl>
      </div>
      <div>
        <p><strong>Etiqueta de ingrediente aberto.</strong> Uma etiqueta simples resolve a parte mais esquecida do PEPS: o que já foi aberto.</p>
        <p>A validade depois de aberto é a indicada pelo fabricante na embalagem. Se não houver indicação, siga o que o seu Manual de Boas Práticas define.</p>
      </div>
    </div>

    <h2 id="calculadora">Quanto tempo o seu estoque dura</h2>

    <p>PEPS evita que o lote antigo fique esquecido, mas não resolve compra em excesso. Se você compra mais do que consegue usar antes do vencimento, o ingrediente vai vencer de qualquer jeito.</p>

    <div class="calc">
      <h3>Calculadora de cobertura do estoque</h3>
      <p>Use a mesma unidade nos três campos: quilos, pacotes ou caixas.</p>
      <div class="calc__campos">
        <label for="estoque">Quantidade em estoque<input type="number" id="estoque" min="0" step="1" value="40"></label>
        <label for="consumo">Consumo por dia<input type="number" id="consumo" min="0" step="0.5" value="3"></label>
        <label for="validade">Dias até vencer o lote<input type="number" id="validade" min="0" step="1" value="10"></label>
      </div>
      <div class="calc__saida" aria-live="polite">
        <div><span>O estoque dura</span><b id="p-dias">—</b></div>
        <div><span>Quantidade que pode vencer</span><b id="p-sobra">—</b></div>
      </div>
      <p class="calc__frase" id="p-frase"></p>
    </div>

{cta("Saber o que tem em estoque sem contar na mão", "Com compras e estoque ligados ao PDV, o sistema mostra o que está saindo e o que está parado. Fale com a ProSystem e veja como funciona numa padaria.", WHATS)}

    <h3>A checagem semanal em 15 minutos</h3>

    <p>Escolha um dia fixo, de preferência antes do pedido de compras da semana, e siga sempre a mesma ordem.</p>

    <ol class="passos">
      <li><div><b>Câmara e geladeiras.</b> Separe na frente tudo o que vence nos próximos sete dias.</div></li>
      <li><div><b>Abertos.</b> Confira as etiquetas de ingredientes abertos e descarte o que passou da validade depois de aberto.</div></li>
      <li><div><b>Estoque seco.</b> Veja se não há pacote novo na frente do antigo.</div></li>
      <li><div><b>Freezer.</b> Procure itens sem data de congelamento.</div></li>
      <li><div><b>Anote o que está sobrando.</b> Esse item não entra no próximo pedido, ou entra em quantidade menor.</div></li>
    </ol>

    <p>O que vence logo pode virar sugestão para a produção da semana. Um creme de leite perto do vencimento pode virar recheio ou cobertura do dia, desde que ainda dentro da validade.</p>

    <h2 id="erros">Erros comuns que derrubam o PEPS</h2>

    <ul>
      <li><strong>Guardar a mercadoria nova na frente</strong> porque é mais rápido na hora da entrega.</li>
      <li><strong>Abrir um pacote novo</strong> quando já existe um aberto.</li>
      <li><strong>Comprar pelo hábito</strong>, sem olhar quanto ainda tem em estoque.</li>
      <li><strong>Deixar só uma pessoa</strong> sabendo onde fica cada coisa.</li>
      <li><strong>Misturar lotes</strong> numa mesma caixa, sem identificação.</li>
    </ul>

    <p>Se o problema maior da sua padaria está nas sobras de pão e não nos ingredientes, veja o guia sobre <a href="controle-de-sobras-padaria-ajustar-producao.html">como registrar sobras e ajustar a produção</a>.</p>
""",
    "faq": [
        ("O que é PEPS no estoque?", "PEPS significa primeiro que entra, primeiro que sai. É um método de organização em que o produto que chegou antes é usado antes, para evitar que lotes antigos vençam no estoque."),
        ("Qual a diferença entre PEPS e PVPS?", "No PEPS a ordem de uso segue a data de chegada. No PVPS, primeiro que vence, primeiro que sai, a ordem segue a data de validade. O PVPS é mais indicado para itens de validade curta, como refrigerados."),
        ("Como aplicar o PEPS numa padaria pequena?", "Conferindo a validade no recebimento, guardando o produto novo atrás do antigo, identificando ingredientes abertos com data de abertura e validade, separando o estoque por zonas e fazendo uma checagem semanal do que vence nos próximos dias."),
        ("A RDC 216 exige identificar ingredientes abertos?", "Sim. Pelo item 4.8.6 da RDC 216, ingredientes que não forem usados totalmente devem ser acondicionados e identificados com, no mínimo, a designação do produto, a data de fracionamento e o prazo de validade após a abertura."),
    ],
    "fontes": [
        ("https://sebraepr.com.br/controle-de-estoque-como-fazer-com-eficiencia/", "Controle de estoque: como fazer com eficiência", "Sebrae/PR"),
        ("https://bibliotecas.sebrae.com.br/chronus/ARQUIVOS_CHRONUS/bds/bds.nsf/bf03c5d336202f70bf83d5bc5def8330/$File/SP_receita_de_sucesso_como_ter_uma_cozinha_eficiente_16.pdf", "Receita de Sucesso: como ter uma cozinha eficiente", "Sebrae"),
        ("https://bvsms.saude.gov.br/bvs/saudelegis/anvisa/2004/res0216_15_09_2004.html", "Resolução RDC nº 216/2004", "Anvisa"),
    ],
    "relacionados": [
        ("controle-de-sobras-padaria-ajustar-producao", "Padaria", "Sobras na padaria: como registrar e ajustar a produção"),
        ("ficha-tecnica-padaria-padronizar-receitas-rendimento", "Padaria", "Ficha técnica: como padronizar receitas e medir rendimento"),
        ("identificacao-alimentos-preparados-padaria-etiqueta-validade", "Padaria", "Etiqueta de alimentos preparados: o que a RDC 216 exige"),
    ],
    "js": JS,
}
