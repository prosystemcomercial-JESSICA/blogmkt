# Padrões de produção

## Antes de começar

1. Defina o segmento: padaria ou demais.
2. Escolha o tipo de post em [Tipos de posts](tipos-de-posts.md).
3. Se for carrossel, escolha V2 ou V3. A produção inteira sai nesse modelo.
4. Escreva o texto com no máximo 3 blocos por peça.
5. Separe fotos ligadas ao assunto de cada página.

## Nome e versão dos arquivos

- Cada peça leva a versão no nome: `canetas-emagrecedoras-v1`, depois `-v2`, `-v3`.
- A primeira versão fica guardada como referência. Ajuste vira nova versão.
- Carrossel: `carrossel-<segmento>-<tema>-v<versão>-<página>.png`.

## Onde cada coisa fica

| O quê | Onde |
|---|---|
| Este caderno | `docs/design/caderno-de-marca/project/` |
| Guia com o estudo do feed e do site | `docs/design/guia-de-estilos/index.html` |
| Modelos de carrossel V1 | `outputs/criativos/modelos/carrossel/gerar.js` |
| Modelos de carrossel V2 e V3 | `outputs/criativos/modelos/carrossel/gerar-variacoes.js` |
| Fotos dos modelos e créditos | `outputs/criativos/modelos/carrossel/fotos/` |
| Peças de tendência | `outputs/criativos/<segmento>/tendencia/` |
| Bancos de imagens | `banco imagens/padaria/` e `banco imagens/farma/` |
| Mockups prontos, em notebook e desktop | `banco imagens/mockups-prosystem/<ambiente>/` |
| Telas do sistema, já recortadas | `banco imagens/telas-prosystem/` |
| Gerador de mockups e carrosséis com telas | `outputs/criativos/funcoes-prosystem/gerar.js` |
| Design system lido pela squad | `squads/@squad-design/criativos-estaticos/design-system.md` |

## Como gerar

As peças são feitas em HTML e CSS e exportadas em PNG de 1080×1350 com Puppeteer.

```
node outputs/criativos/modelos/carrossel/gerar-variacoes.js
```

Para um carrossel novo, altere os textos e as fotos no início do gerador, em `carrosseis`, `farmaciaItens` e `padariaItens`. Os estilos das páginas já estão prontos.

## Conferência antes de entregar

**Marca**
- Cor certa para o segmento. Padaria sem azul.
- Nada de amarelo ou âmbar.
- Título com peso fino e extrabold.
- Losangos fora da área de texto e longe do logo.

**Texto**
- Sem erro de português.
- No máximo 3 blocos por peça.
- Texto pequeno na parte escura do degradê.
- Número ou prova com fonte confirmada.

**Fotos**
- Ligadas ao assunto da página.
- Sem texto em inglês, conferido com a foto ampliada.
- Sem celular nem tablet.
- Tela de sistema só em mockup de notebook ou desktop, com tela real, sem CPF visível nem marca de medicamento.
- Pessoas conforme a regra do caderno.
- Licença verificada e crédito anotado.

**Carrossel**
- Todas as páginas no mesmo modelo.
- Contador de página presente nas páginas 2 a 5.
- Conferido no tamanho real e reduzido, como aparece no celular.

**Entrega**
- `git status` revisado, commit em português e push para `origin main`.
- Nenhuma chave, token ou senha no commit.

## Antes de publicar

- Depoimento só com cliente real e autorização.
- Meme só com imagem própria ou com direito de uso.
- Item de produto citado na peça precisa estar confirmado pelo Comercial.
