# 04/11/2026: ferramentas que ainda não tinham aparecido no conteúdo

## Pedido
A Jessica mandou 12 stories antigos da ProSystem e perguntou quais ferramentas ainda não tinham aparecido no conteúdo. A resposta foi: recarga online e orçamento pelo WhatsApp, que não apareciam em nada, e o balanço com o celular, que só aparecia nos stories dos destaques. Depois ela pediu: "monte as pautas, os criativos e como vamos postá-los".

## Feito
Tudo está em `outputs/criativos/ferramentas-novas/`:
- **3 carrosséis de 6 slides** em `pecas/`, gerados por `gerar-carrosseis.js` com os estilos V2 e V3 copiados de `farmacia-supermercado/`:
  - recarga online em V3, azul;
  - orçamento pelo WhatsApp em V2, azul;
  - balanço com a padaria aberta em V2, laranja.
- **3 stories** de 1080×1920 em `stories/`, gerados por `gerar-stories.js`, com espaço para a figurinha de link "Fale com a ProSystem".
- **3 posts do Google** em `google/`, gerados por `gerar-google.js`, com os textos em `google/texto.md`. Datas: 18/11, 26/11 e 02/12, todas sem outra postagem.
- **Legendas, textos alternativos, plano de postagem e pendências** em `legendas.md`.

O plano de postagem é a "quarta da ferramenta": o carrossel sai como segundo post do dia, às 18h, nos dias 18/11, 25/11 e 02/12. O feed das 12h30 continua como está. O story sai às 19h e vai como manual, por causa da figurinha de link. Depois, cada story entra no destaque Ferramentas.

## Verificado
- Conferi as peças em miniatura e troquei quatro fotos:
  - capa do balanço, que estava desfocada;
  - slide 5 do balanço, que tinha etiqueta de preço legível;
  - fim do orçamento, que repetia as prateleiras;
  - post do Google da recarga, em que só aparecia o chão.
- A checagem do gerador do Google passou: palavra-chave na primeira frase, 2027, sem telefone nem rede social e sem foto já usada no Google.
- Os stories não estouram a zona segura.
- **Não verificado:** se as três funções continuam ativas no produto.
- Nada foi publicado, nem entrou em `instagram/agenda.json`.

## Decisões e porquês
- Não usei celular nem tela do sistema nas imagens, como manda o caderno de marca. Quando o texto fala do app de contagem, fala de "câmera do celular", sem mostrar o aparelho.
- O balanço ficou para a padaria, ligado ao inventário de fim de ano, porque a farmácia já tem muito conteúdo de estoque.
- As peças dizem "aplicativo de contagem", sem o nome ContEstoque, porque o mapa de funções pede para confirmar se o app segue disponível.
- Descartei uma foto do Wikimedia Commons de um leitor de código de barras: tinha marca, texto estrangeiro e um aparelho parecido com celular. Usei só fotos do banco do projeto.

## Pendente
- **Jessica:** aprovar as peças e o plano. Ajuste vira `-v2`.
- **Comercial:** confirmar três pontos:
  - se a recarga segue ativa e quais serviços tem;
  - se o texto do botão de orçamento ainda traz o preço de e por e o vendedor;
  - se o app de contagem continua disponível.
- **Opcional:** mockups em notebook feitos pela Jessica. A foto do post do Google do orçamento é a mais fraca do conjunto.

## Próxima sessão
1. Com a aprovação, incluir os 3 carrosséis (18h) e os 3 stories (19h, `status: manual`) em `instagram/agenda.json`, no formato das entradas que já existem. As imagens vão para `instagram/midia/`.
2. Avisar a Jessica para programar os 3 posts do Google.
3. Atualizar a memória `project_ferramentas_novas`.
