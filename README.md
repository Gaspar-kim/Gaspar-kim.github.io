# Donyung Kim — Academic Research Homepage

A dependency-free static site for GitHub Pages.

## Update content

Most content lives in `data/site-data.js`:

- `profile` — position, biography, portrait, and profile links
- `researchIntroduction` — research statement, stages, goal, and loop
- `news`, `publications`
- `experience`, `education`, `awards`, `patents`

Layout and styling are separated into:

- `index.html` — semantic page structure and metadata
- `styles.css` — responsive layout and visual styles
- `app.js` — rendering the structured data into the page

For publications, use these optional fields when needed:

```js
authorRole: "First author",
equalContributionAuthors: ["Author A", "Donyung Kim"]
```

Images are stored under `assets/profile` and `assets/publications`; downloadable
documents are stored under `assets/cv` and `assets/documents`. Keep the same
filename to replace an existing asset without editing the data file.

## Preview locally

Open PowerShell in this repository and run:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000` in a browser. Stop the server with `Ctrl+C`.

## Save and publish changes

```powershell
git add .
git commit -m "Update homepage content"
git push origin main
```

GitHub Pages normally updates within a few minutes at
`https://gaspar-kim.github.io/`.
