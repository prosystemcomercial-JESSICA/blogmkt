# 03/11/2026: reforma tributária (CBS) em duas peças de farmácia

## Pedido
A Jessica aprovou a arte com tela "2027 começou, e a CBS também. Você já refez a conta?". Às 14:48, outra sessão tinha trocado o `farmacia-cbs-v1` por uma frase de impacto. Ela pediu para manter as duas e aproveitar o assunto. Também disse que pode haver postagens até 20/01.

## Feito
- `outputs/criativos/nov-dez/pecas-dados.js`:
  - `farmacia-cbs-v1` (Seg 04/01) continua como frase: "A Prosystem já está pronta para o IBS e a CBS. E a sua farmácia?"
  - Nova peça `farmacia-cbs-tela-v1` (Qui 14/01), `travada: true`. É a versão com a tela de precificação, com a legenda reescrita para não repetir a de 04/01: esta fala em rever custo, imposto e margem.
- `outputs/criativos/nov-dez/pecas/farmacia-cbs-tela-v1.png`: a arte aprovada, recuperada do git (versão anterior ao commit 23bd86e). É o mesmo arquivo, com o mesmo md5.
- `outputs/criativos/nov-dez/legendas.md`: linha na tabela e seção da peça de 14/01, feitas à mão.

## Verificado
- `node gerar.js farmacia-cbs-tela-v1`: roda sem erro e não regera a peça travada. O md5 do PNG continua igual ao da arte aprovada.
- Abri o PNG: é a arte aprovada.
- Não verificado: a galeria de revisão e o planejamento no Claude Docs não foram atualizados.

## Decisões e porquês
- 14/01 era o primeiro dia de farmácia livre depois de 04/01, dentro do limite de 20/01. O dia 12/01 já tem o depoimento do Rodrigo.
- A frase anuncia (04/01) e a peça com tela mostra onde refazer o preço (14/01).

## Pendente
- A Jessica aprovar a frase de 04/01 (decide: Jessica).
- Pedir uma captura nova da tela de precificação, porque a atual é antiga e cita ICMS_ST. A arte foi aprovada assim mesmo (decide: Jessica).
- Antes de publicar, preencher a taxa da CBS na legenda de 04/01.
