# 03/11/2026: post das canetas (13/11), texto novo e foto da caneta

## Pedido
A Jessica achou confuso o texto do post `canetas-emagrecedoras-v2` ("vamos melhorar esse texto? Não está confuso?"). Ela escolheu a opção A entre três propostas e depois perguntou: "dá para colocar alguma imagem da caneta?".

## Feito
- `outputs/criativos/nov-dez/pecas-dados.js`:
  - Título novo: "A caneta emagrecedora deve ficar mais barata. **E a que está parada no seu estoque?**" (fs 64).
  - Faixa nova: "Veja no Prosystem quais produtos não vendem há 30 dias e decida antes de o preço cair."
  - Novo campo `fotoCima: 'caneta-branca'` e texto alternativo atualizado.
- `outputs/criativos/nov-dez/gerar.js`, `comTela`: nova variante `fotoCima`. A foto do produto fica num cartão inclinado e a tela inteira vem logo abaixo, sobrepondo a borda da foto. As variantes `foto` e sem foto continuam iguais.
- `outputs/criativos/nov-dez/fotos/caneta-branca.jpg`:
  - Fonte: Wikimedia Commons, `File:Insulin_pen.JPG` (domínio público, PerPlex). Crédito em `fotos/CREDITOS.md`.
  - Ficou só a caneta branca de demonstração: a agulha foi cortada e o texto do cartucho, em alemão e inglês, foi desfocado.
- Peça gerada de novo: `outputs/criativos/nov-dez/pecas/canetas-emagrecedoras-v2.png`. O texto alternativo também mudou em `legendas.md`.
- O título e a faixa novos também foram para `docs/conteudo-prosystem/feed_modelo.html` e `feed-editoriais.html`.

## Documento de aprovação (pedido: "aprovado, atualize no documento para aprovação, assim como todas as alterações que venho pedindo")
Documento: https://claude.ai/artifact/3EWRqeFaTD2J6UuUeHwRoe. Imagens enviadas como assets e trocadas na rev 59.
- 13/11, canetas: imagem nova; decisão marcada como Aprovado.
- 16/11, Pix: imagem nova; linha de formato com a tela `whats-fechamento-v2`; "A conferir" sobre o mockup e a conciliação de Pix. A decisão continua em branco.
- 17/11, Novembro Azul: imagem com o laço; "A conferir" diz que a foto ainda espera um farmacêutico atendendo um cliente homem. A decisão continua em branco.
- 19/11, escala 6x1: imagem nova, formato "Estático com tela", legenda atual (painel de indicadores, CTA e tags) e "A conferir"; decisão marcada como Aprovado (aprovado e travado na outra sessão).
- Natal, Ano Novo, suporte v4, reforma da padaria e antibiótico já estavam atualizados no documento por outras sessões.

## Verificado
- `node outputs/criativos/nov-dez/gerar.js canetas-emagrecedoras-v2`: "sem estouro". Abri o PNG e conferi o espaço entre o título e a foto.
- Não verificado: a galeria de revisão (`galeria.js`) não foi republicada, e o planejamento (Jqb8G2Q2Z1QW8MqauJ2VUv) não foi alterado. As contagens do topo do documento de aprovação não foram recalculadas.

## Decisões e porquês
- **Selo:** continua "Dias Sem Giro: 30 dias", e não "Relatório Dias Sem Giro" como dizia a opção A. A regra do caderno (`DESTAQUE` em `gerar.js`) manda repetir o texto real da tela, sem trocar as palavras.
- **"deve" no título:** ficou, porque a queda de preço é expectativa (regra do "Conferir antes de publicar").
- **"emagrecedora" saiu do título:** a regra diz "não falar de emagrecimento". A Jessica autorizou a troca ("ok, pode mudar"). O título ficou "A caneta de semaglutida deve ficar mais barata." Semaglutida é o princípio ativo, não marca. A legenda continua com a palavra-chave "canetas emagrecedoras na farmácia", por SEO.
- **Escolha da foto:** todas as outras fotos livres de caneta mostram marca (Novo Nordisk, Lilly, Ozempic, Mounjaro). A escolhida é uma caneta de demonstração sem marca. A qualidade é razoável: fundo de couro escuro e flash.

## Pendente
- Arte aprovada em 03/11/2026. Falta só a Jessica dizer se a legenda também deve deixar de usar "emagrecedoras" (decide: Jessica).
- Se ela tiver foto própria melhor (caneta sem marca, fundo claro), basta trocar `fotos/caneta-branca.jpg` e gerar de novo.

## Próxima sessão
Pegar o retorno da Jessica sobre a arte. Se ela mandar outra foto, coloque-a em `fotos/caneta-branca.jpg` e rode `node outputs/criativos/nov-dez/gerar.js canetas-emagrecedoras-v2`.
