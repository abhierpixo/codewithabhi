import { useEffect } from 'react'
import { PROJECTS, DELIVERED_VIA } from '../data/projects.js'
import { go } from '../router.js'
import BackLink from '../components/BackLink.jsx'

/** Outbound links, rendered only for the ones that actually exist. */
const LINKS = [
  { key: 'live', label: 'View live', primary: true },
  { key: 'appStore', label: 'View on the App Store', primary: true },
  { key: 'github', label: 'Source on GitHub' },
  { key: 'caseStudy', label: 'Read the case study' },
]

export default function ProjectDetail({ slug, onBook }) {
  const p = PROJECTS.find((x) => x.slug === slug)
  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  if (!p) {
    return (
      <div className="cp-wrap">
        <BackLink to="work">← All work</BackLink>
        <h1 className="cp-title">Project not found</h1>
        <p className="cp-sub">That project doesn't exist. Head back to the showcase.</p>
      </div>
    )
  }

  const links = LINKS.filter((l) => p[l.key])
  const idx = PROJECTS.findIndex((x) => x.slug === slug)
  const next = PROJECTS[(idx + 1) % PROJECTS.length]

  return (
    <div>
      <div className="cp-wrap">
        <BackLink to="work">← All work</BackLink>
        <div className="pd-head">
          <p className="cp-eyebrow">{p.tag}</p>
          <h1 className="cp-title">{p.name}</h1>
          <p className="cp-sub">{p.blurb}</p>

          <p className="work-attrib">{DELIVERED_VIA}</p>

          <div className="work-tech pd-tech">
            {p.tech.map((t) => <i key={t}>{t}</i>)}
          </div>

          {links.length > 0 && (
            <div className="pd-links">
              {links.map((l) => (
                <a
                  key={l.key}
                  className={'btn ' + (l.primary ? 'btn-green' : 'btn-ghost')}
                  href={p[l.key]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {p.problem && (
        <div className="cp-sec">
          <div className="cp-eyebrow2">The problem</div>
          <h2 className="cp-h2">What the client needed</h2>
          <div className="prose-card">{p.problem}</div>
        </div>
      )}

      {p.build && p.build.length > 0 && (
        <div className="cp-sec">
          <div className="cp-eyebrow2">Under the hood</div>
          <h2 className="cp-h2">How it's built</h2>
          <ul className="pd-build">
            {p.build.map((b) => <li key={b}><span>{b}</span></li>)}
          </ul>
        </div>
      )}

      <div className="cp-sec" style={{ textAlign: 'center', paddingBottom: 80 }}>
        <h2 className="cp-h2" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          Want something like this built?
        </h2>
        <p style={{ color: '#94A3B8', maxWidth: '46ch', margin: '0 auto 24px' }}>
          I build these end to end — architecture, code, deployment and handover.
        </p>
        <button className="btn btn-green" onClick={() => onBook('Project enquiry: ' + p.name)}>
          Start a project conversation
        </button>
        <div style={{ marginTop: 18 }}>
          <span className="cp-back" style={{ color: '#60A5FA', cursor: 'pointer' }} onClick={() => go('work/' + next.slug)}>
            Next: {next.name} →
          </span>
        </div>
      </div>
    </div>
  )
}
