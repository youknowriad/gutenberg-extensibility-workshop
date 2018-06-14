<?php

wp_enqueue_script(
	'gutenberg-test-plugins-api-publish-panel',
	gew_url( 'scripts/07-publish-panel/index.es5.js', __FILE__ ),
	array(
		'wp-edit-post',
		'wp-element',
		'wp-i18n',
		'wp-plugins',
	)
);