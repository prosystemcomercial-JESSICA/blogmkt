# Prévia do feed até a última postagem (04/11/2026)

## Pedido
"Me dê um documento de como ficará meu feed até a data da última postagem programada." Depois a Jessica completou: "Quero um documento em HTML, como se fosse a grade do Instagram mesmo, quero poder abrir e ver a legenda e os carrosséis também."

## Feito
- **Grade em HTML (Artifact):** https://claude.ai/artifact/PgiZdm9hZLYr6JWcDhuTvp. Mostra o perfil @prosystemoficial em 3 colunas (4:5), do mais novo (31/01/2027) para o mais antigo. Clicar abre a legenda com as hashtags, as 6 artes do carrossel (setas, teclado e deslize) e o vídeo do Reels. Tem também uma barra para ver o feed em qualquer data, a opção de separar por mês e a data em cada post (verde quando já foi publicado).
- **Documento (Claude Docs):** https://claude.ai/artifact/UFiNWVqHEZDpQxoRW7PAdX. Traz o resumo, o link da grade, o calendário com os 81 posts em tabela e os pontos de atenção.
- Fonte: `instagram/agenda.json`, só os itens que não são stories (81 itens: 68 imagens, 12 carrosséis e 1 Reels, de 03/11/2026 a 31/01/2027).
- As artes foram reduzidas para 720 px (8,8 MB no total) numa pasta temporária, sem mudar nada no projeto. Para refazer a grade, gere de novo `posts.json` e as miniaturas a partir da agenda e publique na mesma URL.

## Verificado
- A agenda tem 81 posts no feed, 2 publicados e 79 agendados, e todas as mídias existem em `instagram/midia/`.
- A publicação do Artifact deu certo: 143 arquivos.
- Não verificado: não abri a página para ver como ela aparece na tela.

## Decisões e porquês
- Segui a agenda real, e não o planejamento, porque é a agenda que define o que vai sair.
- Os stories ficaram de fora porque não aparecem na grade.
- O segmento de cada post (farmácia, padaria ou ambos) foi deduzido do id da peça.

## Pendente
- Os conteúdos da farmácia no supermercado e das ferramentas novas aguardam aprovação da Jessica e não estão na agenda nem na prévia.
- O Reels de 25/01 ainda não foi testado pela API.

## Próxima sessão
Se a agenda mudar, gere de novo `posts.json` e as miniaturas a partir de `instagram/agenda.json` e publique a grade na mesma URL.
