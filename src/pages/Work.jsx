import { PROJECTS } from '../data/projects.js'
import { go } from '../router.js'

/**
 * Showcase of shipped products. Each card links out to the product's own site
 * when there is a public one; entries without a URL stay non-clickable rather
 * than pointing somewhere misleading.
 */
export default function Work({ onBook }) {
  return (
    <div>
      <div className="cp-wrap" style={{ paddingBottom: 0 }}>
        <span className="cp-back" onClick={() => go('')} style={{ cursor: 'pointer' }}>← Home</span>
        <p className="cp-eyebrow">Portfolio</p>
        <h1 className="cp-title">What I've built</h1>
        <p className="cp-sub">
          Fourteen years of shipped products — the work behind everything I teach.
          Where a product has a public page, the card links straight to it.
        </p>
      </div>

      <section style={{ paddingTop: 40 }}>
        <div className="work-grid">
          {PROJECTS.map((p) => {
            const live = Boolean(p.url)
            const Card = live ? 'a' : 'div'
            const linkProps = live
              ? { href: p.url, target: '_blank', rel: 'noopener noreferrer' }
              : {}
            return (
              <Card key={p.slug} className={'work-card ' + p.accent + (live ? ' is-live' : '')} {...linkProps}>
                <div className="work-top">
                  <span className="work-when">{p.period}</span>
                  {live && <span className="work-go" aria-hidden="true">↗</span>}
                </div>
                <h3>{p.name}</h3>
                <div className="work-org">{p.org}</div>
                <p>{p.blurb}</p>
                <div className="work-tech">
                  {p.tech.map((t) => <i key={t}>{t}</i>)}
                </div>
                <div className={'work-link' + (live ? '' : ' muted')}>
                  {live ? 'Visit the product site →' : p.note}
                </div>
              </Card>
            )
          })}
        </div>
      </section>

      <div className="cp-sec" style={{ textAlign: 'center', paddingBottom: 80 }}>
        <h2 className="cp-h2" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          Want to build like this?
        </h2>
        <p style={{ color: '#94A3B8', maxWidth: '48ch', margin: '0 auto 24px' }}>
          Everything I teach comes out of shipping these — real products, real users, real scale.
        </p>
        <button className="btn btn-green" onClick={() => onBook('15-min free consultation')}>
          Book a free consultation
        </button>
        <div style={{ marginTop: 18 }}>
          <span className="cp-back" style={{ color: '#60A5FA', cursor: 'pointer' }} onClick={() => go('courses')}>
            Browse the courses →
          </span>
        </div>
      </div>
    </div>
  )
}
