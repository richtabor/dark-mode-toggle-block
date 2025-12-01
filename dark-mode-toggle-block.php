<?php
/**
 * Plugin Name:       Dark Mode Toggle Block
 * Description:       A WordPress block for toggling between light and dark appearances on your site.
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
 * Outputs inline JavaScript in the head for handling initial theme state.
 *
 * This script checks the user's preference for dark mode stored in localStorage
 * and applies the theme immediately to prevent FOUC (flash of unstyled content).
 * It also considers the user's system's dark mode preference using the
 * `prefers-color-scheme` media query.
 *
 * The script is output in the head as a blocking script to ensure the theme
 * class is set before the page renders.
 */
function tabordarkmodetoggleblock_head_script() {
    ?>
    <script>
		(function() {
			const root = document.documentElement;
			const darkMode = localStorage.getItem("darkMode");
			const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

			// Apply dark mode if:
			// 1. User explicitly enabled it (darkMode === "enabled"), OR
			// 2. No user preference is stored AND system prefers dark mode
			if (darkMode === "enabled" || (darkMode !== "disabled" && prefersDark)) {
				root.classList.add("theme-dark");
			}
		})();
    </script>
    <?php
}
add_action( 'wp_head', 'tabordarkmodetoggleblock_head_script', 1 );
