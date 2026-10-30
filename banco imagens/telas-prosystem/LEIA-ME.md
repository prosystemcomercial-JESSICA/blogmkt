# Banco de telas do Prosystem para marketing

Estas telas vêm da base de conhecimento (universidade.prosystemnet.com) e já foram recortadas para uso em peças. Use somente os arquivos desta pasta.

## Regras

- **Nunca use a tela original da base sem revisão.** Muitas têm dados reais ou de aparência real: nome, CPF, telefone, endereço, foto, receita e remédio de clientes.
- **Proibidas em qualquer peça:** relatórios de uso contínuo com clientes (5fabdc3f, 15b47e81), atenção farmacêutica com foto e dados de saúde (db982528, 24f88350), venda de controlados com paciente e prescritor (19c82f74 e a tela seguinte do mesmo artigo), entregas com nome e endereço, Fidelimax com CPF (a823c310, 0a1d13e6).
- **Sem marca de medicamento.** Nas peças, nomes comerciais foram ocultados ou trocados pelo princípio ativo.
- **Sem amarelo.** O gráfico de vendas perdidas teve a fatia amarela recolorida.
- **Peça de padaria só com tela neutra.** Não use telas com medicamentos, "Drogaria Modelo" ou grupos de farmácia.

## Como gerar

Na raiz do projeto:

1. `python -I outputs/criativos/funcoes-prosystem/preparar_telas.py`: baixa as originais em `_originais/` (fora do git) e gera as versões limpas.
2. `node outputs/criativos/funcoes-prosystem/gerar.js`: gera os mockups do blog e os carrosséis.
