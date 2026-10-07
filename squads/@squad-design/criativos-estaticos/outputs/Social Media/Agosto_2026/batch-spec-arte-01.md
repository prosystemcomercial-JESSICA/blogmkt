# Batch Spec — quanto-sobra-hero-modelo — Agosto_2026

## Design System aplicado
- Cor primária: #0A2E87 (azul institucional escuro) → 60%
- Cor secundária: azul royal (transição #0A2E87 → #179CFF no gradiente de fundo) / #2E5A8F → 30%
- Cor de destaque: #11B8FF / #179CFF (ciano vibrante) → 10%
- Acento pontual: #F58220 (laranja) — só na linha decorativa do cabeçalho, uso mínimo
- Fonte: Montserrat (headline, extra bold/heavy 800) + Inter (corpo, regular/medium 400-500)
- Logo: _assets/logo-light.png (branco, canto superior esquerdo — mas aqui substituído pelo lockup "Prosystem | Farmácia" no cabeçalho + logo no rodapé)

## Arte 1 — Layout "Hero com Modelo" (referência: briefings/farmacia-hero-modelo.md)
- Template source: new (primeira execução deste layout — será extraído como template após aprovação)
- Layout: E (split vertical) adaptado — esquerda 55% texto/elementos sobre gradiente G1, direita 45% modelo em destaque
- Imagem: _assets/img-farmaceutica-hero-modelo.jpg
- Conceito visual: farmacêutica brasileira, jaleco branco + blusa azul royal, meio corpo, braços cruzados, sorriso natural, semiolhando câmera — fundo original de estúdio branco
- Remoção de fundo: sim — sem cutout manual disponível no pipeline; aplicar máscara CSS (mask-image linear-gradient) nas bordas esquerda/superior/inferior da foto para dissolver o fundo branco de estúdio no gradiente de marca, criando integração sem corte abrupto
- Posição da imagem: coluna direita, ocupando do topo à base, ancorada à direita, leve zoom para enquadrar meio corpo
- Overlay: leve véu azul (#0A2E87 a 12% opacidade) sobre a foto para unificar tom com o fundo; névoa azulada (gradiente radial #11B8FF a 8%) na parte inferior direita

### Cabeçalho
- Ícone fino (outline, 20px) + texto "Prosystem | Farmácia" — 13px, Inter 600, uppercase, letter-spacing 1.5px, branco
- Linha horizontal decorativa laranja (#F58220), 2px altura, 48px largura, logo abaixo do cabeçalho

### Headline
- Linhas (quebras exatas):
  - "Você vende. Mas" — branco, 800
  - "quanto" — #0A2E87 com leve glow/contorno claro para legibilidade sobre fundo escuro (ou aplicar sobre painel branco translúcido atrás da palavra), 800
  - "sobra?" — #11B8FF, 800
  - "Você realmente sabe?" — branco, 800
- Tamanho: 76px (linha 1 e 4), 84px (linhas 2-3, destaque)
- Alinhamento: esquerda

### Subheadline
- "Tenha margem real em tempo real e mais controle sobre a operação da sua farmácia."
- Tamanho: 22px, Inter 400, branco 85% opacidade, alinhamento esquerda, max-width 420px

### Card premium (glass)
- Fundo: rgba(255,255,255,0.10), backdrop-blur 12px, borda 1px rgba(17,184,255,0.35), border-radius 20px, sombra 0 8px 32px rgba(0,0,0,0.25)
- Ícone à esquerda: quadrado 56px, border-radius 14px, gradiente G1 (#0A2E87→#179CFF), símbolo de dashboard/gráfico em branco
- Direita: título "ERP local para farmácia" (18px, Inter 700, branco) + texto "Opera 100% sem internet, com PDV integrado e 16 anos de especialização." (15px, Inter 400, branco 80%)

### Chips (3, horizontais)
- "100% offline" · "PDV + SNGPC" · "16 anos"
- Ícone check + texto 13px Inter 600, fundo rgba(255,255,255,0.08), borda 1px rgba(255,255,255,0.15), border-radius full (pill)

### CTA
- "Agendar demonstração" + seta →
- Pill, gradiente G5 (#11B8FF → #179CFF → #0A2E87), texto branco 700, padding 18px 32px, border-radius full, sombra 0 8px 24px rgba(17,184,255,0.35)

### Rodapé
- Logo Prosystem (logo-light.png, altura 40px) canto inferior esquerdo
- "prosystemnet.com" — 13px Inter 500, branco 70%, canto inferior direito

### Notas
- Margens de segurança: 108px laterais, 96px superior/inferior
- Decoração: 2-3 linhas finas diagonais sutis (1px, branco 8% opacidade) no canto superior direito; moldura geométrica linear fina nos 4 cantos (12px de comprimento, 1px espessura, branco 15%)
- Falar somente de farmácia — não mencionar padaria
- Copy é exatamente a fornecida pela Jessica — não alterar nem uma vírgula

## Pasta de output
outputs/Social Media/Agosto_2026/
