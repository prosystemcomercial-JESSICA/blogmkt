<?php
/**
 * Plugin Name: ProSystem Blog
 * Description: Visual editorial do blog ProSystem (artigos e página do blog) feito por código, sem depender dos modelos do Elementor. Desative para voltar aos modelos do Elementor.
 * Version: 1.2.1
 * Author: ProSystem Sistemas
 * Text Domain: prosystem-blog
 *
 * Como funciona:
 * - Posts nas categorias farmacia, padaria ou gestao usam templates/single-psb.php.
 * - A página de posts (/blog/) usa templates/home-psb.php somente quando a opção psb_blog_home = 1,
 *   ou para administradores com ?psb_preview=1 (pré-visualização antes de ligar).
 * - Cabeçalho e rodapé continuam os do site (get_header/get_footer do tema).
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'PSB_VERSAO', '1.2.1' );
define( 'PSB_URL', plugin_dir_url( __FILE__ ) );
define( 'PSB_DIR', plugin_dir_path( __FILE__ ) );
define( 'PSB_WHATS', '5527997521370' );

/** Categorias que recebem o visual novo. */
function psb_categorias() {
	return array( 'farmacia', 'padaria', 'gestao' );
}

/** O post usa o visual novo? */
function psb_eh_post_psb( $post = null ) {
	$post = get_post( $post );
	return $post && 'post' === $post->post_type && has_category( psb_categorias(), $post );
}

/** Pré-visualização da página do blog para quem pode editar. */
function psb_previa_home() {
	return isset( $_GET['psb_preview'] ) && current_user_can( 'edit_posts' ); // phpcs:ignore WordPress.Security.NonceVerification
}

/** A página do blog usa o visual novo? */
function psb_home_ativa() {
	return is_home() && ( '1' === get_option( 'psb_blog_home', '0' ) || psb_previa_home() );
}

/**
 * Visual v3 ("blog profissional"): ligado pela opção psb_visual = 3,
 * ou em pré-visualização para quem pode editar (?psb_v3=1).
 */
function psb_v3() {
	return '' !== psb_versao();
}

/**
 * Versão do visual em uso: '4' (tecnológico, largura fluida), '3' (blog profissional) ou '' (anterior).
 * Administradores podem pré-visualizar com ?psb_v4=1 ou ?psb_v3=1.
 */
function psb_versao() {
	static $v = null;
	if ( null !== $v ) {
		return $v;
	}
	$editor = function_exists( 'current_user_can' ) && current_user_can( 'edit_posts' );
	if ( $editor && isset( $_GET['psb_v4'] ) ) { // phpcs:ignore WordPress.Security.NonceVerification
		$v = '4';
	} elseif ( $editor && isset( $_GET['psb_v3'] ) ) { // phpcs:ignore WordPress.Security.NonceVerification
		$v = '3';
	} else {
		$opt = (string) get_option( 'psb_visual', '' );
		$v   = in_array( $opt, array( '3', '4' ), true ) ? $opt : '';
	}
	return $v;
}

/** Em pré-visualização, mantém o parâmetro nos links internos. */
function psb_link( $url ) {
	if ( ! current_user_can( 'edit_posts' ) ) {
		return $url;
	}
	foreach ( array( 'psb_v4', 'psb_v3' ) as $param ) {
		if ( isset( $_GET[ $param ] ) ) { // phpcs:ignore WordPress.Security.NonceVerification
			return add_query_arg( $param, '1', $url );
		}
	}
	return $url;
}

/** Ícones finos por tema (traço simples, cor do texto). */
function psb_icone_tema( $slug ) {
	$caminhos = array(
		'farmacia' => '<path d="M10.5 20.5l-7-7a4.95 4.95 0 1 1 7-7l7 7a4.95 4.95 0 1 1-7 7z"/><path d="M8.5 8.5l7 7"/>',
		'padaria'  => '<path d="M5 11a7 4.5 0 0 1 14 0v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"/><path d="M9 9.5v3M12 9v3M15 9.5v3"/>',
		'gestao'   => '<path d="M3 20h18"/><path d="M6 16v-5M11 16V7M16 16v-8M21 4l-5 4-5-3-5 4"/>',
		'todos'    => '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
	);
	if ( ! isset( $caminhos[ $slug ] ) ) {
		return '';
	}
	return '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' . $caminhos[ $slug ] . '</svg>';
}

