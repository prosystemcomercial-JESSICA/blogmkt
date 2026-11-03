# 03/11/2026 — Prévia da grade do Instagram até 31/01/2027

## Pedido
"me mostre como ficara o meu perfil até o ultimo post que esta programado, faça como se fosse a grade do instagram mesmo, e coloque as datas que serão publicados"

## Feito
- Página https://claude.ai/artifact/An47vPDEwmCqeLrRbvHKDX (privada):
  - cabeçalho do perfil `prosystemoficial` com foto, bio, link e números reais, lidos da API do Instagram (`IG_TOKEN` do `.env`);
  - grade de 3 colunas no formato 3:4 do perfil, com o post mais novo primeiro;
  - os 47 posts programados de 04/11 a 31/01, com dia e data em cada um e separados por mês, mais os 12 últimos posts que já estão no perfil;
  - seletor "Ver o perfil como fica em <data>", opção para esconder as datas, e toque no post para ver a peça inteira.
- Fonte das peças: `outputs/criativos/nov-dez/pecas-dados.js` (P + PRONTAS, capa de cada carrossel). As miniaturas estão embutidas na página; nada mudou nas peças.

## Verificado
- 48 posts de feed na produção. O carrossel `carrossel-padaria-reforma-tributaria-v2`, planejado para 06/11, **já está no perfil, publicado em 03/11**: a capa da API é igual à peça. Na prévia ele aparece como "já no perfil", e os programados ficam em 47.
- Não verificado: a prévia em celular; não passei por checagem visual.

## Pendente
- A Jessica confirmar se o 06/11 saiu antes de propósito, e se a data de 06/11 fica vaga ou recebe outro post.

## Próxima sessão
- Para atualizar a prévia, refazer as miniaturas a partir de `pecas-dados.js` e da API, e publicar no mesmo link.
