=== Dark Mode Toggle Block ===
Contributors:      richtabor
Tags:              block
Tested up to:      6.7
Stable tag:        1.0.5
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

A WordPress block for toggling between light and dark appearance on your site.

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/` directory, or install the plugin through the WordPress plugins screen directly (if available).
2. Activate the plugin through the 'Plugins' screen in WordPress
3. Add the block from the inserter within the WordPress editor.
4. Add CSS to define your dark mode colors using the `.theme-dark` class selector. [See the FAQ for examples](https://wordpress.org/plugins/dark-mode-toggle-block/#faq)

== Frequently Asked Questions ==
= Can the Dark Mode Toggle block be used with my theme? =
Yes! The plugin works with any WordPress theme. You'll need to add CSS to define your dark mode colors. See the next question for details.

= Where can I set the colors I want to be used in the dark mode? =
The Dark Mode Toggle block adds a `.theme-dark` class to the `<html>` element when activated. You can use this class in your CSS to define dark mode colors. Here are the recommended approaches:

**Method 1: Simple CSS (easiest)**
Add CSS rules targeting `.theme-dark`:
```
.theme-dark body {
    background-color: #1a1a1a;
    color: #ffffff;
}
```

**Method 2: CSS Variables (recommended)**
Define variables and override them for dark mode:
```
:root {
    --background-color: #ffffff;
    --text-color: #000000;
}

.theme-dark {
    --background-color: #1a1a1a;
    --text-color: #ffffff;
}

body {
    background-color: var(--background-color);
    color: var(--text-color);
}
```

**Method 3: WordPress theme.json**
For block themes like Twenty Twenty-Five, override WordPress preset colors:
```
.theme-dark {
    --wp--preset--color--base: #1a1a1a;
    --wp--preset--color--contrast: #ffffff;
}
```

You can add these styles in:
- Your child theme's `style.css`
- Customizer > Additional CSS
- Your block theme's CSS file
- A custom CSS plugin

[Learn more with detailed examples](https://github.com/richtabor/dark-mode-toggle-block#implementing-dark-mode-styles)

= Where can I send feedback or ideas? =
Please reach out via the official [plugin support forum](https://wordpress.org/support/plugin/dark-mode-toggle-block).

= Where can I find the development files? =
You can find the development files for the block on [GitHub](https://github.com/richtabor/dark-mode-toggle-block).

== Changelog ==

= 1.0.5 =
* Improve accessibility.
* Updated tested up to.

= 1.0.4 =
* Improve default colors.

= 1.0.3 =
* Update readme.

= 1.0.2 =
* Improve block example.

= 1.0.1 =
* Update prefix.
* Improve inline script.
* Use apiVersion 3.

= 1.0.0 =
* Initial release.
