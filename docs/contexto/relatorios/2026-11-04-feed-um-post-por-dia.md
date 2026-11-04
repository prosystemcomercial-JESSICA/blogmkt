# 04/11/2026: feed do Instagram com um post por dia

## Pedido
A Jessica viu que, depois de 04/11, o próximo post era só em 09/11 (o carrossel de 06/11 foi adiantado para 03/11). Ela pediu: "vamos produzir os dias que faltam e que pularam", em vez de reagendar. Nas perguntas, ela escolheu **tudo até 31/01** e **todos os dias, inclusive sábado e domingo**. A pausa de 23/12 a 02/01, só com Natal e Ano Novo, continua.

## Feito
- 33 peças novas para os dias vazios: 10 em novembro, 9 em dezembro e 14 em janeiro. São 15 de padaria, 12 de farmácia e 6 para os dois segmentos, em 5 formatos: frase de impacto, estático com tela, foto com painel de vidro e padaria com foto. Nenhum carrossel novo.
- Textos, legendas, SEO, texto alternativo e itens a conferir em `outputs/criativos/nov-dez/pecas-dias-extras.js`. O arquivo é carregado por `pecas-dados.js` (`P.push`). As peças têm `nova: true` e `semMockup: true` e **não estão travadas**: aguardam aprovação.
- Imagens em `outputs/criativos/nov-dez/pecas/<id>.png`. O `legendas.md` foi gerado de novo com o calendário completo.
- Fotos: 6 novas do Wikimedia Commons (CC0, domínio público, CC BY), mais 2 do banco local da padaria. Os originais estão em `fotos/_originais/` e os créditos em `fotos/CREDITOS.md`. As fotos CC BY levam o crédito no fim da legenda (07/11, 20/11 e 15/12).
- `preparar-dias-extras.py` faz os recortes e desfoca os rótulos em inglês. Ele também gera as telas `metas-subgrupo`, `painel-totais` e `fidelimax-pontos`.
- `tela-contas.js` refaz o aviso de contas a pagar do WhatsApp com data de 2026 e valores fictícios (`whats-contas-v2`).
- `gerar.js`:
  - novos destaques ampliados para `perda-vendas-motivo`, `fidelimax-pontos` e `metas-subgrupo`;
  - opção `telaLarg` no `comTela`, para não esticar uma tela pequena.
- `galeria.js`:
  - modo `pendentes`, que mostra só as peças não travadas;
  - correção: peça com `semMockup` não aparece mais como "Aguarda mockup".
- Página de revisão (privada): https://claude.ai/artifact/DBbMzwYV9JdsQipzUFn15b
- Documento de aprovação (Claude Docs), com as colunas Decisão (Aprovado ou Alterar) e O que alterar, mais a lista do que confirmar: https://claude.ai/artifact/6KR6hRQrSnJMKr3xwWUpiK

## Verificado
- `gerar.js` rodou com "sem estouro" nas 33 peças.
- Conferi todas em folhas de contato. Ajustei 7 peças depois de ver: rosto desfocado (06/11), destaque de metas largo demais (26/11), frasco escondido (12/12), padeira coberta pelo painel (15/12 virou "padaria com foto"), espaço vazio (22/12), título da tela de contas e tamanho da tela do Fidelimax.
- **Não verificado:** as peças não foram vistas em tamanho real, uma a uma, no celular. Nada foi publicado nem entrou em `instagram/agenda.json`.

## Decisões e porquês
- Os dias que já tinham post ficaram como estão. Foram 33 dias novos, e não 37, porque as peças prontas de outras produções já ocupavam 09/11, 10/11, 08/12 e 12/01.
- Prioridade para funções que ainda não apareciam no feed: perda de vendas, sugestão de compras, metas, contas a pagar, auditoria, recebimento com conferência, lote e validade, ponto, avisos no WhatsApp, Fiscal, SEFAZ, biometria e Fidelimax.
- A ordem alterna os segmentos e o fundo (cor, branco, foto) para que a grade não tenha duas peças iguais lado a lado.
- Foto de cédulas descartada: era de dinheiro falso apreendido. Foto de café da manhã descartada: tinha bacon e ovos e não lembra padaria brasileira.
- Telas de lote, contagem, compras e auditoria descartadas: trazem marcas de medicamento ou poluição visual.

## Pendente (Jessica, ou o Comercial nos itens de produto)
- Aprovar as 33 peças. As aprovadas recebem `travada: true` em `pecas-dias-extras.js`.
- Itens a conferir, em cada peça e no `legendas.md`. Os principais:
  - suporte em feriado de dia de semana (15/11);
  - Fidelimax ainda ativo e se pode ser citado (26/01);
  - biometria: o leitor é vendido junto? (21/01);
  - funções de artigo de 2020: recebimento, Fiscal e SEFAZ;
  - fotos do banco local da padaria sem licença registrada (03/01 e 29/01);
  - modelos posando na foto de 29/01.
- Programar a publicação, pelo `instagram/agenda.json` ou manualmente.

## Próxima sessão
Leia o documento de aprovação, aplique as notas da Jessica em `pecas-dias-extras.js`. Depois rode `node outputs/criativos/nov-dez/gerar.js <id>` e, para a página, `galeria.js <saída> pendentes`, publicando na mesma URL. Skills: `relatorio-final`; leia o caderno de marca antes de mudar qualquer peça.

---

## Continuação (04/11/2026): aprovação da Jessica

