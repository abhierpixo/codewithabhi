/**
 * Post-build step (runs from `npm run build`).
 *
 * The app is a client-rendered SPA, so dist/index.html alone would give every
 * URL the same title, description and schema. This writes a shell per route —
 * dist/work/index.html, dist/hire/index.html, dist/work/<slug>/index.html —
 * with that page's own <head> metadata and a static, crawlable body, all taken
 * from src/seo.js. The same JS bundle then mounts and takes over.
 *
 * It also writes dist/sitemap.xml covering the app routes and every page of the
 * static HTML, CSS and JavaScript courses under public/.
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { routeMeta, allRoutes, jsonLdGraph, ORIGIN, OG_IMAGE, SITE_NAME } from '../src/seo.js'
import { PROJECTS, DELIVERED_VIA } from '../src/data/projects.js'
import { SERVICES, PROCESS, CLIENT_FAQ } from '../src/data/hire.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const shellPath = join(dist, 'index.html')
if (!existsSync(shellPath)) {
  console.error('dist/index.html not found — run `vite build` first')
  process.exit(1)
}
const shell = readFileSync(shellPath, 'utf8')

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const text = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function headFor(meta) {
  const url = ORIGIN + meta.path
  const image = meta.image || OG_IMAGE
  const ogTitle = meta.ogTitle || meta.title
  const robots = meta.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'
  // </script> inside JSON would end the block early; escape the slash
  const ld = JSON.stringify(jsonLdGraph(meta)).replace(/<\//g, '<\\/')
  return `<!-- seo:head -->
    <title>${text(meta.title)}</title>
    <meta name="description" content="${esc(meta.description)}" />
    <meta name="robots" content="${robots}" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="${meta.type || 'website'}" />
    <meta property="og:site_name" content="${esc(SITE_NAME)}" />
    <meta property="og:locale" content="en_IN" />
    <meta property="og:title" content="${esc(ogTitle)}" />
    <meta property="og:description" content="${esc(meta.description)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${esc(meta.imageAlt || ogTitle)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(ogTitle)}" />
    <meta name="twitter:description" content="${esc(meta.description)}" />
    <meta name="twitter:image" content="${image}" />
    <script type="application/ld+json" id="ld-json">${ld}</script>
    <!-- /seo:head -->`
}

const STYLE = 'max-width:760px;margin:0 auto;padding:48px 24px;font-family:system-ui,sans-serif;color:#E2E8F0;background:#0A0F1E;line-height:1.6'
const NAV = `<nav aria-label="Site"><a href="/">Home</a> · <a href="/work">Work</a> · <a href="/hire">Hire me</a> · <a href="/html-course/">HTML course</a> · <a href="/css-course/">CSS course</a> · <a href="/js-course/">JavaScript course</a></nav>`

function bodyFor(route, meta) {
  let inner = ''
  if (route.page === 'home') {
    inner = `<h1>Learn software from someone who’s built it</h1>
        <p>I’m Abhishek Sinha, a software engineer in Bengaluru with 14+ years building enterprise products at companies including Aruba (HPE). I run live, hands-on training in web development, React, Angular, Next.js, React Native, Node.js, Python and Go, and I take on freelance AI, mobile and backend projects.</p>
        <ul>
          <li><a href="/work">What I’ve built</a></li>
          <li><a href="/hire">Hire me for a project</a></li>
          <li><a href="/html-course/">Free HTML course</a></li>
          <li><a href="/css-course/">Free CSS course</a></li>
          <li><a href="/js-course/">Free JavaScript course</a></li>
        </ul>`
  } else if (route.page === 'work') {
    inner = `${NAV}
        <h1>Six products, built end to end</h1>
        <p>${text(meta.description)}</p>
        <p>${text(DELIVERED_VIA)}.</p>
        <ul>${PROJECTS.map((p) => `
          <li><a href="/work/${p.slug}">${text(p.name)}</a> — ${text(p.blurb)}</li>`).join('')}
        </ul>`
  } else if (route.page === 'hire') {
    inner = `${NAV}
        <h1>I build AI apps, mobile apps and backends that ship.</h1>
        <p>${text(meta.description)}</p>
        <h2>What I take on</h2>
        <ul>${SERVICES.map((s) => `
          <li><strong>${text(s.name)}</strong> — ${text(s.desc)}</li>`).join('')}
        </ul>
        <h2>How we would work</h2>
        <ol>${PROCESS.map((s) => `
          <li><strong>${text(s.step)}.</strong> ${text(s.desc)}</li>`).join('')}
        </ol>
        <h2>Questions clients ask</h2>${CLIENT_FAQ.map(([q, a]) => `
        <h3>${text(q)}</h3><p>${text(a)}</p>`).join('')}
        <p><a href="/work">See the work</a> · Email <a href="mailto:catchabhi@live.com">catchabhi@live.com</a></p>`
  } else if (route.page === 'project') {
    const p = PROJECTS.find((x) => x.slug === route.slug)
    inner = `${NAV}
        <p><a href="/work">← All work</a></p>
        <p>${text(p.tag)}</p>
        <h1>${text(p.name)}</h1>
        <img src="/thumbs/${p.slug}.png" alt="${esc(p.name)} — ${esc(p.tag)}" width="1200" height="630" style="max-width:100%;height:auto" />
        <p>${text(p.blurb)}</p>
        ${p.problem ? `<h2>The problem</h2><p>${text(p.problem)}</p>` : ''}
        <h2>What was built</h2>
        <ul>${p.build.map((b) => `<li>${text(b)}</li>`).join('')}</ul>
        <p>Stack: ${text(p.tech.join(', '))}. ${text(DELIVERED_VIA)}.</p>
        ${p.appStore ? `<p><a href="${p.appStore}">View on the App Store</a></p>` : ''}
        <p><a href="/hire">Hire me to build something like this</a></p>`
  }
  return `<!-- seo:fallback -->
      <main class="seo-fallback" style="${STYLE}">
        ${inner}
      </main>
    <!-- /seo:fallback -->`
}

function render(route) {
  const meta = routeMeta(route)
  let html = shell.replace(/<!-- seo:head -->[\s\S]*?<!-- \/seo:head -->/, headFor(meta))
  html = html.replace(/<!-- seo:fallback -->[\s\S]*?<!-- \/seo:fallback -->/, bodyFor(route, meta))
  if (!html.includes('<!-- /seo:head -->') || !html.includes('<!-- /seo:fallback -->')) {
    throw new Error('index.html is missing the seo:head / seo:fallback markers')
  }
  return { meta, html }
}

const written = []
for (const route of allRoutes()) {
  const { meta, html } = render(route)
  const out = meta.path === '/' ? shellPath : join(dist, meta.path.replace(/^\//, ''), 'index.html')
  mkdirSync(dirname(out), { recursive: true })
  writeFileSync(out, html)
  written.push(meta.path)
}

/* ---------- sitemap ---------- */
const COURSE_DIRS = ['html-course', 'css-course', 'js-course']
const today = new Date().toISOString().slice(0, 10)
const mtime = (f) => (existsSync(f) ? statSync(f).mtime.toISOString().slice(0, 10) : today)

