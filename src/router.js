import { useState, useEffect } from "react";

/**
 * The curriculum is written but the videos aren't produced yet, so the course
 * area ships in stages. Two independent levers, both enforced here in parseRoute
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

/**
 * Routing is path based (/work, /work/:slug, /hire) so every page has a real
 * URL that search engines can crawl and index on its own. The site used to use
 * hash routes (#/work/:slug); a crawler never sees the fragment, so the whole
 * site collapsed into a single indexable page. Old hash links still work: the
 * fragment is translated to a path on first load (see normaliseLegacyHash) so
 * nothing anyone has shared or bookmarked breaks.
 *
 * The server must serve index.html (or the prerendered shell for that path)
 * for any app route — nginx.conf, vercel.json and public/_redirects all do.
 */
const ROUTE_PREFIXES = ["work", "hire", "courses"];

export function pathFromLegacyHash() {
  const h = window.location.hash || "";
  const m = /^#\/?(.*)$/.exec(h);
  if (!m) return null;
  const rest = m[1].replace(/\/+$/, "");
  const first = rest.split("/")[0];
  if (!rest) return "/";
  return ROUTE_PREFIXES.includes(first) ? "/" + rest : null;
}

/** Turn a legacy #/path URL into /path without adding a history entry. */
export function normaliseLegacyHash() {
  const p = pathFromLegacyHash();
  if (p !== null) history.replaceState(null, "", p + window.location.search);
}

export function parseRoute(pathname = window.location.pathname) {
  const parts = pathname.split("/").filter(Boolean);
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

/** Kept for callers that still think in hashes; same result as parseRoute. */
export function parseHash() {
  normaliseLegacyHash();
  return parseRoute();
}

/** The href for an in-app destination: go('work/x') ↔ href('work/x') === '/work/x'. */
export const href = (to) => "/" + String(to || "").replace(/^\/+/, "");

const ROUTE_EVENT = "app:navigate";

export function go(to) {
  const target = href(to);
  if (target !== window.location.pathname) history.pushState(null, "", target);
  window.dispatchEvent(new Event(ROUTE_EVENT));
  window.scrollTo(0, 0);
}

/** Replace the current URL without navigating (used when a flag redirects a route). */
export function replace(to) {
  history.replaceState(null, "", href(to));
}

export function useRoute() {
  const [route, setRoute] = useState(() => {
    normaliseLegacyHash();
    return parseRoute();
  });
  useEffect(() => {
    const on = () => {
      normaliseLegacyHash();
      setRoute(parseRoute());
    };
    window.addEventListener("popstate", on);
    window.addEventListener("hashchange", on);
    window.addEventListener(ROUTE_EVENT, on);
    return () => {
      window.removeEventListener("popstate", on);
      window.removeEventListener("hashchange", on);
      window.removeEventListener(ROUTE_EVENT, on);
    };
  }, []);
  return route;
}

export const SITE = {
  name: "Coding with Abhi",
  owner: "Abhishek Sinha",
  whatsapp: "917479983307",
  email: "catchabhi@live.com",
  url: "https://codingwithabhi.com/",
  linkedin: "https://www.linkedin.com/in/abhisheksinha91",
};
export const waLink = (msg) =>
  "https://wa.me/" + SITE.whatsapp + "?text=" + encodeURIComponent(msg);
