<?php
/**
 * Template dos artigos do blog ProSystem (visual editorial).
 * Cabeçalho e rodapé vêm do tema/Elementor via get_header()/get_footer().
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();

while ( have_posts() ) :
	the_post();
	$psb_pid       = get_the_ID();
	$psb_url       = get_permalink();
	$psb_titulo    = get_the_title();
	$psb_cat       = psb_categoria( $psb_pid );
	$psb_whats     = psb_link_whats( psb_texto_whats( $psb_pid ) );
	$psb_cta       = json_decode( (string) get_post_meta( $psb_pid, '_psb_cta', true ), true );
	$psb_cta       = is_array( $psb_cta ) && count( $psb_cta ) === 3 ? $psb_cta : array( 'Fale com a ProSystem', 'PDV, emissão fiscal, estoque e financeiro no mesmo sistema, com suporte 24 horas.', 'Falar com a ProSystem' );
	$psb_blog_url  = get_permalink( (int) get_option( 'page_for_posts' ) );
	$psb_blog_url  = $psb_blog_url ? $psb_blog_url : home_url( '/blog/' );
	?>
<main id="content" class="psb-main">
	<?php echo psb_sprite(); // phpcs:ignore WordPress.Security.EscapeOutput ?>
	<div class="psb">
		<div class="progresso" aria-hidden="true"></div>

		<div class="cabeca">
			<nav class="trilha" aria-label="Você está em"><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Início</a> › <a href="<?php echo esc_url( $psb_blog_url ); ?>">Blog</a> › <span><?php echo esc_html( $psb_cat ? $psb_cat->name : 'Blog' ); ?></span></nav>
			<span class="chamada"><?php echo esc_html( psb_chamada( $psb_pid ) ); ?></span>
			<h1><?php echo esc_html( $psb_titulo ); ?></h1>
			<?php if ( has_excerpt() ) : ?>
				<p class="linha-fina"><?php echo esc_html( get_the_excerpt() ); ?></p>
			<?php endif; ?>
			<div class="assinatura">
				<span>Por <strong>ProSystem Sistemas</strong></span>
				<span>Atualizado em <time datetime="<?php echo esc_attr( get_the_modified_date( 'Y-m-d' ) ); ?>"><?php echo esc_html( get_the_modified_date( 'j M. Y' ) ); ?></time></span>
				<span><?php echo (int) psb_minutos( $psb_pid ); ?> min de leitura</span>
				<span class="assinatura__comp">
					<a href="<?php echo esc_url( 'https://wa.me/?text=' . rawurlencode( $psb_titulo . ' ' . $psb_url ) ); ?>" target="_blank" rel="noopener" aria-label="Compartilhar no WhatsApp"><svg width="17" height="17"><use href="#i-whats"/></svg></a>
					<a href="<?php echo esc_url( 'https://www.linkedin.com/sharing/share-offsite/?url=' . rawurlencode( $psb_url ) ); ?>" target="_blank" rel="noopener" aria-label="Compartilhar no LinkedIn"><svg width="15" height="15"><use href="#i-in"/></svg></a>
					<button type="button" data-copiar aria-label="Copiar link"><svg width="17" height="17"><use href="#i-link"/></svg></button>
				</span>
			</div>
		</div>

		<div class="grade">
			<article class="texto">
				<?php the_content(); ?>
			</article>

			<aside class="lateral" aria-label="Neste artigo">
				<?php $psb_toc = psb_sumario( $psb_pid ); ?>
				<?php if ( $psb_toc ) : ?>
					<nav class="sumario">
						<b>Neste artigo</b>
						<?php foreach ( $psb_toc as $psb_item ) : ?>
							<a href="#<?php echo esc_attr( $psb_item[0] ); ?>"><?php echo esc_html( $psb_item[1] ); ?></a>
						<?php endforeach; ?>
					</nav>
				<?php endif; ?>
				<div class="lateral__cta">
					<b><?php echo esc_html( $psb_cta[0] ); ?></b>
					<p><?php echo esc_html( $psb_cta[1] ); ?></p>
					<a class="botao botao--whats botao--peq" href="<?php echo esc_url( $psb_whats ); ?>" target="_blank" rel="noopener"><?php echo psb_icone_whats(); // phpcs:ignore ?><?php echo esc_html( $psb_cta[2] ); ?></a>
				</div>
			</aside>
		</div>

		<div class="depois">
			<div class="sobre">
				<img src="<?php echo esc_url( PSB_URL . 'assets/logo-icone.png' ); ?>" alt="" width="56" height="56">
				<div><strong>ProSystem Sistemas</strong><p>Há mais de 16 anos desenvolvendo sistemas de gestão para farmácias, drogarias, padarias e varejo. Este conteúdo foi produzido a partir da legislação e das fontes citadas.</p></div>
			</div>
			<?php $psb_rel = psb_relacionados( $psb_pid ); ?>
			<?php if ( $psb_rel ) : ?>
				<section class="leia">
					<h2>Leia também</h2>
					<div class="leia__grade">
						<?php foreach ( $psb_rel as $psb_rid ) : ?>
							<?php $psb_rc = psb_categoria( $psb_rid ); ?>
							<a href="<?php echo esc_url( get_permalink( $psb_rid ) ); ?>"><span><?php echo esc_html( $psb_rc ? $psb_rc->name : 'Blog' ); ?></span><strong><?php echo esc_html( get_the_title( $psb_rid ) ); ?></strong></a>
						<?php endforeach; ?>
					</div>
				</section>
			<?php endif; ?>
		</div>
	</div>
</main>
	<?php
endwhile;

get_footer();
