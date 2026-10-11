/**
 * One source of truth for every page's <title>, description, canonical URL and
 * structured data. Used in two places:
 *
 *   - App.jsx applies it in the browser on every route change, so the tab title
 *     and share metadata follow the page the visitor is actually looking at.
 *   - scripts/build-seo-pages.mjs bakes it into a prerendered HTML shell per
 *     route at build time, so a crawler that never runs JavaScript still gets
 *     the right title, description, canonical and schema for /work, /hire and
 *     each /work/:slug — and a sitemap listing them all.
 *
 * Keep this file free of browser APIs at module level: the build script imports
 * it under plain Node.
 */
import { PROJECTS, DELIVERED_VIA } from './data/projects.js'
import { SERVICES, CLIENT_FAQ, PROCESS } from './data/hire.js'

export const ORIGIN = 'https://codingwithabhi.com'
export const OG_IMAGE = ORIGIN + '/og-image.png'
export const SITE_NAME = 'Coding with Abhi'
export const PERSON_ID = ORIGIN + '/#abhishek'
export const WEBSITE_ID = ORIGIN + '/#website'

export const PERSON = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Abhishek Sinha',
  alternateName: 'Coding with Abhi',
  jobTitle: 'Software Engineer, Technical Trainer & Freelance Developer',
  description:
    'Software engineer with 14+ years building enterprise products at global product companies including Aruba (HPE). Trains career switchers, freshers and working professionals in web and mobile development, and builds AI apps, React Native mobile apps and backend systems for clients.',
  url: ORIGIN + '/',
  email: 'mailto:catchabhi@live.com',
  image: OG_IMAGE,
  sameAs: [
    'https://www.linkedin.com/in/abhisheksinha91',
    'https://topmate.io/abhi_sinha',
    'https://github.com/abhierpixo',
    'https://apps.apple.com/in/app/qontentt-ai/id6499059333',
  ],
  address: { '@type': 'PostalAddress', addressLocality: 'Bengaluru', addressRegion: 'Karnataka', addressCountry: 'IN' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Dr M G R Educational and Research Institute' },
  knowsAbout: ['React', 'Angular', 'Next.js', 'React Native', 'Node.js', 'NestJS', 'Python', 'FastAPI', 'Go', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'OpenAI API integration', 'Web Development', 'Mobile App Development'],
  knowsLanguage: ['en', 'hi'],
}

export const WEBSITE = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: ORIGIN + '/',
  name: SITE_NAME,
  alternateName: 'codingwithabhi.com',
  description: 'Software training and freelance development by Abhishek Sinha, Bengaluru.',
  publisher: { '@id': PERSON_ID },
  inLanguage: 'en',
}

const LIVE_COURSES = [
  { name: 'HTML From Zero', path: '/html-course/', lessons: 46, about: 'HTML', desc: 'A free animated HTML course for complete beginners: 46 interactive lessons covering elements, attributes, links, images, forms, tables, semantic markup and accessibility.' },
  { name: 'CSS From Zero', path: '/css-course/', lessons: 52, about: 'CSS', desc: 'A free animated CSS course for complete beginners: 52 interactive lessons covering selectors, the cascade, the box model, flexbox, grid, responsive design, typography and animation.' },
  { name: 'JavaScript From Zero', path: '/js-course/', lessons: 41, about: 'JavaScript', desc: 'A free animated JavaScript course for complete beginners: 41 interactive lessons covering variables, types, conditions, loops, functions, arrays, objects, the DOM, events, async and modules.' },
]

export const LIVE_COURSE_SCHEMA = LIVE_COURSES.map((c) => ({
  '@type': 'Course',
  '@id': ORIGIN + c.path + '#course',
  name: c.name,
  url: ORIGIN + c.path,
  description: c.desc,
  about: c.about,
  provider: { '@id': PERSON_ID },
  isAccessibleForFree: true,
  inLanguage: 'en',
  educationalLevel: 'Beginner',
  numberOfCredits: undefined,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR', availability: 'https://schema.org/InStock', category: 'Free' },
  hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'Online', courseWorkload: 'PT' + c.lessons * 10 + 'M', instructor: { '@id': PERSON_ID } },
}))

const TRAINING = [
  ['Web Development (HTML, CSS, JavaScript)', 'P8W'],
  ['React Development', 'P6W'],
  ['Angular Development', 'P6W'],
  ['Next.js Fullstack Development', 'P8W'],
  ['Mobile Development with React Native', 'P8W'],
  ['Backend Development with Node.js', 'P6W'],
  ['Python for Beginners', 'P6W'],
  ['Golang for Beginners', 'P6W'],
]

