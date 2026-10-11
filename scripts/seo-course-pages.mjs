/**
 * Adds search metadata to every page of the static courses under public/:
 * description, canonical URL, social-share card, structured data, and a footer
 * link back to the main site. Idempotent — re-run it after adding lessons
 * (`npm run seo:courses`); pages that already carry the block are rewritten in
 * place, so edits to the templates below propagate.
 *
 * Title, description and lesson position are read from each page's own
 * <title>, <h1>, eyebrow and thesis paragraph — nothing is invented.
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ORIGIN = 'https://codingwithabhi.com'
const root = join(dirname(fileURLToPath(import.meta.url)), '..')

const COURSES = {
  'html-course': {
    name: 'HTML From Zero',
    about: 'HTML',
    desc: 'A free, animated HTML course for complete beginners. Markup on the left, the page and the screen reader on the right, and one plain sentence explaining every step — elements, attributes, links, images, forms, tables, semantics and accessibility.',
  },
  'css-course': {
    name: 'CSS From Zero',
    about: 'CSS',
    desc: 'A free, animated CSS course for complete beginners. Rules on the left, the rendered page on the right, and one plain sentence explaining every step — selectors, the cascade, the box model, flexbox, grid, responsive design, typography and animation.',
  },
  'js-course': {
    name: 'JavaScript From Zero',
    about: 'JavaScript',
    desc: 'A free, animated JavaScript course for complete beginners. Code on the left, a picture of what the computer is doing on the right, and one plain sentence explaining every step — variables, loops, functions, arrays, objects, the DOM, events and async.',
  },
}

const PERSON_ID = ORIGIN + '/#abhishek'
const PERSON = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Abhishek Sinha',
  url: ORIGIN + '/',
  jobTitle: 'Software Engineer & Technical Trainer',
  sameAs: ['https://www.linkedin.com/in/abhisheksinha91', 'https://github.com/abhierpixo'],
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const strip = (html) => html
  .replace(/<[^>]+>/g, '')
  .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#8594;/g, '→').replace(/&#8592;/g, '←')
  .replace(/\s+/g, ' ').trim()
const clip = (s, n) => {
  if (s.length <= n) return s
  const cut = s.slice(0, n - 1)
  return cut.slice(0, cut.lastIndexOf(' ')) + '…'
}
const first = (re, s) => { const m = re.exec(s); return m ? m[1] : '' }

function headBlock({ title, description, url, image, jsonLd }) {
  const ld = JSON.stringify({ '@context': 'https://schema.org', '@graph': jsonLd }).replace(/<\//g, '<\\/')
  return `<!-- seo:start -->
<meta name="description" content="${esc(description)}">
<meta name="author" content="Abhishek Sinha">
<meta name="robots" content="index, follow, max-image-preview:large">
<link rel="canonical" href="${url}">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Coding with Abhi">
<meta property="og:locale" content="en_IN">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${image}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${image}">
<script type="application/ld+json">${ld}</script>
<style>
  .site-credit{max-width:1180px;margin:48px auto 0;padding-top:18px;border-top:1px solid var(--edge,#453A6B);
    font-family:"JetBrains Mono",monospace;font-size:12px;line-height:1.7;color:var(--dim,#9B90BC)}
  .site-credit a{color:inherit;text-decoration:underline;text-underline-offset:3px}
  .site-credit a:hover{color:var(--chalk,#EDE7FA)}
</style>
<!-- seo:end -->`
}

function creditBlock(course, dir) {
  return `<!-- seo:credit -->
<footer class="site-credit">
  <p><strong>${course.name}</strong> is a free course by <a href="${ORIGIN}/">Abhishek Sinha</a>, a software engineer and trainer in Bengaluru.
  Want this taught live, with a project at the end? <a href="${ORIGIN}/">Book a free demo class</a>.
  Need an app built? <a href="${ORIGIN}/hire">Hire him</a>.
  More free courses: <a href="/html-course/">HTML</a> · <a href="/css-course/">CSS</a> · <a href="/js-course/">JavaScript</a>.</p>
</footer>
<!-- /seo:credit -->`
}

let count = 0
for (const [dir, course] of Object.entries(COURSES)) {
  const src = join(root, 'public', dir)
  if (!existsSync(src)) continue
  const files = readdirSync(src).filter((f) => f.endsWith('.html'))
  const lessonFiles = files.filter((f) => /^m\d+-lesson-\d+-/.test(f))
  const lessonUrl = (f) => `${ORIGIN}/${dir}/${f}`

  for (const file of files) {
    const path = join(src, file)
    let html = readFileSync(path, 'utf8')
    html = html.replace(/\n?<!-- seo:start -->[\s\S]*?<!-- seo:end -->/, '')
    html = html.replace(/\n?<!-- seo:credit -->[\s\S]*?<!-- \/seo:credit -->\n?/, '\n')

    const isIndex = file === 'index.html'
    const url = isIndex ? `${ORIGIN}/${dir}/` : lessonUrl(file)
    // a re-run reads back the title we wrote last time; drop our own suffix first
    const rawTitle = strip(first(/<title>([\s\S]*?)<\/title>/, html))
      .replace(new RegExp(`( \\| ${course.name})+$`), '')
      .replace(/ — Free Animated .* Course for Beginners \| Abhishek Sinha$/, '')
    const h1 = strip(first(/<h1[^>]*>([\s\S]*?)<\/h1>/, html))
    const thesis = strip(first(/<p class="(?:thesis|lede)">([\s\S]*?)<\/p>/, html))
    const eyebrow = strip(first(/<p class="eyebrow">([\s\S]*?)<\/p>/, html))

    let title, description, jsonLd
    if (isIndex) {
      title = `${course.name} — Free Animated ${course.about} Course for Beginners | Abhishek Sinha`
      description = course.desc
      jsonLd = [
        PERSON,
        {
          '@type': 'Course',
          '@id': url + '#course',
          name: course.name,
          url,
          description: course.desc,
          about: course.about,
          provider: PERSON,
          isAccessibleForFree: true,
          inLanguage: 'en',
          educationalLevel: 'Beginner',
          numberOfLessons: lessonFiles.length,
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR', availability: 'https://schema.org/InStock', category: 'Free' },
          hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'Online', courseWorkload: `PT${lessonFiles.length * 10}M`, instructor: PERSON },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: ORIGIN + '/' },
            { '@type': 'ListItem', position: 2, name: course.name, item: url },
          ],
        },
      ]
    } else {
      const [mod, les] = file.match(/\d+/g).map(Number)
      title = `${rawTitle} | ${course.name}`
      description = clip(`${h1}. ${thesis}`.replace(/\.\./g, '.'), 220)
      jsonLd = [
        PERSON,
        {
          '@type': 'LearningResource',
          '@id': url + '#lesson',
          name: h1 || rawTitle,
          headline: rawTitle,
          url,
          description,
          learningResourceType: 'Lesson',
          educationalLevel: 'Beginner',
          inLanguage: 'en',
          isAccessibleForFree: true,
          about: course.about,
          author: PERSON,
          isPartOf: { '@type': 'Course', '@id': `${ORIGIN}/${dir}/#course`, name: course.name, url: `${ORIGIN}/${dir}/` },
          position: mod * 100 + les,
          ...(eyebrow ? { alternativeHeadline: eyebrow } : {}),
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: ORIGIN + '/' },
            { '@type': 'ListItem', position: 2, name: course.name, item: `${ORIGIN}/${dir}/` },
            { '@type': 'ListItem', position: 3, name: rawTitle, item: url },
          ],
        },
      ]
    }

    const block = headBlock({ title, description, url, image: ORIGIN + '/og-image.png', jsonLd })
    html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title).replace(/&quot;/g, '"')}</title>\n${block}`)
    html = html.replace(/\n?<\/body>/, `\n${creditBlock(course, dir)}\n</body>`)
    writeFileSync(path, html)
    count++
  }
}
console.log(`seo: updated ${count} course pages`)
