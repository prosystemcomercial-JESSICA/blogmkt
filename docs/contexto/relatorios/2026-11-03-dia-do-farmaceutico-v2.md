# Dia do Farmacêutico (20/01): peça v2 de homenagem

## Pedido
A Jessica achou a v1 (frase azul em fundo branco) simples demais: "é uma homenagem para o farmacêutico que é um dos principais clientes, precisa ser melhor, mais especial".

## Feito
- Novo layout `homenagem` em `outputs/criativos/nov-dez/gerar.js`: degradê escuro da marca, foto da pessoa homenageada dentro de um losango grande com contorno ciano, pílula laranja com a data na ponta de baixo do losango, título fino + extrabold, apoio e assinatura "ProSystem Sistemas".
- Entrada de 20/01 em `outputs/criativos/nov-dez/pecas-dados.js` trocada de `frase-dia-do-farmaceutico-v1` para `farmacia-dia-do-farmaceutico-v2`. Essa alteração entrou no commit 5df7b5f, feito por outra sessão em paralelo.
- Texto novo: "Por trás de cada receita, **tem alguém cuidando de gente.**" / "A todos os farmacêuticos, o nosso obrigado." / pílula "20 de janeiro · Dia do Farmacêutico". Legenda reescrita com agradecimento especial aos clientes ("aos que estão com a gente no dia a dia").
- Seção de 20/01 em `outputs/criativos/nov-dez/legendas.md` atualizada à mão. Gerar tudo de novo regravaria as outras peças.
- PNG: `outputs/criativos/nov-dez/pecas/farmacia-dia-do-farmaceutico-v2.png`. A v1 continua guardada em `pecas/frase-dia-do-farmaceutico-v1.png`.

## Verificado
- `node outputs/criativos/nov-dez/gerar.js farmacia-dia-do-farmaceutico-v2` gerou a peça e não acusou estouro.
- PNG conferido visualmente: o contorno do losango ficou longe do logo, depois de um ajuste.
- Não verificado: a peça ainda não foi vista reduzida, no tamanho do celular.

## Decisões e porquês
- Foto `farmaceutica-recorte` (farmacêutica sorrindo, em ação na prateleira): segue a regra de aparência brasileira e de farmacêutico em ação. Foram descartadas `banco imagens/farma/1.jpg` (tem tablet e baixa resolução) e `farmaceutica-pressao`, que já está na capa do carrossel de 19/01.
- O losango é o elemento mais reconhecível da marca, por isso emoldura a homenagem. Não foi usado ícone de farmácia (taça), porque o caderno não permite ícone novo sem pedir.
- A frase segue o padrão da homenagem da padaria ("Por trás de cada fornada...").
- Segue `semAno` como a v1: homenagem sem citar 2027 e sem CTA.

## Pendente
- Jessica: aprovar a v2. Depois disso, marcar `travada: true`.
- O planejamento em Claude Docs ainda cita a v1 de 20/01. Não foi alterado.
- O layout `homenagem` ainda não está em `docs/design/caderno-de-marca/project/tipos-de-posts.md`. Registrar lá se for aprovado.

## Próxima sessão
Mostrar o PNG à Jessica. Se aprovado, travar a peça e registrar o tipo "Homenagem" no caderno. Ler o caderno de marca antes de mexer.

## Atualização (mesmo dia): troca da foto

- **Pedido:** "troque a foto, esta repetindo demais o personagem". A `farmaceutica-recorte` aparece em 6 peças.
- **Feito:** entrou a foto nova `outputs/criativos/nov-dez/fotos/farmaceutica-receita.jpg`: farmacêutica escrevendo uma receita no balcão de uma farmácia distrital de Porto Alegre. É um recorte do original do Commons. A licença permite uso comercial e exige o crédito "Cristine Rochol / PMPA", que foi para a legenda e para `fotos/CREDITOS.md`. O recorte deixa de fora o aviso "Farmácia Distrital / Cartão SUS", para a farmácia não parecer pública.
- **Descartadas:** as outras fotos do banco (uma tem tablet, outra mostra o senhor ainda em avaliação no caderno, outra tem rótulo em inglês). Também ficaram de fora o Unsplash (só foto paga para o tema), o Pexels (pessoas sem aparência brasileira) e a série da Agência Senado (marcas à mostra e nenhum farmacêutico em destaque).
- **Verificado:** a peça foi gerada sem estouro e conferida visualmente. `pecas-dados.js` carrega no node. Uma edição intermediária quebrou a string da legenda e foi corrigida neste commit.
- **Pendente:** não há autorização da pessoa fotografada. A licença cobre a foto, não o direito de imagem. Se a Jessica quiser segurança total, a alternativa é uma foto própria de cliente.
