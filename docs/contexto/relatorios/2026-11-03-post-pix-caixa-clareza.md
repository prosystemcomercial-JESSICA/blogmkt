# 03/11/2026: post de 16/11 (padaria-pix-caixa-v1) mais claro

## Pedido
A Jessica mandou o post "O dinheiro saiu da gaveta. Você acompanha?" e disse: "precisamos ser mais claros, o que sugere para melhorar?". Em seguida, sobre as sugestões: "faça isso".

## Feito
- Título: "Feche o caixa sabendo **para onde foi cada real.**"
- Faixa: "Vendas, sangrias e cada forma de pagamento num resumo só. Versão Plus."
- Pílula: "Fale com um especialista" (antes: "Leia a legenda").
- Tela refeita em `outputs/criativos/nov-dez/telas/whats-fechamento-v2.png`, pelo script `outputs/criativos/nov-dez/tela-fechamento.js`:
  - sem os sublinhados azuis que o WhatsApp põe nos números;
  - período de um dia, 13/11/2026;
  - valores fictícios que fecham (venda líquida = total de pagamentos = R$ 1493,80);
  - linha de Sangrias e bloco das formas de pagamento marcados em laranja.
- O texto alternativo e a nota de conferência foram atualizados em `pecas-dados.js` e `legendas.md`. A legenda do post não mudou.
- O print original `banco imagens/telas-para-mockup/00-recortadas/whats-fechamento.png` não foi alterado.

## Verificado
- A peça foi gerada com `node outputs/criativos/nov-dez/gerar.js padaria-pix-caixa-v1`, com resultado "sem estouro", e conferida em tamanho real.
- Não verificado: como a peça fica com o mockup da Jessica em notebook. A tela continua num cartão provisório.

## Decisões e porquês
- Os destaques ficam dentro da tela, não em chamadas de texto ao lado. Assim a peça respeita o limite de 3 blocos de texto do caderno, e o destaque continua valendo quando a Jessica fizer o mockup.
- "Versão Plus" ficou no fim da faixa, e não num selo separado, pelo mesmo limite de 3 blocos.
- A tela antiga foi mantida e a nova recebeu o sufixo `-v2`, porque o blog e o feed simulado usam o print original.

## Pendente
- Mockup de `whats-fechamento-v2` em notebook ou desktop: fica com a Jessica.
- O `git status` mostrava alterações que não são desta tarefa: `docs/conteudo-prosystem/feed-editoriais.html`, `feed_modelo.html` e `pecas/padaria-escala-6x1-v1.png`. Ficaram fora do commit.

## Próxima sessão
Quando o mockup chegar em `outputs/criativos/nov-dez/mockups/whats-fechamento-v2.png`, rode `node outputs/criativos/nov-dez/gerar.js padaria-pix-caixa-v1` e confira a peça.
