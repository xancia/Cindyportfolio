# Cindy Ma — Portfolio

Hey Cindy! This is your portfolio website. Here's everything you need to know to keep it updated.

---

## The one file you'll edit

**`src/content.js`** is the only file you ever need to touch. Open it in any text editor (Notepad, TextEdit, VS Code — anything works) and you'll find clearly labelled sections for your projects, sketchbook, about page, and contact info.

---

## Adding a new project

**Step 1 — Create a folder for it**

Inside `public/art/work/`, create a new folder. The folder name will be your project's ID — use lowercase letters and hyphens, no spaces.

```
public/art/work/my-new-project/
```

**Step 2 — Drop your images in**

Put all the images for that project inside the folder. Name them however you like (e.g. `01.jpg`, `02.jpg`, or descriptive names).

```
public/art/work/my-new-project/01.jpg
public/art/work/my-new-project/02.jpg
public/art/work/my-new-project/03.jpg
```

**Step 3 — Add it to `src/content.js`**

Open `src/content.js` and find the `projects` list. Copy an existing project block and paste it at the position you want (projects appear on the Work page in the order they're listed). Fill in your details:

```js
{
  id:          "my-new-project",   // must match the folder name exactly
  title:       "My New Project",
  tag:         "Editorial",        // used for the filter buttons: Editorial, Character, Typography, etc.
  year:        2025,
  description: "One or two sentences about the project.",
  images:      ["01.jpg", "02.jpg", "03.jpg"],
  cover:       "01.jpg",           // which image shows as the thumbnail
  homeSize:    "big",              // see "Home page reel" below — remove this line to hide from home
},
```

**Step 4 — Save the file.** That's it!

---

## Home page reel

The home page shows a curated scroll of your work. To include a project on the home page, add a `homeSize` field to it. Leave it out to keep a project off the home page (it will still appear on the Work page).

| `homeSize` | Shape |
|---|---|
| `"big"` | Tall portrait (4:5) |
| `"wide"` | Landscape (16:9) |
| `"sq"` | Square (1:1) |
| `"tall"` | Slim portrait (3:4) |

Square and tall pieces automatically pair up side-by-side. Big and wide pieces take up a full row.

---

## Adding sketchbook images

**Step 1** — Drop your images into `public/art/sketchbook/`

**Step 2** — Add a line to the `sketchbook` list in `src/content.js`:

```js
{ file: "my-drawing.jpg", year: 2025 },
```

Images appear in the order they're listed.

---

## Updating your info

Everything else is in `src/content.js` too:

- **Your name** — the `name` field at the top
- **About page** — `about.bio`, `about.portrait`, `about.clients`, etc.
  - Drop your portrait photo at `public/art/portrait.jpg`
- **Contact links** — `contact.email`, `contact.instagram`, etc.
  - Set any field to `null` to hide it from the contact page

---

## Image tips

- Any format works: `.jpg`, `.png`, `.webp`, `.gif`
- Images are displayed in the order they're listed in `images: [...]`
  - First image → hero (large, top of project page)
  - Images 2–3 → side-by-side plates below the hero
  - Image 4 → wide landscape strip
  - Images 5+ → three-column grid at the bottom
- Higher resolution is better — aim for at least 1500px on the longest side
- Compress your images before uploading to keep the site fast ([squoosh.app](https://squoosh.app) is free and easy)

---

## Previewing the site locally

If you want to see changes before publishing, open a terminal in this folder and run:

```
npm run dev
```

Then open the link it shows (usually `http://localhost:5173`) in your browser. Stop it with `Ctrl + C`.

## Publishing changes

When you're ready to go live:

```
npm run build
```

This creates a `dist/` folder. Upload the contents of that folder to your hosting provider (Netlify, Vercel, etc.).
