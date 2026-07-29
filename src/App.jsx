import { useState, useEffect } from 'react'
import { useRoute, COURSES_LIVE } from './router.js'
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

  // An old /courses link now lands on home, so drop the hash too — otherwise the
  // address bar keeps advertising a page the visitor isn't looking at.
  // replaceState leaves no history entry and fires no hashchange.
  useEffect(() => {
    if (!COURSES_LIVE && /^#\/?courses(\/|$)/.test(window.location.hash)) {
      history.replaceState(null, '', window.location.pathname + window.location.search)
    }
  }, [route])

  const isHome = route.page === 'home'
  let page
  // parseHash() never yields these while COURSES_LIVE is false
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
        <footer>© 2026 Abhishek Sinha · Software &amp; Technical Trainer · codingwithabhi.com</footer>
      )}
      {booking && <BookingModal service={booking} onClose={() => setBooking(null)} />}
    </>
  )
}
