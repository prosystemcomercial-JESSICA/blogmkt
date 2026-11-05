# 04/11/2026 · Guia dos stories de destaque com link

## Pedido
Jessica: "me de um arquivo guia apenas desses que preciso postar com link" (os 6 stories de destaque com `status: manual` em `instagram/agenda.json`).

## Feito
- Página nova com os 6 stories: data, destaque, botão para salvar o arquivo, link e texto da figurinha com botão de copiar, e checklist. Publicada em https://claude.ai/artifact/AspHixJMaVMQ1NTVLQ6QFy.
- Gerada por `outputs/criativos/destaques/guia-link/gerar.py`, que cria o `stories-com-link.html`. As prévias foram copiadas do guia geral (artifact 1W8HvbsL5WdYmk9bP6yNR1). O link do guia novo foi acrescentado ao `outputs/criativos/destaques/LEIA-ME.md`.
- Commit 2624aa4.

## Verificado
- Na agenda: 55 stories de destaque, 49 `agendado` e 6 `manual`. As datas da página batem com a agenda.
- Os links das figurinhas foram copiados do guia geral. Não foram abertos um a um.
- A publicação da página e o push foram confirmados.

## Decisões e porquês
- Fiz uma página separada em vez de editar o guia geral, como ela pediu. O guia geral continua igual.
- A figurinha da Ferramentas 33 vai para o WhatsApp, não para o link da bio. Corrigi o que eu tinha dito antes no chat.

## Pendente
- A página é privada. A Jessica compartilha pelo menu Share, se quiser.

## Próxima sessão
- No dia de cada um dos 6 stories, conferir se ela postou.

## 05/11: todos os destaques organizados
- **Pedido:** "um documento com todos os destaques organizados", depois "quero visual, com guia de postagem e as capas".
- **Feito:** criei duas versões.
  - Página visual: https://claude.ai/artifact/Xq91Wmb5YxHmcqecaETP8n, gerada por `outputs/criativos/destaques/guia-completo/gerar.py` a partir de `instagram/agenda.json`. Tem as capas (com link para salvar), as miniaturas dos 55 stories com data, hora e situação, e o guia de postagem. As miniaturas foram copiadas do artifact N2ThqYAUSZ2QAqXaWGRMLW.
  - Documento em texto (Claude Docs): https://claude.ai/artifact/YXzK8fxJu2mAeUU9QVFk5Z.
- **Verificado:** a contagem de 5 publicados, 47 para a API e 3 manuais veio da agenda em 05/11, às 10h20.
- **Próxima sessão:** quando a situação mudar, rode o `gerar.py` de novo e republique a página no mesmo arquivo. A página não se atualiza sozinha.
