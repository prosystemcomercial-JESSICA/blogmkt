from base import cta

WHATS = "Olá! Li o artigo sobre o Desenrola MEI no blog da ProSystem e quero organizar o caixa da minha loja."

JS = """<script>
document.addEventListener('DOMContentLoaded', function () {
  var campo = document.getElementById('divida');
  function calcula() {
    var d = parseFloat(String(campo.value).replace(',', '.'));
    var out = function (id, v) { document.getElementById(id).textContent = v; };
    var aviso = document.getElementById('calc-aviso');
    if (!(d > 0)) { ['c-entrada','c-saldo','c-parcela','c-economia'].forEach(function (i) { out(i, '—'); }); aviso.hidden = true; return; }
    var entrada = d * 0.05;
    var saldo = (d - entrada) * 0.5;
    out('c-entrada', brl(entrada));
    out('c-saldo', brl(saldo));
    out('c-parcela', brl(saldo / 55));
    out('c-economia', brl(d - entrada - saldo));
    aviso.hidden = d <= 8105;
  }
  campo.addEventListener('input', calcula);
  calcula();
});
</script>"""

ARTIGO = {
    "slug": "desenrola-mei-pequeno-valor-como-negociar-dividas",
    "titulo_tag": "Desenrola MEI Pequeno Valor: como negociar dívidas | ProSystem",
    "descricao": "O Desenrola MEI Pequeno Valor dá 50% de desconto em dívidas de até R$ 8.105, com entrada de 5% e até 55 parcelas. Veja quem pode aderir, prazos e o passo a passo no Regularize.",
    "og_titulo": "Desenrola MEI Pequeno Valor: como negociar dívidas de até R$ 8.105",
    "og_desc": "Entrada de 5%, desconto de 50% no saldo e até 55 parcelas. Calcule a sua negociação e veja o passo a passo.",
    "og_linhas": ["Desenrola MEI Pequeno Valor:", "como negociar dívidas", "de até R$ 8.105"],
    "og_chips": [("50%", "de desconto no saldo"), ("55x", "parcelas no máximo")],
    "chamada": "Gestão · MEI",
    "secao": "Gestão",
    "trilha": "Desenrola MEI Pequeno Valor",
    "h1": "Desenrola MEI Pequeno Valor: como negociar dívidas de até R$ 8.105 com 50% de desconto",
    "linha_fina": "A nova modalidade abriu em 1º de outubro para microempreendedores com dívidas pequenas na dívida ativa da União. Veja se você se encaixa e quanto ficaria a sua parcela.",
    "minutos": 7,
    "keywords": "Desenrola MEI, Desenrola MEI Pequeno Valor, dívida MEI, renegociar dívida MEI, Regularize PGFN, dívida ativa MEI, desconto dívida MEI 2026",
    "whats": WHATS,
    "barra": "Falar com a ProSystem",
    "cta_lateral": ("Caixa organizado, dívida que não volta", "PDV e financeiro no mesmo sistema para saber o que entra e o que sai todo dia.", "Falar com a ProSystem"),
    "resumo": [
        "Desde <strong>1º de outubro</strong>, o MEI com dívidas de até <strong>R$ 8.105</strong> na dívida ativa da União pode negociar pelo Desenrola MEI Pequeno Valor.",
        "Condições: <strong>entrada de 5%</strong>, <strong>50% de desconto</strong> no restante e até <strong>55 parcelas</strong>.",
        "Quem deve até R$ 20 mil tem o Desenrola MEI tradicional, prorrogado até <strong>29 de janeiro de 2027</strong>.",
        "Tudo é feito pelo portal Regularize, da PGFN, com o CNPJ.",
    ],
    "toc": [
        ("o-que-e", "O que é o Pequeno Valor"),
        ("calculadora", "Calcule a sua negociação"),
        ("modalidades", "As outras modalidades"),
        ("passo-a-passo", "Passo a passo no Regularize"),
        ("depois", "Depois do acordo"),
    ],
    "corpo": f"""
    <p>Muito MEI deixa de pagar o DAS num mês apertado, depois em outro, e quando vê a dívida já foi parar na dívida ativa da União. Com ela vêm juros, multa, CNPJ irregular e dificuldade para conseguir crédito ou certidão negativa.</p>

    <p>O governo abriu em 1º de outubro uma modalidade nova de negociação, pensada justamente para quem deve pouco. O <a href="https://www.gov.br/memp/pt-br/assuntos/noticias/governo-lanca-desenrola-mei-pequeno-valor-e-amplia-opcoes-para-negociar-dividas" target="_blank" rel="noopener">Ministério do Empreendedorismo</a> estima que mais de 3 milhões dos 17,56 milhões de MEIs ativos estão com alguma dívida.</p>

    <h2 id="o-que-e">O que é o Desenrola MEI Pequeno Valor</h2>

    <p><strong>O Desenrola MEI Pequeno Valor é uma negociação da Procuradoria-Geral da Fazenda Nacional para microempreendedores com dívidas de até cinco salários mínimos, hoje R$ 8.105.</strong> O MEI paga uma entrada de 5%, ganha 50% de desconto no saldo e divide o restante em até 55 meses.</p>

    <div class="agenda" role="list">
      <div role="listitem"><b>R$ 8.105</b><span>Limite da dívida, equivalente a cinco salários mínimos</span></div>
      <div role="listitem"><b>5%</b><span>Entrada, sem desconto</span></div>
      <div role="listitem"><b>50%</b><span>Desconto sobre o saldo depois da entrada</span></div>
      <div role="listitem"><b>31 jan. 2027</b><span>Fim do prazo de adesão</span></div>
    </div>

    <p>Para quem toca uma padaria pequena, uma confeitaria ou um mercadinho como MEI, a conta costuma ser bem favorável. Uma dívida de R$ 5.000, por exemplo, cai para cerca de R$ 2.625 no total.</p>

    <h2 id="calculadora">Calcule a sua negociação</h2>

    <div class="calc">
      <h3>Quanto fica a sua dívida no Pequeno Valor</h3>
      <p>Digite o valor total da dívida que aparece no Regularize.</p>
      <div class="calc__campos">
        <label for="divida">Valor da dívida (R$)<input type="number" id="divida" min="0" step="50" value="5000" inputmode="decimal"></label>
      </div>
      <div class="calc__saida" aria-live="polite">
        <div><span>Entrada (5%)</span><b id="c-entrada">—</b></div>
        <div><span>Saldo com 50% de desconto</span><b id="c-saldo">—</b></div>
        <div><span>Parcela em 55 vezes</span><b id="c-parcela">—</b></div>
        <div><span>Você deixa de pagar</span><b id="c-economia">—</b></div>
      </div>
      <p class="calc__frase" id="calc-aviso" hidden>Esse valor passa do limite de R$ 8.105. Veja o Desenrola MEI tradicional, para dívidas de até R$ 20 mil, na seção abaixo.</p>
      <p class="calc__nota">Simulação aproximada. As parcelas da PGFN são corrigidas pela Selic e podem ter valor mínimo. O valor exato aparece no Regularize antes de você confirmar.</p>
    </div>

    <p>Para ter uma ideia rápida sem usar a calculadora, veja três exemplos dentro do limite do programa.</p>

    <div class="tabela">
      <table>
        <caption>Exemplos no Desenrola MEI Pequeno Valor (sem correção pela Selic)</caption>
        <thead><tr><th>Dívida</th><th>Entrada (5%)</th><th>Saldo com desconto</th><th>Parcela em 55x</th><th>Total pago</th></tr></thead>
        <tbody>
          <tr><td><strong>R$ 2.000,00</strong></td><td>R$ 100,00</td><td>R$ 950,00</td><td>R$ 17,27</td><td class="data">R$ 1.050,00</td></tr>
          <tr><td><strong>R$ 5.000,00</strong></td><td>R$ 250,00</td><td>R$ 2.375,00</td><td>R$ 43,18</td><td class="data">R$ 2.625,00</td></tr>
          <tr><td><strong>R$ 8.105,00</strong></td><td>R$ 405,25</td><td>R$ 3.849,88</td><td>R$ 70,00</td><td class="data">R$ 4.255,13</td></tr>
        </tbody>
      </table>
    </div>

    <h3>Quem pode e quem não pode aderir</h3>

    <div class="lado">
      <div>
        <h3>Pode</h3>
        <ul>
          <li>MEI com dívida inscrita na dívida ativa da União</li>
          <li>Dívida total de até R$ 8.105</li>
          <li>Adesão entre 1º/10/2026 e 31/01/2027</li>
        </ul>
      </div>
      <div>
        <h3>Não entra aqui</h3>
        <ul>
          <li>Dívida acima de R$ 8.105 (veja o Desenrola MEI tradicional)</li>
          <li>DAS atrasado ainda não inscrito em dívida ativa</li>
          <li>Dívidas com bancos, fornecedores e cartão</li>
        </ul>
      </div>
    </div>

    <h2 id="modalidades">As outras modalidades abertas</h2>

    <p>O Pequeno Valor não é a única porta. O governo também prorrogou e ampliou outras negociações. Escolha pela faixa da sua dívida e por quem é o credor.</p>

    <div class="tabela">
      <table>
        <caption>Opções de negociação para o MEI</caption>
        <thead><tr><th>Modalidade</th><th>Para quem</th><th>Condições</th><th>Prazo</th></tr></thead>
        <tbody>
          <tr><td><strong>Desenrola MEI Pequeno Valor</strong></td><td>Dívida ativa da União de até R$ 8.105</td><td>Entrada de 5%, 50% de desconto, até 55 parcelas</td><td class="data">31/01/2027</td></tr>
          <tr><td><strong>Desenrola MEI</strong></td><td>Dívida ativa da União de até R$ 20 mil</td><td>Até 100% de desconto em juros, multas e encargos, limitado a 70% do total</td><td class="data">29/01/2027</td></tr>
          <tr><td><strong>Transação PGF</strong></td><td>Dívidas de até R$ 8.105 com autarquias e fundações federais, como ANTT e Anatel</td><td>50% de desconto, até 60 parcelas</td><td class="data">16/10/2026 a 31/03/2027</td></tr>
        </tbody>
      </table>
    </div>

    <div class="numero">
      <b>411 mil</b>
      <p>acordos já tinham sido fechados pelo Desenrola MEI até 24 de setembro.<small>Fonte: <a href="https://www.gov.br/memp/pt-br/assuntos/noticias/governo-lanca-desenrola-mei-pequeno-valor-e-amplia-opcoes-para-negociar-dividas" target="_blank" rel="noopener">Ministério do Empreendedorismo</a>.</small></p>
    </div>

    <div class="quadro">
      <span class="quadro__titulo">E se a dívida ainda não foi para a dívida ativa?</span>
      <p>DAS atrasado que ainda está na Receita Federal, sem inscrição em dívida ativa, não entra no Desenrola. Nesse caso, o caminho é o parcelamento de débitos do MEI, feito pelo próprio portal do Simples Nacional. Vale conferir as duas situações antes de escolher.</p>
    </div>

    <h2 id="passo-a-passo">Passo a passo no Regularize</h2>

    <ol class="passos">
      <li><div><b>Acesse o portal Regularize.</b> O endereço é regularize.pgfn.gov.br. Entre com a conta gov.br e informe o CNPJ.</div></li>
      <li><div><b>Consulte a dívida.</b> Clique em "Consultar dívida inscrita" e anote o valor total.</div></li>
      <li><div><b>Simule.</b> Em "Negociar dívida", veja as modalidades disponíveis para o seu caso, os descontos e o valor das parcelas.</div></li>
      <li><div><b>Confirme e pague a primeira parcela.</b> O acordo só vale depois que o boleto da primeira parcela é pago.</div></li>
    </ol>

{cta("Negociou? Agora é não deixar a dívida voltar", "Saber todo dia quanto entrou no caixa e o que precisa ser pago é o que separa o MEI que fica em dia do que volta a dever. Fale com a ProSystem e veja PDV e financeiro funcionando juntos.", WHATS)}

    <h3>Como saber se a sua dívida já está na dívida ativa</h3>

    <p>Muita gente não sabe em que situação está. Há dois lugares para conferir, e os dois usam o CNPJ e a conta gov.br.</p>

    <ul>
      <li><strong>No portal do Simples Nacional, área do MEI (PGMEI):</strong> mostra os DAS em aberto que ainda estão na Receita Federal.</li>
      <li><strong>No Regularize, da PGFN:</strong> mostra o que já foi inscrito em dívida ativa da União. É essa dívida que entra no Desenrola.</li>
    </ul>

    <p>É comum ter as duas situações ao mesmo tempo: meses mais antigos na dívida ativa e meses recentes ainda na Receita. Nesse caso, resolva cada parte no lugar certo.</p>

    <div class="quadro">
      <span class="quadro__titulo">Na prática</span>
      <p>Um exemplo: a dona de uma pequena confeitaria, MEI, ficou oito meses sem pagar o DAS durante uma reforma da cozinha. Parte da dívida foi inscrita em dívida ativa e somou cerca de R$ 1.200. No Pequeno Valor, ela paga R$ 60 de entrada e o saldo com desconto, de R$ 570, em parcelas que cabem no caixa. Os meses mais recentes, ainda na Receita, entram num parcelamento pelo portal do Simples.</p>
    </div>

    <h2 id="depois">Depois do acordo: três cuidados</h2>

    <p>Fechar o acordo resolve o passado. Para não repetir a história, três hábitos ajudam muito.</p>

    <ul>
      <li><strong>Separe o dinheiro do DAS no dia em que vende.</strong> Uma conta ou envelope só para impostos evita a surpresa no dia 20.</li>
      <li><strong>Coloque as parcelas no fluxo de caixa.</strong> Atrasar parcelas do acordo pode cancelar a negociação e trazer a dívida de volta com os encargos.</li>
      <li><strong>Fique de olho no limite de faturamento do MEI.</strong> Se a loja cresceu, pode ser hora de conversar com um contador sobre virar microempresa.</li>
    </ul>
""",
    "faq": [
        ("O que é o Desenrola MEI Pequeno Valor?", "É uma modalidade de negociação da PGFN para microempreendedores individuais com dívidas de até cinco salários mínimos, hoje R$ 8.105, inscritas na dívida ativa da União. O MEI paga entrada de 5%, recebe 50% de desconto no saldo e pode parcelar em até 55 meses."),
        ("Até quando posso aderir?", "A adesão ao Desenrola MEI Pequeno Valor vai de 1º de outubro de 2026 a 31 de janeiro de 2027. O Desenrola MEI tradicional, para dívidas de até R$ 20 mil, foi prorrogado até 29 de janeiro de 2027."),
        ("Onde faço a negociação?", "No portal Regularize, da Procuradoria-Geral da Fazenda Nacional, com a conta gov.br e o CNPJ. Lá é possível consultar a dívida, simular as opções e emitir o boleto da primeira parcela."),
        ("Minha dívida é de R$ 12 mil. Posso entrar no Pequeno Valor?", "Não. O Pequeno Valor vale para dívidas de até R$ 8.105. Para dívidas de até R$ 20 mil, a opção é o Desenrola MEI tradicional, com descontos de até 100% em juros, multas e encargos, limitados a 70% do total."),
        ("DAS atrasado entra no Desenrola?", "Só se a dívida já estiver inscrita na dívida ativa da União. DAS atrasado que ainda está na Receita Federal pode ser parcelado pelo portal do Simples Nacional."),
    ],
    "fontes": [
        ("https://www.gov.br/memp/pt-br/assuntos/noticias/governo-lanca-desenrola-mei-pequeno-valor-e-amplia-opcoes-para-negociar-dividas", "Governo prorroga Desenrola MEI e amplia opções para negociar dívidas", "Ministério do Empreendedorismo"),
        ("https://agenciagov.ebc.com.br/noticias/202609/governo-lanca-desenrola-mei-pequeno-valor-e-amplia-opcoes-para-negociar-dividas", "Microempreendedores individuais podem renegociar dívidas com desconto", "Agência Gov"),
        ("https://www.regularize.pgfn.gov.br", "Portal Regularize", "PGFN"),
    ],
    "aviso": "Confira as condições finais no portal Regularize antes de confirmar qualquer acordo.",
    "relacionados": [
        ("vender-mais-nao-e-lucrar-mais-margem-varejo", "Gestão", "Vender mais não é lucrar mais: o que fazer com a margem"),
        ("gestao-financeira-padaria-custo-produto", "Padaria", "Como calcular o custo real de cada produto da padaria"),
        ("igp-m-setembro-2026-reajuste-aluguel-loja", "Gestão", "IGP-M de setembro: quanto fica o aluguel da sua loja"),
    ],
    "js": JS,
}
