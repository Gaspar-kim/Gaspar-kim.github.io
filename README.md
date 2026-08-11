# Donyung Kim — Academic Research Homepage

A dependency-free static site intended for GitHub Pages.

## Update content

All profile, news, publication, project, experience, education, award, patent, and social-link content lives in:

`data/site-data.js`

Layout and styling are separated into:

- `index.html` — semantic page structure and metadata
- `styles.css` — responsive visual system
- `app.js` — rendering structured data into the page

## Replace placeholders

1. Add Google Scholar and LinkedIn URLs to `profile.socialLinks` and remove `placeholder: true`.
2. Replace `profile.position` after the Ph.D. institution, department, and advisor are confirmed.
3. Replace `assets/profile/og-placeholder.svg` with a 1200 × 630 social-preview image if desired.
4. Add paper or project URLs for the ICCAS publications when available.

## Run locally

From this directory:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish with GitHub Pages

Create a public repository named `Gaspar-kim.github.io`, commit these files to its default branch, and push. GitHub Pages user sites are served from that repository automatically; confirm the Pages settings if deployment does not start.
