# Postagens do Google: 3 por semana até 30/01/2027

## Pedido

"vamos preencher os buracos, os que voce ja fez ja estao programados, produza os demais e me de o guia para que eu possa programar, vamos colocar pelo menos 3 por semana, pesquise sobre SEO e aparecer em pesquisar nas IAS"

## Feito

- **`outputs/criativos/google-nov-jan/dados-novos.js`:** 28 postagens novas, de 06/11/2026 a 30/01/2027.
  - Com as 11 de `dados.js`, já programadas pela Jessica, cada semana de 02/11 a 31/01 tem 3 postagens.
  - O Natal e o Ano-Novo deixaram de ser pausa. Entraram 23/12 (suporte nas festas), 25/12 (Natal), 29/12, 31/12 (Feliz 2027) e 02/01.
  - São 11 de farmácia, 12 de padaria e 5 para os dois.
- **`gerar.js`:** passa a juntar as duas listas.
  - Sem argumento, gera só as imagens das novas. Com `todas`, gera todas.
  - O guia traz fichas só das novas. As antigas aparecem no calendário como "Já programada".
- **`guia-modelo.html`:** cabeçalho novo, seção "O que a pesquisa diz sobre aparecer no Google e nas IAs" e avisos atualizados.
- **Guia publicado no mesmo link,** versão 2: https://claude.ai/artifact/AEjYS7Nny9Ftfw5LbvEUev
- **Pesquisa:** `docs/contexto/pesquisas/2026-11-04-google-perfil-seo-ia.md`

## Verificado

- **`gerar.js`:** "sem problema" nas 39 postagens. A conferência cobre:
  - até 1.500 caracteres;
  - palavra-chave na primeira frase;
  - 2027 citado em todas;
  - nenhum telefone, e-mail ou rede social;
  - padaria sem falar de farmácia;
  - nenhuma foto repetida;
  - texto dentro do quadrado central da imagem.
- **Imagens:** vi as 28 em folha de contato.
  - Black Friday (27/11): o rótulo do frasco ficou legível, e a foto inteira foi desfocada.
  - Natal: a foto da árvore foi reposicionada.
- **Links dos botões:** todos estão no sitemap do site em 04/11/2026, incluindo /sistema-para-farmacia/ e /sistema-para-padaria/.
- **Ajuda oficial do Google sobre postagens,** relida em 04/11: em medicamentos, a postagem não pode ter conteúdo sobre os produtos.
- **Não verificado:**
  - os estudos de SEO e IA, que vieram de resumos de busca; a Search Engine Land bloqueou a leitura;
  - o guia publicado aberto no celular;
  - se cada função citada ainda tem a mesma tela, porque alguns artigos da base são de 2020.

## Decisões e porquês

- **Funções do sistema:** só as do `mapa-funcoes.csv`, com os cuidados indicados nele:
  - painel de indicadores: "versão Plus";
  - Prosystem Fiscal: depende de o contador ter FTP;
  - registro de ponto: sem promessa trabalhista.
- **Trechos tirados por falta de confirmação:** "vendas por período" e "sem digitar item por item".
- **Dados da empresa** (16 anos, mais de 600 clientes, 13 estados e suporte das 7h às 22h, inclusive sábado e domingo): vêm da página Sobre nós e das legendas aprovadas. Entram em algumas postagens para a IA saber quem é a ProSystem.
- **Postagem de 22/01:** pede avaliações, porque os estudos ligam as avaliações à recomendação das IAs. O botão vai para Sobre nós, porque não temos o link de avaliação.
- **Temas:** acompanham o feed do Instagram de cada semana (`nov-dez/legendas.md`).
- **Postagens não ligadas ao planejamento de 30/10:** as 12 postagens do Google do planejamento não foram relidas no Claude Docs.

## Pendente

- **Jessica:**
  - programar as 28 postagens no Perfil da Empresa; 06/11 e 07/11 são desta semana;
  - preencher o horário especial das festas no perfil;
  - pedir e responder avaliações.
- **Jessica:** confirmar se o painel de indicadores e a biometria estão disponíveis nos planos que ela vende.

## Próxima sessão

- **Mudar um texto:** altere `dados-novos.js`, rode `node outputs/criativos/google-nov-jan/gerar.js` e publique `guia.html` de novo no mesmo link, com as imagens alteradas em `files`.
- **Skill sugerida:** `relatorio-final`.