function psb_icone( $nome ) {
	$c = array(
		'busca'      => '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
		'calendario' => '<rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
		'relogio'    => '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
		'seta'       => '<path d="M5 12h14M13 6l6 6-6 6"/>',
	);
	return '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' . $c[ $nome ] . '</svg>';
}

/** Listagens no visual v3: página do blog, temas do blog novo e busca. */
function psb_lista_v3() {
	if ( ! psb_v3() ) {
		return false;
	}
	return psb_home_ativa() || is_category( psb_categorias() ) || ( is_search() && ! is_admin() );
}

/* ---------- templates ---------- */

add_filter(
	'template_include',
	function ( $template ) {
		if ( is_singular( 'post' ) && psb_eh_post_psb() ) {
			$arquivo = array( '4' => 'single-v4.php', '3' => 'single-v3.php' );
			return PSB_DIR . 'templates/' . ( $arquivo[ psb_versao() ] ?? 'single-psb.php' );
		}
		if ( psb_lista_v3() ) {
			return PSB_DIR . 'templates/' . ( '4' === psb_versao() ? 'lista-v4.php' : 'lista-v3.php' );
		}
		if ( psb_home_ativa() ) {
			return PSB_DIR . 'templates/home-psb.php';
		}
		return $template;
	},
	99
);

// Garante que os modelos "Post individual" e "Arquivo" do Elementor não sejam aplicados ao blog novo.
add_filter(
	'elementor/theme/get_location_templates/template_id',
	function ( $template_id, $location = '' ) {
		if ( 'single' === $location && is_singular( 'post' ) && psb_eh_post_psb() ) {
			return 0;
		}
		if ( 'archive' === $location && ( psb_home_ativa() || psb_lista_v3() ) ) {
			return 0;
		}
		return $template_id;
	},
	10,
	2
);

/* ---------- estilos e scripts ---------- */

add_action(
	'wp_enqueue_scripts',
	function () {
		$single = is_singular( 'post' ) && psb_eh_post_psb();
		$home   = psb_home_ativa();
		$lista3 = psb_lista_v3();
		if ( ! $single && ! $home && ! $lista3 ) {
			return;
		}
		if ( psb_v3() ) {
			wp_enqueue_style( 'psb-fontes3', 'https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Source+Sans+3:wght@400;600;700&family=JetBrains+Mono:wght@500;600&display=swap', array(), null );
			wp_enqueue_style( 'psb-blog', PSB_URL . 'assets/blog.css', array(), PSB_VERSAO );
			if ( '4' === psb_versao() ) {
				wp_enqueue_style( 'psb-blog4', PSB_URL . 'assets/blog4.css', array( 'psb-blog' ), PSB_VERSAO );
			}
			if ( $single ) {
				wp_enqueue_script( 'psb', PSB_URL . 'assets/psb.js', array(), PSB_VERSAO, true );
			}
			return;
		}
		wp_enqueue_style( 'psb-fontes', 'https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;600;700&family=Source+Serif+4:opsz,wght@8..60,600;8..60,700&display=swap', array(), null );
		if ( $single ) {
			wp_enqueue_style( 'psb', PSB_URL . 'assets/psb.css', array(), PSB_VERSAO );
			wp_enqueue_script( 'psb', PSB_URL . 'assets/psb.js', array(), PSB_VERSAO, true );
		}
		if ( $home ) {
			wp_enqueue_style( 'psb-home', PSB_URL . 'assets/psb-home.css', array(), PSB_VERSAO );
		}
	},
	999
);

