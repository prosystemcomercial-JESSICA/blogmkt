# Squad Memory — Blog para Social Media

## Sobre esta squad

Squad genérica para transformar artigos de blog em planejamento de conteúdo para redes sociais, com 5 briefings de criativos prontos para produção.

## Aprendizados por execução

### Execução 1 — 09/05/2026
- Blog acessado via arquivo local (file:///C:/Users/rafae/Documents/BLOG - SH10X/blog/index.html)
- 4 artigos coletados: IA, Churn, Retenção de Devs, Reforma Tributária
- Headline do Criativo 5 ajustada de 9 para 7 palavras durante revisão editorial
- Criativo 2 (subheadline) ficou no limite exato de 15 palavras — atenção em próximas rodadas
- Ângulos usados: Revelação, Provocativo, Educativo, Prático, Inspiracional

## Configurações por cliente

### Software House Exponencial
- Blog local: C:\Users\rafae\Documents\BLOG - SH10X\blog\index.html
- Tom: profissional, direto, orientado a dados concretos
- Público: donos de software houses, especialmente ERP
- Output salvo em: outputs/blog-para-social/Maio_2026/

## Histórico de execuções

| Data | Cliente | Fonte | Aprovado em | Observação |
|------|---------|-------|-------------|------------|
| 09/05/2026 | Software House Exponencial | 4 artigos de blog (13/05 a 03/06/2026) | Checkpoint humano aprovado | Blog local. 5 briefings gerados, aprovados e salvos. |
| 10/05/2026 | Software House Exponencial | 3 artigos de blog (10/06 a 24/06/2026) | Checkpoint humano aprovado com ajuste | Criativo 1 substituído a pedido da usuária. 5 briefings salvos em outputs/blog-para-social/Junho_2026/. |
| 10/05/2026 | Software House Exponencial | Transcrição de vídeo VID_20260305_093722 | Checkpoint humano aprovado com ajustes iterativos | Squad adaptada para transcrição ao vivo. Estilo Hormozi testado e rejeitado — adotar referências de copywriters BR (Natanael Oliveira). Evitar primeira pessoa do palestrante nos criativos. Evitar exemplos genéricos como Uber. Criativo 4 passou por 3 versões: VibeCoder → Analogia histórica (Uber descartado) → Humanização (versão final). 5 briefings salvos em output/v1/. |
| 11/05/2026 | Software House Exponencial | 3 artigos blog (Escalar SH / Vender ERP / Precificação — Junho 2026) | Checkpoint humano aprovado | Andromeda 2×C1+2×C2+1×C3. Revisão 2 rodadas (travessão em C1). 5 PNGs em criativos-estaticos/outputs/Social Media/Maio_2026/. |
| 26/05/2026 | ProSystem Sistemas | 2 artigos blog local (SNGPC 2026 + PDV fila caixa) | Checkpoint humano aprovado | Primeiro run para ProSystem. Design system configurado do zero. Unsplash como API de imagem (sem Pexels). Todos os criativos Layout F (tipográfico puro) — sem imagem de produto. Revisão editorial passou em 1 rodada. 5 PNGs gerados e aprovados pela Alfandega. Arquivos em outputs/blog-para-social/Maio_2026/ e criativos em @squad-design/criativos-estaticos/outputs/Social Media/Maio_2026/. |

## Aprendizados por execução

### Execução #4 — 11/05/2026
- Fonte: blog softwarehouseexponencial.com.br — 3 artigos de Junho/2026 (Escalar SH, Vender ERP, Precificação)
- Chave Pexels está na raiz do projeto (c:\Users\rafae\Documents\BLOG - SH10X\.env), não dentro da squad
- Artigos já usados em execuções anteriores: IA, Churn, Retenção de Devs, Reforma Tributária — não repetir
- Rodada 1 reprovada pelo Marcos: Criativo 1 subheadline com travessão (—). Corrigido para vírgula na Rodada 2
- Distribuição Andromeda mantida: 2×C1 + 2×C2 + 1×C3
- Criativos estáticos salvos em: squads/criativos-estaticos/outputs/Social Media/Maio_2026/

### Regras de imagem Unsplash (26/05/2026)
- Banco de imagens: Unsplash (não Pexels). Chave em UNSPLASH_ACCESS_KEY no .env
- Blog usa imagens locais em blog/assets/images/ (não URLs externas)
- Rejeitar imagens com texto visível em inglês: rótulos de produto, letreiros, embalagens com marca
- Preferir: pessoas em ação, ambientes desfocados, cenas de interação humana sem produto legível
- Para artigos sobre farmácias: queries recomendadas: pharmacist professional, pharmacy worker, healthcare worker tablet, pharmacy counter service

### Protocolo de Precisão Semântica para Imagens (26/05/2026)
- Exigência da Jessica: imagem deve mostrar exatamente o que o copy descreve — não uma variação genérica do setor
- Antes de buscar: definir por escrito quem aparece, o que faz, em que ambiente e qual detalhe é central
- Executar mínimo 3 queries com ângulos diferentes (ação, ambiente, detalhe)
- Confirmar via API de detalhes Unsplash (/photos/{id}) — ler description e tags antes de baixar
- Exemplo validado: "fila no caixa" → foto de consumidores esperando com cestas (ID JWEwaHqSAHU, desc "Shoppers patiently wait to pay in Waitrose") — match semântico confirmado
- Protocolo documentado em imagemaster.agent.md da squad criativos-estaticos

### Regras de paleta ProSystem (26/05/2026)
- ProSystem NÃO usa amarelo. Nunca usar #F59E0B ou qualquer âmbar/dourado para esta marca
- Farmácias/drogarias: azul (#4A7AB8) + branco (#FFFFFF). Botões brancos com texto azul escuro
- Padarias: laranja (#EA580C) + branco. Não misturar paletas entre segmentos
- Logo: sempre branco (logo-light.png) sobre fundos azuis, mínimo 64px de altura

### Execução #5 — 26/05/2026 · ProSystem Sistemas
- Fonte: blog local (C:\Users\prosy\Documents\mkt reuniao 1\blog) — 2 artigos: SNGPC 2026 + PDV fila caixa
- Cliente novo: ProSystem Sistemas — ERP para farmácias, drogarias e padarias
- Design system configurado do zero nesta sessão (logo copiado de blog/assets/logo/, paleta ProSystem mapeada)
- API de imagem: Unsplash (Access Key no .env). Pexels não disponível.
- Todos os 5 criativos foram Layout F (tipográfico puro) — adequado ao posicionamento técnico-institucional do cliente
- Revisão editorial do Marcos: aprovada em 1 rodada (sem rejeições)
- Alfandega: 5/5 aprovados — lote limpo
- Aprendizado técnico: logo em path relativo não renderiza em Puppeteer com file:// + espaços no path. Solução: injetar logo como data URL base64 via script antes do screenshot.
- Distribuição Andromeda: 2×C1 + 2×C2 + 1×C3 (mantida como padrão)
- Copy ProSystem: tom técnico-institucional. Sem imagem de produto em nenhum criativo. Números em destaque (67%, 7 dias, R$1,5M, +18%).

### Execução com transcrição de vídeo — 10/05/2026
- Squad pode ser usada com transcrição de vídeo além de artigos de blog
- Estilo Alex Hormozi soa artificial em português — não usar
- Referências de copy BR funcionam melhor: Natanael Oliveira aprovado pela usuária
- Nunca usar primeira pessoa do palestrante nos criativos ("rodei 8 programadores", "passei sem dormir")
- Evitar exemplos muito genéricos de mercado (Uber, Netflix) — preferir exemplos do próprio setor de software
- Ângulos usados e aprovados: Provocativo, Revelação com dado, Bastidores, Humanização, Prova social
