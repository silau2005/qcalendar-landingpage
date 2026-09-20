# Deployment operations

## Production and previews

- Repository: `silau2005/qcalendar-landingpage`
- Cloudflare Pages project: `qcalendar-landingpage`
- Production branch: `master`
- Production domain: `qcalendar.regnum.io`
- Cloudflare fallback domain: `qcalendar-landingpage.pages.dev`
- Build root: repository root
- Build output: `build`
- Node version: `24` through `.nvmrc`
- Build command: `if [ -f astro.config.mjs ]; then npm run check && npm run build; fi`
- Production automatic deployments: enabled
- Preview branches: all branches other than production

The original Cloudflare project was already connected to GitHub, but had an empty build command. It could only publish the previously committed `build/` directory. The new setup compiles from source after each push. The conditional build command preserves old-branch deployments during migration. It can be simplified to `npm run check && npm run build` once rollback to old source is no longer needed.

## Routine workflow

1. Make changes on a branch.
2. Push and open a pull request. GitHub runs type checks and browser tests; Cloudflare builds a preview.
3. Review the preview on mobile and desktop and wait for checks to pass.
4. Merge to `master`. Cloudflare builds and publishes production automatically.
5. Verify the Pages deployment succeeded and inspect the live site.

GitHub browser checks and Cloudflare publishing run independently. A direct production push is published if the Cloudflare type check/build passes, even if a later browser check fails. Required PR checks can enforce review before merging; branch protection is not changed by this rebuild.

No API token is required in GitHub because Cloudflare uses its existing authorized GitHub connection. The repo contains no Cloudflare or Firebase secrets.

## If a deployment fails

Open the project's Deployments page in Cloudflare. Inspect dependency installation, Node version, type diagnostics, and build logs. A failed build should leave the previous successful production deployment serving traffic. Fix the error and push again; do not upload a local build as the normal workflow.

## Rollback

In Cloudflare Pages, select a previous successful production deployment and use Rollback. Then revert the offending commit in Git and push the revert so the source matches production. If restoring the old Jekyll revision, retain the conditional build command: the old revision publishes its committed `build/` output without running Astro.

## Branch rename

GitHub Actions handles pushes to `master` and `main`, but Cloudflare has one production branch. Update the Pages production-branch setting when renaming the GitHub default branch. Other branches should remain previews.

## References

- https://developers.cloudflare.com/pages/configuration/git-integration/
- https://developers.cloudflare.com/pages/configuration/build-configuration/
- https://developers.cloudflare.com/pages/configuration/rollbacks/
