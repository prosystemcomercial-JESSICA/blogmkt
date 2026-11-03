# Laço roxo na frase do Janeiro Roxo (31/01)

## Pedido
Jessica, com print da peça `frase-janeiro-roxo-v2`: "coloque o simbolo oficial da campanha".

## Feito
- `outputs/criativos/nov-dez/gerar.js`: novo `LACO_ROXO` (roxo escuro `#4a1f7a` atrás, roxo `#7b3fb8` na frente), no mapa `LACOS_FRASE`.
- `outputs/criativos/nov-dez/pecas-dados.js`: `laco: 'roxo'` na peça de 31/01 e texto alternativo começando com "Laço roxo e frase em azul...".
- `outputs/criativos/nov-dez/legendas.md`: só a linha do texto alternativo foi trocada.
- `outputs/criativos/nov-dez/pecas/frase-janeiro-roxo-v2.png` gerado de novo.

## Verificado
- `node gerar.js frase-janeiro-roxo-v2`: "sem estouro". PNG conferido: o laço fica acima do título, no mesmo lugar e tamanho dos laços do Dezembro Vermelho e do Janeiro Branco.

## Decisões e porquês
- Símbolo usado: o laço roxo, que identifica o Janeiro Roxo. Sem logomarca de órgão ou instituição (marca de terceiro).

## Pendente
- ~~Aprovação do laço~~: aprovado pela Jessica em 03/11/2026; peça travada (`travada: true`).

## Próxima sessão
Peça aprovada e travada: não gerar de novo. Para mudar, a Jessica precisa pedir e tirar `travada: true` em `pecas-dados.js`.
