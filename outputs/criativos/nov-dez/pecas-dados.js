// Textos, legendas e SEO das peças de 04/11 a 31/12/2026, na ordem do planejamento.
// Pautas com origem no feed simulado: docs/conteudo-prosystem/feed_modelo.html. Pautas novas: escritas nesta produção.
const FOTO_PR = 'prateleiras-desfocadas';
const FOTO_FA = 'farmaceutica-recorte';
const CTA = 'Fale com um especialista pelo link da bio.';

const P = [
{ data: 'Qua 04/11', seg: 'Farmácia', id: 'carrossel-farmacia-reforma-tributaria-v1', tipo: 'v2', tema: 'azul', formato: 'Carrossel V2',
  capa: { foto: FOTO_PR, tela: 'painel-estoque', titulo: 'Em 2027 o imposto muda. <b>Quanto vale o seu estoque?</b>', apoio: 'A virada é em 1º de janeiro.' },
  itens: [
    { foto: FOTO_PR, titulo: 'PIS e Cofins <b>acabam.</b>', apoio: 'Entra a CBS, o imposto novo. A taxa ainda depende do Senado.' },
    { foto: FOTO_FA, titulo: 'Remédio paga <b>menos.</b>', apoio: 'A lei corta 60% do imposto novo do remédio registrado. Alguns ficam com zero.' },
    { foto: 'calculadora', titulo: 'O estoque entra na <b>conta da virada.</b>', apoio: 'Pergunte ao contador como ficam os produtos que você já comprou.' },
  ],
  sol: { foto: FOTO_PR, tela: 'painel-estoque', titulo: 'Seu estoque em um só painel', apoio: 'Itens e custo na mesma tela. Painel de indicadores, plano Plus.' },
  fim: { foto: FOTO_PR, tela: 'painel-estoque', titulo: 'Quer ver o painel da <b>sua farmácia?</b>' },
  kw: 'reforma tributária na farmácia',
  cap: `Reforma tributária na farmácia em 2027: o que conferir antes de 1º de janeiro.\n\nO PIS e a Cofins acabam e entra a CBS, o imposto novo. Remédio registrado paga menos, mas a conta de quem tem estoque precisa ser feita com o contador. E essa conversa começa por uma pergunta simples: quanto você tem na prateleira hoje?\n\nNo plano Plus do Prosystem, o painel mostra itens e custo do estoque na mesma tela.\n\n${CTA}`,
  tags: '#reformatributaria #gestaodefarmacia #sistemaparafarmacia #drogaria',
  alts: ['Painel do Prosystem sobre prateleiras de farmácia, com o título: em 2027 o imposto muda, quanto vale o seu estoque?', 'Prateleiras de farmácia e o texto: PIS e Cofins acabam, entra a CBS.', 'Farmacêutica pegando um produto na prateleira e o texto: remédio paga menos.', 'Calculadora e caneta sobre papel e o texto: o estoque entra na conta da virada.', 'Painel do Prosystem com itens e custo do estoque, plano Plus.', 'Painel do Prosystem e o convite para falar com um especialista.'],
  conferir: ['Taxa da CBS: 11,3% é cálculo do TCU; o Senado decide até dezembro. A peça não cita o número.', 'Não prometer economia nem crédito de estoque.'] },

{ data: 'Sex 06/11', seg: 'Padaria', id: 'carrossel-padaria-reforma-tributaria-v1', tipo: 'v3', tema: 'lar', formato: 'Carrossel V3',
  capa: { foto: 'paes-grade', fs: 96, titulo: 'Em 2027, o pão francês zera. <b>E o resto do cupom?</b>' },
  itens: [
    { n: 1, foto: 'paes-grade', titulo: 'Pão francês: <b>zero.</b>', apoio: 'A lei zera os impostos novos, CBS e IBS, para o pão francês.' },
    { n: 2, foto: 'maos-massa', titulo: 'Feito na loja: <b>regra própria.</b>', apoio: 'O regulamento cita padarias, com desconto de 40% no que é preparado ali.' },
    { n: 3, foto: 'paes-prateleira', titulo: 'Revenda: <b>fora do desconto.</b>', apoio: 'Refrigerante e produto comprado pronto não entram, segundo parecer jurídico.' },
  ],
  sol: { foto: 'carrinho-paes', titulo: 'Cada produto precisa estar <b>bem cadastrado</b>', apoio: 'No Simples, a conta é diferente. Confirme com seu contador.' },
  fim: { titulo: 'Quer deixar a <b>sua padaria</b> pronta para 2027?', fotos: ['paes-prateleira', 'forno'] },
  kw: 'reforma tributária nas padarias',
  cap: `Reforma tributária nas padarias: em 2027, um cupom pode ter várias regras.\n\nO pão francês fica com imposto novo zero. O que é preparado na loja tem regime próprio. Refrigerante revendido fica de fora. Para a padaria, o cadastro de cada produto passa a valer dinheiro.\n\nSe você está no Simples, a conta é diferente: confirme com seu contador.\n\n${CTA}`,
  tags: '#reformatributaria #padaria #panificacao #sistemaparapadaria',
  alts: ['Pães em uma grade, com o título: em 2027, o pão francês zera, e o resto do cupom?', 'Pães em uma grade e o texto: pão francês, zero.', 'Mãos segurando massa e o texto: feito na loja, regra própria.', 'Pães em uma prateleira e o texto: revenda fora do desconto.', 'Carrinho com pães e o texto: cada produto precisa estar bem cadastrado.', 'Pães e forno, com o convite para deixar a padaria pronta para 2027.'],
  conferir: ['Produto: o que já está pronto para padaria e para o Simples em 2027?', 'A regra dos 40% veio de parecer jurídico; os artigos não foram lidos no Planalto.'] },

{ data: 'Qua 11/11', seg: 'Padaria', id: 'carrossel-padaria-trigo-v1', tipo: 'v3', tema: 'lar', formato: 'Carrossel V3',
  capa: { foto: 'farinha-trigo', titulo: 'O trigo subiu. <b>E o preço do seu pão?</b>' },
  itens: [
    { n: 1, foto: 'farinha-trigo', titulo: 'Menos trigo <b>no Brasil.</b>', apoio: 'A Conab prevê produção 26% menor em 2026.' },
    { n: 2, foto: 'paes-grade', titulo: 'O grão subiu <b>perto de 9%.</b>', apoio: 'No Paraná, de agosto a outubro. Conta feita com dados do Cepea.' },
    { n: 3, foto: 'forno', titulo: 'Custo mudou, <b>a conta muda.</b>', apoio: 'O preço de meses atrás pode não cobrir o pão de hoje.' },
  ],
  sol: { tela: 'precificacao', titulo: 'Refaça o preço com o <b>custo de hoje</b>', apoio: 'O Prosystem coloca o custo de operar a loja na conta do preço de venda.' },
  fim: { titulo: 'Quer ver essa conta na <b>sua padaria?</b>', fotos: ['paes-grade', 'carrinho-paes'] },
  kw: 'como calcular o preço do pão francês',
  cap: `Como calcular o preço do pão francês quando o trigo sobe? Comece olhando o custo de hoje, não o de meses atrás.\n\nA Conab prevê 26% menos trigo no Brasil em 2026, e o grão ficou mais caro. Quem entra em 2027 com o preço antigo pode estar vendendo muito e sobrando pouco.\n\nNo Prosystem, o custo de operar a loja entra na conta do preço de venda.\n\nQuer ver isso na sua padaria? ${CTA}`,
  tags: '#padaria #gestaodepadaria #panificacao #precodopao #sistemaparapadaria',
  alts: ['Farinha e espigas de trigo, com o título: o trigo subiu, e o preço do seu pão?', 'Farinha e trigo e o texto: a Conab prevê produção 26% menor em 2026.', 'Pães em uma grade e o texto: o grão subiu perto de 9% no Paraná.', 'Forno aberto e o texto: custo mudou, a conta muda.', 'Tela de precificação do Prosystem, com a composição de custo e as fórmulas do preço de venda.', 'Pães e o convite para ver essa conta na padaria.'],
  conferir: ['A alta de 9% é do grão, não da farinha.', 'Tela pequena e antiga: pedir captura nova à equipe de produto.', 'Produto: a precificação vale sem ajuste na padaria?'] },

{ data: 'Sex 13/11', seg: 'Farmácia', id: 'canetas-emagrecedoras-v2', tipo: 'comTela', tema: 'azul', formato: 'Estático com tela', fundo: 'forte',
  titulo: 'A caneta deve ficar mais barata. <b>E a que você já comprou?</b>', fs: 68, tela: 'dias-sem-giro', faixa: 'O Prosystem mostra há quantos dias cada produto não vende.', pilula: 'Leia a legenda',
  kw: 'canetas emagrecedoras na farmácia',
  cap: `Canetas emagrecedoras na farmácia: com mais opções e genéricos, comprar errado custa caro.\n\nA expectativa do mercado é de alternativas mais baratas nos próximos anos. Produto caro parado na prateleira é dinheiro preso, e o valor dele pode cair.\n\nNo Prosystem, o relatório de dias sem giro mostra o que está parado para você comprar melhor em 2027.\n\n${CTA}`,
  tags: '#gestaodefarmacia #estoque #comprasnafarmacia #sistemaparafarmacia',
  alts: ['Relatório do Prosystem de produtos sem giro, filtrado por dias sem venda, com o título: a caneta deve ficar mais barata, e a que você já comprou?'],
  conferir: ['Só gestão: não falar de emagrecimento, não citar marca nem mostrar aplicação.', 'A queda de preço é expectativa, não fato: manter "deve".'] },

{ data: 'Seg 16/11', seg: 'Padaria', id: 'padaria-pix-caixa-v1', tipo: 'comTela', tema: 'lar', formato: 'Estático com tela', fundo: 'forte',
  titulo: 'O dinheiro saiu da gaveta. <b>Você acompanha?</b>', tela: 'whats-fechamento', faixa: 'Pix, cartão e dinheiro no resumo do caixa. Versão Plus.', pilula: 'Leia a legenda',
  kw: 'programa para padaria',
  cap: `Programa para padaria com caixa: você sabe quanto entrou em Pix, cartão e dinheiro?\n\nDesde outubro, o Pix por aproximação não tem mais o limite próprio de R$ 500. Cada vez menos dinheiro passa pela gaveta, e conferir o dia fica mais difícil. Para entrar em 2027 com o caixa claro, olhe cada forma de pagamento.\n\nNa versão Plus do Prosystem, o resumo do fechamento chega no WhatsApp de quem você escolher, separado por forma de pagamento.\n\nQuer ver na sua padaria? ${CTA}`,
  tags: '#padaria #fechamentodecaixa #pix #sistemaparapadaria',
  alts: ['Resumo do fechamento de caixa do Prosystem com vendas por dinheiro, cartão e Pix, e o título: o dinheiro saiu da gaveta, você acompanha?'],
  conferir: ['Mockup em notebook ou desktop: celular é proibido, mesmo sendo conversa de WhatsApp.', 'Não prometer conciliação de Pix com o banco: ainda não confirmada.'] },

{ data: 'Qua 18/11', seg: 'Farmácia', id: 'farmacia-quem-liberou-desconto-v1', tipo: 'comTela', tema: 'azul', formato: 'Estático com tela', fundo: 'forte',
  titulo: 'Quem liberou <b>esse desconto?</b>', fs: 84, alturaTitulo: 210, tela: 'whats-desconto', faixa: 'Autorizou com login, o aviso chega para você. Versão Plus.', pilula: 'Leia a legenda',
  kw: 'sistema para drogaria',
  cap: `Sistema para drogaria com controle de desconto: você fica sabendo quando alguém libera um desconto?\n\nO desconto vira hábito no balcão, e ninguém mede o efeito no lucro. Para 2027, vale revisar isso desde já, e a Black Friday é um bom teste.\n\nNa versão Plus do Prosystem, a autorização com login pode gerar um aviso no WhatsApp do responsável.\n\n${CTA}`,
  tags: '#sistemaparadrogaria #drogaria #gestaodefarmacia #controledeloja',
  alts: ['Aviso do Prosystem informando um desconto autorizado com login, e o título: quem liberou esse desconto?'],
  conferir: ['Mockup em notebook ou desktop: celular é proibido, mesmo sendo conversa de WhatsApp.'] },

{ data: 'Qui 19/11', seg: 'Padaria', id: 'padaria-escala-6x1-v1', tipo: 'fotoPainel', tema: 'lar', formato: 'Foto com painel', foto: 'sovando-massa',
  titulo: 'Fim da escala 6x1: a hora fica <b>4,8% mais cara.</b>', fs: 74, faixa: 'Em dezembro de 2027, 10%. Conta da Fenacon.', pilula: 'Leia a legenda',
  kw: 'fim da escala 6x1 na padaria',
  cap: 'Fim da escala 6x1 na padaria: em 16 de dezembro, valem duas folgas por semana e 42 horas, sem reduzir salário.\n\nA Fenacon calcula a hora 4,8% mais cara nessa etapa. Em dezembro de 2027 vem a segunda, com 40 horas e hora 10% mais cara. E tudo isso começa em cima do Natal.\n\nRefaça a escala agora, olhando os dias e os horários em que a loja mais vende. Converse com seu contador e seu sindicato.',
  tags: '#escala6x1 #padaria #gestaodepadaria #panificacao',
  alts: ['Padeiro sovando massa, com o texto: fim da escala 6x1, a hora fica 4,8% mais cara.'],
  conferir: ['Data: a Fenacon conta 16/12, parte da imprensa fala em 15/12.', 'Não é consultoria trabalhista: manter a frase do contador e do sindicato.'] },

{ data: 'Seg 23/11', seg: 'Farmácia', id: 'carrossel-farmacia-black-friday-v1', tipo: 'v3', tema: 'azul', formato: 'Carrossel V3', nova: true,
  capa: { foto: 'cartelas-azuis', fs: 104, titulo: 'Black Friday: <b>esse desconto se pagou?</b>' },
  itens: [
    { n: 1, foto: 'cartelas-azuis', titulo: 'Vendeu muito. <b>Sobrou quanto?</b>', apoio: 'Com desconto, o caixa enche e o lucro pode encolher.' },
    { n: 2, foto: 'calculadora', titulo: 'Olhe o lucro, <b>não só a venda.</b>', apoio: 'Faça a conta por grupo de produto.' },
    { n: 3, foto: FOTO_PR, titulo: 'Faça a conta <b>antes de sexta.</b>', apoio: 'A Black Friday é em 27/11. Depois, o desconto já saiu.' },
  ],
  sol: { tela: 'analise-descontos', titulo: 'Teste o desconto <b>antes de dar</b>', apoio: 'A Análise de descontos do Prosystem projeta venda e lucro com outro desconto.' },
  fim: { titulo: 'Quer saber se o seu desconto <b>se paga?</b>', fotos: ['cartelas-detalhe', FOTO_PR] },
  kw: 'desconto na farmácia',
  cap: `Desconto na farmácia na Black Friday: dá para saber se ele se paga antes de dar.\n\nO caixa enche, a loja fica cheia, e só depois vem a pergunta: sobrou quanto? Desconto que vira hábito pesa no lucro o ano inteiro, e 2027 começa logo depois.\n\nNo Prosystem, a Análise de descontos mostra a participação, o desconto médio e o lucro de cada grupo de produto, e projeta a venda e o lucro com outro desconto.\n\n${CTA}`,
  tags: '#blackfriday #gestaodefarmacia #descontos #sistemaparafarmacia',
  alts: ['Cartelas de comprimidos em cartão inclinado, com o título: Black Friday, esse desconto se pagou?', 'Cartelas de comprimidos e o texto: vendeu muito, sobrou quanto?', 'Calculadora em losango e o texto: olhe o lucro, não só a venda.', 'Prateleiras de farmácia desfocadas e o texto: faça a conta antes de sexta.', 'Tela da Análise de descontos do Prosystem, com venda, lucro e desconto por grupo de produto.', 'Fotos de farmácia e o convite para saber se o desconto se paga.'],
  conferir: ['Produto: a Análise de descontos segue com essa tela? Afeta também o artigo de 24/11.', 'Termo "desconto na farmácia" com volume de busca não conferido.'] },

{ data: 'Ter 24/11', seg: 'Farmácia', id: 'carrossel-farmacia-depoimento-v3-5', tipo: 'tatiana5', formato: 'Página 5 da v3 do carrossel da Tatiana', pagina: true },

{ data: 'Qua 25/11', seg: 'Padaria', id: 'padaria-encomendas-natal-v1', tipo: 'padariaFoto', tema: 'lar', formato: 'Padaria com foto', nova: true, foto: 'carrinho-paes', pilula: 'Leia a legenda',
  titulo: 'Encomenda de Natal no caderno. <b>E se faltar?</b>', fs: 90,
  kw: 'encomendas de Natal na padaria',
  cap: 'Encomendas de Natal na padaria: quando tudo fica no caderno, um erro aparece só na hora da retirada.\n\n5 combinados que evitam prejuízo em dezembro:\n\n1. Anote nome e telefone de quem pediu.\n2. Escreva item e quantidade, sem abreviar.\n3. Marque dia e hora da retirada.\n4. Combine um sinal e registre o valor.\n5. Defina até quando aceita pedido, conforme o que a produção dá conta.\n\nE fique atento para 2027: no Simples, o faturamento passa a seguir o documento fiscal, inclusive em venda para entrega futura. Confirme com seu contador.\n\nSalve este post e mostre para quem atende no balcão.',
  tags: '#padaria #encomendasdenatal #gestaodepadaria #panificacao',
  alts: ['Carrinho com prateleiras de pães, com o título: encomenda de Natal no caderno, e se faltar?'],
  conferir: ['Os 5 combinados são orientação nossa, sem fonte externa.', 'Sem ferramenta na peça: "Encomenda" no Prosystem é produto em falta, não pedido de padaria.'] },

{ data: 'Sex 27/11', seg: 'Farmácia', id: 'frase-farmacia-lucro-v1', tipo: 'frase', tema: 'azul', formato: 'Frase de impacto', nova: true,
  titulo: 'Vender mais <b>não é lucrar mais.</b>', apoio: 'Marque quem olha o caixa da farmácia.',
  kw: 'margem de lucro na farmácia',
  cap: 'Margem de lucro na farmácia: na Black Friday, a venda sobe, mas é o que sobra que paga as contas de 2027.\n\nHoje, repare em quanto você está vendendo e em quanto está ficando.\n\nMarque quem olha o caixa da farmácia.',
  tags: '#blackfriday #margemdelucro #gestaodefarmacia #farmacia',
  alts: ['Frase em azul sobre fundo branco: vender mais não é lucrar mais.'],
  conferir: ['Quando o artigo de margem for publicado, citar na legenda que ele está no blog.', 'Termo com volume de busca não conferido.'] },

{ data: 'Seg 30/11', seg: 'Padaria', id: 'padaria-13-salario-v1', tipo: 'fotoPainel', tema: 'lar', formato: 'Foto com painel (o plano pedia estático com tela)', nova: true, foto: 'calculadora',
  titulo: 'O 13º vence hoje. Sua loja deu lucro. <b>Onde está o dinheiro?</b>', fs: 68, faixa: 'Lucro no papel não é dinheiro na conta.', pilula: 'Leia a legenda',
  kw: 'fluxo de caixa da padaria',
  cap: `Fluxo de caixa da padaria: hoje vence a primeira parcela do 13º, e a segunda vai até 18 de dezembro.\n\nTem mês em que o resultado mostra lucro e mesmo assim falta dinheiro na conta. A DRE responde se a loja deu lucro. O fluxo de caixa responde onde o dinheiro está. Para planejar 2027, você precisa dos dois.\n\nNo Prosystem, os lançamentos ficam organizados por plano de contas, com visão de resultado e de caixa.\n\n${CTA}`,
  tags: '#fluxodecaixa #padaria #gestaodepadaria #sistemaparapadaria',
  alts: ['Calculadora e caneta sobre papel, com o texto: o 13º vence hoje, sua loja deu lucro, onde está o dinheiro?'],
  conferir: ['Saiu sem tela: a pasta não tem tela de DRE nem de fluxo de caixa. Pedir captura à equipe de produto, se quiser a versão com tela.', 'Produto: DRE e fluxo de caixa seguem como na base? Vale sem ajuste em padaria?', 'Publicar só em 30/11: o título diz "hoje".'] },

{ data: 'Qua 02/12', seg: 'Farmácia', id: 'farmacia-escala-5x2-v1', tipo: 'fotoPainel', tema: 'azul', formato: 'Foto com painel', nova: true, foto: FOTO_FA,
  titulo: 'Duas folgas a partir de 16/12. <b>Quem fica no balcão?</b>', fs: 72, faixa: 'Sem reduzir salário, e com o farmacêutico na escala.', pilula: 'Leia a legenda',
  kw: 'escala 5x2 na farmácia',
  cap: 'Escala 5x2 na farmácia: a partir de 16 de dezembro, valem duas folgas por semana e 42 horas, sem reduzir salário.\n\nA farmácia abre muitas horas, e a escala do farmacêutico costuma ser o ponto mais apertado. Em dezembro de 2027 vem a segunda etapa, com 40 horas.\n\nRefaça a escala agora, olhando os dias e os horários de maior movimento. Converse com seu contador e seu sindicato.',
  tags: '#escala5x2 #farmacia #gestaodefarmacia #fimdaescala6x1',
  alts: ['Farmacêutica pegando um produto na prateleira, com o texto: duas folgas a partir de 16/12, quem fica no balcão?'],
  conferir: ['Data: a Fenacon conta 16/12, parte da imprensa fala em 15/12.', 'Produto: com relatório de vendas por hora, esta peça ganha tela.', '"Ponto mais apertado" é inferência nossa, sem posição de Abrafarma ou Febrafar.'] },

{ data: 'Sex 04/12', seg: 'Padaria', id: 'carrossel-padaria-sangria-v2', tipo: 'v2', tema: 'lar', formato: 'Carrossel V2',
  capa: { foto: 'paes-prateleira', tela: 'sangria-bloqueio', titulo: 'Quanto dinheiro tem na sua <b>gaveta agora?</b>', apoio: 'Sangria que depende de memória falha.' },
  itens: [
    { foto: 'paes-prateleira', tela: 'sangria-aviso', titulo: 'Chegou no valor, o caixa <b>avisa.</b>', apoio: 'Exemplo: a partir de R$ 600 em dinheiro. A venda continua.' },
    { foto: 'paes-grade', tela: 'sangria-bloqueio', titulo: 'Passou do limite, o caixa <b>trava.</b>', apoio: 'Exemplo: em R$ 900, só volta a vender depois da sangria.' },
    { foto: 'calculadora', tela: 'sangria-registro', titulo: 'Toda retirada fica <b>registrada.</b>', apoio: 'Valor e motivo, prontos para conferir no fechamento.' },
  ],
  sol: { foto: 'carrinho-paes', tela: 'sangria-aviso', titulo: 'Sangria com regra, sem depender da memória', apoio: 'Menos dinheiro exposto na gaveta e um fechamento mais fácil de conferir.' },
  fim: { foto: 'paes-prateleira', tela: 'sangria-registro', titulo: 'Quer esse controle no caixa da <b>sua padaria?</b>' },
  kw: 'sangria de caixa',
  cap: `Sangria de caixa na padaria: com café da manhã cheio e fila no caixa, ela fica para depois até alguém lembrar. E dezembro é o mês de mais movimento antes de 2027.\n\nNo Prosystem, você define dois valores: em um, o caixa avisa; no outro, ele só volta a vender depois da sangria. Cada retirada fica registrada para conferir no fechamento.\n\nQuer esse controle na sua padaria? ${CTA}`,
  tags: '#sangriadecaixa #padaria #controledecaixa #sistemaparapadaria',
  alts: ['Aviso de caixa bloqueado sobre pães em uma prateleira, com o título: quanto dinheiro tem na sua gaveta agora?', 'Aviso do Prosystem pedindo a sangria programada e o texto: chegou no valor, o caixa avisa.', 'Aviso de caixa bloqueado e o texto: passou do limite, o caixa trava.', 'Tela de registro de sangria do Prosystem e o texto: toda retirada fica registrada.', 'Aviso de sangria sobre um carrinho de pães e o texto: sangria com regra, sem depender da memória.', 'Tela de registro de sangria e o convite para ter esse controle na padaria.'],
  conferir: ['Produto: a função vale sem ajuste na padaria?', 'A tela de registro tem "centro de custo" e um lançamento de gasolina: conferir no mockup.'] },

{ data: 'Seg 07/12', seg: 'Farmácia', id: 'carrossel-farmacia-popular-v1', tipo: 'v2', tema: 'azul', formato: 'Carrossel V2',
  capa: { foto: FOTO_PR, tela: 'receitas-scanner', titulo: 'Farmácia Popular: multa de <b>até 20%.</b>', apoio: 'As regras mudaram em agosto.' },
  itens: [
    { foto: FOTO_PR, titulo: 'A fiscalização ficou <b>automática.</b>', apoio: 'O monitoramento separa por risco e pode suspender a farmácia antes.' },
    { foto: 'calculadora', titulo: 'A multa <b>cresceu.</b>', apoio: 'O teto era 10% sobre 3 meses. Agora é 20%, e a base pode ser de 12 meses.' },
    { foto: 'maos-teclado-mesa', titulo: 'Guarde por <b>5 anos.</b>', apoio: 'De preferência em meio digital. Antes eram 10 anos.' },
  ],
  sol: { foto: FOTO_PR, tela: 'receitas-scanner', titulo: 'Receita guardada, sem pilha de caixa', apoio: 'O Prosystem digitaliza as receitas do programa e guarda em mídia externa ou nuvem.' },
  fim: { foto: FOTO_PR, tela: 'receitas-scanner', titulo: 'Quer organizar isso na <b>sua farmácia?</b>' },
  kw: 'Farmácia Popular',
  cap: `Farmácia Popular: novas regras, multa maior e fiscalização automática. Sua farmácia está preparada para 2027?\n\nA portaria de agosto subiu a multa máxima para 20%, e a base pode ser a venda dos últimos 12 meses. Os documentos agora ficam guardados por 5 anos, de preferência em meio digital.\n\nNo Prosystem, o scanner de receitas digitaliza o que você precisa guardar.\n\n${CTA}`,
  tags: '#farmaciapopular #farmacia #gestaodefarmacia #sistemaparafarmacia',
  alts: ['Tela do scanner de receitas do Prosystem sobre prateleiras de farmácia, com o título: Farmácia Popular, multa de até 20%.', 'Prateleiras de farmácia e o texto: a fiscalização ficou automática.', 'Calculadora e o texto: a multa cresceu, de 10% para 20%.', 'Mãos digitando em um teclado e o texto: guarde por 5 anos, de preferência em meio digital.', 'Tela do scanner de receitas e o texto: receita guardada, sem pilha de caixa.', 'Tela do scanner de receitas e o convite para organizar isso na farmácia.'],
  conferir: ['Produto: o scanner atende a portaria nova? O artigo da base é antigo.', 'Conferir a portaria no Diário Oficial: uma fonte cita republicação em 24/09.'] },

{ data: 'Qua 09/12', seg: 'Padaria', id: 'padaria-combos-v1', tipo: 'comTela', tema: 'lar', formato: 'Estático com tela', fundo: 'forte', nova: true,
  titulo: 'Leve 3, pague 2 <b>sem calculadora no caixa</b>', fs: 78, alturaTitulo: 230, foto: 'paes-grade', tela: 'combo-totais', faixa: 'Cadastre o combo uma vez. O desconto entra na venda.', pilula: 'Leia a legenda',
  kw: 'sistema para padaria',
  cap: `Sistema para padaria com PDV: promoção feita de cabeça no caixa vira erro e desconto indevido, ainda mais com kit de Natal.\n\nNo Prosystem, você cadastra leve e pague, desconto progressivo e kits. Na venda, o caixa não precisa fazer conta. Vale começar agora e levar o costume para 2027.\n\n${CTA}`,
  tags: '#sistemaparapadaria #padaria #kitsdenatal #gestaodepadaria',
  alts: ['Pães em uma grade e os totais da venda com desconto no Prosystem, com o título: leve 3, pague 2 sem calculadora no caixa.'],
  conferir: ['Produto: combos valem sem ajuste na padaria?', 'As telas da base têm marca de produto e imagem de farmácia. Só os totais foram usados: pedir captura de combo com itens de padaria.'] },

{ data: 'Sex 11/12', seg: 'Farmácia', id: 'carrossel-farmacia-uso-continuo-v2', tipo: 'v2', tema: 'azul', formato: 'Carrossel V2',
  capa: { foto: FOTO_PR, tela: 'uso-continuo-alerta', titulo: 'O remédio do seu cliente acaba em <b>8 dias.</b>', apoio: 'Quem vai lembrar dele primeiro?' },
  itens: [
    { foto: FOTO_PR, tela: 'uso-continuo-proxima-compra', titulo: 'Na venda, o sistema <b>marca a data.</b>', apoio: 'Você informa como o cliente toma o remédio. O Prosystem calcula a próxima compra.' },
    { foto: FOTO_FA, tela: 'uso-continuo-alerta', titulo: 'Ele volta, e o balcão <b>é avisado.</b>', apoio: 'O alerta aparece nos 9 dias antes de o remédio acabar.' },
    { foto: 'calculadora', tela: 'uso-continuo-relatorio', titulo: 'Quem deve comprar vira <b>lista.</b>', apoio: 'Relatório por período. Contato só com autorização do cliente.' },
  ],
  sol: { foto: FOTO_FA, tela: 'uso-continuo-alerta', titulo: 'Lembre antes da outra farmácia', apoio: '13% já compram em farmácia pelo WhatsApp, segundo pesquisa IFEPEC, Axxus e Unicamp.' },
  fim: { foto: FOTO_PR, tela: 'uso-continuo-alerta', titulo: 'Quer ver o uso contínuo na <b>sua farmácia?</b>' },
  kw: 'uso contínuo na farmácia',
  cap: `Cliente de uso contínuo na farmácia: quem lembra primeiro, vende, em 2027 também.\n\nEle raramente avisa que vai comprar. Se ninguém lembrar da reposição, a compra pode ir para outra farmácia, e 13% já compram pelo WhatsApp.\n\nNo sistema Prosystem, como o cliente toma o remédio vira a data da próxima compra. Nos 9 dias antes de acabar, o balcão recebe o alerta, e um relatório mostra quem deve comprar em cada período.\n\n${CTA}`,
  tags: '#usocontinuo #farmacia #fidelizacao #sistemaparafarmacia',
  alts: ['Alerta do Prosystem de que a medicação do cliente está para acabar, com o título: o remédio do seu cliente acaba em 8 dias.', 'Tela de próxima compra do Prosystem e o texto: na venda, o sistema marca a data.', 'Alerta no balcão e o texto: ele volta, e o balcão é avisado.', 'Relatório de clientes de uso contínuo e o texto: quem deve comprar vira lista.', 'Alerta do Prosystem e o texto: lembre antes da outra farmácia, 13% já compram pelo WhatsApp.', 'Alerta do Prosystem e o convite para ver o uso contínuo na farmácia.'],
  conferir: ['O contato com o cliente envolve dado de saúde: manter a menção à autorização e à LGPD.', 'A tela de próxima compra tem "Posologia" e contorno vermelho original da base.'] },

{ data: 'Seg 14/12', seg: 'Padaria', id: 'padaria-fechamento-caixa-v1', tipo: 'comTela', tema: 'lar', formato: 'Estático com tela', fundo: 'forte',
  titulo: 'Fechou o caixa. Faltou dinheiro. <b>E agora?</b>', tela: 'fechamento-caixa', faixa: 'O que foi informado e o que foi vendido, lado a lado.', pilula: 'Leia a legenda',
  kw: 'sistema para padaria',
  cap: `Sistema para padaria com fechamento de caixa: quando falta dinheiro, você precisa saber onde olhar.\n\nNo Prosystem, o fechamento mostra o que foi informado e o que foi vendido em cada forma de pagamento. A diferença aparece na tela, sem refazer a conta na calculadora.\n\nEntre em 2027 com o caixa conferido todo dia. ${CTA}`,
  tags: '#sistemaparapadaria #fechamentodecaixa #padaria #gestaodepadaria',
  alts: ['Tela de fechamento de caixa do Prosystem com valores informados e vendidos por forma de pagamento, e o título: fechou o caixa, faltou dinheiro, e agora?'],
  conferir: ['Tela de 2021, sem linha de Pix: pedir captura atual à equipe de produto.'] },

{ data: 'Qua 16/12', seg: 'Os dois', id: 'frase-escala-hoje-v1', tipo: 'frase', tema: 'azul', formato: 'Frase de impacto', nova: true,
  titulo: 'Hoje a escala mudou. <b>A sua já mudou?</b>', apoio: 'Duas folgas e 42 horas a partir de hoje.',
  kw: 'fim da escala 6x1',
  cap: 'Fim da escala 6x1: a partir de hoje, valem duas folgas por semana e 42 horas, sem reduzir salário.\n\nE não para aqui. Em dezembro de 2027 vem a segunda etapa, com 40 horas.\n\nSe a sua escala ainda não mudou, converse hoje com seu contador e seu sindicato. Marque quem cuida da escala na sua loja.',
  tags: '#fimdaescala6x1 #escala5x2 #gestaodeloja #prosystem',
  alts: ['Frase em azul sobre fundo branco: hoje a escala mudou, a sua já mudou?'],
  conferir: ['Data: a Fenacon conta 16/12, parte da imprensa fala em 15/12. Se for 15/12, o "hoje" muda.', 'Saiu em azul: peça para os dois segmentos segue o padrão do feed.'] },

{ data: 'Sex 18/12', seg: 'Padaria', id: 'padaria-curva-abc-v1', tipo: 'comTela', tema: 'lar', formato: 'Estático com tela', fundo: 'forte',
  titulo: 'Mais padarias em 2027. <b>O que sustenta a sua?</b>', tela: 'curva-abc', faixa: 'A curva ABC mostra os produtos que mais pesam no seu resultado.', pilula: 'Leia a legenda',
  kw: 'como aumentar as vendas na padaria',
  cap: `Como aumentar as vendas na padaria em 2027, com mais concorrência e menos gente entrando?\n\nDe janeiro a setembro de 2026, abriram 81.437 pequenos negócios de panificação no Brasil, segundo o Sebrae. E um levantamento do setor mostrou fluxo 2,31% menor, com valor médio de cada compra 5,75% maior.\n\nCom menos gente na porta, cada venda conta mais. A curva ABC do Prosystem separa os produtos que sustentam a loja dos que quase não vendem.\n\n${CTA}`,
  tags: '#padaria #gestaodepadaria #vendasnapadaria #sistemaparapadaria',
  alts: ['Tela da curva ABC do Prosystem, que separa os produtos por valor e quantidade, com o título: mais padarias em 2027, o que sustenta a sua?'],
  conferir: ['Tela de configuração, pouco vendedora: pedir uma com o resultado, sem nomes de remédio.', 'Os números do setor vêm de reportagem; o encarte oficial da ABIP não foi lido.'] },

{ data: 'Seg 21/12', seg: 'Farmácia', id: 'frase-farmacia-receita-v1', tipo: 'frase', tema: 'azul', formato: 'Frase de impacto',
  titulo: 'Foto de receita <b>não é receita eletrônica.</b>', apoio: 'Marque quem atende no balcão.',
  kw: 'receita eletrônica na farmácia',
  cap: 'Receita eletrônica na farmácia: foto, digitalização ou PDF feito a partir do papel não vale como receita eletrônica.\n\nE tem mais uma dúvida comum. O SNCR não substitui o SNGPC: um cuida do número e do uso da receita, o outro segue na escrituração. A transição do SNCR vai até 3 de março de 2027.\n\nMarque quem atende no balcão.',
  tags: '#receitaeletronica #sncr #sngpc #farmacia',
  alts: ['Frase em azul sobre fundo branco: foto de receita não é receita eletrônica.'],
  conferir: [] },

{ data: 'Qua 23/12', seg: 'Padaria', id: 'frase-padaria-sobra-v1', tipo: 'frase', tema: 'lar', formato: 'Frase de impacto',
  titulo: 'Pão que sobra também é <b>prejuízo.</b>', apoio: 'Marque o dono da padaria.',
  kw: 'sobra de pão na padaria',
  cap: 'Sobra de pão na padaria é dinheiro que foi para o lixo. Quanto sobrou ontem na sua?\n\nDepois do Natal, vale olhar esse número com calma e entrar em 2027 sabendo quanto produzir.\n\nMarque o dono da padaria.',
  tags: '#padaria #gestaodepadaria #panificacao',
  alts: ['Frase em laranja sobre fundo branco: pão que sobra também é prejuízo.'],
  conferir: ['O termo "sobra de pão" não veio das sugestões do Google: conferir o volume.'] },

{ data: 'Sex 25/12', seg: 'Os dois', id: 'frase-natal-v1', tipo: 'frase', tema: 'azul', formato: 'Frase de impacto', nova: true, fs: 84,
  titulo: 'Feliz Natal a quem trabalha para <b>o Natal dos outros dar certo.</b>', apoio: 'ProSystem Sistemas',
  kw: '', semAno: true,
  cap: 'Tem quem passa a véspera de Natal atrás do balcão, atendendo a última receita ou entregando a última encomenda.\n\nA vocês, que trabalham para o Natal dos outros dar certo, o nosso obrigado e um Feliz Natal.',
  tags: '#feliznatal #farmacia #padaria',
  alts: ['Frase em azul sobre fundo branco: Feliz Natal a quem trabalha para o Natal dos outros dar certo. Assinado ProSystem Sistemas.'],
  conferir: [] },

{ data: 'Seg 28/12', seg: 'Farmácia', id: 'farmacia-cbs-v1', tipo: 'comTela', tema: 'azul', formato: 'Estático com tela', fundo: 'forte', nova: true,
  titulo: 'A CBS de 2027 saiu. <b>Você já refez a conta?</b>', fs: 76, tela: 'precificacao', faixa: 'Custo e fórmula de preço na mesma tela do Prosystem.', pilula: 'Leia a legenda',
  kw: 'reforma tributária na farmácia',
  cap: `Reforma tributária na farmácia em 2027: a taxa da CBS está definida em [CONFIRMAR A TAXA E A FONTE NO DIA], e ela vale em 1º de janeiro.\n\nSe o preço da sua loja foi feito com o imposto antigo, essa é a semana de sentar com o contador e refazer a conta. Remédio registrado tem regra própria, com corte de 60%.\n\nNa Precificação do Prosystem, a composição de custo e a fórmula de preço ficam na mesma tela.\n\n${CTA}`,
  tags: '#reformatributaria #cbs #gestaodefarmacia #sistemaparafarmacia',
  alts: ['Tela de precificação do Prosystem com as fórmulas do preço de venda, e o título: a CBS de 2027 saiu, você já refez a conta?'],
  conferir: ['Só publicar depois de o Senado fixar a taxa, ou de confirmar que os 11,3% valeram. Preencher o trecho entre colchetes da legenda.', 'A tela cita ICMS_ST e é pequena e antiga: pedir captura nova.'] },

{ data: 'Qua 30/12', seg: 'Padaria', id: 'padaria-simples-nota-v1', tipo: 'fotoPainel', tema: 'lar', formato: 'Foto com painel', nova: true, foto: 'embalagem-papel',
  titulo: 'Sua padaria é do Simples? <b>Em 1º de janeiro, a nota muda.</b>', fs: 70, faixa: 'Fale com seu contador antes de virar o ano.', pilula: 'Leia a legenda',
  kw: 'nota fiscal da padaria no Simples',
  cap: 'Nota fiscal da padaria no Simples em 2027: a partir de 1º de janeiro, os documentos seguem as regras novas de IBS e CBS.\n\nE tem outra mudança: o faturamento do Simples passa a seguir o documento fiscal, inclusive em venda para entrega futura, como encomenda.\n\nAntes de virar o ano, confirme com seu contador como isso funciona na sua padaria.',
  tags: '#simplesnacional #padaria #reformatributaria #notafiscal',
  alts: ['Pães em embalagem de papel, com o texto: sua padaria é do Simples? Em 1º de janeiro, a nota muda.'],
  conferir: ['Produto: o que já está pronto para o Simples em 2027? A peça não promete função.', 'As regras vêm de escritório de advocacia e da Receita: reconferir em dezembro.'] },

{ data: 'Qui 31/12', seg: 'Farmácia', id: 'farmacia-mercado-2027-v1', tipo: 'comTela', tema: 'azul', formato: 'Estático com tela', fundo: 'bra',
  titulo: 'O mercado cresce em 2027. <b>E a sua farmácia?</b>', tela: 'painel-vendas', faixa: 'Vendas, lucro médio e desconto no mesmo painel. Plano Plus.', pilula: 'Leia a legenda',
  kw: 'sistema para farmácia e drogaria',
  cap: `Sistema para farmácia e drogaria: você consegue ver em 30 segundos se a sua loja cresceu?\n\nO Close-Up projeta para 2027 um ritmo parecido com o de 2026, perto de 13% em valor. Só que, em 2025, as farmácias independentes fecharam mais lojas do que abriram: foram 1.096 a menos.\n\nNo plano Plus do Prosystem, o painel mostra vendas, lucro médio, desconto e valor médio de cada compra por período.\n\n${CTA}`,
  tags: '#sistemaparafarmacia #drogaria #gestaodefarmacia #farmaciaindependente',
  alts: ['Painel do Prosystem com total de vendas, lucro médio, desconto e gráfico de evolução, e o título: o mercado cresce em 2027, e a sua farmácia?'],
  conferir: ['Saldo de 1.096 lojas: abrir a fonte original (IQVIA ou Febrafar) antes de publicar.', 'A tela cita "Drogaria Modelo": só em peça de farmácia.'] },
];

