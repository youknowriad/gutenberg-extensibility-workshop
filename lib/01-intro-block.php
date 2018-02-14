<?php

function register_01_intro_block() {
	// Register the block script
	wp_register_script(
			'gew-01-intro-block',
			gew_url( 'scripts/01-intro-block/build/index.js', __FILE__ ),
			array( 'wp-blocks', 'wp-element' )
	);

	// Attach the script to the block
	register_block_type( 'gew/intro-block', array(
			'editor_script' => 'gew-01-intro-block',
	) );
}

add_action( 'init', 'register_01_intro_block' );