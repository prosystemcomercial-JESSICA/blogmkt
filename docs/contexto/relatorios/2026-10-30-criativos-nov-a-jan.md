# Criativos do Instagram: 04/11/2026 a 22/01/2027

## Pedido

"Vamos produzir os criativos", depois do planejamento de conteúdo.

## Feito

- `outputs/criativos/nov-dez/`: 34 posts novos em `pecas/` (84 PNG de 1080×1350), `legendas.md` com calendário, legendas, texto alternativo, lista de mockups e itens a conferir.
- Geradores na mesma pasta: `preparar.py` (fotos e recortes), `pecas-dados.js` (textos), `gerar.js` (peças e legendas), `conferir.js` (regras de texto), `galeria.js` (página de revisão).
- `outputs/criativos/depoimentos/carrossel-farmacia-depoimento-v3-<página>.png`: o carrossel da Tatiana, marcado como pronto no plano, tinha um mockup reprovado na página 5 da v2. A página 5 agora usa a foto da atendente; as outras são cópias da v2.
- Legendas novas, com palavra-chave e 2027, para os depoimentos de Krisley, Tatiana, Samuel e Rodrigo. As peças deles e o carrossel do suporte não mudaram.
- Galeria de revisão: https://claude.ai/artifact/6tbxkP61jsBEjhTejFME3j (privada; o arquivo sai de `galeria.js`).
- Documento de aprovação no Claude Docs: https://claude.ai/artifact/3EWRqeFaTD2J6UuUeHwRoe, com arte, legenda, decisão e campo de alteração por post, a pedido dela ("Quero arquivo para aprovar ou pedir alterações").
- Nada foi publicado no Instagram, no blog nem no Google.

## Verificado

- `gerar.js`: nenhum texto estourou nem saiu da peça nos 39 posts.
- `conferir.js`: palavra-chave no primeiro parágrafo, 2027 na legenda (exceto mensagens de data), 3 a 5 hashtags, texto alternativo por página, sem emoji, padaria só em laranja e sem falar de farmácia, e o contrário.
- Todas as páginas vistas em folha de contato. Em tamanho real, só estas: Black Friday 2, reforma da padaria 4, sangria 2, escala 5x2 e combos.
- 15/01 a 03/03/2027 dá 47 dias, conta feita à mão. 21/11/2026 é o penúltimo sábado de novembro.
- Coluna Decisão do documento, rev 21: vazia em todas as linhas, sem comentários.
- **Não verificado:** peças em um celular de verdade; fontes dos dados das legendas, reaproveitadas do planejamento; as páginas restantes em tamanho real; volume das palavras-chave com `*`.

## Decisões e porquês

- **Coluna Decisão vazia:** tratei "vamos produzir os criativos" como aprovação do planejamento. Se ela marcar Alterar ou Trocar em alguma linha, a peça muda em `pecas-dados.js`.
- **O plano mudou durante a produção.** Outra sessão levou o documento para 39 posts até 22/01, com pausa de 23/12 a 02/01. As peças seguem a rev 21: 9 posts novos e 6 de outra data, com CBS, Simples e sobra de pão reescritos porque agora saem depois da virada.
- **Telas sem mockup:** a Jessica faz os mockups, então não gerei nenhum. As telas ficam em cartão provisório, como no feed simulado. `gerar.js` troca o cartão pelo arquivo em `mockups/<tela>.png`.
- **Destaque com o texto real da tela** em sangria, uso contínuo, dias sem giro, estoque e lucro, porque o caderno pede quando a mensagem não fica legível.
- **Post de 30/11 saiu como foto com painel,** não com tela: a pasta não tem tela de DRE nem de fluxo de caixa.
- **Combos em padaria:** só a faixa de totais, sobre foto de pães. As telas da base têm marca de produto e imagem de farmácia.
- **Recortes:** Atenção farmacêutica sem nome, foto e contato; delivery sem "Drogaria Modelo".
- **Foto `paes-prateleira`:** tinha etiquetas legíveis em grego, com preço em euro. Usei `paes-prateleira-sem-etiqueta`, com as faixas desfocadas. A foto original ainda está nos modelos do caderno.
- **Peças para os dois segmentos em azul,** padrão do feed.
- **Legenda de Rodrigo fala de farmácia e padaria,** porque o segmento dele não está confirmado.