// Peças prontas de outras produções: só a legenda é nova.
const PRONTAS = [
  { data: 'Seg 09/11', seg: 'Farmácia', arq: 'outputs/criativos/suporte/carrossel-farmacia-suporte-v3-<página>.png', formato: 'Carrossel V2', nota: 'Legenda e texto alternativo em `outputs/criativos/suporte/legendas.md`.' },
  { data: 'Ter 10/11', seg: 'Farmácia', arq: 'outputs/criativos/depoimentos/depoimento-krisley-v2.png', formato: 'Depoimento', kw: 'sistema para farmácia',
    cap: `Sistema para farmácia é escolha de muitos anos. Quase 15 anos de empresa, duas farmácias e o mesmo sistema. Obrigado pela confiança, Krisley.\n\nEstá revendo o sistema da sua farmácia para 2027? ${CTA}`,
    tags: '#sistemaparafarmacia #depoimento #gestaodefarmacia #prosystem', alt: 'Depoimento de Krisley Kretli de Oliveira, dona de duas farmácias, com avaliação de cinco estrelas no Google.' },
  { data: 'Ter 24/11', seg: 'Farmácia', arq: 'outputs/criativos/depoimentos/carrossel-farmacia-depoimento-v3-<página>.png', formato: 'Carrossel V3 de depoimento', kw: 'sistema para farmácia e drogaria', nota: 'A v2 tinha, na página 5, um mockup reprovado. Use a v3: a página 5 leva a foto de uma atendente de banco de imagens, e as outras são iguais às da v2.',
    cap: `Sistema para farmácia e drogaria: trocar dá receio. A Tatiana, da Farmácia Pharmavida, contou no Google como foi o antes e o depois. Obrigado, Tatiana.\n\nQuer esse suporte na sua farmácia em 2027? ${CTA}`,
    tags: '#sistemaparafarmacia #drogaria #depoimento #prosystem',
    alt: '1. Cartelas de comprimidos e o título: seu sistema dá mais problema do que solução? 2. Calculadora e a citação de antes: um sistema que nos gerava muitos problemas. 3. Prateleiras em losango e a citação: mais organização, praticidade e segurança. 4. Farmacêutica e a citação sobre o suporte. 5. Atendente sorrindo, de fone, e o agradecimento de Tatiana Souza, da Farmácia Pharmavida. 6. Fotos de farmácia e o convite para falar com um especialista.' },
  { data: 'Ter 08/12', seg: 'Os dois', arq: 'outputs/criativos/depoimentos/depoimento-samuel-v2.png', formato: 'Depoimento', kw: 'suporte de sistema para loja',
    cap: `Suporte de sistema para loja não pode sumir no fim de semana. O nosso é humanizado, com especialistas técnicos, das 7h às 22h, inclusive sábado e domingo. Obrigado, Samuel.\n\nEstá escolhendo o sistema da sua loja para 2027? Pergunte quem atende no domingo. ${CTA}`,
    tags: '#suporte #depoimento #sistemaparafarmacia #sistemaparapadaria', alt: 'Depoimento de Samuel Ferreira, cliente ProSystem, sobre o suporte de sábado e domingo, com avaliação de cinco estrelas no Google.' },
  { data: 'Ter 22/12', seg: 'Os dois', arq: 'outputs/criativos/depoimentos/depoimento-rodrigo-v2.png', formato: 'Depoimento', kw: 'sistema para farmácia e padaria', nota: 'O segmento de Rodrigo não está confirmado; por isso a legenda fala dos dois.',
    cap: `Sistema para farmácia e padaria se mede com o tempo. Treze anos juntos, e depoimentos assim são o nosso melhor argumento. Obrigado, Rodrigo.\n\nEm 2027, a ProSystem segue ao lado de mais de 600 clientes. ${CTA}`,
    tags: '#sistemaparafarmacia #sistemaparapadaria #depoimento #prosystem', alt: 'Depoimento de Rodrigo Amancio, cliente ProSystem: trabalho com eles há 13 anos e não pretendo mudar. Avaliação de cinco estrelas no Google.' },
];

