export const dur = (mins) =>
  mins >= 60 ? (Math.floor(mins / 60) + 'h ' + (mins % 60 ? mins % 60 + 'm' : '')).trim() : mins + 'm'

export function totals(sections) {
  let L = 0, P = 0, M = 0
  sections.forEach((s) =>
    s.lessons.forEach((l) => {
      L++
      if (l[2]) P++
      const m = l[1].match(/(\d+)m/), h = l[1].match(/(\d+)h/)
      if (m) M += +m[1]
      if (h) M += +h[1] * 60
    })
  )
  return { lessons: L, previews: P, hours: (M / 60).toFixed(1), sections: sections.length }
}
