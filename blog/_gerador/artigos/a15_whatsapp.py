from base import cta, tela

WHATS = "Olá! Li o artigo sobre relatórios no WhatsApp no blog da ProSystem e quero receber os números da minha padaria."

ARTIGO = {
    "slug": "relatorios-whatsapp-padaria-fechamento-caixa-automatico",
    "data_iso": "2026-10-30T09:00:00-03:00",
    "data_curta": "30 out. 2026",
    "data_longa": "30 de outubro de 2026",
    "titulo_tag": "Relatórios no WhatsApp: fechamento de caixa da padaria no celular | ProSystem",
    "descricao": "Fechamento de caixa, contas a pagar e descontos autorizados no WhatsApp do dono. Veja quais relatórios automáticos ajudam a acompanhar a padaria sem estar na loja.",
    "og_titulo": "O caixa fechou. O resumo chega no seu WhatsApp.",
    "og_desc": "Quais relatórios receber automaticamente para acompanhar a padaria sem estar na loja, e como organizar quem recebe o quê.",
    "og_linhas": ["O caixa fechou.", "O resumo chega", "no seu WhatsApp."],
    "og_chips": [("80%+", "dos negócios de serviço usam o app"), ("Plus", "versão com avisos automáticos")],
    "chamada": "Padaria · Gestão",
    "secao": "Padaria",
    "trilha": "Relatórios no WhatsApp",
    "h1": "O caixa fechou. O resumo chega no seu WhatsApp.",
    "linha_fina": "Você não precisa ligar para a loja para saber como foi o dia. Os números do fechamento, as contas da semana e os descontos autorizados podem chegar automaticamente no celular de quem decide.",
    "minutos": 6,
    "keywords": "relatórios no WhatsApp, fechamento de caixa padaria, gestão de padaria à distância, avisos automáticos WhatsApp, sistema para padaria, controle de desconto",
    "whats": WHATS,
    "barra": "Quero receber meus números",
    "cta_lateral": ("Avisos automáticos", "Relatórios por usuário, com envio diário ou no fechamento do caixa. Versão Plus.", "Falar com a ProSystem"),
    "aviso": "Telas reais do Prosystem, com dados de exemplo; nomes e telefones foram retirados das imagens. Os avisos por WhatsApp são uma funcionalidade da versão Plus.",
    "resumo": [
        "O Prosystem envia <strong>relatórios automáticos por WhatsApp</strong>, com frequência diária, no fechamento do caixa ou nos dois.",
        "O dono pode acompanhar <strong>fechamento, vendas, contas a pagar, compras e inventário</strong> sem abrir o sistema.",
        "O aviso de login mostra quando alguém usa a senha para <strong>autorizar uma operação</strong>, como um desconto.",
        "Cada pessoa recebe só o que precisa, e a funcionalidade faz parte da <strong>versão Plus</strong>.",
    ],
    "toc": [
        ("rotina", "O problema de depender da loja"),
        ("relatorios", "O que receber no celular"),
        ("quem-recebe", "Quem recebe o quê"),
        ("como-ativar", "O que é preciso para funcionar"),
    ],
    "corpo": f"""
    <p>A padaria abre antes do sol nascer e o caixa só fecha à noite. Quando o dono não está na loja, a pergunta é sempre a mesma: como foi o dia? A resposta costuma vir por telefone, numa foto do relatório ou só na manhã seguinte.</p>

    <p>Os números já existem no sistema. O que falta é fazer com que cheguem até você sem que alguém precise lembrar de mandar.</p>

    <h2 id="rotina">O problema de depender da loja</h2>

    <p>Muitas decisões da padaria dependem de informação do mesmo dia: se as vendas caíram, se o desconto saiu do normal ou se tem conta vencendo amanhã. Quando o dado só está disponível dentro do sistema, ele só é visto quando alguém para e abre o relatório.</p>

    <p>O WhatsApp, por outro lado, já faz parte da rotina dos pequenos negócios.</p>

    <div class="numero">
      <b>+80%</b>
      <p>dos pequenos negócios de serviço já usam o WhatsApp para falar com clientes.<small>Fonte: Pesquisa Serviço 2025, <a href="https://agenciasebrae.com.br/cultura-empreendedora/whatsapp-e-o-principal-meio-de-comunicacao-para-80-dos-negocios-de-servico/" target="_blank" rel="noopener">Agência Sebrae de Notícias</a>, mais de 1.300 negócios pesquisados. O recorte é de serviços, sem dado específico de padarias.</small></p>
    </div>

    <p>Levar os números da loja para esse mesmo aplicativo reduz o esforço de acompanhar. O dono não precisa criar um hábito novo: a informação chega onde ele já está.</p>

    <h2 id="relatorios">O que você pode receber no celular</h2>

    <h3>O fechamento de caixa</h3>

    <p>O resumo traz venda bruta, cancelamentos, descontos, venda líquida, sangrias, formas de pagamento e valor médio de venda. Assim, dá para bater o olho e saber se aconteceu algo fora do normal.</p>

    <figure class="tela">
      <img src="assets/images/telas/whats-fechamento.jpg" alt="Mensagem de WhatsApp com resumo do fechamento de caixa enviada pelo Prosystem" loading="lazy">
      <figcaption>Resumo do fechamento de caixa no WhatsApp. Dados de exemplo.</figcaption>
    </figure>

    <h3>As contas a pagar</h3>

    <p>O aviso mostra o valor a pagar hoje, amanhã, nos próximos 5 dias e no mês, além do total em atraso. É uma forma simples de organizar o caixa antes da conta vencer.</p>

    <figure class="tela">
      <img src="assets/images/telas/whats-contas.jpg" alt="Mensagem de WhatsApp com resumo de contas a pagar enviada pelo Prosystem" loading="lazy">
      <figcaption>Contas a pagar por prazo. Dados de exemplo.</figcaption>
    </figure>

    <h3>Os descontos e as autorizações</h3>

    <p>Sempre que um usuário informa login e senha para entrar no sistema ou autorizar um processo, o registro pode gerar uma mensagem para o responsável configurado. Na prática, um desconto liberado deixa de passar despercebido.</p>

    <figure class="tela">
      <img src="assets/images/telas/whats-desconto.jpg" alt="Mensagem de WhatsApp informando que um usuário concedeu desconto em um produto" loading="lazy">
      <figcaption>Aviso de desconto concedido, com usuário, data e hora. Dados de exemplo.</figcaption>
    </figure>

    <p>A lista completa inclui ainda resumo de vendas, vendas por grupo, subgrupo e vendedor, comissões, metas, produtos a vencer, alterações de produtos, compras e inventário.</p>

{cta("Quer receber os números da sua padaria no celular?", "Fale com a ProSystem e veja quais relatórios fazem sentido para a sua loja e como ativá-los na versão Plus.", WHATS)}

    <h2 id="quem-recebe">Quem recebe o quê</h2>

    <p>Nem todo mundo precisa ver tudo. No gerenciador de avisos, cada contato tem a própria lista de relatórios e a própria frequência.</p>

{tela("whats-config", "Tela do Prosystem para escolher a frequência e os relatórios enviados a cada contato", "Frequência e relatórios são definidos para cada contato.")}

    <div class="tabela">
      <table>
        <caption>Um ponto de partida para organizar os envios</caption>
        <thead><tr><th>Quem</th><th>Relatórios sugeridos</th><th>Frequência</th></tr></thead>
        <tbody>
          <tr><td><strong>Dono</strong></td><td>Fechamento, resumo de vendas, contas a pagar, login</td><td>Diário e fechamento</td></tr>
          <tr><td><strong>Gerente</strong></td><td>Fechamento, vendas por vendedor, metas</td><td>Por fechamento</td></tr>
          <tr><td><strong>Comprador</strong></td><td>Compras, produtos a vencer, inventário</td><td>Diário</td></tr>
          <tr><td><strong>Equipe de vendas</strong></td><td>Metas e comissões individuais</td><td>Diário</td></tr>
        </tbody>
      </table>
    </div>

    <h2 id="como-ativar">O que é preciso para funcionar</h2>

    <ol class="passos">
      <li><div><b>Estar na versão Plus.</b> Os avisos por WhatsApp são uma funcionalidade dessa versão.</div></li>
      <li><div><b>Ter o WhatsApp instalado no servidor ou em outra máquina.</b> A recomendação é usar uma conta do WhatsApp Business exclusiva para esses envios, o que também ajuda na confidencialidade.</div></li>
      <li><div><b>Cadastrar os contatos.</b> Informe nome, número e o usuário de cada pessoa em Auxiliares &gt; WhatsApp.</div></li>
      <li><div><b>Programar o envio.</b> O agendador de tarefas do Windows define os intervalos em que as mensagens saem.</div></li>
    </ol>

    <div class="quadro">
      <span class="quadro__titulo">Na prática</span>
      <p>Comece com poucos relatórios. Fechamento e contas a pagar já resolvem boa parte das dúvidas do dia a dia. Se a mensagem virar ruído, ela deixa de ser lida.</p>
    </div>
""",
    "faq": [
        ("O Prosystem envia relatórios pelo WhatsApp?", "Sim. Na versão Plus, o sistema envia relatórios automáticos por WhatsApp aos usuários configurados, como fechamento de caixa, vendas, metas, contas a pagar, compras e inventário."),
        ("Com que frequência os relatórios são enviados?", "É possível configurar envio diário, por fechamento de caixa ou nas duas situações, conforme o agendamento definido."),
        ("Dá para saber pelo WhatsApp quando um desconto foi autorizado?", "O relatório de login registra quando um usuário informa suas credenciais para entrar no sistema ou autorizar um processo, e o responsável configurado recebe a mensagem correspondente."),
        ("Cada pessoa da equipe recebe os mesmos relatórios?", "Não necessariamente. Cada contato pode ter sua própria lista de relatórios e sua frequência, e comissões e metas podem ser enviadas de forma geral ou individual."),
    ],
    "fontes": [
        ("https://universidade.prosystemnet.com/base-conhecimento/admin-retaguarda/ferramentas-gerenciais/avisos-via-whatsapp-mais-agilidade-e-automacao-para-voce", "Avisos via WhatsApp: mais agilidade e automação", "Universidade Prosystem"),
        ("https://agenciasebrae.com.br/cultura-empreendedora/whatsapp-e-o-principal-meio-de-comunicacao-para-80-dos-negocios-de-servico/", "WhatsApp é o principal meio de comunicação para 80% dos negócios de serviço", "Agência Sebrae de Notícias"),
    ],
    "relacionados": [
        ("sangria-de-caixa-padaria-como-evitar-dinheiro-acumulado", "Padaria", "Quanto dinheiro tem na gaveta da sua padaria agora?"),
        ("gestao-multiplas-unidades-padaria-centralizar", "Padaria", "Gestão de múltiplas unidades de padaria"),
        ("erp-para-padaria-o-que-e-quando-contratar", "Padaria", "ERP para padaria: o que é e quando vale contratar"),
    ],
}
