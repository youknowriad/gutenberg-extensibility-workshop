<?php

function register_07_publish_panel_plugin() {
	wp_enqueue_script(
		'gew-07-publish-panel-plugin',
		gew_url( 'scripts/07-publish-panel-plugin/index.es5.js', __FILE__ ),
		array(
			'wp-edit-post',
			'wp-element',
			'wp-plugins',
		)
	);
}

add_action( 'admin_enqueue_scripts', 'register_07_publish_panel_plugin' );
