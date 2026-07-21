import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // The site is hosted at https://xancia.github.io/Cindyportfolio/
  // If it ever moves to a custom domain, change this to '/'
  base: '/Cindyportfolio/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
