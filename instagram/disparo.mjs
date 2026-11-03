// Disparo pontual da publicação no Instagram. O agendamento do GitHub (schedule) atrasa ou pula
// rodadas, então a VPS do CRM Comercial roda este script a cada 5 minutos (cron) e, se houver post
// agendado cujo horário chegou, aciona o workflow .github/workflows/instagram.yml, que publica.
// Na VPS: /usr/local/lib/instagram-disparo/disparo.mjs, token em /etc/instagram-disparo.env
// (GH_DISPARO=, token fine-grained só com Actions: Read and write no blogmkt). Nunca imprimir o token.
import fs from 'node:fs';

const REPO = 'prosystemcomercial-JESSICA/blogmkt';
const ENV = '/etc/instagram-disparo.env';

let token = process.env.GH_DISPARO;
if (!token && fs.existsSync(ENV)) {
  const m = fs.readFileSync(ENV, 'utf8').match(/^GH_DISPARO=(.+)$/m);
  if (m) token = m[1].trim();
}
const hora = new Date().toISOString();
if (!token) { console.log(`${hora} sem GH_DISPARO; nada feito`); process.exit(0); }

const gh = (rota, opcoes = {}) => fetch(`https://api.github.com/repos/${REPO}${rota}`, {
  ...opcoes,
  headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' },
});

const agenda = await (await fetch(`https://raw.githubusercontent.com/${REPO}/main/instagram/agenda.json?t=${Date.now()}`)).json();
const daVez = agenda.filter((p) => p.status === 'agendado' && new Date(p.quando) <= new Date());
if (!daVez.length) process.exit(0);

// Já existe uma publicação em andamento: não dispara outra.
for (const status of ['queued', 'in_progress']) {
  const { total_count: n } = await (await gh(`/actions/workflows/instagram.yml/runs?status=${status}&per_page=1`)).json();
  if (n) { console.log(`${hora} workflow ${status}; aguardando`); process.exit(0); }
}

const r = await gh('/actions/workflows/instagram.yml/dispatches', { method: 'POST', body: JSON.stringify({ ref: 'main' }) });
console.log(`${hora} ${daVez.map((p) => p.id).join(', ')}: disparo ${r.status === 204 ? 'feito' : `falhou (HTTP ${r.status})`}`);
process.exit(r.status === 204 ? 0 : 1);
