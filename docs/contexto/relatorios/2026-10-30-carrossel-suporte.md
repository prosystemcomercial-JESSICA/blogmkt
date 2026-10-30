# Carrossel: como chamar o suporte

## Pedido
A Jessica enviou um post do Instagram: "Copiar esse post mas no nosso designe, quero o mesmo assunto apenas". O post é de um concorrente e ensina a acionar o suporte dele por um canal próprio.

Antes disso ela pediu: "Depois preciso de posts para o google, junto como o editorial do mes do blog". Esse pedido **não foi feito** (veja Pendente).

## Feito
- `outputs/criativos/suporte/`: `gerar.js`, `pecas.html`, `legendas.md` e 6 páginas `carrossel-farmacia-suporte-v1-<página>.png`, no modelo V2.
- `outputs/criativos/suporte/fotos/`: 4 fotos e `CREDITOS.md`.

## Verificado
- Base de conhecimento, artigo do acesso remoto (atualizado em 18/05/2023): o cliente abre o programa e informa ao técnico o número de "Este Dispositivo". Esse artigo é a fonte da página 4.
- Horário do suporte: vem de `docs/design/caderno-de-marca/project/decisoes.md`.
- Gerador sem estouro de texto. Folha de contato revisada.
- Páginas 1, 2, 5 e 6 vistas em tamanho real. Na 2 apareceram marcas de medicamento nas caixas, e a foto foi recortada e desfocada.
- Não verificado: páginas 3 e 4 em tamanho real (vistas só na folha de contato); aparência em um celular de verdade; se o artigo de 2023 ainda vale; licença das fotos novas, lida só nos dados da Wikimedia Commons.

## Decisões e porquês
- **Só o assunto foi aproveitado.** Texto, layout e fotos são nossos. Nem o nome nem a peça do concorrente aparecem no material.
- **Fora "24 horas" e "em menos de 1 minuto".** O suporte vai das 7h às 22h, e não há dado para prometer tempo.
- **Sem canal de suporte na peça.** O site só mostra o WhatsApp (27) 99752-1370, que a memória do projeto registra como comercial. Não confirmei um canal de suporte, por isso os passos dizem o que informar, e não por onde chamar.
- **Passos 1 e 2 são orientação geral nossa,** não vêm da base de conhecimento.
- **Fotos de teclado da Wikimedia Commons (CC0).** O banco não tinha foto de computador ou atendimento, e o Unsplash recusou o acesso automatizado.
- **Sem mockup.** `legendas.md` de `funcoes-prosystem` registra que os mockups gerados por código foram reprovados.

## Atualização do mesmo dia (versão v2)
A Jessica respondeu: "O primeiro passo é entrar em contato atraves do whatsapp só faltou isso, no de informar o problema, audio, escrito ou print da tela".
- Peças `carrossel-farmacia-suporte-v2-<página>.png`, com os passos 1 e 2 reescritos. A v1 fica como referência e não deve ser usada.
- Legenda atualizada e decisão registrada em `docs/design/caderno-de-marca/project/decisoes.md`.
- Verificado: gerador sem estouro; páginas 2, 3 e 4 da v2 vistas em tamanho real. As teclas das fotos têm letras e rótulos pequenos de teclado americano, sem marca visível.
- O número de WhatsApp não aparece na peça, porque o único registrado no projeto é o comercial.
- Isso substitui as decisões "Sem canal de suporte na peça" e "Passos 1 e 2 são orientação geral nossa": o canal e as formas de contato agora vêm da Jessica. "Diga de qual loja" segue como orientação nossa.

## Atualização do mesmo dia (versão v3)
A Jessica pediu: "No 5 coloque alguem de suporte, com fone e sorrindo atendendo cliente remoto Traças brasileiros".
- Peças `carrossel-farmacia-suporte-v3-<página>.png`. Só a foto da página 5 mudou. A v1 e a v2 ficam como referência e não devem ser usadas.
- Foto: `fotos/atendente-suporte.jpg`, de banco de imagens (Pexels, Yan Krukau), recortada para tirar um celular que estava sobre a mesa. Não é da equipe da ProSystem.
- Verificado: página 5 vista em tamanho real, sem celular nem texto legível na foto; gerador sem estouro. Autor e licença "Free" lidos na página da foto; os termos completos da licença do Pexels não foram lidos.

## Pendente
- Carrossel fechado na v3. A Jessica decidiu que o número de WhatsApp não entra: "nao precisa, a ultima alteração e a foto mesmo". Falta só a publicação no Instagram.
- Jessica: a pasta `banco imagens/mockups-prosystem/` aparece apagada no `git status`, fora desta tarefa, e não entrou neste commit. `outputs/criativos/depoimentos/gerar.js` e os carrosséis de funções usam esses arquivos, então regenerar essas peças pode quebrar.
- **Editorial de novembro e posts do Google: não feitos.** Só foi lida a pesquisa `docs/contexto/pesquisas/2026-10-30-temas-farmacia-padaria.md`.

## Próxima sessão
Montar o editorial de novembro de 2026 e os posts do Perfil da Empresa no Google a partir da pesquisa.

- Reconferir as fontes dos dados citados: a leitura de Senado, Fenacon, CFF e Agência Brasil falhou nesta sessão por limite de uso.
- Conferir a regra de postagens na ajuda do Google (support.google.com/business/answer/7213077), que também não abriu. Guias de terceiros citam 1.500 caracteres e imagem 4:3 de 1200×900, sem confirmação oficial.
- Corrigir o artigo do SNCR no site, com autorização da Jessica, antes de divulgá-lo.
- Skills: `blog-post`, `ai-seo`, `relatorio-final`.
