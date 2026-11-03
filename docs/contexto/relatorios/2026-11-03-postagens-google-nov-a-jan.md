# Postagens do Google: 05/11/2026 a 20/01/2027

## Pedido

"Crie posts para o Google, com imagens, e textos e me de o guia completo para que eu possa programar todos eles, quero ate o dia 20/01/2026". Hoje é 03/11/2026, então entendi como **20/01/2027**.

## Feito

- `outputs/criativos/google-nov-jan/`:
  - `dados.js`: 11 postagens com data, texto, botão, link, palavra-chave e foto.
  - `gerar.js`: gera as imagens em `imagens/` (1200 × 900, JPG), confere os textos e monta `GUIA.md` e `guia.html`.
  - `guia-modelo.html`: modelo da página do guia.
- Guia publicado (privado): https://claude.ai/artifact/AEjYS7Nny9Ftfw5LbvEUev. Tem o passo a passo para programar, as regras, o calendário e uma ficha por post, com botões para copiar o texto e o link.
- Calendário: quintas às 9h, com pausa de 23/12 a 02/01. As exceções são 25/11 (encomendas, mesmo dia do Instagram e do blog), 12/01 (sobras) e 20/01 (Dia do Farmacêutico). São 4 posts de farmácia, 4 de padaria e 3 para os dois.
- Nada foi publicado nem programado no Google.

## Verificado

- Ajuda oficial do Google (support.google.com/business/answer/7342169), lida em 03/11/2026: há três tipos de postagem e dá para programar com "Programar esta postagem". Postagem com telefone pode ser recusada. Postagens com mais de 6 meses são arquivadas. Produtos farmacêuticos estão entre os setores com conteúdo limitado.
- Política de conteúdo (support.google.com/contributionpolicy/answer/7400114): a postagem não pode ter e-mail, telefone nem link de rede social.
- `gerar.js` sem problema nas 11: no máximo 1.500 caracteres, palavra-chave na primeira frase, 2027 em todos, sem telefone, e-mail ou "24 horas", padaria sem falar de farmácia, nenhuma foto repetida e texto dentro do quadrado central da imagem, longe do logo.
- Sitemaps públicos do site: todos os links dos botões estavam no ar em 03/11/2026. Li os pontos principais dos artigos do SNCR, do Simples 2027, das sobras e da margem, e os textos seguem esses artigos.
- Vi as 11 imagens em folha de contato. Em tamanho real, vi só Black Friday, SNCR e Dia do Farmacêutico.
- **Não verificado:**
  - o tamanho 1200 × 900, que vem de guias de terceiros, porque a página oficial não informa;
  - os nomes dos botões na tela do Google, que podem mudar;
  - a página do guia em celular;
  - o dado da Conab (26% menos trigo), reaproveitado do post de 11/11 sem nova consulta à fonte.

## Decisões e porquês

- **Textos novos.** Os 11 a 12 textos do Google do planejamento (Claude Docs) não foram lidos, porque esta sessão não tinha o conector do Claude Docs. Os temas acompanham o calendário do Instagram em `outputs/criativos/nov-dez/legendas.md`.
- **Foto com degradê e texto centralizado.** As telas do sistema ficaram de fora porque os mockups são feitos pela Jessica. O texto fica no centro porque o Google corta algumas imagens em quadrado.
- **Fotos trocadas ou desfocadas:**
  - SNCR: o frasco tinha texto em inglês, e a foto virou `teclado-azul`;
  - Black Friday: as marcas de remédio ficaram legíveis, e a foto inteira foi desfocada;
  - Dia do Farmacêutico: uma caixa tinha texto em inglês, e só essa região foi desfocada.
- **Fotos de remédio em close ficaram de fora,** pela regra do Google sobre produtos farmacêuticos.
- **Links do 25/11 e do 17/12.** O botão de 25/11 vai para /padaria/, porque o artigo de encomendas ainda não está no ar. O link do artigo fica anotado na ficha. O post de 17/12 diz que o WhatsApp é da versão Plus.
- **Função do sistema só quando está no mapa** (`docs/conteudo-prosystem/mapa-funcoes.csv`). Simples e SNCR não citam função.

## Pendente

- **Jessica:** aprovar os textos e as imagens e programar cada postagem no Perfil da Empresa.
- **Jessica:** se o artigo de encomendas for publicado até 25/11, trocar o link do botão.
- **Jessica:** autorizar a correção do artigo do SNCR, que ainda fala de 30/10 no futuro, antes do post de 14/01.

## Próxima sessão

Se ela pedir alterações, mude `dados.js`, rode `node outputs/criativos/google-nov-jan/gerar.js` e publique de novo `guia.html` no mesmo link, com as imagens em `files`. Skills: `relatorio-final`.
