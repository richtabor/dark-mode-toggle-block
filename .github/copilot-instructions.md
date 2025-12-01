# Dark Mode Toggle Block – Copilot Instructions

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

**Always run `npm install` before any other command when starting fresh or after cleaning.** Missing dependencies are the most common failure.

### Installation
```bash
npm install
```
Takes ~10–25 seconds, installs ~1.5k packages, and may emit known vulnerability/deprecation warnings (leave as-is unless security work is requested).

### Development Server
```bash
npm start
# OR
npm run dev
```
Launches webpack watch mode, emits unminified assets (with source maps) into `build/`, and recompiles in ~1s after saves. This process keeps running until you stop it (Ctrl+C).

### Production Build
```bash
npm run build
```
Runs a fresh production bundle (~1–2s) producing `build/index.js`, `build/view.js`, `build/style-index.css`, accompanying `*.asset.php` manifests, and a copied `block.json`. Occasional “Browserslist: caniuse-lite is outdated” warnings are informational only.

### Linting & Formatting
- `npm run lint:js` – ESLint (5–10s). See “Known lint noise” for the pre-existing errors; only fix new issues you introduce.
- `npm run lint:js-fix` – Formatting-only fixes; use selectively and only on files you touched.
- `npm run lint:css` – stylelint (flags the known indentation warning in `src/style.scss` line ~96).
- `npm run format` – Prettier pass across JS/JSON/SCSS/YAML (~5s).

### Packaging
```bash
npm run plugin-zip
```
Runs the production build, then creates `dark-mode-toggle-block.zip` (~9 KB) containing only distributable assets per `.distignore`. Use prior to releases or manual installs.

### Recommended Command Sequence
1. **Fresh clone / after clean:** `npm install && npm run build`
2. **During development:** start watcher (`npm start`), edit files under `src/`, verify hot rebuild output.
3. **Pre-commit:** `npm run format && npm run lint:js && npm run lint:css && npm run build` (resolve only regressions you added).
4. **Release prep:** `npm run plugin-zip`, validate the generated zip in a staging WordPress site, then tag.

## Known Lint Noise (do not “fix”)
- Experimental WordPress APIs (`__experimentalUseColorProps`, `__experimentalToggleGroupControl`, etc.) in `edit.js`, `save.js`, and `deprecated.js`.
- ESLint complaining about `localStorage` not defined in `src/view.js`.
- A stylelint indentation warning for `src/style.scss` line ~96 (tabs vs spaces). Keep indentation with tabs; do not convert entire file to spaces.

## When Editing
- Modify only source files under `src/` and PHP glue; let webpack regenerate `build/`.
- Maintain localization strings with `@wordpress/i18n` (`__`, `_x`). Any new UI text must be wrapped and use the `dark-mode-toggle-block` text domain.
- Keep style variations in sync with metadata: if you add icons/variations update both `block.json` and component code.
- The inline script in `dark-mode-toggle-block.php` must remain tiny and dependency-free; it only seeds the `theme-dark` class based on storage/system preference. Do heavier work inside `src/view.js`.
- Respect `.editorconfig` (tabs, LF). Run `npm run format` before committing.
- Only lint/format the files you touched; avoid repo-wide `lint:js-fix` or blanket formatting that churns unrelated files.

## Manual Validation Checklist
1. Run `npm run build` (or keep `npm start` running) and confirm no unexpected errors/warnings.
2. In a local WP install (6.4+ / PHP 7.0+), activate the plugin and insert “Dark Mode Toggle” into a post/page.
3. Front end: click the toggle, ensure `document.documentElement` gains/loses `theme-dark`, ARIA attributes update, and the state persists across refreshes (check `localStorage.darkMode`).
4. Verify each style variation (Filled/Stroke/Circle/Eye) and size reflects the expected visuals from `style.scss`.

## Code Style & Standards
- **Indentation:** Tabs everywhere except YAML/Markdown (see `.editorconfig`).
- **Line endings:** LF.
- **Component patterns:** Functional React components with hooks; experimental WordPress APIs are required.
- **PHP:** Follows WordPress standards; keep inline script lean and non-blocking.
- **SCSS:** Co-locate block styles in `src/style.scss`; rely on CSS variables for theme overrides.

## Testing
- No automated tests. Manual steps (above) are required for verification.
- Optional: `.wp-env.json` enables `npx wp-env start` for a disposable local environment (WordPress 6.4+, PHP 7.4+). Stop with `npx wp-env stop` when finished.

## Release & CI Guardrails
- CI (`create-release-and-deploy.yml`) runs automatically on tag push: checkout → Node 20.11 → `npm install` → `npm run plugin-zip` → GitHub Release → deploy to WordPress.org via 10up action (requires `SVN_USERNAME`/`SVN_PASSWORD` secrets).
- Before tagging: bump versions in `package.json`, `dark-mode-toggle-block.php`, and `readme.txt`, rebuild (`npm run build`), run `npm run plugin-zip`, smoke-test the zip on a staging WP site, then tag (`git tag vX.Y.Z && git push origin vX.Y.Z`).
- Never commit `build/` or `dark-mode-toggle-block.zip`; CI artifacts are generated on demand.

## Common Issues & Solutions
- **Module not found / build fails:** `npm install` was skipped—run it and retry.
- **Watcher never exits:** `npm start` is designed to stay running; stop manually with Ctrl+C.
- **Changes not reflected:** Ensure the watcher is running or execute `npm run build` for a fresh bundle.
- **Lint noise:** Experimental APIs + `localStorage` warning + SCSS indentation issue are known; only address new violations.
- **CSS indentation warning:** Use tabs on line ~96 of `src/style.scss`; do not convert the file to spaces.
- **Unsynced CSS/JS:** When adding classes/data attributes in JS, update `style.scss` (and vice versa) so editor/front-end stay aligned.

## File Locations Reference
- `/package.json` – scripts, dependencies, metadata.
- `/src/block.json` – block supports, attributes, style variations.
- `/.editorconfig` – formatting conventions (tabs, LF).
- `/.gitignore` – excludes `build/`, `node_modules/`, zips.
- `/.distignore` – controls what ships in release zips.
- `/.wordpress-org/` – plugin directory banners/icons bundled by `plugin-zip`.
- `/.wp-env.json` – configuration for `wp-env` local testing.

## Final Notes
- Trust these instructions. Search the repo only when something here is incomplete or demonstrably wrong.
- Ensure `npm install` + `npm run build` succeed locally before pushing to avoid CI/tag failures.
- Keep manual test notes with your PRs so reviewers know the toggle was exercised in both light and dark states.
