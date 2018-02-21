<?php

function enqueue_08_extend_block_script() {
	wp_register_script(
			'gew-08-extend-block',
			gew_url( 'scripts/08-extend-block/build/index.js', __FILE__ ),
			array( 'wp-blocks', 'wp-hooks' )
	);

	wp_enqueue_script( 'gew-08-extend-block' );
}

add_action( 'enqueue_block_editor_assets', 'enqueue_08_extend_block_script' );