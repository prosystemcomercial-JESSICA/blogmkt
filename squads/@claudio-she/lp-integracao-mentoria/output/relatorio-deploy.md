# Relatório de Deploy — ProSystem Sistemas
Data: 26/06/2026

## Status
- Conta Vercel: prosystem (já existia)
- Token: fornecido pela Jessica
- Deploy Farmácia: CONCLUÍDO
- Deploy Padaria: CONCLUÍDO

## URLs Publicadas

| Segmento | URL |
|----------|-----|
| Farmácia | https://lp-farmacia-prosystem.vercel.app |
| Padaria  | https://lp-padaria-prosystem.vercel.app  |

## Painel Vercel
- Farmácia: https://vercel.com/prosystem/lp-farmacia-prosystem
- Padaria: https://vercel.com/prosystem/lp-padaria-prosystem

## O que está incluído nas LPs
- Captura de UTMs: utm_source, utm_medium, utm_campaign, utm_term, utm_content, fbclid, gclid
- Persistência em sessionStorage (mantém UTMs entre páginas)
- Handler de submit com confirmação inline
- Pixel Meta: comentado — aguardando ID

## Payload JSON do lead (referência para integração com CRM)
```json
{
  "nome": "string",
  "email": "string",
  "telefone": "string",
  "empresa": "string",
  "origem": "URL completa da LP com UTMs",
  "utm_source": "string",
  "utm_medium": "string",
  "utm_campaign": "string",
  "utm_term": "string",
  "utm_content": "string",
  "fbclid": "string"
}
```

## Pendências
- [ ] Substituir `[URL DA SUA LP]` nas 15 ANIs da campanha (6 Farmácia + 6 Padaria + 3 Topo)
- [ ] Instalar Meta Pixel e inserir o ID nos blocos comentados de ambas as LPs
- [ ] Integração com CRM para captura dos leads (squad dedicado — etapa futura)
- [ ] Domínio personalizado (ex: lp.prosystemnet.com.br) — Vercel > Settings > Domains
- [ ] Ativar MOFU quando audiência de remarketing atingir 1.000 pessoas
