<?php

/**
 * Enqueue scripts and styles.
 */
function gutenbergtheme_scripts() {
	wp_enqueue_style( 'gutenbergtheme-style', get_stylesheet_uri() );
	wp_enqueue_style( 'gutenbergtheme-fonts', 'https://fonts.googleapis.com/css?family=Noto Serif:400,400italic,700,700italic&subset=latin,latin-ext', array(), null );
}

add_action( 'wp_enqueue_scripts', 'gutenbergtheme_scripts' );