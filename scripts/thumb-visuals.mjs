/**
 * Per-project infographics for the thumbnails.
 *
 * Drawn in plain HTML/CSS rather than sourced as stock images: nothing to
 * download, no licence to track, they inherit the site's palette, and each one
 * shows what the product actually does instead of a generic photo of a laptop.
 *
 * Each visual is designed to sit in roughly a 460x430 box.
 */

const rows = (n, fn) => Array.from({ length: n }, (_, i) => fn(i)).join('')

export const VISUALS = {
  // live order book: asks above, spread, bids below, with a candle strip
  'crypto-trading-platform': (a) => `
    <div class="v-panel">
      <div class="v-head">ORDER BOOK · BTC/USDT</div>
      ${rows(4, (i) => `
        <div class="ob-row">
          <span class="ob-px sell">${(42480 - i * 37).toLocaleString()}</span>
          <span class="ob-bar"><i style="width:${86 - i * 17}%;background:#EF444455"></i></span>
        </div>`)}
      <div class="ob-spread"><b style="color:${a}">42,318.40</b><span>spread 0.04%</span></div>
      ${rows(4, (i) => `
        <div class="ob-row">
          <span class="ob-px buy">${(42280 - i * 41).toLocaleString()}</span>
          <span class="ob-bar"><i style="width:${78 - i * 15}%;background:${a}44"></i></span>
        </div>`)}
      <div class="candles">
        ${rows(14, (i) => {
          const h = [38, 52, 44, 66, 58, 74, 62, 82, 70, 88, 76, 94, 84, 100][i]
          const up = [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1][i]
          return `<i style="height:${h}%;background:${up ? a : '#EF4444'};opacity:${up ? 0.9 : 0.55}"></i>`
        })}
      </div>
    </div>`,

  // ranked shortlist with match scores
  'resume-ats': (a) => `
    <div class="v-panel">
      <div class="v-head">RANKED SHORTLIST · 248 CVs</div>
      ${rows(5, (i) => {
        const score = [94, 88, 81, 73, 61][i]
        return `
        <div class="cand">
          <span class="cand-av" style="background:${i < 2 ? a + '33' : '#22304755'};border-color:${i < 2 ? a + '77' : '#223047'}"></span>
          <span class="cand-bars">
            <i style="width:${72 - i * 6}%"></i>
            <i class="thin" style="width:${46 - i * 5}%"></i>
          </span>
          <span class="cand-score" style="color:${i < 2 ? a : '#7D8CA8'}">${score}%</span>
        </div>`
      })}
      <div class="v-foot"><span class="dot" style="background:${a}"></span>scored against the job post</div>
    </div>`,

  // a bill being read, then routed through approvals
  'expense-system': (a) => `
    <div class="v-split">
      <div class="receipt">
        <div class="r-top"></div>
        ${rows(5, (i) => `<div class="r-line"><i style="width:${[70, 52, 64, 44, 58][i]}%"></i><b style="width:${[22, 18, 20, 16, 18][i]}%"></b></div>`)}
        <div class="r-total"><i></i><b style="background:${a}"></b></div>
        <div class="r-zig"></div>
      </div>
      <div class="flow">
        <div class="f-step"><span class="f-dot" style="background:${a}"></span>Extracted</div>
        <div class="f-line"></div>
        <div class="f-step"><span class="f-dot" style="background:${a}"></span>Manager</div>
        <div class="f-line"></div>
        <div class="f-step"><span class="f-dot" style="background:${a}"></span>Finance</div>
        <div class="f-line"></div>
        <div class="f-step done" style="border-color:${a}66;color:${a}">Approved</div>
      </div>
    </div>`,

  // week view with booked slots
  'saloon-booking-app': (a) => `
    <div class="v-panel">
      <div class="v-head">THIS WEEK · 4 STYLISTS</div>
      <div class="cal">
        ${['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d) => `<span class="cal-d">${d}</span>`).join('')}
        ${rows(28, (i) => {
          const booked = [2, 4, 5, 8, 10, 11, 13, 16, 17, 19, 22, 23, 25, 26].includes(i)
          const soon = [3, 12, 20].includes(i)
          return `<i class="cal-c" style="background:${booked ? a + 'cc' : soon ? a + '3d' : '#16233d'}"></i>`
        })}
      </div>
      <div class="v-foot"><span class="dot" style="background:${a}"></span>14 bookings · 0 clashes</div>
    </div>`,

  // rank improving across tracked locations
  'localseo-pro': (a) => `
    <div class="v-panel">
      <div class="v-head">AVG. RANK · 312 LOCATIONS</div>
      <div class="chart">
        <svg viewBox="0 0 300 120" preserveAspectRatio="none">
          <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="${a}" stop-opacity=".38"/>
            <stop offset="100%" stop-color="${a}" stop-opacity="0"/>
          </linearGradient></defs>
          <path d="M0,104 L50,92 L100,96 L150,68 L200,54 L250,32 L300,18 L300,120 L0,120 Z" fill="url(#g)"/>
          <path d="M0,104 L50,92 L100,96 L150,68 L200,54 L250,32 L300,18"
                fill="none" stroke="${a}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="pins">
        ${['Bengaluru', 'Pune', 'Mumbai'].map((c) => `<span class="pin"><i style="background:${a}"></i>${c}</span>`).join('')}
      </div>
    </div>`,

  // phone with an AI caption and posting analytics
  'qontentt-ai': (a) => `
    <div class="phone">
      <div class="p-notch"></div>
      <div class="p-body">
        <div class="p-chip" style="color:${a};border-color:${a}66">AI caption</div>
        ${rows(3, (i) => `<div class="p-line" style="width:${[92, 78, 54][i]}%"></div>`)}
        <div class="p-bars">
          ${rows(7, (i) => `<i style="height:${[34, 52, 44, 70, 58, 86, 96][i]}%;background:${i > 4 ? a : a + '55'}"></i>`)}
        </div>
        <div class="p-best" style="border-color:${a}44"><span style="background:${a}"></span>Best time · 7:30 PM</div>
      </div>
    </div>`,
}

