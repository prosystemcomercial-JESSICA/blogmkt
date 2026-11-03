# Frase da receita eletrônica (21/12): "Leia a legenda" na arte

**Pedido:** na peça `frase-farmacia-receita-v1` (Farmácia, frase de impacto, seg 21/12), a Jessica pediu: "tire a chamada para marcar alguém, e coloque leia a legenda".

**Feito:** commit `e4e1065`.
- Em `outputs/criativos/nov-dez/pecas-dados.js`, o texto de apoio da peça mudou de "Marque quem atende no balcão." para "Leia a legenda.".
- A imagem `outputs/criativos/nov-dez/pecas/frase-farmacia-receita-v1.png` foi gerada de novo com `node gerar.js frase-farmacia-receita-v1`.

**Verificado:** a imagem nova foi aberta e conferida. O texto cabe e não estoura (o gerador avisou "sem estouro"). O push para `origin main` deu certo.

**Decisões e porquês:**
- A legenda do post continua com "Marque quem atende no balcão." no fim, porque o pedido foi só sobre a arte. Pode sair se a Jessica quiser.
- O arquivo `pecas-dados.js` já tinha mudanças de outra sessão ainda sem commit (carrosséis de sangria, uso contínuo e atenção farmacêutica). Só a linha desta peça entrou no commit. O resto ficou como estava.
- As cópias antigas em `docs/conteudo-prosystem/feed_modelo.html` e `feed-editoriais.html` não foram mexidas: são o planejamento anterior, não a arte de produção.

**Pendente:** a Jessica decide se a legenda também perde o "Marque quem atende no balcão.". As mudanças sem commit de outra sessão continuam no `git status`.

**Próxima sessão:** se a legenda também mudar, editar o campo `cap` da peça em `pecas-dados.js` e o trecho correspondente em `outputs/criativos/nov-dez/legendas.md`.

**Aprovação:** a Jessica aprovou a peça e ela foi marcada com `travada: true` em `pecas-dados.js`.
