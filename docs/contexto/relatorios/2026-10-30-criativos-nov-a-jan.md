# Criativos do Instagram: 04/11/2026 a 22/01/2027

## Pedido

"Vamos produzir os criativos", depois do planejamento de conteúdo.

## Feito

- `outputs/criativos/nov-dez/`: 34 posts novos em `pecas/` (84 PNG de 1080×1350), `legendas.md` com calendário, legendas, texto alternativo, lista de mockups e itens a conferir.
- Geradores na mesma pasta: `preparar.py` (fotos e recortes), `pecas-dados.js` (textos), `gerar.js` (peças e legendas), `conferir.js` (regras de texto), `galeria.js` (página de revisão).
- `outputs/criativos/depoimentos/carrossel-farmacia-depoimento-v3-<página>.png`: o carrossel da Tatiana, marcado como pronto no plano, tinha um mockup reprovado na página 5 da v2. A página 5 agora usa a foto da atendente; as outras são cópias da v2.
- Legendas novas, com palavra-chave e 2027, para os depoimentos de Krisley, Tatiana, Samuel e Rodrigo. As peças deles e o carrossel do suporte não mudaram.
- Galeria de revisão: https://claude.ai/artifact/6tbxkP61jsBEjhTejFME3j (privada; o arquivo sai de `galeria.js`).
- Documento de aprovação no Claude Docs: https://claude.ai/artifact/3EWRqeFaTD2J6UuUeHwRoe, com arte, legenda, decisão e campo de alteração por post, a pedido dela ("Quero arquivo para aprovar ou pedir alterações").
- Nada foi publicado no Instagram, no blog nem no Google.

## Verificado

- `gerar.js`: nenhum texto estourou nem saiu da peça nos 39 posts.
- `conferir.js`: palavra-chave no primeiro parágrafo, 2027 na legenda (exceto mensagens de data), 3 a 5 hashtags, texto alternativo por página, sem emoji, padaria só em laranja e sem falar de farmácia, e o contrário.
- Todas as páginas vistas em folha de contato. Em tamanho real, só estas: Black Friday 2, reforma da padaria 4, sangria 2, escala 5x2 e combos.
- 15/01 a 03/03/2027 dá 47 dias, conta feita à mão. 21/11/2026 é o penúltimo sábado de novembro.
- Coluna Decisão do documento, rev 21: vazia em todas as linhas, sem comentários.
- **Não verificado:** peças em um celular de verdade; fontes dos dados das legendas, reaproveitadas do planejamento; as páginas restantes em tamanho real; volume das palavras-chave com `*`.

## Decisões e porquês

- **Coluna Decisão vazia:** tratei "vamos produzir os criativos" como aprovação do planejamento. Se ela marcar Alterar ou Trocar em alguma linha, a peça muda em `pecas-dados.js`.
- **O plano mudou durante a produção.** Outra sessão levou o documento para 39 posts até 22/01, com pausa de 23/12 a 02/01. As peças seguem a rev 21: 9 posts novos e 6 de outra data, com CBS, Simples e sobra de pão reescritos porque agora saem depois da virada.
- **Telas sem mockup:** a Jessica faz os mockups, então não gerei nenhum. As telas ficam em cartão provisório, como no feed simulado. `gerar.js` troca o cartão pelo arquivo em `mockups/<tela>.png`.
- **Destaque com o texto real da tela** em sangria, uso contínuo, dias sem giro, estoque e lucro, porque o caderno pede quando a mensagem não fica legível.
- **Post de 30/11 saiu como foto com painel,** não com tela: a pasta não tem tela de DRE nem de fluxo de caixa.
- **Combos em padaria:** só a faixa de totais, sobre foto de pães. As telas da base têm marca de produto e imagem de farmácia.
- **Recortes:** Atenção farmacêutica sem nome, foto e contato; delivery sem "Drogaria Modelo".
- **Foto `paes-prateleira`:** tinha etiquetas legíveis em grego, com preço em euro. Usei `paes-prateleira-sem-etiqueta`, com as faixas desfocadas. A foto original ainda está nos modelos do caderno.
- **Peças para os dois segmentos em azul,** padrão do feed.
- **Legenda de Rodrigo fala de farmácia e padaria,** porque o segmento dele não está confirmado.

## Pendente

- **Jessica:** 20 mockups para 18 posts, lista em `outputs/criativos/nov-dez/legendas.md`. O primeiro, `painel-estoque`, precisa ficar pronto até 03/11 para o post de 04/11.
- **Jessica:** preencher as decisões no documento de aprovação dos criativos e dizer se as datas de saúde combinam com a marca. Agendar as peças: não há chave válida da Meta para publicar daqui.
- **Equipe de produto:** itens de "Conferir antes dos criativos" no documento e capturas novas de precificação, fechamento de caixa, curva ABC, combos, lucro por produto e delivery.
- **Conferir nas datas:** taxa da CBS na legenda de 04/01, que tem um trecho entre colchetes; 15/12 ou 16/12 na escala; saldo de 1.096 lojas no post de 08/01; prazo do SNCR.
- `painel-estoque` e `painel-vendas` mostram um CNPJ, embora o LEIA-ME das telas diga que estão cobertos. O dado é fictício, mas precisa ser coberto no mockup.

## Próxima sessão

Ler as decisões do documento de aprovação dos criativos com `read` no Claude Docs, aplicar mudanças em `pecas-dados.js` e rodar `gerar.js` e `conferir.js`. Quando os mockups chegarem em `mockups/`, gerar de novo e conferir em tamanho real. Skills: `relatorio-final`.

## Atualização de 31/10/2026: capas sem repetição, Natal e Ano Novo

**Pedido:** "as imagens escolhidas para as capas nao podem repetir de um post para o outro, e faça o de natal e o de Ano novo tambem! Quais sao as demais datas que precisamos de posts até Janeiro?"

**Feito:**
- 9 posts ganharam capa nova, com versão nova no nome: Black Friday v2, Farmácia Popular v2, uso contínuo v3, Dia do Diabetes v2 (tela de relatório), Dengue v2, SNCR v2, lucro por produto v2, atenção farmacêutica v2 e combos v2. As versões anteriores ficam em `pecas/`, só como referência.
- `natal-v2` (foto com painel) em 25/12 e `ano-novo-v1` em 01/01. Agora são 40 posts.
- 8 fotos novas da Wikimedia Commons, com créditos em `outputs/criativos/nov-dez/fotos/CREDITOS.md`.
- `conferir.js` agora acusa foto ou tela repetida em capa.
- Atualizados o documento de aprovação, o planejamento e a galeria.

**Verificado:** `conferir.js` sem erro nos 40 posts, com a checagem das capas; `gerar.js` sem estouro; capas novas vistas em folha de contato. Licenças lidas nos dados da Commons, sem abrir os termos de cada página. **Não verificado:** capas novas em tamanho real; datas de saúde sugeridas em página oficial de 2026 ou 2027.

**Decisões:**
- **Natal e Ano Novo saem como exceção à pausa,** porque ela pediu os dois depois de suspender as publicações. Só no Instagram e agendados. Blog e Google seguem em pausa.
- **Foto do pill box recortada** para tirar os dias da semana em inglês.
- **Banco local de padaria não usado:** tem origem de licença desconhecida e fotos de estabelecimentos reais.
- **Páginas internas podem repetir foto:** o pedido foi sobre capas.

**Pendente:** Jessica decide quais datas extras entram; as opções foram entregues na resposta da sessão. Nenhuma foi produzida.

