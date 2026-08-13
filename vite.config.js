import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Static courses under public/ are plain HTML, not SPA routes. In production
 * nginx resolves a directory URL like /js-course/ to its index.html via
 * `try_files $uri/`, but Vite's dev server rewrites any extensionless path that
 * accepts HTML to the SPA shell — so /js-course/ silently rendered the React
 * home page while the same URL worked once deployed.
 *
 * This restores the missing half of that behaviour so dev matches production and
 * the link can stay a clean directory URL. Runs before Vite's SPA fallback.
 */
const staticDirIndex = () => ({
  name: 'static-dir-index',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      const path = req.url.split('?')[0]
      if (path.endsWith('/') && path !== '/') req.url = path + 'index.html'
      next()
    })
  },
})

export default defineConfig({
  plugins: [react(), staticDirIndex()],
  server: { port: 5173, open: true },
  build: { outDir: 'dist' }
})
