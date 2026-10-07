#!/usr/bin/env bash
# Commit e push automáticos ao fim de cada resposta do Claude Code (hook "Stop").
# Regra do projeto: toda alteração vai para o GitHub (origin main), sem exceção.
# Trava de segurança: se algum arquivo alterado contiver algo parecido com chave/token,
# nada é enviado e um aviso aparece na tela.

cd "${CLAUDE_PROJECT_DIR:-$(dirname "$0")/../..}" || exit 0
git rev-parse --is-inside-work-tree >/dev/null 2>&1 || exit 0

# Nada mudou: não faz nada.
[ -z "$(git status --porcelain)" ] && exit 0

git add -A

PADRAO='vcp_[A-Za-z0-9]{20,}|(access_token|token)["'"'"' =:]+EAA[A-Za-z0-9]{50,}|ghp_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{30,}|sk-ant-[A-Za-z0-9_-]{20,}|AKIA[0-9A-Z]{16}|-----BEGIN [A-Z ]*PRIVATE KEY-----'
SUSPEITOS=$(git diff --cached --name-only -z | xargs -0 -r grep -lIE "$PADRAO" 2>/dev/null)
if [ -n "$SUSPEITOS" ]; then
  git reset -q
  LISTA=$(echo "$SUSPEITOS" | head -5 | tr '\n' ' ')
  printf '{"systemMessage":"Commit automático CANCELADO: possível chave ou token em %s. Revise antes de enviar."}\n' "$LISTA"
  exit 0
fi

QTD=$(git diff --cached --name-only | wc -l | tr -d ' ')
ARQS=$(git diff --cached --name-only | head -3 | tr '\n' ',' | sed 's/,$//; s/,/, /g')
[ "$QTD" -gt 3 ] && ARQS="$ARQS e mais $((QTD - 3))"
DATA=$(date '+%d/%m/%Y %H:%M')

git commit -q -m "Atualização automática ($DATA): $QTD arquivo(s)" \
  -m "Arquivos: $ARQS" \
  -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>" || exit 0

if git push -q origin HEAD:main 2>/dev/null; then
  printf '{"systemMessage":"Commit e push automáticos feitos: %s arquivo(s) enviados ao GitHub."}\n' "$QTD"
else
  printf '{"systemMessage":"Commit feito, mas o push para o GitHub falhou. Rode git push manualmente."}\n'
fi
exit 0