const TRAINING_SCHEMA = TRAINING.map(([name, workload]) => ({
  '@type': 'Course',
  name,
  description: `Live, hands-on ${name} training (1-on-1 or small group) with a capstone project, code reviews, interview preparation and post-course support. Online or in Bengaluru.`,
  provider: { '@id': PERSON_ID },
  inLanguage: ['en', 'hi'],
  hasCourseInstance: { '@type': 'CourseInstance', courseMode: ['Online', 'Onsite'], courseWorkload: workload, instructor: { '@id': PERSON_ID } },
}))

const HOME_FAQ = [
  ['Do I need a computer science degree to learn from you?', 'No. Many learners come from non-IT backgrounds. Courses start from absolute foundations and build up to a capstone project that matters more to employers than a degree.'],
  ['Are the sessions live or recorded?', 'All sessions are live. You code along with me, ask questions in real time, and get your work reviewed.'],
  ['Can I learn while working a full-time job?', 'Yes. Sessions are scheduled around your availability, including evenings and weekends, and the roadmap is paced accordingly.'],
  ['What happens after the course ends?', 'Post-course support continues: doubt clearing, code reviews and interview preparation while you apply for roles.'],
  ['Is the first session really free?', 'Yes. The first 15-minute consultation and a demo class are free so you can judge the teaching style before paying anything.'],
  ['Do you offer online classes outside Bengaluru?', 'Yes. Training is available online worldwide over video call, as well as in person in Bengaluru.'],
]

const faq = (pairs) => ({
  '@type': 'FAQPage',
  mainEntity: pairs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
})

const breadcrumbs = (items) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: ORIGIN + path })),
})

const webPage = (type, { path, title, description }, extra = {}) => ({
  '@type': type,
  '@id': ORIGIN + path + '#webpage',
  url: ORIGIN + path,
  name: title,
  description,
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': PERSON_ID },
  inLanguage: 'en',
  primaryImageOfPage: OG_IMAGE,
  ...extra,
})

export const HOME_META = {
  path: '/',
  title: 'Software Trainer & Freelance Developer in Bengaluru | Abhishek Sinha',
  ogTitle: 'Learn software from someone who\u2019s built it',
  description:
    'Live, hands-on coding classes in Bengaluru and online: web development, React, Angular, Next.js, React Native, Node.js, Python and Go, taught by an engineer with 14+ years at product companies. First session free.',
  type: 'website',
}

export const WORK_META = {
  path: '/work',
  title: 'Portfolio: AI, Mobile & Backend Products | Abhishek Sinha',
  description:
    'Six production products built end to end: a Go crypto trading engine, an AI résumé screener, an OCR expense system, a React Native salon app, a local SEO SaaS and an App Store AI app.',
  type: 'website',
}

export const HIRE_META = {
  path: '/hire',
  title: 'Hire a Freelance React Native, AI & Backend Developer | Abhishek Sinha',
  description:
    'Freelance developer with 14+ years of experience building AI apps with OpenAI, React Native iOS/Android apps and Node, Python and Go backends. Written scope, weekly working software, clean handover. Bengaluru, IST, clients worldwide.',
  type: 'website',
}

export function projectMeta(p) {
  const path = '/work/' + p.slug
  return {
    path,
    title: `${p.name} — ${p.tag} | Abhishek Sinha`,
    description: truncate(`${p.blurb} Built with ${p.tech.join(', ')}.`, 240),
    type: 'article',
    image: ORIGIN + `/thumbs/${p.slug}.png`,
    imageAlt: `${p.name} — ${p.tag}`,
  }
}

export function truncate(s, n) {
  if (s.length <= n) return s
  const cut = s.slice(0, n - 1)
  return cut.slice(0, cut.lastIndexOf(' ')) + '…'
}

