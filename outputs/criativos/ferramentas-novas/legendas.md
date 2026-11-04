# Ferramentas que ainda não tinham aparecido no conteúdo: peças de 04/11/2026

Pauta tirada dos stories antigos da ProSystem: recarga online, orçamento pelo WhatsApp e balanço com a loja aberta. Antes desta produção, recarga e orçamento não apareciam em nenhum conteúdo. O balanço só aparecia nos stories dos destaques e numa frase de padaria em 27/01, que não cita o app. Tudo aguarda a aprovação da Jessica.

## Como vamos postar: a "quarta da ferramenta"

O feed já tem um post por dia, às 12h30, até 31/01. Por isso, cada carrossel entra como **segundo post do dia, às 18h**, sem tirar nenhum post aprovado. O story sai no mesmo dia, às 19h, e o post do Google entra num dia sem postagem.

| Ferramenta | Carrossel no feed | Story | Google | Público |
|---|---|---|---|---|
| Recarga online | Qua 18/11, 18h | Qua 18/11, 19h | Qua 18/11, 9h | Farmácia e padaria (azul) |
| Orçamento pelo WhatsApp | Qua 25/11, 18h | Qua 25/11, 19h | Qui 26/11, 9h | Farmácia (azul) |
| Balanço com a loja aberta | Qua 02/12, 18h | Qua 02/12, 19h | Qua 02/12, 9h | Padaria (laranja), perto do inventário de fim de ano |

- **Feed e stories:** depois da aprovação, entram em `instagram/agenda.json` e a API publica sozinha. O story leva a figurinha de link "Fale com a ProSystem" (como nos stories antigos), e a API não coloca figurinha. Então os 3 stories ficam como `status: manual`, e a Jessica posta pelo app no horário.
- **Destaques:** depois de postados, os 3 stories vão para o destaque **Ferramentas**, com "Destacar".
- **Google:** a Jessica programa no Perfil da Empresa, como as outras 39 postagens. Texto e botão estão em `google/texto.md`.
- **Ordem:** cada ferramenta tem a sua semana, para o assunto não competir com outro. A recarga sai primeiro, porque é a mais simples de explicar.

Para gerar de novo, a partir da raiz do projeto: `node outputs/criativos/ferramentas-novas/gerar-carrosseis.js`, `gerar-stories.js` e `gerar-google.js`.

---

## 1. Recarga online (carrossel V3, impacto, azul)

Arquivos: `pecas/carrossel-recarga-online-v1-1.png` a `-6.png`

**Legenda**

Recarga de celular no caixa é um jeito simples de trazer mais gente para dentro da loja. Quem entra para recarregar passa pelo balcão e, muitas vezes, leva mais alguma coisa.

No Prosystem, a recarga online fica no próprio caixa:
1. Fica a um atalho de distância, na mesma tela da venda.
2. Serve para recarga de celular e outros serviços.
3. O cliente resolve tudo na sua loja, sem ir a outro lugar.

Na farmácia ou na padaria, é mais um motivo de visita em 2027.

Quer ativar a recarga no seu caixa? Fale com um especialista da ProSystem. Link na bio.

#recargadecelular #recargaonline #sistemaparafarmácia #sistemaparapadaria #frentedecaixa #varejo #gestão #2027

**Texto alternativo**
1. Carrinho de compras com produtos desfocados e o título "Quem entra para recarregar sai com mais uma compra".
2. Farmacêutico no computador do caixa e o texto "Recarga no mesmo caixa da venda".
3. Cesta de pãezinhos dentro de um losango e o texto "Cliente na loja é chance de venda".
4. Corredor de farmácia e o texto "Mais um motivo para escolher a sua loja".
5. Padeiros com bandejas de pão e o título "Recarga online dentro do Prosystem".
6. Pergunta "Sua loja já faz recarga?", com +600 clientes, +16 anos de experiência e o site prosystemnet.com.br.

---

## 2. Orçamento pelo WhatsApp (carrossel V2, foto em destaque, azul)

Arquivos: `pecas/carrossel-orcamento-whatsapp-v1-1.png` a `-6.png`

**Legenda**

Orçamento pelo WhatsApp não precisa ser digitado item por item. Quem pede preço pela mensagem está comparando, e quem responde primeiro sai na frente.

No caixa do Prosystem:
1. Monte a venda como sempre, com produtos, quantidades e descontos.
2. Clique no botão de copiar orçamento.
3. Cole no WhatsApp: o texto já vem com os itens, o preço de e por, o total e o nome do vendedor.

Resposta rápida, sem erro de digitação e com um orçamento organizado. É assim que a farmácia vende mais pelo WhatsApp em 2027.

Fale com um especialista da ProSystem. Link na bio.

