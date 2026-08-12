# Making Mira — Website

Single-page portfolio + commission site. No build step, no dependencies —
three files, ready for GitHub Pages.

## Files

| File | What it is | Edit it when… |
|---|---|---|
| `index.html` | All content: text, images, links | You want to change words or swap in photos |
| `styles.css` | All the look: colors, fonts, layout, tile shapes | You want to retheme (colors live at the top under **DESIGN TOKENS**) |
| `script.js` | Fade-in animation + the commission form | Your email address changes |
| `images/` | Put your photos here | Adding portfolio/hero/featured photos |

Search for **`EDIT HERE`** in `index.html` and `script.js` — every spot meant
for your own content is marked, including the alt-text slots for each photo.

## Adding your photos

1. Drop photos into the `images/` folder (e.g. `images/work-1.jpg`).
2. In `index.html`, find the tile (or hero chip / featured arch), delete the
   placeholder `<svg>` (or empty `<div>`/`<span>`), and uncomment the `<img>`
   line next to it.
3. Write the alt text — a one-line description of the piece for screen
   readers and search engines.

Portfolio tiles like square-ish photos; the featured arch likes a vertical
(portrait) photo; the hero chip likes a wide close-up crop.

## Publishing on GitHub Pages

1. Create a new repository on github.com (e.g. `makingmira-site`).
2. Upload `index.html`, `styles.css`, `script.js`, and the `images/` folder
   (on the repo page: **Add file → Upload files**).
3. Go to **Settings → Pages**, under "Build and deployment" choose
   **Deploy from a branch**, pick `main` and `/ (root)`, and save.
4. After a minute your site is live at `https://YOURUSERNAME.github.io/makingmira-site/`.
5. (Optional) To use makingmira.com, add it as a custom domain on that same
   Pages settings screen and follow GitHub's DNS instructions.

## The commission form

The form opens the visitor's own email app with a pre-filled message to
makingmirajewelry@gmail.com — zero setup, works on GitHub Pages.

If you'd rather have submissions land in your inbox directly (no email app
needed), make a free form at [formspree.io](https://formspree.io), then in
`index.html` change the form tag to
`<form id="inquiry-form" action="https://formspree.io/f/YOUR_ID" method="POST">`.
The mailto handler in `script.js` steps aside automatically once an
`action` is present.
