# Portfolio project entries — paste-ready copy

For the "Add a new portfolio project" form. Six entries, one per product in
`src/data/projects.js`. The wording is derived from that file, so the site and
the marketplace profile say the same thing — buyers cross-check, and mismatches
read as carelessness.

Three rules carried over from the mentorship profile prompt:

- **No invented numbers.** The form's "impact you made here" wording invites
  metrics you don't have. Impact below is stated as capability delivered. Where a
  number would genuinely strengthen it, there's a `[TODO: number]` marker — fill
  it or cut the sentence, don't guess.
- **No client names.** Every description names the product and the problem, never
  who paid for it.
- **Honest attribution.** Each description closes with the Erpixo line. You led
  the build; Erpixo held the client relationship. "I built this" is accurate,
  "my client" is not.

Publish **Qontentt AI first** — it's the only entry with a public link a buyer
can verify in one click.

---

## 1. Qontentt AI — publish this one first

**Project title**
AI content app for creators — shipped to the iOS App Store

**Your role**
Lead developer — mobile and backend

**Project description**
Creators and small brands post constantly and guess at most of it: what to write,
when to publish, whether any of it worked. Captions, scheduling and analytics
lived in three separate tools, and switching between them on a phone is where the
habit breaks down.

I built and shipped one iOS app that answers all three — AI caption generation,
an in-app content coach, growth analytics, and best-time-to-post scheduling.
React Native front end, Node.js and Prisma backend, containerised with Docker,
released through EAS Build.

It passed App Store review and is live today. Delivered end to end as a
contributor at Erpixo LLP.

**Skills and deliverables**
React Native · Node.js · Prisma · Docker · iOS App Development · Mobile App
Development · AI Content Generation · REST API · TypeScript

**Project URL**
https://apps.apple.com/in/app/qontentt-ai/id6499059333

**Image**
`public/thumbs/qontentt-ai.png` (or `-viz.png` for the infographic-only version)

---

## 2. Crypto trading platform

**Project title**
Crypto exchange — Go matching engine, live order book, trading app

**Your role**
Lead developer — backend and mobile

**Project description**
Running an exchange means matching orders correctly under load and showing a book
that moves in real time. Traders judge a platform on whether the price they see
is the price they get, and on mobile the app and the book can never drift apart.
Nothing off the shelf does this on your own rules.

I architected and built the order-matching engine in Go, pushed the live order
book to clients over WebSockets, put a microservices backend behind a GraphQL
API, and shipped a React Native trading app for iOS and Android.

The result is a matching engine owned outright rather than licensed. Delivered as
a contributor at Erpixo LLP.

**Skills and deliverables**
Go · Microservices · GraphQL · WebSockets · React Native · Real-Time Systems ·
API Development · Fintech · Backend Architecture

**Image**
`public/thumbs/crypto-trading-platform.png`

---

## 3. AI résumé screening SaaS

**Project title**
AI résumé screening SaaS — Chrome extension, FastAPI, ranked shortlists

**Your role**
Lead developer — full-stack

**Project description**
Recruiters read hundreds of CVs per role and most of that reading is triage, not
judgement. The job description sits in a browser tab, the CVs sit in a folder,
and nothing connects the two — so every shortlist gets rebuilt by hand and
justified from memory.

I built a Chrome extension that captures the job post straight from the browser,
a FastAPI service that scores candidates against that role using OpenAI, and a
React dashboard where recruiters work through a ranked shortlist. MongoDB holds
candidates, roles and scoring history.

The first pass is now automatic, and every ranking comes with a reason a hiring
manager will accept. Delivered as a contributor at Erpixo LLP.

**Skills and deliverables**
Python · FastAPI · OpenAI API · React · MongoDB · Chrome Extension · SaaS
Development · Full-Stack Development · LLM Integration

**Image**
`public/thumbs/resume-ats.png`

---

## 4. AI expense system

**Project title**
AI expense system — Vision reads the bill, approvals route themselves

