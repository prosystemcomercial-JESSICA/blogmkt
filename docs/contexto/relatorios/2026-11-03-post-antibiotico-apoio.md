# 03/11/2026: post do antibiótico (22/11), frase de apoio informativa

## Pedido
A Jessica pediu para tirar "Marque o farmacêutico da sua loja." do post `frase-antimicrobianos-v2`: soava como provocação ou chamada de atenção. Ela quer um texto mais claro e informativo.

## Feito
- `outputs/criativos/nov-dez/pecas-dados.js`:
  - Apoio da arte: "A venda exige receita,<br>que fica retida na farmácia." A quebra de linha evita a palavra "farmácia" sozinha na segunda linha.
  - Última linha da legenda: "A regra é da Anvisa e vale para toda farmácia e drogaria do país."
- `outputs/criativos/nov-dez/legendas.md`: mesma troca na legenda, feita à mão (o `gerar.js` com filtro de id não reescreve esse arquivo).
- Peça gerada de novo: `outputs/criativos/nov-dez/pecas/frase-antimicrobianos-v2.png`. Ela entrou no commit 819f2f2, feito por outra sessão que trabalhava ao mesmo tempo.

## Verificado
- `node outputs/criativos/nov-dez/gerar.js frase-antimicrobianos-v2`: "sem estouro". Abri o PNG e conferi as duas linhas do apoio.
- Busca no repositório: "Marque o farmacêutico" não aparece mais.
- Não verificado: a galeria de revisão (`galeria.js`) não foi republicada, e o planejamento no Claude Docs não foi alterado.

## Decisões e porquês
- O apoio repete a regra (receita retida), que é informação, e não pede ação do leitor.
- A legenda já abria com "só sai com receita", então o fecho cita a Anvisa em vez de repetir a regra.

## Pendente
- A Jessica aprovar a arte (decide: Jessica).
