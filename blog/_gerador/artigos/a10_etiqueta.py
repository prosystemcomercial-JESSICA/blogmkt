from base import cta

WHATS = "Olá! Li o artigo sobre etiquetas de alimentos preparados no blog da ProSystem e quero organizar a gestão da minha padaria."

ARTIGO = {
    "slug": "identificacao-alimentos-preparados-padaria-etiqueta-validade",
    "titulo_tag": "Etiqueta de alimentos preparados na padaria (RDC 216) | ProSystem",
    "descricao": "A RDC 216 exige identificar alimentos preparados com nome, data de preparo e validade, e controlar temperatura no armazenamento. Veja o modelo de etiqueta e a tabela de temperaturas.",
    "og_titulo": "Etiqueta de alimentos preparados na padaria: o que a RDC 216 exige",
    "og_desc": "Nome, data de preparo e validade na etiqueta, mais a tabela de tempos e temperaturas da Anvisa para recheios, cremes e salgados.",
    "og_linhas": ["Etiqueta de alimentos", "preparados: o que a", "RDC 216 exige da padaria"],
    "og_chips": [("< 5 °C", "refrigeração"), ("5 dias", "a 4 °C ou menos")],
    "chamada": "Padaria · Vigilância sanitária",
    "secao": "Padaria",
    "trilha": "Identificação de alimentos preparados",
    "h1": "Etiqueta de alimentos preparados na padaria: o que a RDC 216 exige e como controlar validade e temperatura",
    "linha_fina": "Recheios, cremes, massas e salgados guardados para depois precisam de identificação e de temperatura controlada. É uma regra simples que evita perda de produto e problema na fiscalização.",
    "minutos": 7,
    "keywords": "etiqueta alimentos preparados, identificação de alimentos RDC 216, validade de alimentos preparados, temperatura de refrigeração padaria, data de preparo e validade, etiqueta de manipulação",
    "whats": WHATS,
    "barra": "Falar com a ProSystem",
    "cta_lateral": ("Produção organizada, estoque no controle", "PDV, compras e estoque no mesmo sistema da padaria.", "Falar com a ProSystem"),
    "resumo": [
        "Alimentos preparados guardados ou aguardando transporte precisam de etiqueta com <strong>nome do produto, data de preparo e prazo de validade</strong> (RDC 216, item 4.9.1).",
        "Ingredientes abertos e não usados por inteiro também: <strong>nome, data de fracionamento e validade depois de aberto</strong>.",
        "Refrigeração abaixo de <strong>5 °C</strong>. Preparados mantidos a <strong>4 °C ou menos</strong> podem ser consumidos em até <strong>5 dias</strong>.",
        "Etiqueta sem controle de temperatura não basta. As duas coisas andam juntas.",
    ],
    "toc": [
        ("o-que-diz", "O que diz a RDC 216"),
        ("etiqueta", "O modelo de etiqueta"),
        ("temperaturas", "Tempos e temperaturas"),
        ("rotina", "A rotina que funciona"),
        ("diferenca", "Etiqueta x rótulo"),
    ],
    "corpo": f"""
    <p>Abra a câmara fria de qualquer padaria movimentada e conte quantos potes estão sem identificação: creme de confeiteiro, recheio de frango, massa de salgado, calda de bolo. Quem preparou sabe o que é e quando fez. O resto da equipe, não.</p>

    <p>A consequência aparece de dois jeitos. Ou o produto é jogado fora "por segurança", ou é usado sem que ninguém saiba há quanto tempo está ali. Nenhum dos dois é bom para o caixa nem para o cliente.</p>

    <h2 id="o-que-diz">O que diz a RDC 216</h2>

    <p><strong>A RDC 216 da Anvisa determina que alimentos preparados mantidos em armazenamento ou aguardando transporte estejam identificados e protegidos contra contaminantes, com pelo menos o nome do produto, a data de preparo e o prazo de validade.</strong> A regra está no item 4.9.1 da <a href="https://bvsms.saude.gov.br/bvs/saudelegis/anvisa/2004/res0216_15_09_2004.html" target="_blank" rel="noopener">resolução</a>.</p>

    <p>Uma regra parecida vale para ingredientes que foram abertos e não usados por inteiro. Pelo item 4.8.6, eles precisam ser bem acondicionados e identificados com o nome, a data de fracionamento e a validade depois da abertura.</p>

    <h2 id="etiqueta">O modelo de etiqueta</h2>

    <div class="etiqueta-modelo">
      <div class="etiqueta" aria-label="Exemplo de etiqueta de alimento preparado">
        <b>Creme de confeiteiro</b>
        <dl>
          <dt>Preparo</dt><dd>06/10/2026, 07h30</dd>
          <dt>Validade</dt><dd>11/10/2026</dd>
          <dt>Conservação</dt><dd>refrigerado, até 4 °C</dd>
          <dt>Responsável</dt><dd>Carlos</dd>
        </dl>
      </div>
      <div>
        <p><strong>Os três campos obrigatórios</strong> são nome, data de preparo e validade. Conservação e responsável não são exigidos pela RDC 216, mas ajudam muito na rotina.</p>
        <p>A validade da etiqueta acima considera o limite de cinco dias para preparados mantidos a 4 °C ou menos. Se a sua geladeira trabalha entre 4 °C e 5 °C, o prazo precisa ser menor, conforme o seu Manual de Boas Práticas.</p>
      </div>
    </div>

    <div class="quadro">
      <span class="quadro__titulo">Dica de rotina</span>
      <p>Deixe um rolo de etiquetas e uma caneta presos na porta da câmara fria. Se a etiqueta exige ir buscar material em outro lugar, ela não vai ser feita no horário de pico.</p>
    </div>

    <h2 id="temperaturas">Tempos e temperaturas que a Anvisa exige</h2>

    <p>A etiqueta diz quando o alimento vence. A temperatura é o que garante que ele chegue bem até lá. A RDC 216 define os limites abaixo nos itens 4.8.15 a 4.8.17.</p>

    <div class="tabela">
      <table>
        <caption>Limites da RDC 216 para alimentos preparados</caption>
        <thead><tr><th>Situação</th><th>Regra</th></tr></thead>
        <tbody>
          <tr><td><strong>Mantido quente</strong> para servir</td><td>Acima de 60 °C, por no máximo 6 horas</td></tr>
          <tr><td><strong>Resfriamento</strong> depois do preparo</td><td>De 60 °C para 10 °C em até 2 horas</td></tr>
          <tr><td><strong>Refrigeração</strong></td><td>Abaixo de 5 °C</td></tr>
          <tr><td><strong>Prazo sob refrigeração</strong></td><td>Até 5 dias, se mantido a 4 °C ou menos</td></tr>
          <tr><td><strong>Congelamento</strong></td><td>−18 °C ou menos</td></tr>
        </tbody>
      </table>
    </div>

    <div class="numero">
      <b>2 horas</b>
      <p>é o tempo máximo para um recheio quente passar de 60 °C para 10 °C. Panela grande e funda demora demais. Divida em recipientes rasos antes de levar à geladeira.<small>RDC 216, item 4.8.16.</small></p>
    </div>

    <div class="quadro quadro--alerta">
      <span class="quadro__titulo">A vitrine quente também conta</span>
      <p>Salgados expostos em estufa precisam estar acima de 60 °C e não podem passar de 6 horas nessa condição. Anote o horário de reposição de cada bandeja e confira o termômetro da estufa ao longo do dia.</p>
    </div>

{cta("Menos perda na produção, mais controle no caixa", "Etiqueta e temperatura cuidam da segurança. Para saber quanto cada produto vende e quanto sobra, o PDV precisa conversar com o estoque. Fale com a ProSystem.", WHATS)}

    <h2 id="rotina">A rotina que funciona</h2>

    <div class="checagem" data-checklist>
      <div class="checagem__topo"><b>Checklist diário da câmara fria</b><span class="checagem__conta">0 de 6 em dia</span></div>
      <label><input type="checkbox"><span>Temperatura das geladeiras e câmaras anotada na abertura e no fechamento</span></label>
      <label><input type="checkbox"><span>Todo pote com etiqueta de nome, data de preparo e validade</span></label>
      <label><input type="checkbox"><span>Ingredientes abertos com data de abertura e validade</span></label>
      <label><input type="checkbox"><span>Produtos que vencem hoje separados na frente, para uso imediato</span></label>
      <label><input type="checkbox"><span>Vencidos retirados e registrados como perda</span></label>
      <label><input type="checkbox"><span>Termômetro da estufa conferido nos horários de reposição</span></label>
    </div>

    <h3>Modelo de planilha de temperatura</h3>

    <div class="tabela">
      <table>
        <caption>Registro de temperatura (exemplo de uma semana)</caption>
        <thead><tr><th>Data</th><th>Equipamento</th><th>Abertura</th><th>Fechamento</th><th>Ação, se fora do limite</th><th>Rubrica</th></tr></thead>
        <tbody>
          <tr><td>06/10</td><td>Câmara de recheios</td><td>3 °C</td><td>4 °C</td><td>—</td><td>CS</td></tr>
          <tr><td>06/10</td><td>Freezer de massas</td><td>−20 °C</td><td>−19 °C</td><td>—</td><td>CS</td></tr>
          <tr><td>07/10</td><td>Câmara de recheios</td><td>7 °C</td><td>4 °C</td><td>Porta mal fechada à noite; produtos avaliados</td><td>AM</td></tr>
        </tbody>
      </table>
    </div>

    <p>A coluna de ação é a mais importante. Anotar 7 °C e não fazer nada é pior do que não anotar, porque prova que o problema foi visto e ignorado.</p>

    <p>O registro de temperatura é o que prova, numa fiscalização, que o controle existe. E é o que avisa o dono quando uma geladeira começa a falhar, antes de perder o estoque inteiro.</p>

    <h2 id="diferenca">Etiqueta interna não é rótulo de produto embalado</h2>

    <p>A etiqueta de que trata este artigo é de uso interno, para o que está guardado na produção. Produtos que a padaria embala para vender prontos, como pão de forma, biscoitos e bolos embalados, seguem outras regras de rotulagem e de definição de validade.</p>

    <p>Para esse caso, veja o guia sobre <a href="prazo-de-validade-produtos-embalados-padaria-guia-16-anvisa.html">prazo de validade de produtos embalados e o Guia 16 da Anvisa</a>.</p>
""",
    "faq": [
        ("O que precisa ter na etiqueta de alimento preparado?", "Pela RDC 216 da Anvisa, item 4.9.1, no mínimo a designação do produto, a data de preparo e o prazo de validade. Informações como forma de conservação e responsável não são obrigatórias, mas ajudam na rotina."),
        ("Quanto tempo um alimento preparado pode ficar na geladeira?", "A RDC 216 estabelece prazo máximo de 5 dias para alimentos preparados conservados sob refrigeração a 4 °C ou menos. Em temperaturas entre 4 °C e 5 °C, o prazo deve ser menor, conforme o Manual de Boas Práticas."),
        ("Qual a temperatura correta da geladeira da padaria?", "Para alimentos preparados, a RDC 216 exige refrigeração abaixo de 5 °C. Para congelados, −18 °C ou menos. Matérias-primas devem seguir a temperatura indicada pelo fabricante."),
        ("Por quanto tempo o salgado pode ficar na estufa?", "Alimentos preparados mantidos quentes devem estar acima de 60 °C por, no máximo, 6 horas, conforme a RDC 216."),
        ("Ingrediente aberto precisa de etiqueta?", "Sim. Pelo item 4.8.6 da RDC 216, ingredientes não utilizados por inteiro devem ser identificados com designação do produto, data de fracionamento e prazo de validade após a abertura."),
    ],
    "fontes": [
        ("https://bvsms.saude.gov.br/bvs/saudelegis/anvisa/2004/res0216_15_09_2004.html", "Resolução RDC nº 216, de 15 de setembro de 2004", "Anvisa, Biblioteca Virtual em Saúde"),
    ],
    "aviso": "Confirme exigências locais com a vigilância sanitária do seu município.",
    "relacionados": [
        ("manual-boas-praticas-pop-padaria-rdc-216", "Padaria", "Manual de Boas Práticas e POPs: o que a RDC 216 exige"),
        ("prazo-de-validade-produtos-embalados-padaria-guia-16-anvisa", "Padaria", "Prazo de validade de embalados: o que diz o Guia 16 da Anvisa"),
        ("peps-estoque-padaria-primeiro-que-entra-primeiro-que-sai", "Padaria", "PEPS na padaria: como organizar o estoque"),
    ],
}
