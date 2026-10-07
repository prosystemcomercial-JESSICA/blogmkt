# Projeto blogmkt — Marketing ProSystem

Repositório: https://github.com/prosystemcomercial-JESSICA/blogmkt (branch `main`)
Pasta local: `C:\Users\prosy\Documents\mkt reuniao 1`

## Regra obrigatória: commit e push a cada alteração

Toda alteração feita neste projeto, sem exceção, termina com `git commit` e `git push` para `origin main`,
logo depois de concluída e verificada. Isso vale também para mudanças feitas no servidor do site:
o código correspondente (plugin, scripts, conteúdo) é atualizado aqui e enviado no mesmo momento.

Antes de cada commit:
- Rodar `git status` e revisar o que entra.
- Nunca versionar chaves, tokens ou senhas. `.claude/settings.json` e `.claude/settings.local.json`
  ficam fora do git porque guardam chaves de acesso (Vercel, Meta).
- Mensagens de commit em português, descrevendo o que mudou.

## Estrutura

- `blog/` — artigos do blog em HTML (prévia local) e recursos.
  - `blog/_gerador/` — gerador dos artigos (`gerar.py`, conteúdo em `artigos/*.py`).
  - `blog/_gerador/wp/prosystem-blog/` — plugin WordPress "ProSystem Blog" instalado no site.
  - `blog/_gerador/wp/*.php` — scripts WP-CLI de importação, capas e correção de links.
  - `blog/_gerador/wp_pacote.py` — monta o pacote de publicação (CSS com escopo, manifesto, capas).
- `squads/` — squads do ExpxAgents (blog, design, campanhas).
- `banco imagens/` — banco de imagens de padaria e farmácia.
- `outputs/` — saídas de campanhas e criativos.

## Site (prosystemnet.com)

- WordPress na Hostinger, tema Hello Elementor + Elementor Pro, Yoast SEO.
- Blog em `https://prosystemnet.com/blog/`; posts em `/blog/<slug>/`.
- Acesso por SSH com WP-CLI (chave local `~/.ssh/hostinger_prosystem`).
- O visual do blog vem do plugin `prosystem-blog` (opção `psb_visual` = 3 liga o visual atual).
