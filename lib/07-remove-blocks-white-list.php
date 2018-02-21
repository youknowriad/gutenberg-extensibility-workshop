<?php

function enqueue_07_remove_blocks_script() {
	wp_register_script(
			'gew-07-remove-blocks-white-list',
			gew_url( 'scripts/07-remove-blocks-white-list/build/index.js', __FILE__ ),
			// Adding wp-editor to ensures it loads after the editor
			array( 'wp-blocks', 'wp-editor' )
	);

	wp_enqueue_script( 'gew-07-remove-blocks-white-list' );
}

add_action( 'enqueue_block_editor_assets', 'enqueue_07_remove_blocks_script' );