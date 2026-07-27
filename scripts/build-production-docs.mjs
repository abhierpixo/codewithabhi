/**
 * Regenerates production/tracker.csv and production/beat-sheets.md from the
 * curriculum. Run after changing any lesson: `npm run production`.
 */
import { writeFileSync, mkdirSync } from 'node:fs'
import { COURSES } from '../src/data/courses.js'
import { toMinutes } from '../src/utils.js'

const esc = (v) => '"' + String(v).replace(/"/g, '""') + '"'
const rows = [['Section', 'Module', 'No', 'Title', 'Target', 'Mins', 'Beats', 'MinPerBeat', 'Preview', 'Beat sheet', 'Scripted', 'Code ready', 'Recorded', 'Edited', 'Published']]
const briefs = []
let n = 0, totalMins = 0

for (const c of Object.values(COURSES)) {
  let i = 0
  briefs.push(`\n\n## ${c.part} — ${c.title}\n`)
  for (const s of c.sections) {
    briefs.push(`\n### ${s.t}\n`)
    for (const l of s.lessons) {
      n++; i++
      const m = toMinutes(l.d); totalMins += m
      const beats = l.topics.length
      const per = beats ? (m / beats).toFixed(1) : ''
      rows.push([c.part, s.t, i, l.t, l.d, m, beats, per, l.p ? 'FREE' : '', l.topics.join(' | '), '', '', '', '', ''])
      briefs.push(`**${i}. ${l.t}** — ${l.d}${l.p ? ' · FREE PREVIEW' : ''}`)
      if (beats) {
        briefs.push('')
        l.topics.forEach((t, k) => briefs.push(`  ${k + 1}. ${t}  _(${per}m)_`))
      } else {
        briefs.push('  _continuous build — no beat split_')
      }
      briefs.push('')
    }
  }
}

mkdirSync('production', { recursive: true })
writeFileSync('production/tracker.csv', rows.map((r) => r.map(esc).join(',')).join('\n') + '\n')
writeFileSync('production/beat-sheets.md',
  '# Recording beat sheets\n\nGenerated from src/data/courses.js — regenerate with `npm run production`.\n\n'
  + 'Each numbered beat is one continuous take. Record beats, not whole videos.\n'
  + briefs.join('\n'))

console.log(`${n} videos · ${Math.floor(totalMins / 60)}h ${totalMins % 60}m → production/tracker.csv, production/beat-sheets.md`)
