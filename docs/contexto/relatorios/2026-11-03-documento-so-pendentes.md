# 03/11/2026 — Documento "Criativos que faltam aprovar" só com os pendentes

## Pedido
"agora me da o arquivo atualizado com o que falta aprovar"

## Situação lida (documento rev 30 + `pecas-dados.js`)
- 20 posts marcados como Aprovado no documento, nenhum pedido de alteração.
- 6 posts sem decisão no documento já tinham sido aprovados e travados em outra sessão: 21/12, 04/01, 06/01, 13/01, 20/01 (agora `farmacia-dia-do-farmaceutico-v2`) e 31/01.
- Pendentes de verdade: 5 posts.

## Feito
- Documento https://claude.ai/artifact/3nx4JXdXoomuc4SZF91rCj, mesmo link:
  - Resumo novo: faltam 5 posts (01/12, 04/12, 07/12, 11/12 e 19/01).
  - Saíram as seções dos posts já decididos, junto com o mês de Novembro, que ficou sem pendentes.
  - Imagens atuais em todos os 5 pendentes (01/12 e 07/12 nesta tarefa; 04/12, 11/12 e 19/01 na tarefa anterior).
  - Seção nova "Já aprovados": tabela com os 26 aprovados (data, post, situação: travado, pronto ou mockup que falta).
- `pecas-dados.js`: `travada: true` nos 6 aprovados que não esperam mockup: `padaria-encomendas-natal-v2`, `frase-farmacia-lucro-v1`, `padaria-dia-da-culinaria-v2`, `frase-escala-hoje-v2`, `frase-padaria-sobra-v1`, `carrossel-farmacia-sncr-v2`. O commit automático 257ed52 já incluiu essa mudança.

## Decisões e porquês
- Os 12 aprovados que esperam mockup não foram travados. Peça travada não é gerada de novo, então o mockup não entraria. Mesma regra usada no 04/11.
- A seção "O que depende de outras pessoas" ficou como estava.

## Verificado
- Estrutura do documento relida depois da edição: 5 pendentes, tabela de aprovados e seção de dependências.
- Não verificado: as imagens abertas no navegador.

## Próxima sessão
- Ler as decisões dos 5 pendentes. Os aprovados sem mockup pendente (01/12) podem ser travados; os outros só depois do mockup.
- Quando um mockup entrar, gerar a peça, travar e mudar a linha na tabela "Já aprovados".