#orçamentopelowhatsapp #whatsappbusiness #sistemaparafarmácia #farmácia #drogaria #vendaspelowhatsapp #gestãodefarmácia #2027

**Texto alternativo**
1. Farmacêutica atendendo no balcão e o título "Orçamento pelo WhatsApp em segundos".
2. Mãos digitando num teclado e o texto "Monte a venda no caixa, como sempre".
3. Calculadora e caneta sobre papéis e o texto "Um clique copia o orçamento".
4. Mãos digitando e o texto "Cole no WhatsApp e envie".
5. Prateleiras de farmácia desfocadas e o título "Quem pede preço está comparando".
6. Farmacêutica sorrindo junto à prateleira e a pergunta "Sua farmácia responde orçamento em quanto tempo?", com +600 clientes e +16 anos de experiência.

---

## 3. Balanço com a loja aberta (carrossel V2, foto em destaque, laranja)

Arquivos: `pecas/carrossel-padaria-balanco-loja-aberta-v1-1.png` a `-6.png`

**Legenda**

Balanço de estoque na padaria não precisa fechar a loja. O fim do ano é a hora de contar o que tem de verdade, antes de fazer as compras de 2027.

Com o Prosystem:
1. A contagem é feita prateleira por prateleira, com a loja aberta.
2. O aplicativo de contagem lê o código pela câmera do celular, sem comprar coletor de dados.
3. O resultado volta ao sistema e atualiza o estoque.

Comece pelos insumos que mais pesam no custo: farinha, gordura, embalagem e bebidas de revenda.

Quer fazer o balanço sem parar a padaria? Fale com um especialista da ProSystem. Link na bio.

#balançodeestoque #inventário #padaria #gestãodepadaria #sistemaparapadaria #estoque #panificação #2027

**Texto alternativo**
1. Pães em prateleira de padaria e o título "Balanço de fim de ano sem fechar a padaria".
2. Farinha de trigo sobre a mesa e o texto "Conte com a loja aberta".
3. Pão em embalagem de papel e o texto "Sem comprar coletor de dados".
4. Pães rústicos na grade e o texto "O resultado volta ao sistema".
5. Massa de pão na esteira e o título "Estoque certo, compra certa em 2027".
6. Padeiro tirando pão do forno e a pergunta "Seu balanço ainda fecha a padaria?", com +600 clientes e +16 anos de experiência.

---

## Stories (1080×1920)

A figurinha de link "Fale com a ProSystem" vai na faixa livre abaixo da pílula (de 1300 a 1580 px), apontando para https://prosystemnet.com/contato/.

1. `stories/story-recarga-online-v1.png`, fundo branco: "Recarga online no seu caixa." Texto alternativo: anúncio da recarga online no caixa do Prosystem, com o convite para falar com a ProSystem.
2. `stories/story-orcamento-whatsapp-v1.png`, azul, com mãos digitando: "Orçamento pelo WhatsApp em um clique." Texto alternativo: mãos digitando e o passo a passo para mandar orçamento pelo WhatsApp a partir do caixa.
3. `stories/story-padaria-balanco-loja-aberta-v1.png`, laranja, com foto de pães: "Balanço com a padaria aberta." Texto alternativo: pães na assadeira e o convite para contar o estoque sem coletor e sem parar o caixa.

---

## Para conferir antes de publicar

- **Comercial, recarga:** a tabela oficial de planos de 2025 traz "Recarga - Alt+F1" em todos os planos, menos o MEI. As peças falam em "um atalho", sem a tecla, e em "outros serviços", como o story antigo. Confirmar quais serviços entram e se a recarga segue ativa.
- **Comercial, orçamento:** o botão "Copy Orçamento" vem do story antigo. Confirmar se o texto copiado ainda traz o preço de e por e o nome do vendedor.
- **Comercial, balanço:** o mapa de funções pede para conferir se o app ContEstoque segue disponível (o artigo da base é de 2022). As peças dizem "aplicativo de contagem", sem o nome. Se o app tiver saído, o carrossel e o post do Google precisam mudar.
- **Telas:** nenhuma peça tem tela do sistema nem celular, como manda o caderno. Se quiser, a Jessica pode pôr um mockup em notebook: a tela do botão de orçamento no slide 3 do orçamento e a tela de importação da contagem (`banco imagens/telas-para-mockup/10-contagem-e-balanco`) no slide 4 do balanço.
- **Foto do Google, orçamento:** o corredor desfocado é a foto mais fraca do conjunto. Restam poucas fotos que ainda não foram usadas no Google; trocar por outra, se houver.
- **Fotos:** todas vêm do banco do projeto, com créditos nas pastas de origem. Nenhuma foto nova.
