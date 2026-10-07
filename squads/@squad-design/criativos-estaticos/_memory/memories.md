# Memória da Squad — Criativos Estáticos

## Sobre esta squad

Squad de produção de artes estáticas para feed Instagram (1080×1350px) usando HTML/CSS + Puppeteer.

---

## Regras permanentes aprendidas

### Paleta de cores ProSystem Sistemas (CRÍTICO)

> Estabelecido em 26/05/2026 após feedback da Jessica

**ProSystem NÃO usa amarelo.** Cor `#F59E0B` é proibida para este cliente.

**Farmácias e Drogarias:** Azul + Branco
- Primary 60%: `#4A7AB8` (azul ProSystem)
- Secondary 30%: `#2E5A8F` (azul escuro) / `#1D3A5F` (azul profundo para urgência)
- Accent 10%: `#FFFFFF` (branco puro) — CTAs, números destacados, badges
- Botões CTA: fundo branco `#FFFFFF` + texto `#1D3A5F` (azul profundo)
- Nunca usar amarelo, ouro ou âmbar nesta categoria

**Padarias:** Laranja + Branco
- Primary 60%: `#EA580C` (laranja quente)
- Secondary 30%: `#C2410C` (laranja escuro)
- Accent 10%: `#FFFFFF` (branco)
- Nunca misturar azul e laranja no mesmo criativo

---

### Logo (CRÍTICO)

> Estabelecido em 26/05/2026 após feedback da Jessica
> **Tamanho atualizado em 22/06/2026 — aprovado pela Jessica**

- **Tamanho padrão: `height: 200px`** em todos os criativos 1080px — aprovado pela Jessica em 22/06/2026 (anterior 52-56px era pequeno demais)
- **Logo em fundo escuro/azul:** sempre `logo-light.png` (versão branca)
- **Logo em fundo claro:** sempre `logo-dark.png` (versão colorida)
- **Técnica de renderização:** injetar como data URL base64 no script de exportação — NÃO usar path relativo com file:// (causa broken image por causa de espaços no path)
- Posição: canto superior esquerdo, `top: 64px; left: 108px`
- Aplicar `filter: drop-shadow(0 2px 12px rgba(0,0,0,0.65))` em fundos escuros para garantir visibilidade

---

### Banco de imagens e Protocolo de Precisão Semântica (CRÍTICO)

> Estabelecido em 26/05/2026 — protocolo meticuloso adicionado em 26/05/2026 (feedback da Jessica)

- **API configurada:** Unsplash (NÃO Pexels)
- **Chave:** `UNSPLASH_ACCESS_KEY` no `.env` da raiz do projeto
- **Todas as artes com background devem usar imagem real de banco** — não usar criativo 100% tipográfico sem necessidade expressamente indicada no briefing
- Usar `orientation=portrait` + `per_page=8` nas buscas para melhor enquadramento 4:5
- **REGRA OBRIGATÓRIA: Rejeitar qualquer imagem com texto visível em inglês** — embalagens de produto, letreiros, etiquetas de preço, rótulos legíveis. O criativo é para mercado PT-BR.
- Preferir: pessoas em ação (farmacêuticos, clientes), ambientes com fundo desfocado, cenas de interação humana
- Evitar: close-ups de embalagens, prateleiras com rótulos legíveis, caixas de produto com marca
- Imagem deve ter área de respiro onde o overlay e o texto ficam
- Overlay mínimo `rgba(29, 58, 95, 0.72)` sobre azul para garantir legibilidade

**Protocolo de Busca Meticulosa (3 passos obrigatórios):**

1. **Definir conceito exato** — antes de buscar, escrever: quem aparece, o que faz, em que ambiente, qual detalhe é central
2. **3+ queries com ângulos diferentes** — nunca parar na primeira busca; tentar ação das pessoas, ambiente específico, detalhe central
3. **Confirmar semanticamente via API** — buscar detalhes da foto (`/photos/{id}?client_id=KEY`), ler `description` e `tags` para confirmar que a foto mostra o conceito definido no passo 1. Só baixar após confirmação.

**Exemplo real aprovado:** Copy "fila no caixa" → conceito: consumidores em fila com cestas aguardando caixa → queries: `customers waiting checkout line` + `pharmacy checkout queue` + `shoppers basket retail store` → foto `JWEwaHqSAHU` selecionada por description "Shoppers patiently wait to pay in Waitrose" — match confirmado.

