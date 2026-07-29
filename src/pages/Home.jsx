import { useEffect, useRef } from 'react'
import { HOME_BODY, HOME_SCRIPTS } from '../data/homeContent.js'
import { CARD_SLUG } from '../data/courses.js'
import { go, COURSES_LIVE } from '../router.js'

/**
 * The rotating tail of the hero headline. The sentence reads
 * "Learn software from someone who's ___", so these are past participles —
 * the imperative forms (Build It, Ship It) don't agree with "who's".
 * Index 0 must match the word already in the markup.
 */
const HERO_WORDS = ['built it.', 'shipped it.', 'proved it.', 'learned it.']
const ROTATE_MS = 2000
const FADE_MS = 320

/**
 * Home mounts the original, fully-tested rich landing page (hero, terminal,
 * company marquee, interactive roadmap builder, sections, booking modal) verbatim,
 * then wires its course cards to the React router so they open the detail pages.
 */
export default function Home({ onBook }) {
  const ref = useRef(null)

  useEffect(() => {
    const host = ref.current
    if (!host) return
    host.innerHTML = HOME_BODY

    // let the rich page's scripts (roadmap builder, etc.) open the React booking modal
    window.__openBooking = (svc) => onBook(svc || '15-min free consultation')

    // run the original page scripts (terminal typing, marquee, reveals, roadmap builder, booking modal, config wiring)
    try {
      // eslint-disable-next-line no-new-func
      new Function(HOME_SCRIPTS)()
    } catch (e) {
      console.warn('home script init:', e)
    }

    // course cards -> route to the Mosh-style detail pages. Skipped while the
    // course is unreleased, which leaves the cards as the original page built
    // them: "Book free demo class", wired to the booking modal by HOME_SCRIPTS.
    if (COURSES_LIVE) {
      host.querySelectorAll('.offer[data-course]').forEach((card) => {
        const slug = CARD_SLUG[card.getAttribute('data-course')]
        card.style.cursor = 'pointer'
        const btn = card.querySelector('.btn-offer')
        if (btn) btn.textContent = 'View course →'
        card.addEventListener(
          'click',
          (e) => {
            e.preventDefault()
            e.stopPropagation()
            if (slug) go('courses/' + slug)
          },
          true
        )
      })
    }

    // data-route links go through the router; the page's own data-target
    // handler only knows how to scroll to an in-page section
    host.querySelectorAll('[data-route]').forEach((el) => {
      const target = el.getAttribute('data-route')
      el.style.cursor = 'pointer'
      const nav = (e) => { e.preventDefault(); go(target) }
      el.addEventListener('click', nav)
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') nav(e)
      })
    })

    // rotating headline tail — swap the green phrase every couple of seconds
    let rotate, swap, onResize
    const accent = host.querySelector('header h1 .accent')
    const reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches
    if (accent && !reduced) {
      // pull the sentence's trailing "." inside the span, so the whole phrase
      // fades as one instead of the period jumping as word widths change
      const line = accent.parentNode
      const tail = line.lastChild
      if (tail && tail.nodeType === 3 && tail.textContent.trim() === '.') line.removeChild(tail)
      accent.textContent = HERO_WORDS[0]

      // Drive the phrase's width explicitly so the line re-centres as a
      // transition instead of snapping. Left to itself the line reflows the
      // instant the text changes, which jumps "someone who's" sideways by
      // ~40px every swap. Re-measured on resize — the headline is sized in vw.
      let i = 0
      let widths = []
      const measure = () => {
        const cs = getComputedStyle(accent)
        const probe = document.createElement('span')
        probe.style.cssText = 'position:absolute;visibility:hidden;white-space:pre;top:-9999px'
        probe.style.fontFamily = cs.fontFamily
        probe.style.fontSize = cs.fontSize
        probe.style.fontWeight = cs.fontWeight
        probe.style.letterSpacing = cs.letterSpacing
        document.body.appendChild(probe)
        widths = HERO_WORDS.map((w) => {
          probe.textContent = w
          return Math.ceil(probe.getBoundingClientRect().width)
        })
        probe.remove()
        accent.style.width = widths[i] + 'px'
      }
      measure()
      // Re-measure once the display webfont is in: measuring against the
      // fallback yields widths that don't match the rendered text.
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure).catch(() => {})

      let raf
      onResize = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(measure) }
      window.addEventListener('resize', onResize)

      rotate = setInterval(() => {
        accent.classList.add('swapping')
        swap = setTimeout(() => {
          i = (i + 1) % HERO_WORDS.length
          accent.textContent = HERO_WORDS[i]
          accent.style.width = widths[i] + 'px'
          accent.classList.remove('swapping')
        }, FADE_MS)
      }, ROTATE_MS)
    }

    return () => {
      clearInterval(rotate)
      clearTimeout(swap)
      if (onResize) window.removeEventListener('resize', onResize)
      if (host) host.innerHTML = ''
    }
  }, [onBook])

  return <div ref={ref} />
}
