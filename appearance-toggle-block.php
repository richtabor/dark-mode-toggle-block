<?php
/**
 * Plugin Name:       Appearance Toggle Block
 * Description:       A WordPress block for toggling between between light and dark appearance on your site.
 * Requires at least: 6.4
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Rich Tabor
 * Author URI:        https://rich.blog/blocks
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       appearance-toggle-block
 *
 * @package          tabor/appearance-toggle-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function tabor_appearance_toggle_block_init() {

	register_block_type( __DIR__ . '/build' );

}
add_action( 'init', 'tabor_appearance_toggle_block_init' );

/**
 * Enqueues inline JavaScript for handling site appearance toggling.
 *
 * This function registers and enqueues an inline JavaScript script that checks
 * the user's preference for dark mode stored in localStorage and adjusts the
 * site's theme based on that preference. It also considers the user's system's
 * dark mode preference using the `prefers-color-scheme` media query.
 */
function tabor_appearance_toggle_inline_scripts() {

    // Register an empty script handle to attach the inline script.
    wp_register_script('tabor-appearance-toggle-block-inline', '');
    wp_enqueue_script('tabor-appearance-toggle-block-inline');

    // Inline script to set the theme based on user preference or system preference.
    $inline_script = <<<SCRIPT
	(function() {
		const body = document.documentElement;
		const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
		const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

		// Apply the 'theme-dark' class based on user or system preference
		body.classList.toggle('theme-dark', isDarkMode || (!localStorage.getItem('darkMode') && prefersDark));
	})();
	SCRIPT;

    wp_add_inline_script('tabor-appearance-toggle-block-inline', $inline_script);

}
add_action('wp_enqueue_scripts', 'tabor_appearance_toggle_inline_scripts');
