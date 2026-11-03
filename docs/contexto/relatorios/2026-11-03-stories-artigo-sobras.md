# Stories do artigo de sobras (padaria)

## Pedido
Depois de a frase de 11/01 ganhar o "Novo artigo no ar!", a Jessica pediu: "crie stories para que eu possa colocar o link la tambem".

## Feito
- Novo gerador: `outputs/criativos/nov-dez/stories/gerar-stories.js`. Faz peças de 1080×1920 com o CSS do feed simulado e o tema laranja da padaria.
- Três stories em `outputs/criativos/nov-dez/stories/`:
  - `story-padaria-sobras-v1-1.png`: fundo branco com losangos, selo "Novo artigo no blog" e o título "Pão que sobra também é prejuízo.", o mesmo da frase de 11/01.
  - `story-padaria-sobras-v1-2.png`: degradê laranja com a foto `paezinhos-cesta` em cartão e o título "Quanto pão sobrou ontem na sua padaria?".
  - `story-padaria-sobras-v1-3.png`: foto `paes-prateleira-sem-etiqueta` em tom laranja e o título "Sobra à noite e falta de manhã.".
- Os três terminam na pílula "Toque no link e leia ↓". A faixa de 1300 a 1580px fica vazia para a figurinha de link: https://prosystemnet.com/blog/controle-de-sobras-padaria-ajustar-producao/
- Caderno de marca: "Story de artigo" entrou em `tipos-de-posts.md` como exemplo, e o local do gerador entrou em `producao.md`.

## Verificado
- O gerador confere estouro e zona segura (nada acima de 250px nem abaixo de 1580px) e não encontrou problema.
- Conferi as três imagens no tamanho real. Na primeira versão, a peça 2 tinha estouro de texto e a pílula ficava baixa demais; as duas coisas foram corrigidas.
- As fotos já tinham crédito: `nov-dez/fotos/CREDITOS.md` e `modelos/carrossel/fotos/CREDITOS.md`, ambas em domínio público ou CC0.

## Decisões e porquês
- O link não vai impresso na arte, porque no story ele entra pela figurinha. A arte só aponta para baixo, onde a figurinha fica.
- Sem azul, por ser peça de padaria. O único azul é o do `logo-dark.png` sobre branco, o mesmo da frase do feed.
- Cada story tem no máximo 3 blocos de texto, mais o selo.

## Pendente
- Jessica: aprovar os stories. "Story de artigo" fica como exemplo no caderno até a aprovação.

## Próxima sessão
Para outro artigo, copie um item de `STORIES` em `gerar-stories.js`, troque o título, o apoio e a foto, e rode `node outputs/criativos/nov-dez/stories/gerar-stories.js`.
