# Q Calendar website rebuild

Planning date: 2026-09-20
Branch: `codex/website-rebuild-plan`
Status: foundation implemented on this branch. Cloudflare Git preview deployment and GitHub checks have been verified. Analytics and new content sections remain deferred.

## Scope

Rebuild the Q Calendar marketing website using the current product identity and reusable assets. Replace the template architecture rather than patching the old site. Keep development logs, roadmaps, feedback systems, and behind-the-scenes content out of this round, per the user's request to skip those additions.

## Recommended architecture

- Astro with TypeScript, static output, and CSS custom properties.
- Reusable components for navigation, store links, screenshot galleries, feature sections, language switching, and footer.
- Structured localized content for Chinese, English, and Japanese; Markdown for legal and About pages.
- Minimal browser JavaScript for interactions and analytics. No database, authentication, or Firebase SDK required for this scope.
- Use the existing Cloudflare Pages Git integration. See `docs/deployment.md` for the build command and production branch.

Astro is designed for content-driven sites and supports selectively adding browser-side interactivity: https://docs.astro.build/en/concepts/why-astro/

## Analytics recommendation

Keep the mobile app's existing Firebase project. The website does not need a Firebase project of its own.

Prefer the existing Q Calendar GA4 property with a dedicated marketing-site web stream, using the Google tag directly. Reuse the existing web stream only after verifying that it is unused or intended for this site; otherwise create a separately named stream. This shares product-level reporting without adding Firebase services to the website.

Use a separate GA4 property in the same Analytics account if independent reporting, access, or property-level settings become a requirement. Do not create another Firebase project solely for tracking.

Verified existing resources:

- Firebase project: `q-calendar-41b0f`
- GA4 property: `445574159` (`q calendar`)
- Existing web stream: `8256977582` (`G-W5VZRN9JMQ`)
- Android and iOS apps are also mapped to this property.

A shared property does not automatically attribute website visitors to app installs. Report store-button clicks as outbound intent, not installs.

Google's account-structure guidance includes a product marketing site and its corresponding mobile apps in one property with separate streams: https://support.google.com/analytics/answer/9679158

## Delivery sequence

1. Inventory assets and content. Reuse the app icon, store badges, screenshots, colors, translations, and legal text where still accurate. Check image quality and current app behavior. Verify existing production routes, redirects, and deployment ownership.
2. Establish the visual direction. Build one responsive homepage preview with a clear product introduction, real app demonstration, benefit sections, and store calls to action. Preserve the playful identity; review the desktop and mobile composition before replicating across locales.
3. Build the Astro foundation. Replace Ruby/Jekyll and Webpack with one Node-based build, shared components, localized content, and design tokens. Preserve `/`, `/en/`, `/ja/`, `/zh/` redirect behavior, `/about/`, `/privacy/`, and `/terms-and-conditions/` as appropriate to their current behavior.
4. Migrate content and metadata. Set `https://qcalendar.regnum.io` as the product origin, give each page correct canonical and language metadata, and generate the sitemap and sharing metadata. Resolve the current Web/PWA link to the company site within the rebuild.
5. Add analytics. Confirm the intended stream, implement production-only page measurement and `download_click` with store platform, page language, and placement. Define website-specific privacy disclosure and collection preferences before production collection. Exclude feedback text, email addresses, and other personal content from event parameters.
6. Validate and prepare release. Check static build, navigation, redirects, all locales, mobile layouts, keyboard access, image loading, and metadata. Verify exactly one event per action using the appropriate debug setup; verify Realtime receipt on production after deployment. Confirm the host's output-directory configuration and retain the previous deployment for rollback.

## Completion criteria

- Existing product assets reused in a responsive, independently maintainable site.
- Current language and legal URLs remain usable.
- Correct product-domain metadata; store buttons have accurate destinations.
- No analytics sent from ordinary development or preview sessions.
- Store clicks measured without representing them as installs.
- Reproducible static build and verified deployment configuration.

## Decisions to resolve during implementation

- Existing web stream usage and configured website URL.
- Current production host and build/deploy workflow.
- Whether existing screenshots still represent the shipped product.
- Final visual direction and website analytics collection preferences.