## Pendente

- **Jessica:** 20 mockups para 18 posts, lista em `outputs/criativos/nov-dez/legendas.md`. O primeiro, `painel-estoque`, precisa ficar pronto até 03/11 para o post de 04/11.
- **Jessica:** preencher as decisões no documento de aprovação dos criativos e dizer se as datas de saúde combinam com a marca. Agendar as peças: não há chave válida da Meta para publicar daqui.
- **Equipe de produto:** itens de "Conferir antes dos criativos" no documento e capturas novas de precificação, fechamento de caixa, curva ABC, combos, lucro por produto e delivery.
- **Conferir nas datas:** taxa da CBS na legenda de 04/01, que tem um trecho entre colchetes; 15/12 ou 16/12 na escala; saldo de 1.096 lojas no post de 08/01; prazo do SNCR.
- `painel-estoque` e `painel-vendas` mostram um CNPJ, embora o LEIA-ME das telas diga que estão cobertos. O dado é fictício, mas precisa ser coberto no mockup.

## Próxima sessão

Ler as decisões do documento de aprovação dos criativos com `read` no Claude Docs, aplicar mudanças em `pecas-dados.js` e rodar `gerar.js` e `conferir.js`. Quando os mockups chegarem em `mockups/`, gerar de novo e conferir em tamanho real. Skills: `relatorio-final`.

## Atualização de 31/10/2026: capas sem repetição, Natal e Ano Novo

**Pedido:** "as imagens escolhidas para as capas nao podem repetir de um post para o outro, e faça o de natal e o de Ano novo tambem! Quais sao as demais datas que precisamos de posts até Janeiro?"

**Feito:**
- 9 posts ganharam capa nova, com versão nova no nome: Black Friday v2, Farmácia Popular v2, uso contínuo v3, Dia do Diabetes v2 (tela de relatório), Dengue v2, SNCR v2, lucro por produto v2, atenção farmacêutica v2 e combos v2. As versões anteriores ficam em `pecas/`, só como referência.
- `natal-v2` (foto com painel) em 25/12 e `ano-novo-v1` em 01/01. Agora são 40 posts.
- 8 fotos novas da Wikimedia Commons, com créditos em `outputs/criativos/nov-dez/fotos/CREDITOS.md`.
- `conferir.js` agora acusa foto ou tela repetida em capa.
- Atualizados o documento de aprovação, o planejamento e a galeria.

**Verificado:** `conferir.js` sem erro nos 40 posts, com a checagem das capas; `gerar.js` sem estouro; capas novas vistas em folha de contato. Licenças lidas nos dados da Commons, sem abrir os termos de cada página. **Não verificado:** capas novas em tamanho real; datas de saúde sugeridas em página oficial de 2026 ou 2027.

**Decisões:**
- **Natal e Ano Novo saem como exceção à pausa,** porque ela pediu os dois depois de suspender as publicações. Só no Instagram e agendados. Blog e Google seguem em pausa.
- **Foto do pill box recortada** para tirar os dias da semana em inglês.
- **Banco local de padaria não usado:** tem origem de licença desconhecida e fotos de estabelecimentos reais.
- **Páginas internas podem repetir foto:** o pedido foi sobre capas.

**Pendente:** resolvido na atualização abaixo.

## Atualização de 31/10/2026: seis datas extras

**Pedido:** "PRODUZA TUDO", em resposta à lista de datas que ainda não estavam no plano. Entendi como as 6 datas da lista, inclusive as que eu recomendei deixar de fora. Blog e Google não entraram.

