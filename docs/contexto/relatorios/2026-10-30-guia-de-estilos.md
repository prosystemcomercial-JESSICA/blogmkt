# Guia de estilos a partir do feed e do site

## Pedido
Analisar o site e o feed do Instagram, comparar com o que fizemos e definir um padrão profissional: "Padarias quero o padrão com a cor predominante laranja, os demais quero o mesmo padrão desse feed". A próxima fase é a pesquisa para editorial e criativos (carrossel, estático, frases, memes, depoimentos). Também pediu: canetas-emagrecedoras como V1, as demais V2, V3, e acompanhar a construção em tempo real.

## Feito
- `docs/design/guia-de-estilos/index.html` e `assets/`: guia com análise, comparação da V1, paleta, exemplos por estilo, regras e decisões. Publicado em https://claude.ai/artifact/FrHek3rYQ66dtuES5VdRdi (privado; só abre para outras pessoas depois de compartilhado).
- `outputs/criativos/farmacia/tendencia/canetas-emagrecedoras-v1.{html,png}`: arquivos renomeados, sem mudar o conteúdo. O relatório `2026-10-30-criativo-caneta-emagrecedora.md` ainda cita o nome antigo.
- `squads/@squad-design/criativos-estaticos/design-system.md` não foi alterado.
- Depois, a pedido dela ("faça o modelo completo das páginas dos carrosséis", "pode colocar no documento"): dois carrosséis de 6 páginas, farmácia em azul e padaria em laranja, com PNGs 1080×1350 e gerador em `outputs/criativos/modelos/carrossel/` (`node outputs/criativos/modelos/carrossel/gerar.js`). Entraram no guia na seção "Carrosséis completos".

## Verificado
- Site: abri `prosystemnet.com.br/home/`, que redireciona para `prosystemnet.com/home/`. Cores e fontes lidas do código renderizado da página.
- Feed: cores medidas nas 3 imagens enviadas, aproximadas por serem capturas de tela.
- Contraste com branco calculado por fórmula para cada cor da paleta.
- Exemplos conferidos em captura a 1200px, sem rolagem lateral nessa largura.
- Carrosséis: as 12 páginas conferidas lado a lado; losangos fora da área de texto. Textos de exemplo, ainda sem revisão dela.
- Não verificado: guia na largura de celular e em tema escuro; demais páginas do site; perfil do Instagram ao vivo.

## Decisões e porquês
- Exemplos só ilustram formato; depoimento usa colchetes para não inventar cliente, e meme usa espaço reservado para não usar imagem sem direito.
- Texto pequeno na parte escura do degradê, porque branco sobre ciano e laranja claro fica abaixo de 3 de contraste.
- Tema de cor: feed como referência das redes, porque ele e o site compartilham o degradê azul-turquesa, mas o site é mais escuro.
- Fotos do Unsplash não usadas nos exemplos.
- Carrosséis seguem as recomendações ainda não aprovadas (logo a 30%, sem tablet, sem pessoas posando, `#F88818`).

## Pendente
- Jessica aprova ou ajusta os modelos de carrossel.
- Jessica decide: telas e tablets, pessoas nas fotos, tamanho do logo, tom de laranja, memes e marcas de terceiros (tabela no guia).
- Imagem da pasta Downloads para a caneta: ela não confirmou se ainda quer usar.
- Comercial confirma os itens do card da V1, em especial "Receita vinculada à venda".
- V1 usa `prosystemnet.com.br`, que redireciona para `prosystemnet.com`; confirmar qual endereço vira padrão.

## Próxima sessão
Com as decisões, atualizar `design-system.md`, criar os modelos em `squads/@squad-design/criativos-estaticos/templates/` e iniciar a pesquisa de pauta. Skill sugerida: `ad-creative`.