### Pedido
"pronto, verifique o documento". A Jessica marcou cada peça no documento de aprovação.

### Feito
- **29 aprovadas** e travadas (`travada: true` em `pecas-dias-extras.js`).
- **4 refeitas**, aguardando nova aprovação. As notas dela foram escritas no próprio campo Decisão, que corta o texto em 80 caracteres; duas chegaram cortadas e foram interpretadas.
  - 13/12 (`frase-padaria-gestao-v1`). Nota: "ficou confuso, parece que vai sobrar pão e vai para o lixo". O título passou de "Gestão boa faz sobrar" para "Gestão boa dá lucro".
  - 17/12 (`padaria-lucro-panetone-v1`). Nota: "mude essa foto, ela é feia". A foto agora é `panetone-grade.jpg`: dois panetones na grade, Wikimedia, N i c o l a, CC BY 2.0. O crédito foi para a legenda e para `fotos/CREDITOS.md`.
  - 20/12 (`padaria-horario-festas-v1`). Nota: "fale sobre dicas de como fazer esse comunicado, não só na l…". Novo título: "Horário diferente no Natal? Avise assim.". A legenda traz 5 dicas de como escrever o aviso.
  - 16/01 (`frase-contador-arquivos-v1`). Nota: "o contador precisa solicitar o arquivo, a diferença é a forma fácil em que o cli…". Novo título: "O contador pediu os arquivos? Envie tudo de uma vez." A legenda diz que o pedido continua e que o cliente envia tudo de uma vez.
- `legendas.md` gerado de novo. Na página de revisão (versão 4) e no documento de aprovação, as 4 seções têm imagem nova, o pedido dela e um campo Decisão em branco.

### Verificado
- `gerar.js` completo rodou "sem estouro". Só as 4 imagens refeitas mudaram no git.
- Vi as 4 peças novas lado a lado.

### Pendente
- A Jessica aprovar as 4 refeitas no documento.
- Os itens de "Para confirmar antes de publicar" continuam abertos.

---

## Continuação (04/11/2026): aprovação final e programação

### Pedido
"todos aprovados, agora programe".

### Feito
- As 4 refeitas foram travadas. As 33 peças novas estão aprovadas.
- Novo `instagram/programar-feed.js`: lê `pecas-dados.js`, que traz as peças travadas e as prontas de outras produções, converte as imagens para JPEG em `instagram/midia/` e grava em `instagram/agenda.json`. Não toca em ids que já estão na agenda e recusa dois posts no mesmo dia.
- **80 posts programados**, um por dia de 04/11/2026 a 31/01/2027, com a pausa de 23/12 a 02/01 (só Natal e Ano Novo):
  - 66 imagens, 13 carrosséis e 1 vídeo;
  - horário: 12h30, como o post de 03/11; hoje, 04/11, às 14h30, porque a programação foi feita às 13h40;
  - o carrossel de padaria de 06/11 ficou de fora porque já foi publicado em 03/11.
- `publicar.mjs` agora aceita vídeo no feed (`tipo: reels`: Reels com `share_to_feed` e capa JPG, com até 10 minutos de processamento), para o vídeo de 25/01.
- A legenda do carrossel de suporte (09/11) vem de `outputs/criativos/suporte/legendas.md`.

### Verificado
- `publicar.mjs --teste`: token e conta ok e nenhum arquivo faltando. Nenhuma legenda passa de 2.200 caracteres nem de 30 hashtags.
- **Não verificado:** o primeiro Reels pela API, que só roda em 25/01. Conferir nesse dia.

### Pendente
- Os itens de "Para confirmar antes de publicar" seguem abertos. Uma legenda mudada depois disso precisa ser trocada também em `agenda.json`, onde a legenda fica copiada.
- O texto alternativo não vai pela API.

---

## Continuação (04/11/2026): stories no visual do Google

### Pedido
"tem algo que podemos aproveitar nas postagens que programamos no google, gostei bastante daqueles posts", e depois "faça da forma mais interessante que achar".

### Feito
- `outputs/criativos/google-nov-jan/stories.js` transforma as postagens do Google em stories de 1080×1920, no mesmo visual. As imagens ficam em `stories/`.
  - Onde o Google manda para o blog, a pílula diz "link na bio".
  - O post de avaliação diz "Procure ProSystem no Google".
- **36 stories** foram para `instagram/agenda.json` (`story-google-<id>`, `tipo: stories`), às 17h do mesmo dia da postagem do Google, de 05/11 a 30/01. As imagens estão em `instagram/midia/stories-google/`.
- Pausa igual à do feed: ficaram de fora 23/12 (suporte nas festas), 29/12 (biometria) e 02/01 (planejamento). Ficaram o Natal (25/12) e o Feliz 2027 (31/12).
- O formato "foto com degradê" foi registrado em `docs/design/caderno-de-marca/project/decisoes.md` e vai para o feed a partir de fevereiro.
- Página de revisão: https://claude.ai/artifact/MtYZisF1EKc3gEZrH2YmbC

### Verificado
- O gerador conferiu as zonas seguras em todos os stories ("sem problema").
- Vi todos em folhas de contato e dois em tamanho maior.
- `publicar.mjs --teste`: nenhum arquivo faltando. Nenhum horário coincide com outro post: os destaques saem às 10h e o feed às 12h30.

### Pendente
- A Jessica ver os stories na página de revisão. O primeiro sai em 05/11, às 17h.
