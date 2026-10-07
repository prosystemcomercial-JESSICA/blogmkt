# Como usar — Criativos Estáticos

Gere artes profissionais para o Instagram feed em minutos, sem precisar de Canva, designer ou template pronto.

A squad seleciona a imagem, aplica o design system da sua marca, constrói em HTML/CSS e exporta PNG 1080×1350px em alta resolução.

---

## Antes do primeiro uso

### 1. Configure o design system

Edite o arquivo `design-system.md` com a identidade visual da sua marca:
- Cores primária, secundária e de destaque (regra 60-30-10)
- Fonte principal (nome exato no Google Fonts)
- Logo e regras de uso

O **Ministro da Informação** (primeiro agente) detecta automaticamente se o arquivo ainda está com os valores padrão e orienta você a configurar — podendo extrair as cores do site da empresa automaticamente.

### 2. Coloque o logo em `_assets/`

Salve o arquivo como `_assets/logo-light.png` (versão clara, para fundos escuros).

### 3. Configure a chave do Pexels (opcional, mas recomendado)

Crie um arquivo `.env` na raiz da squad com:

```
PEXELS_API_KEY=sua_chave_aqui
```

Chave gratuita em: pexels.com/api — sem ela, a squad usa templates tipográficos puros (sem foto).

---

## Para gerar uma arte

**Abra o Claude Code nesta pasta e cole:**

```
Gerar arte estática para o feed.

Headline: [sua headline aqui]
Subheadline: [seu subheadline aqui]
CTA: [seu CTA aqui — ou "sem CTA"]
```

**Exemplos:**

```
Headline: 3 erros que todo gestor comete no primeiro trimestre.
Subheadline: E como evitar todos eles sem contratar mais ninguém.
CTA: Sem CTA
```

```
Headline: Sua empresa não cresce porque você ainda opera como autônomo.
Subheadline: Descubra a metodologia que já transformou mais de 1.500 negócios.
CTA: Conhecer a metodologia
```

---

## O que a squad faz automaticamente

1. **Ministro da Informação** — valida pré-requisitos (logo, design system, chave de imagens)
2. **Thiago Rocha** — seleciona a imagem ideal para a copy no Pexels ou define layout tipográfico
3. **Felipe Torres** — decide o layout, aplica as cores da marca e monta o Batch Spec completo
4. **Banguela** — constrói a arte em HTML/CSS e exporta PNG em alta resolução via Puppeteer
5. **Alfandega** — avalia autonomamente 8 critérios visuais e aprova ou devolve para correção

**A arte fica em:** `outputs/Social Media/[Mês_Ano]/arte-01.png`

---

## Agente standalone: Marina Fontes

A **Marina Fontes** extrai imagens do site do cliente e organiza em `_assets/` por categoria (hero, produto, pessoas, mockup, background).

Invoque a qualquer momento:

```
Marina, extrai as imagens do site do cliente [URL]
```

---

## Estrutura da pasta

```
criativos-estaticos/
├── squad.yaml              ← configuração da squad
├── design-system.md        ← identidade visual (configure aqui)
├── COMO-USAR.md            ← este arquivo
├── _assets/                ← coloque logo e imagens aqui
│   └── logo-light.png
├── templates/              ← biblioteca de 16 layouts prontos
│   ├── _catalog.yaml
│   └── t01-*.html ... t16-*.html
└── outputs/                ← artes geradas ficam aqui
    └── Social Media/
        └── [Mês_Ano]/
            ├── arte-01.html
            └── arte-01.png
```

---

## Dúvidas frequentes

**Preciso do Node.js instalado?**
Sim — o Banguela usa Puppeteer para exportar o PNG. Se não tiver, ele instala automaticamente com `npm install puppeteer --prefix _temp/puppeteer`.

**Posso mudar as cores depois?**
Sim — edite o `design-system.md` a qualquer momento. Vale a partir do próximo run.

**E se a arte não ficar boa?**
O Alfandega reprova artes abaixo do padrão e pede refação automaticamente (até 2 ciclos). Se chegar até você com baixa qualidade, descreva o que não gostou e peça uma nova versão.

**Quantas artes posso gerar por run?**
Uma arte por run. Para múltiplas artes, rode a squad múltiplas vezes com copies diferentes.

**A squad aprende com o tempo?**
Sim — cada arte aprovada vira um template reutilizável em `templates/`. O Felipe Torres consulta esse catálogo antes de criar layouts, evitando repetição visual entre runs.
