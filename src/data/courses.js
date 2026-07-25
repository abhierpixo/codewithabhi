export const COURSES = {
  "html-css-part-1": {
    icon: "code",
    part: "Part 1",
    tag: "Web · Foundations",
    level: "Beginner",
    title: "Ultimate HTML & CSS: Part 1",
    sub: "Master the fundamentals of web development with HTML5 and CSS3.",
    series: ["html-css-part-1", "html-css-part-2", "html-css-part-3"],
    next: "html-css-part-2",
    learn: ["Understand the fundamentals of web development", "Structure web pages with clean, semantic HTML", "Style layout, colours & typography with CSS", "Prevent and fix cross-browser issues", "Inspect & debug pages using Chrome DevTools", "Learn industry best practices for clean code", "Validate your HTML5 / CSS3 code", "Build a solid foundation you can grow on"],
    who: ["Anyone starting a career in front-end development", "Freshers & students who want job-ready basics", "Career switchers from a non-IT background", "Anyone who wants to build their own websites"],
    prereqTitle: "No prior knowledge needed",
    prereq: "No prior knowledge of HTML, CSS or programming is necessary. We start from the very beginning and build a solid foundation, so you can progress at your own pace. If you're brand new to web development, this course is designed exactly for you.",
    sections: [{
      t: "Getting Started",
      lessons: [["Welcome & what you'll build", "2m", "p"], ["Who this course is for", "2m", "p"], ["What you need (tools & setup)", "3m", "p"], ["Getting help along the way", "2m"], ["Setting up VS Code", "3m"]]
    }, {
      t: "How the Web Works",
      lessons: [["The internet vs the web", "4m", "p"], ["What happens when you open a website", "5m"], ["Front-end vs back-end", "4m"], ["Inspecting requests in DevTools", "6m"], ["How websites get built & shipped", "5m"]]
    }, {
      t: "HTML Basics",
      lessons: [["The structure of an HTML document", "5m", "p"], ["The head section & metadata", "6m"], ["Text: headings, paragraphs & formatting", "8m"], ["Entities & special characters", "4m"], ["Hyperlinks & navigation", "9m"], ["Images & the picture element", "6m"], ["Video & audio", "5m"], ["Lists: ordered, unordered & nested", "7m"], ["Tables done properly", "9m"], ["Containers: div vs span", "5m"], ["Semantic HTML — and why it matters", "8m"], ["Structuring a full web page", "8m"]]
    }, {
      t: "CSS Basics",
      lessons: [["How to add CSS to a page", "5m", "p"], ["Normalizing CSS across browsers", "5m"], ["Selectors you'll use daily", "9m"], ["Relational & attribute selectors", "7m"], ["Pseudo-classes (:hover, :focus)", "8m"], ["Pseudo-elements", "6m"], ["Specificity & the cascade", "9m"], ["Inheritance", "5m"], ["Colours: hex, rgb, hsl", "8m"], ["Gradients", "6m"], ["Borders, shadows & radius", "7m"], ["Summary & exercise", "5m"]]
    }]
  },
  "html-css-part-2": {
    icon: "code",
    part: "Part 2",
    tag: "Web · Advanced",
    level: "Intermediate",
    title: "Ultimate HTML & CSS: Part 2",
    sub: "Master advanced HTML5 and CSS3 concepts behind fast, beautiful and mobile-friendly websites.",
    series: ["html-css-part-1", "html-css-part-2", "html-css-part-3"],
    next: "html-css-part-3",
    prevCourse: "html-css-part-1",
    learn: ["Build layouts and position elements using Flexbox & Grid", "Use media queries for responsive designs", "Work with CSS units (px, rem, em, vw)", "Optimize images for performance", "Use SVG for crisp, scalable graphics", "Add polish with transforms, transitions & animations", "Build forms with built-in HTML5 validation", "Create beautiful typography", "Learn best practices for modern websites", "Write clean, maintainable, object-oriented CSS"],
    who: ["Anyone familiar with HTML/CSS basics who wants advanced topics", "Anyone wanting to build fast, beautiful, responsive websites", "Anyone preparing for a job interview"],
    prereqTitle: "What you should know first",
    prereq: "This is the second part of the HTML & CSS series. Ideally you should have completed Part 1 or be comfortable with basic HTML elements, CSS selectors and properties, and using Chrome DevTools.",
    sections: [{
      t: "Getting Started",
      lessons: [["Introduction", "3m", "p"], ["Prerequisites", "2m", "p"], ["How to take this course", "2m", "p"], ["Getting help", "1m"], ["Learning path", "2m"]]
    }, {
      t: "Layout",
      lessons: [["Introduction", "2m", "p"], ["The box model", "8m", "p"], ["Sizing elements", "8m"], ["Overflow", "3m"], ["Measurement units", "10m"], ["Positioning", "9m"], ["Floating elements", "9m"], ["Flexbox", "14m"], ["Grid", "13m"], ["Hiding elements", "1m"], ["Media queries", "10m"], ["Summary & exercises", "6m"]]
    }, {
      t: "Typography",
      lessons: [["Introduction", "1m"], ["Styling fonts", "7m"], ["Embedding web fonts", "7m"], ["Flash of unstyled text", "6m"], ["Font services", "8m"], ["System font stack", "2m"], ["Sizing fonts", "7m"], ["Vertical spacing", "4m"], ["Horizontal spacing", "3m"], ["Formatting text", "6m"], ["Summary", "4m"]]
    }, {
      t: "Images",
      lessons: [["Introduction", "1m"], ["Image types & formats", "3m"], ["Content images", "3m"], ["Background images", "7m"], ["CSS sprites", "7m"], ["Data URLs", "3m"], ["Clipping", "3m"], ["Filters", "2m"], ["High-density screens", "8m"], ["Resolution switching", "7m"], ["Modern image formats", "4m"], ["Art direction", "2m"], ["SVG", "2m"], ["Font icons", "5m"], ["Summary", "5m"]]
    }, {
      t: "Forms",
      lessons: [["Introduction", "1m", "p"], ["Creating a basic form", "3m"], ["Styling forms", "8m"], ["CSS frameworks", "8m"], ["Text fields", "5m"], ["Data lists", "4m"], ["Drop-down lists", "3m"], ["Check boxes", "2m"], ["Radio buttons", "1m"], ["Sliders", "1m"], ["File inputs", "1m"], ["Grouping related fields", "1m"], ["Hidden fields", "1m"], ["Data validation", "3m"], ["Submitting the form", "5m"], ["Summary", "5m"]]
    }, {
      t: "Transforms, Transitions & Animations",
      lessons: [["Introduction", "1m", "p"], ["Transformations", "4m"], ["3D transformations", "5m"], ["Transitions", "3m"], ["Animations", "5m"], ["Reusable animations", "2m"], ["Summary", "4m"]]
    }, {
      t: "Writing Clean, Maintainable CSS",
      lessons: [["Introduction", "1m"], ["CSS best practices", "9m"], ["Variables", "2m"], ["Object-oriented CSS", "5m"], ["BEM", "4m"], ["What's next", "2m"]]
    }]
  },
  "html-css-part-3": {
    icon: "code",
    part: "Part 3",
    tag: "Web · Project",
    level: "Intermediate",
    title: "Ultimate HTML & CSS: Part 3",
    sub: "Learn to convert design mockups into real, responsive websites — and deploy them to the cloud.",
    series: ["html-css-part-1", "html-css-part-2", "html-css-part-3"],
    prevCourse: "html-css-part-2",
    learn: ["Convert design mockups into real websites", "Build responsive sites with a mobile-first approach", "Create layouts with Flexbox & Grid systems", "Add smooth, beautiful animations", "Optimize images for performance", "Troubleshoot layout issues like a pro", "Write valid, semantic, SEO-friendly HTML", "Host your code on GitHub", "Deploy your websites to the cloud", "Set up continuous deployment"],
    who: ["Anyone looking for a career in front-end development", "Anyone wanting to work as a freelancer", "Anyone preparing for a job interview"],
    prereqTitle: "What you should know first",
    prereq: "This is the third part of the HTML & CSS series. Ideally you should have completed Parts 1 and 2, or have a solid grasp of semantic HTML, CSS selectors, the box model, positioning, Flexbox & Grid, media queries, responsive images, transforms and transitions.",
    sections: [{
      t: "Project: From Mockup to Live Website",
      lessons: [["Introduction", "2m", "p"], ["Prerequisites", "1m", "p"], ["How to take this course", "2m", "p"], ["Tools you need", "2m", "p"], ["Setting up the project", "3m", "p"], ["Essential design-to-code skills", "5m"], ["Identifying the components", "6m"], ["Colour palette", "3m"], ["Typography", "10m"], ["Links", "6m"], ["Lists", "7m"], ["Badges", "7m"], ["Icons", "9m"], ["Buttons", "11m"], ["Inputs", "3m"], ["Input groups", "6m"], ["Cards", "5m"], ["Plans", "10m"], ["Media objects", "4m"], ["Quotes", "9m"], ["Grids", "4m"], ["Testimonials", "11m"], ["Callouts", "10m"], ["Collapsibles", "13m"], ["Navigation bars", "17m"], ["Hero section", "10m"], ["Optimizing images", "9m"], ["Feature blocks", "11m"], ["Showcase block", "18m"], ["Footer", "14m"], ["Putting it all together", "3m"], ["Troubleshooting layout issues", "9m"], ["Animations", "3m"], ["Search engine optimization", "2m"], ["HTML & CSS validation", "3m"], ["Building for production", "12m"], ["Pushing to GitHub", "4m"], ["Deployment", "4m"], ["Measuring performance", "8m"], ["Course wrap-up", "1m"]]
    }]
  }
}

