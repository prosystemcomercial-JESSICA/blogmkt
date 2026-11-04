# Tipos de posts

Cada tipo tem um exemplo ao vivo em Componentes. Os textos dos exemplos só mostram o formato e ainda não foram revisados.

| Tipo | Quando usar | Estrutura | Situação |
|---|---|---|---|
| Carrossel V2: foto em destaque | Conteúdo educativo em sequência | 6 páginas, foto grande em todas | Modelo escolhido |
| Carrossel V3: impacto | Conteúdo educativo em sequência, com capa provocativa | 6 páginas, título gigante, foto cheia e losango | Modelo escolhido |
| Estático com produto | Notícia e tendência | Título, faixa, pílula e produto em destaque | Exemplo |
| Foto com painel | Dor do dia a dia | Foto em tom azul e painel central | Exemplo |
| Frase de impacto | Compartilhamento e marcação | Só tipografia sobre branco, com losangos nos cantos | Exemplo |
| Meme | Humor do setor | Texto, imagem em cartão e desfecho | Exemplo. **Em aberto:** origem das imagens |
| Depoimento | Prova social | Citação em cartão branco, nome e cidade | Peças com clientes reais e autorizados em `outputs/criativos/depoimentos/` |
| Homenagem | Data comemorativa de quem é cliente (Dia do Farmacêutico) | Degradê escuro da marca, foto da pessoa em ação dentro de um losango grande com contorno ciano, pílula laranja com a data na ponta de baixo, título, agradecimento e assinatura "ProSystem Sistemas". Sem CTA de venda | Aprovado em 03/11/2026 (`farmacia-dia-do-farmaceutico-v2`, layout `homenagem` em `outputs/criativos/nov-dez/gerar.js`). Use foto que ainda não apareça em outras peças |
| Padaria com foto | Dor e conteúdo de padaria | Título, foto em cartão e pílula branca | Exemplo |
| Story de destaque | Destaques fixos do perfil (Quem somos, Segmentos, Ferramentas, Integrações, Suporte, Depoimentos, Contato) | 1080×1920, logo no alto (262px), selo com o nome do destaque, título fino+extrabold, foto em cartão, losango ou tela real, faixa. Abertura de cada destaque também em MP4 de 8 s. Capas 1080×1080 com o losango de vidro no degradê azul. Mesmas zonas seguras do story de artigo | v1 em `outputs/criativos/destaques/` (04/11/2026), aguardando aprovação. Ícones das capas em aberto |
| Story de artigo | Divulgar artigo novo do blog com a figurinha de link | 1080×1920, selo "Novo artigo no blog", título, apoio e pílula "Toque no link e leia ↓". Nada nos 250px do alto nem nos 340px de baixo; a faixa de 1300 a 1580px fica livre para a figurinha | Primeiros em `outputs/criativos/nov-dez/stories/` (03/11/2026), aguardando aprovação |

A Jessica pediu "carrossel, estático, frases de impacto que chamam atenção, memes, depoimentos e etc". Outros tipos entram aqui quando forem criados e aprovados.

## Carrosséis: como usar os modelos

- **Cada produção usa um único modelo.** "Uma produção o V2, na outra o V3."
- **Nunca misture páginas ou layouts de V2 e V3 no mesmo carrossel.**
- Defina o modelo no início da produção e mantenha da capa à última página.
- A **V1 tipográfica não é usada nas produções.** Fica só como referência.

Sequência de 6 páginas, comum aos dois modelos: capa, 3 páginas de conteúdo, solução e chamada final.

### V2: foto em destaque

| Página | Layout |
|---|---|
| 1. Capa | Foto em tela cheia, título no pé da foto sobre o degradê da cor do segmento, apoio curto e pílula "Arraste para o lado →" |
| 2 a 4. Conteúdo | Foto no alto com cantos de baixo arredondados, número em selo de losango, título e faixa de apoio sobre branco |
| 5. Solução | Foto em tela cheia e painel com a cor do segmento na parte de baixo |
| 6. Chamada | Foto no alto, fundo em degradê, pergunta, provas, pílula "Fale com um especialista" e site |

### V3: impacto

| Página | Layout |
|---|---|
| 1. Capa | Fundo em degradê, título gigante e foto em cartão inclinado, com pílula "Arraste para o lado →" |
| 2 e 4. Conteúdo | Foto em tela cheia sob a cor do segmento, com número grande, título e apoio em branco |
| 3. Conteúdo | Fundo branco, foto dentro de um losango, número grande, título e faixa de apoio |
| 5. Solução | Fundo em degradê, foto em cartão inclinado, título e apoio |
| 6. Chamada | Fundo em degradê, pergunta, provas, pílula, site e duas fotos em cartões inclinados |

## Modelo fora do padrão do feed: Hero com Modelo

Layout aprovado em 05/08/2026 para os anúncios ANI01 a ANI06 da Campanha 1 (Farmácia, Meta Ads), com azul-escuro `#0A2E87`. A especificação está em `squads/@squad-design/criativos-estaticos/briefings/farmacia-hero-modelo.md`.

**Em aberto:** continua nos anúncios ou também migra para o padrão do feed?

## Referência histórica

A peça `canetas-emagrecedoras-v1` é a V1 do estático sobre canetas emagrecedoras. Segue o padrão azul-escuro de agosto e fica guardada como referência. Não confunda com a V1 dos carrosséis.
