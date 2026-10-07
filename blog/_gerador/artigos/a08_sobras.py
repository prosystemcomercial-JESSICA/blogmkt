from base import cta

WHATS = "Olá! Li o artigo sobre sobras na padaria no blog da ProSystem e quero acompanhar melhor a venda por produto e horário."

JS = """<script>
document.addEventListener('DOMContentLoaded', function () {
  var ids = ['v1','v2','v3','v4'], seg = document.getElementById('seguranca'), prod = document.getElementById('produzido');
  function calcula() {
    var vals = ids.map(function (i) { return parseFloat(document.getElementById(i).value); }).filter(function (x) { return x >= 0; });
    var out = function (id, x) { document.getElementById(id).textContent = x; };
    var frase = document.getElementById('s-frase');
    if (vals.length < 2) { ['s-media','s-sug','s-sobra'].forEach(function (i) { out(i, '—'); }); frase.textContent = ''; return; }
    var media = vals.reduce(function (a, b) { return a + b; }, 0) / vals.length;
    var s = parseFloat(seg.value); if (!(s >= 0)) s = 0;
    var sug = Math.ceil(media * (1 + s / 100));
    out('s-media', num(media, 0));
    out('s-sug', num(sug, 0));
    var p = parseFloat(prod.value);
    if (p > 0) {
      var sobra = Math.max(0, p - media);
      out('s-sobra', num(sobra / p * 100, 0) + '%');
      frase.textContent = p > sug
        ? 'Hoje você produz ' + num(p - sug, 0) + ' unidades a mais do que a sugestão. Teste reduzir a fornada aos poucos e acompanhe as faltas.'
        : 'Sua produção está dentro da sugestão. Continue registrando para ver se o padrão se mantém.';
    } else { out('s-sobra', '—'); frase.textContent = ''; }
  }
  ids.concat(['seguranca','produzido']).forEach(function (i) { document.getElementById(i).addEventListener('input', calcula); });
  calcula();
});
</script>"""

