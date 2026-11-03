// Textos, legendas e SEO das peças de 04/11/2026 a 31/01/2027. A ordem do calendário vem da data.
// Pautas com origem no feed simulado: docs/conteudo-prosystem/feed_modelo.html. Pautas novas: escritas nesta produção.
const FOTO_PR = 'prateleiras-desfocadas';
const FOTO_FA = 'farmaceutica-recorte';
const CTA = 'Fale com um especialista pelo link da bio.';

const P = [
{ data: 'Qua 04/11', seg: 'Farmácia', id: 'carrossel-farmacia-reforma-tributaria-v1', travada: true, semMockup: true, tipo: 'v2', tema: 'azul', formato: 'Carrossel V2',
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
  conferir: ['Taxa da CBS: 11,3% é cálculo do TCU; o Senado decide até dezembro. A peça não cita o número.', 'Não prometer economia nem crédito de estoque.', 'A tela mostra "Drogaria Modelo" com um CNPJ, embora o LEIA-ME das telas diga que os CNPJs estão cobertos. O dado é fictício; cubra no mockup.'] },

{ data: 'Sex 06/11', seg: 'Padaria', id: 'carrossel-padaria-reforma-tributaria-v2', travada: true, tipo: 'v3', tema: 'lar', formato: 'Carrossel V3',
  capa: { foto: 'paes-grade', fs: 96, titulo: 'Em 2027, o pão francês zera o imposto. <b>E o resto do cupom?</b>' },
  itens: [
    { n: 1, foto: 'paes-grade', titulo: 'Pão francês: <b>zero.</b>', apoio: 'A lei zera os impostos novos, CBS e IBS, para o pão francês.' },
    { n: 2, foto: 'maos-massa', titulo: 'Feito na loja: <b>regra própria.</b>', apoio: 'O regulamento cita padarias, com desconto de 40% no que é preparado ali.' },
    { n: 3, foto: 'paes-prateleira-sem-etiqueta', titulo: 'Revenda: <b>fora do desconto.</b>', apoio: 'Refrigerante e produto comprado pronto não entram, segundo parecer jurídico.' },
  ],
  sol: { foto: 'carrinho-paes', titulo: 'Cada produto precisa estar <b>bem cadastrado</b>', apoio: 'No Simples, a conta é diferente. Confirme com seu contador.' },
  fim: { titulo: 'Quer deixar a <b>sua padaria</b> pronta para 2027?', fotos: ['paes-prateleira-sem-etiqueta', 'forno'] },
  kw: 'reforma tributária nas padarias',
  cap: `Reforma tributária nas padarias: em 2027, um cupom pode ter várias regras.\n\nO pão francês fica com imposto novo zero. O que é preparado na loja tem regime próprio. Refrigerante revendido fica de fora. Para a padaria, o cadastro de cada produto passa a valer dinheiro.\n\nSe você está no Simples, a conta é diferente: confirme com seu contador.\n\n${CTA}`,
  tags: '#reformatributaria #padaria #panificacao #sistemaparapadaria',
  alts: ['Pães em uma grade, com o título: em 2027, o pão francês zera o imposto, e o resto do cupom?', 'Pães em uma grade e o texto: pão francês, zero.', 'Mãos segurando massa e o texto: feito na loja, regra própria.', 'Pães em uma prateleira e o texto: revenda fora do desconto.', 'Carrinho com pães e o texto: cada produto precisa estar bem cadastrado.', 'Pães e forno, com o convite para deixar a padaria pronta para 2027.'],
  conferir: ['Produto: o que já está pronto para padaria e para o Simples em 2027?', 'A regra dos 40% veio de parecer jurídico; os artigos não foram lidos no Planalto.'] },

{ data: 'Qua 11/11', seg: 'Padaria', id: 'carrossel-padaria-trigo-v1', travada: true, semMockup: true, tipo: 'v3', tema: 'lar', formato: 'Carrossel V3',
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

{ data: 'Sex 13/11', seg: 'Farmácia', id: 'canetas-emagrecedoras-v2', travada: true, semMockup: true, tipo: 'comTela', tema: 'azul', formato: 'Estático com tela', fundo: 'forte',
  titulo: 'A caneta de semaglutida deve ficar mais barata. <b>E a que está parada no seu estoque?</b>', fs: 64, tela: 'dias-sem-giro', fotoCima: 'caneta-branca', faixa: 'Veja no Prosystem quais produtos não vendem há 30 dias e decida antes de o preço cair.', pilula: 'Leia a legenda',
  kw: 'canetas emagrecedoras na farmácia',
  cap: `Canetas emagrecedoras na farmácia: com mais opções e genéricos, comprar errado custa caro.\n\nA expectativa do mercado é de alternativas mais baratas nos próximos anos. Produto caro parado na prateleira é dinheiro preso, e o valor dele pode cair.\n\nNo Prosystem, o relatório de dias sem giro mostra o que está parado para você comprar melhor em 2027.\n\n${CTA}`,
  tags: '#gestaodefarmacia #estoque #comprasnafarmacia #sistemaparafarmacia',
  alts: ['Caneta de aplicação branca, sem marca, e o relatório do Prosystem de produtos sem giro, filtrado por 30 dias sem venda, com o título: a caneta de semaglutida deve ficar mais barata, e a que está parada no seu estoque?'],
  conferir: ['Só gestão: não falar de emagrecimento, não citar marca nem mostrar aplicação.', 'A queda de preço é expectativa, não fato: manter "deve".'] },

{ data: 'Seg 16/11', seg: 'Padaria', id: 'padaria-pix-caixa-v1', travada: true, semMockup: true, tipo: 'comTela', tema: 'lar', formato: 'Estático com tela', fundo: 'forte',
  titulo: 'Feche o caixa sabendo <b>para onde foi cada real.</b>', fs: 70, alturaTitulo: 210, tela: 'whats-fechamento-v2', faixa: 'Vendas, sangrias e cada forma de pagamento num resumo só. Versão Plus.', pilula: 'Fale com um especialista',
  kw: 'programa para padaria',
  cap: `Programa para padaria com caixa: você sabe quanto entrou em Pix, cartão e dinheiro?\n\nDesde outubro, o Pix por aproximação não tem mais o limite próprio de R$ 500. Cada vez menos dinheiro passa pela gaveta, e conferir o dia fica mais difícil. Para entrar em 2027 com o caixa claro, olhe cada forma de pagamento.\n\nNa versão Plus do Prosystem, o resumo do fechamento chega no WhatsApp de quem você escolher, separado por forma de pagamento.\n\nQuer ver na sua padaria? ${CTA}`,
  tags: '#padaria #fechamentodecaixa #pix #sistemaparapadaria',
  alts: ['Resumo do fechamento de caixa do Prosystem com a sangria e as vendas em dinheiro, cartão, convênio e Pix marcadas, e o título: feche o caixa sabendo para onde foi cada real.'],
  conferir: ['Aprovada sem mockup pela Jessica em 03/11/2026: a tela entra no cartão, como está.', 'A tela foi refeita em 03/11/2026 (tela-fechamento.js): sem os sublinhados do WhatsApp, data de 2026 e valores fictícios que fecham (venda líquida = total de pagamentos).', 'Não prometer conciliação de Pix com o banco: ainda não confirmada.'] },

{ data: 'Qua 18/11', seg: 'Farmácia', id: 'farmacia-quem-liberou-desconto-v1', travada: true, semMockup: true, tipo: 'comTela', tema: 'azul', formato: 'Estático com tela', fundo: 'forte',
  titulo: 'Quem liberou <b>esse desconto?</b>', fs: 84, alturaTitulo: 210, tela: 'whats-desconto', faixa: 'Autorizou com login, o aviso chega para você. Versão Plus.', pilula: 'Leia a legenda',
  kw: 'sistema para drogaria',
  cap: `Sistema para drogaria com controle de desconto: você fica sabendo quando alguém libera um desconto?\n\nO desconto vira hábito no balcão, e ninguém mede o efeito no lucro. Para 2027, vale revisar isso desde já, e a Black Friday é um bom teste.\n\nNa versão Plus do Prosystem, a autorização com login pode gerar um aviso no WhatsApp do responsável.\n\n${CTA}`,
  tags: '#sistemaparadrogaria #drogaria #gestaodefarmacia #controledeloja',
  alts: ['Aviso do Prosystem informando um desconto autorizado com login, e o título: quem liberou esse desconto?'],
  conferir: ['Mockup em notebook ou desktop: celular é proibido, mesmo sendo conversa de WhatsApp.'] },

{ data: 'Qui 19/11', seg: 'Padaria', id: 'padaria-escala-6x1-v1', travada: true, semMockup: true, tipo: 'comTela', tema: 'lar', formato: 'Estático com tela', fundo: 'forte', foto: 'sovando-massa',
  titulo: 'Fim da escala 6x1: menos horas de equipe. <b>Use cada uma onde a padaria mais vende.</b>', fs: 62, alturaTitulo: 230, tela: 'painel-vendas-totais', faixa: 'No painel do Prosystem, veja vendas e atendimentos dia a dia. Versão Plus.', pilula: 'Leia a legenda',
  kw: 'fim da escala 6x1 na padaria',
  cap: `Fim da escala 6x1 na padaria: a partir de 16 de dezembro, valem duas folgas por semana e 42 horas, sem reduzir salário.

A Fenacon calcula a hora do funcionário 4,8% mais cara nessa etapa. Em dezembro de 2027 vem a segunda, com 40 horas e hora 10% mais cara. E tudo começa em cima do Natal.

Com menos horas, a escala precisa seguir o movimento da loja. Na versão Plus do Prosystem, o painel de indicadores mostra vendas e atendimentos por período, com o gráfico dia a dia. Assim você vê quais dias pedem mais gente no balcão. Converse também com seu contador e seu sindicato.

${CTA}`,
  tags: '#escala6x1 #padaria #gestaodepadaria #sistemaparapadaria',
  alts: ['Padeiro sovando massa e os totais do painel do Prosystem, com atendimentos e média diária de vendas, e o título: fim da escala 6x1, menos horas de equipe, use cada uma onde a padaria mais vende.'],
  conferir: ['Data: a Fenacon conta 16/12, parte da imprensa fala em 15/12.', 'Não é consultoria trabalhista: manter a frase do contador e do sindicato.', 'Painel de indicadores: só versão Plus. Não prometer vendas por hora: não está confirmado.', 'A faixa de totais saiu do painel da Drogaria Modelo (valores fictícios); se possível, mockup com números de padaria.'] },

{ data: 'Seg 23/11', seg: 'Farmácia', id: 'carrossel-farmacia-black-friday-v2', travada: true, semMockup: true, tipo: 'v3', tema: 'azul', formato: 'Carrossel V3', nova: true,
  capa: { foto: 'cartelas-detalhe', fs: 104, titulo: 'Black Friday: <b>esse desconto se pagou?</b>' },
  itens: [
    { n: 1, foto: 'cartelas-azuis', titulo: 'Vendeu muito. <b>Sobrou quanto?</b>', apoio: 'Com desconto, o caixa enche e o lucro pode encolher.' },
    { n: 2, foto: 'calculadora', titulo: 'Olhe o lucro, <b>não só a venda.</b>', apoio: 'Faça a conta por grupo de produto.' },
    { n: 3, foto: FOTO_PR, titulo: 'Faça a conta <b>antes de sexta.</b>', apoio: 'A Black Friday é em 27/11. Depois, o desconto já saiu.' },
  ],
  sol: { tela: 'analise-descontos', titulo: 'Teste o desconto <b>antes de dar</b>', apoio: 'A Análise de descontos do Prosystem projeta venda e lucro com outro desconto.' },
  fim: { titulo: 'Quer saber se o seu desconto <b>se paga?</b>', fotos: ['calculadora', FOTO_PR] },
  kw: 'desconto na farmácia',
  cap: `Desconto na farmácia na Black Friday: dá para saber se ele se paga antes de dar.\n\nO caixa enche, a loja fica cheia, e só depois vem a pergunta: sobrou quanto? Desconto que vira hábito pesa no lucro o ano inteiro, e 2027 começa logo depois.\n\nNo Prosystem, a Análise de descontos mostra a participação, o desconto médio e o lucro de cada grupo de produto, e projeta a venda e o lucro com outro desconto.\n\n${CTA}`,
  tags: '#blackfriday #gestaodefarmacia #descontos #sistemaparafarmacia',
  alts: ['Comprimidos em embalagens abertas, em cartão inclinado, com o título: Black Friday, esse desconto se pagou?', 'Cartelas de comprimidos e o texto: vendeu muito, sobrou quanto?', 'Calculadora em losango e o texto: olhe o lucro, não só a venda.', 'Prateleiras de farmácia desfocadas e o texto: faça a conta antes de sexta.', 'Tela da Análise de descontos do Prosystem, com venda, lucro e desconto por grupo de produto.', 'Fotos de farmácia e o convite para saber se o desconto se paga.'],
  conferir: ['Produto: a Análise de descontos segue com essa tela? Afeta também o artigo de 24/11.', 'Termo "desconto na farmácia" com volume de busca não conferido.'] },

{ data: 'Ter 24/11', seg: 'Farmácia', id: 'carrossel-farmacia-depoimento-v3-5', travada: true, semMockup: true, tipo: 'tatiana5', formato: 'Página 5 da v3 do carrossel da Tatiana', pagina: true },

{ data: 'Qua 25/11', seg: 'Padaria', id: 'padaria-encomendas-natal-v2', travada: true, tipo: 'padariaFoto', tema: 'lar', formato: 'Padaria com foto', nova: true, foto: 'carrinho-paes', pilula: 'Leia a legenda',
  tras: 'M850,590 C500,800 200,900 90,1010 C30,1090 120,1190 300,1205 C370,1212 400,1225 425,1245',
  frente: 'M900,478 C1050,470 1070,650 940,690 C860,715 800,640 850,590',
  titulo: 'Encomenda de Natal no caderno. <b>E se faltar?</b>', fs: 90,
  kw: 'encomendas de Natal na padaria',
  cap: 'Encomendas de Natal na padaria: quando tudo fica no caderno, um erro aparece só na hora da retirada.\n\n5 combinados que evitam prejuízo em dezembro:\n\n1. Anote nome e telefone de quem pediu.\n2. Escreva item e quantidade, sem abreviar.\n3. Marque dia e hora da retirada.\n4. Combine um sinal e registre o valor.\n5. Defina até quando aceita pedido, conforme o que a produção dá conta.\n\nE fique atento para 2027: no Simples, o faturamento passa a seguir o documento fiscal, inclusive em venda para entrega futura. Confirme com seu contador.\n\nO passo a passo completo está no blog, no link da bio. Salve este post e mostre para quem atende no balcão.',
  tags: '#padaria #encomendasdenatal #gestaodepadaria #panificacao',
  alts: ['Carrinho com prateleiras de pães, com uma linha branca em volta da foto, como a fita de uma encomenda, e o título: encomenda de Natal no caderno, e se faltar?'],
  conferir: ['Os 5 combinados são orientação nossa, sem fonte externa.', 'Sem ferramenta na peça: "Encomenda" no Prosystem é produto em falta, não pedido de padaria.'] },

{ data: 'Sex 27/11', seg: 'Farmácia', id: 'frase-farmacia-lucro-v1', travada: true, tipo: 'frase', tema: 'azul', formato: 'Frase de impacto', nova: true,
  titulo: 'Vender mais <b>não é lucrar mais.</b>', apoio: 'Na Black Friday, o que conta é o que sobra.',
  kw: 'margem de lucro na farmácia',
  cap: 'Margem de lucro na farmácia: na Black Friday, a venda sobe, mas é o que sobra que paga as contas de 2027.\n\nHoje, repare em quanto você está vendendo e em quanto está ficando.\n\nQuanto sobrou da sua última promoção? Se a resposta demorou, fale com um especialista pelo link da bio.',
  tags: '#blackfriday #margemdelucro #gestaodefarmacia #farmacia',
  alts: ['Frase em azul sobre fundo branco: vender mais não é lucrar mais.'],
  conferir: ['Quando o artigo de margem for publicado, citar na legenda que ele está no blog.', 'Termo com volume de busca não conferido.'] },

{ data: 'Seg 30/11', seg: 'Padaria', id: 'padaria-13-salario-v2', travada: true, tipo: 'fotoPainel', tema: 'lar', formato: 'Foto com painel de vidro (o plano pedia estático com tela)', nova: true, foto: 'calculadora',
  vidro: true, cantos: true, losangos: true,
  titulo: 'O 13º vence hoje. Sua loja deu lucro. <b>Onde está o dinheiro?</b>', fs: 68, faixa: 'Lucro no papel não é dinheiro na conta.', pilula: 'Leia a legenda',
  kw: 'fluxo de caixa da padaria',
  cap: `Fluxo de caixa da padaria: hoje vence a primeira parcela do 13º, e a segunda vai até 18 de dezembro.\n\nTem mês em que o resultado mostra lucro e mesmo assim falta dinheiro na conta. A DRE responde se a loja deu lucro. O fluxo de caixa responde onde o dinheiro está. Para planejar 2027, você precisa dos dois.\n\nNo Prosystem, os lançamentos ficam organizados por plano de contas, com visão de resultado e de caixa.\n\n${CTA}`,
  tags: '#fluxodecaixa #padaria #gestaodepadaria #sistemaparapadaria',
  alts: ['Calculadora e caneta sobre papel, com o texto: o 13º vence hoje, sua loja deu lucro, onde está o dinheiro?'],
  conferir: ['Saiu sem tela: a pasta não tem tela de DRE nem de fluxo de caixa. Pedir captura à equipe de produto, se quiser a versão com tela.', 'Produto: DRE e fluxo de caixa seguem como na base? Vale sem ajuste em padaria?', 'Publicar só em 30/11: o título diz "hoje".'] },

{ data: 'Qua 02/12', seg: 'Farmácia', id: 'farmacia-escala-5x2-v2', travada: true, tipo: 'fotoPainel', vidro: true, soLaco: true, cantos: true, losangos: true, tema: 'azul', formato: 'Foto com painel', nova: true, foto: FOTO_FA, ajuste: 'transform-origin:50% 0;transform:translateY(-350px) scale(1.3)', painelTopo: 680,
  titulo: 'Duas folgas a partir de 16/12. <b>Quem fica no balcão?</b>', fs: 72, faixa: 'Sem reduzir salário, e com o farmacêutico na escala.', pilula: 'Leia a legenda',
  kw: 'escala 5x2 na farmácia',
  cap: 'Escala 5x2 na farmácia: a partir de 16 de dezembro, valem duas folgas por semana e 42 horas, sem reduzir salário.\n\nA farmácia abre muitas horas, e a escala do farmacêutico costuma ser o ponto mais apertado. Em dezembro de 2027 vem a segunda etapa, com 40 horas.\n\nRefaça a escala agora, olhando os dias e os horários de maior movimento. Converse com seu contador e seu sindicato.',
  tags: '#escala5x2 #farmacia #gestaodefarmacia #fimdaescala6x1',
  alts: ['Farmacêutica pegando um produto na prateleira, com o texto: duas folgas a partir de 16/12, quem fica no balcão?'],
  conferir: ['Data: a Fenacon conta 16/12, parte da imprensa fala em 15/12.', 'Produto: com relatório de vendas por hora, esta peça ganha tela.', '"Ponto mais apertado" é inferência nossa, sem posição de Abrafarma ou Febrafar.'] },

{ data: 'Sex 04/12', seg: 'Padaria', id: 'carrossel-padaria-sangria-v2', travada: true, semMockup: true, tipo: 'v2', tema: 'lar', formato: 'Carrossel V2',
  capa: { foto: 'paes-prateleira-sem-etiqueta', titulo: 'Quanto dinheiro tem na sua <b>gaveta agora?</b>', apoio: 'Sangria que depende de memória falha.' },
  itens: [
    { foto: 'paes-prateleira-sem-etiqueta', tela: 'sangria-aviso', titulo: 'Chegou no valor, o caixa <b>avisa.</b>', apoio: 'Exemplo: a partir de R$ 600 em dinheiro. A venda continua.' },
    { foto: 'paes-grade', titulo: 'Passou do limite, o caixa <b>trava.</b>', apoio: 'Exemplo: em R$ 900, só volta a vender depois da sangria.' },
    { foto: 'calculadora', tela: 'sangria-registro', titulo: 'Toda retirada fica <b>registrada.</b>', apoio: 'Valor e motivo, prontos para conferir no fechamento.' },
  ],
  sol: { foto: 'carrinho-paes', titulo: 'Sangria com regra, sem depender da memória', apoio: 'Menos dinheiro exposto na gaveta e um fechamento mais fácil de conferir.' },
  fim: { foto: 'paes-prateleira-sem-etiqueta', titulo: 'Quer esse controle no caixa da <b>sua padaria?</b>' },
  kw: 'sangria de caixa',
  cap: `Sangria de caixa na padaria: com café da manhã cheio e fila no caixa, ela fica para depois até alguém lembrar. E dezembro é o mês de mais movimento antes de 2027.\n\nNo Prosystem, você define dois valores: em um, o caixa avisa; no outro, ele só volta a vender depois da sangria. Cada retirada fica registrada para conferir no fechamento.\n\nQuer esse controle na sua padaria? ${CTA}`,
  tags: '#sangriadecaixa #padaria #controledecaixa #sistemaparapadaria',
  alts: ['Pães em uma prateleira, com o título: quanto dinheiro tem na sua gaveta agora?', 'Aviso do Prosystem pedindo a sangria programada e o texto: chegou no valor, o caixa avisa.', 'Grade de pães e o texto: passou do limite, o caixa trava.', 'Tela de registro de sangria do Prosystem e o texto: toda retirada fica registrada.', 'Carrinho de pães e o texto: sangria com regra, sem depender da memória.', 'Pães em uma prateleira e o convite para ter esse controle na padaria.'],
  conferir: ['Produto: a função vale sem ajuste na padaria?', 'A tela de registro tem "centro de custo" e um lançamento de gasolina: conferir no mockup.'] },

{ data: 'Seg 07/12', seg: 'Farmácia', id: 'carrossel-farmacia-popular-v2', travada: true, semMockup: true, tipo: 'v2', tema: 'azul', formato: 'Carrossel V2',
  capa: { foto: 'pressao-mesa', titulo: 'Farmácia Popular: multa de <b>até 20%.</b>', apoio: 'As regras mudaram em agosto.' },
  itens: [
    { foto: FOTO_PR, titulo: 'A fiscalização ficou <b>automática.</b>', apoio: 'O monitoramento separa por risco e pode suspender a farmácia antes.' },
    { foto: 'calculadora', titulo: 'A multa <b>cresceu.</b>', apoio: 'O teto era 10% sobre 3 meses. Agora é 20%, e a base pode ser de 12 meses.' },
    { foto: 'maos-teclado-mesa', titulo: 'Guarde por <b>5 anos.</b>', apoio: 'De preferência em meio digital. Antes eram 10 anos.' },
  ],
  sol: { foto: FOTO_PR, tela: 'receitas-scanner', titulo: 'Receita guardada, sem pilha de caixa', apoio: 'O Prosystem digitaliza as receitas do programa e guarda em mídia externa ou nuvem.' },
  fim: { foto: FOTO_PR, titulo: 'Quer organizar isso na <b>sua farmácia?</b>' },
  kw: 'Farmácia Popular',
  cap: `Farmácia Popular: novas regras, multa maior e fiscalização automática. Sua farmácia está preparada para 2027?\n\nA portaria de agosto subiu a multa máxima para 20%, e a base pode ser a venda dos últimos 12 meses. Os documentos agora ficam guardados por 5 anos, de preferência em meio digital.\n\nNo Prosystem, o scanner de receitas digitaliza o que você precisa guardar.\n\n${CTA}`,
  tags: '#farmaciapopular #farmacia #gestaodefarmacia #sistemaparafarmacia',
  alts: ['Medição de pressão, com o título: Farmácia Popular, multa de até 20%.', 'Prateleiras de farmácia e o texto: a fiscalização ficou automática.', 'Calculadora e o texto: a multa cresceu, de 10% para 20%.', 'Mãos digitando em um teclado e o texto: guarde por 5 anos, de preferência em meio digital.', 'Tela do scanner de receitas e o texto: receita guardada, sem pilha de caixa.', 'Prateleiras de farmácia e o convite para organizar isso na farmácia.'],
  conferir: ['Produto: o scanner atende a portaria nova? O artigo da base é antigo.', 'Conferir a portaria no Diário Oficial: uma fonte cita republicação em 24/09.'] },

{ data: 'Qui 10/12', seg: 'Padaria', id: 'padaria-combos-v2', travada: true, semMockup: true, tipo: 'comTela', tema: 'lar', formato: 'Estático com tela', fundo: 'forte', nova: true,
  titulo: 'Leve 3, pague 2 <b>sem calculadora no caixa</b>', fs: 78, alturaTitulo: 230, foto: 'croissants-bandeja', tela: 'combo-totais', faixa: 'Cadastre o combo uma vez. O desconto entra na venda.', pilula: 'Leia a legenda',
  kw: 'sistema para padaria',
  cap: `Sistema para padaria com PDV: promoção feita de cabeça no caixa vira erro e desconto indevido, ainda mais com kit de Natal.\n\nNo Prosystem, você cadastra leve e pague, desconto progressivo e kits. Na venda, o caixa não precisa fazer conta. Vale começar agora e levar o costume para 2027.\n\n${CTA}`,
  tags: '#sistemaparapadaria #padaria #kitsdenatal #gestaodepadaria',
  alts: ['Croissants em uma bandeja e os totais da venda com desconto no Prosystem, com o título: leve 3, pague 2 sem calculadora no caixa.'],
  conferir: ['Produto: combos valem sem ajuste na padaria?', 'As telas da base têm marca de produto e imagem de farmácia. Só os totais foram usados: pedir captura de combo com itens de padaria.', 'Os totais mostram 16,66% de desconto, de um kit com o segundo item a 50%. Não é um leve 3, pague 2 exato: a captura nova resolve.'] },

{ data: 'Sex 11/12', seg: 'Farmácia', id: 'carrossel-farmacia-uso-continuo-v3', travada: true, semMockup: true, tipo: 'v2', tema: 'azul', formato: 'Carrossel V2',
  capa: { foto: 'comprimidos-coloridos', titulo: 'O remédio do seu cliente acaba em <b>8 dias.</b>', apoio: 'Quem vai lembrar dele primeiro?' },
  itens: [
    { foto: FOTO_PR, tela: 'uso-continuo-proxima-compra', titulo: 'Na venda, o sistema <b>marca a data.</b>', apoio: 'Você informa como o cliente toma o remédio. O Prosystem calcula a próxima compra.' },
    { foto: 'cartelas-detalhe', tela: 'uso-continuo-alerta', titulo: 'Ele volta, e o balcão <b>é avisado.</b>', apoio: 'O alerta aparece nos 9 dias antes de o remédio acabar.' },
    { foto: 'calculadora', tela: 'uso-continuo-relatorio', titulo: 'Quem deve comprar vira <b>lista.</b>', apoio: 'Relatório por período. Contato só com autorização do cliente.' },
  ],
  sol: { foto: 'cartelas-azuis', titulo: 'Lembre antes da outra farmácia', apoio: '13% já compram em farmácia pelo WhatsApp, segundo pesquisa IFEPEC, Axxus e Unicamp.' },
  fim: { foto: FOTO_PR, titulo: 'Quer ver o uso contínuo na <b>sua farmácia?</b>' },
  kw: 'uso contínuo na farmácia',
  cap: `Cliente de uso contínuo na farmácia: quem lembra primeiro, vende, em 2027 também.\n\nEle raramente avisa que vai comprar. Se ninguém lembrar da reposição, a compra pode ir para outra farmácia, e 13% já compram pelo WhatsApp.\n\nNo sistema Prosystem, como o cliente toma o remédio vira a data da próxima compra. Nos 9 dias antes de acabar, o balcão recebe o alerta, e um relatório mostra quem deve comprar em cada período.\n\n${CTA}`,
  tags: '#usocontinuo #farmacia #fidelizacao #sistemaparafarmacia',
  alts: ['Comprimidos coloridos, com o título: o remédio do seu cliente acaba em 8 dias.', 'Tela de próxima compra do Prosystem e o texto: na venda, o sistema marca a data.', 'Alerta no balcão e o texto: ele volta, e o balcão é avisado.', 'Relatório de clientes de uso contínuo e o texto: quem deve comprar vira lista.', 'Cartelas de comprimidos e o texto: lembre antes da outra farmácia, 13% já compram pelo WhatsApp.', 'Prateleiras de farmácia e o convite para ver o uso contínuo na farmácia.'],
  conferir: ['O contato com o cliente envolve dado de saúde: manter a menção à autorização e à LGPD.', 'A tela de próxima compra tem "Posologia" e contorno vermelho original da base.'] },

{ data: 'Seg 14/12', seg: 'Padaria', id: 'padaria-fechamento-caixa-v1', travada: true, semMockup: true, tipo: 'comTela', tema: 'lar', formato: 'Estático com tela', fundo: 'forte',
  titulo: 'Fechou o caixa. Faltou dinheiro. <b>E agora?</b>', tela: 'fechamento-caixa', faixa: 'O que foi informado e o que foi vendido, lado a lado.', pilula: 'Leia a legenda',
  kw: 'sistema para padaria',
  cap: `Sistema para padaria com fechamento de caixa: quando falta dinheiro, você precisa saber onde olhar.\n\nNo Prosystem, o fechamento mostra o que foi informado e o que foi vendido em cada forma de pagamento. A diferença aparece na tela, sem refazer a conta na calculadora.\n\nEntre em 2027 com o caixa conferido todo dia. ${CTA}`,
  tags: '#sistemaparapadaria #fechamentodecaixa #padaria #gestaodepadaria',
  alts: ['Tela de fechamento de caixa do Prosystem com valores informados e vendidos por forma de pagamento, e o título: fechou o caixa, faltou dinheiro, e agora?'],
  conferir: ['Tela de 2021, sem linha de Pix: pedir captura atual à equipe de produto.'] },

{ data: 'Qua 16/12', seg: 'Os dois', id: 'frase-escala-hoje-v2', travada: true, tipo: 'frase', tema: 'azul', formato: 'Frase de impacto', nova: true,
  titulo: 'Hoje acaba a escala 6x1. <b>Sua loja está pronta?</b>', apoio: 'A partir de hoje: duas folgas por semana e até 42 horas.',
  kw: 'fim da escala 6x1',
  cap: 'Fim da escala 6x1: a partir de hoje, valem duas folgas por semana e 42 horas, sem reduzir salário.\n\nE não para aqui. Em dezembro de 2027 vem a segunda etapa, com 40 horas.\n\nSe a escala da sua loja ainda não mudou, converse hoje com seu contador e seu sindicato. Marque quem cuida da escala na sua loja.',
  tags: '#fimdaescala6x1 #escala5x2 #gestaodeloja #prosystem',
  alts: ['Frase em azul sobre fundo branco: hoje acaba a escala 6x1, sua loja está pronta?'],
  conferir: ['Data: a Fenacon conta 16/12, parte da imprensa fala em 15/12. Se for 15/12, o "hoje" muda.', 'Saiu em azul: peça para os dois segmentos segue o padrão do feed.'] },

{ data: 'Sex 18/12', seg: 'Padaria', id: 'padaria-curva-abc-v1', travada: true, semMockup: true, tipo: 'comTela', tema: 'lar', formato: 'Estático com tela', fundo: 'forte',
  titulo: 'Mais padarias em 2027. <b>O que sustenta a sua?</b>', tela: 'curva-abc', faixa: 'A curva ABC mostra os produtos que mais pesam no seu resultado.', pilula: 'Leia a legenda',
  kw: 'como aumentar as vendas na padaria',
  cap: `Como aumentar as vendas na padaria em 2027, com mais concorrência e menos gente entrando?\n\nDe janeiro a setembro de 2026, abriram 81.437 pequenos negócios de panificação no Brasil, segundo o Sebrae. E um levantamento do setor mostrou fluxo 2,31% menor, com valor médio de cada compra 5,75% maior.\n\nCom menos gente na porta, cada venda conta mais. A curva ABC do Prosystem separa os produtos que sustentam a loja dos que quase não vendem.\n\n${CTA}`,
  tags: '#padaria #gestaodepadaria #vendasnapadaria #sistemaparapadaria',
  alts: ['Tela da curva ABC do Prosystem, que separa os produtos por valor e quantidade, com o título: mais padarias em 2027, o que sustenta a sua?'],
  conferir: ['Tela de configuração, pouco vendedora: pedir uma com o resultado, sem nomes de remédio.', 'Os números do setor vêm de reportagem; o encarte oficial da ABIP não foi lido.'] },

{ data: 'Seg 21/12', seg: 'Farmácia', id: 'frase-farmacia-receita-v1', travada: true, tipo: 'frase', tema: 'azul', formato: 'Frase de impacto',
  titulo: 'Foto de receita <b>não é receita eletrônica.</b>', apoio: 'Leia a legenda.',
  kw: 'receita eletrônica na farmácia',
  cap: 'Receita eletrônica na farmácia: foto, digitalização ou PDF feito a partir do papel não vale como receita eletrônica.\n\nE tem mais uma dúvida comum. O SNCR não substitui o SNGPC: um cuida do número e do uso da receita, o outro segue na escrituração. A transição do SNCR vai até 3 de março de 2027.\n\nMarque quem atende no balcão.',
  tags: '#receitaeletronica #sncr #sngpc #farmacia',
  alts: ['Frase em azul sobre fundo branco: foto de receita não é receita eletrônica.'],
  conferir: [] },

{ data: 'Seg 11/01', seg: 'Padaria', id: 'frase-padaria-sobra-v1', travada: true, tipo: 'frase', tema: 'lar', formato: 'Frase de impacto',
  titulo: 'Pão que sobra também é <b>prejuízo.</b>', apoio: 'Novo artigo no ar!',
  kw: 'sobra de pão na padaria',
  cap: 'Sobra de pão na padaria é dinheiro que foi para o lixo. Quanto sobrou ontem na sua?\n\nPassado o Natal, vale olhar esse número com calma e seguir 2027 sabendo quanto produzir.\n\nNovo artigo no ar: o passo a passo para controlar as sobras e ajustar a produção está no blog, no link da bio. Marque o dono da padaria.',
  tags: '#padaria #gestaodepadaria #panificacao',
  alts: ['Frase em laranja sobre fundo branco: pão que sobra também é prejuízo.'],
  conferir: ['O termo "sobra de pão" não veio das sugestões do Google: conferir o volume.'] },

// Citação do artigo de sobras (blog/_gerador/artigos/a08_sobras.py), pedida em 03/11/2026. A v1 era a arte parada; a v2 é o vídeo de motion.js.
{ data: 'Seg 25/01', seg: 'Padaria', id: 'frase-padaria-registro-sobras-v2', travada: true, tipo: 'frase', tema: 'lar', formato: 'Frase de impacto em vídeo (MP4, 9 s; o PNG é a capa)', nova: true, fs: 84, motion: true,
  titulo: 'Sobra sem registro vira <b>opinião.</b><br>Sobra registrada vira <b>decisão</b> para a fornada de amanhã.', apoio: 'Leia a legenda.',
  kw: 'controle de sobras na padaria',
  cap: 'Controle de sobras na padaria começa com um caderno, uma balança e cinco minutos no fim do dia.\n\nAnote o que sobrou de cada produto e em que horário. Em quatro semanas, você para de produzir no "acho que" e passa a acertar a fornada pelo histórico. É um bom hábito para firmar já no começo de 2027.\n\nO passo a passo, com uma calculadora da próxima fornada, está no artigo do blog, no link da bio. E a venda por produto e por horário já fica registrada no PDV do Prosystem.\n\nMarque o dono da padaria.',
  tags: '#padaria #gestaodepadaria #panificacao #sistemaparapadaria',
  alts: ['Vídeo sem som. Frase em laranja sobre fundo branco, aparecendo palavra por palavra: sobra sem registro vira opinião, sobra registrada vira decisão para a fornada de amanhã. A palavra opinião balança e embaça; a palavra decisão entra com destaque e ganha um grifo.'],
  conferir: ['O artigo de sobras precisa estar publicado no blog antes desta data (a peça de 11/01 já anuncia que ele está no ar).', 'O termo "controle de sobras na padaria" não veio das sugestões do Google: conferir o volume.'] },

{ data: 'Sex 25/12', seg: 'Os dois', id: 'natal-v5', travada: true, tipo: 'natalRico', tema: 'azul', formato: 'Foto com losango e linha', nova: true, semAno: true, foto: 'arvore-natal-berlim',
  titulo: 'Depois de um dezembro corrido, <b>um Natal tranquilo.</b>', fs: 68, apoio: 'Boas festas a você e a toda a sua equipe.',
  kw: '',
  cap: 'Tem quem passa a véspera de Natal atrás do balcão, atendendo a última receita ou entregando a última encomenda.\n\nA vocês, que trabalham para o Natal dos outros dar certo, o nosso obrigado e um Feliz Natal.',
  tags: '#feliznatal #farmacia #padaria',
  alts: ['Árvore de Natal com milhares de luzes sobre um losango azul, com uma linha branca como guirlanda, e o texto: Depois de um dezembro corrido, um Natal tranquilo.'],
  conferir: ['Exceção à pausa de 23/12 a 02/01, a pedido da Jessica: deixar agendado.'] },

{ data: 'Sex 01/01', seg: 'Os dois', id: 'ano-novo-v3', travada: true, tipo: 'fotoLinha', tema: 'azul', formato: 'Foto com linha', nova: true, foto: 'fogos-ano-novo', posicao: '50% 30%',
  tras: 'M330,680 C440,690 540,720 605,760',
  frente: 'M150,855 C90,790 130,710 210,725 C280,740 270,820 205,805 C145,790 180,690 330,680',
  titulo: 'Um 2027 de portas abertas <b>e caixa no azul.</b>', fs: 80, apoio: 'Obrigado por confiar na ProSystem mais um ano.',
  kw: '',
  cap: 'Feliz 2027!\n\nA quem abre a loja cedo, confere o caixa no fim do dia e conhece cada cliente pelo nome: que este ano traga movimento no balcão e tranquilidade no caixa.\n\nObrigado por mais um ano com a gente.',
  tags: '#feliz2027 #anonovo #farmacia #padaria',
  alts: ['Fogos de artifício no céu noturno, com uma linha branca subindo do texto até os fogos, e o texto: Um 2027 de portas abertas e caixa no azul.'],
  conferir: ['Exceção à pausa de 23/12 a 02/01, a pedido da Jessica: deixar agendado.'] },

{ data: 'Seg 04/01', seg: 'Farmácia', id: 'farmacia-cbs-v1', travada: true, tipo: 'frase', tema: 'azul', formato: 'Frase de impacto', nova: true, fs: 88,
  titulo: 'A Prosystem já está pronta para o IBS e a CBS.<br><b>E a sua farmácia?</b>', apoio: '2027 começou: hora de refazer o preço.',
  kw: 'reforma tributária na farmácia',
  cap: `Reforma tributária na farmácia em 2027: a CBS já está valendo.

Se o preço da sua loja foi feito com o imposto antigo, esta é a semana de sentar com o contador e refazer a conta. Remédio registrado tem regra própria, com corte de 60%.

O Prosystem já está preparado para o IBS e a CBS, e na Precificação a composição de custo e a fórmula de preço ficam na mesma tela.

${CTA}`,
  tags: '#reformatributaria #cbs #ibs #gestaodefarmacia #sistemaparafarmacia',
  alts: ['Frase em azul sobre fundo branco: a Prosystem já está pronta para o IBS e a CBS. E a sua farmácia?'],
  conferir: ['Confirmar com o produto que o sistema já emite com IBS e CBS antes de publicar: a peça promete isso.'] },

{ data: 'Qui 14/01', seg: 'Farmácia', id: 'farmacia-cbs-tela-v1', travada: true, semMockup: true, tipo: 'comTela', tema: 'azul', formato: 'Estático com tela', fundo: 'forte', nova: true,
  titulo: '2027 começou, e a CBS também. <b>Você já refez a conta?</b>', fs: 70, tela: 'precificacao', faixa: 'Custo e fórmula de preço na mesma tela do Prosystem.', pilula: 'Leia a legenda',
  kw: 'preço da farmácia com a CBS',
  cap: `Preço da farmácia com a CBS: a reforma tributária entrou em 2027, e o preço de cada produto precisa acompanhar.\n\nRefazer a conta é rever custo, imposto e margem item por item. Remédio registrado tem regra própria, com corte de 60%. Confirme com seu contador como isso fica na sua loja.\n\nNa Precificação do Prosystem, a composição de custo e a fórmula de preço ficam na mesma tela.\n\n${CTA}`,
  tags: '#reformatributaria #cbs #precificacao #gestaodefarmacia #sistemaparafarmacia',
  alts: ['Tela de precificação do Prosystem com as fórmulas do preço de venda, e o título: 2027 começou, e a CBS também, você já refez a conta?'],
  conferir: ['Segunda peça do assunto: a frase de 04/01 anuncia, esta mostra onde refazer o preço. Arte aprovada pela Jessica e travada.', 'A tela cita ICMS_ST e é pequena e antiga: pedir captura nova.'] },

{ data: 'Qui 07/01', seg: 'Padaria', id: 'padaria-simples-nota-v2', travada: true, tipo: 'fotoPainel', vidro: true, cantos: true, losangos: true, tema: 'lar', formato: 'Foto com painel', nova: true, foto: 'embalagem-papel',
  titulo: 'Sua padaria é do Simples? <b>A nota já mudou.</b>', fs: 76, faixa: 'Confirme com seu contador como ficou na sua loja.', pilula: 'Leia a legenda',
  kw: 'nota fiscal da padaria no Simples',
  cap: 'Nota fiscal da padaria no Simples em 2027: desde 1º de janeiro, os documentos seguem as regras novas de IBS e CBS.\n\nE tem outra mudança: o faturamento do Simples passou a seguir o documento fiscal, inclusive em venda para entrega futura, como encomenda.\n\nSe ainda não conversou, confirme com seu contador como isso funciona na sua padaria.',
  tags: '#simplesnacional #padaria #reformatributaria #notafiscal',
  alts: ['Pães em embalagem de papel, com o texto: sua padaria é do Simples? A nota já mudou.'],
  conferir: ['Produto: o que já está pronto para o Simples em 2027? A peça não promete função.', 'As regras vêm de escritório de advocacia e da Receita: reconferir em dezembro.'] },

{ data: 'Sex 08/01', seg: 'Farmácia', id: 'farmacia-mercado-2027-v1', travada: true, semMockup: true, tipo: 'comTela', tema: 'azul', formato: 'Estático com tela', fundo: 'bra',
  titulo: 'O mercado cresce em 2027. <b>E a sua farmácia?</b>', tela: 'painel-vendas', faixa: 'Vendas, lucro médio e desconto no mesmo painel. Plano Plus.', pilula: 'Leia a legenda',
  kw: 'sistema para farmácia e drogaria',
  cap: `Sistema para farmácia e drogaria: você consegue ver em 30 segundos se a sua loja cresceu?\n\nO Close-Up projeta para 2027 um ritmo parecido com o de 2026, perto de 13% em valor. Só que, em 2025, as farmácias independentes fecharam mais lojas do que abriram: foram 1.096 a menos.\n\nNo plano Plus do Prosystem, o painel mostra vendas, lucro médio, desconto e valor médio de cada compra por período.\n\n${CTA}`,
  tags: '#sistemaparafarmacia #drogaria #gestaodefarmacia #farmaciaindependente',
  alts: ['Painel do Prosystem com total de vendas, lucro médio, desconto e gráfico de evolução, e o título: o mercado cresce em 2027, e a sua farmácia?'],
  conferir: ['Saldo de 1.096 lojas: abrir a fonte original (IQVIA ou Febrafar) antes de publicar.', 'A tela cita "Drogaria Modelo": só em peça de farmácia.'] },

{ data: 'Sáb 14/11', seg: 'Farmácia', id: 'farmacia-dia-do-diabetes-v2', travada: true, semMockup: true, tipo: 'comTela', tema: 'azul', formato: 'Estático com tela', fundo: 'forte', nova: true,
  titulo: 'Hoje é o Dia Mundial do Diabetes. <b>Quem lembra seu cliente de repor o remédio?</b>', fs: 62, alturaTitulo: 290, tela: 'uso-continuo-relatorio', faixa: 'O relatório do Prosystem mostra quem deve comprar em cada período.', pilula: 'Leia a legenda',
  kw: 'uso contínuo na farmácia',
  cap: `Uso contínuo na farmácia: hoje, Dia Mundial do Diabetes, vale olhar para quem depende do remédio todo mês.\n\nQuem usa medicamento de uso contínuo nem sempre avisa quando vai comprar de novo. Lembrar da reposição é um cuidado com o cliente, e é também o que mantém esse cliente na sua loja em 2027.\n\nNo Prosystem, um relatório mostra quais clientes de uso contínuo devem comprar em cada período. Contato com o cliente, só com a autorização dele.\n\nO tratamento é sempre com o médico. ${CTA}`,
  tags: '#diamundialdodiabetes #usocontinuo #farmacia #sistemaparafarmacia',
  alts: ['Lista de relatórios do Prosystem com clientes de produtos de uso contínuo em destaque, com o título: hoje é o Dia Mundial do Diabetes, quem lembra seu cliente de repor o remédio?'],
  conferir: ['Data de saúde: a peça fala de lembrar a reposição, sem orientar tratamento.', 'A tela é a lista de relatórios, sem nome de remédio.'] },

{ data: 'Sáb 21/11', seg: 'Farmácia', id: 'farmacia-dia-da-dengue-v4', travada: true, tipo: 'fotoPainel', vidro: true, cantos: true, losangos: true, tema: 'azul', formato: 'Foto com painel', nova: true, foto: 'mosquito-pele', posicao: '50% 30%',
  titulo: 'Dia de Combate à Dengue: <b>o repelente está na sua prateleira?</b>', fs: 62, faixa: 'Comprar certo começa pelo estoque certo.', pilula: 'Leia a legenda',
  kw: 'sistema para farmácia',
  cap: `Sistema para farmácia ajuda a comprar certo: hoje é o Dia Nacional de Combate à Dengue, e a pergunta do dono é se o repelente vai faltar na prateleira.\n\nPedido feito de memória costuma errar para os dois lados: falta o que sai, sobra o que para. Para entrar em 2027 comprando melhor, vale olhar os números antes de fechar o pedido.\n\nA Sugestão de compras do Prosystem usa estoque mínimo e máximo, média de venda, curva e dias sem giro na mesma tela. Ela depende de estoque correto, por isso a contagem vem primeiro.\n\n${CTA}`,
  tags: '#combateadengue #gestaodefarmacia #comprasnafarmacia #sistemaparafarmacia',
  alts: ['Mosquito pousado na pele, com o texto: Dia de Combate à Dengue, o repelente está na sua prateleira?'],
  conferir: ['Produto: a Sugestão de compras segue como na base?', 'O dia 21/11 é conta nossa: penúltimo sábado de novembro, conforme a Lei 12.235/2010.', 'O nome legal é Dia Nacional de Combate à Dengue; a arte encurta para caber.'] },

{ data: 'Ter 01/12', seg: 'Farmácia', id: 'frase-dezembro-vermelho-v2', travada: true, tipo: 'frase', tema: 'azul', formato: 'Frase de impacto', nova: true, semAno: true, fs: 92, laco: 'vermelho',
  titulo: 'Dezembro Vermelho: <b>no balcão, sigilo também é cuidado.</b>', apoio: '1º de dezembro, Dia Mundial<br>de Luta contra a Aids.',
  kw: '',
  cap: 'Hoje é o Dia Mundial de Luta contra a Aids, e começa o Dezembro Vermelho.\n\nNa farmácia, cuidado também é falar baixo, atender com discrição e tratar cada compra com respeito. Quem entra na sua loja precisa se sentir seguro para pedir o que precisa.\n\nAtendimento discreto também é o que faz o cliente voltar.',
  tags: '#dezembrovermelho #farmacia #atendimento',
  alts: ['Laço vermelho e frase em azul sobre fundo branco: Dezembro Vermelho, no balcão, sigilo também é cuidado.'],
  conferir: ['Data de saúde: a Jessica deve dizer se combina com a marca.'] },

{ data: 'Qua 13/01', seg: 'Os dois', id: 'frase-janeiro-branco-v1', travada: true, tipo: 'frase', tema: 'azul', formato: 'Frase de impacto', nova: true, semAno: true, fs: 88, laco: 'branco',
  titulo: 'Janeiro Branco: <b>quem cuida de quem atende o dia inteiro?</b>', apoio: 'Mostre para quem cuida da equipe.',
  kw: '',
  cap: 'Janeiro Branco é o mês de falar de saúde mental, e o balcão também faz parte dessa conversa.\n\nQuem atende o dia inteiro ouve queixa, pressa e problema dos outros. Uma pausa respeitada, uma escala bem feita e uma conversa com a equipe já são um começo.\n\nMostre este post para quem cuida da equipe na sua loja.',
  tags: '#janeirobranco #saudemental #gestaodeequipe',
  alts: ['Laço branco e frase em azul sobre fundo branco: Janeiro Branco, quem cuida de quem atende o dia inteiro?'],
  conferir: ['Data de saúde: a Jessica deve dizer se combina com a marca.'] },

{ data: 'Sex 15/01', seg: 'Farmácia', id: 'carrossel-farmacia-sncr-v2', travada: true, tipo: 'v3', tema: 'azul', formato: 'Carrossel V3', nova: true,
  capa: { foto: 'maos-teclado-mesa', fs: 100, titulo: 'SNCR: <b>faltam 47 dias.</b> Sua equipe já tem acesso?' },
  itens: [
    { n: 1, foto: FOTO_FA, titulo: 'Quem opera <b>precisa de perfil.</b>', apoio: 'O responsável legal ou o gestor de cadastro libera no Cadastro Anvisa.' },
    { n: 2, foto: 'cartelas-azuis', titulo: 'Uma etapa a mais <b>no balcão.</b>', apoio: 'Consulte o número, confira, dispense e registre o uso.' },
    { n: 3, foto: FOTO_PR, titulo: 'O SNGPC <b>continua.</b>', apoio: 'O registro no SNCR não substitui a escrituração.' },
  ],
  sol: { foto: 'maos-digitando', titulo: 'Treine a equipe <b>antes de 3 de março</b>', apoio: 'Registro errado só pode ser cancelado em até 30 minutos, pelo mesmo estabelecimento.' },
  fim: { titulo: 'Sua farmácia está pronta para <b>3 de março?</b>', fotos: ['cartelas-detalhe', FOTO_PR] },
  kw: 'SNCR',
  cap: `SNCR da Anvisa: a transição vai até 3 de março de 2027, e faltam 47 dias.\n\nAntes do prazo, confira duas coisas. Quem opera o sistema precisa de perfil, liberado pelo responsável legal ou pelo gestor de cadastro no Cadastro Anvisa. E a equipe precisa treinar a etapa nova: consultar o número, conferir, dispensar e registrar o uso.\n\nO SNGPC continua, porque o registro no SNCR não substitui a escrituração.\n\nSalve este post e mostre para quem atende no balcão. Para conhecer nosso sistema para farmácia, ${CTA.toLowerCase()}`,
  tags: '#sncr #anvisa #sngpc #receitaeletronica #farmacia',
  alts: ['Mãos em um teclado, em cartão inclinado, com o título: SNCR, faltam 47 dias, sua equipe já tem acesso?', 'Farmacêutica na prateleira e o texto: quem opera precisa de perfil.', 'Cartelas de comprimidos, em losango, e o texto: uma etapa a mais no balcão.', 'Prateleiras de farmácia desfocadas e o texto: o SNGPC continua.', 'Mãos digitando e o texto: treine a equipe antes de 3 de março.', 'Fotos de farmácia e a pergunta: sua farmácia está pronta para 3 de março?'],
  conferir: ['Só publicar em 15/01: a contagem de 47 dias vale para esta data.', 'Reconferir o prazo na Anvisa: só a notícia de 29/10/2026 foi lida, e a cartilha ainda cita outra data.', 'Sem ferramenta: não foi confirmada integração do SNCR com o Prosystem.'] },

{ data: 'Seg 18/01', seg: 'Padaria', id: 'carrossel-padaria-lucro-por-produto-v2', travada: true, semMockup: true, tipo: 'v3', tema: 'lar', formato: 'Carrossel V3', nova: true,
  capa: { foto: 'paezinhos-cesta', fs: 96, titulo: 'Qual produto vende muito e <b>não deixa lucro?</b>' },
  itens: [
    { n: 1, foto: 'carrinho-paes', titulo: 'Sai todo dia. <b>Sobra quanto?</b>', apoio: 'Vender muito não quer dizer lucrar muito.' },
    { n: 2, foto: 'forno', titulo: 'O custo <b>mudou no ano.</b>', apoio: 'Insumo, embalagem e mão de obra pesam em cada produto.' },
    { n: 3, foto: 'sovando-massa', titulo: 'Comece pelos <b>que mais vendem.</b>', apoio: 'Uma diferença pequena neles pesa mais no fim do mês.' },
  ],
  sol: { tela: 'rentabilidade-relatorio', titulo: 'Veja o lucro <b>produto por produto</b>', apoio: 'O relatório do Prosystem separa o que deu lucro do que deu prejuízo.' },
  fim: { titulo: 'Quer ver esse relatório na <b>sua padaria?</b>', fotos: ['paes-grade', 'maos-massa'] },
  kw: 'margem de lucro na padaria',
  cap: `Margem de lucro na padaria: passado o fim de ano, qual produto vendeu muito e não deixou lucro?\n\nO movimento de dezembro esconde esse problema. Começar 2027 sabendo o que sustenta a loja muda o preço, a produção e a compra.\n\nNo Prosystem, o relatório mostra o lucro geral e por produto, e dá para filtrar quem ficou no positivo e quem ficou no negativo.\n\nQuer ver na sua padaria? ${CTA}`,
  tags: '#margemdelucro #padaria #gestaodepadaria #sistemaparapadaria',
  alts: ['Pãezinhos em uma cesta, com o título: qual produto vende muito e não deixa lucro?', 'Carrinho de pães e o texto: sai todo dia, sobra quanto?', 'Forno em losango e o texto: o custo mudou no ano.', 'Padeiro sovando massa e o texto: comece pelos que mais vendem.', 'Tela de relatórios de lucro do Prosystem, com as opções geral, positivos e negativos.', 'Pães e o convite para ver o relatório na padaria.'],
  conferir: ['Produto: o relatório vale sem ajuste na padaria?', 'A tela é só a lista de relatórios. Pedir captura do resultado, com produtos de padaria.'] },

{ data: 'Ter 19/01', seg: 'Farmácia', id: 'carrossel-farmacia-atencao-farmaceutica-v2', travada: true, semMockup: true, tipo: 'v2', tema: 'azul', formato: 'Carrossel V2', nova: true,
  capa: { foto: 'farmaceutica-pressao', titulo: 'Seu farmacêutico atende. <b>Onde fica o histórico?</b>', apoio: 'Amanhã é o Dia do Farmacêutico.' },
  itens: [
    { foto: FOTO_PR, titulo: 'Atendeu e ficou <b>na memória?</b>', apoio: 'Sem registro, o próximo atendimento começa do zero.' },
    { foto: 'maos-digitando', titulo: 'Registre <b>cada atendimento.</b>', apoio: 'Características do paciente e procedimentos ficam anotados.' },
    { foto: 'cartelas-azuis', tela: 'atencao-anamnese', titulo: 'A ficha fica <b>pronta.</b>', apoio: 'O acompanhamento do paciente reunido em um só lugar.' },
  ],
  sol: { foto: 'cartelas-detalhe', titulo: 'O trabalho do farmacêutico à vista', apoio: 'Atenção farmacêutica do Prosystem: registro e ficha de acompanhamento.' },
  fim: { foto: FOTO_PR, titulo: 'Quer ver a ficha na <b>sua farmácia?</b>' },
  kw: 'atenção farmacêutica',
  cap: `Atenção farmacêutica sem registro se perde: o farmacêutico atende, orienta, e nada fica guardado para o próximo atendimento.\n\nAmanhã é o Dia do Farmacêutico, e uma forma de valorizar esse trabalho em 2027 é deixar ele registrado.\n\nNo Prosystem, a Atenção farmacêutica guarda características e procedimentos, com ficha de acompanhamento do paciente. São dados de saúde, então trate com cuidado e siga a LGPD.\n\n${CTA}`,
  tags: '#atencaofarmaceutica #farmaceutico #farmacia #sistemaparafarmacia',
  alts: ['Profissional de jaleco medindo a pressão de um homem, com o título: seu farmacêutico atende, onde fica o histórico?', 'Prateleiras de farmácia e o texto: atendeu e ficou na memória?', 'Mãos digitando e o texto: registre cada atendimento.', 'Ficha de anamnese do Prosystem e o texto: a ficha fica pronta.', 'Cartelas de comprimidos e o texto: o trabalho do farmacêutico à vista.', 'Prateleiras de farmácia e o convite para ver a ficha na farmácia.'],
  conferir: ['Produto: a Atenção farmacêutica segue como na base?', 'A tela foi recortada sem nome, foto e contato do paciente da ficha de exemplo. Use o recorte no mockup, porque o original mostra uma foto com direito de uso não confirmado.'] },

{ data: 'Qua 20/01', seg: 'Farmácia', id: 'farmacia-dia-do-farmaceutico-v2', travada: true, tipo: 'homenagem', tema: 'azul', formato: 'Homenagem', nova: true, semAno: true, fs: 74,
  foto: 'farmaceutica-receita', yLos: 289, posicao: '55% 40%', pilula: '20 de janeiro · Dia do Farmacêutico',
  titulo: 'Por trás de cada receita, <b>tem alguém cuidando de gente.</b>', apoio: 'A todos os farmacêuticos, o nosso obrigado.',
  kw: 'Dia do Farmacêutico',
  cap: 'Dia do Farmacêutico: por trás de cada receita, tem alguém cuidando de gente.\n\nÉ quem confere a receita, explica como tomar, tira a dúvida no balcão e atende com calma mesmo com fila. Muitas vezes, é o primeiro profissional de saúde que a pessoa procura.\n\nA todos os farmacêuticos, e em especial aos que estão com a gente no dia a dia, o nosso obrigado.\n\nMarque um farmacêutico que merece ler isso.\n\nFoto: Cristine Rochol / PMPA.',
  tags: '#diadofarmaceutico #farmaceutico #farmacia',
  alts: ['Farmacêutica de jaleco escrevendo uma receita no balcão, com prateleiras de remédios ao fundo, dentro de um losango, com a data 20 de janeiro e o texto: por trás de cada receita, tem alguém cuidando de gente. A todos os farmacêuticos, o nosso obrigado.'],
  conferir: ['A v1 (frase em fundo branco) fica guardada como referência em pecas/frase-dia-do-farmaceutico-v1.png.', 'Foto real de uma farmácia distrital de Porto Alegre (Cristine Rochol / PMPA), licença que exige o crédito (já está na legenda). Não há autorização da pessoa fotografada.'] },

{ data: 'Sex 22/01', seg: 'Padaria', id: 'padaria-entregas-v1', travada: true, semMockup: true, tipo: 'comTela', tema: 'lar', formato: 'Estático com tela', fundo: 'forte', nova: true,
  titulo: 'Cadê o entregador? <b>E o dinheiro da entrega?</b>', fs: 74, tela: 'painel-entregas', faixa: 'Saída, baixa e acerto de cada entrega, ligados ao fechamento.', pilula: 'Leia a legenda',
  kw: 'sistema para padaria e lanchonete',
  cap: `Sistema para padaria e lanchonete com entrega: você sabe o que saiu, com quem está e o que falta acertar?\n\nQuando a entrega fica no papel, o dinheiro volta depois, e ninguém confere direito. Em 2027, cada venda vai contar mais.\n\nNo Prosystem, a Gestão de entregas controla a saída e a baixa, liga tudo ao fechamento e mostra relatórios por período e por entregador.\n\n${CTA}`,
  tags: '#delivery #padaria #gestaodepadaria #sistemaparapadaria',
  alts: ['Painel de delivery do Prosystem com atendimentos, valor médio e evolução de vendas, e o título: cadê o entregador? E o dinheiro da entrega?'],
  conferir: ['Produto: a Gestão de entregas vale em padaria?', 'O painel é de plano Plus e foi recortado sem o nome "Drogaria Modelo".', 'A tela mostra tempo médio de entrega de 3h 19m, dado fictício que não ajuda a venda: pedir outra captura ou cobrir no mockup.', 'A tela diz "Ticket médio". Se ficar legível no mockup, é a palavra difícil da peça.'] },

{ data: 'Ter 17/11', seg: 'Farmácia', id: 'farmacia-novembro-azul-v2', travada: true, tipo: 'fotoPainel', vidro: true, cantos: true, losangos: true, tema: 'azul', formato: 'Foto com painel', nova: true, semAno: true,  laco: true, foto: 'farmaceutico-conferindo', posicao: '8% 20%', ajuste: 'transform-origin:0 0;transform:scale(1.5)',
  titulo: 'Novembro Azul: <b>quem lembra o homem de se cuidar?</b>', fs: 72, faixa: 'No balcão, uma conversa pode levar ao médico.', pilula: 'Leia a legenda',
  kw: '',
  cap: 'Novembro Azul é o mês de falar da saúde do homem, e muitas vezes ele aparece primeiro na farmácia, não no consultório.\n\nA campanha começou com o câncer de próstata e hoje lembra também de glicemia e vacina em dia. No balcão, uma conversa simples pode ser o empurrão para marcar a consulta.\n\nMostre este post para quem atende na sua farmácia.',
  tags: '#novembroazul #saudedohomem #farmacia',
  alts: ['Farmacêutico de jaleco conferindo produtos entre as prateleiras, com o laço azul do Novembro Azul e o texto: Novembro Azul, quem lembra o homem de se cuidar?'],
  conferir: ['Data de saúde: a peça incentiva procurar o médico, sem orientar tratamento.', 'As fontes são reportagens que citam o Ministério da Saúde. Não confirmei o dia 17/11, por isso a peça não diz "hoje".'] },

{ data: 'Dom 22/11', seg: 'Farmácia', id: 'frase-antimicrobianos-v2', travada: true, tipo: 'frase', tema: 'azul', formato: 'Frase de impacto', nova: true, semAno: true, fs: 92,
  titulo: 'Antibiótico sem receita? <b>No balcão, a resposta é não.</b>', apoio: 'A venda exige receita,<br>que fica retida na farmácia.',
  kw: 'antibiótico na farmácia',
  cap: 'Antibiótico na farmácia só sai com receita, que fica retida e é escriturada.\n\nEsta é a Semana Mundial de Conscientização sobre o Uso de Antimicrobianos, de 18 a 24 de novembro. Usar antibiótico sem indicação ajuda a criar resistência, e quem atende no balcão faz parte desse cuidado.\n\nA regra é da Anvisa e vale para toda farmácia e drogaria do país.',
  tags: '#antibioticos #usoresponsavel #farmacia #farmaceutico',
  alts: ['Frase em azul sobre fundo branco: antibiótico sem receita? No balcão, a resposta é não.'],
  conferir: ['Saiu no domingo porque 18/11 a 21/11 já têm post ou feriado.', 'A norma é a RDC 471/2021, alterada pela RDC 973/2025: li resumos, não o texto oficial.', 'Sem ferramenta na peça.'] },

{ data: 'Qui 03/12', seg: 'Farmácia', id: 'farmacia-dezembro-laranja-v2', travada: true, tipo: 'fotoPainel', tema: 'azul', formato: 'Foto com painel', nova: true, foto: 'protetor-praia', posicao: '50% 100%', painelTopo: 880, tomFraco: true, losangos: true,
  titulo: 'Dezembro Laranja começou. <b>Vai faltar protetor solar?</b>', fs: 54, faixa: 'Ruptura no verão é venda perdida.', pilula: 'Leia a legenda',
  kw: 'protetor solar na farmácia',
  cap: `Protetor solar na farmácia: o Dezembro Laranja, campanha da Sociedade Brasileira de Dermatologia contra o câncer de pele, começa junto com o verão.\n\nÉ quando o cliente mais procura, e o verão só termina em março de 2027. Prateleira vazia nessa hora é venda perdida, e o cliente deixa de levar o que precisa.\n\nNo plano Plus do Prosystem, o painel de indicadores mostra a ruptura de estoque.\n\n${CTA}`,
  tags: '#dezembrolaranja #protetorsolar #gestaodefarmacia #sistemaparafarmacia',
  alts: ['Mão com frasco de protetor solar sobre uma perna com pontos de creme, na areia da praia, com o texto: Dezembro Laranja começou, vai faltar protetor solar?'],
  conferir: ['Data de saúde: a peça fala de estoque, sem orientar uso nem fator de proteção.', 'Foto do Pexels, sem marca aparente no frasco.'] },

{ data: 'Qua 09/12', seg: 'Padaria', id: 'padaria-dia-da-culinaria-v2', travada: true, tipo: 'padariaFoto', tema: 'lar', formato: 'Padaria com foto', nova: true, semAno: true, foto: 'maos-massa', pilula: 'Feliz Dia do Profissional da Culinária', fs: 88,
  titulo: 'Por trás de cada fornada, <b>tem quem chegou antes do sol.</b>',
  kw: '',
  cap: 'Hoje é o Dia do Profissional da Culinária, e na padaria esse dia tem cheiro de fornada.\n\nA quem chega antes de o sol nascer, acerta a massa e faz o pão sair bom todo dia, o nosso obrigado.\n\nMarque um padeiro ou confeiteiro que merece ler isso.',
  tags: '#diadoprofissionaldaculinaria #padeiro #confeiteiro #padaria',
  alts: ['Mãos segurando uma bola de massa, com o texto: por trás de cada fornada, tem quem chegou antes do sol. Feliz Dia do Profissional da Culinária.'],
  conferir: ['A data vem de uma só fonte do setor, sem lei ou calendário oficial: confirmar antes de publicar.'] },

{ data: 'Qua 06/01', seg: 'Padaria', id: 'padaria-dia-de-reis-v1', travada: true, tipo: 'padariaFoto', tema: 'lar', formato: 'Padaria com foto', nova: true, foto: 'panetone-natal', pilula: 'Leia a legenda', fs: 88,
  titulo: 'Dia de Reis: a festa acabou. <b>E o panetone que sobrou?</b>',
  kw: 'panetone na padaria',
  cap: `Panetone na padaria: hoje é Dia de Reis, a temporada acaba, e o que ficou na prateleira vira dinheiro parado.\n\nVale olhar agora quanto sobrou e quanto foi vendido, para fazer a compra e a produção do próximo Natal com número na mão. É um bom jeito de começar 2027.\n\nNo Prosystem, o relatório de dias sem giro mostra há quanto tempo cada produto não vende.\n\n${CTA}\n\nFoto: N i c o l a (Flickr), licença CC BY 2.0.`,
  tags: '#panetone #padaria #gestaodepadaria #sistemaparapadaria',
  alts: ['Panetone cortado, com uma fatia saindo, em frente a uma árvore de Natal iluminada, com o texto: Dia de Reis, a festa acabou, e o panetone que sobrou?'],
  conferir: ['Produto: o relatório de dias sem giro vale sem ajuste na padaria?'] },

{ data: 'Dom 31/01', seg: 'Farmácia', id: 'frase-janeiro-roxo-v2', travada: true, tipo: 'frase', tema: 'azul', formato: 'Frase de impacto', nova: true, semAno: true, fs: 92, laco: 'roxo',
  titulo: 'Janeiro Roxo: <b>hanseníase tem cura e tratamento pelo SUS.</b>', apoio: 'Informar também é cuidar.',
  kw: '',
  cap: 'Hoje é o Dia Nacional de Combate e Prevenção da Hanseníase, e o Janeiro Roxo lembra que informação ajuda a acabar com o preconceito.\n\nA hanseníase tem cura, e o tratamento é gratuito pelo SUS. Na dúvida, oriente o cliente a procurar a unidade básica de saúde.\n\nCompartilhe esta informação.',
  tags: '#janeiroroxo #hanseniase #farmacia',
  alts: ['Laço roxo e frase em azul sobre fundo branco: Janeiro Roxo, hanseníase tem cura e tratamento pelo SUS.'],
  conferir: ['Data de saúde: a peça encaminha para a unidade de saúde, sem orientar tratamento.', 'Cura e gratuidade vêm de secretarias de saúde, sem abrir a página do Ministério.', 'O post amplia o calendário de 22/01 para 31/01.'] },
];

// Peças prontas de outras produções: só a legenda é nova.
const PRONTAS = [
  { data: 'Seg 09/11', seg: 'Farmácia', arq: 'outputs/criativos/suporte/carrossel-farmacia-suporte-v4-<página>.png', formato: 'Carrossel V2', nota: 'Legenda e texto alternativo em `outputs/criativos/suporte/legendas.md`.' },
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
  { data: 'Ter 12/01', seg: 'Os dois', arq: 'outputs/criativos/depoimentos/depoimento-rodrigo-v2.png', formato: 'Depoimento', kw: 'sistema para farmácia e padaria', nota: 'O segmento de Rodrigo não está confirmado; por isso a legenda fala dos dois.',
    cap: `Sistema para farmácia e padaria se mede com o tempo. Treze anos juntos, e depoimentos assim são o nosso melhor argumento. Obrigado, Rodrigo.\n\nEm 2027, a ProSystem segue ao lado de mais de 600 clientes. ${CTA}`,
    tags: '#sistemaparafarmacia #sistemaparapadaria #depoimento #prosystem', alt: 'Depoimento de Rodrigo Amancio, cliente ProSystem: trabalho com eles há 13 anos e não pretendo mudar. Avaliação de cinco estrelas no Google.' },
];

function legendas(usadas) {
  const ordem = (d) => (d.data.slice(7, 9) === '01' ? '13' : d.data.slice(7, 9)) + d.data.slice(4, 6);
  const todas = [...P.filter((p) => !p.pagina), ...PRONTAS].sort((a, b) => ordem(a).localeCompare(ordem(b)));
  const telaDe = (p) => [p.tela, p.capa && p.capa.tela, p.sol && p.sol.tela, p.fim && p.fim.tela, ...(p.itens || []).map((i) => i.tela)].filter(Boolean);
  const fs = require('fs'); const path = require('path');
  const faltam = (p) => p.semMockup ? [] : [...new Set(telaDe(p))].filter((t) => !fs.existsSync(path.join(__dirname, 'mockups', t + '.png')));
  let s = '# Peças de 04/11/2026 a 31/01/2027: legendas, texto alternativo e o que falta\n\nArquivo gerado por `gerar.js`. Para mudar um texto, altere `pecas-dados.js` e gere de novo. As imagens ficam em `pecas/`, exceto as de outras produções, que têm o caminho indicado.\n\n**Pausa de 23/12 a 02/01: nenhuma publicação, exceto Natal (25/12) e Ano Novo (01/01).** **Nada aqui foi publicado.** Em 03/11/2026 a Jessica aprovou todas as peças sem mockup: as telas ficam no cartão e as peças estão travadas. Peça nova que pedir mockup aparece na lista abaixo.\n\n## Calendário\n\n| Data | Para quem | Peça | Formato | Mockup em falta |\n|---|---|---|---|---|\n';
  for (const p of todas) {
    const m = p.arq ? [] : faltam(p);
    s += `| ${p.data} | ${p.seg} | \`${p.arq ? p.arq.split('/').pop() : p.id}\` | ${p.formato} | ${m.length ? m.map((x) => '`' + x + '`').join(', ') : '-'} |\n`;
  }
  const mapa = {};
  for (const p of P) for (const t of faltam(p)) (mapa[t] = mapa[t] || []).push(p.data);
  s += '\n## Mockups que a Jessica precisa fazer\n\nSó em notebook ou desktop, em balcão do segmento ou escritório. Salve em `mockups/<nome da tela>.png`, com fundo transparente, e rode `gerar.js`: o mockup entra no lugar do cartão. Os originais estão em `banco imagens/telas-para-mockup/00-recortadas/`; os recortes feitos nesta produção estão em `telas/`.\n\n| Tela | Datas |\n|---|---|\n';
  if (!Object.keys(mapa).length) s += '| - | Nenhum mockup em falta |\n';
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
