# 04/11/2026: feed do Instagram com um post por dia

## Pedido
A Jessica viu que, depois de 04/11, o próximo post era só em 09/11 (o carrossel de 06/11 foi adiantado para 03/11). Ela pediu: "vamos produzir os dias que faltam e que pularam", em vez de reagendar. Nas perguntas, ela escolheu **tudo até 31/01** e **todos os dias, inclusive sábado e domingo**. A pausa de 23/12 a 02/01, só com Natal e Ano Novo, continua.

## Feito
- 33 peças novas para os dias vazios: 10 em novembro, 9 em dezembro e 14 em janeiro. São 15 de padaria, 12 de farmácia e 6 para os dois segmentos, em 5 formatos: frase de impacto, estático com tela, foto com painel de vidro e padaria com foto. Nenhum carrossel novo.
- Textos, legendas, SEO, texto alternativo e itens a conferir em `outputs/criativos/nov-dez/pecas-dias-extras.js`. O arquivo é carregado por `pecas-dados.js` (`P.push`). As peças têm `nova: true` e `semMockup: true` e **não estão travadas**: aguardam aprovação.
- Imagens em `outputs/criativos/nov-dez/pecas/<id>.png`. O `legendas.md` foi gerado de novo com o calendário completo.
- Fotos: 6 novas do Wikimedia Commons (CC0, domínio público, CC BY), mais 2 do banco local da padaria. Os originais estão em `fotos/_originais/` e os créditos em `fotos/CREDITOS.md`. As fotos CC BY levam o crédito no fim da legenda (07/11, 20/11 e 15/12).
- `preparar-dias-extras.py` faz os recortes e desfoca os rótulos em inglês. Ele também gera as telas `metas-subgrupo`, `painel-totais` e `fidelimax-pontos`.
- `tela-contas.js` refaz o aviso de contas a pagar do WhatsApp com data de 2026 e valores fictícios (`whats-contas-v2`).
- `gerar.js`:
  - novos destaques ampliados para `perda-vendas-motivo`, `fidelimax-pontos` e `metas-subgrupo`;
  - opção `telaLarg` no `comTela`, para não esticar uma tela pequena.
- `galeria.js`:
  - modo `pendentes`, que mostra só as peças não travadas;
  - correção: peça com `semMockup` não aparece mais como "Aguarda mockup".
- Página de revisão (privada): https://claude.ai/artifact/DBbMzwYV9JdsQipzUFn15b

## Verificado
- `gerar.js` rodou com "sem estouro" nas 33 peças.
- Conferi todas em folhas de contato. Ajustei 7 peças depois de ver: rosto desfocado (06/11), destaque de metas largo demais (26/11), frasco escondido (12/12), padeira coberta pelo painel (15/12 virou "padaria com foto"), espaço vazio (22/12), título da tela de contas e tamanho da tela do Fidelimax.
- **Não verificado:** as peças não foram vistas em tamanho real, uma a uma, no celular. Nada foi publicado nem entrou em `instagram/agenda.json`.

## Decisões e porquês
- Os dias que já tinham post ficaram como estão. Foram 33 dias novos, e não 37, porque as peças prontas de outras produções já ocupavam 09/11, 10/11, 08/12 e 12/01.
- Prioridade para funções que ainda não apareciam no feed: perda de vendas, sugestão de compras, metas, contas a pagar, auditoria, recebimento com conferência, lote e validade, ponto, avisos no WhatsApp, Fiscal, SEFAZ, biometria e Fidelimax.
- A ordem alterna os segmentos e o fundo (cor, branco, foto) para que a grade não tenha duas peças iguais lado a lado.
- Foto de cédulas descartada: era de dinheiro falso apreendido. Foto de café da manhã descartada: tinha bacon e ovos e não lembra padaria brasileira.
- Telas de lote, contagem, compras e auditoria descartadas: trazem marcas de medicamento ou poluição visual.

## Pendente (Jessica, ou o Comercial nos itens de produto)
- Aprovar as 33 peças. As aprovadas recebem `travada: true` em `pecas-dias-extras.js`.
- Itens a conferir, em cada peça e no `legendas.md`. Os principais:
  - suporte em feriado de dia de semana (15/11);
  - Fidelimax ainda ativo e se pode ser citado (26/01);
  - biometria: o leitor é vendido junto? (21/01);
  - funções de artigo de 2020: recebimento, Fiscal e SEFAZ;
  - fotos do banco local da padaria sem licença registrada (03/01 e 29/01);
  - modelos posando na foto de 29/01.
- Programar a publicação, pelo `instagram/agenda.json` ou manualmente.

## Próxima sessão
Abra a página de revisão e aplique as notas da Jessica em `pecas-dias-extras.js`. Depois rode `node outputs/criativos/nov-dez/gerar.js <id>` e, para a página, `galeria.js <saída> pendentes`, publicando na mesma URL. Skills: `relatorio-final`; leia o caderno de marca antes de mudar qualquer peça.