ARTIGO = {
    "slug": "controle-de-sobras-padaria-ajustar-producao",
    "titulo_tag": "Sobras na padaria: como registrar e ajustar a produção | ProSystem",
    "descricao": "Pesar e registrar as sobras todo dia mostra quanto produzir em cada fornada. Veja o modelo de registro recomendado pelo Sebrae e calcule a produção ideal pelo histórico de vendas.",
    "og_titulo": "Sobras na padaria: como registrar o que sobra e ajustar a produção",
    "og_desc": "Registro diário de sobras por produto e horário, causas mais comuns e uma calculadora para definir a próxima fornada.",
    "og_linhas": ["Sobras na padaria: como", "registrar o que sobra e", "ajustar cada fornada"],
    "og_chips": [("Por produto", "e por horário"), ("4 semanas", "de histórico")],
    "chamada": "Padaria · Produção",
    "secao": "Padaria",
    "trilha": "Controle de sobras",
    "h1": "Sobras na padaria: como registrar o que sobra e ajustar a produção de cada fornada",
    "linha_fina": "O Sebrae recomenda pesar e registrar as sobras todos os dias, investigar as causas e usar os dados para ajustar o que vai ao forno. Veja como montar esse controle sem complicar a rotina.",
    "minutos": 8,
    "keywords": "sobras padaria, controle de sobras, desperdício padaria, planejamento de produção padaria, quanto produzir padaria, registro de sobras, doação de alimentos Lei 14.016",
    "whats": WHATS,
    "barra": "Falar com a ProSystem",
    "cta_lateral": ("Venda por produto e por horário", "O PDV registra o que saiu e quando. É o dado que faltava para acertar a fornada.", "Falar com a ProSystem"),
    "resumo": [
        "O Sebrae recomenda <strong>pesar e registrar as sobras diariamente</strong>, investigar as causas e usar os dados para ajustar a produção.",
        "O registro precisa ser <strong>por produto e por horário</strong>. Sobra no fim do dia e falta de manhã podem acontecer juntas.",
        "A forma mais simples de planejar é usar a <strong>média de vendas dos mesmos dias da semana</strong> nas últimas semanas.",
        "Alimento excedente em boas condições pode ser <strong>doado</strong>, nos termos da Lei nº 14.016/2020.",
    ],
    "toc": [
        ("por-que", "Por que registrar"),
        ("modelo", "O modelo de registro"),
        ("causas", "Por que sobra"),
        ("calculadora", "Quanto produzir"),
        ("destino", "O que fazer com a sobra"),
    ],
    "corpo": f"""
    <p>Às oito da noite, a vitrine ainda tem três bandejas de pão francês e meia forma de bolo. O padeiro jura que fez "o de sempre". O dono jura que o movimento caiu. Sem registro, os dois podem estar certos, e ninguém sabe o que mudar amanhã.</p>

    <p>Sobra é dinheiro que já virou farinha, gás, energia e hora de trabalho. A boa notícia é que é um dos desperdícios mais fáceis de medir, porque ele está ali, na bandeja, todo fim de dia.</p>

    <h2 id="por-que">Por que registrar as sobras todo dia</h2>

    <p><strong>Registrar sobras é anotar, ao fim de cada período, quanto de cada produto foi produzido, quanto foi vendido e quanto sobrou.</strong> Com algumas semanas de dados, o padrão aparece: quais produtos sobram, em que dias e em que horários.</p>

    <p>A ferramenta de controle de produção do <a href="https://www.sebraeplay.com.br/content/producao-ordenada-ferramenta-encarte-padaria" target="_blank" rel="noopener">Sebrae para padarias e confeitarias</a> segue essa lógica: acompanhar as vendas, anotar sobras e faltas e classificar o que foi perdido, seja produto queimado, vencido, danificado, devolvido ou não vendido.</p>

    <blockquote class="citacao">Sobra sem registro vira opinião. Sobra registrada vira decisão para a fornada de amanhã.</blockquote>

    <h2 id="modelo">O modelo de registro</h2>

    <p>Não precisa de nada sofisticado para começar. Uma planilha ou uma folha na parede da produção resolve, desde que seja preenchida todo dia.</p>

    <div class="tabela">
      <table>
        <caption>Exemplo de registro diário (terça-feira)</caption>
        <thead><tr><th>Produto</th><th>Fornada</th><th>Produzido</th><th>Vendido</th><th>Sobra</th><th>Destino</th></tr></thead>
        <tbody>
          <tr><td>Pão francês</td><td>6h</td><td>600</td><td>590</td><td>10</td><td>Farinha de rosca</td></tr>
          <tr><td>Pão francês</td><td>16h</td><td>400</td><td>310</td><td>90</td><td>Doação</td></tr>
          <tr><td>Pão de queijo</td><td>7h</td><td>150</td><td>150</td><td>0</td><td>Faltou às 10h</td></tr>
          <tr><td>Bolo de cenoura</td><td>9h</td><td>4 formas</td><td>3 formas</td><td>1 forma</td><td>Descarte</td></tr>
        </tbody>
      </table>
    </div>
    <p class="calc__nota">Números ilustrativos. Use quilos para produtos vendidos a peso.</p>

    <p>Repare no que a tabela mostra. O pão da manhã está bem dimensionado, o da tarde sobra demais e o pão de queijo falta. Sem o registro por horário, a soma do dia esconderia os três problemas.</p>

    <h2 id="causas">Por que sobra: as causas mais frequentes</h2>

    <div class="casos">
      <div class="caso">
        <div><span class="selo selo--acao">Planejamento</span><h3>Produção pelo hábito</h3></div>
        <p>A fornada é a mesma todo dia, sem considerar que segunda e sábado vendem diferente.</p>
      </div>
      <div class="caso">
        <div><span class="selo selo--acao">Horário</span><h3>Fornada no horário errado</h3></div>
        <p>Muito pão no fim da tarde, quando o movimento já caiu, e pouco no horário de pico.</p>
      </div>
      <div class="caso">
        <div><span class="selo selo--alerta">Qualidade</span><h3>Produto fora do padrão</h3></div>
        <p>Pão murcho, bolo abatido ou salgado queimado não vende. Aqui a causa é processo, não quantidade.</p>
      </div>
      <div class="caso">
        <div><span class="selo selo--ok">Externa</span><h3>Clima, feriado e evento</h3></div>
        <p>Chuva forte e feriado mudam o movimento. Anote na planilha para não confundir com tendência.</p>
      </div>
    </div>

    <h2 id="calculadora">Quanto produzir: a média dos mesmos dias</h2>

    <p>O jeito mais simples de planejar é olhar quanto vendeu nos mesmos dias da semana nas últimas semanas e somar uma pequena margem de segurança. Ajuste aos poucos e acompanhe as faltas, porque cliente que não encontra o pão também é perda.</p>

    <div class="calc">
      <h3>Calculadora da próxima fornada</h3>
      <p>Informe as vendas de um produto nos últimos quatro dias iguais, por exemplo as últimas quatro terças, no mesmo horário.</p>
      <div class="calc__campos">
        <label for="v1">Semana 1<input type="number" id="v1" min="0" value="320"></label>
        <label for="v2">Semana 2<input type="number" id="v2" min="0" value="300"></label>
        <label for="v3">Semana 3<input type="number" id="v3" min="0" value="295"></label>
        <label for="v4">Semana 4<input type="number" id="v4" min="0" value="310"></label>
        <label for="seguranca">Margem de segurança (%)<input type="number" id="seguranca" min="0" max="50" value="5"></label>
        <label for="produzido">Quanto produz hoje<input type="number" id="produzido" min="0" value="400"></label>
      </div>
      <div class="calc__saida" aria-live="polite">
        <div><span>Venda média</span><b id="s-media">—</b></div>
        <div><span>Produção sugerida</span><b id="s-sug">—</b></div>
        <div><span>Sobra média hoje</span><b id="s-sobra">—</b></div>
      </div>
      <p class="calc__frase" id="s-frase"></p>
    </div>

{cta("O dado de venda por horário já está no seu caixa", "Todo PDV registra o que foi vendido e a que horas. Com esse relatório na mão, a planilha de sobras fica completa. Fale com a ProSystem e veja como isso funciona numa padaria.", WHATS)}

    <h3>Três números para acompanhar toda semana</h3>

    <div class="tabela">
      <table>
        <caption>Indicadores de sobra e produção</caption>
        <thead><tr><th>Indicador</th><th>Como calcular</th><th>Para que serve</th></tr></thead>
        <tbody>
          <tr><td><strong>Taxa de sobra</strong></td><td>Sobra ÷ produzido, por produto</td><td>Mostra quais produtos estão superdimensionados</td></tr>
          <tr><td><strong>Horário da falta</strong></td><td>Hora em que o produto acabou na vitrine</td><td>Mostra onde falta produto e a venda escapa</td></tr>
          <tr><td><strong>Perda em reais</strong></td><td>Sobra descartada × custo de produção</td><td>Mostra quanto a sobra custa por mês</td></tr>
        </tbody>
      </table>
    </div>

    <p>A taxa de sobra ideal não é zero. Produção sem nenhuma sobra costuma significar prateleira vazia no fim do dia e cliente indo comprar no concorrente. O objetivo é sobra baixa e estável, sem faltas nos horários de pico.</p>

    <div class="quadro">
      <span class="quadro__titulo">Na prática</span>
      <p>Imagine que a planilha mostre que o pão francês da fornada das 16h sobra mais às segundas e terças. Em vez de cortar a fornada inteira, a padaria pode fazer duas fornadas menores, às 16h e às 17h30, só nesses dias. A sobra cai e o pão do fim da tarde sai mais quente, o que também ajuda a vender.</p>
    </div>

    <h2 id="destino">O que fazer com o que sobra</h2>

    <p>Mesmo com bom planejamento, alguma sobra vai existir. O que muda o resultado é o destino.</p>

    <ul>
      <li><strong>Reaproveitamento interno.</strong> Pão do dia anterior pode virar farinha de rosca, torrada ou pudim, desde que siga as regras de boas práticas do seu manual.</li>
      <li><strong>Doação.</strong> A <a href="https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/lei/l14016.htm" target="_blank" rel="noopener">Lei nº 14.016/2020</a> autoriza a doação de alimentos excedentes que estejam próprios para consumo, a pessoas e entidades. Combinar com uma instituição do bairro dá destino certo para a sobra do fim do dia.</li>
      <li><strong>Venda do dia anterior.</strong> Algumas padarias vendem com desconto produtos do dia anterior, separados e identificados.</li>
      <li><strong>Descarte.</strong> Só quando não houver alternativa segura. E sempre registrado, porque descarte é o dado mais caro da planilha.</li>
    </ul>

    <p>Se a perda está mais nos ingredientes do que no produto pronto, veja o guia sobre <a href="peps-estoque-padaria-primeiro-que-entra-primeiro-que-sai.html">PEPS no estoque da padaria</a>.</p>
""",
    "faq": [
        ("Como controlar as sobras de uma padaria?", "Registrando todo dia, por produto e por horário de fornada, quanto foi produzido, quanto foi vendido, quanto sobrou e qual foi o destino da sobra. Com algumas semanas de dados, é possível ajustar a produção de cada dia da semana."),
        ("Quanto pão devo produzir por dia?", "Uma forma simples é usar a média de vendas dos mesmos dias da semana nas últimas quatro semanas, no mesmo horário, e somar uma pequena margem de segurança. O ajuste deve ser gradual, acompanhando sobras e faltas."),
        ("Padaria pode doar pão que sobrou?", "Sim. A Lei nº 14.016/2020 autoriza estabelecimentos que produzem ou fornecem alimentos a doar excedentes que estejam próprios para o consumo humano, dentro do prazo de validade e nas condições de conservação adequadas."),
        ("O que fazer com pão do dia anterior?", "Pode ser reaproveitado em farinha de rosca, torradas ou outras receitas, vendido com desconto identificado como produto do dia anterior ou doado, sempre seguindo as boas práticas definidas no manual da padaria."),
    ],
    "fontes": [
        ("https://www.sebraeplay.com.br/content/producao-ordenada-ferramenta-encarte-padaria", "Controle de produção em padarias e confeitarias", "Sebrae"),
        ("https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/lei/l14016.htm", "Lei nº 14.016/2020, combate ao desperdício e doação de alimentos", "Planalto"),
    ],
    "relacionados": [
        ("ficha-tecnica-padaria-padronizar-receitas-rendimento", "Padaria", "Ficha técnica: como padronizar receitas e medir rendimento"),
        ("peps-estoque-padaria-primeiro-que-entra-primeiro-que-sai", "Padaria", "PEPS na padaria: como organizar o estoque"),
        ("controle-producao-padaria-evitar-desperdicio", "Padaria", "Controle de produção em padaria: como evitar desperdício"),
    ],
    "js": JS,
}
