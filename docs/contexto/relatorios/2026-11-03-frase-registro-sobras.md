# Frase do registro de sobras (padaria, 25/01), parada e em vídeo

## Pedido
A Jessica mandou o print da citação do artigo de sobras ("Sobra sem registro vira opinião. Sobra registrada vira decisão para a fornada de amanhã.") e pediu: "Quero usar essa frase para criar um post". Depois: "quero mais interessante, conseguimos fazer com motion? Nesse mesmo formato?"

## Feito
- v1 (commit `7aebe43`): arte parada `outputs/criativos/nov-dez/pecas/frase-padaria-registro-sobras-v1.png`, guardada como referência.
- v2: o mesmo layout em vídeo, `pecas/frase-padaria-registro-sobras-v2.mp4` (1080×1350, 9 s, 30 quadros/s, H.264, sem som). O PNG `-v2.png` é a capa e é igual ao último quadro.
- `outputs/criativos/nov-dez/motion.js`: novo gerador de vídeo das peças com `motion: true`. Ele abre a mesma página de `gerar.js`, anima com a Web Animations API, avança o relógio quadro a quadro e junta os quadros com ffmpeg.
- `gerar.js`: a montagem da página virou `documento()`, exportada para o `motion.js`; o gerador só roda quando chamado direto.
- `pecas-dados.js`: a peça passou a `frase-padaria-registro-sobras-v2`, com `motion: true` e texto alternativo do vídeo. `legendas.md` regenerado.

## Verificado
- `gerar.js` sem estouro; `ffprobe`: h264, 1080×1350, yuv420p, 9,0 s.
- Quadros conferidos: entrada palavra por palavra, "opinião" balança e embaça, a primeira frase recua, "decisão" entra carimbada com grifo, tudo volta nítido e entra "Leia a legenda.". Último quadro conferido em tamanho real.
- O `motion.js` para com erro se a Montserrat não carregar (na primeira geração da v1, a fonte de reserva saiu na arte).
- Se o artigo de sobras já está publicado no site: não verificado.

## Decisões e porquês
- Mesmo layout da frase (branco, losangos, laranja); o movimento conta a ideia da frase, em vez de enfeite.
- Feed 4:5 em vez de Reels 9:16, porque ela pediu "nesse mesmo formato".
- Sem trilha: a música pode ser escolhida no próprio Instagram.
- Data Seg 25/01: único dia livre de padaria depois da peça de 11/01, que anuncia o artigo.

## Pendente
- Jessica: aprovar o vídeo e a data.
- Conferir se o artigo está no ar antes de 25/01 e o volume de busca de "controle de sobras na padaria".

## Próxima sessão
Ajustes de tempo ficam no `montar()` de `motion.js`. Para gerar: `node outputs/criativos/nov-dez/gerar.js frase-padaria-registro-sobras-v2` (capa) e `node outputs/criativos/nov-dez/motion.js frase-padaria-registro-sobras-v2` (vídeo). Se aprovada, marcar `travada: true`. Outras frases ganham vídeo com `motion: true`.
