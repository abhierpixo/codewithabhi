/**
 * Content for #/hire — the client-facing landing page.
 *
 * This is the link to paste into Upwork and Fiverr proposals. The home page
 * stays a training pitch; a hiring client never has to read past it.
 *
 * EVERYTHING BELOW MARKED [NEEDS YOU] IS EMPTY ON PURPOSE. Nothing here is
 * invented — no rates, no availability, no testimonials, no ratings. Each
 * section renders only when it has content, so the page is honest today and
 * gets stronger as you fill these in.
 */

/** Headline figures. Only add a number you can defend if asked. */
export const PROOF_STATS = [
  { n: '14+', label: 'years shipping production software' },
  { n: '6', label: 'products built end to end' },
  { n: '1', label: 'published on the App Store' },
  // [NEEDS YOU] e.g. { n: '5.0', label: 'average rating on Upwork' }
]

/**
 * Places a client can go and check you out.
 *
 * DO NOT ADD THE UPWORK PROFILE UNTIL IT HAS REVIEWS. A profile showing zero
 * jobs sends a client back less convinced than before they clicked — the same
 * reason the GitHub link is held back. Add it here the day the first review
 * lands; until then this page IS the proof, which is why the App Store app
 * leads: it is the one thing a stranger can download and use right now.
 */
export const PROFILES = [
  {
    name: 'Download the app I built',
    url: 'https://apps.apple.com/in/app/qontentt-ai/id6499059333',
    note: 'Qontentt AI on the App Store — live, published, in users\' hands. Not a demo.',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/abhisheksinha91',
    note: '14+ years of work history across four product companies',
  },
]

/**
 * [NEEDS YOU] Real quotes only, with permission and correct attribution.
 *
 * With no marketplace reviews yet, this is the highest-value thing you can add.
 * If you have no client quotes, LinkedIn recommendations from ex-colleagues at
 * Aruba/HPE, EdGE or Trellisys work nearly as well — they speak to how you
 * engineer, which is what a nervous first-time client is actually worried about.
 *
 * I will not write these. An invented quote is the fastest way to lose a client
 * who checks.
 */
export const TESTIMONIALS = [
  // { quote: '', name: '', role: '', company: '' },
]

/** What you take on. Wording follows the services you already wrote. */
export const SERVICES = [
  {
    name: 'AI apps & OpenAI integrations',
    desc: 'Chatbots, document and OCR pipelines, résumé scoring, content generation — AI features wired into real products with payments, auth and dashboards around them.',
    proof: ['resume-ats', 'expense-system', 'qontentt-ai'],
  },
  {
    name: 'Mobile apps (React Native)',
    desc: 'Cross-platform iOS and Android apps with booking, payments, auth and push — from an Expo prototype through to native store builds and release.',
    proof: ['saloon-booking-app', 'qontentt-ai', 'crypto-trading-platform'],
  },
  {
    name: 'Backend & APIs',
    desc: 'Node, NestJS, Python and Go. REST and GraphQL APIs, microservices, real-time WebSockets, Postgres, Mongo and Redis, Docker and CI/CD.',
    proof: ['crypto-trading-platform', 'localseo-pro', 'expense-system'],
  },
]

/** How an engagement runs. Adjust to match how you actually work. */
export const PROCESS = [
  {
    step: 'A short call, free',
    desc: 'You describe the problem. I tell you honestly whether I am the right person, what I think it takes, and where the risks are. If it is not a fit I will say so.',
  },
  {
    step: 'A written scope',
    desc: 'Milestones, what is included, what is not, and a price. Nothing starts until we both agree on that document.',
  },
  {
    step: 'Weekly working software',
    desc: 'You see something running every week, not a status update. Scope changes get priced before they get built, never after.',
  },
  {
    step: 'Handover you can use',
    desc: 'Source, deployment, environment setup and a walkthrough call. The goal is that another engineer could pick it up without me.',
  },
]

/**
 * [NEEDS YOU] Commercial terms. A client screening five freelancers picks the
 * ones who answered these before being asked. Leave a field empty to hide it.
 */
export const ENGAGEMENT = {
  availability: '',   // e.g. 'Taking on 1 new project from August'
  responseTime: '',   // e.g. 'Replies within 24 hours, IST business days'
  timezone: 'Bengaluru, India · IST (UTC+5:30) · overlaps with EU mornings and US evenings',
  models: '',         // e.g. 'Fixed-price per milestone, or hourly for ongoing work'
  startingAt: '',     // e.g. 'Projects typically start at $X'
}

/** Questions a hiring client actually has. */
export const CLIENT_FAQ = [
  ['Can I hire you directly, or only through an agency?',
   'Directly. The products in my portfolio were delivered while I led development as a contributor at Erpixo LLP, but you engage me, and I am the person writing the code.'],
  ['Do you work with existing codebases?',
   'Yes. Taking over someone else\'s project is normal work. I will read it first and tell you honestly what shape it is in before quoting anything.'],
  ['What if the project needs a skill you do not have?',
   'I will tell you. I would rather lose the job than take one I cannot deliver well — that is the whole reason a portfolio like this exists.'],
  ['Who owns the code?',
   'You do, on final payment. Source, deployment access and documentation are handed over in full.'],
  ['Can you work with my designer, or do you design too?',
   'Both. I can build from Figma, and I can take a rough idea to a working interface if there is no designer involved.'],
]
