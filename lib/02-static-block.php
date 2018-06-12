<?php

function register_02_static_block() {
	wp_register_script(
			'gew-02-static-block',
			gew_url( 'scripts/02-static-block/index.es5.js', __FILE__ ),
			array( 'wp-blocks', 'wp-element' )
	);

	// Register the block style sheet
	wp_register_style(
		'gew-02-static-block',
		// Change to the built file if you're using SASS
		gew_url( 'scripts/02-static-block/style.css', __FILE__ ),
		// gew_url( 'scripts/02-static-block/build/style.css', __FILE__ ),
		array()
	);

	register_block_type( 'gew/static-block', array(
			'editor_script' => 'gew-02-static-block',

			// Attach the style to the block
			// Using style loads the styles in both frontend and backend
			// You can use editor_style to only load the style in the backend.
			'style'  => 'gew-02-static-block',
	) );
}

add_action( 'init', 'register_02_static_block' );