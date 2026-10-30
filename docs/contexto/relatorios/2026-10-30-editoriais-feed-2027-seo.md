# Editoriais, feed simulado, tendências de 2027 e SEO

## Pedido

"Quero temas mesclados com nossa base de conhecimento e ferramentas, mostrando problemas e dificuldades [...] e soluções, com nossas ferramentas." Sem palavras difíceis, falando com donos, gerentes e farmacêuticos, e com telas das ferramentas vendáveis.

Depois: "faça um documento em HTML no mesmo formato do feed di instagram, simulando isso mesmo". E: "busque tendencias ja para 2027 [...] queremos SEO em todas as legendas redes sociais, blogs e google".

## Feito

- `docs/conteudo-prosystem/feed-editoriais.html`: simulação do perfil, em um arquivo só, com 18 publicações e 53 páginas. Cada publicação abre com legenda, editorial, ferramenta, tela, SEO, pendências e fontes. Gerada por `feed_editoriais.py` a partir de `feed_modelo.html`.
- `docs/contexto/pesquisas/2026-10-30-tendencias-2027-e-seo.md`: tendências de 2027, buscas reais do Google e regras de SEO.
- `banco imagens/telas-para-mockup/00-recortadas/`: 5 telas novas (`receitas-scanner`, `dias-sem-giro`, `fechamento-caixa`, `precificacao`, `curva-abc`). A receita está em `outputs/criativos/funcoes-prosystem/preparar_telas.py`.
- Memória: regra dos editoriais e do SEO, e atualização sobre quem faz os mockups.

## Verificado

- Abri o HTML no navegador (Puppeteer): nenhum erro de script; nenhum texto para fora da peça, sobre o logo ou sobre a tela.
- Testados: filtro por editorial e segmento, abrir publicação, passar página e layout de 390px, sem rolagem lateral.
- As 18 legendas têm a palavra-chave nas primeiras frases; títulos com até 60 caracteres e descrições com até 155, medidos por script.
- Revisadas em folhas de contato todas as páginas e, em tamanho real, só algumas telas e fotos.
- **Não verificado:** volume de busca; página oficial do Instagram sobre buscadores; os itens "Conferir antes de publicar" de cada peça; aparência dentro do Instagram real.
- Fontes da pesquisa: a situação de cada dado (aberta ou só na busca) está na própria pesquisa. Os dados da pesquisa anterior não foram reconferidos.

## Decisões e porquês

- **Telas sem aparelho:** a Jessica reprovou os mockups gerados por código durante esta tarefa ("separe as telas que eu faço os mockups"). O simulado mostra a tela recortada no lugar do mockup e indica qual tela usar. Meu `gerar.js` chegou a rodar nesse momento e falhou porque a pasta foi removida; retirei dele o que acrescentei.
- **Mudanças na proposta inicial:** "Regra em dia" passou a valer também para padaria (Reforma), e entrou um sexto editorial, "Quem usa", para os depoimentos.
- **Peças sem ferramenta:** escala 6x1 e Reforma na padaria não prometem função, porque as ferramentas seguem sem confirmação.
- **Fotos retiradas ou ajustadas:** `conferindo-frasco` saiu (rótulo em inglês, marca do fabricante, caixas amarelas). `farmaceutica-prateleira` foi cortada antes da caixa com texto em inglês. `prateleiras-escuras` foi desfocada, como outra sessão fez com a mesma foto. Os arquivos originais não foram alterados.
- **Dado descartado:** "178% de buscas por fermentação natural", da ABIP, porque a página não diz período nem origem.
- **"Farmácia 2027" não é palavra-chave:** o Google sugere concurso e Enade. O ano entra junto do assunto.
- **Arquivo, não página publicada:** a simulação usa marca e aparência de Instagram, por isso ficou como arquivo para a Jessica decidir se compartilha. O repositório é público.
- **Commit só com os arquivos desta tarefa,** porque outras sessões estão mexendo na mesma pasta.

## Pendente

- **Jessica:** aprovar ou ajustar os 6 editoriais e as 18 pautas; fazer os mockups.
- **Produto:** responder a lista "Falta conferir antes de publicar" do fim da página, em especial relatório de vendas por hora para padaria e o que está pronto para padaria e Simples em 2027.
- **Jessica ou Tráfego:** conferir o volume dos termos no Planejador de Palavras-chave e ligar a opção de buscadores na conta do Instagram.
- **Aviso:** as legendas de `outputs/criativos/funcoes-prosystem/legendas.md` e os artigos a12 a a15 ainda têm "posologia" e "baixa de vendas". Não foram alterados.
- **Aviso:** as fotos `conferindo-frasco` e `farmaceutica-prateleira` seguem nos modelos de carrossel V2 e V3 do caderno.

## Próxima sessão

Com o aceite da Jessica, gravar os editoriais no caderno de marca (`docs/design/caderno-de-marca/project/`) e montar o calendário a partir de `feed_modelo.html`. Skills: `blog-post`, `ai-seo`, `relatorio-final`.
