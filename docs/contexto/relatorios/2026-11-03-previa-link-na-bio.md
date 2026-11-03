# 03/11/2026 — Prévia da nova página de link na bio

## Pedido
"Vamos melhorar esse link da Bio, não está bonito, preciso seguir o design system da prosystem e aproveitar o que definimos para os posts no instagram [...] usar motions e transições ao rolar [...] responsiva para smartphone e para desktop, antes de mudar preciso ver." Depois: "quero moderna e tecnológica e com nossa cara".

## Feito
- Página atual lida: https://prosystemnet.com/linknabio/ (link do perfil `prosystemoficial`, lido pela API). Ela tem um depoimento de exemplo ("Fulano de Tal") no ar, link para um site antigo no Canva e um texto longo de catálogo.
- Prévia nova, **ainda não aplicada no site**: https://claude.ai/artifact/6DiR9V43BU9ZosBsSpKBvz (privada).
- Arquivos em `site/linknabio/`:
  - `linknabio.tpl.html`: modelo (CSS e JS próprios, sem bibliotecas);
  - `montar.py`: troca os marcadores pelos links, depoimentos e imagens (`python site/linknabio/montar.py site/linknabio/imagens.json site/linknabio/previa.html`);
  - `imagens.json`: logos e as duas fotos em base64;
  - `previa.html`: página montada (a publicada).
- Conteúdo: hero em degradê azul com losangos, título com peso 300 e 800, status do suporte pelo horário de Brasília, provas (+600 clientes, +16 anos, 7h–22h), 4 links (WhatsApp, Blog, E-book de precificação, site), cartões Farmácia (azul) e Padaria (laranja, sem azul), 3 artigos do blog, avaliações do Google em faixa rolando, bloco de suporte com régua de 24 horas e redes.
- Movimento: título palavra a palavra, revelação ao rolar, foto que abre do recorte, losangos com parallax, barra de progresso, barra fixa com WhatsApp após o hero, contadores, luz que segue o mouse no desktop. Tudo desligado com "reduzir movimento".

### Depois: avaliações reais em texto, com as estrelas acima
- A Jessica testou os prints do Google e preferiu texto: "prefiro textos, da forma que estava mas com as avaliações reais e a quantidade de estrelas acima".
- Cartões de texto com o **texto completo** de cada avaliação, como está no Google (só sai o emoji), e as estrelas brancas acima, na quantidade da nota (todas 5): Rodrigo Amancio, Krisley Kretli de Oliveira, Samuel Ferreira, Thalita Silva, Paulo Siqueira, Verônica Xavier, Katiane Avancini, Sirleia Moreira e Claudiele Castro (`DEPOS` em `montar.py`, copiado de `banco imagens/depoimentos-google/transcricao.md`).
- Fora: Juliana (texto curto já coberto), Tatiana e Luíria (falam em 24 horas ou a qualquer hora), Anisete (4 estrelas). Se entrar uma de 4 estrelas, a 5.ª estrela aparece só em contorno.
- `previa.html` continua fora do git (`.gitignore`): é saída do `montar.py`.
- A prévia está compartilhada como "qualquer pessoa com o link" (mudança feita pela Jessica).

## Verificado
- Capturas em 390px e 1366px (Playwright): sem rolagem lateral e sem erro de script. Faixa das avaliações em texto conferida no desktop. Corrigidos depois da captura: títulos dos links brancos sobre branco no desktop e régua de horas desalinhada.
- Não verificado: a versão corrigida não teve nova captura; não testado em celular real nem dentro do navegador do Instagram.

## Decisões e porquês
- Sem ícones nem emoji (caderno): o losango leva uma sigla (WA, BL, PDF, PS).
- Foto da farmacêutica recortada para tirar o aviso da farmácia pública; crédito "Cristine Rochol / PMPA" no rodapé (obrigatório).
- Depoimentos: só avaliações reais do Google, autorizadas em 30/10; o da Tatiana ficou fora porque cita "24 horas".
- Uma só aparência (sem tema escuro), por ser página da marca.
- Os cartões de segmento levam às categorias do blog, porque o site não tem página por segmento.

## Pendente (Jessica decide)
- Aprovar ou pedir ajustes na prévia.
- Confirmar o destino dos cartões Farmácia e Padaria e se o e-book continua.
- Depois de aprovada: aplicar no WordPress em `/linknabio/` (Elementor ou modelo de página próprio) e trocar o depoimento "Fulano de Tal".

## Próxima sessão
- Ler os comentários da prévia, ajustar `linknabio.tpl.html`, rodar `montar.py` e publicar no mesmo link. Na aplicação no site, trocar as imagens base64 por arquivos da biblioteca de mídia. Skills: `impeccable` ou `frontend-design`, `webapp-testing`.
