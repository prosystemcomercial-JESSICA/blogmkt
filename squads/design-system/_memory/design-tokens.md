# Design Tokens — ProSystem Sistemas
> Extraído de: Logotipo oficial (`_expxagents/_assets/logo.png`) + site https://prosystemnet.com
> Data de extração: 12/05/2026

## Cores

| Token | Hex | Uso |
|-------|-----|-----|
| `color-primary` | `#4A7AB8` | Cor principal da marca (azul do logotipo); headers, links, títulos sobre fundo claro |
| `color-accent` | `#2E5A8F` | Variação mais escura para hover de botões e destaques |
| `color-dark` | `#1F2937` | Texto principal sobre fundo claro (cinza azulado) |
| `color-light` | `#F8FAFC` | Fundo claro de seções; alternativa ao branco puro |
| `color-white` | `#FFFFFF` | Fundo limpo (página do blog), texto sobre fundo escuro |
| `color-muted` | `#6B7280` | Texto secundário, metadados, datas |

### Uso das cores
- **Azul ProSystem (#4A7AB8):** extraído visualmente do wordmark "PROSYSTEM™" e do ícone play. Usado como cor estrutural (header, CTAs principais, links, H1/H2).
- **Azul escuro (#2E5A8F):** hover de botões, destaques tipográficos pesados.
- **Cinza-azulado (#1F2937):** texto corrido — bom contraste sobre fundo branco.
- Variáveis exatas do CSS do site **não foram acessíveis** via web_fetch (o HTML retornado não trouxe folhas de estilo); as cores acima foram derivadas da inspeção do logotipo oficial.

## Tipografia

### Fonte de títulos
- **Fonte:** `não identificado` — fallback recomendado: **Montserrat** (sans-serif geométrica, alinhada ao espírito do wordmark)
- **Uso:** headlines, H1, H2, H3, capas de artigos
- **Estilo:** Sentence case nos artigos; UPPERCASE permitido em CTAs (como o "QUERO COMEÇAR AGORA" detectado no site)
- **Pesos sugeridos:** 600 (semibold), 700 (bold)

### Fonte de corpo
- **Fonte:** `não identificado` — fallback recomendado: **Inter** (alta legibilidade em textos longos)
- **Pesos sugeridos:** 400 (regular), 500 (medium), 600 (semibold para destaques)
- **Uso:** parágrafos, labels, metadados — tamanho recomendado 16–18px, line-height 1.6–1.75

### Stack CSS recomendada
```css
--font-title: 'Montserrat', 'Segoe UI', system-ui, sans-serif;
--font-body: 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif;
```

## Espaçamento e Layout
- **Largura de leitura (blog):** max-width 720px, centralizado
- **Padding interno de seções:** 48px (desktop), 24px (mobile)
- **Border radius:** 8px para botões e cards; 12px para cards principais
- **Espaçamento entre parágrafos:** 1.25em

## Elementos Visuais de Marca
- **Logotipo:** wordmark "PROSYSTEM™" em azul (#4A7AB8) acompanhado de ícone circular azul com triângulo "play" branco interno; tagline "Desenvolvimento de Sistemas" em itálico abaixo do mark
- **Tom visual:** corporativo profissional, limpo, sem gradientes agressivos nem ilustrações lúdicas
- **CTA recomendado:** botão sólido `color-primary` com texto branco, border-radius 8px, padding 14px 28px
