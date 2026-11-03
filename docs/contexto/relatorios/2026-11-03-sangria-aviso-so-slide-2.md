# 03/11/2026 — Carrossel da sangria (padaria, 04/12): aviso só no slide 2

## Pedido
"Coloque a imagem do aviso da sangria apenas no slide 2, não repita nos demais."

## Feito
- `outputs/criativos/nov-dez/pecas-dados.js` (peça `carrossel-padaria-sangria-v2`): tirada a tela da capa (era `sangria-bloqueio`) e do slide 5 (era `sangria-aviso`). Os dois ficam só com a foto e o texto.
- Textos alternativos dos slides 1 e 5 atualizados para não citar o aviso.
- Regeradas as imagens com `node gerar.js carrossel-padaria-sangria-v2` (`outputs/criativos/nov-dez/pecas/carrossel-padaria-sangria-v2-1.png` a `-6.png`).

## Verificado
- O gerador rodou sem estouro de texto. Conferi visualmente os slides 1 e 5 já sem a janela de aviso.

## Decisões e porquês
- O slide 3 continua com a tela "Caixa bloqueado", porque ela ilustra o texto "o caixa trava" e é outra tela, não o aviso. Os slides 4 e 6 continuam com a tela de registro.

## Pendente
- A Jessica decide se o slide 3 também deve ficar sem a tela de bloqueio.

## Próxima sessão
- Se for pedido, tirar `tela: 'sangria-bloqueio'` do item 2 em `pecas-dados.js` e rodar o gerador de novo com o id da peça.
