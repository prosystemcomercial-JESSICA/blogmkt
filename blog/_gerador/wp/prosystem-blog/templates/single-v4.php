<?php
/**
 * Artigo do blog no visual "blog profissional" (v3).
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();

while ( have_posts() ) :
	the_post();
	$psb_pid    = get_the_ID();
	$psb_url    = get_permalink();
	$psb_titulo = get_the_title();
	$psb_cat    = psb_categoria( $psb_pid );
	$psb_whats  = psb_link_whats( psb_texto_whats( $psb_pid ) );
	$psb_cta    = json_decode( (string) get_post_meta( $psb_pid, '_psb_cta', true ), true );
	$psb_cta    = is_array( $psb_cta ) && count( $psb_cta ) === 3 ? $psb_cta : array( 'Fale com a ProSystem', 'PDV, emissão fiscal, estoque e financeiro no mesmo sistema, com suporte 24 horas.', 'Falar com a ProSystem' );
	$psb_blog   = get_permalink( (int) get_option( 'page_for_posts' ) );
	$psb_toc    = psb_sumario( $psb_pid );
	$psb_rel    = psb_relacionados( $psb_pid );
	?>
<main id="content" class="psb-main">
	<div class="pblog v4">
		<?php echo psb_sprite(); // phpcs:ignore ?>
		<div class="progresso" aria-hidden="true"></div>

		<section class="topo-artigo">
			<div class="tec">
			<div class="wrap">
				<nav class="trilha" aria-label="Você está em"><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Início</a> › <a href="<?php echo esc_url( psb_link( $psb_blog ) ); ?>">Blog</a><?php if ( $psb_cat ) : ?> › <a href="<?php echo esc_url( psb_link( get_category_link( $psb_cat ) ) ); ?>"><?php echo esc_html( $psb_cat->name ); ?></a><?php endif; ?></nav>
				<div class="topo-artigo__txt">
					<div class="tags"><?php echo psb_tag_tema( $psb_pid ); // phpcs:ignore ?><span class="tag"><?php echo esc_html( psb_chamada( $psb_pid ) ); ?></span></div>
					<h1><?php echo esc_html( $psb_titulo ); ?></h1>
					<?php if ( has_excerpt() ) : ?>
						<p class="linha-fina"><?php echo esc_html( get_the_excerpt() ); ?></p>
					<?php endif; ?>
				</div>
				<div class="linha-autor">
					<div class="meta">
						<span class="autor"><img src="<?php echo esc_url( PSB_URL . 'assets/logo-icone.png' ); ?>" alt="" width="28" height="28">ProSystem Sistemas</span>
						<span class="ponto"></span>
						<time datetime="<?php echo esc_attr( get_the_date( 'Y-m-d' ) ); ?>"><?php echo esc_html( psb_data( $psb_pid ) ); ?></time>
						<span class="ponto"></span>
						<span><?php echo (int) psb_minutos( $psb_pid ); ?> min de leitura</span>
					</div>
					<div class="compartilhar">
						<span>Compartilhar</span>
						<a href="<?php echo esc_url( 'https://wa.me/?text=' . rawurlencode( $psb_titulo . ' ' . $psb_url ) ); ?>" target="_blank" rel="noopener" aria-label="Compartilhar no WhatsApp"><svg width="17" height="17"><use href="#i-whats"/></svg></a>
						<a href="<?php echo esc_url( 'https://www.linkedin.com/sharing/share-offsite/?url=' . rawurlencode( $psb_url ) ); ?>" target="_blank" rel="noopener" aria-label="Compartilhar no LinkedIn"><svg width="15" height="15"><use href="#i-in"/></svg></a>
						<button type="button" data-copiar aria-label="Copiar link"><svg width="17" height="17"><use href="#i-link"/></svg></button>
					</div>
				</div>

			</div>
			</div>
			<div class="wrap capa-wrap">
				<?php $psb_capa = psb_capa_html( $psb_pid, 'full', array( 'loading' => 'eager', 'fetchpriority' => 'high' ) ); ?>
				<?php if ( $psb_capa ) : ?>
					<figure class="capa"><?php echo $psb_capa; // phpcs:ignore ?></figure>
				<?php endif; ?>
			</div>
		</section>

		<div class="wrap">
			<div class="artigo-grid">
				<aside class="indice" aria-label="Sumário">
					<?php if ( $psb_toc ) : ?>
						<nav class="sumario">
							<b>Neste artigo</b>
							<?php foreach ( $psb_toc as $psb_item ) : ?>
								<a href="#<?php echo esc_attr( $psb_item[0] ); ?>"><?php echo esc_html( $psb_item[1] ); ?></a>
							<?php endforeach; ?>
						</nav>
					<?php endif; ?>
				</aside>
				<article class="texto">
					<?php the_content(); ?>
				</article>

				<aside class="lado-artigo" aria-label="Neste artigo">
					<?php if ( $psb_toc ) : ?>
						<nav class="sumario">
							<b>Neste artigo</b>
							<?php foreach ( $psb_toc as $psb_item ) : ?>
								<a href="#<?php echo esc_attr( $psb_item[0] ); ?>"><?php echo esc_html( $psb_item[1] ); ?></a>
							<?php endforeach; ?>
						</nav>
					<?php endif; ?>
					<div class="caixa caixa--marca">
						<img class="logo" src="<?php echo esc_url( PSB_URL . 'assets/logo-h.png' ); ?>" alt="ProSystem Sistemas" width="182" height="26">
						<h3><?php echo esc_html( $psb_cta[0] ); ?></h3>
						<p><?php echo esc_html( $psb_cta[1] ); ?></p>
						<a class="btn btn--whats btn--bloco" href="<?php echo esc_url( $psb_whats ); ?>" target="_blank" rel="noopener"><?php echo psb_icone_whats(); // phpcs:ignore ?><?php echo esc_html( $psb_cta[2] ); ?></a>
					</div>
				</aside>
			</div>

			<div class="caixa-autor">
				<img src="<?php echo esc_url( PSB_URL . 'assets/logo-icone.png' ); ?>" alt="" width="64" height="64">
				<div><b>ProSystem Sistemas</b><p>Há mais de 16 anos desenvolvendo sistemas de gestão para farmácias, drogarias, padarias e varejo. Este conteúdo foi produzido a partir da legislação e das fontes citadas no artigo.</p></div>
			</div>
		</div>

		<?php if ( $psb_rel ) : ?>
			<section class="relacionados">
				<div class="wrap">
					<div class="secao-titulo"><h2>Continue lendo</h2><small><a href="<?php echo esc_url( psb_link( $psb_blog ) ); ?>">Ver todos os artigos</a></small></div>
					<ul class="cards">
						<?php
						foreach ( $psb_rel as $psb_rid ) {
							echo psb_card4( $psb_rid ); // phpcs:ignore
						}
						?>
					</ul>
				</div>
			</section>
		<?php endif; ?>

		<div class="wrap fim-artigo">
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
	<?php
endwhile;

get_footer();
