import { go } from '../router.js'

/**
 * The "← Home" / "← All courses" affordance. Styled as text rather than a
 * button, so it needs the keyboard handling a real button would have given it.
 */
export default function BackLink({ to, children, style }) {
  const nav = () => go(to)
  return (
    <span
      className="cp-back"
      role="link"
      tabIndex={0}
      onClick={nav}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); nav() }
      }}
      style={{ cursor: 'pointer', ...style }}
    >
      {children}
    </span>
  )
}
