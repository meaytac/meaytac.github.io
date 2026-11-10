# Mustafa Eren Aytaç’s portfolio

An English-language software engineering portfolio built with Astro, TypeScript, and plain CSS. Content and navigation work with JavaScript disabled. The theme switch uses JavaScript to remember an explicit preference.

## Local development

Use Node.js 24 LTS (or Node.js 22.23.4 or later in the 22.x line) and npm.

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

Use the URL printed by Astro. The dev server and preview server default to ports 4321 and 4321 respectively, so stop development before starting preview or give one server another port.

## Routes

- `/` — introduction, featured housing project, internship experience, education, skills, languages, and contact links.
- `/projects/residence-management-system/` — the University Housing Management System case study and application workflow.
- `/resume/` — résumé image preview and downloadable English PDF.
- `/404.html` — custom page for unknown routes.

## Updating the content

- Edit the profile, experience, education, skills, languages, project summaries, case studies, and project links in `src/content/portfolio.ts`. Only projects with case-study sections generate detail pages. Set `linkLabel` when adding one.
- Edit the optional production URL, résumé path, contact links, and social share image path in `src/content/settings.ts`. Leave unavailable values empty. Use a bare address for email, public HTTPS profile URLs, and the final HTTPS origin for `siteUrl`. The build emits canonical URLs and a sitemap once the origin is set.
- Put approved local assets in `public/`. Set `resumePath` to the root-relative path of the English PDF. Set `resumeImage` with the preview image path and intrinsic dimensions. Set `shareImagePath` to a root-relative PNG, JPEG, or WebP path. The share image needs a production URL. For any project screenshots, supply dimensions and meaningful alt text, lazy-load below the fold, and use synthetic records in demo captures.
- Edit the application diagram in `src/components/Workflow.astro` and the screenshot captions in `src/components/HousingScreenshots.astro`. The housing screenshots are in `public/projects/housing/` and come from the supplied project archive.
- The shared layout lives in `src/layouts/Site.astro` and the site styles live in `src/styles/site.css`.

## Contact form

Enter your Web3Forms access key in `settings.web3FormsAccessKey` in `src/content/settings.ts`, then rebuild and deploy. This key is included in the public form HTML. When it is empty, the submit button is disabled and visitors can still use the direct contact links. With JavaScript disabled, Web3Forms displays its hosted success page after an accepted submission.

## Static hosting

The portfolio is configured for [GitHub Pages](https://meaytac.github.io/). Pushes to `main` build and deploy the site through `.github/workflows/deploy.yml`. In the repository’s Pages settings, set the source to GitHub Actions.

Run `npm ci` and `npm run build`, then serve `dist/` from the root of the configured origin. Enable directory index resolution for trailing-slash routes. Configure the host to serve `404.html` with HTTP status 404 for unknown URLs.

## Before launch

- [ ] Review the internship case study and project screenshots before publication.
- [ ] Add a public demo link if available.
- [ ] Review both résumé files for public sharing. They include the contact information from the supplied files.
- [ ] Optionally add an approved share image.
- [ ] Review public assets and project content for credentials, private internship material, and identifiable records. Rebuild, verify enabled links, and check the host’s sitemap and custom 404.
