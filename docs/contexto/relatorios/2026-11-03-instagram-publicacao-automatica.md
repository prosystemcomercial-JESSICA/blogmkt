# 03/11/2026: publicação automática no Instagram (@prosystemoficial)

## Pedido
A Jessica pediu o passo a passo para criar o app de automação de postagem no Instagram e escolheu rodar pelo GitHub Actions: "vamos fazer assim, e pegue já a primeira postagem que já aprovamos e adiante para hoje".

## Feito
- **Meta (a Jessica fez no navegador):**
  - App **ProsystemMKT**.
  - Usuário do sistema `prosystem-api`, com função Admin e acesso total ao app, à Página Prosystem e ao @prosystemoficial (IG_USER_ID 17841407290869129).
  - Token do usuário do sistema **sem vencimento**, com as permissões instagram_basic, instagram_content_publish, pages_show_list e pages_read_engagement.
  - O token está no `.env` local (`IG_TOKEN`, que fica fora do git) e precisa ir também para o secret `IG_TOKEN` do repositório.
- `instagram/publicar.mjs`: publica os posts de `instagram/agenda.json` cujo horário chegou.
  - Aceita foto única ou carrossel e grava na agenda o status, o media_id e o link do post.
  - Tenta de novo até 3 vezes.
  - Com `--teste`, só confere o token e as imagens. Com `--agora ID`, publica na hora.
- `instagram/preparar.py`: converte as peças PNG em JPEG (a API só aceita JPEG) e grava em `instagram/midia/`. As imagens são servidas pelo link raw do GitHub, porque o repositório é público.
- `.github/workflows/instagram.yml`:
  - roda a cada 15 minutos e também pelo botão Run workflow, com as opções `id` e `teste`;
  - faz o commit de volta da agenda.
- Agenda: o carrossel `carrossel-padaria-reforma-tributaria-v2` (planejado para Sex 06/11) foi adiantado para **03/11 às 12h**.

## Verificado
- Graph API com o token: a conta respondeu @prosystemoficial e as 4 permissões aparecem como granted.
- `node instagram/publicar.mjs --teste` local: o token funciona, as 6 imagens existem e o uso é de 0 de 100 posts em 24h.
- **Não verificado** até este relatório: a execução no GitHub Actions (depende do secret) e a publicação real.

## Decisões e porquês
- **GitHub Actions** em vez da VPS ou deste computador: é gratuito para repositório público, roda sem máquina ligada e o registro fica visível na aba Actions. Em horário de pico, o agendamento do GitHub pode atrasar de 5 a 30 minutos.
- **Token sem vencimento:** com vencimento de 60 dias, a automação pararia sozinha. Se ele vazar, o botão "Anular tokens" no Business Manager derruba o token.
- **Post de hoje:** o primeiro post aprovado (farmácia 04/11) ainda espera o mockup `painel-estoque` e mostra o CNPJ fictício. Por isso a Jessica escolheu a padaria (06/11), que foi aprovada e está pronta.

## Pendente
- A Jessica cria o secret `IG_TOKEN` no GitHub (Settings → Secrets and variables → Actions).
- Confirmar que o post saiu e conferir o link em `instagram/agenda.json`.
- Agendar os próximos posts. O post de 06/11 sai da grade, e a Jessica decide o que entra no lugar.

## Próxima sessão
- Leia `instagram/agenda.json` e a aba Actions do repositório.
- Para agendar um post:
  1. Rode `python instagram/preparar.py <pngs>`.
  2. Acrescente o post em `agenda.json` com `quando` em ISO e fuso `-03:00`.
  3. Rode `node instagram/publicar.mjs --teste`.
  4. Faça commit e push.
- Antes, confira a aprovação no documento https://claude.ai/artifact/3EWRqeFaTD2J6UuUeHwRoe.
