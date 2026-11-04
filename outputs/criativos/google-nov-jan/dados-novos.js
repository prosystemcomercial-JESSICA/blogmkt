// Postagens novas do Perfil da Empresa no Google (04/11/2026): pelo menos 3 por semana, de 02/11/2026 a 31/01/2027.
// As 11 de dados.js já foram programadas pela Jessica e não mudam. Estas preenchem as semanas, inclusive a pausa de 23/12 a 02/01.
// Temas acompanham o feed do Instagram (nov-dez/legendas.md) e citam só funções de docs/conteudo-prosystem/mapa-funcoes.csv.
// SEO e IA (pesquisa de 04/11/2026, docs/contexto/pesquisas/2026-11-04-google-perfil-seo-ia.md):
// palavra-chave na primeira frase, resposta direta, um número ou passo concreto, e frases que dizem quem é a ProSystem.
const BLOG = 'https://prosystemnet.com/blog/';
const LP_F = 'https://prosystemnet.com/sistema-para-farmacia/';
const LP_P = 'https://prosystemnet.com/sistema-para-padaria/';
const CONTATO = 'https://prosystemnet.com/contato/';
const SOBRE = 'https://prosystemnet.com/sobre-nos/';

const N = [
  {
    data: '2026-11-06', seg: 'Farmácia', id: 'sugestao-de-compras-farmacia', tema: 'azul',
    foto: 'farmacia-corredor', posicao: '50% 50%',
    palavra: 'compra da farmácia',
    titulo: 'Comprar pelo olho <b>ou pelo giro do estoque?</b>',
    faixa: 'A sugestão de compras usa mínimo, máximo e média de venda.', pilula: 'Sistema para farmácia',
    botao: 'Saiba mais', link: LP_F,
    texto: `Compra da farmácia feita no olho tem dois resultados: falta o que sai todo dia e sobra o que fica parado na prateleira. Em 2027, com a margem mais apertada, cada real parado no estoque pesa mais.

Antes do pedido ao distribuidor, olhe três números de cada item:
1. Quanto vende por dia, em média.
2. Quantos dias está sem vender.
3. Quanto ainda tem na loja, contando o que já foi encomendado.

No Prosystem, a sugestão de compras faz essa conta pelo estoque mínimo e máximo. Na mesma tela aparecem a média de venda, a curva do produto, os dias sem giro e as encomendas. A sugestão é tão boa quanto o estoque cadastrado, por isso a contagem em dia vem primeiro.

Conheça o sistema para farmácia da ProSystem.`,
  },
  {
    data: '2026-11-07', seg: 'Padaria', id: 'perda-de-vendas-padaria', tema: 'lar',
    foto: 'paes-prateleira', posicao: '50% 50%',
    palavra: 'perda de vendas na padaria',
    titulo: 'A venda que não aconteceu <b>não aparece no caixa.</b>',
    faixa: 'Registre o motivo de cada item que saiu da venda.', pilula: 'Sistema para padaria',
    botao: 'Saiba mais', link: LP_P,
    texto: `Perda de vendas na padaria: o cliente pediu, o item acabou ou o preço assustou, e a venda foi embora sem deixar rastro. O caixa mostra o que entrou, mas não o que deixou de entrar.

Três motivos aparecem muito:
1. Produto em falta no horário de pico.
2. Preço diferente do que o cliente esperava.
3. Item tirado da compra no caixa, sem explicação.

No Prosystem, o indicador de perda de vendas registra o motivo quando o operador exclui um item da venda. Depois, o relatório e o gráfico mostram quais motivos mais se repetem. Com isso, a produção e o preço de 2027 se ajustam pelo que o cliente pediu, e não pelo palpite.

Conheça o sistema para padaria da ProSystem.`,
  },
  {
    data: '2026-11-10', seg: 'Os dois', id: 'prosystem-sistema-farmacia-padaria', tema: 'azul',
    foto: 'atendente-suporte', posicao: '50% 35%',
    palavra: 'sistema para farmácia e padaria',
    titulo: '16 anos de sistema <b>para farmácia e padaria.</b>',
    faixa: 'Mais de 600 clientes em 13 estados.', pilula: 'Conheça a ProSystem',
    botao: 'Saiba mais', link: SOBRE,
    texto: `Sistema para farmácia e padaria é o que a ProSystem Sistemas faz há 16 anos. Hoje são mais de 600 clientes em 13 estados, entre drogarias, farmácias de manipulação, padarias e varejo.

O que o Prosystem cobre:
1. Caixa, com fechamento por forma de pagamento e alerta de sangria.
2. Estoque e compras, com curva ABC e sugestão de compras.
3. Preço e margem, com precificação e análise de descontos.
4. Financeiro, com contas, DRE e fluxo de caixa.

O suporte é feito por especialistas técnicos, das 7h às 22h, inclusive sábado e domingo.

Vai escolher ou trocar o sistema da loja para 2027? Conheça a ProSystem.`,
  },
  {
    data: '2026-11-14', seg: 'Padaria', id: 'cartao-fidelidade-padaria', tema: 'lar',
    foto: 'paezinhos-cesta', posicao: '50% 50%',
    palavra: 'cliente fiel na padaria',
    titulo: 'Seu cliente volta por hábito <b>ou porque você deu um motivo?</b>',
    faixa: 'Desconto por grupo de clientes, direto no caixa.', pilula: 'Sistema para padaria',
    botao: 'Saiba mais', link: LP_P,
    texto: `Cliente fiel na padaria é o que vem todo dia, mas a padaria nova da esquina também quer esse cliente. Em 2026, foram mais de 81 mil pequenos negócios de panificação abertos no Brasil de janeiro a setembro, segundo o Sebrae.

Um motivo para voltar não precisa ser caro:
1. Separe os clientes de todo dia em um grupo.
2. Escolha uma categoria com margem para desconto, como a de lanches.
3. Comunique a regra no balcão e mantenha por alguns meses.

No Prosystem, o cartão fidelidade cria grupos de clientes com política de desconto por grupo ou subgrupo de produtos. O desconto entra na venda, sem conta de cabeça no caixa.

Conheça o sistema para padaria da ProSystem e comece 2027 com o cliente de casa.`,
  },
  {
    data: '2026-11-17', seg: 'Padaria', id: 'pix-fechamento-caixa-padaria', tema: 'lar',
    foto: 'pao-frances', posicao: '50% 50%',
    palavra: 'Pix no caixa da padaria',
    titulo: 'O Pix entrou. <b>O caixa bateu?</b>',
    faixa: 'Feche o caixa conferindo cada forma de pagamento.', pilula: 'Sistema para padaria',
    botao: 'Saiba mais', link: LP_P,
    texto: `Pix no caixa da padaria já é parte do dia, junto com dinheiro, débito e crédito. O problema aparece no fechamento: a soma total bate, mas o Pix está a menos e o dinheiro a mais, e ninguém sabe o porquê.

No fechamento, confira por forma de pagamento:
1. Dinheiro na gaveta contra o registrado.
2. Pix recebido no banco contra o registrado no caixa.
3. Cartões contra o relatório da maquininha.

No Prosystem, o fechamento de caixa faz a conferência por forma de pagamento, aceita caixas abertos ao mesmo tempo e mostra o caixa que ficou pendente. A diferença aparece no dia, e não no fim do mês.

Conheça o sistema para padaria e entre em 2027 com o caixa em ordem.`,
  },
  {
    data: '2026-11-21', seg: 'Farmácia', id: 'auditoria-desconto-farmacia', tema: 'azul',
    foto: 'farmaceutica-recorte', posicao: '50% 30%',
    palavra: 'desconto no balcão da farmácia',
    titulo: 'Quem liberou <b>esse desconto?</b>',
    faixa: 'A auditoria registra quem acessou e quem alterou.', pilula: 'Sistema para farmácia',
    botao: 'Saiba mais', link: LP_F,
    texto: `Desconto no balcão da farmácia sem registro vira mistério no fim do mês: a margem caiu, mas ninguém lembra quem liberou, nem quando.

Três cuidados antes da Black Friday:
1. Defina quem pode liberar desconto acima do padrão.
2. Use senha própria para cada pessoa, nunca a senha do gerente na gaveta.
3. Confira toda semana as liberações fora da regra.

No Prosystem, a auditoria registra quem acessou ou alterou funções protegidas do sistema. Assim, a conversa com a equipe começa pelo registro, e não pela desconfiança.

Conheça o sistema para farmácia da ProSystem e entre em 2027 com as regras claras.`,
  },
  {
    data: '2026-11-23', seg: 'Farmácia', id: 'metas-de-vendas-farmacia', tema: 'azul',
    foto: 'farmaceutico-computador', posicao: '50% 50%',
    palavra: 'metas de vendas na farmácia',
    titulo: 'Meta que ninguém vê <b>ninguém persegue.</b>',
    faixa: 'A equipe vê a própria meta ao registrar o ponto.', pilula: 'Sistema para farmácia',
    botao: 'Saiba mais', link: LP_F,
    texto: `Metas de vendas na farmácia funcionam quando o balconista sabe, todo dia, quanto falta. Na semana da Black Friday, uma meta escrita só na planilha do dono não muda nada no balcão.

Como montar a meta da semana:
1. Escolha poucos alvos: um grupo de produtos e um valor geral.
2. Divida por pessoa, pelo que cada uma vende hoje.
3. Mostre o andamento todos os dias, não só no fim.

No Prosystem, as metas de funcionários podem ser por fabricante, grupo, subgrupo ou geral. Cada pessoa vê a própria meta ao registrar o ponto, no começo do turno.

A Black Friday é em 27/11. Conheça o sistema para farmácia e leve as metas para 2027.`,
  },
  {
    data: '2026-11-27', seg: 'Farmácia', id: 'black-friday-hoje-farmacia', tema: 'azul',
    foto: 'conferindo-frasco', posicao: '50% 50%', desfoque: 7,
    palavra: 'Black Friday na farmácia',
    titulo: 'Black Friday é hoje. <b>Amanhã, olhe o lucro.</b>',
    faixa: 'Rentabilidade por produto, com filtro de margem negativa.', pilula: 'Sistema para farmácia',
    botao: 'Saiba mais', link: BLOG + 'vender-mais-nao-e-lucrar-mais-margem-varejo/',
    texto: `Black Friday na farmácia é hoje, 27/11, e o movimento costuma vir. A pergunta certa fica para amanhã: quanto dessa venda virou lucro?

No sábado, separe meia hora para:
1. Listar os itens que mais venderam com desconto.
2. Ver a margem de cada um depois do desconto.
3. Anotar quais valeram a pena para repetir nas promoções de 2027.

No Prosystem, o relatório de rentabilidade mostra o resultado geral e por produto, com filtro para ver só os itens de rentabilidade negativa. É ali que aparece o desconto que vendeu muito e não deixou nada.

No blog, veja por que vender mais nem sempre é lucrar mais.`,
  },
  {
    data: '2026-12-01', seg: 'Padaria', id: 'entregas-dezembro-padaria', tema: 'lar',
    foto: 'embalagem-papel', posicao: '50% 50%',
    palavra: 'entregas da padaria em dezembro',
    titulo: 'Saiu para entrega. <b>Voltou o dinheiro?</b>',
    faixa: 'Controle de saída, baixa e entregador no fechamento.', pilula: 'Sistema para padaria',
    botao: 'Saiba mais', link: LP_P,
    texto: `Entregas da padaria em dezembro sobem junto com o 13º salário e as encomendas de fim de ano. Com mais pedidos na rua, cresce o risco de entrega sem baixa e de troco que não volta para o caixa.

Antes do pico:
1. Registre a saída de cada entrega, com o entregador.
2. Dê baixa só quando o pagamento voltar.
3. Confira as entregas junto com o fechamento do caixa.

No Prosystem, a gestão de entregas controla a saída e a baixa, liga a entrega ao fechamento do caixa e mostra relatórios por período e por entregador.

Conheça o sistema para padaria da ProSystem e entre em 2027 sabendo onde está cada pedido.`,
  },
  {
    data: '2026-12-05', seg: 'Padaria', id: 'recebimento-mercadoria-padaria', tema: 'lar',
    foto: 'carrinho-paes', posicao: '50% 50%',
    palavra: 'recebimento de mercadoria na padaria',
    titulo: 'Chegou a farinha. <b>Chegou tudo?</b>',
    faixa: 'Conferência cega: o sistema aponta a diferença.', pilula: 'Sistema para padaria',
    botao: 'Saiba mais', link: BLOG + 'peps-estoque-padaria-primeiro-que-entra-primeiro-que-sai/',
    texto: `Recebimento de mercadoria na padaria feito com a nota na mão vira conferência de papel: quem confere lê a quantidade na nota e só confirma. Se veio um saco de farinha a menos, o erro entra no estoque.

Como receber melhor:
1. Quem confere conta sem olhar a nota.
2. A diferença é resolvida com o fornecedor na hora.
3. O que chegou vai para trás do que já estava, para sair primeiro o mais antigo.

No Prosystem, o recebimento com conferência funciona assim: a pessoa conta sem ver a nota, o sistema aponta as divergências e não confirma o estoque enquanto houver diferença.

No blog, veja como usar o PEPS no estoque da padaria em 2027.`,
  },
  {
    data: '2026-12-08', seg: 'Farmácia', id: 'controle-de-validade-farmacia', tema: 'azul',
    foto: 'conferindo-frasco-sem-rotulo', posicao: '50% 45%',
    palavra: 'controle de validade na farmácia',
    titulo: 'Vencido na prateleira <b>é prejuízo duas vezes.</b>',
    faixa: 'Lote na venda e aviso de pré-vencido no caixa.', pilula: 'Sistema para farmácia',
    botao: 'Saiba mais', link: LP_F,
    texto: `Controle de validade na farmácia não pode depender de olhar prateleira por prateleira. O produto vence, sai do estoque como perda e ainda ocupa o lugar de um item que vende.

Uma rotina simples:
1. Registre o lote na entrada da mercadoria.
2. Confira toda semana o que vence nos próximos meses.
3. Dê saída primeiro ao lote mais antigo.

No Prosystem, o controle de lote e validade rastreia o lote de cada venda e destaca na tela de venda os produtos pré-vencidos. Se um lote precisar ser recolhido, dá para saber para onde ele foi.

Conheça o sistema para farmácia da ProSystem e comece 2027 com menos perda por validade.`,
  },
  {
    data: '2026-12-12', seg: 'Farmácia', id: 'estoque-parado-farmacia', tema: 'azul',
    foto: 'prateleiras-recorte', posicao: '50% 50%',
    palavra: 'estoque parado na farmácia',
    titulo: 'Quanto dinheiro está <b>parado na sua prateleira?</b>',
    faixa: 'Dias sem giro no caixa e relatório de excesso.', pilula: 'Sistema para farmácia',
    botao: 'Saiba mais', link: LP_F,
    texto: `Estoque parado na farmácia é dinheiro que não volta para o caixa. Em dezembro, ele ainda ocupa espaço e verba que poderiam ir para o que vende no verão.

Para achar o parado antes de 2027:
1. Liste os itens sem venda há mais de 90 dias.
2. Separe o que tem validade próxima.
3. Decida o destino de cada um: troca, devolução ou ação no balcão.

No Prosystem, o caixa mostra há quantos dias o produto está sem giro, e os relatórios apontam os itens parados e os que estão em excesso.

Conheça o sistema para farmácia da ProSystem e feche o ano com o estoque mais leve.`,
  },
  {
    data: '2026-12-15', seg: 'Padaria', id: 'fluxo-de-caixa-janeiro-padaria', tema: 'lar',
    foto: 'panetone-grade', posicao: '50% 50%',
    palavra: 'fluxo de caixa da padaria',
    titulo: 'Dezembro vende. <b>Janeiro cobra.</b>',
    faixa: 'Separe hoje o dinheiro das contas de janeiro.', pilula: 'Sistema para padaria',
    botao: 'Saiba mais', link: LP_P,
    texto: `Fluxo de caixa da padaria em dezembro parece folgado, porque o movimento sobe. Mas janeiro chega com 13º já pago, impostos, fornecedores e um movimento menor, e é aí que o caixa aperta.

Faça a conta agora:
1. Liste as contas fixas e os impostos de janeiro de 2027.
2. Some as compras de fornecedor que vencem no mês.
3. Separe esse valor do que entra em dezembro.

No Prosystem, o financeiro lança as contas com plano de contas e centro de custos. O DRE e o fluxo de caixa mostram o resultado pela data da venda e pela data do pagamento.

Conheça o sistema para padaria da ProSystem e entre em 2027 sem susto no caixa.`,
  },
  {
    data: '2026-12-19', seg: 'Farmácia', id: 'escala-fim-de-ano-farmacia', tema: 'azul',
    foto: 'farmaceutica-receita', posicao: '50% 40%',
    palavra: 'escala de fim de ano na farmácia',
    titulo: 'Feriado com loja aberta: <b>quem está no turno?</b>',
    faixa: 'Registro de ponto no login do sistema.', pilula: 'Sistema para farmácia',
    botao: 'Saiba mais', link: LP_F,
    texto: `Escala de fim de ano na farmácia precisa estar fechada antes de 24/12. Com Natal e Ano-Novo, plantões e folgas trocadas, quem entra e quem sai fica fácil de confundir.

Para a escala de dezembro:
1. Publique a escala completa até 20/12, com os feriados.
2. Registre as trocas por escrito, nunca só de boca.
3. Confira o ponto de cada turno nos dias 24, 25, 31 e 1º.

No Prosystem, o registro de ponto é feito no login. Dá para impedir venda sem o ponto registrado e tirar relatórios por período. As regras trabalhistas da escala ficam com o contador.

Conheça o sistema para farmácia da ProSystem e organize a equipe para 2027.`,
  },
  {
    data: '2026-12-21', seg: 'Padaria', id: 'horario-fim-de-ano-padaria', tema: 'lar',
    foto: 'forno-pa', posicao: '50% 40%',
    palavra: 'horário de fim de ano da padaria',
    titulo: 'Abre no dia 25? <b>Avise antes do cliente perguntar.</b>',
    faixa: 'Atualize o horário especial no Google e na porta.', pilula: 'Sistema para padaria',
    botao: 'Saiba mais', link: LP_P,
    texto: `Horário de fim de ano da padaria: o cliente pesquisa no Google se a loja abre no dia 25 ou no dia 1º. Se o perfil mostra o horário normal e a porta está fechada, ele não volta tão cedo.

Três avisos para fazer hoje:
1. No Perfil da Empresa no Google, preencha o horário especial de 24, 25, 31 de dezembro e 1º de janeiro.
2. Coloque o mesmo horário na porta e no caixa.
3. Combine o horário das encomendas, para a retirada não cair com a loja fechada.

Horário certo no Google também ajuda a padaria a aparecer para quem procura uma loja aberta perto de casa em 2027.

Conheça o sistema para padaria da ProSystem.`,
  },
  {
    data: '2026-12-23', seg: 'Os dois', id: 'suporte-sistema-fim-de-ano', tema: 'azul',
    foto: 'atendente-suporte-homem', posicao: '50% 30%',
    palavra: 'suporte de sistema no fim de ano',
    titulo: 'Sua loja abre nas festas. <b>O suporte também.</b>',
    faixa: 'Das 7h às 22h, inclusive sábado e domingo.', pilula: 'Fale com a ProSystem',
    botao: 'Saiba mais', link: CONTATO,
    texto: `Suporte de sistema no fim de ano é o que a farmácia e a padaria mais precisam e menos encontram. São os dias de mais movimento, com equipe reduzida e caixa cheio.

Na ProSystem, o suporte é feito por especialistas técnicos, das 7h às 22h, inclusive sábado e domingo. Você pode mandar áudio, texto ou o print da tela.

Para passar as festas sem susto:
1. Confira a internet e a impressora do caixa antes do dia 24.
2. Deixe anotado quem da equipe chama o suporte.
3. Feche o caixa de cada turno, mesmo nos dias corridos.

Boas festas e um 2027 de bons negócios.`,
  },
  {
    data: '2026-12-25', seg: 'Os dois', id: 'feliz-natal-prosystem', tema: 'azul',
    foto: 'arvore-natal-luzes', posicao: '50% 75%',
    palavra: 'Feliz Natal',
    titulo: '<b>Feliz Natal.</b>',
    faixa: 'Obrigado a quem abriu a loja para cuidar das festas.', pilula: 'ProSystem Sistemas',
    botao: 'Saiba mais', link: SOBRE,
    texto: `Feliz Natal de toda a equipe da ProSystem Sistemas.

Hoje lembramos de quem trabalhou para o Natal dos outros acontecer: o padeiro que começou de madrugada, o farmacêutico de plantão, o operador de caixa da fila longa e o dono que conferiu tudo no fim do dia.

São 16 anos ao lado de farmácias e padarias, com mais de 600 clientes em 13 estados. Obrigado pela confiança em 2026.

Que 2027 traga saúde, boas vendas e caixa batendo.`,
  },
  {
    data: '2026-12-29', seg: 'Farmácia', id: 'biometria-login-farmacia', tema: 'azul',
    foto: 'farmaceutico-conferindo', posicao: '50% 40%',
    palavra: 'senha de funcionário na farmácia',
    titulo: 'A senha do gerente <b>está anotada na gaveta?</b>',
    faixa: 'Login e liberações com a impressão digital.', pilula: 'Sistema para farmácia',
    botao: 'Saiba mais', link: LP_F,
    texto: `Senha de funcionário na farmácia passada de mão em mão é o começo de muito problema: desconto liberado sem dono, cancelamento sem motivo e venda no nome de outra pessoa.

Antes de 2027:
1. Cada pessoa tem o próprio acesso, inclusive quem entrou para as festas.
2. Quem saiu da equipe tem o acesso desligado no mesmo dia.
3. Operações sensíveis pedem a autorização de quem tem permissão.

No Prosystem, o acesso e as liberações podem ser feitos por biometria, com a impressão digital, no login e nas operações sensíveis. Assim, a autorização tem nome e não depende de senha anotada.

Conheça o sistema para farmácia da ProSystem.`,
  },
  {
    data: '2026-12-31', seg: 'Os dois', id: 'feliz-2027-prosystem', tema: 'azul',
    foto: 'fogos-ano-novo', posicao: '50% 50%',
    palavra: 'Feliz 2027',
    titulo: '<b>Feliz 2027.</b>',
    faixa: 'Que o ano novo venha com caixa batendo.', pilula: 'ProSystem Sistemas',
    botao: 'Saiba mais', link: SOBRE,
    texto: `Feliz 2027 para cada farmácia e padaria que trabalhou com a gente neste ano.

Para a primeira semana de janeiro, deixamos três lembretes:
1. Confira com o contador as mudanças da reforma tributária para 2027.
2. Atualize custo e preço com as primeiras notas de compra do ano.
3. Feche o caixa de 31/12 antes de abrir o de 2027.

A ProSystem Sistemas segue ao seu lado, com suporte das 7h às 22h, inclusive sábado e domingo.

Um ótimo ano novo.`,
  },
  {
    data: '2027-01-02', seg: 'Padaria', id: 'planejamento-2027-padaria', tema: 'lar',
    foto: 'paes-grade', posicao: '50% 50%',
    palavra: 'planejamento da padaria para 2027',
    titulo: '2027 começou. <b>Três números para olhar.</b>',
    faixa: 'Margem, sobra e ticket médio.', pilula: 'Sistema para padaria',
    botao: 'Saiba mais', link: BLOG + 'ficha-tecnica-padaria-padronizar-receitas-rendimento/',
    texto: `Planejamento da padaria para 2027 não precisa de planilha complicada. Comece por três números e acompanhe todo mês.

1. Margem: quanto sobra de cada produto depois do custo da receita. A ficha técnica dá esse número.
2. Sobra: quanto foi produzido e não vendido, por produto e por dia.
3. Ticket médio: quanto cada cliente gasta, em média, por compra.

Se a margem cai, revise o preço. Se a sobra sobe, ajuste a fornada. Se o ticket médio para, pense em combos e na exposição do balcão.

No Prosystem, a curva ABC mostra quais produtos mais pesam nas vendas, em valor e em quantidade. É por eles que vale começar.

No blog, veja como montar a ficha técnica da padaria.`,
  },
  {
    data: '2027-01-05', seg: 'Farmácia', id: 'falta-de-produto-verao-farmacia', tema: 'azul',
    foto: 'prateleira-vazia', posicao: '50% 50%', desfoque: 3,
    palavra: 'falta de produto na farmácia',
    titulo: 'Verão chegou. <b>A prateleira acompanhou?</b>',
    faixa: 'Registre o motivo de cada venda que não aconteceu.', pilula: 'Sistema para farmácia',
    botao: 'Saiba mais', link: LP_F,
    texto: `Falta de produto na farmácia no verão manda o cliente para a concorrente na mesma hora. Protetor solar, repelente e outros itens de verão vendem mais em janeiro, e quem não tem perde a venda e, às vezes, o cliente.

Para janeiro de 2027:
1. Compare a venda de janeiro passado com o estoque de hoje.
2. Reforce os itens de verão antes do pico.
3. Anote toda venda perdida por falta, mesmo as pequenas.

No Prosystem, o indicador de perda de vendas registra o motivo quando um item sai da venda. O relatório mostra quanto se perdeu por falta e quais itens mais faltaram.

Conheça o sistema para farmácia da ProSystem.`,
  },
  {
    data: '2027-01-09', seg: 'Farmácia', id: 'farmacia-independente-2027', tema: 'azul',
    foto: 'pressao-mesa', posicao: '50% 50%',
    palavra: 'farmácia independente em 2027',
    titulo: 'Farmácia independente em 2027: <b>margem antes de volume.</b>',
    faixa: 'A curva ABC mostra onde o lucro está.', pilula: 'Sistema para farmácia',
    botao: 'Saiba mais', link: LP_F,
    texto: `Farmácia independente em 2027 entra no ano com o mercado crescendo e o lucro do dono apertado. Em pesquisa do Instituto Febrafar com 2.200 proprietários, 56% relataram queda de lucro entre 2020 e 2024.

Onde começar em janeiro:
1. Separe os itens que mais pesam no faturamento.
2. Confira a margem de cada um deles.
3. Revise o preço e a compra primeiro desses itens.

No Prosystem, a curva ABC e XYZ classifica os produtos por valor, por quantidade e por criticidade. É a lista de onde olhar primeiro, sem passar o estoque inteiro.

Conheça o sistema para farmácia da ProSystem.`,
  },
  {
    data: '2027-01-16', seg: 'Padaria', id: 'arquivos-contador-padaria', tema: 'lar',
    foto: 'paes-forma-prateleira', posicao: '50% 50%',
    palavra: 'arquivos fiscais para o contador',
    titulo: 'O contador pediu os arquivos. <b>De novo.</b>',
    faixa: 'XML, SPED e Sintegra enviados de uma vez.', pilula: 'Sistema para padaria',
    botao: 'Saiba mais', link: LP_P,
    texto: `Arquivos fiscais para o contador: todo mês é a mesma corrida atrás de XML, SPED e relatórios. Em 2027, com a reforma tributária começando, o contador vai precisar desses arquivos completos e no prazo.

Para janeiro:
1. Combine com o contador a data de envio de cada mês.
2. Confira se as notas de compra entraram no sistema.
3. Mande tudo de uma vez, e não em partes.

No Prosystem, o Prosystem Fiscal envia XML, SPED, Sintegra e relatórios de uma vez para o FTP da contabilidade. Para usar, o escritório do contador precisa ter FTP.

Conheça o sistema para padaria da ProSystem.`,
  },
  {
    data: '2027-01-18', seg: 'Padaria', id: 'lucro-por-produto-padaria', tema: 'lar',
    foto: 'padeiros-padaria', posicao: '50% 35%',
    palavra: 'lucro por produto na padaria',
    titulo: 'Vende muito. <b>Mas dá lucro?</b>',
    faixa: 'Rentabilidade por produto, com filtro de margem negativa.', pilula: 'Sistema para padaria',
    botao: 'Saiba mais', link: LP_P,
    texto: `Lucro por produto na padaria: o item que mais vende nem sempre é o que mais deixa dinheiro. Às vezes, o salgado do balcão dá mais lucro que o pão de toda hora.

Para janeiro de 2027:
1. Liste os 20 produtos que mais vendem.
2. Veja quanto cada um deixa depois do custo.
3. Revise o preço ou a receita dos que ficaram com margem baixa.

No Prosystem, o relatório de rentabilidade mostra o resultado geral e por produto, com filtro para ver só os itens de rentabilidade positiva ou negativa.

Conheça o sistema para padaria da ProSystem.`,
  },
  {
    data: '2027-01-22', seg: 'Os dois', id: 'avaliacao-prosystem-google', tema: 'azul',
    foto: 'luzes-desfocadas', posicao: '50% 50%',
    palavra: 'avaliação da ProSystem no Google',
    titulo: 'Cliente ProSystem, <b>conte como é o seu dia a dia.</b>',
    faixa: 'Sua avaliação ajuda outra loja a escolher.', pilula: 'Avalie aqui no Google',
    botao: 'Saiba mais', link: SOBRE,
    texto: `Avaliação da ProSystem no Google: se a sua farmácia ou padaria usa o Prosystem, conte aqui no perfil como é o sistema no seu dia a dia.

Vale contar:
1. Qual função mais ajuda a sua loja.
2. Como foi o atendimento do suporte.
3. Há quanto tempo você usa o sistema.

Quem procura sistema para farmácia ou sistema para padaria em 2027 lê as avaliações antes de escolher. A sua conta mais do que qualquer propaganda nossa.

Obrigado por estar com a ProSystem Sistemas.`,
  },
  {
    data: '2027-01-26', seg: 'Padaria', id: 'nota-fiscal-cnpj-padaria', tema: 'lar',
    foto: 'forno', posicao: '50% 50%',
    palavra: 'nota fiscal no CNPJ da padaria',
    titulo: 'Tem nota no seu CNPJ <b>que você nem viu?</b>',
    faixa: 'Busque na SEFAZ as notas emitidas para a loja.', pilula: 'Sistema para padaria',
    botao: 'Saiba mais', link: LP_P,
    texto: `Nota fiscal no CNPJ da padaria pode chegar sem que ninguém veja: o fornecedor emitiu, a mercadoria veio pela metade ou nem veio, e a nota está lá na SEFAZ. Em 2027, com a reforma tributária, a conferência das notas de compra fica ainda mais importante.

Rotina de toda semana:
1. Consulte as notas emitidas para o CNPJ da loja.
2. Confira cada uma com o que chegou de verdade.
3. Recuse a nota que não é sua, dentro do prazo.

No Prosystem, o manifesto busca na SEFAZ as notas emitidas para o seu CNPJ e permite dar entrada na mercadoria a partir delas.

Conheça o sistema para padaria da ProSystem.`,
  },
  {
    data: '2027-01-28', seg: 'Farmácia', id: 'trocar-sistema-farmacia', tema: 'azul',
    foto: 'farmaceutica-pressao', posicao: '50% 40%',
    palavra: 'trocar o sistema da farmácia',
    titulo: 'Trocar de sistema dá medo. <b>O que pesa é quem atende depois.</b>',
    faixa: 'Suporte das 7h às 22h, inclusive sábado e domingo.', pilula: 'Fale com a ProSystem',
    botao: 'Saiba mais', link: CONTATO,
    texto: `Trocar o sistema da farmácia dá receio: e se o caixa parar? E se ninguém atender quando a loja estiver cheia?

Antes de decidir, pergunte a qualquer fornecedor:
1. Quem atende no sábado, no domingo e no feriado.
2. Como funciona a troca dos dados do sistema antigo.
3. Quanto tempo leva para a equipe usar o caixa sozinha.

Na ProSystem, o suporte é feito por especialistas técnicos, das 7h às 22h, inclusive sábado e domingo. São 16 anos de experiência e mais de 600 clientes em 13 estados.

Está pensando em trocar de sistema em 2027? Fale com a ProSystem.`,
  },
  {
    data: '2027-01-30', seg: 'Padaria', id: 'producao-carnaval-padaria', tema: 'lar',
    foto: 'rolos-bandeja', posicao: '50% 50%',
    palavra: 'produção de Carnaval na padaria',
    titulo: 'Carnaval em 9/2. <b>A fornada já está planejada?</b>',
    faixa: 'Use as vendas do Carnaval passado como base.', pilula: 'Leia no blog',
    botao: 'Saiba mais', link: BLOG + 'controle-de-sobras-padaria-ajustar-producao/',
    texto: `Produção de Carnaval na padaria muda de cidade para cidade: em umas, a loja enche; em outras, o movimento some. O Carnaval de 2027 é em 9 de fevereiro, e a hora de planejar é agora.

Para não errar a fornada:
1. Veja quanto cada produto vendeu nos dias de Carnaval do ano passado.
2. Separe o que vendeu mais e o que sobrou.
3. Defina a produção de cada dia e registre a sobra para ajustar no seguinte.

Na versão Plus do Prosystem, o painel de indicadores mostra vendas e estoque com filtro por período. Dá para olhar só os dias de Carnaval do ano passado.

No blog, veja como controlar as sobras e ajustar a produção.`,
  },
];

const SEMANA = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
for (const c of N) {
  const [a, m, d] = c.data.split('-').map(Number);
  c.dia = `${SEMANA[new Date(a, m - 1, d).getDay()]} ${String(d).padStart(2, '0')}/${String(m).padStart(2, '0')}`;
}

module.exports = { N };
