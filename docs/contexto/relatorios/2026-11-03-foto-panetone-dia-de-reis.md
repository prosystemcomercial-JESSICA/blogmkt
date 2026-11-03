# 03/11/2026 — Foto do panetone na peça do Dia de Reis

## Pedido
"coloque uma foto mais bonita de panetone" na peça `padaria-dia-de-reis-v1` (06/01, Padaria com foto).

## Feito
- Nova foto `outputs/criativos/nov-dez/fotos/panetone-natal.jpg` (panetone cortado com uma fatia saindo, árvore de Natal desfocada atrás), 1920×1280, do Wikimedia Commons.
- `outputs/criativos/nov-dez/pecas-dados.js`: `foto: 'panetone-natal'` e o texto alternativo atualizado.
- Crédito em `outputs/criativos/nov-dez/fotos/CREDITOS.md`.
- Peça regerada: `outputs/criativos/nov-dez/pecas/padaria-dia-de-reis-v1.png`.
- Os commits automáticos be42f33 e c6001ab já foram enviados para origin/main.

## Verificado
- `node gerar.js padaria-dia-de-reis-v1` rodou sem estouro. Conferi o PNG a olho: título, foto e pílula estão no lugar.

## Decisões e porquês
- As fotos CC0 de panetone no Commons eram fracas (fundo de jornal, foto de celular). Por isso escolhi uma CC BY 2.0 (autor "N i c o l a", Flickr), que pede crédito.
- A `panetone-mesa.jpg` antiga ficou na pasta porque o post do Google (`outputs/criativos/google-nov-jan/dados.js`) ainda usa ela.

## Pendente
- A licença CC BY pede crédito ao autor. A Jessica decide se põe o crédito na legenda do post ou se troca por uma foto própria ou CC0.
- Aprovação da Jessica para travar a peça.

## Próxima sessão
- Se ela aprovar, marcar a peça como travada. Se quiser trocar também a foto do post do Google, usar a mesma `panetone-natal`.

## Aprovação
A Jessica aprovou a peça com a foto nova, e ela foi marcada com `travada: true` em `pecas-dados.js`.

## Crédito na legenda
A Jessica concordou: a legenda (`cap` em `pecas-dados.js` e `legendas.md`) termina com "Foto: N i c o l a (Flickr), licença CC BY 2.0.", que atende a licença.
