// Postagens do Perfil da Empresa no Google, de 05/11/2026 a 20/01/2027.
// Ritmo: quinta-feira às 9h, com pausa de 23/12 a 02/01. Exceções: 25/11 (encomendas, junto com o Instagram e o blog),
// 12/01 (sobras, ligada ao post do Instagram de 11/01) e 20/01 (Dia do Farmacêutico).
// tema: 'azul' (farmácia ou os dois segmentos) ou 'lar' (padaria). Fotos: mesmas pastas de nov-dez/gerar.js, uma por post.
// Links só para páginas que estavam no ar em 03/11/2026.
const BLOG = 'https://prosystemnet.com/blog/';

const P = [
  {
    data: '2026-11-05', dia: 'Qui 05/11', seg: 'Farmácia', id: 'reforma-tributaria-farmacia-2027', tema: 'azul',
    foto: 'prateleiras-desfocadas', posicao: '50% 50%',
    palavra: 'reforma tributária na farmácia',
    titulo: 'Reforma tributária: <b>sua farmácia já tem o preço de 2027?</b>',
    faixa: 'Em 2027, a CBS entra no lugar do PIS e da Cofins.', pilula: 'Leia no blog',
    botao: 'Saiba mais', link: BLOG + 'simples-nacional-2027-prazo-opcao-ibs-cbs-farmacia-padaria/',
    texto: `Reforma tributária na farmácia: em 2027, a CBS entra no lugar do PIS e da Cofins, e o imposto muda dentro do preço de cada produto. Quem deixa a revisão para janeiro corre o risco de vender as primeiras semanas do ano com a margem errada.

Três passos para fazer ainda em novembro:
1. Confirme com o contador em qual regime a farmácia fica em 2027.
2. Revise o cadastro fiscal dos produtos que mais vendem.
3. Refaça a conta do preço com o custo de compra atualizado.

No Prosystem, a precificação mostra a composição do custo e a fórmula do preço de venda de cada item. Assim, você ajusta a margem com os números na tela, e não de cabeça.

No blog, veja o que muda no Simples Nacional em 2027 para farmácias e padarias.`,
  },
  {
    data: '2026-11-12', dia: 'Qui 12/11', seg: 'Padaria', id: 'preco-pao-frances-ficha-tecnica', tema: 'lar',
    foto: 'farinha-trigo', posicao: '50% 45%',
    palavra: 'preço do pão francês',
    titulo: 'Pão francês: <b>o preço ainda paga a receita?</b>',
    faixa: 'A ficha técnica mostra quanto custa cada fornada.', pilula: 'Leia no blog',
    botao: 'Saiba mais', link: BLOG + 'ficha-tecnica-padaria-padronizar-receitas-rendimento/',
    texto: `Preço do pão francês: quando a farinha, o gás e a energia sobem e o preço na vitrine fica igual, a diferença sai do seu lucro. A Conab prevê produção de trigo 26% menor no Brasil em 2026, e entrar em 2027 com o preço antigo é vender muito e sobrar pouco.

Comece pela ficha técnica: quanto de cada ingrediente vai na receita, quanto ela rende e quanto custa cada unidade. Com esse número, a conta do preço deixa de ser chute.

No Prosystem, a precificação junta o custo do produto e as despesas da loja na fórmula do preço de venda.

No blog, veja como montar a ficha técnica da padaria e padronizar o rendimento das receitas.`,
  },
  {
    data: '2026-11-19', dia: 'Qui 19/11', seg: 'Farmácia', id: 'black-friday-farmacia-desconto-margem', tema: 'azul',
    foto: 'prateleiras-escuras', posicao: '50% 50%',
    palavra: 'desconto na Black Friday',
    titulo: 'Desconto de 10% <b>pede 50% a mais de venda.</b>',
    faixa: 'Com margem de 30%, é a conta para empatar o lucro.', pilula: 'Faça a conta antes de 27/11',
    botao: 'Saiba mais', link: BLOG + 'vender-mais-nao-e-lucrar-mais-margem-varejo/',
    texto: `Desconto na Black Friday: antes de colocar 10% em toda a loja, faça esta conta. Um produto que custa R$ 70 e sai por R$ 100 tem margem de 30%, ou R$ 30. Com 10% de desconto, a margem cai para R$ 20, e você precisa vender 50% a mais só para lucrar o mesmo.

Desconto bom é o que traz cliente sem levar o lucro junto. Escolha os itens com margem para isso e acompanhe o resultado no dia seguinte.

No Prosystem, a análise de descontos mostra a participação, o desconto médio e a rentabilidade de cada item. Ela também projeta a venda e a rentabilidade com outro percentual, antes de você mudar a etiqueta.

A Black Friday é em 27/11. No blog, veja por que vender mais nem sempre é lucrar mais, e leve a conta para as promoções de 2027.`,
  },
  {
    data: '2026-11-25', dia: 'Qua 25/11', seg: 'Padaria', id: 'encomendas-natal-padaria', tema: 'lar',
    foto: 'panetone-mesa', posicao: '50% 40%',
    palavra: 'encomendas de Natal na padaria',
    titulo: 'Encomenda de Natal no caderno. <b>E se faltar?</b>',
    faixa: '5 combinados para anotar pedido, sinal e retirada.', pilula: 'Leia no blog',
    botao: 'Saiba mais', link: 'https://prosystemnet.com/padaria/',
    linkDepois: BLOG + 'encomendas-de-natal-padaria-5-combinados/',
    texto: `Encomendas de Natal na padaria: o pedido anotado às pressas vira erro na retirada, em pleno dia 24. Combine as regras agora, um mês antes, e a lista de dezembro sai sem susto.

Os 5 combinados:
1. Nome e um contato de quem pediu.
2. Item e quantidade, sem abreviar: sabor, tamanho e peso.
3. Dia e hora da retirada.
4. Sinal combinado e registrado, com a regra para cancelamento.
5. Data limite para aceitar pedido, pelo que a produção consegue entregar.

Uma ficha por pedido, com esses cinco campos, já resolve a maior parte dos problemas.

No blog, veja o modelo da ficha e o que muda para a padaria do Simples em 2027.`,
  },
  {
    data: '2026-12-03', dia: 'Qui 03/12', seg: 'Os dois', id: 'sangria-caixa-dezembro', tema: 'azul',
    foto: 'maos-digitando', posicao: '50% 50%',
    palavra: 'sangria de caixa',
    titulo: 'Quanto dinheiro tem <b>na sua gaveta agora?</b>',
    faixa: 'O caixa avisa a hora da sangria, mesmo no pico.', pilula: 'Fale com a ProSystem',
    botao: 'Saiba mais', link: 'https://prosystemnet.com/contato/',
    texto: `Sangria de caixa em dezembro: com o 13º no bolso do cliente, o movimento sobe e o dinheiro acumula na gaveta. Quando a retirada depende da memória do operador, ela fica para depois, justo nos dias de mais risco.

Defina um valor máximo em dinheiro por caixa e trate a sangria como parte da rotina, não como lembrete.

No Prosystem, o alerta de sangria obrigatória avisa o operador quando a gaveta chega a um valor e, a partir de outro, só libera novas vendas depois da sangria. Os dois valores são definidos pela loja.

Serve para farmácia e padaria. Fale com a ProSystem e veja como fica no seu caixa antes de 2027.`,
  },
  {
    data: '2026-12-10', dia: 'Qui 10/12', seg: 'Padaria', id: 'kits-natal-padaria-combo', tema: 'lar',
    foto: 'croissants-bandeja', posicao: '50% 50%',
    palavra: 'kit de Natal na padaria',
    titulo: 'Kit de Natal <b>sem calculadora no caixa.</b>',
    faixa: 'Cadastre o combo uma vez. O desconto entra na venda.', pilula: 'Conheça o sistema',
    botao: 'Saiba mais', link: 'https://prosystemnet.com/padaria/',
    texto: `Kit de Natal na padaria: panetone, pão e frios juntos vendem bem, mas o desconto calculado na hora, no caixa, gera fila e erro de preço.

Monte os kits antes: escolha os itens, defina o preço do conjunto e confira se a margem continua boa depois do desconto.

No Prosystem, você cadastra combos e kits uma vez, com leve e pague, desconto progressivo ou produtos vinculados. Na venda, o desconto entra sozinho e o operador só passa os itens.

Kits que vendem no Natal podem voltar em outras datas de 2027. Conheça o sistema para padarias.`,
  },
  {
    data: '2026-12-17', dia: 'Qui 17/12', seg: 'Os dois', id: 'fechamento-caixa-whatsapp', tema: 'azul',
    foto: 'maos-teclado-mesa', posicao: '50% 50%',
    palavra: 'fechamento de caixa',
    titulo: 'O caixa fechou. <b>O resumo chega no seu WhatsApp.</b>',
    faixa: 'Vendas e formas de pagamento do dia. Versão Plus.', pilula: 'Fale com a ProSystem',
    botao: 'Saiba mais', link: 'https://prosystemnet.com/contato/',
    texto: `Fechamento de caixa no fim de ano: são os dias de mais venda e, muitas vezes, os dias em que o dono menos consegue estar na loja.

Com os avisos via WhatsApp do Prosystem, o resumo do fechamento chega no WhatsApp das pessoas que você escolher. Além do caixa, dá para receber vendas, contas, metas, compras e inventário, sem ligar para ninguém.

A função faz parte da versão Plus e serve para farmácia e padaria.

Quer começar 2027 acompanhando a loja de onde estiver? Fale com a ProSystem. O suporte atende das 7h às 22h.`,
  },
  {
    data: '2027-01-07', dia: 'Qui 07/01', seg: 'Os dois', id: 'simples-nacional-2027-ibs-cbs', tema: 'azul',
    foto: 'calculadora', posicao: '50% 50%',
    palavra: 'Simples Nacional 2027',
    titulo: 'Simples Nacional em 2027: <b>o que fazer agora.</b>',
    faixa: 'Em março, nova escolha de IBS e CBS para o 2º semestre.', pilula: 'Leia no blog',
    botao: 'Saiba mais', link: BLOG + 'simples-nacional-2027-prazo-opcao-ibs-cbs-farmacia-padaria/',
    texto: `Simples Nacional 2027: a farmácia ou padaria que já era do Simples e estava em dia continua no regime, sem pedir nada. Quem não fez a opção até 30 de outubro de 2026 segue com o IBS e a CBS dentro do DAS, como os outros tributos.

A próxima data é março de 2027, quando abre a nova escolha de IBS e CBS para o segundo semestre. Para quem vende ao consumidor final, pagar por fora raramente compensa, mas a decisão é com o contador.

Para janeiro:
1. Confira com o contador a primeira guia do ano.
2. Revise o cadastro fiscal dos produtos novos.
3. Atualize custo e preço com as notas de compra de janeiro.

No blog, veja o calendário completo. Dúvidas sobre o sistema: o suporte da ProSystem atende das 7h às 22h.`,
  },
  {
    data: '2027-01-12', dia: 'Ter 12/01', seg: 'Padaria', id: 'sobra-de-pao-padaria', tema: 'lar',
    foto: 'paes-prateleira-sem-etiqueta', posicao: '50% 50%',
    palavra: 'sobra de pão na padaria',
    titulo: 'Pão que sobra <b>também é prejuízo.</b>',
    faixa: 'Registre a sobra por produto e por horário.', pilula: 'Leia no blog',
    botao: 'Saiba mais', link: BLOG + 'controle-de-sobras-padaria-ajustar-producao/',
    texto: `Sobra de pão na padaria é dinheiro que já virou farinha, gás, energia e hora de trabalho. O Sebrae recomenda registrar as sobras todo dia e usar esses dados para ajustar a produção.

Como começar em 2027:
1. Anote, por produto e por fornada, quanto foi produzido, vendido e sobrou.
2. Compare os mesmos dias da semana nas últimas semanas.
3. Ajuste a fornada que mais sobra, uma de cada vez.

No Prosystem, a curva ABC mostra quais itens mais pesam nas vendas em valor e em quantidade. É por eles que vale começar o controle.

No blog, veja o modelo de registro e o que fazer com o pão que sobrou.`,
  },
  {
    data: '2027-01-14', dia: 'Qui 14/01', seg: 'Farmácia', id: 'sncr-receita-eletronica-controlados', tema: 'azul',
    foto: 'teclado-azul', posicao: '50% 50%',
    palavra: 'receita eletrônica de controlados',
    titulo: 'Receita eletrônica de controlados <b>com numeração do SNCR.</b>',
    faixa: 'O papel continua valendo. O SNCR não substitui o SNGPC.', pilula: 'Leia no blog',
    botao: 'Saiba mais', link: BLOG + 'sncr-receita-eletronica-controlados-farmacia-2026/',
    texto: `Receita eletrônica de controlados: desde 30 de outubro de 2026, as receitas de controle especial e de retenção emitidas eletronicamente precisam vir com numeração do SNCR, o sistema da Anvisa. A farmácia consulta a numeração e registra o uso, o que impede que a mesma receita seja aviada duas vezes.

O que a equipe do balcão precisa saber em 2027:
1. A receita em papel continua válida.
2. O SNCR não substitui o SNGPC.
3. O responsável legal libera os perfis da equipe no Cadastro Anvisa.

No blog, veja o passo a passo do SNCR na drogaria.`,
  },
  {
    data: '2027-01-20', dia: 'Qua 20/01', seg: 'Farmácia', id: 'dia-do-farmaceutico', tema: 'azul',
    foto: 'farmaceutica-prateleira', posicao: '50% 30%',
    palavra: 'Dia do Farmacêutico',
    titulo: 'Feliz Dia do <b>Farmacêutico.</b>',
    faixa: '20 de janeiro. Obrigado a quem cuida no balcão.', pilula: 'ProSystem Sistemas',
    botao: 'Saiba mais', link: 'https://prosystemnet.com/drogaria/',
    texto: `Dia do Farmacêutico, 20 de janeiro: hoje a ProSystem agradece a quem confere a receita, orienta o cliente e cuida de cada atendimento no balcão.

O farmacêutico é a pessoa que o cliente procura quando tem dúvida. Para ele ter tempo para isso, o sistema precisa cuidar do resto.

No Prosystem, a atenção farmacêutica guarda a ficha de acompanhamento do paciente, com os registros de cada atendimento. Assim, o próximo atendimento começa de onde o último parou.

Um ótimo 2027 a todos os farmacêuticos que trabalham com a gente.`,
  },
];

module.exports = { P };
