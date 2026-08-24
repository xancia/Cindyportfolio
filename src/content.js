// ================================================================
//  CINDY MA PORTFOLIO — SITE CONTENT
//
//  This is the only file you need to edit.
//  Everything on the website comes from here.
//
//  ── HOW TO ADD A NEW PROJECT ────────────────────────────────
//
//  Step 1: Create a folder for your project inside "public/art/work/"
//          The folder name must match the "id" field below.
//          Example:  public/art/work/my-new-project/
//
//  Step 2: Drop your image files into that folder.
//          Example:  public/art/work/my-new-project/01.jpg
//                    public/art/work/my-new-project/02.jpg
//
//  Step 3: Copy one of the project blocks below and paste it
//          where you want it in the "projects" list. Fill in
//          your details. Make sure "id" matches the folder name.
//
//  Step 4: Save this file — your site is updated!
//
//  ── ABOUT "featured" ────────────────────────────────────────
//
//  Projects marked  featured: true  show up as the floating
//  art cards on the home page (the first 6 featured projects).
//  Every project always appears on the Work page either way.
//
//  ── YOUR RESUME ─────────────────────────────────────────────
//
//  Drop your resume PDF at  public/resume.pdf  and the site
//  will link to it from the home page and about page.
//  Set  resume: null  below to hide the resume button.
//
//  ── IMAGE FILE TYPES ────────────────────────────────────────
//
//  Any of these work: .jpg  .jpeg  .png  .webp  .gif
//
// ================================================================

const content = {
  // Your name — appears in the wordmark, home page and page title
  name: "Cindy Ma",

  // Short line under your name on the home page.
  // The "·" dots are just typed characters — add or remove words freely.
  tagline: "illustrator · character designer",

  // One friendly sentence of welcome on the home page
  intro: "Hi, I'm Cindy — bio here!",

  // Your city — shown at the bottom of the home page
  location: "North Carolina",

  // Link to your resume — drop the file at public/resume.pdf
  // Set to null to hide the resume buttons.
  resume: "/resume-cindy-ma.pdf",

  // Short line at the top of the contact page
  contactTagline:
    "Currently booking editorial & commercial commissions.",

  // ─── YOUR CONTACT LINKS ───────────────────────────────────────
  //
  //  These appear on the home page and the contact page.
  //  Set any field to null to hide it.
  //
  contact: {
    email: "cindyma8578@gmail.com",
    instagram: "@xxcynthiarts", // your Instagram handle (with the @)
    pinterest: "@xxcynthiarts", // your Pinterest handle (with the @)
    linkedin: null, // e.g. "/in/cindy-ma" — set to null to hide
  },

  // ─── ABOUT PAGE ───────────────────────────────────────────────
  about: {
    // Drop your portrait photo at:  public/art/portrait.jpg
    portrait: "/art/charlotte-headshot.jpg",

    // Write as many paragraphs as you like
    bio: [
      "I'm a digital artist who has been drawing since I was a child, from the age of 10. However, I've rediscovered my love for art about five years ago and been creating ever since. I was a student at Rocky Mountain College of Art & Design, majoring in Illustration. I primarily work digitally using a program called Clip Studio Paint and an XP-Pen tablet, where I bring my ideas to life through expressive character designs and detailed concept art.",
      "In recent years, I developed a growing interest in book jacket illustration and design, exploring the creative relationship between typography, lettering, and visual storytelling. My works reflects a thoughtful balance between aesthetic composition and emotional narrative.",
      "Born and raised in a Vietnamese household that values hard work and perseverance, I carry those same principles into my artistic journey. Family remains close to my heart, as it continues to inspire my work through that emotional connection.",
    ],

    education: "Bachelors Illustration, RMCAD 2026",
    recognition: "Illustration with Honorable Mention, 2026",

    // List up to 8 clients — they appear in a two-column grid
    clients: [
      "Client One",
      "Client Two",
      "Client Three",
      "Client Four",
      "Client Five",
      "Client Six",
    ],
  },

  // ─── PROJECTS ─────────────────────────────────────────────────
  //
  //  Each entry is one project. Add as many as you like.
  //  Projects appear on the Work page in the order listed here.
  //  Add  featured: true  to show a project on the home page.
  //
  projects: [
    {
      // "id" must match the folder name inside public/art/work/
      // Example: public/art/work/quiet-hours/
      id: "quiet-hours",
      title: "Placeholder",
      tag: "Editorial", // used for the filter buttons on Work page
      year: 2024,
      description:
        "A short description of this project. One or two sentences about the brief, medium, or concept.",
      images: ["01.jpg", "02.jpg", "03.jpg", "04.jpg"],
      cover: "01.jpg", // thumbnail on Work and Home pages
      featured: true, // shows as a floating card on the home page
    },

    {
      id: "field-notes",
      title: "Placeholder",
      tag: "Personal",
      year: 2024,
      description:
        "Personal sketchbook explorations turned into a small publication.",
      images: ["01.jpg", "02.jpg", "03.jpg"],
      cover: "01.jpg",
      featured: true,
    },

    {
      id: "the-visitor",
      title: "Sato Kazuki",
      tag: "Character",
      year: 2026,
      description:
        "Character design series for an independent publishing project.",
      images: ["sato-kazuki-2.0.jpg"],
      cover: "sato-kazuki-2.0.jpg",
      featured: true,
    },

    {
      id: "mark-making",
      title: "Placeholder",
      tag: "Typography",
      year: 2023,
      description: "Typographic exploration and hand-lettering experiments.",
      images: ["01.jpg", "02.jpg", "03.jpg"],
      cover: "01.jpg",
      featured: true,
    },

    {
      id: "long-walks",
      title: "Placeholder",
      tag: "Editorial",
      year: 2023,
      description: "Editorial illustration series for a travel publication.",
      images: ["01.jpg", "02.jpg"],
      cover: "01.jpg",
      featured: true,
    },

    {
      id: "ghost-town",
      title: "Placeholder",
      tag: "Concept",
      year: 2023,
      description: "Concept and worldbuilding work for an indie game project.",
      images: ["01.jpg", "02.jpg", "03.jpg"],
      cover: "01.jpg",
      featured: true,
    },

    {
      id: "soft-index",
      title: "Placeholder",
      tag: "Typography",
      year: 2023,
      description: "Typographic print series — risograph edition.",
      images: ["01.jpg", "02.jpg"],
      cover: "01.jpg",
      // no "featured" → not on the home page, still on the Work page
    },

    {
      id: "garden-state",
      title: "Placeholder",
      tag: "Personal",
      year: 2022,
      description: "Personal photography and illustration work.",
      images: ["01.jpg", "02.jpg"],
      cover: "01.jpg",
    },
  ],
};

export default content;
