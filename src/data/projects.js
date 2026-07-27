/**
 * Products for the "Selected work" showcase.
 *
 * ATTRIBUTION — Abhishek led the build on each of these, delivered as a
 * contributor at Erpixo LLP. So "I built this" is accurate; "my client" and
 * "my company" are not — Erpixo held the client relationship. DELIVERED_VIA is
 * rendered on the showcase and on every detail page to keep that distinction
 * visible without weakening the work.
 *
 * LINKS — every url field is empty on purpose. Nothing here is guessed.
 * Fill in whichever you can actually share:
 *   github   — repo URL. Only if you own the code or the client agreed to it.
 *              Work-for-hire and NDA'd client code usually cannot be published.
 *   live     — a deployed demo. Leave empty rather than link something fragile;
 *              a broken demo reads worse than no demo.
 *   appStore — store listing. Permanent and safe to link.
 *   caseStudy— an external write-up, if you have one.
 *
 * A card only renders the links that exist, so the page is correct today and
 * gets better as you fill these in.
 *
 * `problem` is left empty because I don't know what each client actually needed
 * — that's the most valuable sentence on the page and it has to be yours.
 * `build` is derived from your own descriptions, so it's safe to ship as is.
 */
/** Who the work was delivered through. Shown on the showcase and detail pages. */
export const DELIVERED_VIA = 'Led development as a contributor at Erpixo LLP'

