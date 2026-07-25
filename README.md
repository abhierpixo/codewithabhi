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

On Vercel/Netlify no config is needed: build command `npm run build`, output dir `dist`.

## Project structure

```
index.html                 # HTML shell + SEO meta + JSON-LD schema
src/
  main.jsx                 # React entry point
  App.jsx                  # root: routing + booking modal state
  router.js                # tiny hash router (#/, #/courses, #/courses/:slug) + SITE config
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
- **The landing page** (hero, roadmap builder, sections): `src/data/homeContent.js`.
- **Styles / colours:** CSS variables at the top of `src/index.css`.

## Configuration notes

- The booking form posts to FormSubmit. Activate it once after deploying by submitting
  the form live and clicking the confirmation link emailed to catchabhi@live.com.
- Buy buttons currently route to WhatsApp. Wire a real checkout (Razorpay/Gumroad) later
  by editing the `buy()` function in `src/pages/CourseDetail.jsx`.