function legendas(usadas) {
  const ordem = (d) => d.data.slice(7, 9) + d.data.slice(4, 6);
  const todas = [...P.filter((p) => !p.pagina), ...PRONTAS].sort((a, b) => ordem(a).localeCompare(ordem(b)));
  const telaDe = (p) => [p.tela, p.capa && p.capa.tela, p.sol && p.sol.tela, p.fim && p.fim.tela, ...(p.itens || []).map((i) => i.tela)].filter(Boolean);
  const fs = require('fs'); const path = require('path');
  const faltam = (p) => [...new Set(telaDe(p))].filter((t) => !fs.existsSync(path.join(__dirname, 'mockups', t + '.png')));
  let s = '# Peças de 04/11 a 31/12/2026: legendas, texto alternativo e o que falta\n\nArquivo gerado por `gerar.js`. Para mudar um texto, altere `pecas-dados.js` e gere de novo. As imagens ficam em `pecas/`, exceto as de outras produções, que têm o caminho indicado.\n\n**Nada aqui foi publicado.** Enquanto houver mockup em falta, a peça mostra a tela em um cartão provisório e não deve ser publicada.\n\n## Calendário\n\n| Data | Para quem | Peça | Formato | Mockup em falta |\n|---|---|---|---|---|\n';
  for (const p of todas) {
    const m = p.arq ? [] : faltam(p);
    s += `| ${p.data} | ${p.seg} | \`${p.arq ? p.arq.split('/').pop() : p.id}\` | ${p.formato} | ${m.length ? m.map((x) => '`' + x + '`').join(', ') : '-'} |\n`;
  }
  const mapa = {};
  for (const p of P) for (const t of faltam(p)) (mapa[t] = mapa[t] || []).push(p.data);
  s += '\n## Mockups que a Jessica precisa fazer\n\nSó em notebook ou desktop, em balcão do segmento ou escritório. Salve em `mockups/<nome da tela>.png`, com fundo transparente, e rode `gerar.js`: o mockup entra no lugar do cartão. Os originais estão em `banco imagens/telas-para-mockup/00-recortadas/`; `analise-descontos` e `combo-totais` estão em `telas/`.\n\n| Tela | Datas |\n|---|---|\n';
  for (const t of Object.keys(mapa).sort((a, b) => ordem({ data: mapa[a][0] }).localeCompare(ordem({ data: mapa[b][0] })))) s += `| \`${t}\` | ${[...new Set(mapa[t])].join(', ')} |\n`;
  s += '\n## Legendas\n';
  for (const p of todas) {
    s += `\n### ${p.data}: ${p.arq ? p.arq.split('/').pop() : p.id}\n\n`;
    if (p.nota) s += `*${p.nota}*\n\n`;
    if (p.cap) s += `${p.cap}\n\n${p.tags}\n\n`;
    if (p.alts) s += p.alts.length > 1 ? `**Texto alternativo:**\n\n${p.alts.map((a, i) => `${i + 1}. ${a}`).join('\n')}\n\n` : `**Texto alternativo:** ${p.alts[0]}\n\n`;
    if (p.alt) s += `**Texto alternativo:** ${p.alt}\n\n`;
    if (p.conferir && p.conferir.length) s += `**Conferir antes de publicar:**\n\n${p.conferir.map((c) => `- ${c}`).join('\n')}\n\n`;
  }
  return s.trimEnd() + '\n';
}

module.exports = { P, PRONTAS, legendas };
