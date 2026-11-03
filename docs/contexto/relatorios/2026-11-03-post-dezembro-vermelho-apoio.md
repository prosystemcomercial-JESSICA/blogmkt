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

---

## Continuação: laço vermelho na arte

### Pedido
"coloque o simbolo do dezembro vermelho" na peça `frase-dezembro-vermelho-v2`.

### Feito
- `outputs/criativos/nov-dez/gerar.js`: novo `LACO_VERMELHO` (mesmo desenho do laço do Novembro Azul, em dois vermelhos, sem o selo branco) e o tipo `frase` passa a aceitar `laco: 'vermelho'`, que põe o laço centralizado acima do título.
- `outputs/criativos/nov-dez/pecas-dados.js`: `laco: 'vermelho'` na peça e texto alternativo citando o laço.
- PNG gerado de novo: `outputs/criativos/nov-dez/pecas/frase-dezembro-vermelho-v2.png`.

### Verificado
- `node gerar.js frase-dezembro-vermelho-v2`: "sem estouro". Abri o PNG: laço vermelho acima do título, texto intacto.
- Não verificado: `legendas.md` não foi regenerado (a legenda não mudou) e a galeria/Claude Docs não foram atualizados.

### Decisões e porquês
- Laço solto sobre o branco, sem o círculo branco do Novembro Azul: aqui o fundo já é branco e o círculo não apareceria.
- O vermelho fica só no símbolo; o texto continua azul da marca.

### Pendente
- A Jessica aprovar a arte com o laço (decide: Jessica).

### Próxima sessão
- Se ela pedir ajuste de tamanho/posição do laço, mexer em `LACO_VERMELHO` em `gerar.js` e rodar `node gerar.js frase-dezembro-vermelho-v2`.
