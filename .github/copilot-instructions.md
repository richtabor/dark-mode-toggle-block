# Dark Mode Toggle Block - Copilot Instructions

## Repository Summary

This is a WordPress block plugin that adds a toggle to switch between light and dark appearances. When toggled, it adds a `theme-dark` class to the document element and persists the user's preference in localStorage. The plugin consists of ~840 lines of code across 17 source files.

**Type:** WordPress Block Plugin  
**Languages:** JavaScript (React/JSX), PHP, SCSS  
**Framework:** WordPress Block Editor (@wordpress/scripts)  
**Build Tool:** webpack (via @wordpress/scripts)  
**Node Version (CI):** 20.11.0 (current environment may use 20.19.5+)

## Project Structure

```
/
├── dark-mode-toggle-block.php    Main plugin file (registers block, enqueues inline script)
├── package.json                   Dependencies and scripts
├── src/                          Source files (compiled to build/)
│   ├── block.json                Block metadata and configuration
│   ├── index.js                  Block registration entry point
│   ├── edit.js                   Block editor component (182 lines)
│   ├── save.js                   Block save function
│   ├── view.js                   Frontend interactivity script
│   ├── style.scss                Block styles (97 lines)
│   ├── deprecated.js             Deprecated block versions for migration
│   ├── icons.js                  Icon exports
│   └── icons/                    Icon components (8 SVG files)
├── build/                        Compiled output (gitignored)
├── .github/workflows/            CI/CD pipeline
└── .wordpress-org/               WordPress.org plugin directory assets
```

**Key Files:**
- `/src/block.json` - Block metadata, supports, attributes, and style variations
- `/src/view.js` - Frontend JavaScript that handles toggle functionality via localStorage
- `/.github/workflows/create-release-and-deploy.yml` - Release workflow (runs on tag push)

## Build & Validation Commands

**IMPORTANT: Always run `npm install` before any other command when starting fresh or after cleaning.**

### Installation
```bash
npm install
```
Takes ~10-25 seconds. Installs 1478+ packages. May show deprecation warnings and 41 vulnerabilities (these are existing and expected).

### Development Server
```bash
npm start
# OR
npm run dev
```
Starts webpack in watch mode for development. Creates unminified builds in `build/` with source maps. Takes ~1 second to compile initially. Runs continuously until stopped (Ctrl+C).

### Production Build
```bash
npm run build
```
Takes ~1-2 seconds. Creates optimized, minified builds in `build/` directory:
- `index.js` (~12 KB)
- `view.js` (~749 bytes)
- `style-index.css` (~2 KB)
- `block.json` (copied)
- `*.asset.php` files

**Build output warning:** You may see "Browserslist: caniuse-lite is outdated" - this is informational and does not affect the build.

### Linting

**JavaScript Linting:**
```bash
npm run lint:js
```
Takes ~5-10 seconds. **KNOWN ISSUE:** This repository intentionally uses experimental WordPress APIs (prefixed with `__experimental`) which trigger linting errors. These 16+ errors are expected and part of the existing codebase:
- Uses of `__experimentalUseColorProps`, `__experimentalUseBorderProps`, etc. in `edit.js`
- Uses of `__experimentalGetBorderClassesAndStyles` etc. in `save.js` and `deprecated.js`
- Uses of `__experimentalToggleGroupControl` and related components in `edit.js`
- Missing JSDoc parameters in `edit.js` (3 errors)
- Label association warnings (2 errors)
- `localStorage` is not defined in `view.js` (1 error - false positive, runs in browser)

**Do NOT attempt to fix these experimental API warnings** - they are intentional and required for the block's functionality.

**Auto-fix JavaScript linting (formatting only):**
```bash
npm run lint:js-fix
```

**CSS Linting:**
```bash
npm run lint:css
```
**KNOWN ISSUE:** Line 96 in `src/style.scss` has an indentation error (uses spaces instead of tabs). The `.editorconfig` specifies tabs for all files except `.yml` and `.md`.

**Auto-format All Files:**
```bash
npm run format
```
Runs Prettier on all source files. Takes ~5 seconds. This formats JavaScript, JSON, SCSS, and YAML files.

### Creating Plugin Zip
```bash
npm run plugin-zip
```
Runs production build then creates `dark-mode-toggle-block.zip` (~8.8 KB) containing only distribution files as specified in `.distignore`. Takes ~2-3 seconds total.

### Command Sequence for Code Changes

1. **After cloning or cleaning:**
   ```bash
   npm install
   npm run build
   ```

2. **During development:**
   ```bash
   npm start  # Leave running in background
   # Make changes to src/ files
   # Build auto-updates
   ```

3. **Before committing:**
   ```bash
   npm run format    # Auto-format code
   npm run lint:js   # Check for NEW errors (expect 19+ existing)
   npm run lint:css  # Check for NEW errors (expect 1 existing)
   npm run build     # Verify production build works
   ```

4. **Creating release:**
   ```bash
   npm run plugin-zip
   ```

## Code Style & Standards

- **Indentation:** Tabs (as per `.editorconfig`), except YAML files use 2 spaces
- **Line endings:** LF (Unix-style)
- **WordPress Coding Standards:** Code follows WordPress Block Editor patterns
- **Experimental APIs:** This codebase intentionally uses experimental WordPress APIs - do not remove them
- **Block Patterns:** Uses functional components with hooks (React)

## Testing

**No automated tests are present in this repository.** Manual testing requires:
1. A local WordPress installation (6.4+)
2. PHP 7.0+
3. Activate the plugin and add the block in the WordPress editor
4. Test the toggle functionality on the frontend

## CI/CD Pipeline

**GitHub Actions Workflow:** `.github/workflows/create-release-and-deploy.yml`

Triggers on: Git tag push  
Steps:
1. Checkout code
2. Setup Node.js 20.11.0
3. Run `npm install`
4. Run `npm run plugin-zip`
5. Create GitHub release with zip asset
6. Deploy to WordPress.org plugin directory

**To trigger:** Push a git tag (e.g., `git tag v1.0.6 && git push origin v1.0.6`)

## Common Issues & Solutions

**Issue:** Build fails with "module not found"  
**Solution:** Run `npm install` first

**Issue:** Lots of linting errors about experimental APIs  
**Solution:** These are expected. Only fix NEW errors you introduce.

**Issue:** `npm start` doesn't exit  
**Solution:** This is correct behavior - it watches files. Press Ctrl+C to stop.

**Issue:** Changes not reflected  
**Solution:** Ensure `npm start` is running, or run `npm run build` manually

**Issue:** CSS indentation error on line 96  
**Solution:** This is a known issue. Use tabs, not spaces for indentation.

## File Locations Reference

**Configuration Files:**
- `/package.json` - Dependencies, scripts, metadata
- `/src/block.json` - Block configuration (supports, attributes, styles)
- `/.editorconfig` - Code style settings
- `/.gitignore` - Excludes build/, node_modules/, *.zip
- `/.distignore` - Excludes source files from distribution zip

**Build Output:** All compiled files go to `/build/` (gitignored, created by webpack)

**WordPress.org Assets:** Banner images and icons in `/.wordpress-org/`

## Important Notes

- The `build/` directory is gitignored - never commit compiled files
- The inline script in `dark-mode-toggle-block.php` handles initial theme detection based on localStorage and system preferences
- `src/view.js` handles frontend toggle interactions
- The block supports 4 style variations: filled (default), stroke, circle, and eye
- Block supports color, border, and spacing controls
- Trust these instructions - only explore further if information is incomplete or incorrect
