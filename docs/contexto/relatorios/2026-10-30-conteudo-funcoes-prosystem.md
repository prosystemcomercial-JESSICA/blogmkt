# Conteúdo das funções do Prosystem com telas reais

## Pedido
A partir da base de conhecimento (universidade.prosystemnet.com/base-conhecimento), abordar as funções "de forma inteligente, com hooks, problemas e solu[ções]". A Jessica escolheu mapa de conteúdo, artigos do blog e posts/carrosséis; "funções vendáveis, farmácia e padarias, deixe de fora o material técnico"; e pediu: "quero usar os mockups das telas também do Prosystem".

## Feito
- `docs/conteudo-prosystem/`: mapa com 38 funções (`mapa_funcoes.py`, `mapa_modelo.html`, `mapa-funcoes.csv`, `mapa-funcoes.html`). Página privada: https://claude.ai/artifact/VHzmQkwvTfsn4jscdMNKn6
- `banco imagens/telas-prosystem/`: 13 telas recortadas e `LEIA-ME.md` com as regras. Originais em `_originais/`, fora do git.
- `outputs/criativos/funcoes-prosystem/`: `preparar_telas.py`, `gerar.js`, `legendas.md` e 4 carrosséis de 6 páginas no modelo V2 (`carrossel-farmacia-uso-continuo-v1`, `carrossel-farmacia-perda-de-vendas-v1`, `carrossel-padaria-sangria-v1`, `carrossel-padaria-whatsapp-v1`).
- `banco imagens/mockups-prosystem/`: 60 mockups em notebook e desktop, nos cenários farmácia, padaria e escritório, depois da regra "proibido celular, faça apenas em notebook e desktop em balcão etc".
- Caderno de marca (`README.md`, `decisoes.md`, `producao.md`, republicado), `design-system.md` da squad e guia de estilos: nova regra de mockups; o item em aberto "Telas e tablets" foi fechado.
- `blog/_gerador/artigos/a12` a `a15`: 4 artigos gerados em `blog/*.html`, com capas e mockups em `blog/assets/images/telas/`. Não publicados.
- `blog/_gerador/base.py`: data por artigo (opcional) e função `tela()`. `blog/assets/css/artigo.css`: estilo `.tela`.
- `squads/blog-escritor-seo/_memory/memories.md`: temas novos na lista de cobertos.

## Verificado
- Base lida: 91 artigos das categorias vendáveis, 386 telas baixadas. 228 telas das funções do mapa revisadas em folhas de contato, em miniatura; só as 13 usadas foram conferidas em tamanho real. O restante não foi revisado.
- Gerador rodado: os HTML antigos não mudaram (`git diff` vazio em `blog/*.html`).
- Links internos existem; imagens dos 4 artigos carregam (rolagem via Puppeteer); calculadoras conferidas: 10 clientes e R$ 3.650; R$ 5.200 e R$ 62.400.
- Fontes conferidas nas páginas: Abrappe via Central do Varejo, Banco Central via Tecnoblog, Sebrae e LGPD.
- Não verificado: se as telas e regras dos artigos antigos da base continuam atuais; os artigos no WordPress; a aparência dos carrosséis no Instagram.

## Decisões e porquês
- **Dados das telas:** a Jessica confirmou em 30/10/2026 que são fictícios. A primeira versão os tratou como reais por engano, e as telas marcadas como proibidas foram liberadas. Segue a recomendação de ocultar CPF visível nas artes, para a peça não parecer vazamento.
- **Exceção à regra "sem telas":** vale só para mockups de telas reais; fotos e imagens geradas seguem sem tela. Registrada na memória.
- **Marca de medicamento oculta:** nomes comerciais cobertos ou trocados pelo princípio ativo, para não promover remédio em peça de marketing. A fatia amarela do gráfico foi recolorida.
- **Carrosséis refeitos:** a primeira versão tinha moldura de celular e não seguia o caderno (degradê antigo, logo, contador e nome de arquivo). A nova usa o V2, com o mockup no lugar da foto.
- **Azul em peça de padaria:** a tela real do sistema tem azul. O caderno passou a dizer que a cor da própria tela não conta; a moldura e o cenário não levam azul. A Jessica pode revisar.
- **Lupa nos carrosséis:** o texto das telas fica pequeno no celular; a mensagem real é repetida em tamanho legível.
- **Padaria usa só funções gerais:** a base quase não fala de padaria; a página de Padarias do site confirma dashboards, avisos, curva ABC e estoque. "Encomenda" na base é produto em falta, não bolo; não vender assim sem confirmar.
- **Dados descartados:** OMS (50% de adesão) não pôde ser conferido; "4% de vendas perdidas" não tem fonte identificada.
- **Lote de 4 temas:** uso contínuo, perda de vendas, sangria e WhatsApp, por ter telas prontas para uso e não repetir o blog. O resto fica priorizado no mapa.

## Pendente
- Jessica: aprovar os 4 artigos e os 4 carrosséis antes de publicar.
- Jessica/produto: enviar telas ou material de ficha técnica e produção para padaria; confirmar telas atuais do PDV; confirmar se a função de sangria e a de perda de vendas valem sem ajuste na padaria.
- Técnico: para publicar no WordPress, incluir os 4 slugs em `ARTIGOS` (`wp_pacote.py`) e enviar `blog/assets/images/telas/`, porque o importador hoje só leva a capa.
- Site: a página /padaria/ tem o título "Por que escolher a Prosystem para a sua drogaria?"; não foi alterado.

## Próxima sessão
Com o aceite da Jessica, publicar pelo fluxo de `blog/_gerador/wp_pacote.py` e produzir o próximo lote pela prioridade "Alta" do mapa, começando por Painel de indicadores. Skills: `blog-post`, `ai-seo`, `relatorio-final`.
