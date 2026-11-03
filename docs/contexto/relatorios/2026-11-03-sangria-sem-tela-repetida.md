# 03/11/2026 — Carrossel da sangria (padaria, 04/12): tela do sistema sem repetir

## Pedido
Print do documento de aprovação com o carrossel `carrossel-padaria-sangria-v2`: "pedi para nao repedir a mesma tela do sistema para nao ficar repetitivo, corrija".

## Feito
- `outputs/criativos/nov-dez/pecas-dados.js`: tirada a tela `sangria-bloqueio` do slide 3. A janela era a mesma do aviso no slide 2, só com outra frase. O slide 3 fica com a foto da grade de pães e o texto. Texto alternativo atualizado.
- Peça regerada com `node gerar.js carrossel-padaria-sangria-v2` (`pecas/carrossel-padaria-sangria-v2-1.png` a `-6.png`).
- `outputs/criativos/nov-dez/legendas.md`: `sangria-bloqueio` saiu da lista de mockups que a Jessica precisa fazer.
- Documento https://claude.ai/artifact/3nx4JXdXoomuc4SZF91rCj: grade nova do 04/12 (1220×1010), "Aguarda mockup" só com `sangria-aviso` e `sangria-registro`, e `sangria-bloqueio` fora da lista de mockups.

## Verificado
- A mudança em `pecas-dados.js` entrou no commit ad081b4, de outra sessão que rodava ao mesmo tempo.
- Gerador sem estouro de texto. Grade conferida: tela de aviso só no slide 2, tela de registro só no slide 4, os outros só com foto.
- Outra sessão mexeu no documento ao mesmo tempo (revs 36 a 39: ficou só o 04/12 pendente). As mudanças dela foram mantidas.

## Decisões e porquês
- Aviso e bloqueio são a mesma janela do sistema. Pela regra de não repetir tela ("melhor deixar sem do que repetir"), ficou só a do aviso.

## Próxima sessão
- Mockups do carrossel: só `sangria-aviso` e `sangria-registro`.
