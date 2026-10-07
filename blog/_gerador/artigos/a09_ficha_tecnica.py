from base import cta

WHATS = "Olá! Li o artigo sobre ficha técnica no blog da ProSystem e quero controlar melhor custo e estoque da minha padaria."

JS = """<script>
document.addEventListener('DOMContentLoaded', function () {
  var massa = document.getElementById('massa'), peca = document.getElementById('peca'), real = document.getElementById('real'), custo = document.getElementById('custo');
  function calcula() {
    var m = parseFloat(massa.value), p = parseFloat(peca.value), r = parseFloat(real.value), c = parseFloat(custo.value);
    var out = function (id, x) { document.getElementById(id).textContent = x; };
    var frase = document.getElementById('f-frase');
    if (!(m > 0) || !(p > 0)) { ['f-esp','f-dif','f-cu'].forEach(function (i) { out(i, '—'); }); frase.textContent = ''; return; }
    var esp = Math.floor(m * 1000 / p);
    out('f-esp', num(esp, 0) + ' un.');
    if (r > 0) {
      var dif = (r - esp) / esp * 100;
      out('f-dif', (dif > 0 ? '+' : '') + num(dif, 1) + '%');
      frase.textContent = dif < -2
        ? 'A fornada rendeu ' + num(esp - r, 0) + ' unidades a menos do que a ficha prevê. Confira balança, divisora e o peso das peças.'
        : (dif > 2 ? 'Rendeu mais do que o previsto. As peças podem estar saindo mais leves do que o padrão.' : 'O rendimento está dentro do esperado.');
    } else { out('f-dif', '—'); frase.textContent = ''; }
    out('f-cu', c > 0 && (r > 0 || esp > 0) ? brl(c / (r > 0 ? r : esp)) : '—');
  }
  [massa, peca, real, custo].forEach(function (i) { i.addEventListener('input', calcula); });
  calcula();
});
</script>"""