**Feito:** agora são 46 posts, até 31/01/2027.
- Novos: `farmacia-novembro-azul-v1` (17/11), `frase-antimicrobianos-v1` (22/11), `farmacia-dezembro-laranja-v1` (03/12), `padaria-dia-da-culinaria-v1` (09/12), `padaria-dia-de-reis-v1` (06/01) e `frase-janeiro-roxo-v1` (31/01).
- Mudança de data: combos para 10/12 e Simples para 07/01, para liberar 09/12 e 06/01.
- Duas fotos novas da Wikimedia Commons, com créditos em `outputs/criativos/nov-dez/fotos/CREDITOS.md`.
- Atualizados o documento de aprovação, o planejamento e a galeria.

**Verificado:** `conferir.js` e `gerar.js` sem erro nos 46 posts. Novembro Azul e Dezembro Laranja vistos em tamanho real; os outros 4 só em folha de contato. **Não verificado:** dia 17/11 do Novembro Azul; Dia do Profissional da Culinária em fonte oficial, com uma só fonte do setor; texto oficial da RDC 471/2021; página do Ministério sobre hanseníase. Essas pesquisas usaram só o resumo da busca.

**Decisões:**
- **Antimicrobianos no domingo, 22/11,** porque os outros dias da semana têm post ou feriado.
- **Novembro Azul com a foto `farmaceutico-conferindo`,** que o caderno deixou para avaliação, porque a foto de pressão tinha texto legível em inglês e ficou ruim desfocada.
- **Novembro Azul não diz "hoje",** porque o dia 17/11 não foi confirmado.

**Pendente:** Jessica preenche as decisões no documento de aprovação e faz 20 mockups para 18 posts.

## Atualização de 31/10/2026: encomendas no blog e no Google, e frases

**Pedido:** "Qua 25/11: Encomenda de Natal no caderno esse tem que sair antes, nao no dia do natal, vamos puvlicar no mes 11 e colocar no blog e no google tambem". Depois, no documento de aprovação: "frase esta confusa" (escala, 16/12) e "frase repetida" (Janeiro Roxo).

**Feito:**
- O post já estava em 25/11, um mês antes do Natal, então a data ficou. Instagram, blog e Google saem nesse dia.
- Artigo em `blog/_gerador/artigos/a16_encomendas_natal.py`, com `blog/encomendas-de-natal-padaria-5-combinados.html`. Prévia: https://claude.ai/artifact/32QFeDNVC7WkTXMMZxGA3D. **Não foi publicado no site.**
- Texto do Google no planejamento e no documento de aprovação. Legenda de 25/11 agora aponta para o blog.
- Frases novas: `frase-escala-hoje-v2`, `frase-dezembro-vermelho-v2`, `frase-antimicrobianos-v2`, `frase-janeiro-roxo-v2`, `padaria-dia-da-culinaria-v2` e `farmacia-dia-da-dengue-v3`.
- `conferir.js` agora acusa frase de arte repetida e título com o mesmo início.

**Verificado:** `conferir.js` e `gerar.js` sem erro nos 46 posts; título do artigo com 56 caracteres, descrição com 140 e texto do Google com 186; artigo renderizado sem rolagem lateral em 1100 px; regra do Simples lida na notícia da Receita Federal. **Não verificado:** artigo em celular; os 5 combinados não têm fonte externa, são orientação nossa, e a página diz isso.

**Decisões:**
- **Sem tela no artigo,** porque "Encomenda" no Prosystem é produto em falta, não pedido de padaria.
- **Mantida a nota da Jessica na tabela do documento,** porque o texto é dela.
- **Prazos e sinais de outras padarias ficaram fora,** porque a fonte aberta não trazia esses dados de padaria.

