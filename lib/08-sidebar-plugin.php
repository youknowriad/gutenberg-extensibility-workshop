<?php

function register_08_sidebar_plugin() {
	wp_enqueue_script(
		'gew-08-sidebar-plugin',
		gew_url( 'scripts/08-sidebar-plugin/index.es5.js', __FILE__ ),
		array(
			'wp-components',
			'wp-data',
			'wp-edit-post',
			'wp-editor',
			'wp-element',
			'wp-plugins',
		)
	);
}

add_action( 'admin_enqueue_scripts', 'register_08_sidebar_plugin' );
