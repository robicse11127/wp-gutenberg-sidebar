<?php
/**
  * Plugin Name: WP Gutenberg Sidebar Plugin
  * Plugin URI: https://example.com/
  * Description: Sidebar for the block editor.
  * Author: Md. Rabiul Islam
  * Author URI: https://authoruri.com/
  */
if( ! defined( 'ABSPATH') ) {
    exit;
}

// Enqueue gutenberg sidebar scripts.
function prefix_enqueue_assets() {
    wp_enqueue_script(
        'prefix-gutenberg-sdiebar',
        plugins_url( 'build/index.js', __FILE__ ),
        [ 'wp-plugins', 'wp-edit-post', 'wp-i18n', 'wp-element', 'wp-components', 'wp-data' ]
    );
}
add_action( 'enqueue_block_editor_assets', 'prefix_enqueue_assets' );

// Registering metafields.
function prefix_register_meta_fields() {
    register_meta(
        'post',
        '_prefix_text_field',
        [
            'show_in_rest'      => true,
            'type'              => 'string',
            'single'            => true,
            'sanitize_callback' => 'sanitize_text_string',
            'auth_callback'     => function() {
                return current_user_can( 'edit_posts' );
            }
        ]
    );
    register_meta(
        'post',
        '_prefix_textarea_field',
        [
            'show_in_rest'      => true,
            'type'              => 'string',
            'single'            => true,
            'sanitize_callback' => 'sanitize_text_string',
            'auth_callback'     => function() {
                return current_user_can( 'edit_posts' );
            }
        ]
    );
    register_meta(
        'post',
        '_prefix_select_field',
        [
            'show_in_rest'      => true,
            'type'              => 'string',
            'single'            => true,
            'sanitize_callback' => 'sanitize_text_string',
            'auth_callback'     => function() {
                return current_user_can( 'edit_posts' );
            }
        ]
    );
    register_meta(
        'post',
        '_prefix_radio_field',
        [
            'show_in_rest'      => true,
            'type'              => 'string',
            'single'            => true,
            'sanitize_callback' => 'sanitize_text_string',
            'auth_callback'     => function() {
                return current_user_can( 'edit_posts' );
            }
        ]
    );
    register_meta(
        'post',
        '_prefix_toggle_field',
        [
            'show_in_rest'      => true,
            'type'              => 'boolean',
            'single'            => true,
            'sanitize_callback' => 'rest_sanitize_boolean',
            'auth_callback'     => function() {
                return current_user_can( 'edit_posts' );
            }
        ]
    );
    register_meta(
        'post',
        '_prefix_checkbox_field',
        [
            'show_in_rest'      => true,
            'type'              => 'boolean',
            'single'            => true,
            'sanitize_callback' => 'rest_sanitize_boolean',
            'auth_callback'     => function() {
                return current_user_can( 'edit_posts' );
            }
        ]
    );
    register_meta(
        'post',
        '_prefix_date_field',
        [
            'show_in_rest'      => true,
            'type'              => 'string',
            'single'            => true,
            'sanitize_callback' => 'sanitize_text_string',
            'auth_callback'     => function() {
                return current_user_can( 'edit_posts' );
            }
        ]
    );
    register_meta(
        'post',
        '_prefix_media_field',
        [
            'show_in_rest'      => true,
            'type'              => 'string',
            'single'            => true,
            'sanitize_callback' => 'sanitize_text_string',
            'auth_callback'     => function() {
                return current_user_can( 'edit_posts' );
            }
        ]
    );
}
add_action( 'init', 'prefix_register_meta_fields' );