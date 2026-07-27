import { useState } from 'react'
import { Chev, Play, Doc } from '../icons.jsx'
import { dur, toMinutes } from '../utils.js'

export function CurriculumSection({ sec, open, onToggle }) {
  const mins = sec.lessons.reduce((n, l) => n + toMinutes(l.d), 0)
  const isProject = /^Guided Project/i.test(sec.t)

  return (
    <div className={'cur-sec' + (open ? ' open' : '') + (isProject ? ' is-project' : '')}>
      <button className="cur-h" onClick={onToggle} aria-expanded={open}>
        <span className="cur-t">{sec.t}</span>
        <span className="cur-meta">{sec.lessons.length} lessons · {dur(mins)}</span>
        <Chev />
      </button>
      {/* 0fr → 1fr animates without measuring anything, so nothing can clip
          when lesson rows reflow at a different width or after fonts load */}
      <div className="cur-b">
        <div className="cur-b-inner">
          <ul>
            {sec.lessons.map((l, i) => {
              const isDoc = /review|summary|exercise|testing|analysis|requirements/i.test(l.t) && !l.p
              return (
                <li key={l.t + i} className={l.p ? 'is-prev' : ''}>
                  <span className="l-ico">{isDoc ? <Doc /> : <Play />}</span>
                  <span className="l-main">
                    <span className="l-t">{l.t}</span>
                    {l.topics && l.topics.length > 0 && (
                      <span className="l-topics">{l.topics.join(' · ')}</span>
                    )}
                  </span>
                  {l.p && <span className="l-prev">Preview</span>}
                  <span className="l-dur">{l.d}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export function Faq({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={'faq-item' + (open ? ' open' : '')}>
      <button className="faq-h" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span className="dot"></span><span className="t">{q}</span><Chev />
      </button>
      {open && <div className="faq-b">{a}</div>}
    </div>
  )
}