const urls = []
urls.push({ loc: ORIGIN + '/', lastmod: today, priority: '1.0', changefreq: 'weekly' })
urls.push({ loc: ORIGIN + '/hire', lastmod: today, priority: '0.9', changefreq: 'monthly' })
urls.push({ loc: ORIGIN + '/work', lastmod: today, priority: '0.9', changefreq: 'monthly' })
for (const p of PROJECTS) urls.push({ loc: ORIGIN + '/work/' + p.slug, lastmod: today, priority: '0.7', changefreq: 'monthly' })
for (const dir of COURSE_DIRS) {
  const src = join(root, 'public', dir)
  if (!existsSync(src)) continue
  urls.push({ loc: `${ORIGIN}/${dir}/`, lastmod: mtime(join(src, 'index.html')), priority: '0.8', changefreq: 'monthly' })
  const lessons = readdirSync(src).filter((f) => /^m\d+-lesson-\d+-.*\.html$/.test(f))
  // module, then lesson, numerically — so the sitemap reads in course order
  lessons.sort((a, b) => {
    const [am, al] = a.match(/\d+/g).map(Number)
    const [bm, bl] = b.match(/\d+/g).map(Number)
    return am - bm || al - bl
  })
  for (const f of lessons) urls.push({ loc: `${ORIGIN}/${dir}/${f}`, lastmod: mtime(join(src, f)), priority: '0.5', changefreq: 'yearly' })
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>
`
writeFileSync(join(dist, 'sitemap.xml'), sitemap)

console.log(`seo: wrote ${written.length} page shells (${written.join(', ')}) and sitemap.xml with ${urls.length} URLs`)
