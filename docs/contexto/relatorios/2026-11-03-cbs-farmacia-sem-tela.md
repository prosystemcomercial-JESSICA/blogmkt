# 03/11/2026: peça da CBS (farmácia, 04/01) sem tela e com chamada nova

## Pedido
Na peça `farmacia-cbs-v1` (Seg 04/01): "Tire a tela do sistema e melhore essa chamada do tipo, nós já estamos prontos para o IBS e CBS e a sua empresa? Algo assim, mas sem perder o sentido da postagem."

## Feito
- `outputs/criativos/nov-dez/pecas-dados.js`: a peça passou de "Estático com tela" (`comTela`, tela `precificacao`) para "Frase de impacto" (`frase`, fundo branco), o tipo do caderno para post só de texto. O id `farmacia-cbs-v1` foi mantido para não quebrar referências no planejamento.
  - Título: "A Prosystem já está pronta para o IBS e a CBS. **E a sua farmácia?**"
  - Apoio: "2027 começou: hora de refazer o preço." (mantém o sentido de refazer a conta com a CBS valendo).
  - Legenda: a frase final passou a dizer que o Prosystem já está preparado para o IBS e a CBS; hashtag `#ibs` incluída; texto alternativo atualizado.
- `pecas/farmacia-cbs-v1.png` regerado.
- `legendas.md` regerado a partir dos dados: estava desatualizado e também trouxe mudanças já feitas em outras peças (carrosséis sem tela na capa, 6x1 da padaria, laço do Dezembro Vermelho).
- Parte da primeira edição entrou no commit automático 23bd86e; o restante está no commit deste relatório.

## Verificado
- Peça gerada sem estouro e conferida na imagem: título em 4 linhas, "E a sua farmácia?" inteiro em negrito, apoio em uma linha.
- Não verificado: se o sistema de fato já emite com IBS e CBS.

## Decisões e porquês
- Frase de impacto em vez de manter o fundo azul sem tela: o caderno não tem "estático com tela" sem tela; a frase é o tipo aprovado para só texto.
- Quebra de linha forçada antes do negrito, para o "E" não ficar sozinho no fim da linha.

## Pendente
- Jessica / produto: confirmar que o Prosystem já está pronto para IBS e CBS (a peça promete isso; está em "Conferir antes de publicar").
- Preencher a taxa da CBS na legenda no dia (já estava pendente).

## Próxima sessão
Se a Jessica preferir o fundo azul forte, criar uma variação da frase em `gerar.js` (tipo `frase` com fundo `forte`) e regerar com `node outputs/criativos/nov-dez/gerar.js farmacia-cbs-v1`.

## Atualização: aprovada
A Jessica aprovou a peça. Ela ficou travada (`travada: true` em `pecas-dados.js`): o gerador não a refaz mais. A pendência de confirmar com o produto que o sistema está pronto para IBS e CBS continua antes da publicação.