/** Styles for every visual above. */
export const VISUAL_CSS = `
  .v-panel{width:100%;background:rgba(11,17,32,.72);border:1px solid #223047;
           border-radius:18px;padding:22px 22px 20px;backdrop-filter:blur(2px)}
  .v-head{font-family:'JetBrains Mono',monospace;font-size:13px;letter-spacing:.14em;
          color:#64748B;margin-bottom:14px}
  .v-foot{display:flex;align-items:center;gap:9px;margin-top:16px;
          font-family:'JetBrains Mono',monospace;font-size:13px;color:#7D8CA8}
  .dot{width:7px;height:7px;border-radius:50%;display:inline-block}

  /* order book */
  .ob-row{display:flex;align-items:center;gap:12px;margin-bottom:6px}
  .ob-px{font-family:'JetBrains Mono',monospace;font-size:14px;width:74px}
  .ob-px.sell{color:#F87171}.ob-px.buy{color:#6EE7B7}
  .ob-bar{flex:1;height:9px;background:#111c33;border-radius:3px;overflow:hidden}
  .ob-bar i{display:block;height:100%}
  .ob-spread{display:flex;align-items:baseline;gap:12px;margin:10px 0;
             font-family:'JetBrains Mono',monospace}
  .ob-spread b{font-size:22px}.ob-spread span{font-size:12px;color:#64748B}
  .candles{display:flex;align-items:flex-end;gap:5px;height:64px;margin-top:16px}
  .candles i{flex:1;border-radius:2px}

  /* ranked candidates */
  .cand{display:flex;align-items:center;gap:12px;margin-bottom:12px}
  .cand-av{width:30px;height:30px;border-radius:9px;border:1px solid;flex-shrink:0}
  .cand-bars{flex:1;display:flex;flex-direction:column;gap:6px}
  .cand-bars i{display:block;height:8px;background:#2b3a55;border-radius:3px}
  .cand-bars i.thin{height:6px;background:#1e2a41}
  .cand-score{font-family:'JetBrains Mono',monospace;font-size:15px;width:46px;text-align:right}

  /* receipt + approval flow */
  .v-split{display:flex;gap:20px;align-items:stretch;width:100%}
  .receipt{width:200px;background:#0e1729;border:1px solid #223047;border-radius:14px;
           padding:18px 16px 0;position:relative}
  .r-top{height:8px;width:52%;background:#2b3a55;border-radius:3px;margin-bottom:16px}
  .r-line{display:flex;justify-content:space-between;gap:10px;margin-bottom:11px}
  .r-line i,.r-line b{display:block;height:7px;background:#25334c;border-radius:3px}
  .r-total{display:flex;justify-content:space-between;gap:10px;
           margin-top:16px;padding-top:14px;border-top:1px dashed #2b3a55}
  .r-total i{display:block;height:9px;width:38%;background:#3a4c6d;border-radius:3px}
  .r-total b{display:block;height:9px;width:30%;border-radius:3px}
  .r-zig{height:14px;margin:14px -16px 0;
         background:repeating-linear-gradient(135deg,#0e1729 0 8px,transparent 8px 16px)}
  .flow{flex:1;display:flex;flex-direction:column;justify-content:center;gap:0}
  .f-step{font-family:'JetBrains Mono',monospace;font-size:14px;color:#AFC0D8;
          display:flex;align-items:center;gap:10px}
  .f-dot{width:9px;height:9px;border-radius:50%;display:inline-block}
  .f-line{width:1px;height:20px;background:#2b3a55;margin-left:4px}
  .f-step.done{border:1px solid;border-radius:999px;padding:8px 16px;
               margin-top:14px;align-self:flex-start}

  /* calendar */
  .cal{display:grid;grid-template-columns:repeat(7,1fr);gap:7px}
  .cal-d{font-family:'JetBrains Mono',monospace;font-size:12px;color:#64748B;text-align:center}
  .cal-c{display:block;height:26px;border-radius:6px}

  /* rank chart */
  .chart{height:120px}
  .chart svg{width:100%;height:100%;display:block}
  .pins{display:flex;gap:9px;margin-top:16px;flex-wrap:wrap}
  .pin{display:flex;align-items:center;gap:7px;font-family:'JetBrains Mono',monospace;
       font-size:13px;color:#AFC0D8;background:#111c33;border:1px solid #223047;
       border-radius:999px;padding:6px 13px}
  .pin i{width:6px;height:6px;border-radius:50%;display:inline-block}

  /* phone */
  .phone{width:238px;height:400px;margin-left:auto;background:#0c1425;
         border:2px solid #26344e;border-radius:34px;padding:14px;position:relative}
  .p-notch{width:74px;height:6px;background:#26344e;border-radius:99px;margin:2px auto 16px}
  .p-chip{display:inline-block;font-family:'JetBrains Mono',monospace;font-size:12px;
          border:1px solid;border-radius:999px;padding:5px 12px;margin-bottom:16px}
  .p-line{height:9px;background:#22304a;border-radius:4px;margin-bottom:9px}
  .p-bars{display:flex;align-items:flex-end;gap:6px;height:92px;margin:22px 0 18px}
  .p-bars i{flex:1;border-radius:3px}
  .p-best{display:flex;align-items:center;gap:9px;font-family:'JetBrains Mono',monospace;
          font-size:12px;color:#AFC0D8;border:1px solid;border-radius:10px;padding:10px 12px}
  .p-best span{width:7px;height:7px;border-radius:50%;display:inline-block}
`
