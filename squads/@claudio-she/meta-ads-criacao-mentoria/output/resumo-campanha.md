# Resumo da Campanha — ProSystem Sistemas (PRO)

## 1. Checklist de pré-ativação

- [ ] 🔴 **Substituir a imagem temporária pela arte final** em todos os 15 anúncios (marcados `[TEMP]`) — a campanha não deve ir ao ar com o placeholder "IMAGEM EM PRODUÇÃO". Produção da arte é responsabilidade sua.
- [ ] Revisar visual de cada anúncio no Gerenciador (imagem certa, texto certo, botão certo)
- [ ] Confirmar CTA de cada anúncio: **Cadastrar-se** nas campanhas Farmácia e Padaria, **Saiba mais** na campanha TOFU
- [ ] Confirmar URL de destino com UTMs em cada anúncio (já configurado via API — só conferir)
- [ ] Desativar "Anúncios com vários anunciantes" em cada anúncio: Gerenciador → selecione o anúncio → Editar → "Configurações do anúncio" → desmarcar "Executar anúncio junto com outras campanhas". A Meta reativa isso sozinha sempre que você edita qualquer campo — confira de novo depois de qualquer alteração.
- [ ] Confirmar que o pixel (código de rastreamento — SHE Pixel - Prosystem) está instalado e disparando nas duas LPs: lp-farmacia-mocha.vercel.app e lp-padaria.vercel.app
- [ ] Verificar CAPI (Conversões API — envia os dados de conversão direto do servidor para a Meta, sem depender do navegador do visitante). Se as LPs forem em WordPress, configurar via PixelYourSite. Se não souber, pergunte a quem criou as páginas. Não bloqueia a ativação hoje, mas vale configurar na primeira semana.
- [ ] Para ativar: mude **apenas o status da campanha** para Ativo — conjuntos e anúncios já estão Ativos, então um clique liga tudo.

## 2. Fase de aprendizado — regra de ouro

Nos primeiros **7 dias** após ativar, não pause, não altere e não tire conclusões sobre a campanha. O algoritmo da Meta precisa desse período para aprender quem tem mais chance de virar lead. CPL alto nos primeiros dias é normal — é o algoritmo testando. Pausar antes dos 7 dias reinicia esse aprendizado do zero e desperdiça o investimento inicial.

## 3. CPL de referência (Custo por Lead)

- **Farmácia:** ticket recorrente R$380–420/mês → CPL saudável até **R$38–42**
- **Padaria:** ticket recorrente R$280/mês → CPL saudável até **R$28**

Esses números batem com o benchmark que já constava no seu plano de mídia (R$28–38).

## 4. O que foi criado

**Campanha 1 — Farmácia (Geração de Leads · R$20/dia):**
Conjunto aberto, sem restrição de interesses, Brasil, 35–60 anos. 6 anúncios:
- ANI01 — foca na dor do PDV travando em horário de pico
- ANI02 — mostra o resultado de ter gestão integrada (estoque + SNGPC + financeiro)
- ANI03 (carrossel) — diferencial do sistema feito para farmácia, 4 cards
- ANI04 — curiosidade sobre vendas perdidas por causa do sistema
- ANI05 — prova social (depoimento de cliente real)
- ANI06 — urgência: risco de autuação por SNGPC mal transmitido

**Campanha 2 — Padaria (Geração de Leads · R$15/dia):**
Conjunto aberto, sem restrição de interesses, Brasil, 30–60 anos. 6 anúncios:
- ANI07 — dor de perder produto por vencimento não controlado
- ANI08 — resultado de precificar com custo real, não no feeling
- ANI09 (carrossel) — diferencial do sistema feito para padaria, 4 cards
- ANI10 — curiosidade sobre qual produto dá mais prejuízo
- ANI11 — prova social (depoimento de cliente real)
- ANI12 — urgência: precificar sem controle de produção é precificar no chute

**Campanha 3 — TOFU/Alcance (Reconhecimento de marca · R$15/dia):**
Interesses Drugstore + Pequenas e médias empresas, Brasil, 30–58 anos. 3 anúncios compartilhados entre os dois segmentos (dor, curiosidade, prova social geral da ProSystem).

⚠️ **Todos os 15 anúncios usam imagem placeholder [TEMP]** — trocar antes de ativar.

## 5. Por que fizemos assim

- **Conjunto aberto no BOFU (Farmácia e Padaria):** decisão sua, mantendo o plano original. Registro técnico: com budget abaixo de R$30/dia e pixel sem histórico de conversão limpo, a recomendação do squad seria usar o público Semelhante (Lookalike) de clientes reais já existente na sua conta — fica disponível para ativar depois, se quiser testar.
- **Advantage+ desativado:** sua conta ainda não tem histórico maduro de conversões (o pixel de demonstração começou a disparar recentemente) — Advantage+ funciona melhor com volume de dados que você ainda não tem.
- **Audience Network desativado:** padrão para B2B com perfil de decisor específico — evita mostrar o anúncio em apps de terceiros, onde a qualidade do lead cai.
- **Conjuntos e anúncios criados como Ativo, campanha como Pausada:** assim, quando você tiver as imagens finais e quiser ir ao ar, um único clique (mudar status da campanha) ativa tudo — sem precisar reconfigurar nada.
- **UTMs na URL:** permitem rastrear no seu Analytics de onde veio cada visitante e qual anúncio específico gerou o clique.
- **Evento de pixel LEAD:** padrão para geração de lead via LP externa — usado nas campanhas Farmácia e Padaria. A campanha TOFU não usa evento de conversão porque o objetivo é Alcance, não captura.
- **CTA "Saiba mais" na campanha TOFU:** ajustei de "Cadastrar-se" (como estava no plano original) porque campanha de Alcance não é otimizada pela Meta para conversão — usar CTA de captura ali seria prometer uma otimização que a configuração técnica não entrega.

## 6. O que fazer agora (em ordem)

1. Complete o checklist de pré-ativação acima — principalmente a troca das imagens temporárias.
2. Confirme que o pixel está disparando nas duas LPs antes de ativar (sem isso, a campanha roda sem registrar os leads corretamente).
3. Confirme que a conta CA01-PROSYSTEM tem método de pagamento cadastrado.
4. Ative a campanha: mude o status para Ativo — Farmácia primeiro, Padaria e TOFU quando estiver pronto.

## 7. O que monitorar depois dos 7 dias

- **Leads gerados** — métrica principal, quantidade antes de qualidade.
- **CPL** — comparar com a referência (R$38–42 Farmácia, R$28 Padaria).
- **Fase de aprendizado** — conferir no Gerenciador se o conjunto ainda mostra "Aprendizado" ou já saiu dessa fase.
- **Frequência** — se passar de 3–4 em 7 dias com CPL subindo, os criativos estão saturando e é hora de trocar.

Regra de ouro: nos primeiros 7 dias, não pausar, não alterar, não tirar conclusões. Só depois disso, analisar CPL, volume de leads e qualidade com o time de vendas — e lembrando: **quantidade de lead é a métrica mais importante, até que se prove com evidência real que os leads são desqualificados.**