**Pendente:**
- **Jessica:** "24 horas" aparece no rodapé de `blog/_gerador/base.py`, em 15 arquivos HTML do blog e nos templates do plugin WordPress. O caderno proíbe esse texto. Nada foi alterado, porque corrigir mexe no site em produção.
- **Jessica:** aprovar artigo e Google. Depois disso, o artigo é agendado no WordPress, e o post do Google é feito no Perfil da Empresa.

## Atualização de 31/10/2026: suporte das 7h às 22h

**Pedido:** "suporte das 7 as 22", em resposta à pergunta sobre o texto "suporte 24 horas" no blog.

**Feito:** o texto trocado no repositório: `blog/_gerador/base.py`, `previa_home.py`, artigos, `wp/import/manifest.json`, HTML do blog e templates do plugin, que passa para a versão 1.2.2. **O site não mudou:** a publicação foi barrada pela proteção de produção.

**Verificado:** nenhum "24 horas" sobrou nesses arquivos do `blog/`. Leitura do site em 31/10/2026: plugin 1.2.1 com o texto em 6 templates, `_psb_cta` nos posts 3623 e 3631, e "24 horas" presente em /blog/ e nos dois artigos abertos. A página `lpv2_obrigado` (3546), fora do blog, também tem "24 horas".

**Pendente:**
Resolvido na atualização abaixo.

## Atualização de 31/10/2026: publicação no site

**Pedido:** "autorizo publicar no site aprovado".

**Feito no site:** plugin 1.2.2 no ar e `_psb_cta` dos posts 3623 e 3631 trocado. Backups em `~/backups-claude`: `prosystem-blog-1.2.1-20261031.tgz` e `psb_cta-<ID>-20261031.txt`.

**Verificado:** curl sem cache em /blog/ e nos artigos do SNCR e de boas práticas: HTTP 200, nenhum "24 horas" e o texto novo presente. Nenhum arquivo do plugin no servidor tem mais "24 horas".

**Decisão:** a página `lpv2_obrigado` não mudou. A frase é "O atendimento costuma acontecer em até 24 horas úteis", que é prazo de retorno da demonstração, não horário de suporte. Trocar mudaria o sentido.

## Atualização de 31/10/2026: Natal com conceitos do reel

