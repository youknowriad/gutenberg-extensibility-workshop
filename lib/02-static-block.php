<?php

function register_02_static_block() {
	wp_register_script(
			'gew-02-static-block',
			gew_url( 'scripts/02-static-block/build/index.js', __FILE__ ),
			array( 'wp-blocks', 'wp-element' )
	);

	// Register the block style sheet
	wp_register_style(
		'gew-02-static-block',
		gew_url( 'scripts/02-static-block/build/style.css', __FILE__ ),
		array()
	);

	register_block_type( 'gew/static-block', array(
			'editor_script' => 'gew-02-static-block',

			// Attach the style to the block
			'editor_style'  => 'gew-02-static-block',
	) );
}

add_action( 'init', 'register_02_static_block' );