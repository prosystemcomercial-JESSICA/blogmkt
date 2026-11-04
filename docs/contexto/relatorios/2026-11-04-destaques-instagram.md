# Destaques do Instagram v1 (04/11/2026)

## Pedido
Jessica: "vamos criar alguns stories para colocarmos nos destaques do instagram, inclusive vamos mudar as capas e se necessario os destaques". Depois: pular as perguntas e produzir já, "use tudo que usamos para a produção do feed, motion em alguns, elementos visuais envolventes em objetos etc.... Produção premium".

## Feito
- `outputs/criativos/destaques/gerar-destaques.js`: gera os stories (PNG 1080×1920), os vídeos (MP4 de 8 s, 30 qps) e as capas (1080×1080). Modos: `png`, `mp4`, `capas`, com filtro opcional por id.
- `outputs/criativos/destaques/stories/`: 27 PNG e 8 MP4. `capas/`: 7 PNG.
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

## Próxima sessão
Perguntar o que a Jessica aprovou. Ajuste vira v2: mude o sufixo `-v1` no gerador e gere de novo com `node outputs/criativos/destaques/gerar-destaques.js png <id>` (e `mp4 <id>` nas aberturas). Antes de criar peça nova, leia o caderno de marca.
