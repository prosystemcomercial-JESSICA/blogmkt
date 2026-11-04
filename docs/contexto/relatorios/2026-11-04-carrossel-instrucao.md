# 04/11/2026: Carrossel V4, de instrução

## Pedido
A Jessica mandou um post do @rotaconsultoria (https://www.instagram.com/p/DfGsQ09AD2c/) e pediu: "é de instrução, adeque para que possamos criar o conteúdo assim".

## Feito
- Li o post com o agent-reach. Sem login, consegui só a legenda e as páginas 1 e 2.
- Criei o modelo **V4: instrução** em `outputs/criativos/modelos/instrucao/gerar.js`, com dois exemplos de 6 páginas em `pecas/`:
  - farmácia: estoque e compras, em azul;
  - padaria: preço e custo, em laranja.
- Escrevi as legendas e o que falta conferir em `LEIA-ME.md`.
- Registrei o modelo em `docs/design/caderno-de-marca/project/tipos-de-posts.md`, com a tabela de páginas e o que mudou em relação à referência.

## Verificado
- Gerei as 12 páginas e conferi em miniatura.
- Corrigi a tarja da capa da farmácia, que quebrava em duas linhas.
- O gerador confere se o texto encosta no logo, e nenhuma página encostou.
- **Não verificado:** as páginas 3 em diante do post original, que exigem login.

## Decisões e porquês
- **Tarjas:** troquei o amarelo da referência, que é proibido, por laranja `#F88818` na farmácia e branco na padaria.
- **Fonte:** troquei a fonte condensada por Montserrat.
- **Elementos da marca:** mantive losangos, degradê e logo, como pede a regra de que referência externa complementa o caderno e não o substitui.
- **Exceção aos 3 blocos de texto:** a página 2 tem mais blocos, porque a lista de desculpas é o que dá o tom.
- **Funções citadas:** só as do mapa de funções:
  - na farmácia, sugestão de compras, curva ABC e dias sem giro;
  - na padaria, composição de custo e rentabilidade por produto.

## Pendente
- **Jessica:**
  - aprovar o modelo e os exemplos;
  - decidir a voz: primeira pessoa ("Eu pararia aqui") ou "A gente".
- **Caderno publicado:** o artifact https://claude.ai/artifact/BB4fyaWHTFrY3ZX3J1yPuk ainda não mostra a V4. Republicar depois da aprovação.

## Próxima sessão
Se a V4 for aprovada:
1. Marcar a V4 como "Modelo escolhido" em `tipos-de-posts.md`.
2. Republicar o caderno.
3. Usar a V4 nas próximas pautas de instrução, sempre num carrossel só, sem misturar com V2 e V3.
