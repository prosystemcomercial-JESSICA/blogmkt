# Plano Estratégico — Campanha Meta Ads ProSystem Sistemas

**Data:** 2026-07-17
**Sigla:** PRO
**Fonte:** Plano de mídia (PDF "MKT 1 - CAROL", elaborado por Vinicius · SHE, 26/06/2026)

## Conta

- **Conta de anúncio:** CA01-PROSYSTEM (`act_3956921601292593`)
- **Página:** Prosystem (`555606814304972`)
- **Pixel:** SHE Pixel - Prosystem (`8475490812553292`) — disparou em 16/07/2026, ativo
- **App:** publicado (live) — sem bloqueio de criação de anúncios

## Produto e público

- **Produto:** ProSystem Sistemas — ERP/PDV para farmácias e padarias
- **Oferta:** Demonstração Guiada por Consultor (40–60 min, com hora marcada, sem compromisso)
- **ICP Farmácia:** Proprietário 40–55 anos, 1–5 lojas, +5 anos de mercado, faturamento ≥ R$150k/mês
- **ICP Padaria:** Proprietário 30–60 anos, 3–20 funcionários, faturamento ≥ R$50k/mês, produção própria
- **Regiões:** Brasil (sem restrição de estado)

## Landing pages

- Farmácia: https://lp-farmacia-mocha.vercel.app
- Padaria: https://lp-padaria.vercel.app

## Objetivo real da campanha

| Campanha | Objetivo Meta | Otimização | Evento pixel |
|---|---|---|---|
| BOFU Farmácia | OUTCOME_LEADS | OFFSITE_CONVERSIONS | LEAD |
| BOFU Padaria | OUTCOME_LEADS | OFFSITE_CONVERSIONS | LEAD |
| TOFU Alcance | OUTCOME_AWARENESS | REACH | nenhum |

**Nota:** o Campaign Strategist alertou que a estrutura da campanha TOFU (mesma LP, mesmo CTA CADASTRE-SE) é tecnicamente compatível com geração de lead — o rótulo "Alcance" por si só não define o objetivo técnico. Cliente confirmou manter como Alcance/REACH por decisão própria, ciente de que a Meta não vai otimizar entrega para conversão nesse caso.

## Decisões técnicas (aplicadas com base no plano + melhores práticas)

- **Estrutura BOFU:** 1 conjunto aberto por segmento (Farmácia, Padaria) — sem interesses restritivos, Advantage+ desativado.
- **Estrutura TOFU:** 1 conjunto com interesses de nicho (Farmácia + Padaria), Advantage+ desativado.
- **Audience Network:** desativado nas 3 campanhas — padrão B2B, perfil de decisor específico.
- **Advantage+:** desativado — pixel sem histórico maduro de conversões.
- **Faixa etária:** 30–58 anos (Farmácia e Padaria) — conforme plano.
- **CBO:** orçamento definido na campanha, `is_adset_budget_sharing_enabled: false`.

## Budget

| Campanha | R$/dia |
|---|---|
| BOFU Farmácia | R$ 20 |
| BOFU Padaria | R$ 15 |
| TOFU Alcance | R$ 15 |
| **Total** | **R$ 50/dia** |

⚠️ **Alerta de volume de criativos:** cada campanha individual está abaixo de R$50/dia. A melhor prática do squad recomenda máximo 3–5 criativos ativos por conjunto nessa faixa de budget — o plano propõe 6 (Farmácia BOFU), 6 (Padaria BOFU) e 3 (TOFU). Com poucos criativos concentrando o orçamento, o algoritmo aprende mais rápido; com 6, o budget de R$20–15/dia por conjunto fica diluído e a fase de aprendizado tende a demorar mais. Recomendação: reduzir para 3–5 criativos por conjunto no lançamento e introduzir os demais depois de validar os primeiros — decisão final é do cliente, será confirmada no Step 2 (checkpoint).

## Slots ANI (do plano)

- **BOFU Farmácia:** ANI01–ANI06 (5 estático + 1 carrossel) — ângulos dor, resultado, diferencial, curiosidade, prova social, urgência
- **BOFU Padaria:** ANI07–ANI12 (5 estático + 1 carrossel) — mesmos ângulos, contexto padaria
- **TOFU:** ANI01–ANI03 (compartilhados, estático) — dor, curiosidade, prova social

## Modo manual

Não ativado — token disponível, conta e pixel confirmados.
