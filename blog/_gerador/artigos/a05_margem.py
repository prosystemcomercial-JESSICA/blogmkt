from base import cta

WHATS = "Olá! Li o artigo sobre margem no blog da ProSystem e quero acompanhar melhor o lucro da minha loja."

JS = """<script>
document.addEventListener('DOMContentLoaded', function () {
  var m = document.getElementById('margem'), d = document.getElementById('pct-desconto');
  function calcula() {
    var mg = parseFloat(String(m.value).replace(',', '.')), ds = parseFloat(String(d.value).replace(',', '.'));
    var out = function (id, v) { document.getElementById(id).textContent = v; };
    var frase = document.getElementById('m-frase');
    if (!(mg > 0) || !(ds >= 0) || mg >= 100) { ['m-nova','m-vol'].forEach(function (i) { out(i, '—'); }); frase.textContent = ''; return; }
    var nova = (mg - ds) / (100 - ds) * 100;
    out('m-nova', num(nova, 1) + '%');
    if (ds >= mg) { out('m-vol', 'impossível'); frase.textContent = 'Com esse desconto você vende abaixo do custo. Nenhum aumento de volume recupera o lucro.'; return; }
    var vol = (mg / (mg - ds) - 1) * 100;
    out('m-vol', '+' + num(vol, 0) + '%');
    frase.textContent = 'Para lucrar o mesmo em reais, você precisa vender ' + num(vol, 0) + '% a mais em quantidade. Se vendia 100 unidades, agora precisa vender ' + num(100 + vol, 0) + '.';
  }
  m.addEventListener('input', calcula); d.addEventListener('input', calcula);
  calcula();
});
</script>"""

