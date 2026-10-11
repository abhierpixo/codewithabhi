import { useState, useEffect } from 'react'
import { useRoute, replace, href, SITE } from './router.js'
import { routeMeta, applyHead } from './seo.js'
import Nav from './components/Nav.jsx'
import BookingModal from './components/BookingModal.jsx'
import Home from './pages/Home.jsx'
import Courses from './pages/Courses.jsx'
import CourseDetail from './pages/CourseDetail.jsx'
import Work from './pages/Work.jsx'
import Hire from './pages/Hire.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'

export default function App() {
  const route = useRoute()
  const [booking, setBooking] = useState(null)
  const onBook = (svc) => setBooking(svc || '15-min free consultation')

  // A flag-disabled course link gets redirected by parseRoute, so bring the address
  // bar along with it — otherwise it keeps advertising a page the visitor isn't
  // looking at. replaceState leaves no history entry and fires no navigation event.
  useEffect(() => {
    if (!/^\/courses(\/|$)/.test(window.location.pathname)) return
    if (route.page === 'home') replace('')
    else if (route.page === 'courses') replace('courses')
  }, [route])

  // Title, description, canonical, social card and schema follow the page being
  // shown. The prerendered shells carry the same values for crawlers; this keeps
  // them right after client-side navigation.
  useEffect(() => { applyHead(routeMeta(route)) }, [route])

  const isHome = route.page === 'home'
  let page
  // parseRoute() gates these on COURSES_LIVE / COURSE_DETAIL_ENABLED
  if (route.page === 'courses') page = <Courses />
  else if (route.page === 'course') page = <CourseDetail slug={route.slug} onBook={onBook} />
  else if (route.page === 'hire') page = <Hire onBook={onBook} />
  else if (route.page === 'work') page = <Work onBook={onBook} />
  else if (route.page === 'project') page = <ProjectDetail slug={route.slug} onBook={onBook} />
  else page = <Home onBook={onBook} />

  return (
    <>
      {/* Home has its own nav baked in; other routes get the React nav */}
      {!isHome && <Nav onBook={onBook} />}
      {page}
      {!isHome && (
        <footer>
          <p>© 2026 {SITE.owner} · Software &amp; Technical Trainer · Bengaluru, India</p>
          {/* real links, so every page is reachable by a crawler without running the app */}
          <div className="footer-links" role="navigation" aria-label="Footer">
            <a href={href('')}>Home</a>
            <a href={href('work')}>Work</a>
            <a href={href('hire')}>Hire me</a>
            <a href="/html-course/">Free HTML course</a>
            <a href="/css-course/">Free CSS course</a>
            <a href="/js-course/">Free JavaScript course</a>
            <a href={SITE.linkedin} rel="noopener noreferrer" target="_blank">LinkedIn</a>
          </div>
        </footer>
      )}
      {booking && <BookingModal service={booking} onClose={() => setBooking(null)} />}
    </>
  )
}
