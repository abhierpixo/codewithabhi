import { PROJECTS } from '../data/projects.js'
import { PROOF_STATS, PROFILES, TESTIMONIALS, SERVICES, PROCESS, ENGAGEMENT, CLIENT_FAQ } from '../data/hire.js'
import { go } from '../router.js'
import { Faq } from '../components/Curriculum.jsx'

/**
 * The client-facing landing page — the link to paste into Upwork and Fiverr
 * proposals. Every section renders only when it has content, so unfilled proof
 * simply doesn't appear rather than showing an empty shell.
 */
export default function Hire({ onBook }) {
  const engagement = [
    ['Availability', ENGAGEMENT.availability],
    ['Response time', ENGAGEMENT.responseTime],
    ['Working hours', ENGAGEMENT.timezone],
    ['Engagement', ENGAGEMENT.models],
    ['Typical size', ENGAGEMENT.startingAt],
  ].filter(([, v]) => v)

  const enquire = () => onBook('Project enquiry')

  return (
    <div className="hire">
      <div className="cp-wrap" style={{ paddingBottom: 0 }}>
        <p className="cp-eyebrow">Available for freelance projects</p>
        <h1 className="cp-title">I build AI apps, mobile apps and backends that ship.</h1>
        <p className="cp-sub">
          14+ years engineering enterprise software, and six products taken from an empty
          repository to production — one of them live on the App Store. If you need
          something built properly rather than demoed, that is the work I do.
        </p>

        <div className="hire-cta">
          <button className="btn btn-green" onClick={enquire}>Tell me about your project</button>
          <button className="btn btn-ghost" onClick={() => go('work')}>See the work first →</button>
        </div>

        {PROOF_STATS.length > 0 && (
          <div className="trust-strip hire-stats">
            {PROOF_STATS.map((s) => (
              <div key={s.label}><b>{s.n}</b>{s.label}</div>
            ))}
          </div>
        )}
      </div>

      {PROFILES.length > 0 && (
        <div className="cp-sec">
          <div className="cp-eyebrow2">Check me out before you write to me</div>
          <h2 className="cp-h2">Verify any of this yourself</h2>
          <div className="proof-grid">
            {PROFILES.filter((p) => p.url).map((p) => (
              <a key={p.name} className="proof-card" href={p.url} target="_blank" rel="noopener noreferrer">
                <span className="proof-name">{p.name} <i aria-hidden="true">↗</i></span>
                <span className="proof-note">{p.note}</span>
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="cp-sec">
        <div className="cp-eyebrow2">What I take on</div>
        <h2 className="cp-h2">Three kinds of work</h2>
        <div className="svc-grid">
          {SERVICES.map((s) => (
            <div key={s.name} className="svc-card">
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
              <div className="svc-proof">
                {s.proof
                  .map((slug) => PROJECTS.find((p) => p.slug === slug))
                  .filter(Boolean)
                  .map((p) => (
                    <button key={p.slug} type="button" className="svc-chip" onClick={() => go('work/' + p.slug)}>
                      {p.name}
                    </button>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cp-sec">
        <div className="cp-eyebrow2">Recent work</div>
        <h2 className="cp-h2">Six products, built end to end</h2>
        <div className="hire-work">
          {PROJECTS.map((p) => (
            <button key={p.slug} type="button" className={'hire-item ' + p.accent} onClick={() => go('work/' + p.slug)}>
              <img src={`/thumbs/${p.slug}-viz.png`} alt="" width="1200" height="630" loading="lazy" />
              <span className="hi-body">
                <span className="hi-tag">{p.tag}</span>
                <span className="hi-name">{p.name}</span>
                <span className="hi-blurb">{p.blurb}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {TESTIMONIALS.length > 0 && (
        <div className="cp-sec">
          <div className="cp-eyebrow2">In their words</div>
          <h2 className="cp-h2">What clients say</h2>
          <div className="quote-grid">
            {TESTIMONIALS.map((t) => (
              <blockquote key={t.quote.slice(0, 40)} className="quote-card">
                <p>{t.quote}</p>
                <footer>{[t.name, t.role, t.company].filter(Boolean).join(' · ')}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      )}

      <div className="cp-sec">
        <div className="cp-eyebrow2">No surprises</div>
        <h2 className="cp-h2">How we would work</h2>
        <ol className="process-grid">
          {PROCESS.map((s, i) => (
            <li key={s.step}>
              <span className="proc-n">{String(i + 1).padStart(2, '0')}</span>
              <span className="proc-b"><b>{s.step}</b>{s.desc}</span>
            </li>
          ))}
        </ol>
      </div>

      {engagement.length > 0 && (
        <div className="cp-sec">
          <div className="cp-eyebrow2">Before you ask</div>
          <h2 className="cp-h2">Working together</h2>
          <dl className="engage-grid">
            {engagement.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
        </div>
      )}

      <div className="cp-sec">
        <div className="cp-eyebrow2">Straight answers</div>
        <h2 className="cp-h2">Questions clients ask</h2>
        {CLIENT_FAQ.map(([q, a]) => <Faq key={q} q={q} a={a} />)}
      </div>

      <div className="cp-sec" style={{ textAlign: 'center', paddingBottom: 80 }}>
        <h2 className="cp-h2" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          Tell me what you are building
        </h2>
        <p style={{ color: '#94A3B8', maxWidth: '46ch', margin: '0 auto 24px' }}>
          Describe it in a few lines. I will tell you honestly whether I am the right
          person, roughly what it takes, and where the risks are.
        </p>
        <button className="btn btn-green" onClick={enquire}>Start a project conversation</button>
      </div>
    </div>
  )
}
