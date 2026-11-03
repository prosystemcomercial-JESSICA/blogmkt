# 03/11/2026 — LPs do Prosystem para farmácia e para padaria

## Pedido
"vamos criar duas lps para apresentar o sistema para farmacia e o sistema para padarias, use a base de conhecimento para apresentar os planos e para apresentar algumas ferramentas, com motion, movimentos de rolagens, carrosseis, no design system e tecnologico". No meio: "você vai colocar nos cards que direcionam para farmácia e padaria no link da Bio" (sim).

## Feito
- Prévias (privadas): farmácia https://claude.ai/artifact/RgoAoEjoV4fMAPazhA6zWG e padaria https://claude.ai/artifact/AvgXmvxUuNJhh71qc7QiRB. **Nada foi aplicado no site.**
- `site/lp/`:
  - `lp.tpl.html`: modelo único; a cor vem do segmento (farmácia azul, padaria laranja sem azul);
  - `montar_lp.py`: conteúdo das duas páginas e montagem; gera `farmacia.html` e `padaria.html` (fora do git, ~950 KB cada, com imagens embutidas);
  - `planos-prosystem-2025.csv`: tabela oficial copiada da base (`suporte-tecnico/procedimentos-e-orientacoes/planos-prosystem-2025`, atualizada em 06/02/2025). Colunas MEI, Loja Basic/Pro/Plus, Farma Basic/Pro/Plus.
- Seções: hero com telas reais flutuando (seguem o mouse e a rolagem), faixa de funções correndo, 3 dores (hooks do `docs/conteudo-prosystem/mapa-funcoes.csv`), carrossel de ferramentas (setas, pontos, arrastar, avanço automático), "Um dia na sua farmácia/padaria" (no desktop a tela fica fixa e troca ao rolar), 3 planos + tabela "comparar função por função", avaliações do Google em texto, suporte com régua de horas, chamada final com foto.
- Planos: farmácia usa Farma Basic/Pro/Plus; padaria usa **Loja** Basic/Pro/Plus. O script confere cada item dos cartões contra a tabela oficial e para se algo não estiver no plano. Sem preço.
- Link na bio (`site/linknabio/`): os cartões Farmácia e Padaria levam às prévias das LPs (`LP_FARMACIA`/`LP_PADARIA` em `montar.py`). Texto corrigido: o de padaria citava ficha técnica e controle de sobras, que **não existem** na base; o de farmácia citava receita eletrônica de controlados, não conferida.

## Verificado
- Base de conhecimento varrida: 140 artigos. Confirmados na base: balança lida no caixa (artigos Toledo/Filizola citam o pão francês), leitura da etiqueta da balança, biometria (artigo de 2026, cita farmácia), Dashboard só Plus, Avisos via WhatsApp só "versão Plus", Controle de mesas só Loja Plus.
- Capturas 390px e 1366px das duas LPs: sem rolagem lateral e sem erro de script. Corrigidos depois: selo de plano gigante no carrossel, print do WhatsApp grande demais no hero, botão da barra cobrindo o logo no celular. A versão corrigida não teve nova captura.
- Não verificado: celular real e navegador do Instagram; se a tabela de 2025 ainda vale em 2026.

## Decisões e porquês
- Telas reais, em cartão plano, sem aparelho (mockup em notebook/desktop é com a Jessica). Na padaria só telas neutras (sem remédio e sem "Drogaria Modelo"); balança e mesas sem tela, em cartão de texto.
- Selos de plano só onde a base diz o plano (Plus, Pro e Plus, Loja Plus). Nas demais ferramentas, sem selo.
- Encomendas fora da padaria: o mapa avisa para não vender como pedido de bolo sem confirmar com produto.
- Biometria só na farmácia (o artigo fala de farmácia).
- Avaliações: na padaria sem Krisley (fala de farmácias).

## Pendente (Jessica / produto decidem)
- A tabela "Planos Prosystem 2025" ainda vale? Padaria é mesmo a linha Loja?
- **Atendimento em plantão** aparece só nos planos Pro e Plus. As páginas dizem "suporte das 7h às 22h, inclusive sábado e domingo" para todos: confirmar se o fim de semana vale para o Basic.
- Avisos via WhatsApp: a tabela não lista; a base diz "versão Plus". Confirmar se vale para Loja Plus.
- Destino final: criar as páginas no WordPress (sugestão de endereço: /sistema-para-farmacia/ e /sistema-para-padaria/) e trocar `LP_FARMACIA`/`LP_PADARIA` no link da bio. As páginas antigas /drogaria/ e /padaria/ continuam no ar.
- Os cartões "Quero o Farma/Loja ..." levam ao mesmo WhatsApp; se houver formulário ou link por plano, trocar.

