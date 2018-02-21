<?php

function enqueue_06_remove_blocks_script() {
	wp_register_script(
			'gew-06-remove-blocks-black-list',
			gew_url( 'scripts/06-remove-blocks-black-list/build/index.js', __FILE__ ),
			// Adding wp-editor to ensures it loads after the editor
			array( 'wp-blocks', 'wp-editor' )
	);

	wp_enqueue_script( 'gew-06-remove-blocks-black-list' );
}

add_action( 'enqueue_block_editor_assets', 'enqueue_06_remove_blocks_script' );