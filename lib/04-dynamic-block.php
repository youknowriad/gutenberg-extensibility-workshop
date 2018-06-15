<?php

// Rendering callback: This function receives the block comment attributes as an argument.
function render_04_dynamic_block( $attribites ) {
	$recent_posts = wp_get_recent_posts( array(
		'numberposts' => 1,
		'post_status' => 'publish',
	) );
	if ( count( $recent_posts ) === 0 ) {
		return 'No posts';
	}
	$post = $recent_posts[ 0 ];
	$post_id = $post['ID'];
	return sprintf(
		'<div class="wp-block-gew-dynamic-block"><a href="%1$s">%2$s</a></div>',
		esc_url( get_permalink( $post_id ) ),
		esc_html( get_the_title( $post_id ) )
	);
}

function register_04_dynamic_block() {
	wp_register_script(
		'gew-04-dynamic-block',
		gew_url( 'scripts/04-dynamic-block/index.es5.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element', 'wp-core-data', 'wp-data' )
	);

	// Register the block style sheet
	wp_register_style(
		'gew-04-dynamic-block',
		gew_url( 'scripts/04-dynamic-block/style.css', __FILE__ ),
		array()
	);

	register_block_type( 'gew/dynamic-block', array(
		'editor_script' => 'gew-04-dynamic-block',
		'style'  => 'gew-04-dynamic-block',

		// Rendering the block happens on the server (similar to shortcodes).
		'render_callback' => 'render_04_dynamic_block',
	) );
}

add_action( 'init', 'register_04_dynamic_block' );
