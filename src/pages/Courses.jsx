import { CATALOG, COURSES } from '../data/courses.js'
import { seriesTotals } from '../utils.js'
import { go } from '../router.js'
import { Play } from '../icons.jsx'
import BackLink from '../components/BackLink.jsx'

export default function Courses() {
  // derived from the lesson data, so it can never drift from the curriculum
  const series = seriesTotals(
    Object.values(COURSES).filter((c) => c.series && c.series.length > 1),
  )
  return (
    <div>
      <div className="cp-wrap" style={{ paddingBottom: 0 }}>
        <BackLink to="">← Home</BackLink>
        <p className="cp-eyebrow">Course catalog</p>
        <h1 className="cp-title">All courses</h1>
        <p className="cp-sub">Structured, project-based courses built from 14 years of shipping product. The three-part HTML &amp; CSS series is fully mapped out below; the rest are in production.</p>
        <div className="series-total">
          <span><b>{series.hm}</b>HTML &amp; CSS video, end to end</span>
          <span><b>{series.coreHm}</b>concept lessons</span>
          <span><b>{series.projectHm}</b>guided projects</span>
          <span><b>{series.projects}</b>portfolio projects</span>
        </div>
      </div>
      <section style={{ paddingTop: 40 }}>
        <div className="offers">
          {CATALOG.map((c) => (
            <div key={c.slug} className={'offer' + (c.soon ? ' is-soon' : '')} style={{ cursor: 'pointer' }} onClick={() => go('courses/' + c.slug)}>
              <div className="offer-head">
                <div className="glyph"><Play /></div>
                <span className="c-level">{c.level}</span>
              </div>
              <span className="c-tag">{c.tag}</span>
              <h3>{c.name}</h3>
              <p>{c.desc}</p>
              <span className="cprice">{c.soon ? 'Coming soon' : 'Free preview available'}</span>
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
