<?php

function enqueue_09_sidebar_plugin_script() {
	wp_register_script(
			'gew-09-sidebar-plugin',
			gew_url( 'scripts/09-sidebar-plugin/build/index.js', __FILE__ ),
			array( 'wp-blocks', 'wp-data', 'wp-plugins', 'wp-edit-post' ),
			null,
			true
	);

	wp_register_style(
		'gew-09-sidebar-plugin',
		gew_url( 'scripts/09-sidebar-plugin/build/style.css', __FILE__ ),
		array()
	);

	wp_enqueue_script( 'gew-09-sidebar-plugin' );
	wp_enqueue_style( 'gew-09-sidebar-plugin' );
}

add_action( 'enqueue_block_editor_assets', 'enqueue_09_sidebar_plugin_script' );