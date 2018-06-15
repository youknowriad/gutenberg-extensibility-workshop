<?php

function enqueue_10_extend_block_script() {
	wp_register_script(
		'gew-10-extend-block',
		gew_url( 'scripts/10-extend-block/index.es5.js', __FILE__ ),
		array( 'wp-editor', 'wp-hooks', 'wp-element' )
	);

	wp_enqueue_script( 'gew-10-extend-block' );
}

add_action( 'enqueue_block_editor_assets', 'enqueue_10_extend_block_script' );