export const PROJECTS = [
  {
    slug: 'crypto-trading-platform',
    name: 'Crypto Trading Platform',
    tag: 'Backend · Fintech · Real-time',
    blurb:
      'A full crypto exchange: a Go order-matching engine with a live WebSocket order book, a microservices backend, and a React Native trading app.',
    tech: ['Go', 'Microservices', 'GraphQL', 'WebSockets', 'React Native'],
    build: [
      'Order-matching engine written in Go',
      'Live order book pushed over WebSockets',
      'Microservices backend behind a GraphQL API',
      'React Native trading app for iOS and Android',
    ],
    problem:
      'Running an exchange means matching orders correctly under load, and showing a book that moves in real time — nothing off-the-shelf does that on your own rules. Traders judge a platform on whether the price they see is the price they get, and on mobile that means the app and the book can never drift apart. The brief was a matching engine they owned outright, with a mobile app fast enough to trade on.',
    github: '',
    live: '',
    appStore: '',
    caseStudy: '',
    accent: 'green',
  },
  {
    slug: 'resume-ats',
    name: 'Resume ATS',
    tag: 'AI SaaS · Full-stack',
    blurb:
      'AI résumé screening for hiring teams. A Chrome extension grabs job posts, OpenAI scores candidates against the role, and recruiters review a ranked shortlist.',
    tech: ['FastAPI', 'React', 'OpenAI', 'MongoDB', 'Chrome Extension'],
    build: [
      'Chrome extension that captures job posts from the browser',
      'FastAPI service scoring candidates against the role with OpenAI',
      'React dashboard where recruiters review a ranked shortlist',
      'MongoDB for candidates, roles and scoring history',
    ],
    problem:
      'Recruiters read hundreds of CVs per role, and most of that reading is triage rather than judgement. The job description sits in a browser tab, the CVs sit in a folder, and nothing connects the two — so every shortlist is rebuilt by hand and justified from memory. They wanted the first pass done automatically, with a ranking they could explain to a hiring manager.',
    github: '',
    live: '',
    appStore: '',
    caseStudy: '',
    accent: 'blue',
  },
  {
    slug: 'expense-system',
    name: 'Expense System',
    tag: 'AI · Automation · Web',
    blurb:
      'Snap a photo of a bill and AI reads it. OpenAI Vision extracts the line items, then bills flow through a multi-step approval workflow. Deploy-ready.',
    tech: ['Express', 'TypeScript', 'OpenAI Vision', 'PostgreSQL', 'Docker'],
    build: [
      'OpenAI Vision pipeline that extracts line items from a photographed bill',
      'Multi-step approval workflow with role-based routing',
      'Express and TypeScript API over PostgreSQL',
      'Dockerised and deploy-ready',
    ],
    problem:
      'Expense claims arrive as photographs of crumpled receipts, get retyped into a spreadsheet, then chase signatures over email. The typing is slow and wrong often enough to matter, and once a claim is submitted nobody can see who it is sitting with. The ask was to remove the typing entirely and make the approval chain visible.',
    github: '',
    live: '',
    appStore: '',
    caseStudy: '',
    accent: 'amber',
  },
  {
    slug: 'saloon-booking-app',
    name: 'Saloon Booking App',
    tag: 'Mobile · Marketplace',
    blurb:
      'A booking marketplace for salons and spas: a React Native customer app, a salon dashboard, an admin panel, and a NestJS API — all in one monorepo.',
    tech: ['React Native', 'NestJS', 'Prisma', 'PostgreSQL', 'Razorpay'],
    build: [
      'React Native customer app for discovery and booking',
      'Salon-facing dashboard plus an internal admin panel',
      'NestJS API with Prisma over PostgreSQL',
      'Razorpay payments, the whole thing in a single monorepo',
    ],
    problem:
      'Salons take bookings over phone calls and WhatsApp messages, tracked in a paper diary at the counter. Double-bookings turn away walk-ins, no-shows go unrecorded, and no one has a shared view of which stylists are actually free. Meanwhile customers want to book at eleven at night without ringing anyone.',
    github: '',
    live: '',
    appStore: '',
    caseStudy: '',
    accent: 'blue',
  },
  {
    slug: 'localseo-pro',
    name: 'LocalSEO Pro',
    tag: 'SaaS Dashboard · Multi-tenant',
    blurb:
      'A multi-tenant SEO platform agencies use to track Google rankings, citations and reviews across hundreds of client locations — with full CI/CD.',
    tech: ['React', 'Express', 'MongoDB', 'Google OAuth', 'GitHub Actions'],
    build: [
      'Multi-tenant architecture isolating hundreds of agency clients',
      'Rank, citation and review tracking across client locations',
      'Google OAuth for account connection',
      'Full CI/CD through GitHub Actions',
    ],
    problem:
      'An agency running local SEO for hundreds of client locations was checking rankings by hand and keeping the results in spreadsheets. Every client expects a report, every location has its own citations and reviews to watch, and the manual approach stops scaling somewhere around thirty locations. They needed one platform where each client saw only their own data.',
    github: '',
    live: '',
    appStore: '',
    caseStudy: '',
    accent: 'green',
  },
  {
    slug: 'qontentt-ai',
    name: 'Qontentt AI',
    tag: 'Live on App Store · Mobile · AI',
    blurb:
      'A published iOS app for creators and brands — AI captions, growth analytics, best-time posting and an in-app AI content coach. Built and shipped end-to-end.',
    tech: ['React Native', 'Node.js', 'Prisma', 'Docker', 'EAS Build'],
    build: [
      'AI caption generation and an in-app content coach',
      'Growth analytics and best-time-to-post scheduling',
      'Node.js and Prisma backend, containerised with Docker',
      'Shipped to the App Store via EAS Build',
    ],
    problem:
      'Creators and small brands post constantly and guess at most of it — what to write, when to publish, whether any of it worked. Separate tools exist for captions, scheduling and analytics, but switching between them on a phone is where the habit breaks down. The goal was one app that answers all three questions where the posting actually happens.',
    github: '',
    live: '',
    appStore: 'https://apps.apple.com/in/app/qontentt-ai/id6499059333',
    caseStudy: '',
    accent: 'amber',
    shipped: true,
  },
]

/** The "Three ways to work with me" block under the showcase. */
export const SERVICES = [
  {
    name: 'AI apps & OpenAI integrations',
    desc: 'Chatbots, document/OCR pipelines, résumé scoring, content generation — AI features wired into real products with payments and dashboards.',
  },
  {
    name: 'Mobile apps (React Native)',
    desc: 'Cross-platform iOS & Android apps with booking, payments, auth and push — from Expo prototype to native store builds.',
  },
  {
    name: 'Backend & APIs',
    desc: 'Node, NestJS, Python and Go. REST & GraphQL APIs, microservices, real-time WebSockets, Postgres/Mongo/Redis, Docker & CI/CD.',
  },
]
