/**
 * Renders a 1200x630 thumbnail for every project into public/thumbs/.
 *
 * They're built as HTML in the site's own tokens and screenshotted with
 * headless Chrome — no image tooling, no licensing questions, and they stay in
 * sync with the brand because they use the same colours and fonts.
 *
 *   npm run thumbs
 *
 * Override the browser with CHROME=/path/to/chrome if it isn't in the default
 * macOS location.
 */
import { writeFileSync, mkdirSync, rmSync, existsSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { PROJECTS } from '../src/data/projects.js'
import { VISUALS, VISUAL_CSS } from './thumb-visuals.mjs'

const CHROME = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const TMP = '.thumb-build'
const OUT = 'public/thumbs'
const W = 1200
const H = 630

const ACCENT = { green: '#34D399', blue: '#2563EB', amber: '#F59E0B' }

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const page = (project, vizOnly = false) => {
  const accent = ACCENT[project.accent] || ACCENT.green
  const draw = VISUALS[project.slug]
  const p = { ...project, viz: draw ? draw(accent) : '', vizOnly }
  return `<!doctype html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,800&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:${W}px;height:${H}px;overflow:hidden;background:#0A0F1E;
       font-family:'Bricolage Grotesque',sans-serif;color:#F1F5F9;position:relative}
  /* brand glow, tinted per project */
  .glow{position:absolute;inset:0;
        background:radial-gradient(ellipse 62% 58% at 78% 12%, ${accent}26, transparent 68%),
                   radial-gradient(ellipse 52% 46% at 8% 96%, #2563EB1f, transparent 70%)}
  /* the same engineering grid the hero uses */
  .grid{position:absolute;inset:0;
        background-image:linear-gradient(rgba(148,163,184,.06) 1px,transparent 1px),
                         linear-gradient(90deg,rgba(148,163,184,.06) 1px,transparent 1px);
        background-size:60px 60px;
        -webkit-mask-image:radial-gradient(ellipse 52% 50% at 50% 45%,transparent 28%,#000 100%)}
  .edge{position:absolute;left:0;top:0;bottom:0;width:10px;background:${accent}}
  .wrap{position:relative;height:100%;display:flex;gap:44px;
        padding:${p.vizOnly ? '58px 92px 58px 104px' : '56px 60px 50px 82px'}}
  .col{display:flex;flex-direction:column;min-width:0}
  .col.copy{flex:1}
  .col.viz{width:${p.vizOnly ? '100%' : p.viz ? '430px' : '0'};
           justify-content:center;align-items:stretch;flex-shrink:0}
  .logo{font-family:'JetBrains Mono',monospace;font-size:19px;font-weight:600;color:#8FA0BC;letter-spacing:-.01em}
  .logo b{color:${accent};font-weight:600}
  .tag{font-family:'JetBrains Mono',monospace;font-size:19px;letter-spacing:.16em;
       text-transform:uppercase;color:${accent};margin-top:auto}
  h1{font-size:${p.name.length > 40 ? 52 : p.name.length > 22 ? 58 : 68}px;font-weight:800;
     line-height:1.04;letter-spacing:-.035em;margin:18px 0 0;max-width:13ch}
  .tech{display:flex;flex-wrap:wrap;gap:9px;margin-top:26px}
  .tech i{font-style:normal;font-family:'JetBrains Mono',monospace;font-size:16px;
          color:#AFC0D8;background:rgba(17,28,51,.85);border:1px solid #223047;
          border-radius:999px;padding:8px 16px}
${VISUAL_CSS}
  .foot{display:flex;align-items:center;justify-content:space-between;
        margin-top:34px;padding-top:26px;border-top:1px solid #223047;
        font-family:'JetBrains Mono',monospace;font-size:18px;color:#64748B}
  .shipped{color:${accent};border:1px solid ${accent}59;border-radius:999px;padding:7px 18px;font-size:16px}

  /* viz-only mode: the infographic is the whole frame, so scale its internals
     up rather than leaving it small in the middle */
  .vizonly .v-panel{padding:34px 36px 30px}
  .vizonly .v-head{font-size:16px;margin-bottom:20px}
  .vizonly .v-foot{font-size:16px;margin-top:22px}
  .vizonly .chart{height:250px}
  .vizonly .pins{margin-top:22px}
  .vizonly .pin{font-size:16px;padding:9px 18px}
  .vizonly .cal{gap:10px}
  .vizonly .cal-c{height:48px;border-radius:9px}
  .vizonly .cal-d{font-size:15px}
  .vizonly .candles{height:118px;gap:8px;margin-top:24px}
  .vizonly .ob-row{margin-bottom:10px}
  .vizonly .ob-bar{height:13px}
  .vizonly .ob-px{font-size:17px;width:92px}
  .vizonly .ob-spread b{font-size:30px}
  .vizonly .ob-spread span{font-size:15px}
  .vizonly .cand{margin-bottom:18px}
  .vizonly .cand-av{width:42px;height:42px;border-radius:12px}
  .vizonly .cand-bars i{height:11px}
  .vizonly .cand-bars i.thin{height:8px}
  .vizonly .cand-score{font-size:19px;width:58px}
  .vizonly .receipt{width:300px;padding:26px 24px 0}
  .vizonly .r-line{margin-bottom:16px}
  .vizonly .r-line i,.vizonly .r-line b{height:10px}
  .vizonly .f-step{font-size:18px}
  .vizonly .f-line{height:30px}
  .vizonly .phone{width:300px;height:500px;margin:0 auto;border-radius:42px;padding:18px}
  .vizonly .p-bars{height:130px}
  .vizonly .p-chip,.vizonly .p-best{font-size:15px}
</style></head><body class="${p.vizOnly ? 'vizonly' : ''}">
  <div class="glow"></div><div class="grid"></div><div class="edge"></div>
  <div class="wrap">
    ${p.vizOnly ? '' : `<div class="col copy">
      <div class="logo">abhishek<b>@</b>trainer:~$</div>
      <div class="tag">${esc(p.tag)}</div>
      <h1>${esc(p.name)}</h1>
      <div class="tech">${p.tech.map((t) => `<i>${esc(t)}</i>`).join('')}</div>
      <div class="foot">
        <span>codingwithabhi.com</span>
        ${p.shipped ? '<span class="shipped">Live on the App Store</span>' : '<span></span>'}
      </div>
    </div>`}
    ${p.viz ? `<div class="col viz">${p.viz}</div>` : ''}
  </div>
</body></html>`
}

if (!existsSync(CHROME)) {
  console.error(`Chrome not found at:\n  ${CHROME}\nSet CHROME=/path/to/chrome and retry.`)
  process.exit(1)
}

mkdirSync(TMP, { recursive: true })
mkdirSync(OUT, { recursive: true })

/** The site-wide social card — what appears when codingwithabhi.com is shared. */
const SITE_CARD = {
  slug: '../og-image',
  name: "Learn software from someone who's built it",
  tag: '14+ yrs engineering enterprise products',
  tech: ['HTML & CSS', 'React', 'Angular', 'Next.js', 'React Native', 'Node.js'],
  accent: 'green',
}

const shoot = (project, name, vizOnly) => {
  const html = `${TMP}/${name.replace(/[^\w-]/g, '_')}.html`
  writeFileSync(html, page(project, vizOnly))
  execFileSync(CHROME, [
    '--headless', '--disable-gpu', '--hide-scrollbars',
    `--window-size=${W},${H}`,
    '--virtual-time-budget=6000',           // let the webfonts land
    `--screenshot=${OUT}/${name}.png`,
    `file://${process.cwd()}/${html}`,
  ], { stdio: 'ignore' })
  console.log(`  ${OUT}/${name}.png`)
}

for (const p of [...PROJECTS, SITE_CARD]) {
  // full card: cards and link previews, where it stands alone
  shoot(p, p.slug, false)
  // infographic only: the detail page already has the title and stack in text
  if (VISUALS[p.slug]) shoot(p, `${p.slug}-viz`, true)
}

rmSync(TMP, { recursive: true, force: true })
console.log(`\n${PROJECTS.length} project thumbnails + 1 site card at ${W}x${H}`)
