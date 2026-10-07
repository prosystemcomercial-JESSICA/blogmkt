<?php
/**
 * Troca links internos dos artigos do blog pelo endereço real (permalink) de cada post.
 * Reconhece links no formato /blog/<slug>/ e links absolutos para outros posts do blog novo.
 * Rodar de novo sempre que a estrutura de endereços (permalinks) mudar.
 * Uso:  wp eval-file corrigir_links.php --user=1
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$posts = get_posts(
	array(
		'post_type'     => 'post',
		'post_status'   => array( 'publish', 'draft', 'future', 'pending' ),
		'numberposts'   => -1,
		'category_name' => 'farmacia,padaria,gestao',
	)
);

// slug => permalink atual
$mapa = array();
foreach ( $posts as $p ) {
	$mapa[ $p->post_name ] = get_permalink( $p );
}

$total = 0;
foreach ( $posts as $p ) {
	$trocas = 0;
	$novo   = preg_replace_callback(
		'#href="(?:https://prosystemnet\.com)?/(?:blog|gestao|padaria|farmacia)/([a-z0-9-]+)/"#',
		function ( $m ) use ( $mapa, &$trocas ) {
			if ( isset( $mapa[ $m[1] ] ) ) {
				$alvo = 'href="' . $mapa[ $m[1] ] . '"';
				if ( $alvo !== $m[0] ) {
					$trocas++;
				}
				return $alvo;
			}
			return $m[0];
		},
		$p->post_content
	);
	if ( $trocas ) {
		wp_update_post(
			wp_slash(
				array(
					'ID'           => $p->ID,
					'post_content' => $novo,
				)
			)
		);
		$total += $trocas;
	}
	WP_CLI::log( sprintf( '%s: %d link(s) ajustado(s)', $p->post_name, $trocas ) );
}
WP_CLI::success( "$total link(s) ajustado(s) no total." );
