<?php

wp_enqueue_script(
	'gew-06-post-status-info-plugin',
	gew_url( 'scripts/06-post-status-info-plugin/index.es5.js', __FILE__ ),
	array(
		'wp-edit-post',
		'wp-element',
		'wp-plugins',
	)
);
