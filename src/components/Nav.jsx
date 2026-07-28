import { useState } from 'react'
import { go, useRoute } from '../router.js'

export default function Nav({ onBook }) {
  const [open, setOpen] = useState(false)
  // "Book free demo" is training language. On the client-facing pages it has to
  // ask for the thing that audience actually wants.
  const route = useRoute()
  const forClients = route.page === 'hire' || route.page === 'work' || route.page === 'project'
  const ctaLabel = forClients ? 'Start a project' : 'Book free demo'
  const ctaService = forClients ? 'Project enquiry' : '15-min free consultation'
  const nav = (to) => { go(to); setOpen(false) }
  // these render as anchors for styling but behave as buttons, so they need
  // the key handling a real button would have given them for free
  const activate = (fn) => ({
    onClick: fn,
    onKeyDown: (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fn() }
    },
  })
  return (
    <nav>
      <div className="logo" role="button" tabIndex={0} {...activate(() => go(''))} style={{ cursor: 'pointer' }}>
        abhishek<span>@</span>trainer:~$
      </div>
      <button
        className={'burger' + (open ? ' open' : '')}
        aria-label="Menu"
        onClick={() => setOpen(!open)}
      >
        <span></span><span></span><span></span>
      </button>
      <ul className={open ? 'open' : ''} id="navMenu">
        <li><a className="nav-link" role="button" tabIndex={0} {...activate(() => nav(''))}>Home</a></li>
        <li><a className="nav-link" role="button" tabIndex={0} {...activate(() => nav('work'))}>What I've built</a></li>
        <li><a className="nav-link" role="button" tabIndex={0} {...activate(() => nav('hire'))}>Hire me</a></li>
        <li><a className="nav-link" role="button" tabIndex={0} {...activate(() => nav('courses'))}>All courses</a></li>
        <li>
          <button type="button" className="nav-cta" onClick={() => { setOpen(false); onBook(ctaService) }}>
            {ctaLabel}
          </button>
        </li>
      </ul>
    </nav>
  )
}
