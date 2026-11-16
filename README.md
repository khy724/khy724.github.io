# Personal Website Template

A dependency-free personal website designed for GitHub Pages. It includes Home, Hobbies, Ideas, and Projects pages.

## Edit Your Content

Most text and links are in `site-data.js`:

- `person`: name, role, location, biography, email, and portrait
- `socialLinks`: profile and contact links
- `hobbies`: hobby cards
- `interests.branches`: mind-map content
- `articles`: article and reading-note links
- `projects`: project cards, tags, demos, and source links

Replace `assets/profile-placeholder.svg` with your photo. You can keep the same filename or update `person.photo` in `site-data.js`. A portrait-oriented image around 1200 x 1500 pixels works well.

Update each page's `<title>` and description after replacing the sample name. Colors and layout variables are at the top of `styles.css`.

Track new decisions and requests in `REQUIREMENTS.md`.

## Preview Locally

Because this is a static site, opening `index.html` directly works. For a closer GitHub Pages preview, run:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish on GitHub Pages

1. Create a GitHub repository, such as `personal-website`.
2. Push the contents of this folder to the repository's `main` branch.
3. In GitHub, open **Settings > Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder, then save.
6. GitHub will publish the site at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

For a root profile site at `https://YOUR-USERNAME.github.io/`, name the repository `YOUR-USERNAME.github.io`.

## File Map

```text
assets/profile-placeholder.svg  Replaceable portrait placeholder
index.html                      Home page
hobbies.html                    Hobbies page
interests.html                  Mind map and articles page
projects.html                   Projects page
site-data.js                    Editable content
app.js                          Shared page rendering
styles.css                      Visual design and responsive layout
REQUIREMENTS.md                 Living requirements and decisions
```
