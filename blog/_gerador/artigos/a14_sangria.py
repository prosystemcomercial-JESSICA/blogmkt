from base import cta, tela

WHATS = "Olá! Li o artigo sobre sangria de caixa no blog da ProSystem e quero esse controle na minha padaria."

ARTIGO = {
    "slug": "sangria-de-caixa-padaria-como-evitar-dinheiro-acumulado",
    "data_iso": "2026-10-30T09:00:00-03:00",
    "data_curta": "30 out. 2026",
    "data_longa": "30 de outubro de 2026",
    "titulo_tag": "Sangria de caixa na padaria: como não acumular dinheiro | ProSystem",
    "descricao": "Café da manhã cheio, gaveta lotada e sangria esquecida. Veja como definir limites, registrar cada retirada e evitar diferença no fechamento do caixa da padaria.",
    "og_titulo": "Quanto dinheiro tem na gaveta da sua padaria agora?",
    "og_desc": "Como definir limites de sangria, registrar cada retirada e reduzir a diferença no fechamento do caixa.",
    "og_linhas": ["Quanto dinheiro tem", "na gaveta da sua", "padaria agora?"],
    "og_chips": [("68,9%", "da população ainda usa dinheiro"), ("2 limites", "um avisa, outro trava")],
    "chamada": "Padaria · Caixa",
    "secao": "Padaria",
    "trilha": "Sangria de caixa",
    "h1": "Quanto dinheiro tem na gaveta da sua padaria agora?",
    "linha_fina": "Se a resposta exige abrir a gaveta e contar, a sangria da sua loja ainda depende da memória do operador. Em horário de pico, é exatamente ela que falha.",
    "minutos": 6,
    "keywords": "sangria de caixa padaria, o que é sangria de caixa, quebra de caixa, fechamento de caixa padaria, controle de caixa padaria, sistema para padaria",
    "whats": WHATS,
    "barra": "Quero esse controle",
    "cta_lateral": ("Sangria com regra", "Aviso, bloqueio no limite e registro de cada retirada no próprio caixa.", "Falar com a ProSystem"),
    "aviso": "Telas reais do Prosystem, com dados de exemplo. Os valores de R$ 600 e R$ 900 são exemplos e devem ser ajustados à realidade de cada loja.",
    "resumo": [
        "Sangria é a <strong>retirada de dinheiro excedente</strong> do caixa para um lugar mais seguro.",
        "O dinheiro segue presente no balcão: em 2024, <strong>68,9% da população</strong> ainda o usava como meio de pagamento, segundo o Banco Central.",
        "Dois limites resolvem o esquecimento: um valor em que o caixa <strong>avisa</strong> e outro em que ele <strong>bloqueia</strong> a baixa de vendas.",
        "Toda retirada registrada facilita a conferência e ajuda a <strong>explicar diferenças</strong> no fechamento.",
    ],
    "toc": [
        ("por-que", "Por que a sangria é esquecida"),
        ("limites", "Os dois limites"),
        ("registro", "Registrar cada retirada"),
        ("regras", "Como definir as regras"),
    ],
    "corpo": f"""
    <p>Sete da manhã. Fila no caixa, café saindo, pão quente, troco para todo lado. Pagamento em dinheiro entra e fica na gaveta. Quando o movimento diminui, o operador já nem lembra quanto acumulou, e a retirada fica para depois.</p>

    <p>Na maior parte dos dias, nada acontece. O problema é justamente esse: o risco fica invisível até o dia em que deixa de ser.</p>

    <h2 id="por-que">Por que a sangria é esquecida</h2>

    <p>Sangria de caixa é a retirada de uma quantia excedente da gaveta para um local mais seguro. Ela reduz a exposição do dinheiro e mantém a movimentação do caixa organizada para o fechamento.</p>

    <p>O Pix mudou a rotina, mas o dinheiro não saiu do balcão.</p>

    <div class="numero">
      <b>68,9%</b>
      <p>da população ainda usava dinheiro em espécie como meio de pagamento em 2024, e 22% o apontavam como o meio mais frequente.<small>Fonte: pesquisa "O brasileiro e sua relação com o dinheiro", do Banco Central, noticiada pelo <a href="https://tecnoblog.net/noticias/pix-passa-dinheiro-e-cartao-como-meio-de-pagamento-mais-usado-no-brasil/" target="_blank" rel="noopener">Tecnoblog</a>. O dado é da população em geral, sem recorte de padarias.</small></p>
    </div>

    <p>Em uma loja de muitas vendas de valor baixo, como a padaria, o dinheiro se acumula aos poucos e quase ninguém percebe. Sem uma regra, a retirada depende de alguém lembrar no meio da correria.</p>

    <h2 id="limites">Os dois limites: um avisa, outro trava</h2>

    <p>O Caixa Frente de Loja do Prosystem permite configurar dois valores nas preferências. O exemplo abaixo usa R$ 600 e R$ 900, mas cada loja define os seus.</p>

    <h3>Primeiro limite: o caixa avisa</h3>

    <p>Quando as vendas em dinheiro chegam ao valor inicial, o sistema mostra um alerta para o operador. A venda continua normalmente, mas ele já sabe que precisa fazer a sangria.</p>

{tela("sangria-aviso", "Mensagem do Prosystem pedindo para efetuar a sangria programada e evitar o bloqueio das operações", "Primeiro aviso: a venda segue, mas o operador é alertado.")}

    <h3>Segundo limite: o caixa bloqueia</h3>

    <p>Se a sangria não for feita e o valor final for alcançado, o caixa é bloqueado ao finalizar a venda no caixa central. Todas as modalidades de pagamento ficam impedidas de baixa até que a sangria seja realizada.</p>

{tela("sangria-bloqueio", "Mensagem do Prosystem informando que o caixa está bloqueado até a sangria programada", "No limite final, a baixa de vendas volta somente depois da sangria.")}

    <div class="quadro quadro--alerta">
      <span class="quadro__titulo">Atenção ao configurar</span>
      <p>Como o bloqueio interrompe a baixa de vendas, deixe uma folga entre os dois valores e garanta que sempre haja alguém autorizado a fazer a sangria nos horários de pico. Assim, o controle não vira fila.</p>
    </div>

{cta("Quer esse controle no caixa da sua padaria?", "Fale com a ProSystem e veja como configurar os limites e registrar as retiradas no sistema que também cuida do fechamento.", WHATS)}

    <h2 id="registro">Registrar cada retirada</h2>

    <p>Fazer a sangria é só metade do processo. A outra metade é deixar registrado quanto saiu, para onde foi e por quê. A mesma tela também é usada no sentido contrário, para o suprimento, quando entra dinheiro para troco.</p>

{tela("sangria-registro", "Tela de sangria do Prosystem com valor, histórico, conta financeira e centro de custo", "Valor, histórico, conta financeira e centro de custo ficam registrados. Dados de exemplo.")}

    <p>Esses lançamentos entram na conferência do caixa. Quando o valor contado não bate com o esperado, a diferença é chamada de quebra de caixa. Com as retiradas registradas, fica mais fácil separar um esquecimento de lançamento de um problema que precisa ser investigado.</p>

    <h2 id="regras">Como definir as regras na sua padaria</h2>

    <ol class="passos">
      <li><div><b>Levante o movimento em dinheiro por turno.</b> Olhe alguns dias de fechamento e veja quanto entra em espécie nos horários de pico.</div></li>
      <li><div><b>Defina o limite de aviso.</b> Escolha um valor que a loja considere seguro manter no caixa e que não dispare o alerta o tempo todo.</div></li>
      <li><div><b>Defina o limite de bloqueio.</b> Ele precisa dar tempo de reação depois do aviso, sem permitir que o dinheiro se acumule demais.</div></li>
      <li><div><b>Escolha quem faz a sangria e para onde vai o dinheiro.</b> Responsável e destino claros evitam improviso.</div></li>
      <li><div><b>Confira no fechamento.</b> Compare sangrias, suprimentos e valor contado a cada troca de turno.</div></li>
    </ol>

    <p>Para o restante da rotina, veja também como <a href="gestao-financeira-padaria-custo-produto.html">calcular o custo real de cada produto</a>.</p>
""",
    "faq": [
        ("O que é sangria de caixa?", "É a retirada de uma quantia excedente de dinheiro do caixa para um local mais seguro, registrada para que o valor seja considerado na conferência e no fechamento."),
        ("Qual a diferença entre sangria e suprimento?", "A sangria retira dinheiro do caixa. O suprimento coloca dinheiro no caixa, normalmente para formar troco."),
        ("O que é quebra de caixa?", "É a diferença entre o valor esperado e o valor contado no caixa. Pode ser positiva ou negativa, e o registro das movimentações ajuda a identificar a origem."),
        ("Qual é o valor ideal para fazer sangria na padaria?", "Não existe um valor único. Ele depende do movimento em dinheiro, do horário e da política de segurança da loja. Os limites devem ser definidos com base nos fechamentos de cada turno."),
        ("O sistema pode impedir vendas enquanto a sangria não é feita?", "Sim. No Prosystem, o caixa pode ser configurado para avisar em um valor e bloquear a baixa de vendas em outro, até que a sangria seja realizada."),
    ],
    "fontes": [
        ("https://universidade.prosystemnet.com/base-conhecimento/caixa-frente-de-loja/funcoes-basicas-do-caixa/alerta-de-sangria-obrigatoria-nao-deixe-dinheiro-acumulado-no-caixa", "Alerta de sangria obrigatória", "Universidade Prosystem"),
        ("https://universidade.prosystemnet.com/base-conhecimento/caixa-frente-de-loja/funcoes-basicas-do-caixa/sangrias-suprimentos-de-caixa", "Sangrias e suprimentos de caixa", "Universidade Prosystem"),
        ("https://tecnoblog.net/noticias/pix-passa-dinheiro-e-cartao-como-meio-de-pagamento-mais-usado-no-brasil/", "Pix passa dinheiro e cartão como meio de pagamento mais usado no Brasil", "Tecnoblog, sobre pesquisa do Banco Central"),
    ],
    "relacionados": [
        ("relatorios-whatsapp-padaria-fechamento-caixa-automatico", "Padaria", "O caixa fechou. O resumo chega no seu WhatsApp"),
        ("pdv-para-padaria-o-que-e-por-que-precisa", "Padaria", "PDV para padaria: o que é e por que precisa"),
        ("gestao-financeira-padaria-custo-produto", "Padaria", "Como calcular o custo real de cada produto"),
    ],
}
