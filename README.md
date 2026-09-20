# Q Calendar website

The static, multilingual marketing site at https://qcalendar.regnum.io.
Built with Astro and TypeScript. Node 24 is pinned in `.nvmrc`.

## Develop

```sh
nvm use
npm ci
npm run dev
```

Open http://localhost:4321. Chinese is at `/`, English at `/en/`, and Japanese at `/ja/`.

```sh
npm run check       # Astro and TypeScript diagnostics
npm run build       # Static output in build/ (not committed)
npm run preview     # Serve the production build
npx playwright install chromium
npm test            # Desktop and mobile browser checks
npm run validate    # Check, build, and browser tests
```

Astro may run dev/preview in the background when invoked by a coding agent. Use `npx astro dev stop` or `npx astro preview stop` to stop those servers. The test runner uses `--ignore-lock` to own its foreground server.

## Deployment

Cloudflare Pages already connects this repository to `qcalendar-landingpage`.
Production follows **master**. Pushes to other branches create preview deployments.

The configured build command is:

```sh
if [ -f astro.config.mjs ]; then npm run check && npm run build; fi
```

Output directory: **build**. Node version: **24** (from `.nvmrc`).
The conditional keeps the original Jekyll master branch deployable during migration: it publishes its existing committed build. After merging this rebuild, Cloudflare builds Astro from source on every production push. Future generated build files must not be committed.

GitHub Actions also checks types, builds, and runs desktop/mobile browser tests on pull requests and pushes to `master` or `main`. It saves the static build as an artifact. Cloudflare handles publishing through its existing Git integration; no Cloudflare token is stored in GitHub.

Cloudflare builds independently of GitHub Actions. Type/build failures block Cloudflare deployment; browser tests are a separate GitHub check. Wait for both checks before merging a PR. If the production branch is renamed to `main`, update it in Cloudflare as well; the workflow already accepts either name.

See [deployment operations](docs/deployment.md) for settings and rollback.

## Where to make changes

| Area                                     | File or directory                 |
| ---------------------------------------- | --------------------------------- |
| Colors, fonts, spacing, light/dark theme | `src/styles/tokens.css`           |
| Responsive layout and shared styles      | `src/styles/global.css`           |
| Translations, store URLs, site identity  | `src/content/site.ts`             |
| Homepage sections                        | `src/components/Home.astro`       |
| Navigation, metadata, footer             | `src/layouts/BaseLayout.astro`    |
| Markdown page layout                     | `src/layouts/ContentLayout.astro` |
| About, privacy, terms                    | `src/pages/*.md`                  |
| Existing app art and screenshots         | `public/assets/images/`           |
| Browser regression checks                | `tests/site.spec.ts`              |
| GitHub checks                            | `.github/workflows/website.yml`   |

Use the shared tokens instead of introducing unrelated colors into components. Content pages use the same layout and theme. Theme choices are System, Light, and Dark, with the explicit choice stored locally. App artwork keeps its original colors in both themes.

Existing `/about/`, `/privacy/`, `/terms-and-conditions/`, and language URLs are retained. `/zh/` redirects to `/`. `astro.config.mjs` owns the canonical product origin and generates a sitemap.

## Analytics

Website GA collection is not enabled in this foundation release. The existing Firebase project is for the mobile app; the intended use of its existing web stream still needs confirming. Store links already expose `data-store` and `data-placement` for future event instrumentation. Add website privacy disclosure and collection controls when enabling tracking.

## Original assets and attribution

The original `_images/` artwork and `docs/` design source files are retained for reference. Public site assets are under `public/`.
The previous site used Sandoche Adittane’s [Mobile App Landing Page Template](https://github.com/sandoche/Mobile-app-landingpage-template). Its MIT license is retained in `LICENSE`. Ruby/Jekyll, Webpack, generated site output, and template scripts have been removed from the active application; prior versions remain in Git history.
