# Cindy Ma — Portfolio

Hey Cindy! This is your portfolio website. Here's everything you need to know to keep it updated.

---

## The one file you'll edit

**`src/content.js`** is the only file you ever need to touch. Open it in any text editor (Notepad, TextEdit, VS Code — anything works) and you'll find clearly labelled sections for your projects, about page, resume, and contact info.

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
  featured:    true,               // shows on the home page — remove this line to leave it off
},
```

**Step 4 — Save the file.** That's it!

**Bonus:** every project gets its own link you can share directly, e.g.
`yoursite.com/#/project/my-new-project` — handy for sending one piece to a client.

---

## The home page

The home page shows your name, tagline, intro, resume and social links — plus up to **6 floating artwork cards** that visitors can drag around and click to open the project.

To put a project on the home page, add `featured: true` to it. Remove the line to take it off (it will still appear on the Work page). If more than 6 projects are featured, the first 6 in the list are shown.

You can also edit these home page texts at the top of `src/content.js`:

- `tagline` — the short line under your name (e.g. `"illustrator · character designer"`)
- `intro` — the one-sentence welcome
- `location` — shown in the footer

---

## Your resume

Drop your resume PDF at:

```
public/resume.pdf
```

A "resume" button then appears on the home page and about page automatically. Don't have one ready? Set `resume: null` in `src/content.js` to hide the buttons.

---

## Updating your info

Everything else is in `src/content.js` too:

- **Your name** — the `name` field at the top
- **About page** — `about.bio`, `about.portrait`, `about.clients`, etc.
  - Drop your portrait photo at `public/art/portrait.jpg`
- **Contact links** — `contact.email`, `contact.instagram`, etc.
  - These show on both the home page and the contact page
  - Set any field to `null` to hide it everywhere

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

## Publishing changes — it's automatic!

The site lives at **https://xancia.github.io/Cindyportfolio/**

Whenever a change lands on GitHub, the site rebuilds and goes live by itself
a minute or two later. No build steps, no uploading. You have two easy ways
to make changes:

**Right in your browser (easiest)** — go to
[github.com/xancia/Cindyportfolio](https://github.com/xancia/Cindyportfolio):

- To edit text: open `src/content.js`, click the pencil icon, make your
  change, and press **Commit changes**.
- To add images: navigate into `public/art/work/`, then **Add file →
  Upload files** and drag your new project folder's images in.

**Or on your computer** — edit the files, then commit & push (GitHub
Desktop is the friendliest way to do this).

Either way, check the **Actions** tab on GitHub if you're curious — you'll
see your update building, and a green checkmark when it's live.

## Previewing the site locally

If you want to see changes before publishing, open a terminal in this folder and run:

```
npm run dev
```

Then open the link it shows (usually `http://localhost:5173/Cindyportfolio/`) in your browser. Stop it with `Ctrl + C`.
