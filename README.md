# Jacob Sohlberg — academic website

A complete static website prepared for **jacobsohlberg.github.io**. Open `index.html` in your browser to preview it. No installation, build system, or external dependencies are required.

## Contents

- `index.html`: homepage with research themes, a featured project, selected publications, teaching, and contact information.
- `publications.html`: 23 journal articles, 16 books/chapters/reports, and five working papers. Journal articles can be searched by title, author, journal, or year.
- `cv.html`: public web CV covering appointments, education, grants, teaching, service, training, outreach, and leadership. Use its **Print / save as PDF** button for a printable version. The complete bibliography is on the publications page, linked from the CV.
- `style.css`: responsive design and print styles.
- `site.js`: publication search and print button. Content and navigation also work without JavaScript.
- `favicon.svg`: JS monogram browser icon.
- `.nojekyll`: bypasses Jekyll processing on GitHub Pages.

## Publish to GitHub Pages

1. Sign in as **jacobsohlberg** and create a **public** repository named **jacobsohlberg.github.io**. If that repository already exists, inspect and back it up before replacing any files.
2. Upload the contents of this folder to the repository's `main` branch. Put `index.html` at the repository root, not inside an `academic-site` folder. Upload extracted files, not the ZIP itself. Include `.nojekyll` when using Git; the plain HTML also works with GitHub's default Pages processing.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, then **main** and **/ (root)**, and save.
5. Once GitHub finishes deployment, the site will be at **https://jacobsohlberg.github.io/**. It may take several minutes.

Create repository: https://github.com/new?name=jacobsohlberg.github.io

GitHub's publishing guide: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

The files have been prepared locally. No repository has been created or modified, and the website has not been published by this task.

## Edit the site

Edit the HTML files directly, locally or with GitHub's file editor. Changes committed to `main` will publish automatically after Pages is enabled. Colors and spacing are in `style.css`.

For a new publication, copy one `<article class="publication">` block on the publications page. Update the year, title, authors, venue, and DOI link. Update the article totals and year range when needed. Featured homepage entries are maintained separately.

To add a portrait, place the image in this folder and replace the decorative SVG inside `.hero-visual` with an image element such as `<img src="portrait.jpg" alt="Jacob Sohlberg" style="display:block;width:100%;height:auto">`.

## Content notes for review

- Bibliographic details and career information follow the supplied CV. Most DOI links are constructed from its identifiers and have not been independently verified. The Political Geography article’s published title, author order, online publication date, and DOI were checked against the Aarhus University publication record: https://pure.au.dk/portal/en/publications/the-subjective-dimension-of-residential-segregation-comparing-nei/. Official university, Delmi, MSB, and publisher links for eight additional publications were checked on 25 September 2026. The two chapters in “Allt tyder på ett terrordåd” link to the publisher’s book page; the Fragment chapter links to its opening page in the complete book PDF.
- The homepage introduction, research themes, and descriptions are editorial summaries of the CV for review.
- University email and postal address are included. Phone numbers, grant funding amounts, teaching-hour totals, and personal leave history are omitted from this public-facing version.
- The original CV lists the discrimination/integration-paradox article under 2023 with volume 12(4); that combination is retained. Please confirm whether you prefer online-first or issue publication years.
- The journal name “Terrorism and Political Studies” in the reviewer list is retained as supplied; please confirm the intended journal name.
- The neighborhood illustration and small research graphics are decorative, not maps or data visualizations.
- There are no tracking scripts, external fonts, stock images, or fabricated profile links.
