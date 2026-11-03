# Frase "Vender mais não é lucrar mais" (27/11): chamada sem "marque"

## Pedido
A Jessica pediu para reformular a chamada da peça `frase-farmacia-lucro-v1` e "tirar esse negócio de marcar".

## Feito
- `outputs/criativos/nov-dez/pecas-dados.js`: o apoio da arte passou de "Marque quem olha o caixa da farmácia." para "Na Black Friday, o que conta é o que sobra.".
- O fim da legenda passou a ser "Quanto sobrou da sua última promoção? Se a resposta demorou, fale com um especialista pelo link da bio." (mesmo trecho trocado em `outputs/criativos/nov-dez/legendas.md`).
- PNG gerado de novo: `outputs/criativos/nov-dez/pecas/frase-farmacia-lucro-v1.png`.

## Verificado
- `node gerar.js frase-farmacia-lucro-v1` rodou sem estouro de texto; a imagem foi aberta e conferida (apoio cabe em uma linha).

## Decisões e porquês
- O apoio liga a frase à data (27/11 é Black Friday) e repete a ideia "o que sobra" da legenda, sem pedir ação.
- A legenda troca o "marque" por uma pergunta e pelo CTA padrão do especialista.

## Pendente
- Aprovação da Jessica para a nova chamada.

## Próxima sessão
Se ela pedir outra opção, mudar `apoio` em `pecas-dados.js` e rodar `node outputs/criativos/nov-dez/gerar.js frase-farmacia-lucro-v1`.
