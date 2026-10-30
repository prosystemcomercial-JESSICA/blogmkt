# Design System — ProSystem Sistemas

---

## Identidade Visual

**Nome da empresa:** ProSystem Sistemas
**Segmento:** ERP para farmácias, drogarias e padarias
**Tom visual:** Profissional, confiável, técnico. Azul institucional dominante para farmácias. Laranja vibrante para padarias. Tipografia pesada transmite solidez e autoridade no setor.

---

## Padrão vigente (desde 30/10/2026)

**Toda peça nova do feed segue esta seção.** As regras completas estão em `docs/design/caderno-de-marca/project/`: `README.md` (marca), `tipos-de-posts.md`, `producao.md`, `decisoes.md` e `tokens.json`. Em caso de conflito, o caderno vale sobre o restante deste arquivo.

- **Padaria:** laranja predominante, sem azul. Degradê `linear-gradient(155deg,#B83C0A 0%,#D9500B 50%,#F07A12 85%,#F88818 100%)`. Texto pequeno sobre `#C2410C`.
- **Demais segmentos:** padrão do feed. Degradê `linear-gradient(155deg,#2E6DB4 0%,#417ABC 48%,#3898D8 78%,#38C8F8 100%)`. Texto pequeno sobre `#2E6DB4`, e `#081330` sobre branco e ciano. Laranja `#F88818` só na pílula.
- **Fundos:** alternar degradê, branco e foto.
- **Tipografia:** só Montserrat, misturando peso 300 e 800 na mesma frase.
- **Elemento de marca:** losangos de cantos redondos, entrando pelos cantos e longe do texto.
- **Texto:** no máximo 3 blocos por peça. Pílula pequena; botão grande só em anúncio.
- **Carrossel:** cada produção usa um único modelo, V2 ou V3, da capa à última página. **Nunca misture os dois.** A V1 não é usada. Gerador: `outputs/criativos/modelos/carrossel/gerar-variacoes.js`.
- **Versões:** a versão vai no nome do arquivo (`-v1`, `-v2`, `-v3`).
- **Fotos:** ligadas ao assunto de cada página, sem texto em inglês e sem cara de IA.
- **Proibido:** amarelo ou âmbar.
- **Mockups de tela:** só notebook e desktop, em balcão ou escritório, com tela real do sistema. **Celular e tablet são proibidos em qualquer imagem.** Mockups prontos em `banco imagens/mockups-prosystem/`.

**Em aberto, aguardando a Jessica (ver `decisoes.md`):** pessoas nas fotos, tamanho e posição do logo (os modelos usam 324px de largura, no centro), tom de laranja, memes e marcas de terceiros, textura, Hero com Modelo e endereço do site. Até a decisão, mantenha as proibições de tablet, smartphone e tela de sistema e a regra de pessoas.

---

# Padrão anterior

> Vale só para o layout Hero com Modelo (`briefings/farmacia-hero-modelo.md`) e como registro das peças já feitas. Não use em peças novas do feed.

## Paleta de Cores por Segmento

### Regra 60-30-10

