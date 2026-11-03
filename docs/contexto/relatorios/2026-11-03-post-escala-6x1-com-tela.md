# 03/11/2026: post da escala 6x1 (19/11) ligado ao painel do Prosystem

## Pedido
A Jessica perguntou "qual o sentido desse post?". A peça era só uma notícia trabalhista, sem nenhuma ferramenta do Prosystem (pendência antiga: "existe relatório de vendas por hora para padaria?"). Ela respondeu "faça como for melhor".

## Feito
- A peça `padaria-escala-6x1-v1` mudou de "Foto com painel" para "Estático com tela" (`comTela` com `foto: 'sovando-massa'`).
  - Título: "Fim da escala 6x1: menos horas de equipe. **Use cada uma onde a padaria mais vende.**"
  - Faixa: "No painel do Prosystem, veja vendas e atendimentos dia a dia. Versão Plus."
- Nova tela `outputs/criativos/nov-dez/telas/painel-vendas-totais.png`: a 2ª linha de totais do painel de indicadores (ticket médio, total de atendimentos, média diária de vendas), recortada de `painel-vendas.png`. O nome da "Drogaria Modelo" ficou fora do recorte.
- A legenda agora cita o painel (versão Plus) e termina com o CTA. Tags: `#panificacao` saiu e `#sistemaparapadaria` entrou.
- Arquivos: `pecas-dados.js`, `legendas.md` (só o trecho deste post), `feed_modelo.html`, `feed-editoriais.html` (campos ferramenta e conferir atualizados).

## Verificado
- `node outputs/criativos/nov-dez/gerar.js padaria-escala-6x1-v1`: "sem estouro". Abri o PNG e conferi.
- Não rodei a geração completa, para não regerar peças de outras sessões abertas.

## Decisões
- Usei só o que a tela mostra de verdade (atendimentos, média diária e o gráfico com a opção "Dia"). Vendas por hora continua sem confirmação, então o post não promete isso.
- Formato estático, não carrossel: o post sai em 19/11 e o recado cabe em uma peça.

## Pendente
- A Jessica aprovar a arte (decide: Jessica).
- Opcional: mockup próprio com números de padaria em `mockups/painel-vendas-totais.png`.
