<?php

function register_05_meta_block() {
	wp_register_script(
			'gew-05-meta-block',
			gew_url( 'scripts/05-meta-block/build/index.js', __FILE__ ),
			array( 'wp-blocks', 'wp-element', 'wp-components' )
	);

	wp_register_style(
		'gew-05-meta-block',
		gew_url( 'scripts/05-meta-block/build/style.css', __FILE__ ),
		array()
	);

	register_block_type( 'gew/meta-block', array(
			'editor_script' => 'gew-05-meta-block',
			'editor_style' => 'gew-05-meta-block'
	) );

	// Register the custom field used to store the block attribute.
	register_meta( 'post', 'short_description', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
) );
}

add_action( 'init', 'register_05_meta_block' );