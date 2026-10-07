from base import cta

WHATS = "Olá! Li o artigo sobre Manual de Boas Práticas no blog da ProSystem e quero organizar a gestão da minha padaria."

ARTIGO = {
    "slug": "manual-boas-praticas-pop-padaria-rdc-216",
    "titulo_tag": "Manual de Boas Práticas e POPs na padaria (RDC 216) | ProSystem",
    "descricao": "O que a RDC 216 da Anvisa exige da padaria: Manual de Boas Práticas, os 4 POPs obrigatórios e a capacitação do responsável. Com checklist interativo para conferir o seu.",
    "og_titulo": "Manual de Boas Práticas e POPs na padaria: o que a RDC 216 exige",
    "og_desc": "O conteúdo mínimo do manual, os 4 POPs obrigatórios e um checklist para conferir antes da fiscalização.",
    "og_linhas": ["Manual de Boas Práticas", "e POPs na padaria: o que", "a RDC 216 exige"],
    "og_chips": [("4 POPs", "obrigatórios"), ("RDC 216", "Anvisa")],
    "chamada": "Padaria · Vigilância sanitária",
    "secao": "Padaria",
    "trilha": "Manual de Boas Práticas e POPs",
    "h1": "Manual de Boas Práticas e POPs na padaria: o que a RDC 216 exige e como montar o seu",
    "linha_fina": "A norma da Anvisa vale para toda padaria que manipula alimentos. Com o manual e os procedimentos em dia, a equipe trabalha do mesmo jeito em todos os turnos e a fiscalização deixa de ser um susto.",
    "minutos": 9,
    "keywords": "Manual de Boas Práticas padaria, POP padaria, RDC 216, procedimento operacional padronizado, vigilância sanitária padaria, boas práticas de fabricação padaria",
    "whats": WHATS,
    "barra": "Falar com a ProSystem",
    "cta_lateral": ("Padaria organizada do balcão ao estoque", "PDV, estoque e financeiro no mesmo sistema, com suporte 24 horas.", "Falar com a ProSystem"),
    "resumo": [
        "A <strong>RDC 216/2004</strong> da Anvisa exige que padarias tenham <strong>Manual de Boas Práticas</strong> e <strong>Procedimentos Operacionais Padronizados (POPs)</strong>.",
        "São <strong>quatro POPs obrigatórios</strong>: higienização, controle de pragas, higienização do reservatório de água e higiene e saúde dos manipuladores.",
        "Os documentos precisam ser <strong>aprovados, datados e assinados</strong> pelo responsável e ficar acessíveis à equipe.",
        "A vigilância sanitária do seu estado ou município pode ter regras complementares.",
    ],
    "toc": [
        ("rdc-216", "O que diz a RDC 216"),
        ("manual", "O que vai no manual"),
        ("pops", "Os quatro POPs"),
        ("responsavel", "O responsável"),
        ("montar", "Como montar o seu"),
    ],
    "corpo": f"""
    <p>Toda padaria tem um jeito de fazer as coisas. O problema é quando esse jeito mora só na cabeça do padeiro mais antigo. Quando ele sai de férias, a limpeza da masseira muda, o controle da geladeira some e ninguém lembra quando a caixa d'água foi lavada.</p>

    <p>O Manual de Boas Práticas e os POPs existem para colocar isso no papel. Eles são exigência da Anvisa e são o primeiro documento que o fiscal da vigilância sanitária pede numa inspeção.</p>

    <h2 id="rdc-216">O que diz a RDC 216</h2>

    <p><strong>A RDC 216/2004 é a resolução da Anvisa que define as boas práticas para serviços de alimentação, e o item 1.2 inclui padarias entre os estabelecimentos atingidos.</strong> O item 4.11.1 é direto: "os serviços de alimentação devem dispor de Manual de Boas Práticas e de Procedimentos Operacionais Padronizados".</p>

    <p>O texto completo está disponível na <a href="https://bvsms.saude.gov.br/bvs/saudelegis/anvisa/2004/res0216_15_09_2004.html" target="_blank" rel="noopener">Biblioteca Virtual em Saúde</a>. A norma é de 2004, mas segue em vigor e é a referência nacional.</p>

    <div class="quadro quadro--alerta">
      <span class="quadro__titulo">Confira as regras locais</span>
      <p>Estados e municípios podem ter normas próprias que complementam a RDC 216, como a Portaria CVS 5/2013 em São Paulo. Padarias que produzem em escala para revenda em outros pontos podem se enquadrar como indústria e seguir regras diferentes. Na dúvida, pergunte à vigilância sanitária da sua cidade.</p>
    </div>

    <h2 id="manual">O que vai no Manual de Boas Práticas</h2>

    <p>O manual descreve como a padaria funciona, do recebimento da farinha à entrega do pão no balcão. A RDC 216 lista o conteúdo mínimo. Use a lista abaixo para conferir o seu manual, item por item.</p>

    <div class="checagem" data-checklist>
      <div class="checagem__topo"><b>Conteúdo mínimo do manual</b><span class="checagem__conta">0 de 9 em dia</span></div>
      <label><input type="checkbox"><span>Requisitos higiênico-sanitários do prédio e das instalações</span></label>
      <label><input type="checkbox"><span>Manutenção e higienização de instalações, equipamentos e utensílios</span></label>
      <label><input type="checkbox"><span>Controle da água de abastecimento</span></label>
      <label><input type="checkbox"><span>Controle integrado de vetores e pragas urbanas</span></label>
      <label><input type="checkbox"><span>Capacitação profissional da equipe</span></label>
      <label><input type="checkbox"><span>Controle da higiene e saúde dos manipuladores</span></label>
      <label><input type="checkbox"><span>Manejo dos resíduos</span></label>
      <label><input type="checkbox"><span>Controle e garantia de qualidade do alimento preparado</span></label>
      <label><input type="checkbox"><span>Documento aprovado, datado, assinado e disponível para a equipe</span></label>
    </div>

    <p>Um bom manual descreve a padaria real. Copiar um modelo pronto da internet, com equipamentos que você não tem e rotinas que ninguém segue, não ajuda na fiscalização e não ajuda a equipe.</p>

    <h2 id="pops">Os quatro POPs obrigatórios</h2>

    <p>Se o manual explica o que a padaria faz, o POP explica como fazer, passo a passo. A RDC 216 exige quatro, no item 4.11.4.</p>

    <div class="tabela">
      <table>
        <caption>POPs exigidos pela RDC 216</caption>
        <thead><tr><th>POP</th><th>O que precisa descrever</th><th>Registro</th></tr></thead>
        <tbody>
          <tr><td><strong>1. Higienização</strong> de instalações, equipamentos e móveis</td><td>Superfícies, produto usado, diluição, tempo de contato, frequência e quem faz</td><td>Planilha de limpeza por área e equipamento</td></tr>
          <tr><td><strong>2. Controle de pragas</strong></td><td>Medidas de prevenção e o que fazer quando há infestação</td><td>Comprovante da empresa controladora de pragas</td></tr>
          <tr><td><strong>3. Higienização do reservatório</strong> de água</td><td>Como e de quanto em quanto tempo a caixa d'água é lavada</td><td>Registro de cada higienização, no máximo a cada seis meses</td></tr>
          <tr><td><strong>4. Higiene e saúde dos manipuladores</strong></td><td>Uniforme, lavagem das mãos, adornos, exames e afastamento por doença</td><td>Controle de exames e treinamentos</td></tr>
        </tbody>
      </table>
    </div>

    <blockquote class="citacao">O POP bom é aquele que o funcionário novo consegue seguir no primeiro dia, sem perguntar para ninguém.</blockquote>

    <div class="quadro">
      <span class="quadro__titulo">Na prática</span>
      <p>O POP de higienização da masseira pode caber numa folha plastificada presa ao lado do equipamento: desligar da tomada, retirar resíduos, lavar com detergente, enxaguar, aplicar o sanitizante na diluição indicada pelo fabricante, respeitar o tempo de contato e deixar secar. Embaixo, uma planilha simples com data, horário e rubrica de quem fez.</p>
    </div>

    <h3>Os registros que provam que o POP é seguido</h3>

    <p>Na fiscalização, o POP no papel mostra que a padaria sabe o que fazer. O registro mostra que ela faz. Mantenha estes controles organizados numa pasta, por mês.</p>

    <div class="tabela">
      <table>
        <caption>Registros de rotina de uma padaria</caption>
        <thead><tr><th>Registro</th><th>Frequência sugerida</th><th>Quem assina</th></tr></thead>
        <tbody>
          <tr><td>Limpeza de equipamentos e áreas</td><td>A cada limpeza</td><td>Quem fez</td></tr>
          <tr><td>Temperatura de geladeiras, câmaras e freezers</td><td>Diária, na abertura e no fechamento</td><td>Responsável do turno</td></tr>
          <tr><td>Higienização da caixa d'água</td><td>A cada seis meses, no máximo</td><td>Empresa contratada ou responsável</td></tr>
          <tr><td>Controle de pragas</td><td>Conforme contrato com a empresa</td><td>Empresa contratada</td></tr>
          <tr><td>Treinamentos da equipe</td><td>A cada treinamento</td><td>Participantes e responsável</td></tr>
          <tr><td>Exames de saúde dos manipuladores</td><td>Conforme legislação local</td><td>Responsável</td></tr>
        </tbody>
      </table>
    </div>

    <h2 id="responsavel">O responsável pelas boas práticas</h2>

    <p>A RDC 216 exige que alguém responda pelas atividades de manipulação. Pode ser o proprietário ou um funcionário, desde que tenha feito capacitação. O item 4.12.2 lista os temas mínimos do curso:</p>

    <ul>
      <li>contaminantes alimentares;</li>
      <li>doenças transmitidas por alimentos;</li>
      <li>manipulação higiênica dos alimentos;</li>
      <li>boas práticas.</li>
    </ul>

    <p>Guarde o certificado do curso junto com o manual. Ele também é pedido na fiscalização.</p>

{cta("Boas práticas na produção, controle no estoque e no caixa", "Com o manual em dia, o próximo passo é saber o que entra, o que sai e o que sobra. Fale com a ProSystem e veja PDV, estoque e financeiro trabalhando juntos na sua padaria.", WHATS)}

    <h2 id="montar">Como montar o seu em cinco passos</h2>

    <ol class="passos">
      <li><div><b>Caminhe pela padaria com papel na mão.</b> Anote cada etapa real: recebimento, armazenamento, produção, exposição, venda e descarte.</div></li>
      <li><div><b>Escreva o manual com base no que viu.</b> Siga a lista de conteúdo mínimo da RDC 216 e descreva a sua estrutura, não a de um modelo genérico.</div></li>
      <li><div><b>Escreva os quatro POPs.</b> Frases curtas, uma ação por linha, com produto, quantidade e frequência.</div></li>
      <li><div><b>Treine a equipe e registre.</b> Lista de presença com data e assinatura vale como comprovante.</div></li>
      <li><div><b>Revise sempre que algo mudar.</b> Equipamento novo, produto de limpeza diferente ou mudança no processo pedem atualização, com nova data e assinatura.</div></li>
    </ol>

    <h3>Erros que aparecem com frequência</h3>

    <ul>
      <li><strong>Manual copiado</strong> de outra empresa, citando equipamentos e áreas que a padaria não tem.</li>
      <li><strong>POP sem assinatura ou sem data</strong>, o que contraria o item 4.11.2 da RDC 216.</li>
      <li><strong>Documento trancado no escritório</strong>, longe de quem precisa seguir.</li>
      <li><strong>Planilhas preenchidas de uma vez</strong> no fim do mês, com a mesma caneta e a mesma letra.</li>
      <li><strong>Produto de limpeza trocado</strong> sem atualizar a diluição no POP.</li>
    </ul>

    <p>Muitas padarias contratam um nutricionista ou técnico em alimentos para escrever ou revisar os documentos. O Sebrae também oferece orientação para pequenos negócios do setor.</p>
""",
    "faq": [
        ("Padaria precisa ter Manual de Boas Práticas?", "Sim. A RDC 216/2004 da Anvisa inclui padarias entre os serviços de alimentação e exige, no item 4.11.1, que esses estabelecimentos tenham Manual de Boas Práticas e Procedimentos Operacionais Padronizados."),
        ("Quais são os POPs obrigatórios pela RDC 216?", "São quatro: higienização de instalações, equipamentos e móveis; controle integrado de vetores e pragas urbanas; higienização do reservatório de água; e higiene e saúde dos manipuladores."),
        ("Qual a diferença entre Manual de Boas Práticas e POP?", "O manual descreve as operações do estabelecimento de forma geral, como estrutura, higiene, água, pragas, equipe e qualidade. O POP descreve passo a passo como executar uma tarefa específica, com produtos, frequência e responsável."),
        ("Quem pode ser o responsável pelas boas práticas na padaria?", "O proprietário ou um funcionário designado, desde que tenha passado por capacitação sobre contaminantes alimentares, doenças transmitidas por alimentos, manipulação higiênica e boas práticas, conforme o item 4.12.2 da RDC 216."),
        ("De quanto em quanto tempo a caixa d'água da padaria deve ser lavada?", "A RDC 216 determina que o reservatório seja higienizado em intervalo máximo de seis meses, com registro de cada operação."),
    ],
    "fontes": [
        ("https://bvsms.saude.gov.br/bvs/saudelegis/anvisa/2004/res0216_15_09_2004.html", "Resolução RDC nº 216, de 15 de setembro de 2004", "Anvisa, Biblioteca Virtual em Saúde"),
        ("https://sebrae.com.br/content/dam/portal-sebrae/na/midias/documentos/pdfs/ideia-de-negocio_padaria.pdf", "Ideia de negócio: padaria", "Sebrae"),
    ],
    "aviso": "Confirme exigências locais com a vigilância sanitária do seu município.",
    "relacionados": [
        ("identificacao-alimentos-preparados-padaria-etiqueta-validade", "Padaria", "Etiqueta de alimentos preparados: o que a RDC 216 exige"),
        ("prazo-de-validade-produtos-embalados-padaria-guia-16-anvisa", "Padaria", "Prazo de validade de embalados: o que diz o Guia 16 da Anvisa"),
        ("peps-estoque-padaria-primeiro-que-entra-primeiro-que-sai", "Padaria", "PEPS na padaria: como organizar o estoque"),
    ],
}