**Queries aprovadas por conceito (farmácias ProSystem):**
- Fila/caixa: `customers waiting checkout line`, `pharmacy checkout queue`, `shoppers basket retail`
- Balcão/atendimento: `pharmacist customer counter service`, `drugstore counter service`
- Conformidade/SNGPC: `pharmacist checking documents`, `healthcare compliance documents`
- Inspeção: `health inspector tablet`, `auditor mask gloves tablet`
- Tecnologia: `pharmacy pos terminal`, `retail checkout technology`

---

### Exportação técnica

- Script de exportação: `scripts/export-png.js`
- Usar `page.setContent(html)` com data URLs inline (NÃO `page.goto(file://...)` com paths que têm espaços)
- Todas as imagens e logos devem ser convertidos para base64 antes do `setContent`
- `deviceScaleFactor: 2` → output real 2160×2700px
- `clip: { width: 1080, height: 1350 }` mantém dimensões corretas no PNG final
- Aguardar `document.fonts.ready` + 1200ms antes do screenshot

---

### Paleta Farmácia atualizada — Azul + Ciano + Branco (CRÍTICO)

> Estabelecido em 05/08/2026 — substitui o padrão azul+branco anterior como paleta oficial de TODOS os criativos de Farmácia daqui pra frente (não só um layout específico).

- Primária: `#0A2E87` (azul institucional escuro). Secundária: azul royal / `#2E5A8F`. Destaque: ciano vibrante `#11B8FF`/`#179CFF`.
- Acento pontual (decorativo, uso mínimo): laranja `#F58220` — não confundir com amarelo/âmbar `#F59E0B`, que segue proibido.
- CTA padrão novo: pill gradiente ciano→azul, texto branco negrito, seta à direita. Ver `design-system.md` para gradientes atualizados (G1, G5).
- Ver `design-system.md` completo — paleta, gradientes e hierarquia tipográfica já atualizados nesta data.

### Layout "Hero com Modelo" — Campanha Farmácia Meta Ads (CRÍTICO)

> Estabelecido em 05/08/2026 — briefing completo da Jessica para os anúncios ANI01–ANI06 da Campanha 1 (Farmácia, Meta Ads, `campaign_id 120247068051520132`)
> Spec completo em `briefings/farmacia-hero-modelo.md` — CONSULTAR SEMPRE antes de gerar arte para essa campanha.

- Layout split: esquerda = texto/elementos, direita = modelo em destaque (meio corpo/3-4, jaleco branco, ambiente farmácia)
- Usa a paleta Farmácia atualizada acima (azul `#0A2E87` + ciano + laranja pontual)
- Headline com quebras de linha e cores fixas: "quanto" em azul escuro, "sobra?" em ciano vibrante
- Card premium glass + 3 chips horizontais + rodapé com logo e site — estrutura fixa, não improvisar
- Falar somente de farmácia neste layout — nunca mencionar padaria

---

## Histórico de execuções

| Data | Cliente | Lote | Observação |
|------|---------|------|------------|
| 26/05/2026 | ProSystem Sistemas | Maio_2026 — 5 artes farmácia | Primeiro run. Design system configurado. v1 com amarelo rejeitada. v2 azul+branco aprovada com imagens Unsplash. v3 reimagens com protocolo semântico: fila real de consumidores (JWEwaHqSAHU, CrHG_ZYn1Dw), compliance (cw2Zn2ZQ9YQ), balcão atendimento (-2aiFHQOcbo), inspetor c/ tablet (HruSbX2a77M). 5/5 Alfandega aprovados. |
| 22/06/2026 v1 | ProSystem Sistemas | Junho_2026 — 6 artes blog v1 | Run inicial. Reprovado por Jessica: imagens desconexas do conteúdo, sem contexto brasileiro, sem rotina de negócio real. |
| 22/06/2026 v2 | ProSystem Sistemas | Junho_2026 — 6 artes blog v2 | Rerun completo. Imagens corrigidas: SNGPC(HzR3W1JD0_k profissional saúde computador), PDV(jQvkte13Emc balcão POS pagamento), Estoque(O13g6-Gtb5o farmacêutica examinando frasco), Precificação(AUmY7IjqgAs mulher tablet gráfico), PBM(tipográfico +40% número gigante), KPIs(wS73LE0GnKs gestora laptop). Contraste reforçado com overlays rgba(29,58,95,0.75-0.96). Logo 52-56px com drop-shadow. CTAs brancos #FFFFFF + texto #1D3A5F. 6/6 aprovados.
