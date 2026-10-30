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
- Na v1, assinatura com primeiro nome e inicial, até a autorização. Na v2, nome completo, sem foto.
- Na v1, sem estrelas desenhadas. Na v2, estrelas brancas, a pedido da Jessica.
- Fora das peças: a avaliação de 4 estrelas, a conta "administrativo" e a com pseudônimo. Nomes de técnicos também ficaram de fora.
- Trechos curtos com correção mínima de português, listada em `legendas.md`.
- Azul em todas as peças: nenhuma avaliação cita padaria e só duas confirmam farmácia. Para mudar para laranja, basta trocar `tema` em `gerar.js`.

## Atualização do mesmo dia (versões v2)
A Jessica respondeu: "esta autorizado, é publico e esta no google"; suporte "das 7 da manha as 22 da noite e atende sabado e domingo, humanizado com especialistas tecnicos de facil acesso"; estrelas: "faça branco use a criatividade".
- Peças v2 em `outputs/criativos/depoimentos/`, com nomes completos e Farmácia Pharmavida. Estrelas brancas de pontas redondas. As v1 ficam como referência e não devem ser usadas.
- Carrossel, página 4: saiu "24 horas" (a avaliação diz isso, mas o suporte é das 7h às 22h). Entrou outro trecho real da mesma avaliação e o horário informado pela Jessica.
- Carrossel, páginas 2 e 4: revisão em tamanho real achou rótulos em inglês com medicamento ou fabricante. Página 2 trocada para `calculadora.jpg` (as teclas têm abreviações como MATH, pouco visíveis) e página 4 recortada. As fotos antigas continuam nos modelos de carrossel; aviso em `decisoes.md`.
- Caderno atualizado: prova de suporte e regra das estrelas (`README.md`, `decisoes.md`, `tipos-de-posts.md`).
- Push: a API do GitHub mostrou `push: false` para `alcancelegalmkt-collab`. Foi criado um ajudante de credencial só neste repositório (`git config --local`), que usa `prosystemcomercial-JESSICA`. A conta ativa do `gh` não mudou.
- Histórico: os prints de `b696440` ficam, porque a Jessica considerou o conteúdo público. Decisão de não reescrever o histórico.
- Verificado: v2 revisadas em folhas de contato e push real feito com o ajudante.

## Pendente
- Publicação pela equipe. Nenhuma pendência de texto ou autorização.
- Não verificado: aparência das peças em um celular de verdade e no feed real.
- A página do caderno publicada como artifact não foi atualizada; as regras novas estão no repositório.

## Próxima sessão
Sem passo obrigatório. Para novos depoimentos, editar `depoimentos` em `outputs/criativos/depoimentos/gerar.js`, criar nova versão e rodar o gerador.
