# Criativo de farmácia: troca da foto pela caneta emagrecedora

## Pedido
"Mude a imagem do farmacêutico para um modelo de caneta emagrecedora", com imagem de referência colada na conversa (caneta de semaglutida nacional, lilás, com fita métrica) e "não mude o restante do criativo, apenas isso".

## Feito
- `outputs/criativos/farmacia/tendencia/canetas-emagrecedoras.html`: saiu a foto e o degradê sobre ela; entrou a caneta desenhada em SVG, uma fita decorativa ciano e um fundo azul radial no lugar que era da foto.
- `outputs/criativos/farmacia/tendencia/canetas-emagrecedoras.png`: exportado de novo em 1080×1350 (escala 2x).
- Texto, logo, selo, card, botão e rodapé não foram alterados.

## Verificado
- PNG aberto e conferido: caneta não encosta no card nem no botão; fita não passa sob o rodapé.
- `git diff` do HTML: alterações só no CSS e nos elementos da imagem/fundo.
- Não verificado: aprovação da Jessica; envio ao Meta Ads (não foi publicado).

## Decisões e porquês
- Caneta desenhada, porque a imagem colada não ficou salva como arquivo no computador e não pôde ser usada direto. O desenho segue a referência, sem marca e sem o texto dela.
- Fita em ciano, não amarela como na referência: amarelo é proibido na paleta ProSystem.
- Fotos do Unsplash descartadas: as de produto têm rótulo em holandês ("injectie") e as de pessoas mostram uso/aplicação.

## Pendente
- Jessica decide se aprova o desenho ou prefere a foto de referência (precisa salvar o arquivo na pasta e confirmar o direito de uso).
- Comercial confirma os itens do card, em especial "Receita vinculada à venda" (pendência anterior).

## Próxima sessão
Se vier a foto, trocar o `<svg class="pen">` por ela no HTML e reexportar com puppeteer (modelo em `outputs/criativos/exportar-farma-bofu.js`). Skill sugerida: nenhuma específica.
