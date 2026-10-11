# Abhishek Sinha — Software & Technical Trainer

Portfolio + course website. Built with **React 18 + Vite**.

Live: https://codingwithabhi.com

## Quick start

```bash
npm install      # install dependencies (first time only)
npm run dev      # start the dev server at http://localhost:5173 (hot reload)
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

## Deploy

Run `npm run build`, then upload the contents of the **`dist/`** folder to your web
host (or connect the repo to Vercel/Netlify — they auto-detect Vite).

On Vercel/Netlify no config is needed: build command `npm run build`, output dir `dist`
(`vercel.json` / `public/_redirects` route app paths to the shell). The Dockerfile +
`nginx.conf` do the same for self-hosting.

## SEO

Pages have real URLs (`/work`, `/work/:slug`, `/hire`) — old `#/work/...` links still
redirect. `npm run build` also:

- prerenders a shell per route into `dist/<route>/index.html` with that page's own
  title, description, canonical, social card and JSON-LD (from `src/seo.js`), plus a
  static crawlable body, so search engines don't depend on running the app;
- writes `dist/sitemap.xml` covering the app routes and every course lesson
  (`public/robots.txt` points at it).

The static courses carry their own metadata and a footer linking back here. After
adding or renaming a lesson run `npm run seo:courses` to stamp it.

After deploying: submit `https://codingwithabhi.com/sitemap.xml` in Google Search
Console and Bing Webmaster Tools. Training is online-only, so there is no local
listing to set up; the copy and schema target "live online" searches.

## Project structure

```
index.html                 # HTML shell; <head> SEO block is regenerated per route at build
scripts/
  build-seo-pages.mjs      # post-build: per-route shells + sitemap.xml
  seo-course-pages.mjs     # stamps meta + schema + footer onto the static course pages
src/
  main.jsx                 # React entry point
  App.jsx                  # root: routing, per-page <head> metadata, booking modal state
  router.js                # tiny path router (/, /work, /work/:slug, /hire) + SITE config
  seo.js                   # titles, descriptions, JSON-LD for every route (app + build)
  index.css                # all styles (design tokens, home, course pages, responsive)
  utils.js                 # duration / totals helpers
  icons.jsx                # shared SVG icons
  data/
    courses.js             # COURSES (detail curricula) + CATALOG + CARD_SLUG map
    homeContent.js         # the rich landing page (markup + scripts), reused verbatim
  pages/
    Home.jsx               # mounts the rich landing page, wires cards to the router
    Courses.jsx            # course catalog grid
    CourseDetail.jsx       # Mosh-style course page (curriculum, buy box, FAQ)
  components/
    Nav.jsx                # nav for non-home routes
    BookingModal.jsx       # free-consultation / demo booking form (FormSubmit + mailto)
    Curriculum.jsx         # curriculum accordion + FAQ accordion

```

## Editing common things

- **Course curriculum / lessons:** `src/data/courses.js` — edit the `COURSES` object
  (each lesson is `["Title", "7m"]`, add `"p"` as a 3rd item to mark it a free preview).
- **Add a course to the catalog:** add an entry to `CATALOG` in the same file.
- **Contact details (WhatsApp, email):** `SITE` in `src/router.js`.
- **Page titles, descriptions, schema:** `src/seo.js`.
- **The landing page** (hero, roadmap builder, sections): `src/data/homeContent.js`.
- **Styles / colours:** CSS variables at the top of `src/index.css`.

## Configuration notes

- The booking form posts to FormSubmit. Activate it once after deploying by submitting
  the form live and clicking the confirmation link emailed to catchabhi@live.com.
- Buy buttons currently route to WhatsApp. Wire a real checkout (Razorpay/Gumroad) later
  by editing the `buy()` function in `src/pages/CourseDetail.jsx`.
