# Dark Mode Toggle Block

[![Create Release and Deploy to WordPress.org](https://github.com/richtabor/dark-mode-toggle-block/actions/workflows/create-release-and-deploy.yml/badge.svg)](https://github.com/richtabor/dark-mode-toggle-block/actions/workflows/create-release-and-deploy.yml)

A WordPress block to add a toggle between light and dark appearances, as seen on [my blog](https://rich.blog). Adds a `theme-dark` class to the `<html>` element (document root) when toggled on. The user's preference is then saved in local storage. 

[Read about it on my blog →](https://rich.blog/dark-mode-toggle-block/)

### Visual

https://github.com/richtabor/dark-mode-toggle-block/assets/1813435/f7255865-6328-4f54-8284-6bb2432d8ab2

### How it works
When toggled, the block will add a `.theme-dark` class to the `<html>` element (document root) of the site. You can then use this class in your CSS to apply dark mode styles. The user's preference is saved in localStorage and will persist across page loads.

### Implementing dark mode styles

There are several approaches to implementing dark mode styles with this plugin. Choose the method that best fits your workflow:

#### Method 1: Simple CSS approach
The most straightforward method is to add CSS rules that target the `.theme-dark` class. This works well for simple sites or when you want direct control over specific elements.

```css
/* Light mode (default) */
body {
    background-color: #ffffff;
    color: #000000;
}

/* Dark mode */
.theme-dark body {
    background-color: #1a1a1a;
    color: #ffffff;
}

.theme-dark a {
    color: #58a6ff;
}
```

#### Method 2: CSS variables (Recommended)
Using CSS custom properties (variables) provides the most flexible and maintainable approach. Define your color variables at the root level and override them for dark mode.

```css
/* Define light mode colors */
:root {
    --background-color: #ffffff;
    --text-color: #000000;
    --link-color: #0066cc;
}

/* Override for dark mode */
.theme-dark {
    --background-color: #1a1a1a;
    --text-color: #ffffff;
    --link-color: #58a6ff;
}

/* Use the variables throughout your styles */
body {
    background-color: var(--background-color);
    color: var(--text-color);
}

a {
    color: var(--link-color);
}
```

#### Method 3: WordPress theme.json integration
For block themes, you can integrate dark mode using `theme.json` custom properties and override them with CSS. This approach works particularly well with WordPress 2024/2025 themes.

First, define custom colors in your `theme.json`:
```json
{
    "settings": {
        "custom": {
            "color": {
                "theme-1": "#ffffff",
                "theme-2": "#000000"
            }
        }
    }
}
```

Then, override WordPress preset variables for dark mode:
```css
/* Map WordPress color presets to dark mode values */
.theme-dark body {
    --wp--preset--color--theme-1: var(--wp--preset--color--custom-theme-1-dark, var(--wp--custom--color--theme-1-dark));
    --wp--preset--color--theme-2: var(--wp--preset--color--custom-theme-2-dark, var(--wp--custom--color--theme-2-dark));
}
```

This method is used on [my blog](https://rich.blog), where users can manipulate colors within the Site Editor without modifying theme.json.

#### Adding your CSS
You can add your dark mode CSS in several ways:
- **Child theme**: Add to your child theme's `style.css`
- **theme.json**: Use `styles.css` or `assets/css/` in block themes
- **Customizer**: Use the "Additional CSS" section
- **Plugin**: Use a custom CSS plugin

### Example implementation for Twenty Twenty-Five
```css
/* Add this to your theme's CSS or Customizer > Additional CSS */
.theme-dark {
    --wp--preset--color--base: #1a1a1a;
    --wp--preset--color--contrast: #ffffff;
    --wp--preset--color--accent-1: #58a6ff;
}
```

### Development

1. Clone the repository into your WordPress plugins directory.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Activate the plugin on your local WordPress site.
5. Add the block to a post or page.
