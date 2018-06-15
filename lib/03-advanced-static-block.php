<?php

function register_03_advanced_static_block() {
	wp_register_script(
		'gew-03-advanced-static-block',
		gew_url( 'scripts/03-advanced-static-block/index.es5.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element', 'wp-components', 'wp-editor' )
	);

	// Register the block style sheet
	wp_register_style(
		'gew-03-advanced-static-block',
		gew_url( 'scripts/03-advanced-static-block/style.css', __FILE__ ),
		array()
	);

	register_block_type( 'gew/advanced-static-block', array(
		'editor_script' => 'gew-03-advanced-static-block',
		'style'  => 'gew-03-advanced-static-block',
	) );
}

add_action( 'init', 'register_03_advanced_static_block' );
