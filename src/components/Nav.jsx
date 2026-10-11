import { useState } from 'react'
import { go, href, useRoute, COURSES_LIVE } from '../router.js'

export default function Nav({ onBook }) {
  const [open, setOpen] = useState(false)
  // "Book free demo" is training language. On the client-facing pages it has to
  // ask for the thing that audience actually wants.
  const route = useRoute()
  const forClients = route.page === 'hire' || route.page === 'work' || route.page === 'project'
  const ctaLabel = forClients ? 'Start a project' : 'Book free demo'
  const ctaService = forClients ? 'Project enquiry' : '15-min free consultation'
  const nav = (to) => { go(to); setOpen(false) }
  // Real anchors with real hrefs — so the links are crawlable, middle-clickable
  // and open-in-new-tab-able — but a plain click stays inside the app.
  const link = (to) => ({
    href: href(to),
    onClick: (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button === 1) return
      e.preventDefault()
      nav(to)
    },
  })
  return (
    <nav>
      <a className="logo" {...link('')} style={{ cursor: 'pointer', textDecoration: 'none' }} aria-label="Abhishek Sinha — home">
        abhishek<span>@</span>trainer:~$
      </a>
      <button
        className={'burger' + (open ? ' open' : '')}
        aria-label="Menu"
        onClick={() => setOpen(!open)}
      >
        <span></span><span></span><span></span>
      </button>
      <ul className={open ? 'open' : ''} id="navMenu">
        <li><a className="nav-link" {...link('')}>Home</a></li>
        <li><a className="nav-link" {...link('work')}>What I've built</a></li>
        <li><a className="nav-link" {...link('hire')}>Hire me</a></li>
        {/* Static pages under /html-course/, /css-course/ and /js-course/, not hash
            routes — so real hrefs, which also give middle-click and open-in-new-tab
            for free. Ungated: unlike the catalogue, these courses are finished.
            In learning order, which is also the order they are meant to be taken. */}
        <li><a className="nav-link" href="/html-course/">HTML course</a></li>
        <li><a className="nav-link" href="/css-course/">CSS course</a></li>
        <li><a className="nav-link" href="/js-course/">JavaScript course</a></li>
        {COURSES_LIVE && (
          <li><a className="nav-link" {...link('courses')}>All courses</a></li>
        )}
        <li>
          <button type="button" className="nav-cta" onClick={() => { setOpen(false); onBook(ctaService) }}>
            {ctaLabel}
          </button>
        </li>
      </ul>
    </nav>
  )
}
