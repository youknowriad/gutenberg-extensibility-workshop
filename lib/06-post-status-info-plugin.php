<?php

wp_enqueue_script(
	'gutenberg-test-plugins-api-post-status-info',
	gew_url( 'scripts/06-post-status-info/index.es5.js', __FILE__ ),
	array(
		'wp-edit-post',
		'wp-element',
		'wp-i18n',
		'wp-plugins',
	)
);