/** Marca as páginas do blog novo (v3) para ajustes finos fora do conteúdo, como a margem do cabeçalho do site. */
add_filter(
	'body_class',
	function ( $classes ) {
		if ( psb_v3() && ( ( is_singular( 'post' ) && psb_eh_post_psb() ) || psb_lista_v3() ) ) {
			$classes[] = 'pblog-ativo';
		}
		return $classes;
	}
);

/* ---------- auxiliares do visual v3 ---------- */

/** Foto de capa: a foto do blog (_psb_capa) ou, se não houver, a imagem destacada. */
function psb_capa_html( $post_id, $tamanho = 'large', $attrs = array() ) {
	$capa = (int) get_post_meta( $post_id, '_psb_capa', true );
	if ( ! $capa ) {
		$capa = (int) get_post_thumbnail_id( $post_id );
	}
	if ( ! $capa ) {
		return '';
	}
	$attrs = array_merge( array( 'alt' => '' ), $attrs );
	return wp_get_attachment_image( $capa, $tamanho, false, $attrs );
}

function psb_tag_tema( $post_id ) {
	$cat = psb_categoria( $post_id );
	if ( ! $cat ) {
		return '';
	}
	return '<span class="tag tag--' . esc_attr( $cat->slug ) . '">' . esc_html( $cat->name ) . '</span>';
}

function psb_data( $post_id ) {
	return get_the_date( 'j \d\e F \d\e Y', $post_id );
}

/** Link do post (rascunhos usam o link de pré-visualização). */
function psb_link_post( $p ) {
	$p = get_post( $p );
	return psb_link( 'publish' === $p->post_status ? get_permalink( $p ) : get_preview_post_link( $p ) );
}

/** Cartão de artigo do visual v4: etiqueta sobre a foto, rodapé com data, tempo e "Ler". */
function psb_card4( $p ) {
	$p    = get_post( $p );
	$cat  = psb_categoria( $p->ID );
	$link = psb_link_post( $p );
	ob_start();
	?>
	<li class="card" data-cat="<?php echo esc_attr( $cat ? $cat->slug : '' ); ?>">
		<a class="card__img" href="<?php echo esc_url( $link ); ?>" tabindex="-1" aria-hidden="true">
			<?php echo psb_capa_html( $p->ID, 'medium_large', array( 'loading' => 'lazy' ) ); // phpcs:ignore ?>
			<?php if ( $cat ) : ?>
				<span class="tag"><?php echo psb_icone_tema( $cat->slug ); // phpcs:ignore ?>&nbsp;<?php echo esc_html( $cat->name ); ?></span>
			<?php endif; ?>
		</a>
		<div class="card__txt">
			<h3><a href="<?php echo esc_url( $link ); ?>"><?php echo esc_html( get_the_title( $p ) ); ?></a></h3>
			<p><?php echo esc_html( get_the_excerpt( $p ) ); ?></p>
			<div class="meta">
				<span class="item"><?php echo psb_icone( 'calendario' ); // phpcs:ignore ?><?php echo esc_html( get_the_date( 'd/m/Y', $p ) ); ?></span>
				<span class="item"><?php echo psb_icone( 'relogio' ); // phpcs:ignore ?><?php echo (int) psb_minutos( $p->ID ); ?> min</span>
				<span class="ler" aria-hidden="true">Ler <?php echo psb_icone( 'seta' ); // phpcs:ignore ?></span>
			</div>
		</div>
	</li>
	<?php
	return ob_get_clean();
}

