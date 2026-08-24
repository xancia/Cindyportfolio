import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // The site is hosted at the root of https://cindyarts.com
  // (If it ever moves back to xancia.github.io/Cindyportfolio without
  //  the custom domain, change this to '/Cindyportfolio/')
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    // OneDrive can briefly lock large artwork files while syncing. Public
    // assets are served directly, so watching them is unnecessary and can
    // crash Vite with EBUSY on Windows.
    watch: {
      ignored: ['**/public/art/**'],
    },
  },
})