ARTIGO = {
    "slug": "vender-mais-nao-e-lucrar-mais-margem-varejo",
    "titulo_tag": "Vender mais não é lucrar mais: margem no varejo | ProSystem",
    "descricao": "Quase metade das empresas que aumentaram a receita em 2026 perdeu margem. Veja onde a margem escapa na farmácia e na padaria e calcule quanto um desconto exige de venda extra.",
    "og_titulo": "Vender mais não é lucrar mais: por que metade das empresas que cresceram perdeu margem",
    "og_desc": "49% das empresas com receita em alta perderam margem em 2026. Veja onde o lucro escapa no varejo e faça a conta do desconto.",
    "og_linhas": ["Vender mais não é", "lucrar mais: onde a", "margem escapa no varejo"],
    "og_chips": [("49%", "cresceram e perderam margem"), ("+50%", "de venda com 10% de desconto")],
    "chamada": "Varejo · Margem",
    "secao": "Gestão",
    "trilha": "Margem no varejo",
    "h1": "Vender mais não é lucrar mais: por que metade das empresas que cresceram perdeu margem em 2026",
    "linha_fina": "Um levantamento com empresas abertas mostrou que crescer a receita não garantiu mais lucro. No balcão da farmácia e da padaria, o mesmo efeito aparece em descontos, mix e prazo de pagamento.",
    "minutos": 9,
    "keywords": "margem de lucro varejo, receita x margem, desconto e margem, quanto vender a mais com desconto, margem farmácia, margem padaria, gestão de margem 2026",
    "whats": WHATS,
    "barra": "Falar com a ProSystem",
    "cta_lateral": ("Venda, custo e financeiro juntos", "Para ver a margem de verdade, a venda precisa conversar com o custo e com o caixa.", "Falar com a ProSystem"),
    "resumo": [
        "Das 254 empresas abertas que aumentaram a receita no 1º semestre de 2026, <strong>125 (49,2%) perderam margem operacional</strong>, segundo a Strategy& para a Exame.",
        "No varejo, a margem escapa por <strong>descontos, mix de produtos, taxas de cartão, perdas e custo de reposição</strong> desatualizado.",
        "Com margem de 30%, um desconto de 10% exige vender <strong>50% a mais</strong> só para empatar o lucro.",
        "A saída é medir margem por produto e por forma de pagamento, não só o faturamento do dia.",
    ],
    "toc": [
        ("pesquisa", "O que a pesquisa encontrou"),
        ("desconto", "A conta do desconto"),
        ("onde-escapa", "Onde a margem escapa"),
        ("como-medir", "Como medir a margem"),
    ],
    "corpo": f"""
    <p>O caixa fechou o mês maior do que no ano passado, o movimento na loja aumentou e, mesmo assim, sobrou menos dinheiro na conta. Se isso já aconteceu com você, saiba que não foi só na sua farmácia ou padaria.</p>

    <p>Uma análise publicada pela <a href="https://exame.com/insight/mais-receita-menos-margem-o-paradoxo-do-crescimento-das-empresas-brasileiras/p" target="_blank" rel="noopener">Exame</a> mostrou que quase metade das empresas que aumentaram a receita em 2026 passou a ganhar menos em cada real vendido.</p>

    <h2 id="pesquisa">O que a pesquisa encontrou</h2>

    <p>A consultoria Strategy& comparou os resultados do primeiro semestre de 2026 com os de 2025 em 366 companhias abertas não financeiras, a partir dos dados enviados à CVM.</p>

    <div class="numero">
      <b>49,2%</b>
      <p>das empresas que aumentaram a receita perderam margem operacional: 125 de 254.<small>Fonte: Strategy& para a <a href="https://exame.com/insight/mais-receita-menos-margem-o-paradoxo-do-crescimento-das-empresas-brasileiras/p" target="_blank" rel="noopener">Exame Insight</a>, dados do 1º semestre de 2026.</small></p>
    </div>

    <p>Entre as que cresceram, 83 tiveram queda no resultado operacional em reais e 115 viram o lucro líquido piorar. Os motivos apontados vão de preços defasados e descontos excessivos a prazos de pagamento longos, estoques parados e insumos mais caros.</p>

    <blockquote class="citacao">"Perda de margem quase nunca tem causa única." Luciano Castro, líder de transformação da Strategy&, à Exame.</blockquote>

    <p>São grandes empresas, mas os vilões listados são os mesmos de qualquer balcão. A diferença é que, na loja pequena, ninguém publica o balanço e o problema aparece só quando o dinheiro some do caixa.</p>

    <h2 id="desconto">A conta do desconto que ninguém faz</h2>

    <p>Desconto é a forma mais rápida de vender mais e também a mais rápida de perder margem. O motivo é matemático: o desconto sai inteiro do lucro, não do custo.</p>

    <p>Um produto que custa R$ 70 e é vendido a R$ 100 tem margem bruta de 30%, ou R$ 30 por unidade. Com 10% de desconto, ele passa a ser vendido a R$ 90, e a margem cai para R$ 20. Para lucrar os mesmos R$ 30 por unidade vendida antes, é preciso vender 50% a mais.</p>

    <div class="calc">
      <h3>Quanto você precisa vender a mais para pagar o desconto</h3>
      <p>Informe a margem bruta do produto (sobre o preço de venda) e o desconto que pretende dar.</p>
      <div class="calc__campos">
        <label for="margem">Margem bruta atual (%)<input type="number" id="margem" min="0" max="99" step="1" value="30" inputmode="decimal"></label>
        <label for="pct-desconto">Desconto (%)<input type="number" id="pct-desconto" min="0" max="99" step="1" value="10" inputmode="decimal"></label>
      </div>
      <div class="calc__saida" aria-live="polite">
        <div><span>Margem depois do desconto</span><b id="m-nova">—</b></div>
        <div><span>Venda extra para empatar o lucro</span><b id="m-vol">—</b></div>
      </div>
      <p class="calc__frase" id="m-frase"></p>
      <p class="calc__nota">A conta considera só a margem bruta. Taxas de cartão, comissões e embalagens reduzem ainda mais o resultado.</p>
    </div>

    <p>A tabela abaixo mostra o mesmo cálculo para combinações comuns. Quanto menor a margem do produto, mais caro fica cada ponto de desconto.</p>

    <div class="tabela">
      <table>
        <caption>Quanto vender a mais para manter o mesmo lucro em reais</caption>
        <thead><tr><th>Margem bruta</th><th>Desconto de 5%</th><th>Desconto de 10%</th><th>Desconto de 15%</th></tr></thead>
        <tbody>
          <tr><td><strong>20%</strong></td><td>+33%</td><td>+100%</td><td>+300%</td></tr>
          <tr><td><strong>30%</strong></td><td>+20%</td><td>+50%</td><td>+100%</td></tr>
          <tr><td><strong>40%</strong></td><td>+14%</td><td>+33%</td><td>+60%</td></tr>
          <tr><td><strong>50%</strong></td><td>+11%</td><td>+25%</td><td>+43%</td></tr>
        </tbody>
      </table>
    </div>

    <p>Repare na primeira linha. Num produto com 20% de margem, um desconto de 10% obriga a loja a vender o dobro só para ficar no mesmo lugar. É por isso que promoção em item de margem apertada raramente se paga sozinha.</p>

    <h3>Quando o desconto faz sentido</h3>

    <p>Nada disso quer dizer que desconto é sempre ruim. Ele funciona quando tem um objetivo claro e um limite definido. Alguns casos em que costuma valer a pena:</p>

    <ul>
      <li><strong>Produto perto do vencimento.</strong> Vender com desconto recupera parte do custo. Jogar fora não recupera nada.</li>
      <li><strong>Estoque parado.</strong> Dinheiro preso na prateleira tem custo. Liberar o capital pode compensar a margem menor.</li>
      <li><strong>Produto que puxa outro.</strong> O café com desconto que traz o cliente que leva o pão de queijo e o bolo, se a conta do ticket médio fechar.</li>
      <li><strong>Conquista de cliente recorrente.</strong> Um desconto na primeira compra de um cliente de uso contínuo, quando ele de fato volta.</li>
    </ul>

    <p>Em todos os casos, a pergunta é a mesma: depois do desconto, o lucro em reais aumentou ou diminuiu? Se ninguém mede, a resposta costuma ser a segunda.</p>

    <h2 id="onde-escapa">Onde a margem escapa na farmácia e na padaria</h2>

    <div class="tabela">
      <table>
        <caption>Cinco vazamentos frequentes no varejo</caption>
        <thead><tr><th>Vazamento</th><th>Como aparece</th><th>Como perceber</th></tr></thead>
        <tbody>
          <tr><td><strong>Desconto sem critério</strong></td><td>Desconto dado no balcão para "não perder a venda"</td><td>Compare a margem média dos dias com e sem campanha</td></tr>
          <tr><td><strong>Mix de produtos</strong></td><td>Cresce a venda dos itens de margem baixa, como medicamentos de preço regulado ou pão francês</td><td>Margem por categoria, mês a mês</td></tr>
          <tr><td><strong>Forma de pagamento</strong></td><td>Mais vendas no cartão parcelado, com taxa maior</td><td>Margem líquida por forma de pagamento</td></tr>
          <tr><td><strong>Custo de reposição</strong></td><td>Preço de venda calculado sobre o custo antigo</td><td>Compare o preço de venda com a última nota de compra</td></tr>
          <tr><td><strong>Perdas</strong></td><td>Vencidos, quebras, sobras de produção</td><td>Perdas em reais como percentual do faturamento</td></tr>
        </tbody>
      </table>
    </div>

    <div class="quadro">
      <span class="quadro__titulo">Na prática</span>
      <p>Uma padaria aumenta a venda de pão francês com uma promoção no café da manhã. O faturamento sobe, mas o pão francês tem margem apertada e a promoção ainda tira 10% do preço. Se os itens de margem melhor, como salgados e confeitaria, não acompanharem, o lucro do mês cai.</p>
      <p>Numa farmácia, o efeito parecido vem do crescimento de medicamentos de preço regulado frente à perfumaria e aos itens de higiene.</p>
    </div>

{cta("Você sabe a margem de cada produto que vende?", "Para enxergar a margem de verdade, a venda do PDV precisa conversar com o custo da nota de compra e com o financeiro. Fale com a ProSystem e veja como juntar tudo no mesmo sistema.", WHATS)}

    <h2 id="como-medir">Como medir a margem no dia a dia</h2>

    <ol class="passos">
      <li><div><b>Mantenha o custo atualizado pela última compra.</b> Preço de venda calculado sobre custo antigo é margem fictícia.</div></li>
      <li><div><b>Acompanhe a margem por categoria.</b> Medicamentos, perfumaria e higiene na farmácia. Pães, confeitaria, salgados e revenda na padaria.</div></li>
      <li><div><b>Separe a margem por forma de pagamento.</b> Uma venda no crédito parcelado pode render bem menos do que a mesma venda no Pix.</div></li>
      <li><div><b>Coloque regra no desconto.</b> Defina limite por categoria e quem pode autorizar. Desconto livre no balcão é margem sem controle.</div></li>
      <li><div><b>Olhe o lucro em reais, não só o faturamento.</b> Feche o mês comparando lucro bruto com o do mesmo mês do ano anterior.</div></li>
    </ol>

    <h3>Os números para olhar todo mês</h3>

    <div class="tabela">
      <table>
        <caption>Painel mínimo de margem para uma loja pequena</caption>
        <thead><tr><th>Indicador</th><th>Como calcular</th><th>O que revela</th></tr></thead>
        <tbody>
          <tr><td><strong>Margem bruta</strong></td><td>(Vendas − custo das mercadorias vendidas) ÷ vendas</td><td>Quanto sobra de cada real vendido antes das despesas</td></tr>
          <tr><td><strong>Margem por categoria</strong></td><td>O mesmo cálculo, separado por grupo de produtos</td><td>Se o mix está mudando a favor ou contra você</td></tr>
          <tr><td><strong>Desconto médio</strong></td><td>Total de descontos ÷ vendas brutas</td><td>Se o desconto virou hábito no balcão</td></tr>
          <tr><td><strong>Custo de recebimento</strong></td><td>Taxas de cartão e antecipação ÷ vendas</td><td>Quanto da margem fica com as operadoras</td></tr>
          <tr><td><strong>Perdas</strong></td><td>Vencidos, quebras e sobras em reais ÷ vendas</td><td>O custo do que não virou venda</td></tr>
        </tbody>
      </table>
    </div>

    <p>Cinco números, uma vez por mês, já mostram se o crescimento do faturamento está virando lucro ou só mais trabalho.</p>

    <p>Para aprofundar a parte do preço, veja os guias de <a href="precificacao-farmacia-markup-margem-lucratividade.html">precificação na farmácia</a> e de <a href="precificacao-padaria-calcular-preco-pao-margem.html">precificação na padaria</a>.</p>
""",
    "faq": [
        ("Por que a empresa vende mais e lucra menos?", "Porque o aumento de receita pode vir acompanhado de descontos, mudança no mix para produtos de margem menor, taxas de pagamento mais altas, perdas e custos de reposição maiores. Em 2026, 49,2% das empresas abertas que aumentaram a receita perderam margem operacional, segundo a Strategy&."),
        ("Quanto preciso vender a mais para compensar um desconto?", "Depende da margem. A fórmula é margem dividida por (margem menos desconto), menos 1. Com margem bruta de 30% e desconto de 10%, é preciso vender 50% a mais em quantidade para manter o mesmo lucro em reais."),
        ("Qual a diferença entre margem e markup?", "Margem é o lucro dividido pelo preço de venda. Markup é o fator aplicado sobre o custo para chegar ao preço. Um produto que custa R$ 70 e é vendido a R$ 100 tem margem de 30% e markup de cerca de 1,43."),
        ("Como acompanhar a margem numa farmácia ou padaria?", "Mantendo o custo atualizado pela última nota de compra, acompanhando a margem por categoria e por forma de pagamento, controlando descontos e comparando o lucro bruto em reais mês a mês."),
    ],
    "fontes": [
        ("https://exame.com/insight/mais-receita-menos-margem-o-paradoxo-do-crescimento-das-empresas-brasileiras/p", "Vender mais não bastou: 49% das empresas com receita em alta perderam margem em 2026", "Exame Insight"),
    ],
    "relacionados": [
        ("precificacao-farmacia-markup-margem-lucratividade", "Farmácia", "Precificação na farmácia: markup e margem sem perder lucratividade"),
        ("precificacao-padaria-calcular-preco-pao-margem", "Padaria", "Como precificar pão e salgados sem perder margem"),
        ("igp-m-setembro-2026-reajuste-aluguel-loja", "Gestão", "IGP-M de setembro: quanto fica o aluguel da sua loja"),
    ],
    "js": JS,
}
