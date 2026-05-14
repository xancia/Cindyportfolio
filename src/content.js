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
//          at the end of the "projects" list. Fill in your details.
//          Make sure "id" matches the folder name exactly.
//
//  Step 4: Save this file — your site is updated!
//
//  ── HOW TO ADD SKETCHBOOK IMAGES ────────────────────────────
//
//  Step 1: Drop your images into "public/art/sketchbook/"
//  Step 2: Add a line to the "sketchbook" list below.
//
//  ── ABOUT "homeSize" ────────────────────────────────────────
//
//  homeSize controls how a project appears on the home page reel:
//
//    "big"  → tall portrait  (4:5 ratio)
//    "wide" → landscape      (16:9 ratio)
//    "sq"   → square         (1:1 ratio)
//    "tall" → slim portrait  (3:4 ratio)
//
//  Tip: "sq" and "tall" pieces pair up side-by-side automatically.
//  Leave homeSize out entirely to hide the project from the home reel.
//
//  ── IMAGE FILE TYPES ────────────────────────────────────────
//
//  Any of these work: .jpg  .jpeg  .png  .webp  .gif
//
// ================================================================

const content = {
  // Your name — appears in the top-left wordmark and page title
  name: "Cindy Ma",

  // Your city — shown at the bottom of the home page
  location: "North Carolina",

  // Short line at the top of the contact page
  contactTagline:
    "Currently booking editorial & commercial commissions for 2025.",

  // Intro text on the sketchbook page
  sketchbookIntro:
    "A loose, untidy archive of personal drawings, studies and experiments. Updated occasionally — please don't repost without asking.",

  // ─── YOUR CONTACT LINKS ───────────────────────────────────────
  //
  //  Set any field to null to hide it from the contact page.
  //
  contact: {
    email: "hello@cindyma.com",
    instagram: "@cindyma", // your Instagram handle (with the @)
    arena: "/cindy-ma", // your Are.na channel path, e.g. "/cindy-ma"
    linkedin: null, // e.g. "/in/cindy-ma" — set to null to hide
  },

  // ─── ABOUT PAGE ───────────────────────────────────────────────
  about: {
    // Drop your portrait photo at:  public/art/portrait.jpg
    portrait: "/art/portrait.jpg",

    // Write as many paragraphs as you like
    bio: [
      "Write your intro paragraph here. Tell people who you are, what you make, and where you're based.",
      "Add a second paragraph here — your education, recent awards, what you're excited about right now.",
    ],

    education: "BFA Illustration, RISD — 2024",
    recognition: "3×3 Illustration Annual, Honorable Mention — 2024",

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
      homeSize: "big", // how it appears on home: "big" "wide" "sq" "tall"
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
      homeSize: "sq",
    },

    {
      id: "the-visitor",
      title: "Placeholder",
      tag: "Character",
      year: 2024,
      description:
        "Character design series for an independent publishing project.",
      images: ["01.jpg", "02.jpg", "03.jpg"],
      cover: "01.jpg",
      homeSize: "sq",
    },

    {
      id: "mark-making",
      title: "Placeholder",
      tag: "Typography",
      year: 2023,
      description: "Typographic exploration and hand-lettering experiments.",
      images: ["01.jpg", "02.jpg", "03.jpg"],
      cover: "01.jpg",
      homeSize: "wide",
    },

    {
      id: "long-walks",
      title: "Placeholder",
      tag: "Editorial",
      year: 2023,
      description: "Editorial illustration series for a travel publication.",
      images: ["01.jpg", "02.jpg"],
      cover: "01.jpg",
      homeSize: "tall",
    },

    {
      id: "ghost-town",
      title: "Placeholder",
      tag: "Concept",
      year: 2023,
      description: "Concept and worldbuilding work for an indie game project.",
      images: ["01.jpg", "02.jpg", "03.jpg"],
      cover: "01.jpg",
      homeSize: "tall",
    },

    {
      id: "soft-index",
      title: "Placeholder",
      tag: "Typography",
      year: 2023,
      description: "Typographic print series — risograph edition.",
      images: ["01.jpg", "02.jpg"],
      cover: "01.jpg",
      // no homeSize → hidden from home reel, still shows on Work page
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

  // ─── SKETCHBOOK ───────────────────────────────────────────────
  //
  //  Drop images into public/art/sketchbook/ and list them here.
  //  They appear in the order listed below.
  //
  sketchbook: [
    { file: "01.jpg", year: 2024 },
    { file: "02.jpg", year: 2024 },
    { file: "03.jpg", year: 2024 },
    { file: "04.jpg", year: 2024 },
    { file: "05.jpg", year: 2023 },
    { file: "06.jpg", year: 2023 },
    { file: "07.jpg", year: 2023 },
    { file: "08.jpg", year: 2023 },
  ],
};

export default content;
