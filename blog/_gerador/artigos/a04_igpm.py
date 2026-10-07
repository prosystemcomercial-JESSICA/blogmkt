from base import cta

WHATS = "Olá! Li o artigo sobre o IGP-M e o reajuste do aluguel no blog da ProSystem e quero organizar o financeiro da minha loja."

JS = """<script>
document.addEventListener('DOMContentLoaded', function () {
  var campo = document.getElementById('aluguel');
  function calcula() {
    var a = parseFloat(String(campo.value).replace(',', '.'));
    var out = function (id, v) { document.getElementById(id).textContent = v; };
    if (!(a > 0)) { ['r-igpm','r-ipca','r-mes','r-ano'].forEach(function (i) { out(i, '—'); }); return; }
    var igpm = a * 1.0334, ipca = a * 1.0422;
    out('r-igpm', brl(igpm));
    out('r-ipca', brl(ipca));
    out('r-mes', brl(igpm - a));
    out('r-ano', brl((igpm - a) * 12));
  }
  campo.addEventListener('input', calcula);
  calcula();
});
</script>"""

ARTIGO = {
    "slug": "igp-m-setembro-2026-reajuste-aluguel-loja",
    "titulo_tag": "IGP-M de setembro e o reajuste do aluguel da loja | ProSystem",
    "descricao": "O IGP-M subiu 1,57% em setembro e acumula 3,34% em 12 meses. Calcule o reajuste do aluguel da sua farmácia ou padaria e veja o que a lei permite negociar.",
    "og_titulo": "IGP-M subiu 1,57% em setembro: quanto fica o aluguel da sua loja",
    "og_desc": "Acumulado de 3,34% em 12 meses vale para contratos que reajustam em outubro. Calcule e veja como negociar.",
    "og_linhas": ["IGP-M subiu 1,57% em", "setembro: quanto fica o", "aluguel da sua loja"],
    "og_chips": [("3,34%", "IGP-M em 12 meses"), ("1,57%", "alta em setembro")],
    "chamada": "Gestão · Custos",
    "secao": "Gestão",
    "trilha": "IGP-M e reajuste do aluguel",
    "h1": "IGP-M subiu 1,57% em setembro: quanto fica o aluguel da sua loja em outubro",
    "linha_fina": "Depois de dois meses de queda, o índice voltou a subir. Para quem tem contrato de aluguel com aniversário em outubro, o reajuste é de 3,34%. Veja como calcular e o que dá para negociar.",
    "minutos": 7,
    "keywords": "IGP-M setembro 2026, reajuste aluguel outubro 2026, IGP-M acumulado 12 meses, aluguel comercial reajuste, IGP-M x IPCA aluguel, Lei do Inquilinato aluguel comercial",
    "whats": WHATS,
    "barra": "Falar com a ProSystem",
    "cta_lateral": ("Aluguel subiu. E o caixa?", "Financeiro, contas a pagar e fluxo de caixa no mesmo sistema do PDV.", "Falar com a ProSystem"),
    "resumo": [
        "O IGP-M subiu <strong>1,57% em setembro</strong>, depois de recuar 0,22% em agosto, segundo a FGV.",
        "O acumulado em 12 meses é de <strong>3,34%</strong>. É esse o percentual dos contratos que reajustam em outubro pelo IGP-M.",
        "Um aluguel de R$ 6.000 passa para <strong>R$ 6.200,40</strong>.",
        "A Lei do Inquilinato permite que as partes negociem um novo valor ou troquem o índice de reajuste a qualquer momento, por acordo.",
    ],
    "toc": [
        ("numeros", "Os números de setembro"),
        ("calculadora", "Calcule o seu reajuste"),
        ("por-que", "Por que o IGP-M oscila tanto"),
        ("negociar", "O que dá para negociar"),
        ("planejar", "Como planejar o caixa"),
    ],
    "corpo": f"""
    <p>Para farmácias e padarias, o aluguel do ponto costuma ser uma das maiores despesas fixas do mês, logo depois da folha. Por isso o número que a Fundação Getulio Vargas divulgou em 29 de setembro interessa a quem tem loja em imóvel alugado.</p>

    <p>O IGP-M, índice mais usado nos contratos de aluguel comercial, voltou a subir depois de dois meses negativos. Quem tem contrato com aniversário em outubro já sabe o percentual do reajuste.</p>

    <h2 id="numeros">Os números de setembro</h2>

    <div class="agenda" role="list">
      <div role="listitem"><b>−1,16%</b><span>IGP-M de julho</span></div>
      <div role="listitem"><b>−0,22%</b><span>IGP-M de agosto</span></div>
      <div role="listitem"><b>+1,57%</b><span>IGP-M de setembro</span></div>
      <div role="listitem"><b>3,34%</b><span>Acumulado em 12 meses, usado nos reajustes de outubro</span></div>
    </div>

    <p>Para comparar: o IPCA, índice oficial de inflação, acumulou 4,22% nos 12 meses até agosto. Neste momento, quem reajusta pelo IGP-M paga um pouco menos do que pagaria pelo IPCA.</p>

    <h2 id="calculadora">Calcule o reajuste do seu aluguel</h2>

    <div class="calc">
      <h3>Quanto fica o aluguel a partir de outubro</h3>
      <p>Digite o valor atual do aluguel. A calculadora aplica o IGP-M de 12 meses e mostra a comparação com o IPCA.</p>
      <div class="calc__campos">
        <label for="aluguel">Aluguel atual (R$)<input type="number" id="aluguel" min="0" step="100" value="6000" inputmode="decimal"></label>
      </div>
      <div class="calc__saida" aria-live="polite">
        <div><span>Novo aluguel pelo IGP-M (3,34%)</span><b id="r-igpm">—</b></div>
        <div><span>Se fosse pelo IPCA (4,22%)</span><b id="r-ipca">—</b></div>
        <div><span>Aumento por mês</span><b id="r-mes">—</b></div>
        <div><span>Aumento em 12 meses</span><b id="r-ano">—</b></div>
      </div>
      <p class="calc__nota">Vale para contratos com reajuste anual pelo IGP-M e aniversário em outubro de 2026. Confira a cláusula do seu contrato.</p>
    </div>

    <div class="tabela">
      <table>
        <caption>Reajuste de outubro pelo IGP-M (3,34%), por faixa de aluguel</caption>
        <thead><tr><th>Aluguel atual</th><th>Novo aluguel</th><th>Aumento por mês</th><th>Aumento em 12 meses</th></tr></thead>
        <tbody>
          <tr><td><strong>R$ 3.000,00</strong></td><td>R$ 3.100,20</td><td>R$ 100,20</td><td class="data">R$ 1.202,40</td></tr>
          <tr><td><strong>R$ 6.000,00</strong></td><td>R$ 6.200,40</td><td>R$ 200,40</td><td class="data">R$ 2.404,80</td></tr>
          <tr><td><strong>R$ 12.000,00</strong></td><td>R$ 12.400,80</td><td>R$ 400,80</td><td class="data">R$ 4.809,60</td></tr>
        </tbody>
      </table>
    </div>

    <h2 id="por-que">Por que o IGP-M oscila tanto</h2>

    <p>O IGP-M não mede só o preço que o consumidor paga. Ele junta três índices, e o maior peso fica com os preços no atacado, que reagem rápido a câmbio e a commodities.</p>

    <div class="tabela">
      <table>
        <caption>Componentes do IGP-M em setembro de 2026</caption>
        <thead><tr><th>Índice</th><th>O que mede</th><th>Agosto</th><th>Setembro</th></tr></thead>
        <tbody>
          <tr><td><strong>IPA</strong></td><td>Preços ao produtor, no atacado</td><td>−1,74%</td><td class="data">2,08%</td></tr>
          <tr><td><strong>IPC</strong></td><td>Preços ao consumidor</td><td>−0,41%</td><td class="data">0,50%</td></tr>
          <tr><td><strong>INCC</strong></td><td>Custo da construção</td><td>0,85%</td><td class="data">0,25%</td></tr>
        </tbody>
      </table>
    </div>

    <p>Em setembro, quem puxou o índice foram as matérias-primas brutas, que subiram 3,61%, com destaque para soja, milho e carne bovina, segundo a <a href="https://portalibre.fgv.br/noticias/igp-m-sobe-157-em-setembro" target="_blank" rel="noopener">FGV</a>. Por isso o IGP-M pode cair num mês e saltar no seguinte, sem relação direta com o movimento da sua loja.</p>

    <blockquote class="citacao">O índice do aluguel acompanha o preço da soja e do minério. O faturamento da farmácia ou da padaria, não.</blockquote>

    <h3>IGP-M ou IPCA: qual é melhor para o inquilino?</h3>

    <p>Depende do momento, e é exatamente esse o problema. Em meados de 2021, com o dólar e as commodities em alta, o IGP-M acumulado em 12 meses passou de 30%, enquanto o IPCA, no mesmo período, ficou abaixo de 10%. Muitos lojistas só conseguiram manter o ponto porque renegociaram com o proprietário. Hoje o quadro se inverteu e o IGP-M está abaixo do IPCA.</p>

    <p>O IPCA tende a variar menos de um ano para o outro porque mede o preço ao consumidor, mais perto da realidade de quem vende no varejo. Por isso, numa renegociação, propor a troca do índice pode ser um bom pedido, mesmo num ano em que o IGP-M está mais baixo. Você troca um reajuste um pouco menor agora por previsibilidade nos próximos anos.</p>

    <h2 id="negociar">O que a lei permite negociar</h2>

    <p>O reajuste pelo índice do contrato é automático, mas não é a única possibilidade. A Lei do Inquilinato (<a href="https://www.planalto.gov.br/ccivil_03/leis/l8245.htm" target="_blank" rel="noopener">Lei nº 8.245/1991</a>) abre três caminhos para quem quer rever o valor.</p>

    <div class="casos">
      <div class="caso">
        <div><span class="selo selo--ok">A qualquer momento</span><h3>Acordo entre as partes</h3></div>
        <p>O art. 18 permite que locador e locatário fixem, de comum acordo, um novo valor de aluguel e até troquem a cláusula de reajuste, por exemplo do IGP-M para o IPCA.</p>
      </div>
      <div class="caso">
        <div><span class="selo selo--acao">Depois de 3 anos</span><h3>Ação revisional</h3></div>
        <p>Se não houver acordo, o art. 19 permite pedir na Justiça a revisão do aluguel para o preço de mercado, depois de três anos de contrato ou do último acordo.</p>
      </div>
      <div class="caso">
        <div><span class="selo selo--alerta">Atenção ao prazo</span><h3>Renovação do ponto comercial</h3></div>
        <p>Em contratos comerciais escritos de cinco anos ou mais, o art. 51 garante o direito de renovar. A ação renovatória precisa ser proposta entre um ano e seis meses antes do fim do contrato.</p>
      </div>
    </div>

    <div class="quadro">
      <span class="quadro__titulo">Na prática</span>
      <p>Uma drogaria que paga R$ 6.000 de aluguel e tem bom histórico de pagamento pode propor ao proprietário trocar o índice ou fixar um valor por mais dois anos, em troca de estender o contrato. Para o dono do imóvel, inquilino que paga em dia vale muito.</p>
      <p>Leve números para a conversa: preço de imóveis parecidos no bairro e o tempo que a loja já está no ponto.</p>
    </div>

    <div class="checagem" data-checklist>
      <div class="checagem__topo"><b>Antes de conversar com o proprietário</b><span class="checagem__conta">0 de 6 em dia</span></div>
      <label><input type="checkbox"><span>Ler a cláusula de reajuste: índice, periodicidade e data de aniversário</span></label>
      <label><input type="checkbox"><span>Calcular o novo valor pelo índice do contrato</span></label>
      <label><input type="checkbox"><span>Pesquisar o aluguel de três ou mais pontos parecidos no bairro</span></label>
      <label><input type="checkbox"><span>Separar comprovantes de pagamento em dia</span></label>
      <label><input type="checkbox"><span>Definir o que você pode oferecer: prazo maior, garantia, benfeitorias</span></label>
      <label><input type="checkbox"><span>Registrar por escrito qualquer acordo, com aditivo ao contrato</span></label>
    </div>

{cta("O aluguel subiu. Seu fluxo de caixa já sabe disso?", "Despesa fixa que muda precisa entrar no planejamento antes do vencimento. Fale com a ProSystem e veja como acompanhar contas a pagar e fluxo de caixa no mesmo sistema do PDV.", WHATS)}

    <h2 id="planejar">Como planejar o caixa para o reajuste</h2>

    <ol class="passos">
      <li><div><b>Confira a data de aniversário do contrato.</b> O reajuste usa o acumulado de 12 meses até o mês anterior ao aniversário.</div></li>
      <li><div><b>Atualize o valor no contas a pagar.</b> Evite pagar o boleto antigo e receber cobrança de diferença depois.</div></li>
      <li><div><b>Veja o peso do aluguel no faturamento.</b> Divida o aluguel pelo faturamento médio mensal. Se o número subiu nos últimos anos, é sinal para negociar.</div></li>
      <li><div><b>Anote os próximos aniversários.</b> Quem tem mais de uma loja deve ter um calendário com o índice e a data de cada contrato.</div></li>
    </ol>
""",
    "faq": [
        ("Quanto foi o IGP-M de setembro de 2026?", "O IGP-M subiu 1,57% em setembro de 2026, depois de recuar 0,22% em agosto, segundo a FGV. O acumulado em 12 meses chegou a 3,34%."),
        ("Qual o reajuste do aluguel em outubro de 2026 pelo IGP-M?", "Contratos com reajuste anual pelo IGP-M e aniversário em outubro de 2026 têm reajuste de 3,34%, que é o acumulado do índice em 12 meses até setembro. Um aluguel de R$ 6.000 passa para R$ 6.200,40."),
        ("Posso trocar o IGP-M pelo IPCA no contrato?", "Sim, desde que haja acordo com o locador. O art. 18 da Lei do Inquilinato permite que as partes fixem um novo valor ou modifiquem a cláusula de reajuste a qualquer momento."),
        ("O que fazer se o proprietário não aceitar negociar?", "Depois de três anos de contrato ou do último acordo, o art. 19 da Lei do Inquilinato permite pedir a revisão judicial do aluguel para o valor de mercado. É recomendável conversar com um advogado antes."),
        ("Por que o IGP-M varia tanto de um mês para outro?", "Porque o maior peso do índice está nos preços ao produtor, que reagem rápido a câmbio e a commodities como soja, milho e minério. Em setembro de 2026, as matérias-primas brutas subiram 3,61%."),
    ],
    "fontes": [
        ("https://portalibre.fgv.br/noticias/igp-m-sobe-157-em-setembro", "IGP-M sobe 1,57% em setembro", "FGV IBRE, 29/09/2026"),
        ("https://www.planalto.gov.br/ccivil_03/leis/l8245.htm", "Lei nº 8.245/1991, Lei do Inquilinato", "Planalto"),
        ("https://porta8.com.br/guia/reajuste-de-aluguel/outubro-2026", "Reajuste de aluguel em outubro de 2026: IGP-M e IPCA", "Porta 8"),
    ],
    "aviso": "Para ações judiciais ou mudanças de contrato, consulte um advogado.",
    "relacionados": [
        ("vender-mais-nao-e-lucrar-mais-margem-varejo", "Gestão", "Vender mais não é lucrar mais: o que fazer com a margem"),
        ("fluxo-de-caixa-farmacia-controle-financeiro", "Farmácia", "Fluxo de caixa na farmácia: como controlar e não ficar no vermelho"),
        ("desenrola-mei-pequeno-valor-como-negociar-dividas", "Gestão", "Desenrola MEI Pequeno Valor: como negociar dívidas"),
    ],
    "js": JS,
}
