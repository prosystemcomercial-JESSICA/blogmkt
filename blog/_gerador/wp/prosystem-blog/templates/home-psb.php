<?php
/**
 * Página do blog (lista de artigos) no visual editorial.
 * Só é usada com a opção psb_blog_home = 1 ou em pré-visualização (?psb_preview=1) para administradores.
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$psb_status = psb_previa_home() ? array( 'publish', 'draft', 'pending', 'future' ) : array( 'publish' );
$psb_posts  = get_posts(
	array(
		'post_type'     => 'post',
		'post_status'   => $psb_status,
		'numberposts'   => 60,
		'category_name' => implode( ',', psb_categorias() ),
		'orderby'       => 'date',
		'order'         => 'DESC',
	)
);

// Ordem: posts sem _psb_ordem (os novos) primeiro, do mais recente ao mais antigo; depois os da pauta, pela ordem definida.
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

// Destaque: o post marcado com _psb_destaque; se não houver, o mais recente.
$psb_destaque = null;
foreach ( $psb_posts as $psb_p ) {
	if ( get_post_meta( $psb_p->ID, '_psb_destaque', true ) ) {
		$psb_destaque = $psb_p;
		break;
	}
}
if ( ! $psb_destaque && $psb_posts ) {
	$psb_destaque = $psb_posts[0];
}
$psb_resto = array_filter(
	$psb_posts,
	function ( $psb_p ) use ( $psb_destaque ) {
		return ! $psb_destaque || $psb_p->ID !== $psb_destaque->ID;
	}
);

$psb_whats = psb_link_whats( 'Olá! Vim pelo blog da ProSystem e quero falar com um especialista.' );

/** Monta o link do post (rascunhos usam o link de pré-visualização). */
$psb_link = function ( $psb_p ) {
	return 'publish' === $psb_p->post_status ? get_permalink( $psb_p ) : get_preview_post_link( $psb_p );
};

get_header();
?>
<main id="content" class="psb-main">
	<?php echo psb_sprite(); // phpcs:ignore ?>
	<div class="psb-home">
		<section class="abre">
			<span class="chamada">Blog ProSystem</span>
			<h1>Gestão, fiscal e rotina para farmácias, drogarias e padarias</h1>
			<p>Mudanças de lei explicadas sem juridiquês, contas que você pode fazer na hora e práticas que reduzem perda no balcão e na produção.</p>
		</section>

		<?php if ( $psb_destaque ) : ?>
			<?php $psb_rotulo = get_post_meta( $psb_destaque->ID, '_psb_rotulo', true ); ?>
			<section class="destaque" aria-label="Em destaque">
				<a href="<?php echo esc_url( $psb_link( $psb_destaque ) ); ?>">
					<?php echo get_the_post_thumbnail( $psb_destaque, 'large' ); ?>
					<div>
						<?php if ( $psb_rotulo ) : ?>
							<span class="rotulo"><?php echo esc_html( $psb_rotulo ); ?></span>
						<?php endif; ?>
						<span class="chamada"><?php echo esc_html( psb_chamada( $psb_destaque->ID ) ); ?></span>
						<h2><?php echo esc_html( get_the_title( $psb_destaque ) ); ?></h2>
						<p><?php echo esc_html( get_the_excerpt( $psb_destaque ) ); ?></p>
						<span class="card__meta"><?php echo (int) psb_minutos( $psb_destaque->ID ); ?> min de leitura</span>
					</div>
				</a>
			</section>
		<?php endif; ?>

		<?php if ( $psb_resto ) : ?>
		<div class="filtro" role="group" aria-label="Filtrar por tema">
			<span>Temas</span>
			<button type="button" data-f="todos" aria-pressed="true">Todos</button>
			<?php foreach ( psb_categorias() as $psb_slug ) : ?>
				<?php $psb_t = get_category_by_slug( $psb_slug ); ?>
				<?php if ( $psb_t ) : ?>
					<button type="button" data-f="<?php echo esc_attr( $psb_slug ); ?>" aria-pressed="false"><?php echo esc_html( $psb_t->name ); ?></button>
				<?php endif; ?>
			<?php endforeach; ?>
		</div>

		<ul class="grade">
			<?php foreach ( $psb_resto as $psb_p ) : ?>
				<?php $psb_c = psb_categoria( $psb_p->ID ); ?>
				<li class="card" data-cat="<?php echo esc_attr( $psb_c ? $psb_c->slug : '' ); ?>">
					<a href="<?php echo esc_url( $psb_link( $psb_p ) ); ?>">
						<?php echo get_the_post_thumbnail( $psb_p, 'medium_large', array( 'loading' => 'lazy' ) ); ?>
						<span class="card__cat"><?php echo esc_html( psb_chamada( $psb_p->ID ) ); ?></span>
						<h3><?php echo esc_html( get_the_title( $psb_p ) ); ?></h3>
						<p><?php echo esc_html( get_the_excerpt( $psb_p ) ); ?></p>
						<span class="card__meta"><?php echo (int) psb_minutos( $psb_p->ID ); ?> min de leitura</span>
					</a>
				</li>
			<?php endforeach; ?>
		</ul>
		<?php endif; ?>

		<section class="faixa">
			<div>
				<b>Quer ver isso funcionando na sua loja?</b>
				<p>Sistema de gestão para farmácias, drogarias e padarias, com PDV, emissão fiscal, estoque e financeiro no mesmo lugar e suporte 24 horas.</p>
			</div>
			<a class="botao" href="<?php echo esc_url( $psb_whats ); ?>" target="_blank" rel="noopener"><?php echo psb_icone_whats(); // phpcs:ignore ?>Falar com um especialista</a>
		</section>
	</div>
</main>
<script>
(function () {
	var botoes = document.querySelectorAll('.psb-home .filtro button');
	var cards = document.querySelectorAll('.psb-home .card');
	botoes.forEach(function (b) {
		b.addEventListener('click', function () {
			var f = b.getAttribute('data-f');
			botoes.forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
			cards.forEach(function (c) { c.hidden = !(f === 'todos' || c.getAttribute('data-cat') === f); });
		});
	});
})();
</script>
<?php
get_footer();
