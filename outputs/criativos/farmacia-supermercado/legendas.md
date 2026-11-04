# Farmácia dentro do supermercado (Lei 15.357/2026): peças de 04/11/2026

Pauta tirada do post do @contabil.farma sobre a farmácia do Assaí. Tudo aguarda a aprovação da Jessica.

| Peça | Onde | Arquivos |
|---|---|---|
| Artigo do blog | prosystemnet.com/blog/farmacia-dentro-do-supermercado-lei-15357/ (ainda não publicado) | `blog/farmacia-dentro-do-supermercado-lei-15357.html` |
| Carrossel do mercado (V2) | Feed | `pecas/carrossel-mercado-farmacia-lei-v1-1.png` a `-6.png` |
| Carrossel da farmácia (V3) | Feed | `pecas/carrossel-farmacia-supermercado-v1-1.png` a `-6.png` |
| 3 stories do artigo | Stories, com a figurinha de link na faixa de 1300 a 1580 px | `stories/story-farmacia-supermercado-v1-1.png` a `-3.png` |
| Post do Google | Perfil da Empresa, sugestão 11/11/2026 às 9h | `google/2026-11-11-farmacia-dentro-do-supermercado.jpg` e `google/texto.md` |

Ordem sugerida: o artigo entra no ar primeiro. O carrossel da farmácia sai no mesmo dia, com os stories. O do mercado sai alguns dias depois, e o post do Google em 11/11.

Para gerar de novo: `python -I preparar.py` (fotos), depois `node gerar-carrosseis.js`, `node gerar-stories.js` e `node gerar-google.js`, a partir da raiz do projeto.

---

## Carrossel 1: farmácia independente (V3, impacto)

**Legenda**

Farmácia dentro do supermercado já é realidade: a Lei 15.357/2026 liberou a farmácia na área de vendas do mercado, e as grandes redes começaram a abrir. Para a farmácia do bairro, a pergunta para 2027 é como manter o cliente que agora pode comprar remédio junto com a compra do mês.

A resposta está no que o mercado tem dificuldade de copiar:
1. Lembrar da reposição do uso contínuo antes de o remédio acabar.
2. Dar um motivo para o cliente voltar, com cartão fidelidade ou pontos e cashback.
3. Atender pelo nome, com orientação e o histórico do paciente.

No Prosystem, o uso contínuo calcula a próxima compra e avisa o balcão. O cartão fidelidade e a atenção farmacêutica ficam no mesmo sistema.

O artigo completo, com as regras da lei e o checklist para 2027, está no blog. Link na bio.

#farmácia #farmáciaindependente #sistemaparafarmácia #gestãodefarmácia #fidelizaçãodeclientes #drogaria #farmacêutico #2027

**Texto alternativo**
1. Carrinho de supermercado com compras e o título "O mercado agora vende remédio. E a sua farmácia?".
2. Comprimidos coloridos e o texto sobre lembrar da reposição do uso contínuo antes do mercado.
3. Farmacêutico atendendo no balcão, dentro de um losango, com o texto sobre fidelidade.
4. Farmacêutica medindo a pressão de um cliente e o texto sobre atender como o mercado não atende.
5. Farmacêutica organizando a prateleira e o título "Conhecer o cliente é a sua vantagem".
6. Pergunta "Sua farmácia está pronta para 2027?", com +600 clientes, +16 anos de experiência e o site prosystemnet.com.br.

---

## Carrossel 2: quem vai abrir farmácia no mercado (V2, foto em destaque)

**Legenda**

Farmácia no supermercado: a Lei 15.357/2026 permite, mas a farmácia precisa funcionar como farmácia. Se você tem mercado e pensa em abrir uma em 2027, veja as regras antes da obra:
1. Espaço delimitado, separado e exclusivo, com farmacêutico durante todo o horário.
2. Nada de remédio em gôndola aberta. O controlado só é entregue depois de pago, ou vai lacrado do balcão até o caixa.
3. Lote e validade registrados em cada venda, porque o recolhimento de um lote pode chegar a qualquer momento.

A farmácia pode ter o mesmo CNPJ do mercado ou ser operada por contrato com uma farmácia licenciada. Converse com o responsável técnico, com a vigilância sanitária e com a contabilidade antes de decidir.

No Prosystem, a farmácia tem estoque por lote e validade, controle dos controlados e vendas separadas do resto da loja.

Fale com um especialista da ProSystem. Link na bio.

#farmácianosupermercado #supermercado #varejo #sistemaparafarmácia #lei15357 #gestãodefarmácia #drogaria #2027

**Texto alternativo**
1. Caixas de um supermercado brasileiro, desfocados, e o título "Farmácia no mercado: a lei já permite".
2. Farmacêutica preenchendo uma receita no balcão e o texto sobre espaço exclusivo e farmacêutico o horário todo.
3. Cartelas de comprimidos e o texto sobre remédio fora da gôndola e controlado entregue depois de pago.
4. Farmacêutico conferindo produtos entre as prateleiras e o texto sobre lote e validade em cada venda.
5. Estoque de farmácia e o título "Farmácia precisa de sistema de farmácia".
6. Seta no chão de um corredor de supermercado e a pergunta "Vai abrir farmácia no seu mercado?", com +600 clientes e +16 anos de experiência.

---

## Stories do artigo

Colocar a figurinha de link na faixa livre abaixo da pílula, apontando para o artigo, quando ele estiver no ar.

1. Fundo branco: "A farmácia chegou ao supermercado." Texto alternativo: anúncio de novo artigo no blog sobre o que a Lei 15.357 muda para quem tem farmácia.
2. Azul, com foto dos caixas de supermercado: "Remédio junto com a compra do mês?" Texto alternativo: caixas de supermercado e o convite para ler as regras da lei e o checklist da farmácia.
3. Foto de prateleiras de farmácia desfocadas: "Seu cliente tem mais um lugar para comprar remédio." Texto alternativo: prateleiras de farmácia e o convite para ver como manter quem já compra com você.

---

## Para conferir antes de publicar

- **Comercial:** cartão fidelidade, e-commerce e apps de delivery vêm de artigos de 2020 e 2021 da base. Confirmar se continuam valendo, porque o artigo cita os três. O carrossel cita o cartão fidelidade e os pontos e cashback.
- **Telas:** nenhuma peça do feed tem tela do sistema. Se quiser, a Jessica pode pôr um mockup da tela de alerta de uso contínuo no slide 2 do carrossel da farmácia. O artigo usa a mesma tela que já estava no blog.
- **Opinião da Abras:** o artigo trata a fala do presidente da entidade como expectativa do setor, não como fato.
- **Fotos novas:** três fotos do Wikimedia Commons, em CC0, com marcas, preços e rótulos desfocados. Créditos em `fotos/CREDITOS.md`.
- **Link do post do Google:** enquanto o artigo não estiver no ar, o botão aponta para a página do sistema para farmácia.
