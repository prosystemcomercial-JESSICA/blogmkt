# 03/11/2026 — Carrossel: capa sem tela e nenhuma tela repetida (regra nova)

## Pedido
Sobre o carrossel do uso contínuo (farmácia, 11/12): "Tire a imagem do sistema da Capa, e deixe só nos demais slides e nao repita o mesmo, é melhor deixar sem do que repetir, coloque isso como regra para as demais produções."

## Feito
- `outputs/criativos/nov-dez/pecas-dados.js`:
  - `carrossel-farmacia-uso-continuo-v3`: tirada a tela `uso-continuo-alerta` da capa e dos slides 5 e 6. Ela fica só no slide 3; slides 2 e 4 seguem com `uso-continuo-proxima-compra` e `uso-continuo-relatorio`.
  - Regra aplicada às outras peças ainda não publicadas: `carrossel-padaria-sangria-v2` (tela `sangria-registro` saiu do slide 6, fica no 4) e `carrossel-farmacia-atencao-farmaceutica-v2` (tela `atencao-anamnese` saiu dos slides 5 e 6, fica no 4).
  - Textos alternativos desses slides reescritos sem citar a tela.
- Imagens regeradas com `node gerar.js <id>` em `outputs/criativos/nov-dez/pecas/`.
- Regra registrada em `docs/design/caderno-de-marca/project/decisoes.md` (tabela Decidido) e `producao.md` (lista do Carrossel), e na memória do Claude.

## Verificado
- Gerador rodou sem estouro de texto nas três peças.
- Conferi a folha de contato dos 18 slides: nenhuma capa com tela e nenhuma tela repetida.

## Decisões e porquês
- `carrossel-farmacia-reforma-tributaria-v1` (04/11) também repete `painel-estoque` (capa, 5 e 6), mas está publicada e travada (commit 4c47924). Não mexi.

## Pendente
- Mockups das telas ainda são da Jessica (uso contínuo, sangria, anamnese).
- Jessica decide se a peça de 04/11 deve ser refeita.

## Próxima sessão
- Antes de criar um carrossel, ler `producao.md` (lista do Carrossel) e conferir a capa e as repetições de tela.
