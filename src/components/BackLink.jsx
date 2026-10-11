import { go, href } from '../router.js'

/**
 * The "← Home" / "← All courses" affordance. A real link with a real href, so
 * it is crawlable and works without JavaScript; a plain click stays in-app.
 */
export default function BackLink({ to, children, style }) {
  return (
    <a
      className="cp-back"
      href={href(to)}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
        e.preventDefault()
        go(to)
      }}
      style={{ cursor: 'pointer', textDecoration: 'none', ...style }}
    >
      {children}
    </a>
  )
}