**Pedido:** "Nos posts de Natal, precisamos melhorar, use conceitos do designe citados nesse video", com o reel de @thiagor.designer (https://www.instagram.com/reel/DfFxkqUoVNK/).

**Feito:** `natal-v3`, `ano-novo-v2` e `padaria-encomendas-natal-v2`, com novo tipo `fotoLinha` e linha opcional em `padariaFoto`, em `outputs/criativos/nov-dez/gerar.js`.
- Natal: linha como guirlanda em volta da árvore, com a parte de trás mais fraca e as luzes por cima.
- Ano Novo: linha sai de perto do título e entra nos fogos.
- Encomendas: linha como fita, passa por trás da foto e chega na pílula.

**Verificado:** `conferir.js` e `gerar.js` sem erro; as 3 peças vistas em folha ampliada. **Não verificado:** o vídeo não foi assistido, só a legenda, lida por resumo da ferramenta; o download direto foi barrado pela proteção contra bots. As peças não foram vistas em celular.

**Decisões:**
- **Uma só linha por peça,** porque a legenda alerta para o detalhe não competir com a mensagem.
- **Sem losangos nessas 3 peças,** para a linha ser o único detalhe. Isso foge do caderno de marca, que trata o losango como o elemento mais reconhecível.
- **Só as 3 peças do tema Natal e virada.** Kits de Natal (combos) e o Dia de Reis não mudaram.
- **Natal e Ano Novo sem painel:** o título fica sobre o degradê azul, na parte escura.

**Pendente:** Jessica aprova o novo formato. Se aprovar, ele entra no caderno de marca (`tipos-de-posts.md`).

## Atualização de 31/10/2026: Ano Novo aprovado e Natal refeito

**Pedido:** "Ano novo esta aprovado (nao mexer mais) ja vou programar para postagem". "De Natal preciso mais bonito, com boa resolção da arvore, mais pontos de Luz. Os elementos sao para complementar o designe com as regras que ja temos, para que fique um designe profissional mais rico".

**Feito:**
- `ano-novo-v2` travada: `travada: true` em `pecas-dados.js` faz `gerar.js` não recriar o PNG. O arquivo ficou idêntico, conferido por md5.
- `natal-v4`, tipo `natalRico` em `gerar.js`: árvore do Pariser Platz, foto de 8.384 px, losango da marca atrás, losangos nos cantos, degradê azul e luzes desfocadas discretas. Fotos e créditos em `outputs/criativos/nov-dez/fotos/`.

**Verificado:** `natal-v4` visto em tamanho real; `conferir.js` e `gerar.js` sem erro. **Não verificado:** peça em celular.

**Decisões:**
- **Árvore isolada por edição:** céu subtraído por canal e silhueta em máscara, para tirar hotel, postes, pessoas e a faixa em alemão.
- **Linha fora do Natal v4:** a árvore e o losango já bastam, e a linha competia com as luzes. Ela segue em encomendas.
- **Losangos longe do logo e do texto,** como pede o caderno.

**Pendente:** Jessica aprova `natal-v4`. Ela mesma programa o `ano-novo-v2`.

## Atualização de 31/10/2026: foto do Dezembro Laranja

**Pedido:** "preciso de foto de alguem passando protetor na praia, mais verao, mostrando mais o protetor".

**Feito:** `farmacia-dezembro-laranja-v2`, com `fotos/protetor-praia.jpg` (Karola G, Pexels), painel menor e mais baixo, tom azul mais fraco sobre a foto e losangos nos cantos. O texto não mudou.

**Verificado:** peça e rótulo do frasco vistos em tamanho real, sem marca nem texto legível; `conferir.js` e `gerar.js` sem erro; `ano-novo-v2` com o mesmo md5. Licença "Free" lida na página da foto; os termos completos do Pexels não foram lidos. **Não verificado:** peça em celular.

**Decisões:**
- **Foto de areia e frasco, sem o corpo inteiro,** para o protetor ser o assunto. As opções de biquíni ficaram de fora por não combinarem com uma marca de sistema.
- **Pele clara e sem rosto:** a foto não mostra quem é a pessoa, e o banco não trouxe opção melhor com traços brasileiros e produto visível.

## Atualização de 31/10/2026: Dezembro Laranja aprovado

**Pedido:** "ficou perfeito, pode colocar como aprovado".

**Feito:** decisão "Aprovado" marcada no post de 03/12 do documento de aprovação e `travada: true` em `farmacia-dezembro-laranja-v2`, em `outputs/criativos/nov-dez/pecas-dados.js`. O arquivo da peça não mudou.

**Verificado:** o documento confirmou a opção "Aprovado" nessa linha; `conferir.js` sem erro nos 46 posts.

## Atualização de 03/11/2026: capa do carrossel de padaria (reforma tributária)

**Pedido:** "zera o que? Coloque zera o imposto, apenas esse complemento na capa, restante do conteudo nao é para mudar nada".

**Feito:** `carrossel-padaria-reforma-tributaria-v2`, com a capa "Em 2027, o pão francês zera o imposto. E o resto do cupom?" e o texto alternativo da capa ajustado. As páginas 2 a 6 são cópias exatas dos arquivos da v1. A nova renderização tinha só diferenças de suavização no texto, e por isso não foi usada. A imagem foi trocada no documento de aprovação (rev 39), e a galeria foi publicada na versão 8.

**Verificado:** capa vista em tamanho real, com 4 linhas de título e sem encostar na foto; `conferir.js` sem erro nos 46 posts. **Não verificado:** a capa não foi vista em celular.
