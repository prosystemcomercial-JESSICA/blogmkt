# 03/11/2026 — Criativos de 04/11 a 31/01: todos aprovados e travados sem mockup

## Pedido
"Pode aprovar todos, sem mockups, do jeito que ja aprovei os conteudos"

## Feito
- `outputs/criativos/nov-dez/pecas-dados.js`:
  - `travada: true, semMockup: true` nas 17 peças que ainda esperavam mockup;
  - `semMockup: true` em `padaria-escala-6x1-v1` e `farmacia-cbs-tela-v1`, que já estavam travadas mas ainda pediam mockup;
  - as 44 peças estão travadas.
- Antes de travar, gerei todas de novo com `node gerar.js` para conferir se os PNGs estavam atualizados. Nenhum mudou, só um byte de ruído no `black-friday-v2-2`, descartado.
- `legendas()` em `pecas-dados.js`: o aviso do topo registra a aprovação sem mockup. Sem mockup em falta, a tabela mostra "Nenhum mockup em falta". `legendas.md` foi gerado de novo.
- Documento https://claude.ai/artifact/3nx4JXdXoomuc4SZF91rCj (a Jessica já tinha marcado o 04/12 como Aprovado):
  - título agora é "Criativos aprovados: 04/11 a 31/01";
  - resumo diz que nenhum falta aprovar;
  - a seção do 04/12 e o "Como aprovar" saíram;
  - na tabela, os 31 posts estão como Travado;
  - o item de mockups da Jessica saiu da lista de dependências.

## Verificado
- `grep`: 44 peças com `travada: true`, nenhuma sem. `legendas.md` sem mockup em falta no calendário.
- O documento aceitou todas as edições (rev 45).

## Decisões e porquês
- As telas ficam no cartão atual, que foi o que ela aprovou. O código que troca o cartão pelo mockup (`mockups/<tela>.png`) continua lá para peças novas.
- Os itens "Equipe de produto" e "Conferência de datas e fontes" ficaram no documento: são checagens antes de publicar, não dependem de mockup.

## Próxima sessão
- Nada pendente de aprovação nesta produção. Peça travada só volta a ser gerada se alguém tirar `travada: true`.