/** Full metadata, including JSON-LD, for a parsed route. */
export function routeMeta(route) {
  if (route.page === 'work') {
    return {
      ...WORK_META,
      jsonLd: [
        webPage('CollectionPage', WORK_META, {
          mainEntity: {
            '@type': 'ItemList',
            itemListElement: PROJECTS.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: ORIGIN + '/work/' + p.slug, name: p.name })),
          },
        }),
        breadcrumbs([['Home', '/'], ['Work', '/work']]),
      ],
    }
  }
  if (route.page === 'hire') {
    return {
      ...HIRE_META,
      jsonLd: [
        webPage('WebPage', HIRE_META),
        {
          '@type': 'ProfessionalService',
          '@id': ORIGIN + '/hire#service',
          name: 'Abhishek Sinha — Freelance Software Development',
          url: ORIGIN + '/hire',
          image: OG_IMAGE,
          provider: { '@id': PERSON_ID },
          founder: { '@id': PERSON_ID },
          areaServed: ['IN', 'US', 'GB', 'EU', 'Worldwide'],
          availableLanguage: ['English', 'Hindi'],
          address: PERSON.address,
          description: HIRE_META.description,
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Freelance development services',
            itemListElement: SERVICES.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.name, description: s.desc } })),
          },
        },
        {
          '@type': 'HowTo',
          name: 'How a project with Abhishek Sinha runs',
          step: PROCESS.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.step, text: s.desc })),
        },
        faq(CLIENT_FAQ),
        breadcrumbs([['Home', '/'], ['Hire me', '/hire']]),
      ],
    }
  }
  if (route.page === 'project') {
    const p = PROJECTS.find((x) => x.slug === route.slug)
    if (p) {
      const m = projectMeta(p)
      return {
        ...m,
        jsonLd: [
          webPage('WebPage', m),
          {
            '@type': 'CreativeWork',
            '@id': ORIGIN + m.path + '#project',
            name: p.name,
            url: ORIGIN + m.path,
            headline: `${p.name} — ${p.tag}`,
            description: p.blurb,
            abstract: p.problem || undefined,
            image: m.image,
            author: { '@id': PERSON_ID },
            creator: { '@id': PERSON_ID },
            keywords: p.tech.join(', '),
            genre: p.tag,
            creditText: DELIVERED_VIA,
            ...(p.appStore ? { sameAs: p.appStore } : {}),
          },
          breadcrumbs([['Home', '/'], ['Work', '/work'], [p.name, m.path]]),
        ],
      }
    }
    return { ...WORK_META, path: '/work/' + route.slug, title: 'Project not found | Abhishek Sinha', noindex: true, jsonLd: [] }
  }
  return {
    ...HOME_META,
    jsonLd: [
      webPage('ProfilePage', HOME_META, { mainEntity: { '@id': PERSON_ID } }),
      {
        '@type': 'ProfessionalService',
        '@id': ORIGIN + '/#training',
        name: 'Abhishek Sinha — Software Training',
        url: ORIGIN + '/',
        image: OG_IMAGE,
        provider: { '@id': PERSON_ID },
        areaServed: ['Bengaluru', 'IN', 'Worldwide'],
        availableLanguage: ['English', 'Hindi'],
        address: PERSON.address,
        priceRange: 'First session free',
        description: '1-on-1 and small-group software training with capstone projects, code reviews and interview preparation. Classroom in Bengaluru, virtual worldwide.',
      },
      ...LIVE_COURSE_SCHEMA,
      ...TRAINING_SCHEMA,
      faq(HOME_FAQ),
    ],
  }
}

/** Everything in one @graph, Person and WebSite included. */
export function jsonLdGraph(meta) {
  const graph = [PERSON, WEBSITE, ...(meta.jsonLd || [])]
  return { '@context': 'https://schema.org', '@graph': graph.map(stripUndefined) }
}

function stripUndefined(o) {
  if (Array.isArray(o)) return o.map(stripUndefined)
  if (o && typeof o === 'object') {
    return Object.fromEntries(Object.entries(o).filter(([, v]) => v !== undefined).map(([k, v]) => [k, stripUndefined(v)]))
  }
  return o
}

/** All indexable app routes, for prerendering and the sitemap. */
export function allRoutes() {
  return [
    { page: 'home' },
    { page: 'work' },
    { page: 'hire' },
    ...PROJECTS.map((p) => ({ page: 'project', slug: p.slug })),
  ]
}

/* ---------- browser side ---------- */

function setMeta(sel, attrs) {
  let el = document.head.querySelector(sel)
  if (!el) {
    el = document.createElement(sel.startsWith('link') ? 'link' : 'meta')
    document.head.appendChild(el)
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v))
}

/** Apply a route's metadata to the live document (called on every navigation). */
export function applyHead(meta) {
  const url = ORIGIN + meta.path
  const image = meta.image || OG_IMAGE
  document.title = meta.title
  setMeta('meta[name="description"]', { name: 'description', content: meta.description })
  setMeta('link[rel="canonical"]', { rel: 'canonical', href: url })
  setMeta('meta[property="og:type"]', { property: 'og:type', content: meta.type || 'website' })
  setMeta('meta[property="og:title"]', { property: 'og:title', content: meta.ogTitle || meta.title })
  setMeta('meta[property="og:description"]', { property: 'og:description', content: meta.description })
  setMeta('meta[property="og:url"]', { property: 'og:url', content: url })
  setMeta('meta[property="og:image"]', { property: 'og:image', content: image })
  setMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: meta.imageAlt || meta.ogTitle || meta.title })
  setMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: meta.ogTitle || meta.title })
  setMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: meta.description })
  setMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image })
  setMeta('meta[name="robots"]', { name: 'robots', content: meta.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large' })

  let ld = document.getElementById('ld-json')
  if (!ld) {
    ld = document.createElement('script')
    ld.type = 'application/ld+json'
    ld.id = 'ld-json'
    document.head.appendChild(ld)
  }
  ld.textContent = JSON.stringify(jsonLdGraph(meta))
}
