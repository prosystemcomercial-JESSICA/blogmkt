# Novembro Azul (17/11): laço azul e troca de foto

## Pedido
Na peça `farmacia-novembro-azul-v1`, a Jessica pediu: "coloca um homem, atendendo o outro homem no balcão da farmácia" e "coloque em algum lugar também um símbolo do novembro azul".

## Feito
- Laço azul num selo branco centralizado na borda de cima do painel. Ele aparece com a opção `laco: true` do tipo `fotoPainel`. O código está em `outputs/criativos/nov-dez/gerar.js` (constante `LACO` e CSS `.laco`), e a opção foi ligada em `pecas-dados.js`, onde o texto alternativo também passou a citar o laço.
- O arquivo temporário do gerador agora vai para a pasta temporária do sistema, e a remoção não quebra se ele já tiver sumido. Antes, o `_pagina.html` ficava no repositório, entrava nos commits automáticos e a execução completa parava com ENOENT.
- Essas mudanças entraram nos commits automáticos `a0bdd6e`, `92b43f2` e `72f5371`, que outra sessão fez enquanto esta rodava.

## Verificado
- Gerei a peça e conferi o PNG (`outputs/criativos/nov-dez/pecas/farmacia-novembro-azul-v1.png`): o laço aparece e o texto não estoura.
- Rodei o gerador completo: "sem estouro", 42 peças, e o `legendas.md` foi atualizado.
- A foto **não foi trocada**. Continua a `farmaceutico-conferindo`.

## Decisões e porquês
- Procurei em bancos gratuitos (Pexels, Unsplash, Wikimedia) uma foto de um farmacêutico atendendo um cliente homem no balcão. Não achei uma que sirva: nas que existem, o cliente é mulher, a farmácia é antiga ou o lugar é uma loja de ervas. A série "Man consults with pharmacist" do Wikimedia, de domínio público, tem farmacêutica mulher.
- Não fiz imagem por IA, porque o caderno pede foto real com pessoas brasileiras e "sem cara de IA".

## Pendente
- Nada. A Jessica aprovou a peça como está, com a foto atual e o laço. Outra sessão já tinha travado a versão `farmacia-novembro-azul-v2` (painel de vidro, com o laço) no commit `de99a77`.

## Próxima sessão
Nada a fazer nesta peça. Se ela pedir para trocar a foto mais tarde: com a foto em mãos, salvar em `outputs/criativos/nov-dez/fotos/<nome>.jpg`, registrar o crédito em `fotos/CREDITOS.md`, trocar `foto`, `posicao` e `ajuste` e atualizar `alts` em `pecas-dados.js`. Depois rodar `node outputs/criativos/nov-dez/gerar.js`. Ler antes o caderno de marca em `docs/design/caderno-de-marca/project/`.