/** Cartão de artigo usado na página do blog e nos relacionados. */
function psb_card( $p ) {
	$p    = get_post( $p );
	$cat  = psb_categoria( $p->ID );
	$link = psb_link_post( $p );
	ob_start();
	?>
	<li class="card" data-cat="<?php echo esc_attr( $cat ? $cat->slug : '' ); ?>">
		<a class="card__img" href="<?php echo esc_url( $link ); ?>" tabindex="-1" aria-hidden="true"><?php echo psb_capa_html( $p->ID, 'medium_large', array( 'loading' => 'lazy' ) ); // phpcs:ignore ?></a>
		<div class="card__txt">
			<div class="tags"><?php echo psb_tag_tema( $p->ID ); // phpcs:ignore ?></div>
			<h3><a href="<?php echo esc_url( $link ); ?>"><?php echo esc_html( get_the_title( $p ) ); ?></a></h3>
			<p><?php echo esc_html( get_the_excerpt( $p ) ); ?></p>
			<div class="meta"><span><?php echo esc_html( psb_data( $p->ID ) ); ?></span><span class="ponto"></span><span><?php echo (int) psb_minutos( $p->ID ); ?> min de leitura</span></div>
		</div>
	</li>
	<?php
	return ob_get_clean();
}

/* ---------- dados estruturados de perguntas frequentes ---------- */

add_action(
	'wp_head',
	function () {
		if ( ! is_singular( 'post' ) || ! psb_eh_post_psb() ) {
			return;
		}
		$faq = json_decode( (string) get_post_meta( get_the_ID(), '_psb_faq', true ), true );
		if ( empty( $faq ) || ! is_array( $faq ) ) {
			return;
		}
		$itens = array();
		foreach ( $faq as $par ) {
			$itens[] = array(
				'@type'          => 'Question',
				'name'           => $par[0],
				'acceptedAnswer' => array(
					'@type' => 'Answer',
					'text'  => $par[1],
				),
			);
		}
		$dados = array(
			'@context'   => 'https://schema.org',
			'@type'      => 'FAQPage',
			'mainEntity' => $itens,
		);
		echo "\n<script type=\"application/ld+json\">" . wp_json_encode( $dados, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES ) . "</script>\n";
	}
);

/* ---------- auxiliares usados pelos templates ---------- */

function psb_link_whats( $texto ) {
	return 'https://wa.me/' . PSB_WHATS . '?text=' . rawurlencode( $texto );
}

function psb_texto_whats( $post_id ) {
	$t = get_post_meta( $post_id, '_psb_whats', true );
	return $t ? $t : 'Olá! Li o artigo "' . get_the_title( $post_id ) . '" no blog da ProSystem e quero falar com um especialista.';
}

function psb_categoria( $post_id ) {
	foreach ( get_the_category( $post_id ) as $cat ) {
		if ( in_array( $cat->slug, psb_categorias(), true ) ) {
			return $cat;
		}
	}
	return null;
}

function psb_chamada( $post_id ) {
	$c = get_post_meta( $post_id, '_psb_chamada', true );
	if ( $c ) {
		return $c;
	}
	$cat = psb_categoria( $post_id );
	return $cat ? $cat->name : 'Blog';
}

function psb_minutos( $post_id ) {
	$conteudo = get_post_field( 'post_content', $post_id );
	$conteudo = preg_replace( '#<(script|style)[^>]*>.*?</\1>#s', ' ', $conteudo );
	$palavras = preg_split( '/\s+/u', trim( wp_strip_all_tags( $conteudo ) ) );
	return max( 1, (int) ceil( count( array_filter( $palavras ) ) / 200 ) );
}

/** Sumário: usa o salvo no post ou monta a partir dos H2 com id. */
function psb_sumario( $post_id ) {
	$toc = json_decode( (string) get_post_meta( $post_id, '_psb_toc', true ), true );
	if ( is_array( $toc ) && $toc ) {
		return $toc;
	}
	$toc = array();
	if ( preg_match_all( '#<h2[^>]*id="([^"]+)"[^>]*>(.*?)</h2>#s', get_post_field( 'post_content', $post_id ), $m, PREG_SET_ORDER ) ) {
		foreach ( $m as $h ) {
			if ( in_array( $h[1], array( 'resumo-t', 'fontes' ), true ) ) {
				continue;
			}
			$toc[] = array( $h[1], wp_strip_all_tags( $h[2] ) );
		}
	}
	return $toc;
}

