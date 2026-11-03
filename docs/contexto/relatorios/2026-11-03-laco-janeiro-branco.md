# Laço branco na frase do Janeiro Branco (13/01)

## Pedido
Jessica, com print da peça `frase-janeiro-branco-v1`: "coloque o simbolo oficial do janeiro branco".

## Feito
- `outputs/criativos/nov-dez/gerar.js`: novo `LACO_BRANCO` (laço branco com contorno azul-acinzentado e sombra leve, para aparecer no fundo branco) e mapa `LACOS_FRASE` (`vermelho`, `branco`). A frase de impacto agora escolhe o laço pelo campo `laco`.
- `outputs/criativos/nov-dez/pecas-dados.js`: `laco: 'branco'` na peça de 13/01 e texto alternativo começando com "Laço branco e frase em azul...".
- `outputs/criativos/nov-dez/pecas/frase-janeiro-branco-v1.png` gerado de novo.
- `outputs/criativos/nov-dez/legendas.md`: só a linha do texto alternativo foi trocada (o arquivo só é regerado quando a geração roda completa).
- Commit automático `e9e6c78` (hook) com gerar.js, dados e PNG; legendas e este relatório vão em um commit à parte.

## Verificado
- `node gerar.js frase-janeiro-branco-v1`: "sem estouro". PNG conferido visualmente: o laço fica acima do título, no mesmo lugar e tamanho do laço do Dezembro Vermelho.
- A Jessica ainda não aprovou a peça (não verificado).

## Decisões e porquês
- Símbolo usado: o laço branco, que é o símbolo usado na campanha. Não usei a logomarca do Instituto Janeiro Branco (marca de terceiro).
- Branco no fundo branco some, então o laço tem contorno `#6f8fb8` e a parte de trás num cinza-azulado claro. A primeira versão, com contorno mais claro, ficou apagada demais.

## Pendente
- Jessica aprova o laço ou pede outro tratamento (por exemplo, laço dentro de um selo azul, como o do Novembro Azul).
- Continua a dúvida original da peça: se a data de saúde combina com a marca (decide a Jessica).

## Próxima sessão
Se ela pedir ajuste, mexer em `LACO_BRANCO` em `gerar.js` e rodar `node gerar.js frase-janeiro-branco-v1`. Se aprovar, marcar `travada: true` na peça em `pecas-dados.js`.
