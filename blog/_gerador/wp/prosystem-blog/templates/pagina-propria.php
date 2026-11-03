<?php
/**
 * Página própria (link na bio e LPs): documento sem o cabeçalho do tema, com wp_head/wp_footer
 * para manter Yoast, Pixel e Clarity. O corpo é paginas/<slug>/corpo.html.
 *
 * @var string $corpo Caminho do corpo, definido em psb_pagina_propria().
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<?php wp_head(); ?>
<style>
:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}
body{margin:0}
img{max-width:100%}
[hidden]{display:none!important}
html body.admin-bar .barra{top:32px}
</style>
</head>
<body <?php body_class( 'psb-pagina' ); ?>>
<?php
wp_body_open();
readfile( $corpo ); // phpcs:ignore WordPress.WP.AlternativeFunctions
wp_footer();
?>
</body>
</html>
