export const dur = (mins) =>
  mins >= 60 ? (Math.floor(mins / 60) + 'h ' + (mins % 60 ? mins % 60 + 'm' : '')).trim() : mins + 'm'

/** Minutes in a duration string like "15m" or "1h 20m". */
export function toMinutes(d) {
  const h = /(\d+)\s*h/.exec(d)
  const m = /(\d+)\s*m/.exec(d)
  return (h ? +h[1] * 60 : 0) + (m ? +m[1] : 0)
}

const isProjectSection = (s) => /^Guided Project/i.test(s.t)

/**
 * Totals are derived from the lesson durations, never from a hand-written
 * summary — so the figures on the page are always the real ones. Concept
 * lessons and guided-project time are reported separately, because they are
 * different things to a buyer and shouldn't be blended into one number.
 */
export function totals(sections) {
  let lessons = 0, previews = 0, minutes = 0
  let coreVideos = 0, coreMinutes = 0
  let projectVideos = 0, projectMinutes = 0, projects = 0

  sections.forEach((s) => {
    const project = isProjectSection(s)
    if (project) projects++
    s.lessons.forEach((l) => {
      lessons++
      if (l.p) previews++
      const m = toMinutes(l.d)
      minutes += m
      if (project) { projectVideos++; projectMinutes += m }
      else { coreVideos++; coreMinutes += m }
    })
  })

  return {
    lessons, previews, minutes, sections: sections.length,
    modules: sections.length - projects,
    projects,
    coreVideos, coreMinutes,
    projectVideos, projectMinutes,
    // exact h/m strings — "8h 24m" rather than a rounded "8.4 hours"
    hm: dur(minutes),
    coreHm: dur(coreMinutes),
    projectHm: dur(projectMinutes),
    hours: (minutes / 60).toFixed(1),
  }
}

/** Combined figures across a set of courses, for the catalogue. */
export function seriesTotals(courses) {
  return courses.reduce((acc, c) => {
    const t = totals(c.sections)
    acc.minutes += t.minutes
    acc.coreMinutes += t.coreMinutes
    acc.projectMinutes += t.projectMinutes
    acc.lessons += t.lessons
    acc.projects += t.projects
    acc.hm = dur(acc.minutes)
    acc.coreHm = dur(acc.coreMinutes)
    acc.projectHm = dur(acc.projectMinutes)
    return acc
  }, { minutes: 0, coreMinutes: 0, projectMinutes: 0, lessons: 0, projects: 0, hm: '', coreHm: '', projectHm: '' })
}
