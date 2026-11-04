# Destaques do Instagram v1 (04/11/2026)

## Pedido
Jessica: "vamos criar alguns stories para colocarmos nos destaques do instagram, inclusive vamos mudar as capas e se necessario os destaques". Depois: pular as perguntas e produzir já, "use tudo que usamos para a produção do feed, motion em alguns, elementos visuais envolventes em objetos etc.... Produção premium".

## Feito
- `outputs/criativos/destaques/gerar-destaques.js`: gera os stories (PNG 1080×1920), os vídeos (MP4 de 8 s, 30 qps) e as capas (1080×1080). Modos: `png`, `mp4`, `capas`, com filtro opcional por id.
- `outputs/criativos/destaques/stories/`: 27 PNG e 8 MP4 (depois da ampliação: 55 PNG e 11 MP4). `capas/`: 7 PNG.
- `outputs/criativos/destaques/LEIA-ME.md`: ordem dos destaques, o que cada um substitui, links das figurinhas, fontes do conteúdo e pontos em aberto.
- Caderno de marca: tipo "Story de destaque" em `docs/design/caderno-de-marca/project/tipos-de-posts.md`.
- Página de revisão para a Jessica: https://claude.ai/artifact/N2ThqYAUSZ2QAqXaWGRMLW (prévias reduzidas; os arquivos de verdade estão no repositório).

## Verificado
- Conferência automática do gerador: nenhum texto fora da zona segura (250 a 1580px), nenhum bloco estourado, faixa da figurinha (1300 a 1580px) livre nos stories com link.
- Folha de contato dos 27 stories e capas simuladas em círculo, olhadas uma a uma. Integrações 1 e Contato 1 também conferidos em tamanho real.
- Vídeos: quadros conferidos em Quem somos 1 (início, meio e fim; o último quadro é igual ao PNG) e em Integrações 1 (linhas se desenhando).
- Não verificado: aparência dentro do app do Instagram e o recorte real das capas no perfil.

## Decisões e porquês
- Destaques reorganizados em 7: Quem somos (junta os dois "Quem somos"), Segmentos (era "Nossos Nichos"), Ferramentas, Integrações, Suporte (novo), Depoimentos e Contato (era "Redes Sociais", sem função dentro do próprio Instagram). Decisão minha, porque a Jessica pulou as perguntas.
- Conteúdo só com fonte confirmada: LP do site e tabela Planos 2025 (ferramentas, integrações, planos), provas +600/+16, suporte das 7h às 22h, avaliações do Google autorizadas.
- Fotos: o atendente homem de `suporte/fotos` ficou de fora (aparência europeia, contra a regra de pessoas).
- Telas reais em cartão, sem mockup feito por código (regra da Jessica). Se ela salvar mockup em `nov-dez/mockups/<tela>.png`, ele entra no lugar.
- Títulos animados são divididos em palavras também no PNG, para a quebra de linha do vídeo ser igual à da arte parada.
- Capas com ícones de traço Lucide (licença ISC) dentro do losango de vidro. O caderno não tem ícones aprovados, então isso fica como proposta.

## Pendente (Jessica decide)
- Aprovar ou ajustar stories, vídeos e a nova ordem dos destaques.
- Ícones das capas: manter ou trocar pela sigla no losango, como no link da bio.
- Mockups das telas de Ferramentas e Quem somos 3, se ela quiser.
- Ao publicar: colocar a figurinha de link conforme o `LEIA-ME.md`.

## Ampliação de Ferramentas (mesmo dia)
- Pedido: "quero mais sobre as ferramentas, vamos colocar todas que pudermos".
- Feito: destaque Ferramentas de 5 para 33 stories (total 55), funções `ferr()` e `recursos()` no gerador; vídeos novos no índice (2), biometria (24) e pesagem na padaria (30). Ordem e conteúdo no `LEIA-ME.md`.
- Verificado: conferência automática sem estouro nem texto fora da zona segura; folha de contato dos 33 olhada.
- Decisões: só recursos com fonte (LP, tabela Planos 2025, peças do feed). Farmácia e padaria em stories separados, padaria em laranja; o índice cita os dois por ser institucional. Plano informado quando a fonte diz (Plus, Pro e Plus, Farma Plus). Biometria entra como "Novidade", como na LP.
- Pendente: aprovação da Jessica; 33 stories é sequência longa, se ela preferir dá para dividir em dois destaques (ex.: "Ferramentas" e "Farmácia e padaria").

## Publicação (mesmo dia)
- Pedido: "como podemos fazer essas postagens agora? incluindo as capas"; depois: um documento com os stories de link para baixar e o link para copiar.
- Escolha da Jessica: API, um destaque por dia (06 a 11/11, 10h); Contato (05/11) e os 6 stories com link ela posta pelo app.
- Feito: `instagram/publicar.mjs` ganhou o tipo `stories` (publica em ordem e guarda o progresso em `feitos`, para continuar sem repetir); 6 entradas em `instagram/agenda.json`; JPG e MP4 em `instagram/midia/destaques/` (commit 0a926b5). Guia: https://claude.ai/artifact/1W8HvbsL5WdYmk9bP6yNR1
- Verificado: `publicar.mjs --teste` lista as 6 entradas com todos os arquivos; contêiner de story criado pela API a partir do GitHub com vídeo e com imagem, ambos FINISHED, sem publicar; links dos arquivos no guia respondem 200.
- Não verificado: a publicação real de stories pela API (primeira em 05/11 às 10h, pelo disparo da VPS e o GitHub Actions).
- Decisão: ordem invertida dos dias porque o destaque criado por último aparece primeiro no perfil.

## Guia passo a passo (mesmo dia)
- Pedido: "me de o guia corretamente, por onde eu começo e tudo que posso fazer hoje, com passo a passo".
- Feito: guia refeito por dia, começando por hoje (salvar capas, postar Contato 1 a 3 com link, criar o destaque, apagar "Redes Sociais"), com listas de marcar e os links para copiar dentro de cada dia. Agenda da API adiantada um dia: 05 a 10/11, às 10h. Mesmo link do guia.

## Próxima sessão
Perguntar o que a Jessica aprovou. Ajuste vira v2: mude o sufixo `-v1` no gerador e gere de novo com `node outputs/criativos/destaques/gerar-destaques.js png <id>` (e `mp4 <id>` nas aberturas). Antes de criar peça nova, leia o caderno de marca.