ARTIGO = {
    "slug": "ficha-tecnica-padaria-padronizar-receitas-rendimento",
    "titulo_tag": "Ficha técnica na padaria: receitas e rendimento | ProSystem",
    "descricao": "A ficha técnica padroniza receitas e mostra se cada fornada rende o que deveria. Veja o que colocar nela, um exemplo de pão francês e calcule o rendimento e o custo por unidade.",
    "og_titulo": "Ficha técnica na padaria: como padronizar receitas e medir o rendimento",
    "og_desc": "O que vai na ficha técnica, exemplo de pão francês e calculadora de rendimento e custo por unidade.",
    "og_linhas": ["Ficha técnica na padaria:", "padronize receitas e meça", "o rendimento da fornada"],
    "og_chips": [("Rendimento", "previsto x real"), ("R$/un.", "custo por unidade")],
    "chamada": "Padaria · Produção",
    "secao": "Padaria",
    "trilha": "Ficha técnica e rendimento",
    "h1": "Ficha técnica na padaria: como padronizar receitas e saber se cada fornada rende o que deveria",
    "linha_fina": "Diferença de receita e de rendimento entre turnos esconde custo e muda o sabor do produto. O Sebrae recomenda fichas técnicas e manutenção periódica dos equipamentos para manter o padrão.",
    "minutos": 8,
    "keywords": "ficha técnica padaria, padronização de receitas, rendimento de massa, custo por unidade pão, pão francês ficha técnica, porcentagem do padeiro, manutenção equipamentos padaria",
    "whats": WHATS,
    "barra": "Falar com a ProSystem",
    "cta_lateral": ("Custo certo começa no estoque", "Compras, estoque e PDV integrados para saber quanto custa o que você vende.", "Falar com a ProSystem"),
    "resumo": [
        "A <strong>ficha técnica</strong> registra ingredientes, quantidades, modo de preparo, rendimento e peso de cada produto.",
        "Com ela, o pão do turno da manhã e o da tarde saem iguais, e o <strong>custo por unidade</strong> fica conhecido.",
        "Comparar o <strong>rendimento previsto com o real</strong> revela problemas de pesagem, divisora, forno ou porcionamento.",
        "O Sebrae também recomenda <strong>manutenção periódica</strong> dos equipamentos para reduzir perdas de massa e consumo de energia.",
    ],
    "toc": [
        ("o-que-e", "O que é a ficha técnica"),
        ("exemplo", "Exemplo: pão francês"),
        ("rendimento", "Rendimento previsto x real"),
        ("equipamentos", "Equipamentos e energia"),
        ("implantar", "Como implantar"),
    ],
    "corpo": f"""
    <p>O cliente percebe na hora: o pão de sábado estava mais leve, o bolo de quinta veio mais seco. Por trás disso quase sempre está uma receita que muda conforme quem está no turno, com um pouco mais de farinha aqui e menos tempo de forno ali.</p>

    <p>Essa variação também mexe no bolso. Se cada padeiro faz a receita de um jeito, ninguém sabe quanto custa de verdade um pão, e o preço da vitrine vira chute.</p>

    <h2 id="o-que-e">O que é a ficha técnica</h2>

    <p><strong>Ficha técnica é o documento que registra a receita padrão de cada produto da padaria: ingredientes, quantidades, modo de preparo, rendimento e peso das unidades.</strong> Segundo o <a href="https://atendimento.sebraemg.com.br/biblioteca-digital/content/modelo-de-ficha-tecnica-ferramenta-encarte-alimentacao-fora-do-lar" target="_blank" rel="noopener">Sebrae</a>, ela é a base para manter o padrão de qualidade e controlar a produção.</p>

    <div class="checagem" data-checklist>
      <div class="checagem__topo"><b>O que a sua ficha técnica precisa ter</b><span class="checagem__conta">0 de 8 em dia</span></div>
      <label><input type="checkbox"><span>Nome do produto e foto do resultado esperado</span></label>
      <label><input type="checkbox"><span>Lista de ingredientes com quantidade em peso, não em "xícaras"</span></label>
      <label><input type="checkbox"><span>Modo de preparo em etapas curtas</span></label>
      <label><input type="checkbox"><span>Tempo e temperatura de fermentação e de forno</span></label>
      <label><input type="checkbox"><span>Rendimento total da massa, em quilos</span></label>
      <label><input type="checkbox"><span>Peso da peça crua e quantidade de unidades esperadas</span></label>
      <label><input type="checkbox"><span>Custo de cada ingrediente e custo total da receita</span></label>
      <label><input type="checkbox"><span>Data da última revisão</span></label>
    </div>

    <h2 id="exemplo">Exemplo: ficha técnica de pão francês</h2>

    <p>Padarias costumam escrever receitas em "porcentagem do padeiro", em que a farinha vale 100% e os outros ingredientes são proporção dela. Isso facilita aumentar ou diminuir a receita sem errar.</p>

    <div class="tabela">
      <table>
        <caption>Pão francês, receita base para 10 kg de farinha (exemplo ilustrativo)</caption>
        <thead><tr><th>Ingrediente</th><th>% da farinha</th><th>Quantidade</th></tr></thead>
        <tbody>
          <tr><td>Farinha de trigo</td><td>100%</td><td class="data">10,0 kg</td></tr>
          <tr><td>Água</td><td>60%</td><td class="data">6,0 kg</td></tr>
          <tr><td>Fermento biológico fresco</td><td>3%</td><td class="data">300 g</td></tr>
          <tr><td>Sal</td><td>2%</td><td class="data">200 g</td></tr>
          <tr><td>Açúcar</td><td>1%</td><td class="data">100 g</td></tr>
          <tr><td>Melhorador</td><td>1%</td><td class="data">100 g</td></tr>
          <tr><td><strong>Massa total</strong></td><td>167%</td><td class="data">16,7 kg</td></tr>
        </tbody>
      </table>
    </div>
    <p class="calc__nota">Proporções de referência para ilustrar o formato. Cada padaria ajusta conforme a farinha, o equipamento e o produto que quer entregar.</p>

    <p>Com 16,7 kg de massa e peças cruas de 60 g, a ficha prevê cerca de 278 pães. Esse é o número que o turno precisa entregar. Se sair muito diferente disso, algo no processo mudou.</p>

    <h2 id="rendimento">Rendimento previsto x real: onde o dinheiro some</h2>

    <p>Depois de cada fornada, a equipe anota quantas unidades realmente saíram. A comparação com a ficha mostra se a receita está entregando o que deveria. Diferenças frequentes podem indicar problema na pesagem dos ingredientes, na divisora, na temperatura, no tempo de forno ou no porcionamento.</p>

    <div class="calc">
      <h3>Calculadora de rendimento e custo por unidade</h3>
      <p>Preencha com os dados de uma fornada real.</p>
      <div class="calc__campos">
        <label for="massa">Massa total (kg)<input type="number" id="massa" min="0" step="0.1" value="16.7"></label>
        <label for="peca">Peso da peça crua (g)<input type="number" id="peca" min="1" step="1" value="60"></label>
        <label for="real">Unidades que saíram<input type="number" id="real" min="0" step="1" value="262"></label>
        <label for="custo">Custo dos ingredientes (R$)<input type="number" id="custo" min="0" step="0.5" value="73"></label>
      </div>
      <div class="calc__saida" aria-live="polite">
        <div><span>Rendimento previsto</span><b id="f-esp">—</b></div>
        <div><span>Diferença</span><b id="f-dif">—</b></div>
        <div><span>Custo de ingredientes por unidade</span><b id="f-cu">—</b></div>
      </div>
      <p class="calc__frase" id="f-frase"></p>
      <p class="calc__nota">O custo por unidade aqui considera só os ingredientes. Para formar preço, some energia, gás, mão de obra e embalagem.</p>
    </div>

    <div class="quadro">
      <span class="quadro__titulo">Na prática</span>
      <p>Se a ficha prevê 278 pães e saem 262, são 16 pães a menos por fornada. Com três fornadas por dia, quase 50 pães deixam de existir todos os dias, sem que ninguém perceba, porque a massa foi usada.</p>
      <p>Uma causa frequente é a peça saindo mais pesada do que o padrão. Uma balança conferida e uma pesagem por amostragem resolvem.</p>
    </div>

{cta("Custo certo depende de estoque certo", "A ficha técnica diz quanto ingrediente cada produto usa. O estoque e as notas de compra dizem quanto ele custa. Fale com a ProSystem e veja compras, estoque e PDV juntos na sua padaria.", WHATS)}

    <h3>Da ficha técnica ao custo da unidade</h3>

    <p>Com a ficha pronta, o custo dos ingredientes de cada unidade é uma conta simples: some o custo de cada ingrediente na quantidade usada e divida pelo número de unidades que a receita rende de verdade.</p>

    <div class="tabela">
      <table>
        <caption>Exemplo de custo de ingredientes (valores ilustrativos)</caption>
        <thead><tr><th>Ingrediente</th><th>Quantidade</th><th>Preço de compra</th><th>Custo na receita</th></tr></thead>
        <tbody>
          <tr><td>Farinha de trigo</td><td>10,0 kg</td><td>R$ 5,50/kg</td><td>R$ 55,00</td></tr>
          <tr><td>Fermento fresco</td><td>300 g</td><td>R$ 30,00/kg</td><td>R$ 9,00</td></tr>
          <tr><td>Melhorador</td><td>100 g</td><td>R$ 60,00/kg</td><td>R$ 6,00</td></tr>
          <tr><td>Sal, açúcar e água</td><td>—</td><td>—</td><td>R$ 3,00</td></tr>
          <tr><td><strong>Total</strong></td><td></td><td></td><td class="data">R$ 73,00</td></tr>
        </tbody>
      </table>
    </div>

    <p>Com R$ 73,00 de ingredientes e 278 pães, o custo de ingredientes é de cerca de R$ 0,26 por unidade. Se a fornada rende só 262, o mesmo pão passa a custar R$ 0,28. Parece pouco, mas multiplicado por milhares de pães por mês, a diferença aparece no resultado.</p>

    <p class="calc__nota">Os preços acima são apenas para mostrar o cálculo. Use os valores das suas notas de compra.</p>

    <h2 id="equipamentos">Equipamentos, perdas de massa e energia</h2>

    <p>O Sebrae também recomenda manutenção periódica dos equipamentos para reduzir perdas de massa e consumo de energia. Alguns pontos que afetam diretamente o rendimento:</p>

    <ul>
      <li><strong>Balança.</strong> Uma balança desregulada erra todos os ingredientes da receita ao mesmo tempo. Confira com um peso padrão.</li>
      <li><strong>Divisora.</strong> Se as peças saem com peso diferente, o rendimento muda e o cliente percebe o tamanho do pão.</li>
      <li><strong>Forno.</strong> Vedação gasta e termostato impreciso aumentam o tempo de forno, o consumo de energia e a perda de umidade da massa.</li>
      <li><strong>Câmara de fermentação.</strong> Temperatura instável muda o volume do pão e a programação das fornadas.</li>
    </ul>

    <h2 id="implantar">Como implantar sem parar a produção</h2>

    <ol class="passos">
      <li><div><b>Comece pelos cinco produtos que mais vendem.</b> Eles costumam concentrar boa parte do faturamento da produção própria.</div></li>
      <li><div><b>Pese tudo numa produção real.</b> Acompanhe o padeiro que faz o produto do jeito que o cliente gosta e anote cada quantidade.</div></li>
      <li><div><b>Escreva a ficha e deixe na produção.</b> Plastificada, perto da bancada.</div></li>
      <li><div><b>Registre o rendimento por duas semanas.</b> Compare previsto e real e corrija o que estiver fora.</div></li>
      <li><div><b>Atualize os custos a cada compra.</b> Se o preço da farinha subiu, o custo da ficha precisa subir junto.</div></li>
    </ol>

    <p>Com o custo por unidade em mãos, o passo seguinte é o preço de venda. Veja o guia sobre <a href="precificacao-padaria-calcular-preco-pao-margem.html">como precificar pão e salgados sem perder margem</a>.</p>
""",
    "faq": [
        ("O que é ficha técnica de padaria?", "É o documento que registra a receita padrão de cada produto, com ingredientes, quantidades em peso, modo de preparo, tempos e temperaturas, rendimento, peso das unidades e custo. Ela garante que o produto saia igual em todos os turnos."),
        ("Como calcular o rendimento de uma massa de pão?", "Divida o peso total da massa pelo peso da peça crua. Por exemplo, 16,7 kg de massa divididos por peças de 60 g resultam em cerca de 278 unidades. Compare esse número com o que realmente saiu da fornada."),
        ("O que é porcentagem do padeiro?", "É uma forma de escrever receitas em que a farinha vale 100% e cada ingrediente é expresso como proporção do peso da farinha. Ela facilita aumentar ou reduzir a receita mantendo as proporções."),
        ("Por que a fornada rende menos do que a receita prevê?", "As causas mais frequentes são peças mais pesadas do que o padrão, balança ou divisora desreguladas, sobras de massa na bancada e variações de temperatura e tempo de forno."),
    ],
    "fontes": [
        ("https://atendimento.sebraemg.com.br/biblioteca-digital/content/modelo-de-ficha-tecnica-ferramenta-encarte-alimentacao-fora-do-lar", "Modelo de ficha técnica", "Sebrae/MG"),
        ("https://www.sebraeplay.com.br/content/producao-ordenada-ferramenta-encarte-padaria", "Controle de produção em padarias e confeitarias", "Sebrae"),
        ("https://bibliotecas.sebrae.com.br/chronus/ARQUIVOS_CHRONUS/bds/bds.nsf/bf03c5d336202f70bf83d5bc5def8330/$File/SP_receita_de_sucesso_como_ter_uma_cozinha_eficiente_16.pdf", "Receita de Sucesso: como ter uma cozinha eficiente", "Sebrae"),
    ],
    "relacionados": [
        ("precificacao-padaria-calcular-preco-pao-margem", "Padaria", "Como precificar pão e salgados sem perder margem"),
        ("controle-de-sobras-padaria-ajustar-producao", "Padaria", "Sobras na padaria: como registrar e ajustar a produção"),
        ("gestao-financeira-padaria-custo-produto", "Padaria", "Como calcular o custo real de cada produto da padaria"),
    ],
    "js": JS,
}