> **ATENÇÃO:** A ProSystem NÃO usa amarelo (#F59E0B) em nenhum segmento.
> A paleta varia conforme o tipo de negócio do cliente final.

---

### Farmácias e Drogarias — Azul + Ciano + Branco

> **Atualizado em 05/08/2026** — novo padrão oficial aprovado pela Jessica, substitui a paleta azul+branco anterior para todos os criativos de Farmácia.

**Cor primária** (60% — fundo principal, áreas dominantes):
`#0A2E87` → Azul institucional escuro (substitui `#4A7AB8` como base principal)

**Cor secundária** (30% — containers, separadores, estrutura, gradientes):
Azul royal (tom intermediário entre `#0A2E87` e o ciano) / `#2E5A8F` como alternativa

**Cor de destaque** (10% — CTA, números em destaque, palavras-chave da headline, badges):
`#11B8FF` / `#179CFF` → Ciano vibrante

**Acento pontual** (uso decorativo mínimo — linha, detalhe, ícone; nunca em área grande):
`#F58220` → Laranja. **Não confundir com o amarelo/âmbar `#F59E0B`, que segue proibido.**

**CTAs:** botão pill em gradiente ciano → azul (`#11B8FF`/`#179CFF` → `#0A2E87`), texto branco negrito, seta à direita. (Padrão anterior — botão branco com texto azul escuro — fica como alternativa para peças mais sóbrias/institucionais.)
**Números em destaque / palavras-chave de headline:** ciano vibrante `#11B8FF` ou branco sobre fundos azuis
**Badges / bordas de ênfase:** branco, azul claro `#A8C4E0` ou ciano sutil

---

### Padarias — Laranja + Branco

**Cor primária** (60% — fundo principal):
`#EA580C` → Laranja quente

**Cor secundária** (30%):
`#C2410C` → Laranja escuro

**Cor de destaque** (10%):
`#FFFFFF` → Branco

**CTAs:** botão branco com texto laranja escuro, OU botão laranja escuro com texto branco
**Nunca misturar azul e laranja no mesmo criativo.**

---

### Paleta Completa — Farmácias/Drogarias

**Cores principais:**
- Azul institucional: `#0A2E87` — cor principal, fundos e headers (padrão atual)
- Azul principal (legado): `#4A7AB8` — ainda válido como variante mais clara em gradientes
- Azul escuro: `#2E5A8F` — variante mais profunda, hover, gradientes
- Azul profundo: `#1D3A5F` — fundos escuros, criativos de urgência
- Ciano vibrante: `#11B8FF` / `#179CFF` — CTA, destaque de headline, números
- Laranja acento: `#F58220` — uso pontual/decorativo apenas (linha, ícone, detalhe)
- Azul tint: `#EEF4FB` — backgrounds claros, cards secundários
- Azul claro: `#A8C4E0` — acentos sutis, bordas de cards

**Neutros:**
- Texto principal: `#111827`
- Texto secundário: `#374151`
- Texto muted: `#6B7280`
- Borda: `#E5E7EB`
- Fundo base: `#F8FAFC`
- Branco: `#FFFFFF`

---

## Tipografia

**Fonte principal (títulos/display):** Montserrat
> Disponível no Google Fonts: `Montserrat`
> Pesos: 600, 700, 800

**Fonte secundária (corpo/UI):** Inter
> Disponível no Google Fonts: `Inter`
> Pesos: 400, 500, 600, 700

### Hierarquia Tipográfica

| Nível | Tamanho | Peso |
|-------|---------|------|
| Display / Headline principal | 64–80px | 800 |
| H1 | 48px | 800 |
| H2 | 36px | 700 |
| Corpo | 16–18px | 400–500 |
| Label / Eyebrow | 11–12px | 700–800 (uppercase, letter-spacing 2px) |

---

## Logo

**Arquivo do logo (fundo escuro):** `_assets/logo-light.png` — versão branca para fundos azuis/escuros
**Arquivo do logo (fundo claro):** `_assets/logo-dark.png` — versão colorida para fundos claros

### Regras de uso do logo

- Usar `logo-light.png` (branco) em fundos azuis escuros ou gradientes escuros
- Usar `logo-dark.png` em fundos brancos ou muito claros
- **Tamanho mínimo digital: 160px de largura / 56px de altura** — nunca menor
- **Tamanho padrão em criativos 1080px:** altura mínima 56px, preferencial 64px
- Zona de proteção mínima: espaço equivalente à altura do logotipo em todos os lados
- Posicionar preferencialmente no canto superior esquerdo do criativo
- **Nunca posicionar logo branco sobre fundo azul sem garantir contraste suficiente** — se o azul for claro (#4A7AB8), usar logo branco com sombra sutil ou usar logo-dark

---

## Gradientes Aprovados

```
G1 (hero/fundos principais):  linear-gradient(135deg, #0A2E87 0%, #1D3A5F 100%)
G2 (cards/sidebar CTAs):      linear-gradient(145deg, #4A7AB8 0%, #1D3A5F 100%)
G3 (urgência/SNGPC):          linear-gradient(135deg, #2E5A8F 0%, #1D3A5F 100%)
G4 (padarias — quente):       linear-gradient(135deg, #EA580C 0%, #C2410C 100%)
G5 (CTA — ciano p/ azul):     linear-gradient(90deg, #11B8FF 0%, #179CFF 40%, #0A2E87 100%)
```

---

## Border Radius

| Token | Valor | Uso |
|-------|-------|-----|
| sm | 6px | Badges, tags pequenos |
| md | 9px | Botões |
| lg | 12px | Cards menores |
| xl | 16px | Cards padrão |
| full | 9999px | Pills, badges arredondados |

---

## Padrões por Tipo de Criativo

### Criativos C1 (Educativo / Dor oculta)
- Fundo: azul profundo `#1D3A5F` ou gradiente G1
- Headline: branco `#FFFFFF`, tipografia pesada (800)
- Subheadline: branco com opacidade 85% (`rgba(255,255,255,0.85)`)
- Imagem de fundo: fotografia real com overlay azul escuro (opacidade 65–75%)
- Logo ProSystem no canto superior esquerdo, versão branca, mín. 64px altura

### Criativos C2 Hard Sell / Dado de Impacto
- Fundo: azul `#4A7AB8` ou gradiente G1
- Número/dado em destaque: branco `#FFFFFF` ou azul claro `#A8C4E0`, tamanho máximo
- Cards de dados: fundo com leve transparência, borda branca
- Imagem de fundo: fotografia real com overlay azul (opacidade 55–65%)
- Logo ProSystem no canto superior esquerdo, versão branca, mín. 64px altura

### Criativos C2 Demonstrativo / Resultado
- Fundo: branco `#FFFFFF` ou azul tint `#EEF4FB`
- Número de resultado: azul `#4A7AB8` ou azul escuro `#2E5A8F`, tamanho máximo
- Tipografia do corpo: texto escuro `#111827`
- Imagem: opcional — se usada, em card com bordas ou quadrante
- Logo ProSystem no canto superior esquerdo, versão escura ou azul, mín. 64px altura

### Criativos C3 Urgência / Objeção
- Fundo: azul profundo `#1D3A5F` com gradiente G3
- Valor de urgência: branco `#FFFFFF`, destaque máximo
- CTA: botão branco com texto `#1D3A5F`
- Imagem de fundo: fotografia real com overlay G3 escuro (opacidade 70–80%)
- Logo ProSystem no canto superior esquerdo, versão branca, mín. 64px altura

---

## Regras de imagem de fundo

- Sempre usar overlay sobre a imagem para garantir legibilidade do texto
- Overlay mínimo: `rgba(29, 58, 95, 0.65)` para texto branco ser legível
- A imagem deve ter área de respiração (céu, parede, balcão limpo) onde o texto vai respirar
- Nunca usar imagem com cara de IA (pele plástica, brilho artificial, simetria perfeita)
- Fotos de farmácia: interiores, balcões, farmacistas, clientes — sempre profissionais e reais

---

## Exemplos de artes anteriores

> Referências em `_assets/referencias/` — ainda não populado.
