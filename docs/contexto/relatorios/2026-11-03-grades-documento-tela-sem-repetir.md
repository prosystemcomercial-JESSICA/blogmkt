# 03/11/2026 — Documento de aprovação: grades dos carrosséis sem tela repetida

## Pedido
Print do carrossel de 19/01 (`carrossel-farmacia-atencao-farmaceutica-v2`) no documento "Criativos que faltam aprovar", com a tela `atencao-anamnese` nos slides 4 e 5: "coloque a tela do sistema em apenas 1 slide conforme nova regra de nao repetir".

## Feito
- As peças já estavam corrigidas no commit 70ea18a (tela só no slide 4). O documento https://claude.ai/artifact/3nx4JXdXoomuc4SZF91rCj ainda mostrava a grade 3×2 antiga.
- Geradas grades novas (1220×1010, a partir dos PNGs de `outputs/criativos/nov-dez/pecas/`), enviadas como assets do documento, e trocadas no lugar das antigas:
  - 19/01 `carrossel-farmacia-atencao-farmaceutica-v2`
  - 11/12 `carrossel-farmacia-uso-continuo-v3`, que mudou no mesmo commit
  - 04/12 `carrossel-padaria-sangria-v2`, que mudou no mesmo commit e no do aviso só no slide 2
- Texto alternativo das imagens mantido.

## Verificado
- Grade do 19/01 conferida: a tela aparece só no slide 4.
- Não verificado: as grades do 11/12 e 04/12 abertas no documento.

## Próxima sessão
- Ao mudar um carrossel que já está no documento, gerar a grade de novo e trocar a imagem nele.
- `gerar.js`, `pecas-dados.js` e `frase-janeiro-branco-v1.png` tinham alterações de outra sessão (laço branco). Não entraram neste commit.
