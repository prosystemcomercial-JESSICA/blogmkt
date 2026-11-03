# Frase da sobra de pão (padaria, 11/01): "Novo artigo no ar!"

## Pedido
A Jessica mandou um print da peça `frase-padaria-sobra-v1` ("Pão que sobra também é prejuízo.") e pediu: "Aqui coloque, novo artigo no ar!"

## Feito
- `outputs/criativos/nov-dez/pecas-dados.js`: a frase de apoio da arte passou de "Marque o dono da padaria." para "Novo artigo no ar!". A legenda ganhou o aviso do artigo: "Novo artigo no ar: o passo a passo para controlar as sobras e ajustar a produção está no blog, no link da bio. Marque o dono da padaria." Saiu da lista "conferir" o item que pedia para citar o blog quando o artigo estivesse no ar.
- `outputs/criativos/nov-dez/pecas/frase-padaria-sobra-v1.png`: regerada com `node outputs/criativos/nov-dez/gerar.js frase-padaria-sobra-v1`.
- `outputs/criativos/nov-dez/legendas.md`: a mesma troca, feita à mão, porque o gerador só reescreve esse arquivo quando roda sem filtro.
- O commit automático (`be42f33` e os vizinhos) já tinha levado o `pecas-dados.js` e o PNG. Este commit leva o `legendas.md` e este relatório.

## Verificado
- O artigo está no ar: `https://prosystemnet.com/blog/controle-de-sobras-padaria-ajustar-producao/` aparece na página do blog (HTTP 200).
- Conferi o PNG gerado: a frase aparece certa, sem estouro.

## Decisões e porquês
- Mantive "Marque o dono da padaria." no fim da legenda. Só a arte trocou de frase.
- Não rodei o gerador completo, porque outra sessão estava mexendo em outras peças ao mesmo tempo.

## Pendente
- Continua aberto: conferir o volume de busca do termo "sobra de pão".

## Próxima sessão
Se o `legendas.md` for regerado por completo, confirme que a legenda nova continua lá (ela vem do `pecas-dados.js`).
