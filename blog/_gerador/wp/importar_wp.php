<?php
/**
 * Importa os artigos do blog ProSystem como RASCUNHOS.
 * Uso no servidor:  wp eval-file importar_wp.php /caminho/para/import --user=1
 * Pode rodar de novo: atualiza o post existente (mesmo slug) em vez de duplicar.
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$dir = isset( $args[0] ) ? rtrim( $args[0], '/' ) : '';
$man = json_decode( file_get_contents( $dir . '/manifest.json' ), true );
if ( ! $man ) {
	WP_CLI::error( 'manifest.json não encontrado ou inválido em ' . $dir );
}

require_once ABSPATH . 'wp-admin/includes/image.php';
require_once ABSPATH . 'wp-admin/includes/file.php';
require_once ABSPATH . 'wp-admin/includes/media.php';

// Categorias
$nomes = array(
	'farmacia' => 'Farmácia',
	'padaria'  => 'Padaria',
	'gestao'   => 'Gestão',
);
$cat_ids = array();
foreach ( $nomes as $slug => $nome ) {
	$t = get_term_by( 'slug', $slug, 'category' );
	if ( ! $t ) {
		$r = wp_insert_term( $nome, 'category', array( 'slug' => $slug ) );
		if ( is_wp_error( $r ) ) {
			WP_CLI::error( $r->get_error_message() );
		}
		$cat_ids[ $slug ] = (int) $r['term_id'];
		WP_CLI::log( "Categoria criada: $nome" );
	} else {
		$cat_ids[ $slug ] = (int) $t->term_id;
	}
}

foreach ( $man as $ordem => $a ) {
	$existente = get_posts(
		array(
			'name'        => $a['slug'],
			'post_type'   => 'post',
			'post_status' => 'any',
			'numberposts' => 1,
		)
	);

	$dados = array(
		'post_type'      => 'post',
		'post_title'     => $a['titulo'],
		'post_name'      => $a['slug'],
		'post_excerpt'   => $a['resumo'],
		'post_content'   => $a['conteudo'],
		'post_category'  => array( $cat_ids[ $a['categoria'] ] ),
		'comment_status' => 'closed',
		'ping_status'    => 'closed',
		'post_author'    => 1,
	);
	if ( $existente ) {
		$dados['ID'] = $existente[0]->ID;
		// mantém o status atual (não despublica nem publica sozinho)
		$id = wp_update_post( wp_slash( $dados ), true );
		$acao = 'atualizado';
	} else {
		$dados['post_status'] = 'draft';
		$id = wp_insert_post( wp_slash( $dados ), true );
		$acao = 'criado como rascunho';
	}
	if ( is_wp_error( $id ) ) {
		WP_CLI::warning( $a['slug'] . ': ' . $id->get_error_message() );
		continue;
	}

	// Metadados do visual
	update_post_meta( $id, '_psb_chamada', $a['chamada'] );
	update_post_meta( $id, '_psb_faq', wp_slash( wp_json_encode( $a['faq'], JSON_UNESCAPED_UNICODE ) ) );
	update_post_meta( $id, '_psb_toc', wp_slash( wp_json_encode( $a['toc'], JSON_UNESCAPED_UNICODE ) ) );
	update_post_meta( $id, '_psb_cta', wp_slash( wp_json_encode( $a['cta'], JSON_UNESCAPED_UNICODE ) ) );
	update_post_meta( $id, '_psb_whats', $a['whats'] );
	update_post_meta( $id, '_psb_ordem', $ordem + 1 );
	update_post_meta( $id, '_psb_relacionados', wp_slash( wp_json_encode( $a['relacionados'] ) ) );
	if ( $a['rotulo'] ) {
		update_post_meta( $id, '_psb_rotulo', $a['rotulo'] );
	}
	if ( $a['destaque'] ) {
		update_post_meta( $id, '_psb_destaque', '1' );
	}

	// SEO (Yoast)
	update_post_meta( $id, '_yoast_wpseo_title', $a['seo_titulo'] );
	update_post_meta( $id, '_yoast_wpseo_metadesc', $a['seo_descricao'] );
	update_post_meta( $id, '_yoast_wpseo_focuskw', $a['palavra_chave'] );
	update_post_meta( $id, '_yoast_wpseo_opengraph-title', $a['og_titulo'] );
	update_post_meta( $id, '_yoast_wpseo_opengraph-description', $a['og_descricao'] );
	update_post_meta( $id, '_yoast_wpseo_twitter-title', $a['og_titulo'] );
	update_post_meta( $id, '_yoast_wpseo_twitter-description', $a['og_descricao'] );
	update_post_meta( $id, '_yoast_wpseo_primary_category', $cat_ids[ $a['categoria'] ] );

	// Imagem de capa (importa uma vez só)
	$img_titulo = 'Capa: ' . $a['slug'];
	$anexo      = get_posts(
		array(
			'post_type'   => 'attachment',
			'title'       => $img_titulo,
			'post_status' => 'inherit',
			'numberposts' => 1,
			'fields'      => 'ids',
		)
	);
	if ( $anexo ) {
		$anexo_id = (int) $anexo[0];
	} else {
		$tmp = wp_tempnam( $a['imagem'] );
		copy( $dir . '/img/' . $a['imagem'], $tmp );
		$anexo_id = media_handle_sideload(
			array(
				'name'     => $a['imagem'],
				'tmp_name' => $tmp,
			),
			$id,
			$img_titulo
		);
		if ( is_wp_error( $anexo_id ) ) {
			WP_CLI::warning( 'Imagem de ' . $a['slug'] . ': ' . $anexo_id->get_error_message() );
			$anexo_id = 0;
		} else {
			update_post_meta( $anexo_id, '_wp_attachment_image_alt', $a['og_titulo'] );
		}
	}
	if ( $anexo_id ) {
		set_post_thumbnail( $id, $anexo_id );
	}

	WP_CLI::log( sprintf( '%s (ID %d) %s', $a['slug'], $id, $acao ) );
}

WP_CLI::success( count( $man ) . ' artigos processados.' );
