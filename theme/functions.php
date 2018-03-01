<?php

/**
 * Enqueue scripts and styles.
 */
function gutenbergtheme_scripts() {
	wp_enqueue_style( 'gutenbergtheme-style', get_stylesheet_uri() );
	wp_enqueue_style( 'gutenbergtheme-fonts', 'https://fonts.googleapis.com/css?family=Noto Serif:400,400italic,700,700italic&subset=latin,latin-ext', array(), null );

	// Step 1: Adding block styles to the frontend
	wp_enqueue_style( 'gutenbergthemeblocks-style-front', get_template_directory_uri() . '/blocks.css');
}

add_action( 'wp_enqueue_scripts', 'gutenbergtheme_scripts' );


// Step 1: Adding block styles to the editor
function gutenbergtheme_editor_styles() {
	wp_enqueue_style( 'gutenbergthemeblocks-style-editor', get_template_directory_uri() . '/editor.css');
	wp_enqueue_style( 'gutenbergthemeblocks-style-blocks', get_template_directory_uri() . '/blocks.css');
}
add_action( 'enqueue_block_editor_assets', 'gutenbergtheme_editor_styles' );

// Step 2: Adding theme support features
function mytheme_setup_theme_supported_features() {
	// No custom colors
	add_theme_support( 'disable-custom-colors' );

	// Define a palette
	add_theme_support( 'editor-color-palette',
			'#334499',
			'#d0a5db',
			'#eee',
			'#444'
	);

	// Supports wide alignments
	add_theme_support( 'align-wide' );
}

add_action( 'after_setup_theme', 'mytheme_setup_theme_supported_features' );
