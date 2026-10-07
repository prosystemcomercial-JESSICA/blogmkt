<?php
/**
 * Corrige os balões (hotspots) da imagem da planta da loja na página Home (ID 1815).
 * Os balões estavam com texto de exemplo (Wikipédia, "Lithuania"). Cada ponto passa a descrever
 * o recurso do ProSystem da área correspondente, usando frases das páginas de produto do site.
 * Faz backup do _elementor_data original antes de alterar.
 * Uso:  wp eval-file corrigir_hotspots_home.php --user=1
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$page_id   = 1815;
$widget_id = '8b78e3d';
$raw       = get_post_meta( $page_id, '_elementor_data', true );
$backup    = getenv( 'HOME' ) . '/backups-claude/home-1815-elementor_data-' . gmdate( 'Ymd-His' ) . '.json';
file_put_contents( $backup, is_string( $raw ) ? $raw : wp_json_encode( $raw ) );
WP_CLI::log( "Backup: $backup" );

$data = is_string( $raw ) ? json_decode( $raw, true ) : $raw;
if ( ! is_array( $data ) ) {
	WP_CLI::error( '_elementor_data inválido.' );
}

function psb_balao( $titulo, $texto ) {
	return '<p style="margin:0;font-family:Poppins,Arial,sans-serif;font-size:13px;line-height:1.5;"><strong>' . $titulo . '</strong><br>' . $texto . '</p>';
}

// _id do ponto => [título, texto, link (null = manter, '' = remover)]
$baloes = array(
	'56bd138' => array( 'Padaria', 'Controle produção, vendas e estoque em um sistema integrado, reduzindo perdas e melhorando margens.', null ),
	'f7e514e' => array( 'Farmácias e drogarias', 'Controle estoque, vendas e programas PBM com total segurança fiscal e agilidade no PDV.', '' ),
	'7081ccb' => array( 'Gestão de estoque', 'Controle estoque por produto, lote e validade, reduzindo perdas, rupturas e excesso de mercadoria.', null ),
	'f2f2aae' => array( 'Preço e promoções', 'Precificação unificada ou individual por loja, formação de preço de venda e campanhas promocionais.', '' ),
	'ddb6dd7' => array( 'Fidelização de clientes', 'Use dados de vendas para criar promoções personalizadas e manter um relacionamento duradouro com sua base de clientes.', null ),
	'f3834e2' => array( 'Convênios e PBM', 'Integração com PBMs, gestão de convênios e vendas para estabelecimentos que trabalham com parceiros.', null ),
	'abe6d6d' => array( 'PDV rápido', 'Frente de caixa rápido e estável, reduzindo filas, evitando erros e melhorando a experiência do cliente.', null ),
	'd6e1fe9' => array( 'Financeiro', 'Contas a pagar e receber, movimentação bancária, recebimento por cartões, projeções financeiras e gráficos de desempenho.', null ),
	'e11afbd' => array( 'Fiscal', 'Emissão de NF-e e NFC-e, integração com o SPED, controle de obrigações fiscais e atualizações conforme a legislação.', null ),
	'40a9f98' => array( 'Gestão e indicadores', 'Relatórios gerenciais, fluxo de caixa, centro de custos e DRE, com indicadores em tempo real.', null ),
	'372858c' => array( 'Compras', 'Gestão de pedidos, controle de faltas e pedidos eletrônicos integrados ao fornecedor.', null ),
	'1c5fd6b' => array( 'Recebimento e estoque', 'Entrada de NF-e via XML, estoque multi-filiais, controle por lote e curva ABC.', null ),
);

$alterados = 0;
$achou     = false;
$percorre  = function ( &$nos ) use ( &$percorre, $widget_id, $baloes, &$alterados, &$achou ) {
	foreach ( $nos as &$no ) {
		if ( isset( $no['id'] ) && $no['id'] === $widget_id && isset( $no['settings']['hotspot'] ) ) {
			$achou = true;
			foreach ( $no['settings']['hotspot'] as &$ponto ) {
				$id = $ponto['_id'] ?? '';
				if ( ! isset( $baloes[ $id ] ) ) {
					continue;
				}
				list( $titulo, $texto, $link ) = $baloes[ $id ];
				$ponto['hotspot_tooltip_content'] = psb_balao( $titulo, $texto );
				if ( '' === $link ) {
					$ponto['hotspot_link'] = array( 'url' => '', 'is_external' => '', 'nofollow' => '', 'custom_attributes' => '' );
				}
				$alterados++;
			}
			unset( $ponto );
		}
		if ( ! empty( $no['elements'] ) ) {
			$percorre( $no['elements'] );
		}
	}
	unset( $no );
};
$percorre( $data );

if ( ! $achou ) {
	WP_CLI::error( "Widget $widget_id não encontrado." );
}

update_post_meta( $page_id, '_elementor_data', wp_slash( wp_json_encode( $data, JSON_UNESCAPED_UNICODE ) ) );

// Limpa o cache de CSS/HTML do Elementor para a mudança aparecer.
if ( class_exists( '\Elementor\Plugin' ) ) {
	\Elementor\Plugin::$instance->files_manager->clear_cache();
}
clean_post_cache( $page_id );

$verifica = get_post_meta( $page_id, '_elementor_data', true );
WP_CLI::success( "$alterados balões atualizados. Restou 'Lithuania' no conteúdo? " . ( false !== strpos( $verifica, 'Lithuania' ) ? 'SIM' : 'não' ) );
