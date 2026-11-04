# Farmácia dentro do supermercado: artigo, carrosséis, stories e post do Google (04/11/2026)

## Pedido

A Jessica mandou um post do Instagram do @contabil.farma (https://www.instagram.com/p/DfPXv45CJdF/) sobre a farmácia do Assaí dentro do supermercado e pediu: "Quero falar sobre esse assunto aplicado a sistema de crm e frente de loja". Propus três ângulos (quem vai abrir farmácia no mercado, a farmácia independente e a padaria) e quatro formatos: artigo, carrossel, Google e stories. Ela respondeu "todos".

## Feito

- **Artigo do blog:** `blog/_gerador/artigos/a17_farmacia_supermercado.py`, gerado em `blog/farmacia-dentro-do-supermercado-lei-15357.html` e `blog/assets/images/og-farmacia-dentro-do-supermercado-lei-15357.jpg`. Traz as regras da lei, quem já está abrindo, o que o sistema precisa ter para quem vai abrir, como a farmácia independente reage, a parceria por contrato e o checklist para 2027, mais FAQ e fontes. Reaproveita a tela `uso-continuo-alerta`. **Não foi publicado no WordPress.**
- **Peças:** em `outputs/criativos/farmacia-supermercado/`, conforme `legendas.md`:
  - carrossel do mercado (V2);
  - carrossel da farmácia (V3);
  - 3 stories do artigo;
  - 1 post do Google, com data sugerida de 11/11/2026, que estava livre.
- **Geradores:**
  - `preparar.py` cuida das fotos.
  - `gerar-carrosseis.js` copia os estilos de `modelos/carrossel/gerar-variacoes.js`.
  - `gerar-stories.js` copia `nov-dez/stories/gerar-stories.js`, no azul.
  - `gerar-google.js` copia `google-nov-jan/gerar.js` e confere se a foto não se repete nas 39 postagens já programadas.
- **Fotos novas:** três fotos CC0 do Wikimedia Commons, com marcas, preços, rótulos e amarelo desfocados. Créditos em `fotos/CREDITOS.md`.

## Verificado

- **Lei 15.357/2026:** lida no Planalto (20/03/2026, DOU de 23/03/2026), com os §§ 2º a 7º do art. 6º da Lei 5.991/1973.
- **Assaí:** dados conferidos na Exame (20/07/2026). Postura da Abras conferida na ICTQ (04/06/2026).
- **Artigo:** a página foi renderizada e conferida em captura de tela.
- **Peças:** conferidas em folhas de contato.
  - Montserrat carregada em todas. Numa execução, a fonte não carregou e o texto saiu em Arial; ao gerar de novo, ficou certo.
  - Stories: o script não acusou nada fora da zona segura.
  - Google: o script não acusou problema de texto nem foto repetida.
- **Funções citadas:** todas estão em `docs/conteudo-prosystem/mapa-funcoes.csv`.
- **Não verificado:** se o cartão fidelidade, o e-commerce (Tray/Woo) e os apps de delivery seguem vigentes. A base marca os três como artigos de 2020 e 2021.

## Decisões e porquês

- **Um modelo por carrossel:** o do mercado ficou em V2 e o da farmácia em V3, porque o caderno proíbe misturar os dois no mesmo carrossel.
- **Telas:** nenhuma tela nas peças do feed, porque a Jessica faz os mockups.
- **Padaria:** o ângulo de padaria não virou peça, porque "todos" se referia aos formatos e o caderno proíbe falar de farmácia em peça de padaria.
- **Pasta própria:** o post do Google ficou em uma pasta própria, sem mexer em `google-nov-jan/`. As 39 de lá já estão programadas, e outra sessão estava trabalhando nessa pasta (`stories.js`).
- **Opinião da Abras:** a fala sobre parcerias com independentes foi escrita como expectativa do setor, não como fato.
- **Foto do mercado:** a do Campeão foi escolhida por ser de supermercado brasileiro. As fachadas com marca e as fotos com muito amarelo foram descartadas.

## Pendente

- **Jessica:** aprovar o artigo e as peças.
- **Jessica:** autorizar a publicação do artigo no WordPress (WP-CLI, plugin prosystem-blog).
- **Jessica:** programar o post do Google.
- **Comercial:** confirmar o cartão fidelidade, o e-commerce e os apps de delivery.

## Próxima sessão

1. Perguntar à Jessica o que foi aprovado.
2. Ajustes: altere os dados no início do gerador correspondente e gere de novo, como nova versão (`-v2`).
3. Para publicar o artigo, siga `blog/_gerador/wp_pacote.py` e `blog/_gerador/wp/importar_wp.php` (ver o relatório e a memória do blog publicado). Depois troque o botão do post do Google para o link do artigo.
