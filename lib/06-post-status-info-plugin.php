<?php

function register_06_post_status_info_plugin() {
	wp_enqueue_script(
		'gew-06-post-status-info-plugin',
		gew_url( 'scripts/06-post-status-info-plugin/index.es5.js', __FILE__ ),
		array(
			'wp-edit-post',
			'wp-element',
			'wp-plugins',
		)
	);
}

add_action( 'admin_enqueue_scripts', 'register_06_post_status_info_plugin' );
