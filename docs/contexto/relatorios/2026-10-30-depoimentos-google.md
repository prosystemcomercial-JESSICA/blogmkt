# Depoimentos do Google: criativos e prova social

## Pedido
A Jessica salvou 20 prints de avaliações do Google em `banco imagens/depoimentos-google/` para virar "criativos das provas sociais e depoimentos dos clientes".

## Feito
- `outputs/criativos/depoimentos/`: 6 depoimentos, 2 peças de prova social, carrossel de 6 páginas (modelo V3) com a avaliação marcada como "especial", `gerar.js` e `legendas.md` (legendas, situação de cada peça, ajustes de texto e mensagem de autorização).
- `.gitignore`: a pasta dos prints fica fora do git. O repositório é público e os prints têm nomes completos.
- Prints fora do git: desfeito o commit local `0f207b5`, que só tinha prints e não tinha chegado ao GitHub, e removidos do rastreamento os 2 prints publicados em `b696440`. Os arquivos continuam no computador.
- `docs/design/caderno-de-marca/project/`: situação e pendências atualizadas em `tipos-de-posts.md` e `decisoes.md`.
- Transcrição completa com nomes: `banco imagens/depoimentos-google/transcricao.md`, só local.

## Verificado
- As 14 peças foram geradas em 1080×1350 e revisadas em folhas de contato. O gerador não acusou estouro de texto.
- Trechos conferidos contra os prints.
- `git add -n .` não inclui nada da pasta dos prints.
- O site (página inicial) e `docs/conteudo-prosystem/` não confirmam suporte 24 horas nem de fim de semana.
- Não verificado: aparência das peças em um celular de verdade e no feed real.

## Decisões e porquês
- Assinatura com primeiro nome e inicial, sem foto e sem nome da farmácia, porque falta autorização e o repositório é público.
- Sem estrelas desenhadas: o caderno proíbe amarelo e ícones novos. O selo é a pílula "Avaliação 5 estrelas no Google".
- Fora das peças: a avaliação de 4 estrelas, a conta "administrativo" e a com pseudônimo. Nomes de técnicos também ficaram de fora.
- Trechos curtos com correção mínima de português, listada em `legendas.md`.
- Azul em todas as peças: nenhuma avaliação cita padaria e só duas confirmam farmácia. Para mudar para laranja, basta trocar `tema` em `gerar.js`.

## Pendente
- **Jessica:** decidir se reescreve o histórico público para apagar os 2 prints de `b696440` (exige force push). Sem isso, eles seguem acessíveis no histórico do GitHub.
- **Jessica:** pedir autorização aos clientes. Nada pode ser publicado antes.
- **Comercial:** confirmar suporte 24 horas e de fim de semana (carrossel, página 4, e peça do Samuel).
- **Jessica:** informar o segmento dos clientes, se algum for padaria.

## Próxima sessão
Com as autorizações em mãos, atualizar `outputs/criativos/depoimentos/legendas.md`, ajustar nomes e negócio em `gerar.js` e rodar `node outputs/criativos/depoimentos/gerar.js`. Skill sugerida: nenhuma específica; leia o caderno de marca antes.