/** Relacionados: os indicados no post (se existirem no site) e, se faltar, os mais recentes da mesma categoria. */
function psb_relacionados( $post_id, $quantos = 3 ) {
	$status = current_user_can( 'edit_posts' ) ? array( 'publish', 'draft', 'pending', 'future' ) : array( 'publish' );
	$ids    = array();
	$slugs  = json_decode( (string) get_post_meta( $post_id, '_psb_relacionados', true ), true );
	foreach ( (array) $slugs as $slug ) {
		$q = get_posts(
			array(
				'name'        => $slug,
				'post_type'   => 'post',
				'post_status' => $status,
				'numberposts' => 1,
				'fields'      => 'ids',
			)
		);
		if ( $q && (int) $q[0] !== (int) $post_id && psb_eh_post_psb( $q[0] ) ) {
			$ids[] = (int) $q[0];
		}
	}
	if ( count( $ids ) < $quantos ) {
		$cat   = psb_categoria( $post_id );
		$extra = get_posts(
			array(
				'post_type'     => 'post',
				'post_status'   => $status,
				'numberposts'   => $quantos,
				'fields'        => 'ids',
				'category_name' => $cat ? $cat->slug : implode( ',', psb_categorias() ),
				'post__not_in'  => array_merge( array( $post_id ), $ids ),
			)
		);
		$ids = array_merge( $ids, array_map( 'intval', $extra ) );
	}
	return array_slice( array_unique( $ids ), 0, $quantos );
}

function psb_sprite() {
	return '<svg width="0" height="0" style="position:absolute" aria-hidden="true">'
		. '<symbol id="i-whats" viewBox="0 0 24 24"><path fill="currentColor" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm4.52 11.99c-.25-.12-1.47-.72-1.7-.81-.22-.08-.39-.12-.55.13-.17.24-.64.8-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.55-1.34-.76-1.83-.2-.48-.4-.42-.55-.42h-.47c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.06 0 1.22.89 2.39 1.01 2.56.12.17 1.75 2.67 4.23 3.74 2.48 1.07 2.48.71 2.93.67.45-.04 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z"/></symbol>'
		. '<symbol id="i-in" viewBox="0 0 24 24"><path fill="currentColor" d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.56V9h3.56v11.45Z"/></symbol>'
		. '<symbol id="i-link" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1-1"/></symbol>'
		. '</svg>';
}

function psb_icone_whats() {
	return '<svg width="18" height="18" aria-hidden="true"><use href="#i-whats"/></svg>';
}

/**
 * Redireciona (301) endereços antigos dos posts para o endereço atual.
 * Até 06/10/2026 os posts usavam /%category%/%postname%/ (ex.: /uncategorized/slug/, /gestao/slug/).
 */
add_action(
	'template_redirect',
	function () {
		if ( ! is_404() ) {
			return;
		}
		$caminho = trim( (string) wp_parse_url( isset( $_SERVER['REQUEST_URI'] ) ? wp_unslash( $_SERVER['REQUEST_URI'] ) : '', PHP_URL_PATH ), '/' ); // phpcs:ignore WordPress.Security.ValidatedSanitizedInput
		if ( ! preg_match( '#^(uncategorized|gestao|padaria|farmacia)/([a-z0-9-]+)$#', $caminho, $m ) ) {
			return;
		}
		$post = get_page_by_path( $m[2], OBJECT, 'post' );
		if ( $post && 'publish' === $post->post_status ) {
			wp_safe_redirect( get_permalink( $post ), 301 );
			exit;
		}
	},
	1
);

/** O Yoast já gera a descrição; evita a segunda descrição que o tema Hello cria a partir do resumo. */
add_filter(
	'hello_elementor_description_meta_tag',
	function ( $ativo ) {
		return ( is_singular( 'post' ) && psb_eh_post_psb() ) ? false : $ativo;
	}
);

/** Comentários fechados nos posts do blog novo (o visual não prevê comentários). */
add_filter(
	'comments_open',
	function ( $aberto, $post_id ) {
		return psb_eh_post_psb( $post_id ) ? false : $aberto;
	},
	10,
	2
);
