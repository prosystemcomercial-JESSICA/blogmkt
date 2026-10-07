from base import cta, wa, ICON_WHATS

WHATS = "Olá! Li o artigo sobre o SNCR no blog da ProSystem e quero falar sobre controlados e SNGPC na minha farmácia."

ARTIGO = {
    "slug": "sncr-receita-eletronica-controlados-farmacia-2026",
    "titulo_tag": "SNCR: o que muda na farmácia com a receita eletrônica | ProSystem",
    "descricao": "Desde 30/09 a farmácia pode consultar e registrar receitas eletrônicas de controlados no SNCR. Veja prazos, o que muda no balcão e como liberar os acessos no Cadastro Anvisa.",
    "og_titulo": "SNCR: o que muda na farmácia com a receita eletrônica de controlados",
    "og_desc": "Papel continua valendo, mas a partir de 30/10 receitas eletrônicas de controle especial precisam estar no SNCR. Veja o passo a passo do balcão.",
    "og_linhas": ["SNCR: o que muda na sua", "farmácia com a receita", "eletrônica de controlados"],
    "og_chips": [("30/09", "início da nova etapa"), ("30/10", "fim da transição")],
    "chamada": "Farmácia · Regulação",
    "secao": "Farmácia",
    "trilha": "SNCR e receita eletrônica",
    "h1": "SNCR: o que muda na sua farmácia com a receita eletrônica de controlados",
    "linha_fina": "Desde 30 de setembro, a farmácia pode consultar e registrar no sistema da Anvisa as receitas de controlados emitidas eletronicamente. O papel continua valendo, mas os acessos da equipe precisam estar prontos.",
    "minutos": 8,
    "keywords": "SNCR, Sistema Nacional de Controle de Receituários, receita eletrônica controlados, notificação de receita eletrônica, receita de controle especial eletrônica, Cadastro Anvisa, SNCR-Farmácia, SNGPC",
    "whats": WHATS,
    "barra": "Tirar dúvida no WhatsApp",
    "cta_lateral": ("Controlados e SNGPC sem dor de cabeça", "PDV e escrituração do SNGPC no mesmo sistema, com suporte 24 horas.", "Falar com a ProSystem"),
    "resumo": [
        "Desde <strong>30 de setembro</strong>, o SNCR permite consultar e registrar receitas eletrônicas de controlados, inclusive as notificações amarela (A) e azul (B).",
        "<strong>Receita em papel continua válida.</strong> A emissão eletrônica é uma opção do prescritor, não uma obrigação.",
        "A partir de <strong>30 de outubro</strong>, receitas de controle especial e de retenção emitidas eletronicamente precisam vir com numeração do SNCR.",
        "O responsável legal precisa liberar os perfis da equipe no Cadastro Anvisa. E o <strong>SNCR não substitui o SNGPC</strong>.",
    ],
    "toc": [
        ("o-que-e", "O que é o SNCR"),
        ("datas", "As datas"),
        ("receitas", "Quais receitas entram"),
        ("balcao", "Como fica o balcão"),
        ("sngpc", "SNCR e SNGPC"),
        ("acessos", "Liberar os acessos"),
    ],
    "corpo": f"""
    <p>Quem trabalha no balcão de uma drogaria já está acostumado com o ritual da receita controlada: conferir a notificação, checar a numeração, reter a via e lançar tudo no SNGPC. A partir desta temporada, uma parte dessas receitas vai chegar pelo celular do cliente.</p>

    <p>A Anvisa abriu em 30 de setembro uma nova etapa do Sistema Nacional de Controle de Receituários, o SNCR. A mudança é gradual e não torna nada obrigatório de imediato para quem prescreve. Para a farmácia, porém, ela cria uma tarefa nova no balcão e exige que os acessos da equipe estejam liberados.</p>

    <h2 id="o-que-e">O que é o SNCR</h2>

    <p><strong>O SNCR é o sistema da Anvisa que controla a numeração e o uso das receitas de medicamentos sujeitos a controle especial.</strong> Com ele, a receita emitida eletronicamente recebe uma numeração única. A farmácia consulta essa numeração e registra que a receita foi usada, o que impede que o mesmo documento seja aviado duas vezes.</p>

    <p>O sistema foi criado pela RDC nº 1.000/2025. A etapa que começou agora estava prevista para 1º de junho e foi adiada para 30 de setembro por ajustes técnicos, segundo o <a href="https://ictq.com.br/varejo-farmaceutico/5197-urgente-anvisa-prorroga-prazo-do-sncr-e-adia-implementacao-de-receituarios-eletronicos-controlados" target="_blank" rel="noopener">ICTQ</a>.</p>

    <h2 id="datas">As datas que importam</h2>

    <div class="agenda" role="list">
      <div role="listitem"><b>30 set.</b><span>Começa a nova etapa: consulta e registro de receitas eletrônicas no SNCR</span></div>
      <div role="listitem"><b>Até 29 out.</b><span>Transição: valem papel, eletrônica sem SNCR e eletrônica com SNCR</span><span class="contagem" data-prazo="2026-10-29T23:59:59-03:00">Prazo final</span></div>
      <div role="listitem"><b>30 out.</b><span>Receitas de controle especial e de retenção emitidas eletronicamente precisam estar integradas ao SNCR</span></div>
      <div role="listitem"><b>Sem prazo</b><span>Receita em papel continua válida, conforme as regras de cada tipo</span></div>
    </div>

    <p>Na prática, até 29 de outubro a farmácia pode receber três tipos de documento para receitas brancas de controle especial e de retenção. A partir de 30 de outubro, se a receita for eletrônica, ela precisa ter numeração do SNCR. Se for de papel, segue como sempre.</p>

    <h2 id="receitas">Quais receitas entram no SNCR</h2>

    <p>A nova etapa vale para as notificações de receita e para as receitas brancas de controle, segundo a <a href="https://agenciabrasil.ebc.com.br/saude/noticia/2026-09/mudancas-na-emissao-e-no-controle-de-receitas-medicas-entram-em-vigor" target="_blank" rel="noopener">Agência Brasil</a>.</p>

    <div class="tabela">
      <table>
        <caption>Receitas contempladas a partir de 30/09/2026</caption>
        <thead><tr><th>Documento</th><th>Exemplos</th><th>Papel ainda vale?</th></tr></thead>
        <tbody>
          <tr><td><strong>Notificação de Receita A</strong> (amarela)</td><td>Entorpecentes</td><td>Sim</td></tr>
          <tr><td><strong>Notificação de Receita B e B2</strong> (azul)</td><td>Psicotrópicos e anorexígenos</td><td>Sim</td></tr>
          <tr><td><strong>Notificação de retinoides</strong> de uso sistêmico</td><td>Isotretinoína oral</td><td>Sim</td></tr>
          <tr><td><strong>Notificação de talidomida</strong></td><td>Talidomida</td><td>Sim</td></tr>
          <tr><td><strong>Receita de Controle Especial</strong></td><td>Medicamentos das listas de controle especial</td><td>Sim</td></tr>
          <tr><td><strong>Receita sujeita à retenção</strong></td><td>Antimicrobianos e agonistas de GLP-1</td><td>Sim</td></tr>
        </tbody>
      </table>
    </div>

    <p>Para as notificações A, B e B2, a numeração continua sendo solicitada à Vigilância Sanitária local, com sequências diferentes para o papel e para o formato eletrônico.</p>

    <div class="numero">
      <b>GLP-1</b>
      <p>Os agonistas de GLP-1, usados no tratamento de diabetes e obesidade, estão entre os medicamentos de receita retida que já podem circular com receita eletrônica integrada ao SNCR.<small>Fonte: <a href="https://agenciabrasil.ebc.com.br/saude/noticia/2026-09/mudancas-na-emissao-e-no-controle-de-receitas-medicas-entram-em-vigor" target="_blank" rel="noopener">Agência Brasil</a>, 30/09/2026.</small></p>
    </div>

    <h2 id="balcao">Como fica o atendimento no balcão</h2>

    <p>Quando o cliente apresentar uma receita eletrônica com numeração do SNCR, o fluxo muda em dois pontos: a consulta antes de dispensar e o registro depois. O resto da rotina, incluindo a retenção quando exigida e o SNGPC, continua.</p>

    <ol class="passos">
      <li><div><b>Identifique o documento.</b> Veja se é papel ou eletrônico e, se for eletrônico, se traz numeração do SNCR.</div></li>
      <li><div><b>Consulte no SNCR.</b> As notificações eletrônicas trazem QR Code, que facilita a consulta. Confira a numeração e os dados do prescritor.</div></li>
      <li><div><b>Confira assinatura, data e validade.</b> A assinatura eletrônica pode ser validada no verificador oficial do ITI. A validade segue as regras de cada tipo de receita.</div></li>
      <li><div><b>Dispense o medicamento.</b> Do jeito que a farmácia já faz hoje.</div></li>
      <li><div><b>Registre a utilização no SNCR.</b> É esse registro que "baixa" a receita e impede que ela seja usada de novo em outra farmácia.</div></li>
      <li><div><b>Escriture no SNGPC.</b> A movimentação do medicamento segue sendo lançada normalmente.</div></li>
    </ol>

    <div class="quadro">
      <span class="quadro__titulo">Na prática</span>
      <p>Em novembro, um cliente chega com uma receita de antibiótico no celular. Se ela foi emitida eletronicamente depois de 30 de outubro, precisa ter numeração do SNCR. O atendente abre a receita, consulta a numeração, dispensa e registra a utilização no sistema.</p>
      <p>Se o mesmo cliente tivesse uma receita de papel, nada mudaria: retenção da via e lançamento no SNGPC, como sempre.</p>
    </div>

    <h3>O que explicar ao cliente</h3>

    <p>Nas primeiras semanas, o cliente também vai ter dúvidas. Vale combinar com a equipe respostas curtas e iguais para todos os turnos.</p>

    <div class="tabela">
      <table>
        <caption>Perguntas que devem aparecer no balcão</caption>
        <thead><tr><th>O cliente pergunta</th><th>A equipe responde</th></tr></thead>
        <tbody>
          <tr><td>"Minha receita de papel ainda vale?"</td><td>Vale. A receita em papel continua aceita, do mesmo jeito.</td></tr>
          <tr><td>"Posso mostrar a receita no celular?"</td><td>Pode, se for uma receita eletrônica válida. A farmácia consulta e registra no sistema da Anvisa.</td></tr>
          <tr><td>"Por que vocês precisam registrar?"</td><td>Para que a receita não seja usada de novo em outra farmácia. É uma regra da Anvisa.</td></tr>
          <tr><td>"Comprei metade aqui. Posso comprar o resto em outra farmácia?"</td><td>Depende do tipo de receita e das regras de dispensação. Na dúvida, o farmacêutico orienta.</td></tr>
        </tbody>
      </table>
    </div>

    <h3>O que pode travar o atendimento</h3>

    <ul>
      <li><strong>Atendente sem perfil no SNCR.</strong> Sem o perfil liberado no Cadastro Anvisa, não há como consultar nem registrar.</li>
      <li><strong>Receita eletrônica sem numeração do SNCR</strong> depois de 30 de outubro, no caso das receitas brancas de controle especial e de retenção.</li>
      <li><strong>Assinatura eletrônica que não valida.</strong> Nesse caso, a receita não deve ser aviada até que o prescritor emita outra.</li>
      <li><strong>Internet instável no balcão.</strong> A consulta depende de conexão. Ter um plano para quedas evita fila.</li>
    </ul>

    <h2 id="sngpc">SNCR não substitui o SNGPC</h2>

    <p>Essa foi uma das dúvidas mais frequentes nas últimas semanas. Os dois sistemas convivem e controlam coisas diferentes.</p>

    <div class="lado">
      <div>
        <h3>SNCR</h3>
        <ul>
          <li>Controla a <strong>receita</strong></li>
          <li>Numeração e uso do documento</li>
          <li>Consulta antes de dispensar e registro depois</li>
          <li>Não registra o uso de receitas de papel</li>
        </ul>
      </div>
      <div>
        <h3>SNGPC</h3>
        <ul>
          <li>Controla o <strong>medicamento</strong></li>
          <li>Entradas, saídas e estoque de controlados</li>
          <li>Escrituração continua obrigatória</li>
          <li>Vale para papel e eletrônico</li>
        </ul>
      </div>
    </div>

{cta("Seu balcão está pronto para os controlados?", "A escrituração do SNGPC continua igual e precisa estar em dia. Fale com a ProSystem e veja como PDV, estoque e SNGPC trabalham juntos no mesmo sistema.", WHATS)}

    <h2 id="acessos">Como liberar os acessos da equipe</h2>

    <p>Para consultar e registrar receitas, cada pessoa da equipe precisa de perfil no SNCR. Quem libera é o responsável legal da farmácia, pelo Cadastro Anvisa. Use a lista abaixo para conferir o que já foi feito.</p>

    <div class="checagem" data-checklist>
      <div class="checagem__topo"><b>Checklist do responsável legal</b><span class="checagem__conta">0 de 7 em dia</span></div>
      <label><input type="checkbox"><span>Entrar no Cadastro Anvisa com a conta gov.br do responsável legal</span></label>
      <label><input type="checkbox"><span>Conferir se os dados do estabelecimento estão corretos</span></label>
      <label><input type="checkbox"><span>Localizar ou cadastrar cada colaborador pelo CPF</span></label>
      <label><input type="checkbox"><span>Garantir que todos tenham conta gov.br ativa</span></label>
      <label><input type="checkbox"><span>Atribuir os perfis SNCR e SNCR-Farmácia a quem atende no balcão</span></label>
      <label><input type="checkbox"><span>Fazer uma consulta de teste com a equipe</span></label>
      <label><input type="checkbox"><span>Combinar quem registra a utilização em cada turno</span></label>
    </div>

    <div class="quadro quadro--alerta">
      <span class="quadro__titulo">Não deixe para a última hora</span>
      <p>Conta gov.br sem o nível de acesso exigido e colaborador sem perfil costumam travar o atendimento. Resolver isso antes de 30 de outubro evita fila no balcão quando as receitas eletrônicas começarem a chegar com mais frequência.</p>
    </div>

    <p>A Anvisa publicou manuais e uma cartilha prática para farmácias no portal do SNCR, organizados por perfil de usuário, segundo o <a href="https://site.cff.org.br/noticia/Noticias-gerais/23/09/2026/sncr-anvisa-publica-novos-manuais-e-amplia-orientacoes-para-os-diferentes-publicos" target="_blank" rel="noopener">Conselho Federal de Farmácia</a>. Vale baixar e deixar à mão no balcão.</p>
""",
    "faq": [
        ("O que é o SNCR?", "É o Sistema Nacional de Controle de Receituários da Anvisa. Ele controla a numeração e o uso das receitas de medicamentos sujeitos a controle especial. Desde 30 de setembro de 2026, farmácias podem consultar e registrar no sistema as receitas emitidas eletronicamente."),
        ("A receita de papel deixou de valer?", "Não. As receitas em papel continuam válidas e seguem as regras de cada tipo. A emissão eletrônica é uma possibilidade a mais para o prescritor, não uma obrigação."),
        ("O que muda em 30 de outubro de 2026?", "Termina a transição. A partir dessa data, receitas de controle especial e receitas sujeitas à retenção, como as de antimicrobianos e agonistas de GLP-1, quando emitidas eletronicamente, precisam estar integradas ao SNCR."),
        ("O SNCR substitui o SNGPC?", "Não. O SNCR controla a receita, enquanto o SNGPC controla a movimentação do medicamento. A escrituração no SNGPC continua obrigatória."),
        ("Quem libera o acesso da equipe ao SNCR?", "O responsável legal da farmácia, pelo Cadastro Anvisa com conta gov.br. Ele cadastra os colaboradores pelo CPF e atribui os perfis SNCR e SNCR-Farmácia."),
        ("Receita azul e amarela já podem ser eletrônicas?", "Sim. Desde 30 de setembro de 2026 as notificações de receita A, B e B2, além das de retinoides sistêmicos e talidomida, podem ser emitidas eletronicamente. A numeração continua sendo pedida à Vigilância Sanitária local."),
    ],
    "fontes": [
        ("https://agenciabrasil.ebc.com.br/saude/noticia/2026-09/mudancas-na-emissao-e-no-controle-de-receitas-medicas-entram-em-vigor", "Mudanças na emissão e no controle de receitas médicas entram em vigor", "Agência Brasil, 30/09/2026"),
        ("https://site.cff.org.br/noticia/Noticias-gerais/23/09/2026/sncr-anvisa-publica-novos-manuais-e-amplia-orientacoes-para-os-diferentes-publicos", "SNCR: Anvisa publica novos manuais e amplia orientações", "Conselho Federal de Farmácia, 23/09/2026"),
        ("https://ictq.com.br/varejo-farmaceutico/5197-urgente-anvisa-prorroga-prazo-do-sncr-e-adia-implementacao-de-receituarios-eletronicos-controlados", "Anvisa prorroga prazo do SNCR", "ICTQ, 27/05/2026"),
        ("https://radiogov.ebc.com.br/programas/e-noticia/sncr-comeca-nova-etapa-com-emissao-eletronica-de-receitas", "SNCR começa nova etapa com emissão eletrônica de receitas", "Rádio Gov"),
    ],
    "aviso": "Confirme procedimentos com o farmacêutico responsável e com a Vigilância Sanitária local.",
    "relacionados": [
        ("sngpc-farmacia-como-evitar-multa-2026", "Farmácia", "SNGPC: como sua farmácia evita multa em 2026"),
        ("controle-estoque-farmacia-evitar-perdas-vencimento", "Farmácia", "Controle de estoque na farmácia: como evitar perdas por vencimento"),
        ("simples-nacional-2027-prazo-opcao-ibs-cbs-farmacia-padaria", "Gestão", "Simples Nacional 2027: o que decidir até 15 e 30 de outubro"),
    ],
}
