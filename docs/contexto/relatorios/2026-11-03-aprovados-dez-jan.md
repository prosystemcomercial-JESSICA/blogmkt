# 03/11/2026 — 4 posts aprovados no documento (01/12, 07/12, 11/12, 19/01)

## Pedido
"arquivo aprovado, atualize"

## Feito
- Lido o documento https://claude.ai/artifact/3nx4JXdXoomuc4SZF91rCj (rev 35): Aprovado em 01/12, 07/12, 11/12 e 19/01; 04/12 sem decisão; nenhum pedido de alteração.
- `outputs/criativos/nov-dez/pecas-dados.js`: `travada: true` em `frase-dezembro-vermelho-v2` (01/12), que não espera mockup.
- Documento (rev 39), mesmo link:
  - Resumo: falta 1 post (carrossel da sangria, 04/12); 15 aprovados esperam mockup.
  - Saíram as seções de 01/12, 07/12, 11/12 e o mês de Janeiro (ficou sem pendentes).
  - Tabela "Já aprovados" com 30 linhas: 01/12 travado; 07/12 (`receitas-scanner`), 11/12 (`uso-continuo-proxima-compra`, `uso-continuo-alerta`, `uso-continuo-relatorio`) e 19/01 (`atencao-anamnese`) com o mockup que falta.

## Verificado
- `pecas-dados.js` carrega no Node sem erro.
- Estrutura do documento relida depois da edição: só a seção 04/12 em Dezembro, tabela com 30 aprovados.

## Decisões e porquês
- 07/12, 11/12 e 19/01 não foram travados: peça travada não é gerada de novo, e o mockup ainda tem de entrar (mesma regra das sessões anteriores).

## Pendente
- 04/12 (`carrossel-padaria-sangria-v2`): decisão da Jessica no documento.
- Mockups das telas listadas na tabela: Jessica.

## Próxima sessão
- Ler a decisão do 04/12 no documento (`read` com `sinceRev: 39`). Quando um mockup entrar, gerar a peça, travar e mudar a linha na tabela "Já aprovados".