## Próxima sessão
- Ler os comentários das prévias, ajustar `montar_lp.py` / `lp.tpl.html`, rodar `python site/lp/montar_lp.py` e publicar nos mesmos links. Para o WordPress, trocar as imagens base64 por arquivos da biblioteca de mídia. Skills: `impeccable`, `webapp-testing`.

## Continuação: colocar no link da bio (mesmo dia)
- Jessica aprovou as LPs e pediu os cartões "Conheça" do link da bio levando a elas, **só no link da bio** (prosystemnet.com/linknabio, página 551 no WordPress, hoje feita no Elementor). Plantão: "vale para todos", então a linha "Atendimento em plantão" saiu dos cartões e da tabela das LPs.
- Pronto no repositório (commit cc4c323):
  - plugin ProSystem Blog 1.3.0: "página própria". A página cujo slug tem `paginas/<slug>/corpo.html` é desenhada por `templates/pagina-propria.php` com `wp_head`/`wp_footer` (mantém Yoast, Pixel da Meta via PixelYourSite e Clarity) e sem os estilos do tema. Só liga quando o slug está na opção `psb_paginas`; antes disso, prévia com `?psb_nova=1` (noindex);
  - `site/publicar_paginas.py`: gera os corpos de `linknabio`, `sistema-para-farmacia` e `sistema-para-padaria`, com imagens em arquivo (bio 158 KB, LPs ~570 KB);
  - cartões do link da bio apontam para https://prosystemnet.com/sistema-para-farmacia/ e /sistema-para-padaria/.
- Primeira tentativa bloqueada pela checagem de segurança; a Jessica autorizou: "autorizo publicar no site prosystemnet.com via SSH". Depois: "e depois mude o link da bio".

## Publicado no site (03/11/2026, noite)
- Backup do banco: `~/backups-claude/db-antes-paginas-proprias-20261103-233252.sql.gz`; plugin anterior: `~/backups-claude/plugin-prosystem-blog-antes-1.3.0-20261103-233252.tgz`.
- Plugin ProSystem Blog **1.3.0** no servidor (`php -l` ok). Além do modo página própria, tira dessas páginas os scripts do tema, do Elementor, do ElementsKit e do Essential Addons (davam erro `elementorFrontendConfig is not defined`).
- Páginas criadas: **3675** `sistema-para-farmacia` e **3676** `sistema-para-padaria`, fora do menu, com título e descrição no Yoast.
- Ligado: `wp option update psb_paginas "linknabio,sistema-para-farmacia,sistema-para-padaria"`. A página 551 (`linknabio`) continua no Elementor por baixo; só o desenho mudou.
- Para voltar ao link da bio antigo: `wp option update psb_paginas "sistema-para-farmacia,sistema-para-padaria"` (ou `wp option delete psb_paginas` para desligar tudo).

### Conferido no ar
- As três páginas: 200, ~0,5 s, `index, follow`, canonical certo, Pixel da Meta (`fbq`) e Clarity carregando, sem erro de script, sem imagem quebrada, sem rolagem lateral em 390px e 1366px.
- O link da bio com os parâmetros do Instagram (`utm_source=ig...`) abre a página nova; os cartões levam às duas LPs.
- O botão flutuante de WhatsApp do site (do Elementor) não aparece nessas páginas; elas têm o WhatsApp na barra fixa e nos botões.
- Não conferido: abertura dentro do app do Instagram em celular real.

## Como atualizar depois
1. Mudar `site/linknabio/montar.py`, `site/lp/montar_lp.py` ou os modelos; montar (`python site/linknabio/montar.py site/linknabio/imagens.json site/linknabio/previa.html` e `python site/lp/montar_lp.py`).
2. `python site/publicar_paginas.py` (gera `blog/_gerador/wp/prosystem-blog/paginas/`).
3. Copiar a pasta `paginas/` para `wp-content/plugins/prosystem-blog/` no servidor e limpar o cache (`wp cache flush`).
