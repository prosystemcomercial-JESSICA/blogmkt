<?php
/**
 * Envia as fotos de capa do blog (import/capas/capa-<slug>.jpg) e grava em _psb_capa.
 * Não altera a imagem destacada (usada hoje na página do blog e no compartilhamento).
 * Uso:  wp eval-file capas_wp.php /caminho/para/import --user=1
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
require_once ABSPATH . 'wp-admin/includes/image.php';
require_once ABSPATH . 'wp-admin/includes/file.php';
require_once ABSPATH . 'wp-admin/includes/media.php';

$dir = rtrim( $args[0], '/' ) . '/capas';
foreach ( glob( $dir . '/capa-*.jpg' ) as $arquivo ) {
	$slug = preg_replace( '/^capa-(.+)\.jpg$/', '$1', basename( $arquivo ) );
	$post = get_page_by_path( $slug, OBJECT, 'post' );
	if ( ! $post ) {
		WP_CLI::warning( "Post não encontrado: $slug" );
		continue;
	}
	$titulo = 'Foto: ' . $slug;
	$existe = get_posts(
		array(
			'post_type'   => 'attachment',
			'title'       => $titulo,
			'post_status' => 'inherit',
			'numberposts' => 1,
			'fields'      => 'ids',
		)
	);
	if ( $existe ) {
		$id = (int) $existe[0];
	} else {
		$tmp = wp_tempnam( basename( $arquivo ) );
		copy( $arquivo, $tmp );
		$id = media_handle_sideload(
			array(
				'name'     => basename( $arquivo ),
				'tmp_name' => $tmp,
			),
			$post->ID,
			$titulo
		);
		if ( is_wp_error( $id ) ) {
			WP_CLI::warning( "$slug: " . $id->get_error_message() );
			continue;
		}
		update_post_meta( $id, '_wp_attachment_image_alt', get_the_title( $post ) );
	}
	update_post_meta( $post->ID, '_psb_capa', $id );
	WP_CLI::log( "$slug -> foto $id" );
}
WP_CLI::success( 'Fotos de capa gravadas.' );
