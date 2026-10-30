# Banco de telas do Prosystem para marketing

Estas telas vêm da base de conhecimento (universidade.prosystemnet.com) e já foram recortadas para uso em peças. Os dados que aparecem nelas são fictícios (confirmado pela Jessica em 30/10/2026).

## Regras

- **Mockup só em notebook ou desktop.** Celular e tablet são proibidos. A Jessica faz os mockups, a partir de `banco imagens/telas-para-mockup/`.
- **Sem marca de medicamento.** Nas peças, nomes comerciais foram ocultados ou trocados pelo princípio ativo.
- **CPF visível fica oculto.** O leitor não sabe que o dado é fictício, e a peça pode parecer vazamento.
- **Foto de pessoa:** confirme o direito de uso antes de publicar.
- **Sem amarelo.** O gráfico de vendas perdidas teve a fatia amarela recolorida.
- **Peça de padaria só com tela neutra.** Não use telas com medicamentos, "Drogaria Modelo" ou grupos de farmácia.

## Como gerar

Na raiz do projeto:

1. `python -I outputs/criativos/funcoes-prosystem/preparar_telas.py`: baixa as originais em `_originais/` (fora do git) e gera os recortes.
2. `node outputs/criativos/funcoes-prosystem/gerar.js`: gera as imagens provisórias do blog e dos carrosséis.
