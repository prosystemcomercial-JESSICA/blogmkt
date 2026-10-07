# Público e Segmentação — Campanha Meta Ads ProSystem Sistemas

## Achado importante — first-party data disponível

O plano de mídia original partiu da premissa "sem first-party data disponível — segmentação por interesses do setor". Verificação real na conta (`act_3956921601292593`) mostra o contrário: já existe lista de clientes reais e públicos semelhantes já processados pela Meta:

| Público | Tipo | Tamanho |
|---|---|---|
| Listas de Cadastros Prosystem | CUSTOM (clientes reais) | 1.000+ |
| Semelhante (BR, 1%) - Listas de Cadastros Prosystem | LOOKALIKE | ~1.000.000 |
| Semelhante (BR, 2%) - Listas de Cadastros Prosystem | LOOKALIKE | ~1.900.000 |

Isso é exatamente o gatilho de evolução que o próprio plano previa ("Lookalike 1% quando lista de clientes disponível") — só que já está disponível agora, não no futuro.

Também existem públicos de uma oferta anterior (ebook) — não usados aqui por serem de outra oferta/pixel.

## Recomendação — BOFU (Farmácia e Padaria)

O budget de cada conjunto (R$20/dia Farmácia, R$15/dia Padaria) está abaixo de R$30/dia e o pixel de demonstração ainda não tem histórico de conversão limpo — pela lei do squad (`estrutura_moderna_conjunto_aberto`), essa é justamente a situação em que usar um guardrail de segmentação é melhor do que público 100% aberto.

**Recomendação: usar o público Semelhante (BR, 1%) - Listas de Cadastros Prosystem (~1M pessoas) como público do conjunto BOFU**, em vez de público totalmente aberto. Motivo: são pessoas parecidas com quem já comprou de verdade — sinal mais forte que "público aberto" ou interesses genéricos, e mais barato para o algoritmo aprender.

## Pesquisa de interesses — TOFU

Busquei interesses em PT-BR e inglês. Confirmando a lei do squad: interesses de nicho muito específico (SNGPC, gestão farmacêutica) não existem na API. Os que existem são genéricos demais para o produto:

| Interesse | ID | Tamanho BR | Avaliação |
|---|---|---|---|
| Drugstore | 6003040299915 | 1,4M–1,7M | Aceitável, ligado a farmácia como consumo |
| Padaria | 6003012404681 | 130M–153M | Descartado — consumo de padaria (comprador de pão), não gestão de padaria |
| Confeitaria | 6003287974527 | 134M–158M | Descartado — mesmo problema |
| Pequenas e médias empresas | 6003136069408 | 96M–113M | Aceitável como sinal de perfil empresarial, mas amplo |

**Recomendação: combinar Drugstore + Pequenas e médias empresas** como guardrail de interesses para o TOFU, restrito à faixa etária 30–58 — mais preciso do que os termos de nicho, que não existem na base.

## Decisão final do cliente

- **BOFU (Farmácia e Padaria):** público aberto, sem restrição de interesses — mantido conforme plano original (decisão do cliente).
- **TOFU:** interesses **Drugstore** (`6003040299915`) + **Pequenas e médias empresas** (`6003136069408`), faixa 30–58 — aceita a recomendação do Campaign Strategist, já que os termos originais do plano (SNGPC, gestão farmacêutica etc.) não existem na API.

## Alcance estimado

Com faixa 30–58, Brasil:
- BOFU (Lookalike 1%): ~1.000.000 de alcance potencial — adequado para R$20+R$15/dia, sem restrição excessiva.
- TOFU (Drugstore + PME, 30–58): estimativa não restritiva, acima de 5M mesmo após filtro de idade — dentro do recomendado.

## Slots ANI (herdados do plano — sem alteração)

Conforme decisão do cliente no Step 1: mantidos os 15 criativos do plano original (6 Farmácia BOFU, 6 Padaria BOFU, 3 TOFU compartilhados).
