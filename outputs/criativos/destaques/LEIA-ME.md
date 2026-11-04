# Destaques do Instagram (v1, 04/11/2026)

Gerados por `gerar-destaques.js` (`node outputs/criativos/destaques/gerar-destaques.js [png|mp4|capas] [id]`).
Aguardando aprovação da Jessica.

- `stories/`: 55 stories em PNG de 1080×1920. A abertura de cada destaque também sai em MP4 (8 s), com animação; o último quadro é igual ao PNG. Suba o MP4 no lugar do PNG quando houver os dois.
- `capas/`: 7 capas de 1080×1080. O Instagram recorta em círculo; o desenho fica no centro.

## Ordem dos destaques

| # | Destaque (nome no Instagram) | Substitui | Stories | Vídeo |
|---|---|---|---|---|
| 1 | Quem somos | "Quem somos" e "Quem Somos?" (eram dois) | 4 | 1 e 2 |
| 2 | Segmentos | "Nossos Nichos" | 4 | 1 |
| 3 | Ferramentas | "Ferramentas" | 33 | 1, 2, 24 e 30 |
| 4 | Integrações | "Integrações" | 3 | 1 |
| 5 | Suporte | novo | 3 | 1 |
| 6 | Depoimentos | "Depoimentos" | 5 | 1 |
| 7 | Contato | "Redes Sociais" | 3 | 1 |

## Figurinha de link

Os stories abaixo deixam a faixa de 1300 a 1580px livre, logo abaixo da pílula "Toque no link ↓":

| Story | Link |
|---|---|
| Quem somos 4 | https://prosystemnet.com/linknabio |
| Ferramentas 33 | WhatsApp do comercial |
| Integrações 3 | WhatsApp do comercial |
| Contato 1 | WhatsApp do comercial |
| Contato 2 | https://prosystemnet.com/blog/ |
| Contato 3 | https://prosystemnet.com/ebook/ |

Nos outros stories, a figurinha é opcional. Se quiser usá-la, Segmentos 2 pode apontar para https://prosystemnet.com/sistema-para-farmacia/ e Segmentos 4 para https://prosystemnet.com/sistema-para-padaria/.

## Ferramentas (ampliado em 04/11/2026)

A Jessica pediu "mais sobre as ferramentas, todas que pudermos". O destaque passou de 5 para 33 stories, na ordem do dia da loja:

- 1 abertura e 2 índice (as quatro partes).
- 3 a 9: caixa e vendas (sangria obrigatória, registro de sangria, fechamento, motivo da exclusão, painel de perda de vendas, combos, entregas).
- 10 a 15: estoque, preço e lucro (curva ABC e XYZ, produtos sem giro, painel de estoque, precificação, rentabilidade, análise de descontos).
- 16 a 23: painéis, WhatsApp e clientes (painel de indicadores, ticket médio, metas, fechamento, contas a pagar, aviso de desconto, escolha dos avisos, Fidelimax).
- 24: biometria (novidade).
- 25 a 29: farmácia (uso contínuo, relatório de uso contínuo, scanner de receitas do Farmácia Popular, atenção farmacêutica, lista com SNGPC, PBM e outros).
- 30 e 31: padaria, em laranja (pesagem no caixa e lista com mesas, produção e outros).
- 32: fiscal e financeiro (lista). 33: convite com a figurinha de link.

Telas muito finas (combos, metas, rentabilidade) levam o texto real da tela repetido em destaque, como no feed. Nenhum recurso novo foi inventado: tudo vem da LP, da tabela Planos 2025 ou de peças do feed.

## Fontes do conteúdo

- Provas: +600 clientes e +16 anos (site). Suporte das 7h às 22h, inclusive sábado e domingo, humanizado e com especialistas técnicos; primeiro contato pelo WhatsApp, com áudio, texto ou print (Jessica, 30/10/2026).
- Ferramentas, segmentos e planos: LP do site (`site/lp/montar_lp.py`) e tabela Planos Prosystem 2025.
- Integrações: lista dos planos Pro e Plus da farmácia, da mesma tabela.
- Depoimentos: avaliações do Google autorizadas em 30/10/2026, nos mesmos recortes dos depoimentos do feed.

## Pontos para a Jessica decidir

- **Ícones das capas:** o caderno ainda não tem biblioteca de ícones aprovada. As capas usam ícones de traço (Lucide, licença livre) dentro do losango da marca. Se reprovar, a alternativa é a sigla no losango, como no link da bio.
- **Telas:** os stories de Ferramentas e o Quem somos 3 mostram a tela real em cartão. Se você fizer o mockup (notebook ou desktop) e salvar em `outputs/criativos/nov-dez/mockups/<tela>.png`, ele entra no lugar ao gerar de novo.
- **Quem somos e Segmentos falam de farmácia e padaria na mesma peça,** por serem institucionais. O story de padaria (Segmentos 4) é laranja, como manda o caderno.
