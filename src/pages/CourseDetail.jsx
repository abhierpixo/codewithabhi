import { useState, useEffect } from 'react'
import { COURSES, CATALOG } from '../data/courses.js'
import { go, waLink } from '../router.js'
import { Check } from '../icons.jsx'
import { totals } from '../utils.js'
import { CurriculumSection, Faq } from '../components/Curriculum.jsx'

export default function CourseDetail({ slug, onBook }) {
  const c = COURSES[slug]
  const cat = CATALOG.find((x) => x.slug === slug)
  const [openSec, setOpenSec] = useState(0)
  useEffect(() => { setOpenSec(0); window.scrollTo(0, 0) }, [slug])

  if (!c) {
    return (
      <div>
        <div className="cp-wrap">
          <span className="cp-back" onClick={() => go('courses')} style={{ cursor: 'pointer' }}>← All courses</span>
          <p className="cp-eyebrow">{cat ? cat.tag : 'Course'}</p>
          <h1 className="cp-title">{cat ? cat.name : 'Course'}</h1>
          <p className="cp-sub">{cat ? cat.desc : ''}</p>
        </div>
        <div className="cp-sec">
          <div className="soon-card">
            <h3>Full curriculum coming soon</h3>
            <p>This course is in production. Book a free consultation and I'll tell you exactly what it covers and when it launches.</p>
            <button className="btn btn-green" onClick={() => onBook('15-min free consultation')}>Book a free consultation</button>
          </div>
        </div>
      </div>
    )
  }

  const t = totals(c.sections)
  const incl = [
    `${t.hours} hours of HD video`,
    `${t.lessons} lessons across ${t.sections} section${t.sections > 1 ? 's' : ''}`,
    'Lifetime access — learn at your pace',
    'Downloadable project files & code',
    'Portfolio-ready project',
    'Certificate of completion',
  ]
  const faqs = [
    ['How is this different from free YouTube tutorials?', 'Clear, structured, and drawn from 14+ years of real product engineering at companies like Arista and HPE. A deliberate path in the exact order that builds understanding.'],
    ['Do I need prior experience?', c.prereqTitle === 'No prior knowledge needed' ? 'None at all. This course starts from the very beginning and assumes nothing.' : 'You should be comfortable with the earlier part(s) of this series. If not, start there first.'],
    ['Is it really free to preview?', `Yes. ${t.previews} lessons are free to watch so you can judge the teaching before buying.`],
    ['How long do I have access?', 'Lifetime. Buy once, watch forever, including future updates.'],
    ['Will this help me get a job?', 'It builds the exact skills front-end roles need, plus a portfolio project. Pair it with a free consultation for interview prep.'],
  ]
  const buy = () => { window.location.href = waLink('Hi Abhishek, I\'d like to buy the full course: ' + c.title + '.') }
  const preview = () => { const el = document.getElementById('curriculum'); if (el) el.scrollIntoView({ behavior: 'smooth' }) }

  return (
    <div>
      <div className="cp-wrap">
        <span className="cp-back" onClick={() => go('courses')} style={{ cursor: 'pointer' }}>← All courses</span>
        <div className="cp-top">
          <div>
            <p className="cp-eyebrow">Clear, practical, no filler</p>
            {c.series && (
              <div className="series-nav">
                {c.series.map((sk) => (
                  <span key={sk} className={'series-pill' + (sk === slug ? ' active' : '')} onClick={() => sk !== slug && go('courses/' + sk)}>
                    {COURSES[sk].part}
                  </span>
                ))}
              </div>
            )}
            <h1 className="cp-title">{c.title}</h1>
            <p className="cp-sub">{c.sub}</p>
            <div className="cp-rate">
              <span className="cp-stars">★★★★★</span>
              <span>{c.prereqTitle === 'No prior knowledge needed' ? 'Beginner-friendly · no prior knowledge needed' : 'Builds on the earlier parts'}</span>
            </div>
            <div className="cp-badges">
              <span className="cp-badge">{t.hours} hours</span>
              <span className="cp-badge">{t.lessons} lessons</span>
              <span className="cp-badge">{t.previews} free previews</span>
              <span className="cp-badge">Lifetime access</span>
            </div>
          </div>
          <div className="buybox">
            <span className="preview-tag"><Check /> Free preview available</span>
            <h3>Full Course Access</h3>
            <div className="free">Free preview</div>
            <p className="price-note">Watch {t.previews} lessons free · unlock all {t.lessons} with the full course</p>
            <button className="btn-buy" onClick={buy}>Get the full course</button>
            <button className="btn-buy secondary" onClick={preview}>Watch a free preview</button>
            <div className="guarantee">🛡️ 7-day money-back guarantee</div>
            <div className="incl-t">What's included</div>
            <ul>{incl.map((x, i) => <li key={i}><Check /><span>{x}</span></li>)}</ul>
          </div>
        </div>
      </div>

      <div className="cp-sec wide">
        <div className="cp-eyebrow2">Highly practical</div>
        <h2 className="cp-h2">What you'll learn</h2>
        <ul className="learn-grid">{c.learn.map((x, i) => <li key={i}><Check /><span>{x}</span></li>)}</ul>
      </div>

      <div className="cp-sec" id="curriculum">
        <div className="cp-eyebrow2">A perfectly structured path</div>
        <h2 className="cp-h2">Course content</h2>
        <div className="cur-note">{t.hours} hours · {t.sections} section{t.sections > 1 ? 's' : ''} · {t.lessons} lessons · {t.previews} free to preview</div>
        {c.sections.map((s, i) => (
          <CurriculumSection key={i} sec={s} open={openSec === i} onToggle={() => setOpenSec(openSec === i ? -1 : i)} />
        ))}
      </div>

      <div className="cp-sec">
        <div className="cp-eyebrow2">Target student</div>
        <h2 className="cp-h2">Who this course is for</h2>
        <ul className="who-grid">{c.who.map((x, i) => <li key={i}><span>{x}</span></li>)}</ul>
      </div>

      <div className="cp-sec">
        <div className="cp-eyebrow2">{c.prevCourse ? 'What you should know first' : 'A complete beginner-friendly course'}</div>
        <h2 className="cp-h2">{c.prereqTitle}</h2>
        <div className="prose-card">{c.prereq}</div>
        {c.prevCourse && (
          <div style={{ marginTop: 16 }}>
            <button className="btn btn-ghost" onClick={() => go('courses/' + c.prevCourse)}>← Start with {COURSES[c.prevCourse].part}</button>
          </div>
        )}
      </div>

      <div className="cp-sec">
        <div className="cp-eyebrow2">Need more details?</div>
        <h2 className="cp-h2">Frequently asked questions</h2>
        {faqs.map((f, i) => <Faq key={i} q={f[0]} a={f[1]} />)}
      </div>

      <div className="cp-sec" style={{ textAlign: 'center', paddingBottom: 80 }}>
        <h2 className="cp-h2" style={{ marginLeft: 'auto', marginRight: 'auto' }}>Still on the fence?</h2>
        <p style={{ color: '#94A3B8', maxWidth: '46ch', margin: '0 auto 24px' }}>
          Watch {t.previews} lessons free before you decide.{c.next ? ' Then continue to ' + COURSES[c.next].part + '.' : ''}
        </p>
        <button className="btn btn-green" onClick={buy}>Get the full course</button>
        {c.next && (
          <div style={{ marginTop: 18 }}>
            <span className="cp-back" style={{ color: '#60A5FA', cursor: 'pointer' }} onClick={() => go('courses/' + c.next)}>
              Next: {COURSES[c.next].title} →
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
