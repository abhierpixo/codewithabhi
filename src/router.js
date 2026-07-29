import { useState, useEffect } from "react";

/**
 * The curriculum is written but the videos aren't produced yet, so the course
 * area ships in stages. Two independent levers, both enforced here in parseHash
 * so a hand-typed or bookmarked URL can't walk past a hidden link:
 *
 *   COURSES_LIVE           is the course area reachable at all — the nav entry,
 *                          the home cards, and the /courses routes themselves.
 *   COURSE_DETAIL_ENABLED  do catalogue cards open an individual course page.
 *
 * Rollout: both false (nothing course-related exists) → COURSES_LIVE only (the
 * catalogue is browsable but read-only, a genuine "coming soon") → both true
 * once the videos are produced. Setting COURSE_DETAIL_ENABLED alone does
 * nothing; the catalogue it hangs off is unreachable until COURSES_LIVE is on.
 */
export const COURSES_LIVE = false;
export const COURSE_DETAIL_ENABLED = false;

export function parseHash() {
  const h = (window.location.hash || "").replace(/^#\/?/, "");
  const parts = h.split("/").filter(Boolean);
  if (!COURSES_LIVE && parts[0] === "courses") return { page: "home" };
  // Detail pages off: a deep link to one lands on the catalogue rather than the
  // unfinished page. Courses.jsx hides the links; this closes the URL behind them.
  if (parts[0] === "courses" && parts[1])
    return COURSE_DETAIL_ENABLED
      ? { page: "course", slug: parts[1] }
      : { page: "courses" };
  if (parts[0] === "courses") return { page: "courses" };
  if (parts[0] === "hire") return { page: "hire" };
  if (parts[0] === "work" && parts[1])
    return { page: "project", slug: parts[1] };
  if (parts[0] === "work") return { page: "work" };
  return { page: "home" };
}

export function go(to) {
  window.location.hash = to;
  window.scrollTo(0, 0);
}

export function useRoute() {
  const [route, setRoute] = useState(parseHash());
  useEffect(() => {
    const on = () => setRoute(parseHash());
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  return route;
}

export const SITE = {
  whatsapp: "917479983307",
  email: "catchabhi@live.com",
  url: "https://codingwithabhi.com/",
};
export const waLink = (msg) =>
  "https://wa.me/" + SITE.whatsapp + "?text=" + encodeURIComponent(msg);
