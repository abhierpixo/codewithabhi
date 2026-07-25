import { useState, useRef, useEffect } from 'react'
import { Chev, Play, Doc } from '../icons.jsx'
import { dur } from '../utils.js'

export function CurriculumSection({ sec, open, onToggle }) {
  const bodyRef = useRef(null)
  const [h, setH] = useState(0)
  useEffect(() => { if (bodyRef.current) setH(bodyRef.current.scrollHeight) }, [])
  let m = 0
  sec.lessons.forEach((l) => { const a = l[1].match(/(\d+)m/), b = l[1].match(/(\d+)h/); if (a) m += +a[1]; if (b) m += +b[1] * 60 })
  return (
    <div className={'cur-sec' + (open ? ' open' : '')}>
      <button className="cur-h" onClick={onToggle} aria-expanded={open}>
        <span className="cur-t">{sec.t}</span>
        <span className="cur-meta">{sec.lessons.length} lessons · {dur(m)}</span>
        <Chev />
      </button>
      <div className="cur-b" ref={bodyRef} style={{ maxHeight: open ? h + 'px' : '0px', transition: 'max-height .4s ease' }}>
        <ul>
          {sec.lessons.map((l, i) => {
            const isPrev = l[2] === 'p'
            const isDoc = /summary|exercise|note|feedback|learning path|prerequisites/i.test(l[0]) && !isPrev
            return (
              <li key={i} className={isPrev ? 'is-prev' : ''}>
                <span className="l-ico">{isDoc ? <Doc /> : <Play />}</span>
                <span className="l-t">{l[0]}</span>
                {isPrev && <span className="l-prev">Preview</span>}
                <span className="l-dur">{l[1]}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export function Faq({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={'faq-item' + (open ? ' open' : '')}>
      <button className="faq-h" onClick={() => setOpen(!open)}>
        <span className="dot"></span><span className="t">{q}</span><Chev />
      </button>
      {open && <div className="faq-b">{a}</div>}
    </div>
  )
}