**Your role**
Lead developer — full-stack

**Project description**
Expense claims arrive as photographs of crumpled receipts, get retyped into a
spreadsheet, then chase signatures over email. The retyping is slow and wrong
often enough to matter, and once a claim is submitted nobody can see whose desk
it's sitting on.

I built an OpenAI Vision pipeline that extracts line items directly from a
photographed bill, then routed each claim through a multi-step approval workflow
with role-based rules. Express and TypeScript API over PostgreSQL, Dockerised and
deploy-ready.

Manual data entry is removed from the process and the approval chain is visible
end to end. Delivered as a contributor at Erpixo LLP.

**Skills and deliverables**
TypeScript · Express · OpenAI API · Computer Vision · OCR · PostgreSQL · Docker ·
Workflow Automation · Node.js

**Image**
`public/thumbs/expense-system.png`

---

## 5. Salon booking marketplace

**Project title**
Salon booking marketplace — customer app, salon dashboard, payments

**Your role**
Lead developer — mobile and backend

**Project description**
Salons take bookings over phone calls and WhatsApp, tracked in a paper diary at
the counter. Double-bookings turn away walk-ins, no-shows go unrecorded, and
nobody has a shared view of which stylists are actually free. Customers, mean-
while, want to book at eleven at night without ringing anyone.

I built the full marketplace: a React Native app for discovery and booking, a
salon-facing dashboard, an internal admin panel, and a NestJS API with Prisma
over PostgreSQL. Razorpay handles payments. All four surfaces live in one
monorepo, so a schema change ships everywhere at once.

Bookings now happen around the clock against real stylist availability.
Delivered as a contributor at Erpixo LLP.

**Skills and deliverables**
React Native · NestJS · Prisma · PostgreSQL · Razorpay · Payment Integration ·
Monorepo · Marketplace Development · Mobile App Development

**Image**
`public/thumbs/saloon-booking-app.png`

---

## 6. Multi-tenant SEO platform

**Project title**
Multi-tenant SEO SaaS — rank, citation and review tracking for agencies

**Your role**
Lead developer — full-stack

**Project description**
An agency running local SEO across hundreds of client locations was checking
rankings by hand and keeping results in spreadsheets. Every client expects a
report, every location has its own citations and reviews to watch, and the manual
approach stops scaling somewhere around thirty locations.

I built a multi-tenant platform that tracks ranks, citations and reviews across
every client location, with tenant isolation so each client sees only their own
data. React and Express over MongoDB, Google OAuth for account connection, and
full CI/CD through GitHub Actions.

Reporting that previously consumed a person's week now runs on its own.
[TODO: number] locations tracked.

Delivered as a contributor at Erpixo LLP.

**Skills and deliverables**
React · Express · MongoDB · Google OAuth · Multi-Tenant Architecture · GitHub
Actions · CI/CD · SaaS Development · SEO

**Image**
`public/thumbs/localseo-pro.png`

---

## Before you submit

**Leave the repository fields empty.** Every `github` field in
`src/data/projects.js` is blank on purpose. Work-for-hire and NDA'd client code
usually cannot be published, and a dead link is worse than none. Qontentt AI's
store listing is the exception — permanent, public, safe.

**Check the image crop.** The thumbnails are 1200×630, a wide social-card ratio.
Portfolio grids tend to want something closer to square, so a wide image gets
letterboxed or centre-cropped — and a centre crop will cut the text out of these
infographics. Preview each upload before saving. `scripts/build-thumbnails.mjs`
sets the size at `W`/`H` on lines 21–22, but the internal layout is tuned for
that ratio, so a taller render needs the card CSS adjusted too, not just the
constants.

**The one real gap: no outcome numbers.** Six substantial products with zero
figures attached is the weakest thing about this set. Nothing above is
fabricated, which is correct — but ask your Erpixo contacts what you're permitted
to quote. Users onboarded, locations tracked, claims processed per month,
latency, uptime. One verified number per entry would do more for conversion than
any rewording of this copy.
