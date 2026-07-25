import { CATALOG } from '../data/courses.js'
import { go } from '../router.js'
import { Play } from '../icons.jsx'

export default function Courses() {
  return (
    <div>
      <div className="cp-wrap" style={{ paddingBottom: 0 }}>
        <span className="cp-back" onClick={() => go('')} style={{ cursor: 'pointer' }}>← Home</span>
        <p className="cp-eyebrow">Course catalog</p>
        <h1 className="cp-title">All courses</h1>
        <p className="cp-sub">Structured, project-based courses. The HTML &amp; CSS series is detailed below; more are in production.</p>
      </div>
      <section style={{ paddingTop: 40 }}>
        <div className="offers">
          {CATALOG.map((c) => (
            <div key={c.slug} className="offer" style={{ cursor: 'pointer' }} onClick={() => go('courses/' + c.slug)}>
              <div className="glyph"><Play /></div>
              <h3>{c.name}</h3>
              <p>{c.desc}</p>
              <div className="cprice">{c.soon ? 'Coming soon' : 'Free preview + full course'}</div>
              <button type="button" className="btn-offer" onClick={(e) => { e.stopPropagation(); go('courses/' + c.slug) }}>
                {c.soon ? 'Preview outline →' : 'View course →'}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
