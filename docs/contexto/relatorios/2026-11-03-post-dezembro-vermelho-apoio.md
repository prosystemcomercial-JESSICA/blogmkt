# 03/11/2026: post do Dezembro Vermelho (01/12), sem "Compartilhe com a sua equipe"

## Pedido
A Jessica pediu para melhorar o post `frase-dezembro-vermelho-v2`, tirando "Compartilhe com a sua equipe." Segue a mesma linha do post do antibiótico: frase de apoio informativa, sem pedir ação.

## Feito
- `outputs/criativos/nov-dez/pecas-dados.js`:
  - Apoio da arte: "1º de dezembro, Dia Mundial<br>de Luta contra a Aids." A quebra de linha deixa as duas linhas equilibradas.
  - Última linha da legenda: "Atendimento discreto também é o que faz o cliente voltar."
- `outputs/criativos/nov-dez/legendas.md`: mesma troca na legenda, feita à mão.
- Peça gerada de novo: `outputs/criativos/nov-dez/pecas/frase-dezembro-vermelho-v2.png`.
- Essas três mudanças entraram no commit fb67921 ("Post do 13º (padaria)"), feito por outra sessão que trabalhava ao mesmo tempo e commitou os arquivos inteiros.

## Verificado
- `node outputs/criativos/nov-dez/gerar.js frase-dezembro-vermelho-v2`: "sem estouro". Abri o PNG e conferi as duas linhas do apoio.
- Não verificado: a galeria de revisão e o planejamento no Claude Docs não foram alterados.

## Decisões e porquês
- O apoio diz a data e o nome oficial do dia, que é informação e explica o "Dezembro Vermelho" do título.
- A legenda já abre com o Dia Mundial, então o fecho fala do resultado para a loja (cliente que volta), em vez de repetir a data.

## Pendente
- A Jessica aprovar a arte (decide: Jessica).
