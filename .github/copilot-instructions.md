# Dark Mode Toggle Block – Copilot Instructions

## Repository Snapshot
- WordPress block plugin that adds a dark-mode toggle; toggling applies a `theme-dark` class to `document.documentElement` and persists the choice in `localStorage`.
- Primary stack: WordPress Block Editor (React/JSX), SCSS, PHP loader.
- Tooling: `@wordpress/scripts` (webpack/babel), Node 20.11.0 in CI (20.19+ works locally), npm.

## Layout Reference
- `dark-mode-toggle-block.php` – registers the block build and injects an inline script that hydrates the theme class on page load.
- `src/` – authoring source (compiled into `build/`). Key files: `block.json` (metadata/supports), `index.js` (registration), `edit.js` (editor UI, uses experimental color/border hooks), `save.js`, `deprecated.js`, `view.js` (front-end handlers), `style.scss`, `icons.js` + `icons/`.
- `build/` – generated output. **Never edit or commit.**
- `.github/workflows/create-release-and-deploy.yml` – tag-triggered release + WordPress.org deploy pipeline.
- `.wordpress-org/` – plugin directory assets bundled during release.

## Tooling & Command Flow
1. **Bootstrap:** Always run `npm install` after cloning or cleaning. Skipping this is the #1 cause of build failures.
2. **Develop:** Run `npm start` (`npm run dev`) to watch `src/` and emit fresh assets into `build/`. Leave it running while editing.
3. **Production build:** `npm run build` generates optimized assets; use this before committing or packaging.
4. **Formatting & linting:**
   - `npm run format` (Prettier) keeps JS/JSON/SCSS aligned with `.editorconfig` (tabs everywhere except YAML/Markdown).
   - `npm run lint:js` / `lint:js-fix` (ESLint) and `npm run lint:css` (stylelint). These commands currently report known issues—see below—so only chase NEW errors.
5. **Packaging:** `npm run plugin-zip` runs a production build and creates `dark-mode-toggle-block.zip` that matches `.distignore`.

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

## Manual Validation Checklist
1. Run `npm run build` (or keep `npm start` running) and confirm no unexpected errors/warnings.
2. In a local WP install (6.4+ / PHP 7.0+), activate the plugin and insert “Dark Mode Toggle” into a post/page.
3. Front end: click the toggle, ensure `document.documentElement` gains/loses `theme-dark`, ARIA attributes update, and the state persists across refreshes (check `localStorage.darkMode`).
4. Verify each style variation (Filled/Stroke/Circle/Eye) and size reflects the expected visuals from `style.scss`.

## Release & CI Guardrails
- CI (`create-release-and-deploy.yml`) runs automatically on tag push: checkout → Node 20.11 → `npm install` → `npm run plugin-zip` → GitHub Release → deploy to WordPress.org via 10up action (requires `SVN_USERNAME`/`SVN_PASSWORD` secrets).
- Before tagging: bump versions in `package.json`, `dark-mode-toggle-block.php`, and `readme.txt`, rebuild (`npm run build`), run `npm run plugin-zip`, smoke-test the zip on a staging WP site, then tag (`git tag vX.Y.Z && git push origin vX.Y.Z`).
- Never commit `build/` or `dark-mode-toggle-block.zip`; CI artifacts are generated on demand.

## Common Pitfalls
- **Missing install:** Build will complain about missing modules. Re-run `npm install`.
- **New lint failures:** Compare against the known warnings above; only resolve regressions you introduce.
- **Forgotten watcher:** `npm start` is long-running by design; stop with Ctrl+C when done.
- **Unsynced CSS/JS:** If you add new classes or data attributes in JS, update `style.scss` so the front end stays consistent.

## Final Notes
- Trust these instructions. Search the repo only when something here is incomplete or demonstrably wrong.
- Ensure `npm install` + `npm run build` succeed locally before pushing to avoid CI/tag failures.
- Keep manual test notes with your PRs so reviewers know the toggle was exercised in both light and dark states.
