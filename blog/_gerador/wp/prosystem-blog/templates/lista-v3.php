<?php
/**
 * Página do blog, páginas de tema e busca no visual "blog profissional" (v3).
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$psb_editor = current_user_can( 'edit_posts' );
$psb_status = ( $psb_editor && ( isset( $_GET['psb_v3'] ) || psb_previa_home() ) ) ? array( 'publish', 'draft', 'pending', 'future' ) : array( 'publish' ); // phpcs:ignore
$psb_args   = array(
	'post_type'     => 'post',
	'post_status'   => $psb_status,
	'numberposts'   => 60,
	'category_name' => implode( ',', psb_categorias() ),
	'orderby'       => 'date',
	'order'         => 'DESC',
);

$psb_eh_home  = is_home();
$psb_eh_tema  = is_category();
$psb_eh_busca = is_search();
$psb_tema     = $psb_eh_tema ? get_queried_object() : null;
if ( $psb_tema ) {
	$psb_args['category_name'] = $psb_tema->slug;
}
if ( $psb_eh_busca ) {
	$psb_args['s'] = get_search_query();
}
$psb_posts = get_posts( $psb_args );

// Ordem: posts novos (sem _psb_ordem) primeiro, do mais recente; depois a ordem da pauta.
usort(
	$psb_posts,
	function ( $a, $b ) {
		$oa = (int) get_post_meta( $a->ID, '_psb_ordem', true );
		$ob = (int) get_post_meta( $b->ID, '_psb_ordem', true );
		if ( ! $oa || ! $ob ) {
			if ( $oa === $ob ) {
				return strcmp( $b->post_date, $a->post_date );
			}
			return $oa ? 1 : -1;
		}
		return $oa - $ob;
	}
);

$psb_destaque = null;
if ( $psb_eh_home ) {
	foreach ( $psb_posts as $psb_p ) {
		if ( get_post_meta( $psb_p->ID, '_psb_destaque', true ) ) {
			$psb_destaque = $psb_p;
			break;
		}
	}
	if ( ! $psb_destaque && $psb_posts ) {
		$psb_destaque = $psb_posts[0];
	}
}
$psb_resto = array_values(
	array_filter(
		$psb_posts,
		function ( $p ) use ( $psb_destaque ) {
			return ! $psb_destaque || $p->ID !== $psb_destaque->ID;
		}
	)
);

// Contagem por tema (só publicados)
$psb_contagem = array();
foreach ( psb_categorias() as $psb_slug ) {
	$psb_t = get_category_by_slug( $psb_slug );
	if ( $psb_t ) {
		$psb_contagem[ $psb_slug ] = array( $psb_t, (int) $psb_t->count );
	}
}
$psb_recentes = get_posts(
	array(
		'post_type'     => 'post',
		'post_status'   => 'publish',
		'numberposts'   => 4,
		'category_name' => implode( ',', psb_categorias() ),
	)
);

$psb_blog_url = get_permalink( (int) get_option( 'page_for_posts' ) );
$psb_whats    = psb_link_whats( 'Olá! Vim pelo blog da ProSystem e quero falar com um especialista.' );

if ( $psb_tema ) {
	$psb_titulo = $psb_tema->name;
	$psb_desc   = 'Artigos do blog ProSystem sobre ' . mb_strtolower( $psb_tema->name ) . ': gestão, legislação e rotina, com exemplos práticos.';
} elseif ( $psb_eh_busca ) {
	$psb_titulo = 'Resultados para "' . get_search_query() . '"';
	$psb_desc   = count( $psb_posts ) . ' artigo(s) encontrado(s).';
} else {
	$psb_titulo = 'Gestão, fiscal e rotina para farmácias, drogarias e padarias';
	$psb_desc   = 'Mudanças de lei explicadas sem juridiquês, contas que você pode fazer na hora e práticas que reduzem perda no balcão e na produção.';
}

get_header();
?>
<main id="content" class="psb-main">
	<div class="pblog">
		<?php echo psb_sprite(); // phpcs:ignore ?>

		<section class="topo-blog">
			<div class="wrap topo-blog__grid">
				<div>
					<?php if ( $psb_eh_home ) : ?>
						<span class="sobrelinha">Blog ProSystem</span>
					<?php else : ?>
						<nav class="trilha" aria-label="Você está em"><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Início</a> › <a href="<?php echo esc_url( psb_link( $psb_blog_url ) ); ?>">Blog</a> › <span><?php echo esc_html( $psb_tema ? $psb_tema->name : 'Busca' ); ?></span></nav>
					<?php endif; ?>
					<h1><?php echo esc_html( $psb_titulo ); ?></h1>
					<p><?php echo esc_html( $psb_desc ); ?></p>
				</div>
				<form class="busca" role="search" method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>">
					<input type="search" name="s" placeholder="Buscar no blog: SNGPC, margem, validade..." aria-label="Buscar no blog" value="<?php echo esc_attr( get_search_query() ); ?>">
					<?php if ( isset( $_GET['psb_v3'] ) ) : // phpcs:ignore ?>
						<input type="hidden" name="psb_v3" value="1">
					<?php endif; ?>
					<button type="submit">Buscar</button>
				</form>
			</div>
			<?php if ( $psb_eh_home ) : ?>
				<div class="wrap">
					<div class="temas" role="group" aria-label="Filtrar por tema">
						<button type="button" data-f="todos" aria-pressed="true">Todos<span><?php echo count( $psb_posts ); ?></span></button>
						<?php foreach ( $psb_contagem as $psb_slug => $psb_c ) : ?>
							<button type="button" data-f="<?php echo esc_attr( $psb_slug ); ?>" aria-pressed="false"><?php echo esc_html( $psb_c[0]->name ); ?><span><?php echo (int) $psb_c[1]; ?></span></button>
						<?php endforeach; ?>
					</div>
				</div>
			<?php endif; ?>
		</section>

		<div class="wrap corpo-blog">
			<div class="corpo-blog__grid">
				<div>
					<?php if ( $psb_destaque ) : ?>
						<?php $psb_rotulo = get_post_meta( $psb_destaque->ID, '_psb_rotulo', true ); ?>
						<?php $psb_dlink = psb_link_post( $psb_destaque ); ?>
						<article class="destaque" data-cat="<?php echo esc_attr( ( $c = psb_categoria( $psb_destaque->ID ) ) ? $c->slug : '' ); ?>">
							<a class="destaque__img" href="<?php echo esc_url( $psb_dlink ); ?>" tabindex="-1" aria-hidden="true"><?php echo psb_capa_html( $psb_destaque->ID, 'large' ); // phpcs:ignore ?></a>
							<div class="destaque__txt">
								<div class="tags">
									<?php if ( $psb_rotulo ) : ?>
										<span class="tag tag--prazo"><?php echo esc_html( $psb_rotulo ); ?></span>
									<?php endif; ?>
									<?php echo psb_tag_tema( $psb_destaque->ID ); // phpcs:ignore ?>
								</div>
								<h2><a href="<?php echo esc_url( $psb_dlink ); ?>"><?php echo esc_html( get_the_title( $psb_destaque ) ); ?></a></h2>
								<p><?php echo esc_html( get_the_excerpt( $psb_destaque ) ); ?></p>
								<div class="meta"><span class="autor"><img src="<?php echo esc_url( PSB_URL . 'assets/logo-icone.png' ); ?>" alt="" width="28" height="28">ProSystem Sistemas</span><span class="ponto"></span><span><?php echo esc_html( psb_data( $psb_destaque->ID ) ); ?></span><span class="ponto"></span><span><?php echo (int) psb_minutos( $psb_destaque->ID ); ?> min de leitura</span></div>
							</div>
						</article>
					<?php endif; ?>

					<div class="secao-titulo">
						<h2><?php echo $psb_eh_home ? 'Artigos recentes' : 'Artigos'; ?></h2>
						<small><?php echo count( $psb_resto ); ?> artigo(s)</small>
					</div>
					<?php if ( $psb_resto ) : ?>
						<ul class="cards">
							<?php
							foreach ( $psb_resto as $psb_p ) {
								echo psb_card( $psb_p ); // phpcs:ignore
							}
							?>
						</ul>
					<?php else : ?>
						<p class="vazio">Nenhum artigo encontrado. Tente outra busca ou veja todos os artigos do <a href="<?php echo esc_url( psb_link( $psb_blog_url ) ); ?>">blog</a>.</p>
					<?php endif; ?>
				</div>

				<aside class="barra" aria-label="Sobre o blog">
					<div class="caixa caixa--marca">
						<img class="logo" src="<?php echo esc_url( PSB_URL . 'assets/logo-h.png' ); ?>" alt="ProSystem Sistemas" width="182" height="26">
						<h3>Sistema de gestão para farmácias, drogarias e padarias</h3>
						<p>PDV, emissão fiscal, estoque e financeiro no mesmo lugar, com suporte 24 horas.</p>
						<a class="btn btn--whats btn--bloco" href="<?php echo esc_url( $psb_whats ); ?>" target="_blank" rel="noopener"><?php echo psb_icone_whats(); // phpcs:ignore ?>Falar com um especialista</a>
					</div>
					<div class="caixa">
						<h3>Temas</h3>
						<ul class="lista-temas">
							<?php foreach ( $psb_contagem as $psb_slug => $psb_c ) : ?>
								<li><a href="<?php echo esc_url( psb_link( get_category_link( $psb_c[0] ) ) ); ?>"><?php echo esc_html( $psb_c[0]->name ); ?><span><?php echo (int) $psb_c[1]; ?></span></a></li>
							<?php endforeach; ?>
						</ul>
					</div>
					<?php if ( $psb_recentes ) : ?>
						<div class="caixa">
							<h3>Mais recentes</h3>
							<ul class="recentes">
								<?php foreach ( $psb_recentes as $psb_r ) : ?>
									<li><a href="<?php echo esc_url( psb_link_post( $psb_r ) ); ?>"><?php echo psb_capa_html( $psb_r->ID, 'thumbnail', array( 'loading' => 'lazy' ) ); // phpcs:ignore ?><b><?php echo esc_html( get_the_title( $psb_r ) ); ?></b></a></li>
								<?php endforeach; ?>
							</ul>
						</div>
					<?php endif; ?>
				</aside>
			</div>

			<section class="faixa-cta">
				<div>
					<h2>Quer ver isso funcionando na sua loja?</h2>
					<p>Converse com um especialista da ProSystem e veja PDV, emissão fiscal, estoque e financeiro trabalhando juntos na sua farmácia ou padaria.</p>
				</div>
				<div class="faixa-cta__botoes">
					<a class="btn btn--whats" href="<?php echo esc_url( $psb_whats ); ?>" target="_blank" rel="noopener"><?php echo psb_icone_whats(); // phpcs:ignore ?>Falar no WhatsApp</a>
					<a class="btn btn--claro" href="<?php echo esc_url( home_url( '/contato/' ) ); ?>">Pedir demonstração</a>
				</div>
			</section>
		</div>
	</div>
</main>
<?php if ( $psb_eh_home ) : ?>
<script>
(function () {
	var botoes = document.querySelectorAll('.pblog .temas button');
	var itens = document.querySelectorAll('.pblog .cards .card, .pblog .destaque');
	botoes.forEach(function (b) {
		b.addEventListener('click', function () {
			var f = b.getAttribute('data-f');
			botoes.forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
			itens.forEach(function (c) { c.hidden = !(f === 'todos' || c.getAttribute('data-cat') === f); });
		});
	});
})();
</script>
<?php endif; ?>
<?php
get_footer();
