import { PROJECTS, SERVICES, DELIVERED_VIA } from '../data/projects.js'
import { go } from '../router.js'
import BackLink from '../components/BackLink.jsx'

/**
 * Selected client work. Cards open an in-site detail page rather than linking
 * straight out, so the showcase is complete without depending on public repos
 * or hosted demos — external links live on the detail page when they exist.
 */
export default function Work({ onBook }) {
  return (
    <div>
      <div className="cp-wrap" style={{ paddingBottom: 0 }}>
        <BackLink to="">← Home</BackLink>
        <p className="cp-eyebrow">Selected work</p>
        <h1 className="cp-title">Six products, six landing pages</h1>
        <p className="cp-sub">
          Each one is a real, working codebase. Click any project to see what it does,
          how it's built, and the problem it solves.
        </p>
        <p className="work-attrib">{DELIVERED_VIA}</p>
      </div>

      <section style={{ paddingTop: 40 }}>
        <div className="work-grid">
          {PROJECTS.map((p) => (
            <button
              key={p.slug}
              type="button"
              className={'work-card is-live ' + p.accent}
              onClick={() => go('work/' + p.slug)}
            >
              <div className="work-top">
                <span className="work-when">{p.tag}</span>
                {p.shipped && <span className="work-shipped">Shipped</span>}
              </div>
              <h3>{p.name}</h3>
              <p>{p.blurb}</p>
              <div className="work-tech">
                {p.tech.map((t) => <i key={t}>{t}</i>)}
              </div>
              <div className="work-link">Explore project <span aria-hidden="true">→</span></div>
            </button>
          ))}
        </div>
      </section>

      <div className="cp-sec" style={{ paddingTop: 60 }}>
        <div className="cp-eyebrow2">What I can build for you</div>
        <h2 className="cp-h2">Three ways to work with me</h2>
        <div className="svc-grid">
          {SERVICES.map((s) => (
            <div key={s.name} className="svc-card">
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="cp-sec" style={{ textAlign: 'center', paddingBottom: 80 }}>
        <h2 className="cp-h2" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          Have something like this to build?
        </h2>
        <p style={{ color: '#94A3B8', maxWidth: '48ch', margin: '0 auto 24px' }}>
          Tell me what you need and I'll tell you honestly whether I'm the right person for it.
        </p>
        <button className="btn btn-green" onClick={() => onBook('Project enquiry')}>
          Start a project conversation
        </button>
      </div>
    </div>
  )
}
