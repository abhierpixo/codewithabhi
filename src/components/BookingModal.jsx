import { useState, useEffect } from 'react'
import { SITE } from '../router.js'

export default function BookingModal({ service, onClose }) {
  const [sent, setSent] = useState(false)
  const [busy, setBusy] = useState(false)
  const [f, setF] = useState({
    service: service || '15-min free consultation',
    name: '', email: '', phone: '', audience: 'Working professional', topic: '', message: '',
  })

  useEffect(() => {
    const on = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', on)
    return () => window.removeEventListener('keydown', on)
  }, [onClose])

  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    if (!f.name || !f.email) return
    setBusy(true)
    const payload = { ...f, _subject: `[${f.service}] ${f.name}`, _template: 'table' }
    try {
      const r = await fetch('https://formsubmit.co/ajax/' + SITE.email, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!r.ok) throw new Error('failed')
      setSent(true)
    } catch (err) {
      window.location.href =
        'mailto:' + SITE.email +
        '?subject=' + encodeURIComponent(`[${f.service}] ${f.name}`) +
        '&body=' + encodeURIComponent(
          `Name: ${f.name}\nEmail: ${f.email}\nPhone: ${f.phone}\nService: ${f.service}\nTopic: ${f.topic}\nMessage: ${f.message}`
        )
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="overlay" onClick={(e) => { if (e.target.className === 'overlay') onClose() }}>
      <div className="modal">
        <button className="close-x" onClick={onClose} aria-label="Close">✕</button>
        {sent ? (
          <div className="m-success" style={{ display: 'block' }}>
            <div className="tick">✓</div>
            <h4>Request received!</h4>
            <p>Thanks — I'll reply to your email within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={submit}>
            <h3>Let's get started</h3>
            <p className="m-sub">Tell me what you need and I'll reply within 24 hours. The first conversation is always free.</p>
            <div className="field">
              <label>What would you like to book?</label>
              <select value={f.service} onChange={set('service')}>
                {['15-min free consultation','Free demo session','Web Development (HTML, CSS, JS)','React Development','Angular Development','1-on-1 training','Career switch guidance','Project support','Something else'].map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div className="field"><label>Your name *</label><input value={f.name} onChange={set('name')} placeholder="Full name" required /></div>
            <div className="field-row">
              <div className="field"><label>Email *</label><input type="email" value={f.email} onChange={set('email')} placeholder="you@example.com" required /></div>
              <div className="field"><label>Phone / WhatsApp</label><input value={f.phone} onChange={set('phone')} placeholder="+91 ..." /></div>
            </div>
            <div className="field">
              <label>I am a</label>
              <select value={f.audience} onChange={set('audience')}>
                {['Working professional','Fresher / job seeker','Career switcher (from another field)','Other'].map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div className="field"><label>What do you want to learn?</label><input value={f.topic} onChange={set('topic')} placeholder="e.g., web development, React..." /></div>
            <div className="field"><label>Anything else?</label><textarea value={f.message} onChange={set('message')} rows="2" placeholder="Current level, timeline..."></textarea></div>
            <button className="btn-submit" disabled={busy}>{busy ? 'Sending...' : 'Request my free session'}</button>
          </form>
        )}
      </div>
    </div>
  )
}
