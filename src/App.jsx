import { useState, useEffect } from 'react'
import { useRoute } from './router.js'
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

  // A flag-disabled course link gets redirected by parseHash, so bring the address
  // bar along with it — otherwise it keeps advertising a page the visitor isn't
  // looking at. replaceState leaves no history entry and fires no hashchange.
  useEffect(() => {
    if (!/^#\/?courses(\/|$)/.test(window.location.hash)) return
    const bare = window.location.pathname + window.location.search
    if (route.page === 'home') history.replaceState(null, '', bare)
    else if (route.page === 'courses') history.replaceState(null, '', '#/courses')
  }, [route])

  const isHome = route.page === 'home'
  let page
  // parseHash() gates these on COURSES_LIVE / COURSE_DETAIL_ENABLED
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
