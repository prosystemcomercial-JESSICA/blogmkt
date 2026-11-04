from base import cta, tela

WHATS = "Olá! Li o artigo sobre farmácia dentro do supermercado no blog da ProSystem e quero conversar sobre o sistema da minha farmácia."

LEI = "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2026/lei/L15357.htm"

ARTIGO = {
    "slug": "farmacia-dentro-do-supermercado-lei-15357",
    "data_iso": "2026-11-04T09:00:00-03:00",
    "data_curta": "4 nov. 2026",
    "data_longa": "4 de novembro de 2026",
    "titulo_tag": "Farmácia no supermercado: o que muda com a Lei 15.357 | ProSystem",
    "descricao": "A Lei 15.357/2026 liberou farmácia dentro do supermercado. Veja as regras, o que o sistema precisa ter e como a farmácia independente se prepara para 2027.",
    "og_titulo": "A farmácia chegou ao supermercado. E agora, quem tem farmácia faz o quê?",
    "og_desc": "As regras da Lei 15.357/2026, o que o sistema da farmácia precisa ter e como a farmácia independente se prepara para 2027.",
    "og_linhas": ["A farmácia chegou ao", "supermercado. E a sua", "farmácia, faz o quê?"],
    "og_chips": [("Lei 15.357", "em vigor desde 23/03/2026"), ("25 lojas", "meta de uma rede até dezembro")],
    "chamada": "Farmácia · Mercado",
    "secao": "Farmácia",
    "trilha": "Farmácia dentro do supermercado",
    "h1": "A farmácia chegou ao supermercado. O que isso muda para quem tem farmácia",
    "linha_fina": "Desde março, a lei permite farmácia dentro da área de vendas do supermercado. Para quem vai abrir, o desafio é operar como farmácia de verdade. Para a farmácia do bairro, é manter o cliente que agora pode comprar remédio junto com o arroz.",
    "minutos": 9,
    "keywords": "farmácia dentro do supermercado, lei 15.357, farmácia em supermercado, farmácia independente 2027, sistema para farmácia, fidelização farmácia, frente de loja farmácia",
    "whats": WHATS,
    "barra": "Falar sobre minha farmácia",
    "cta_lateral": ("Farmácia preparada para 2027", "Estoque por lote e validade, controlados, uso contínuo e fidelidade no mesmo sistema.", "Falar com a ProSystem"),
    "aviso": "Tela real do Prosystem, com dados fictícios e nome de produto ocultado. Este artigo não substitui a orientação do responsável técnico, da vigilância sanitária e da contabilidade.",
    "resumo": [
        "A <strong>Lei 15.357/2026</strong>, publicada em 23 de março, permite farmácia ou drogaria dentro da área de vendas do supermercado.",
        "O espaço precisa ser <strong>delimitado, separado e exclusivo</strong>, com farmacêutico durante todo o horário e sem remédio em gôndola aberta.",
        "O supermercado pode operar a farmácia <strong>com o mesmo CNPJ</strong> ou por <strong>contrato com uma farmácia licenciada</strong>.",
        "Para a farmácia independente, a resposta está no que o mercado tem dificuldade de copiar: <strong>conhecer o cliente</strong>, lembrar da reposição e atender bem no balcão.",
    ],
    "toc": [
        ("lei", "O que a Lei 15.357 permite"),
        ("mercado", "Quem já está abrindo"),
        ("abrir", "Vai abrir farmácia no mercado?"),
        ("independente", "E a farmácia do bairro?"),
        ("parceria", "A parceria também é caminho"),
        ("checklist", "Checklist para 2027"),
    ],
    "corpo": f"""
    <p>O cliente entra no supermercado para fazer a compra do mês. Entre o hortifrúti e o caixa, passa por uma farmácia com farmacêutico, balcão e remédio de receita. Ele aproveita, compra o remédio de uso contínuo ali mesmo e vai embora. Até pouco tempo, essa cena não era permitida no Brasil. Agora é.</p>

    <p>Se você tem farmácia, esse é um assunto para 2027. E se você tem supermercado e pensa em abrir uma farmácia, também.</p>

    <h2 id="lei">O que a Lei 15.357 permite</h2>

    <p>A <a href="{LEI}" target="_blank" rel="noopener">Lei nº 15.357, de 20 de março de 2026</a>, publicada no Diário Oficial em 23 de março, mudou a Lei 5.991/1973, que trata do comércio de medicamentos. Ela autoriza farmácias e drogarias dentro da área de vendas dos supermercados, com regras claras:</p>

    <ol class="passos">
      <li><div><b>Espaço próprio.</b> O local precisa ser físico, delimitado, separado e exclusivo para a atividade farmacêutica.</div></li>
      <li><div><b>Duas formas de operar.</b> O supermercado pode tocar a farmácia diretamente, com a mesma identidade fiscal, ou contratar uma farmácia ou drogaria já licenciada.</div></li>
      <li><div><b>Farmacêutico o tempo todo.</b> É obrigatória a presença de farmacêutico habilitado durante todo o horário de funcionamento.</div></li>
      <li><div><b>Controlados com cuidado extra.</b> O medicamento sujeito a controle especial só é entregue depois de pago. A outra opção é levá-lo do balcão até o caixa em embalagem lacrada e inviolável.</div></li>
      <li><div><b>Nada de remédio no corredor.</b> Fica proibido oferecer medicamento em área aberta ou sem separação completa, como bancadas, estandes e gôndolas externas.</div></li>
      <li><div><b>Venda digital liberada.</b> Farmácias licenciadas podem usar canais digitais e plataformas de comércio eletrônico para logística e entrega, cumprindo a regulamentação sanitária.</div></li>
    </ol>

    <div class="quadro">
      <span class="quadro__titulo">Em uma frase</span>
      <p>O supermercado pode ter farmácia, mas ela precisa funcionar como farmácia: espaço próprio, farmacêutico presente e as mesmas regras sanitárias de qualquer drogaria.</p>
    </div>

    <h2 id="mercado">Quem já está abrindo</h2>

    <p>As grandes redes se mexeram rápido. Em julho, o Assaí inaugurou a primeira farmácia dentro de uma loja em São Paulo, com cerca de 140 m² e perto de 10 mil itens, segundo a <a href="https://exame.com/invest/mercados/fomos-a-farmacia-do-assai-supermercado-e-drogaria-em-uma-unica-loja/" target="_blank" rel="noopener">Exame</a>. Os remédios de receita ficam atrás do balcão, e a loja também oferece serviços como aferição de pressão e aplicação de injetáveis. A meta é chegar a 25 farmácias no estado até o fim de 2026.</p>

    <p>A <a href="https://ictq.com.br/varejo-farmaceutico/5226-supermercados-aceleram-entrada-no-mercado-farmaceutico-apos-sancao-de-nova-lei" target="_blank" rel="noopener">ICTQ</a> registrou outras redes estudando o modelo e ouviu a Abras, a associação dos supermercados. O presidente da entidade espera uma implantação gradual e não descarta aquisições ou parcerias com farmácias independentes. Isso é uma expectativa do setor, não um fato consumado, mas mostra para onde o mercado olha.</p>

    <p>Para a farmácia de bairro, a conclusão prática é simples: o cliente vai ter mais um lugar para comprar remédio, e esse lugar ele já visita toda semana.</p>

    <h2 id="abrir">Vai abrir farmácia dentro do mercado? O sistema precisa acompanhar</h2>

    <p>Quem vem do varejo de alimentos costuma subestimar a parte operacional da farmácia. A lei exige espaço separado, e a gestão também precisa ser separada. Antes de inaugurar, confira estes pontos com sua equipe e seu fornecedor de sistema:</p>

    <h3>1. Estoque por lote e validade</h3>

    <p>No mercado, o controle de validade muitas vezes é feito por amostragem na gôndola. Na farmácia, é preciso saber qual lote foi vendido e para quem, porque o recolhimento de um lote pode chegar a qualquer momento. No Prosystem, o lote fica registrado em cada venda e a tela de venda destaca os produtos pré-vencidos.</p>

    <h3>2. Controlados e escrituração</h3>

    <p>Medicamento controlado exige escrituração no SNGPC, além da conferência de receitas. A lei ainda pede que ele só seja entregue depois de pago, ou que siga lacrado do balcão até o caixa. Defina antes de abrir como esse fluxo vai funcionar na sua loja: onde fica a pré-venda, quem recebe o pagamento e como a escrituração acompanha cada venda.</p>

    <h3>3. Frente de loja que separa as vendas</h3>

    <p>Se a farmácia opera com o mesmo CNPJ do supermercado, ainda assim você vai querer ver o faturamento, a margem e o estoque dela separados do resto da loja. Se a operação é por contrato com outra farmácia, a separação é total: outro CNPJ, outra nota, outro sistema. Combine isso com a contabilidade antes de escolher o modelo.</p>

    <h3>4. Venda pelo site e por aplicativo</h3>

    <p>A lei deixa claro que a farmácia licenciada pode vender por canais digitais. O Prosystem integra com lojas virtuais e com aplicativos de delivery de farmácia, mantendo o estoque do site alinhado ao da loja.</p>

    <div class="quadro quadro--alerta">
      <span class="quadro__titulo">Antes de qualquer obra</span>
      <p>Converse com o responsável técnico, com a vigilância sanitária do seu município e com a contabilidade. A licença, a escala de farmacêuticos e o modelo fiscal definem o resto do projeto.</p>
    </div>

{cta("Vai abrir uma farmácia ou já tem uma?", "Fale com a ProSystem e veja como lote, validade, controlados e frente de loja ficam organizados no mesmo sistema.", WHATS)}

    <h2 id="independente">E a farmácia do bairro? Comece pelo cliente que já é seu</h2>

    <p>O supermercado ganha em fluxo de pessoas e em compra grande. A farmácia independente ganha em proximidade, conhecimento do cliente e atendimento. O problema é que, sem sistema, essa vantagem fica só na memória do balconista. Veja onde ela vira rotina.</p>

    <h3>Lembrar da reposição antes do concorrente</h3>

    <p>O cliente de uso contínuo é o mais exposto. Se o remédio dele acaba no dia da compra do mês, ele resolve no mercado. No Prosystem, a posologia informada na venda vira uma data de próxima compra. Se o cliente passar na farmácia nos 9 dias anteriores ao fim da medicação, o balcão recebe o aviso e oferece a reposição ali mesmo.</p>

{tela("uso-continuo-alerta", "Alerta do Prosystem informando que a medicação do cliente está próxima de acabar", "O aviso de uso contínuo aparece no balcão quando o cliente volta à farmácia.")}

    <p>O mesmo controle gera a lista de quem deve comprar nos próximos dias. Como dado de medicamento é dado de saúde, o contato ativo precisa de autorização registrada e cuidado com a LGPD. Explicamos o passo a passo no artigo sobre <a href="cliente-uso-continuo-farmacia-recompra-pos-venda.html">cliente de uso contínuo</a>.</p>

    <h3>Dar um motivo para o cliente voltar</h3>

    <p>Desconto para todo mundo não cria vínculo. Um cartão fidelidade com política por grupo de clientes, ou um programa de pontos e cashback integrado ao sistema, faz o cliente lembrar de você na hora de comprar. O mercado também tem programa de fidelidade, então a diferença está em premiar quem compra remédio e cuidado com você todo mês.</p>

    <h3>Não perder a venda do item em falta</h3>

    <p>Quando o cliente pede um produto que acabou, ele pode ir buscar no mercado da esquina. Com o registro de encomendas no caixa, o pedido entra na compra e o sistema avisa quando o produto chega. E o indicador de perda de vendas mostra quais itens mais fazem o cliente sair sem comprar.</p>

    <h3>Atender como o mercado não atende</h3>

    <p>Aferição de pressão, orientação e acompanhamento são o ponto forte de quem conhece o cliente pelo nome. Com a atenção farmacêutica registrada no sistema, o histórico do paciente fica disponível para qualquer farmacêutico da equipe.</p>

    <div class="quadro">
      <span class="quadro__titulo">O que o mercado tem dificuldade de copiar</span>
      <p>Saber que a dona Maria toma o remédio da pressão todo mês, que ela prefere receber em casa e que gosta de ser atendida pela mesma farmacêutica. Isso é relacionamento, e relacionamento se organiza com cadastro e rotina.</p>
    </div>

    <h2 id="parceria">A parceria também é caminho</h2>

    <p>A lei permite que o supermercado contrate uma farmácia já licenciada para operar dentro da loja. Para a farmácia independente bem organizada, isso pode ser uma oportunidade de crescer sem abrir um ponto do zero.</p>

    <p>Quem chega para negociar com estoque em dia, controlados escriturados, indicadores claros e equipe treinada passa mais confiança. Antes de fechar qualquer contrato, avalie com a contabilidade e com um advogado quem responde pelo quê, como fica a nota fiscal e como o caixa do mercado recebe as vendas da farmácia.</p>

    <h2 id="checklist">Checklist da farmácia para 2027</h2>

    <ol class="passos">
      <li><div><b>Identifique o cliente na venda.</b> Sem cadastro, não existe uso contínuo, fidelidade nem histórico.</div></li>
      <li><div><b>Revise o cadastro dos itens de uso contínuo.</b> Comece pelos que mais vendem.</div></li>
      <li><div><b>Defina o seu programa de fidelidade.</b> Cartão por grupo de clientes ou pontos e cashback, com regra simples para a equipe explicar.</div></li>
      <li><div><b>Registre as encomendas e as perdas de venda.</b> É assim que você descobre o que o cliente foi buscar em outro lugar.</div></li>
      <li><div><b>Coloque a farmácia no digital.</b> Loja virtual ou aplicativo de delivery, com o estoque alinhado ao da loja.</div></li>
      <li><div><b>Mantenha lote, validade e controlados em dia.</b> Isso protege a farmácia na fiscalização e numa futura parceria.</div></li>
    </ol>

    <p>A farmácia dentro do supermercado vai crescer aos poucos, como a própria Abras prevê. A farmácia de bairro tem esse tempo para se organizar e chegar a 2027 conhecendo melhor o próprio cliente.</p>
""",
    "faq": [
        ("Supermercado pode ter farmácia?", "Sim. A Lei 15.357/2026, publicada em 23 de março de 2026, permite farmácia ou drogaria na área de vendas do supermercado, em espaço delimitado, separado e exclusivo, com farmacêutico durante todo o horário de funcionamento."),
        ("O supermercado pode vender remédio na gôndola?", "Não. A lei proíbe oferecer medicamento em área aberta ou sem separação completa, como bancadas, estandes ou gôndolas externas. O remédio fica dentro do espaço da farmácia."),
        ("Como fica a venda de medicamento controlado na farmácia do supermercado?", "O medicamento sujeito a controle especial só pode ser entregue depois do pagamento. Outra opção prevista na lei é levá-lo do balcão até o caixa em embalagem lacrada e inviolável. A escrituração segue as regras de qualquer farmácia."),
        ("A farmácia do supermercado precisa ter o mesmo CNPJ do mercado?", "Não necessariamente. A lei permite que o supermercado opere a farmácia diretamente, com a mesma identidade fiscal, ou por contrato com uma farmácia ou drogaria licenciada. O modelo deve ser definido com a contabilidade."),
        ("Como a farmácia independente pode competir com a farmácia do supermercado?", "Com o que depende de conhecer o cliente: lembrar da reposição do uso contínuo, programa de fidelidade, registro de encomendas, atenção farmacêutica e venda digital com entrega. Um sistema de gestão transforma isso em rotina da equipe."),
    ],
    "fontes": [
        (LEI, "Lei nº 15.357, de 20 de março de 2026", "Planalto"),
        ("https://exame.com/invest/mercados/fomos-a-farmacia-do-assai-supermercado-e-drogaria-em-uma-unica-loja/", "Fomos à farmácia do Assaí: supermercado e drogaria em uma única loja", "Exame, 20/07/2026"),
        ("https://ictq.com.br/varejo-farmaceutico/5226-supermercados-aceleram-entrada-no-mercado-farmaceutico-apos-sancao-de-nova-lei", "Supermercados aceleram entrada no mercado farmacêutico após sanção de nova lei", "ICTQ, 04/06/2026"),
        ("https://universidade.prosystemnet.com/base-conhecimento/admin-retaguarda/gestao-de-clientes/uso-continuo-ativo-nao-perca-vendas", "Uso contínuo ativo: não perca vendas", "Universidade Prosystem"),
    ],
    "relacionados": [
        ("cliente-uso-continuo-farmacia-recompra-pos-venda", "Farmácia", "O remédio do seu cliente acaba em 8 dias. Quem lembra dele primeiro?"),
        ("perda-de-vendas-farmacia-como-medir-motivos", "Farmácia", "A venda perdida não aparece no caixa, mas dá para medir"),
        ("sngpc-farmacia-como-evitar-multa-2026", "Farmácia", "SNGPC: como evitar multa na farmácia"),
    ],
}
