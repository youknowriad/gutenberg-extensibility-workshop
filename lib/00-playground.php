<?php

function register_00_playground() {
	// Register the block script
	wp_register_script(
		'gew-00-playground',
		gew_url( 'scripts/00-playground/index.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element', 'wp-plugins' )
	);

	// Attach the script to the block
	register_block_type( 'gew/playground', array(
		'editor_script' => 'gew-00-playground',
	) );
}

add_action( 'init', 'register_00_playground' );
