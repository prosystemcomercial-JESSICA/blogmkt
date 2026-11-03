# 03/11/2026: post da escala 6x1 (19/11), texto mais claro

## Pedido
A Jessica achou confuso o texto do post `padaria-escala-6x1-v1` ("Aqui também está confuso").

## Problema
- Título "a hora fica 4,8% mais cara": não dizia de quem é a hora.
- Faixa "Em dezembro de 2027, 10%. Conta da Fenacon.": telegráfica, sem dizer o que muda.

## Feito
- `outputs/criativos/nov-dez/pecas-dados.js`:
  - Título: "Fim da escala 6x1:<br>**a hora do funcionário fica 4,8% mais cara.**" (fs 66; a quebra evita o "a" solto no fim da 1ª linha).
  - Faixa: "Em 16/12, a semana cai para 42 horas com o mesmo salário. Em dezembro de 2027, cai para 40 e a hora sobe 10%."
  - Texto alternativo atualizado (também em `legendas.md`).
- Mesmo título e faixa em `docs/conteudo-prosystem/feed_modelo.html` e `feed-editoriais.html`.
- Peça gerada de novo: `outputs/criativos/nov-dez/pecas/padaria-escala-6x1-v1.png`. Legenda não mudou.

## Verificado
- `node outputs/criativos/nov-dez/gerar.js padaria-escala-6x1-v1`: "sem estouro". Abri o PNG e conferi as quebras de linha.
- Não verificado: galeria de revisão e documento de planejamento no Claude Docs não foram alterados.

## Decisões
- "Fenacon" saiu da arte e ficou só na legenda, onde a fonte já é citada; na arte, ela confundia mais do que ajudava.

## Pendente
- A Jessica aprovar a arte (decide: Jessica).
