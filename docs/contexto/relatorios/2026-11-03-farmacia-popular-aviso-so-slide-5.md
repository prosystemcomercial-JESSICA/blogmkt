# 03/11/2026 — Carrossel da Farmácia Popular (farmácia, 07/12): aviso só no slide 5

## Pedido
"Deixe o aviso apenas no slide 5, tire dos demais."

## Feito
- `outputs/criativos/nov-dez/pecas-dados.js` (peça `carrossel-farmacia-popular-v2`): tirada a tela `receitas-scanner` da capa e do slide 6. Ela fica só no slide 5 ("Receita guardada, sem pilha de caixa").
- Textos alternativos dos slides 1 e 6 atualizados para não citar a tela.
- Regeradas as imagens com `node gerar.js carrossel-farmacia-popular-v2` (`outputs/criativos/nov-dez/pecas/carrossel-farmacia-popular-v2-1.png` a `-6.png`).

## Verificado
- O gerador rodou sem estouro de texto. Conferi visualmente: capa e slide 6 sem a janela; slide 5 com ela.

## Pendente
- A tela `receitas-scanner` ainda aguarda o mockup da Jessica (agora só no slide 5).
