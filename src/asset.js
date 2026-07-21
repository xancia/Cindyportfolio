// Turns a friendly path from content.js (e.g. "/art/portrait.jpg") into a
// URL that works wherever the site is hosted — the root of a domain or a
// sub-path like GitHub Pages' /Cindyportfolio/. Vite fills in BASE_URL
// from the "base" setting in vite.config.js.
export default function asset(path) {
  return import.meta.env.BASE_URL + path.replace(/^\//, '')
}
