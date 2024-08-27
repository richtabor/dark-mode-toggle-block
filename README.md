# Dark Mode Toggle Block

[![Create Release and Deploy to WordPress.org](https://github.com/richtabor/dark-mode-toggle-block/actions/workflows/create-release-and-deploy.yml/badge.svg)](https://github.com/richtabor/dark-mode-toggle-block/actions/workflows/create-release-and-deploy.yml)

A WordPress block to add a toggle between light and dark appearances, as seen on [my blog](https://rich.blog). Adds a `theme-dark` class to the body element, when toggled on. The user's preference is then saved in local storage. 

[Read about it on my blog →](https://rich.blog/dark-mode-toggle-block/)

### Visual

https://github.com/richtabor/dark-mode-toggle-block/assets/1813435/f7255865-6328-4f54-8284-6bb2432d8ab2

### How it works
When toggled, the block will add a `.theme-dark` class to the body of the site. You can add CSS variables to target dark styles. 

I did it this way on [my blog](https://rich.blog), which uses the theme.json `settings.custom.color` values for each color, unless there is a color created within the Site Editor with corresponding slug (i.e. `theme-1-dark`). I used this method so that a user could manipulate any given color without having to modify theme.json.

```
/* Dark styles */
.theme-dark body {
    --wp--preset--color--theme-1: var(--wp--preset--color--custom-theme-1-dark, var(--wp--custom--color--theme-1-dark));
    --wp--preset--color--theme-2: var(--wp--preset--color--custom-theme-2-dark, var(--wp--custom--color--theme-2-dark));
    --wp--preset--color--theme-3: var(--wp--preset--color--custom-theme-3-dark, var(--wp--custom--color--theme-3-dark));
    --wp--preset--color--theme-4: var(--wp--preset--color--custom-theme-4-dark, var(--wp--custom--color--theme-4-dark));
    --wp--preset--color--theme-5: var(--wp--preset--color--custom-theme-5-dark, var(--wp--custom--color--theme-5-dark));
    --wp--preset--color--theme-6: var(--wp--preset--color--custom-theme-6-dark, var(--wp--custom--color--theme-6-dark));
}
```

### Development

1. Clone the repository into your WordPress plugins directory.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Activate the plugin on your local WordPress site.
5. Add the block to a post or page.
