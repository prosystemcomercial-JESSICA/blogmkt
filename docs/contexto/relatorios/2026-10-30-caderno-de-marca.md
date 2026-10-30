# Caderno de marca e design system

## Pedido
"Preciso que salve tudo que decidimos com contexto, modelos e tudo mais com o nosso design system e caderno de marca, com os padrões de produção e estilos escolhidos, além dos tipos de posts." No meio do trabalho, corrigiu a regra dos carrosséis: "Não é para mesclar os carrosséis", "vamos usar os dois modelos, em ocasiões diferentes", "uma produção o V2, na outra o V3".

## Feito
- `docs/design/caderno-de-marca/project/`: fonte do caderno, com `README.md` (marca), `tipos-de-posts.md`, `producao.md`, `decisoes.md`, `tokens.json`, 9 exemplos em `components/` e capa. Publicado em https://claude.ai/artifact/BB4fyaWHTFrY3ZX3J1yPuk (privado; só abre para outras pessoas depois de compartilhado).
- Logos, referências do feed e do site, e páginas de carrossel enviados ao caderno: V2 e V3 completos e a capa de cada V1. Os arquivos originais continuam em `docs/design/guia-de-estilos/assets/`.
- `squads/@squad-design/criativos-estaticos/design-system.md`: nova seção "Padrão vigente" no alto. O conteúdo antigo foi mantido como "Padrão anterior", para o Hero com Modelo e como registro.
- `docs/design/guia-de-estilos/index.html`: regra dos carrosséis corrigida e link para o caderno.
- `CLAUDE.md`: aponta para o caderno.
- Memória do projeto atualizada.

## Verificado
- Os 9 exemplos e a capa renderizados localmente com Puppeteer, com imagens locais no lugar das hospedadas. Olhei capa, elementos, frase de impacto, estático com produto e V3. Sem rolagem lateral na largura de 1000px nos que têm largura fixa; as tiras de carrossel rolam por dentro.
- Publicação aceita pelo servidor, com todos os arquivos listados.
- Não verificado: a página publicada aberta no navegador, porque exige login; a página em tema escuro; a largura de celular.
- Não verificado: a execução real da squad com o novo `design-system.md`.

## Decisões e porquês
- Tudo em um só lugar: o caderno e o design system são o mesmo material, e o repositório guarda a fonte. Assim a página e os agentes leem as mesmas regras.
- O que não foi decidido pela Jessica ficou marcado como "em aberto", com a situação atual e a recomendação, em vez de virar regra.
- Até a decisão, proibições antigas (tablet, smartphone, tela de sistema) e a regra de pessoas continuam valendo.
- O padrão anterior não foi apagado do `design-system.md`, porque o Hero com Modelo dos anúncios ANI01 a ANI06 ainda depende dele.
- As imagens do Unsplash não foram enviadas como arquivos soltos; aparecem dentro das páginas de carrossel, com créditos em `outputs/criativos/modelos/carrossel/fotos/CREDITOS.md`.
- Não existe regra sobre qual ocasião pede V2 ou V3. Ela disse apenas que são produções diferentes, então a escolha fica no início de cada produção.

## Pendente
- Jessica decide os itens em aberto, listados em `docs/design/caderno-de-marca/project/decisoes.md`: telas e tablets, pessoas, logo, tom de laranja, memes e marcas, textura, Hero com Modelo e endereço do site.
- Jessica revisa os textos de exemplo e avalia a foto `farmaceutico-conferindo.jpg`.
- Comercial confirma os itens do card da V1.

## Próxima sessão
Com as decisões, atualizar `decisoes.md`, `README.md` e `tokens.json` do caderno e republicar. Ao mudar uma regra, atualizar também a seção "Padrão vigente" do `design-system.md`. Depois, começar a pesquisa de pauta. Skill sugerida: `ad-creative`.
