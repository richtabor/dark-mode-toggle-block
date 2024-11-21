<?php
/**
 * Plugin Name:       Dark Mode Toggle Block
 * Description:       A WordPress block for toggling between between light and dark appearances on your site.
 * Plugin URI:        https://rich.blog/dark-mode-toggle-block
 * Requires at least: 6.4
 * Requires PHP:      7.0
 * Version:           1.0.5
 * Author:            Rich Tabor
 * Author URI:        https://rich.blog
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       dark-mode-toggle-block
 *
 * @package          tabor/dark-mode-toggle-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function tabordarkmodetoggleblock_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'tabordarkmodetoggleblock_init' );

/**
 * Enqueues inline JavaScript for handling site appearance toggling.
 *
 * This function registers and enqueues an inline JavaScript script that checks
 * the user's preference for dark mode stored in localStorage and adjusts the
 * site's theme based on that preference. It also considers the user's system's
 * dark mode preference using the `prefers-color-scheme` media query.
 */
function tabordarkmodetoggleblock_scripts() {
    // Register an empty script handle to attach the inline script.
    wp_register_script( 'tabor-dark-mode-toggle-block-inline', '' );
    wp_enqueue_script( 'tabor-dark-mode-toggle-block-inline' );

    // Inline script to set the theme based on user preference or system preference.
    $inline_script = '
		(function() {
			const body = document.documentElement;
			const isDarkMode = localStorage.getItem("darkMode") === "enabled";
			const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

			// Apply the "theme-dark" class based on user or system preference
			body.classList.toggle("theme-dark", isDarkMode || (!localStorage.getItem("darkMode") && prefersDark));
		})();
    ';

    // Ensure proper escaping
    wp_add_inline_script( 'tabor-dark-mode-toggle-block-inline', $inline_script );
}
add_action( 'wp_enqueue_scripts', 'tabordarkmodetoggleblock_scripts' );
