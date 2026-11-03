# Post do 13º (padaria, 30/11): versão com painel de vidro

## Pedido
A Jessica pediu para deixar o post "O 13º vence hoje" mais bonito, "com um glass, as linhas que já definimos", com design mais profissional.

## Feito
- Nova versão `padaria-13-salario-v2` em `outputs/criativos/nov-dez/pecas/`. A v1 fica guardada como referência.
- `outputs/criativos/nov-dez/gerar.js`: o tipo `fotoPainel` ganhou três opções, sem mudar as peças que não as usam:
  - `vidro: true`: painel translúcido em laranja, com desfoque do fundo, borda branca fina, reflexo no canto de cima e sombra.
  - `tras` e `frente`: a linha única de 31/10, com uma parte por trás do painel (some no vidro) e um laço por fora do canto de cima à direita, como na peça das encomendas de Natal.
  - `cantos: true`: losangos nos cantos de baixo, um preenchido com degradê e um em contorno.
- `pecas-dados.js` e `legendas.md`: id trocado para v2. Textos, legenda e hashtags iguais aos da v1.

## Verificado
- Gerado com `node outputs/criativos/nov-dez/gerar.js padaria-13-salario-v2`: sem estouro nem texto fora da peça. Conferido em 1080×1350.
- Não verificado: aparência reduzida no celular.

## Decisões e porquês
- Mantidos foto, textos e os 3 blocos da v1; só o acabamento mudou.
- Losangos longe do texto e do logo; laranja sem azul, como pede o caderno para padaria.

## Pendente
- Jessica: aprovar a v2. Aprovada, marcar `travada: true` na peça.
- Pendências da v1 continuam: tela de DRE/fluxo de caixa, confirmação do produto e publicar só em 30/11.

## Próxima sessão
Abrir `outputs/criativos/nov-dez/pecas/padaria-13-salario-v2.png` e aplicar o que a Jessica pedir. O vidro (`vidro: true`) pode ser usado em outras peças de foto com painel.
