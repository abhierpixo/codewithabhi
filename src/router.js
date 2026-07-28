import { useState, useEffect } from 'react'

export function parseHash() {
  const h = (window.location.hash || '').replace(/^#\/?/, '')
  const parts = h.split('/').filter(Boolean)
  if (parts[0] === 'courses' && parts[1]) return { page: 'course', slug: parts[1] }
  if (parts[0] === 'courses') return { page: 'courses' }
  if (parts[0] === 'hire') return { page: 'hire' }
  if (parts[0] === 'work' && parts[1]) return { page: 'project', slug: parts[1] }
  if (parts[0] === 'work') return { page: 'work' }
  return { page: 'home' }
}

export function go(to) {
  window.location.hash = to
  window.scrollTo(0, 0)
}

export function useRoute() {
  const [route, setRoute] = useState(parseHash())
  useEffect(() => {
    const on = () => setRoute(parseHash())
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])
  return route
}

export const SITE = {
  whatsapp: '917479983307',
  email: 'catchabhi@live.com',
  url: 'https://codingwithabhi.com/',
}
export const waLink = (msg) =>
  'https://wa.me/' + SITE.whatsapp + '?text=' + encodeURIComponent(msg)