export const CATALOG = [{
  slug: "html-css-part-1",
  icon: "code",
  name: "HTML & CSS — Part 1",
  tag: "Web · Foundations",
  desc: "The real foundations of the web. Build and structure pages with semantic HTML and modern CSS.",
  level: "Beginner"
}, {
  slug: "html-css-part-2",
  icon: "code",
  name: "HTML & CSS — Part 2",
  tag: "Web · Advanced",
  desc: "Flexbox, Grid, responsive design, images, forms and animations — everything advanced.",
  level: "Intermediate"
}, {
  slug: "html-css-part-3",
  icon: "code",
  name: "HTML & CSS — Part 3",
  tag: "Web · Project",
  desc: "Turn a real design mockup into a deployed, production-ready website.",
  level: "Intermediate"
}, {
  slug: "react",
  icon: "react",
  name: "React Development",
  tag: "Frontend",
  desc: "Components, hooks, routing and real API integration — the most in-demand frontend skill.",
  level: "Intermediate",
  soon: true
}, {
  slug: "angular",
  icon: "angular",
  name: "Angular Development",
  tag: "Frontend",
  desc: "Enterprise Angular the way it's used at scale — components, services, RxJS and forms.",
  level: "Intermediate",
  soon: true
}, {
  slug: "next",
  icon: "next",
  name: "Next.js Fullstack",
  tag: "Fullstack",
  desc: "SSR, API routes, auth and databases — frontend and backend in one framework.",
  level: "Advanced",
  soon: true
}, {
  slug: "mobile",
  icon: "mobile",
  name: "React Native (Mobile)",
  tag: "Mobile",
  desc: "Build real cross-platform mobile apps and run them on your own phone.",
  level: "Intermediate",
  soon: true
}, {
  slug: "node",
  icon: "node",
  name: "Backend with Node.js",
  tag: "Backend",
  desc: "Express, REST APIs, authentication and databases — build the server side of real products.",
  level: "Intermediate",
  soon: true
}, {
  slug: "python",
  icon: "python",
  name: "Python for Beginners",
  tag: "Language",
  desc: "Zero to confident — fundamentals, problem solving and practical automation.",
  level: "Beginner",
  soon: true
}, {
  slug: "go",
  icon: "go",
  name: "Golang for Beginners",
  tag: "Language",
  desc: "Go fundamentals, tooling and concurrency — the language behind modern cloud infra.",
  level: "Beginner",
  soon: true
}]

export const CARD_SLUG = {web:"html-css-part-1",react:"react",angular:"angular",next:"next",mobile:"mobile",node:"node",python:"python",go:"go"};
