# Relatório de Revisão Anti-GPT + QA — ProSystem (Farmácia) — Agosto/2026

## Rodada 1 — Gate Anti-GPT

**Resultado:** Reprovação em lote. Padrão sistêmico identificado em 8 das 18 peças: estrutura binária "não é X. É Y." (proibição #2), presente tanto em roteiros/slides principais quanto em legendas. Adicionalmente, 3 carrosséis (07/08, 25/08, 28/08) usavam travessão ("—") como marcador de passo numerado dentro dos slides (proibição #5, zero exceção).

**Peças reprovadas na Rodada 1:** 06/08, 10/08, 11/08, 17/08, 19/08, 20/08, 21/08, 24/08, 26/08, 27/08, 31/08 (violação de estrutura binária) + 07/08, 25/08, 28/08 (travessão em slide).

**Ação:** Todas as ocorrências foram reescritas — estrutura binária substituída por afirmação direta ou comparação hedged ("costuma", "raramente", "mais do que"); travessão de marcador de passo substituído por dois-pontos. O hook correspondente de 06/08 e 26/08 (Diogo Amaral) também precisou ser realinhado, já que o roteiro incorpora o hook literalmente.

Registrado em `_memory/licoes-aprendidas.md` para as próximas execuções desta instalação não repetirem o padrão.

## Rodada 2 — Gate Anti-GPT (peças corrigidas)

**Resultado:** Gate limpo em todas as 18 peças — nenhuma das 18 proibições presente após a correção. Passa para pontuação.

## Pontuação (Etapa 2) — todas as 18 peças

| Peça | Direção e Abertura | Fluxo e Coerência | Clareza e Intenção | Naturalidade e Identidade | Score | Status |
|---|---|---|---|---|---|---|
| 06/08 — Erro de estoque (Reels) | 2 | 2 | 2 | 2 | 8/10 | Aprovado |
| 07/08 — Checklist fechamento de caixa (Carrossel) | 2 | 2 | 2 | 2 | 8/10 | Aprovado |
| 10/08 — Fatura mas não sobra (Reels) | 2 | 2 | 2 | 2 | 8/10 | Aprovado |
| 11/08 — Farmácia independente tem futuro? (Reels) | 2 | 2 | 1 | 2 | 7/10 | Reprovado |
| 12/08 — Associativista cresce mais rápido (Carrossel) | 2 | 2 | 2 | 2 | 8/10 | Aprovado |
| 13/08 — POV fechar caixa (Reels) | 2 | 2 | 2 | 2 | 8/10 | Aprovado |
| 14/08 — Duas farmácias, dois destinos (Reels) | 2 | 2 | 2 | 2 | 8/10 | Aprovado |
| 17/08 — Um dia na vida (Reels) | 2 | 2 | 2 | 2 | 8/10 | Aprovado |
| 18/08 — SNGPC mal entendido (Reels) | 2 | 2 | 2 | 2 | 8/10 | Aprovado |
| 19/08 — Números do setor (Carrossel) | 2 | 2 | 2 | 2 | 8/10 | Aprovado |
| 20/08 — Dúvida real sobre PBM (Reels) | 2 | 2 | 2 | 2 | 8/10 | Aprovado |
| 21/08 — O que administrar ensina (Carrossel) | 2 | 2 | 2 | 2 | 8/10 | Aprovado |
| 24/08 — Sistema não é só pra rede grande (Reels) | 2 | 2 | 2 | 2 | 8/10 | Aprovado |
| 25/08 — Checklist equipe/convênio (Carrossel) | 2 | 2 | 2 | 2 | 8/10 | Aprovado |
| 26/08 — Margem por categoria (Reels) | 2 | 2 | 2 | 2 | 8/10 | Aprovado |
| 27/08 — Orgulho de ter construído (Reels) | 2 | 2 | 2 | 1 | 7/10 | Reprovado |
| 28/08 — Checklist validade (Carrossel) | 2 | 2 | 2 | 2 | 8/10 | Aprovado |
| 31/08 — Bastidor real do mês (Reels) | 2 | 2 | 2 | 2 | 8/10 | Aprovado |

### 11/08 — Ação necessária (Rodada 2)
**Motivo da nota em Clareza e Intenção (1/2):** a frase "O que rede grande não consegue replicar é o farmacêutico que sabe o nome do cliente, lembra do remédio de uso contínuo da família e resolve um problema no balcão sem processo formal" empilha 3 ideias distintas (nome do cliente / remédio de uso contínuo / resolver problema sem processo formal) num único bloco sem pausa de recapitulação — viola o Esquema 2 (uma ideia nova por frase). **Correção:** quebrar em duas frases, uma por ideia central, com ponte entre elas.

### 27/08 — Ação necessária (Rodada 2)
**Motivo da nota em Naturalidade e Identidade (1/2):** o roteiro é escrito na voz de "eu" (farmacêutico específico contando a própria trajetória) mas a peça não tem um farmacêutico real associado no briefing — é um roteiro-modelo genérico em primeira pessoa, o que cria risco de soar como storytelling fabricado se usado sem adaptação (padrão de julgamento nº 8: situação teatral). **Correção:** adicionar nota de Recomendações explicitando que o roteiro deve ser gravado por um farmacêutico/dono real da equipe ProSystem ou de um cliente real disposto a ceder o depoimento — nunca apresentado como se fosse um relato de terceiro genérico sem dono.

## Rodada 3 — Correção pontual (11/08 e 27/08)

Correções aplicadas diretamente no arquivo `step-05-roteiros.md`. Repontuação:

| Peça | Direção e Abertura | Fluxo e Coerência | Clareza e Intenção | Naturalidade e Identidade | Score | Status |
|---|---|---|---|---|---|---|
| 11/08 (corrigido) | 2 | 2 | 2 | 2 | 8/10 | Aprovado |
| 27/08 (corrigido) | 2 | 2 | 2 | 2 | 8/10 | Aprovado |

## Resultado final

**18/18 peças aprovadas**, nota ≥ 8/10, gate Anti-GPT limpo. Pacote segue para o Checkpoint 2 (aprovação do usuário).

## Observação para a Marina (não bloqueia aprovação, mas vale registrar)
CTA de Reels concentrado em variações de "comenta" em boa parte do mês (9 das 12 peças de Reels). Isso reflete o CTA recorrente real identificado no Banco de Referências (Gabriel Tavares), não é erro de escrita — mas para o mês seguinte vale variar mais entre "comenta" / "salva" / "compartilha" mesmo em Reels, para não gerar mono-padrão de CTA (padrão de julgamento nº 18, aplicado aqui ao CTA, não ao arquétipo de conteúdo).
