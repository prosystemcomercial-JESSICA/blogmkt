# Frase do registro de sobras (padaria, 25/01)

## Pedido
A Jessica mandou o print da citação do artigo de sobras ("Sobra sem registro vira opinião. Sobra registrada vira decisão para a fornada de amanhã.") e pediu: "Quero usar essa frase para criar um post".

## Feito
- Nova peça `frase-padaria-registro-sobras-v1` em `outputs/criativos/nov-dez/pecas-dados.js` (tipo Frase de impacto, padaria em laranja, fundo branco, losangos), com legenda, hashtags, texto alternativo e itens a conferir.
- PNG em `outputs/criativos/nov-dez/pecas/frase-padaria-registro-sobras-v1.png`.
- `outputs/criativos/nov-dez/legendas.md` regenerado. Junto vieram duas correções de atraso: o texto alternativo do panetone novo (06/01) e a data 14/01 na tela `precificacao`.

## Verificado
- Gerador sem estouro de texto; peça conferida no tamanho real, em Montserrat.
- A primeira geração saiu com fonte de reserva (Google Fonts não carregou); gerada de novo e conferida.
- Artigo de origem: `blog/_gerador/artigos/a08_sobras.py` (slug `controle-de-sobras-padaria-ajustar-producao`). Se ele já está publicado no site: não verificado.

## Decisões e porquês
- Data Seg 25/01: único buraco de padaria depois da peça de 11/01, que anuncia o artigo; as segundas já levam frases.
- Quebra de linha depois de "opinião." para cada frase começar na sua linha. Peso fino com extrabold em "opinião" e "decisão".
- Apoio "Leia a legenda.", como nas outras frases; a legenda leva ao artigo e cita o PDV (venda por produto e horário, o mesmo argumento do artigo) e 2027.

## Pendente
- Jessica: aprovar a peça e a data (pode mudar).
- Conferir se o artigo de sobras está no ar antes de 25/01 e o volume de "controle de sobras na padaria".

## Próxima sessão
Se aprovada, marcar `travada: true` na peça em `pecas-dados.js`. Para gerar só ela: `node outputs/criativos/nov-dez/gerar.js frase-padaria-registro-sobras-v1` e conferir a fonte no PNG.
