/**
 * HTML & CSS Mastery: Beginner to Advanced
 *
 * 187 videos, 37h 20m. Three sections, each built as 6–7 modules of concept
 * videos plus a guided project and six assignments.
 *
 * Sizing follows the timing audit: one learning outcome per video, concept
 * videos 6–14m, project videos 10–18m, dedicated debugging and practice videos
 * in every section, and projects given enough time to be taught rather than
 * pasted. Section totals are 10h 20m / 12h 00m / 15h 00m — concepts 21h,
 * guided projects 16h 20m.
 *
 * Lesson shape is built by L(): title, duration, topics covered, free preview.
 * Every figure on the site is derived from these durations by src/utils.js, so
 * the advertised totals can never drift from the curriculum.
 */

/** @param {string} t title @param {string} d duration @param {string[]} topics @param {boolean} p free preview */
const L = (t, d, topics = [], p = false) => ({ t, d, topics, p })

export const COURSES = {
  "html-css-part-1": {
    icon: "code",
    part: "Beginner",
    tag: "Web · Beginner",
    level: "Beginner",
    title: "HTML & CSS Foundations for Absolute Beginners",
    sub: "Create and style a complete webpage using HTML and CSS — starting with nothing installed and ending with a portfolio site you built and published yourself.",
    series: ["html-css-part-1", "html-css-part-2", "html-css-part-3"],
    next: "html-css-part-2",
    project: "Personal Portfolio Website",
    learn: [
      "Understand how browsers, servers and webpages fit together",
      "Write well-formed HTML with correct nesting and attributes",
      "Structure pages with semantic landmarks instead of unnamed divs",
      "Build tables and complete forms with built-in validation",
      "Attach CSS three different ways and know which to use",
      "Work confidently with selectors, colours and typography",
      "Master the box model: content, padding, border and margin",
      "Control sizing with width, height, min/max and overflow",
      "Debug a style that isn't applying, and validate your code",
      "Publish a complete portfolio website to the internet"
    ],
    who: [
      "Absolute beginners who have never written a line of code",
      "Career switchers building a frontend foundation from scratch",
      "Students who want job-ready basics rather than theory",
      "Anyone who wants to build and publish their own website"
    ],
    prereqTitle: "No prior knowledge needed",
    prereq: "None at all. You need a computer, an internet connection and a few focused hours each week. We install Visual Studio Code together in the first module and write the first page from a blank file. Every video covers one idea, demonstrates it, and gives you something to try — and the section ends with a 4h 20m guided project where you build and deploy a complete portfolio website step by step.",
    assignments: [
      "Create a biography page",
      "Build a recipe webpage",
      "Create a school timetable",
      "Create a registration form",
      "Design a profile card",
      "Build a simple blog page"
    ],
    sections: [{
      t: "Module 1 · Getting Started",
      lessons: [
        L("Welcome and Course Introduction", "8m", ["What you'll learn", "How the course is structured", "The three portfolio projects", "How to practise effectively"], true),
        L("How Websites Work", "10m", ["What is a website?", "Browser, server and webpage", "Requests and responses", "How browsers turn code into pixels"], true),
        L("HTML, CSS and JavaScript: Who Does What", "8m", ["Structure, style and behaviour", "What each language owns", "Where this course fits"], true),
        L("VS Code, Live Server and Your Project Folder", "14m", ["Installing VS Code", "Useful extensions", "Installing Live Server", "Folder structure", "File naming conventions"], true)
      ]
    }, {
      t: "Module 2 · HTML Fundamentals",
      lessons: [
        L("Creating Your First HTML Page", "12m", ["DOCTYPE", "The html element", "head and body", "Page title", "Meta tags"], true),
        L("Elements, Tags and Attributes", "10m", ["Opening and closing tags", "Attributes and values", "Quoting", "Case and spelling"]),
        L("Nesting and Void Elements", "8m", ["Parent and child elements", "Correct nesting order", "Void elements", "Common nesting mistakes"]),
        L("Headings, Paragraphs and Text Formatting", "10m", ["Heading levels", "Paragraphs", "strong and em", "Line breaks", "Horizontal rules"]),
        L("Comments and Readable Code", "10m", ["Adding comments", "Indentation", "Consistent formatting", "Formatting mistakes to avoid"])
      ]
    }, {
      t: "Module 3 · Links, Lists and Media",
      lessons: [
        L("Creating Links", "11m", ["The anchor element", "href", "External links", "Opening in a new tab", "The rel attribute"]),
        L("Internal Paths, Email and Phone Links", "11m", ["Relative paths", "Absolute paths", "mailto links", "tel links", "Linking to a section"]),
        L("Ordered, Unordered and Nested Lists", "12m", ["Unordered lists", "Ordered lists", "List items", "Nesting lists", "Description lists"]),
        L("Images, Alt Text and Dimensions", "10m", ["The img element", "src and image paths", "Alternative text", "width and height", "Preventing layout shift"]),
        L("Audio, Video and Embedded Content", "8m", ["The audio element", "The video element", "Controls", "Iframes", "Embedding YouTube"])
      ]
    }, {
      t: "Module 4 · Semantic HTML and Tables",
      lessons: [
        L("Semantic Landmarks", "11m", ["header", "nav", "main", "footer", "Why landmarks matter"]),
        L("Sections, Articles and Asides", "9m", ["section", "article", "aside", "Choosing the right element"]),
        L("Building Your First Table", "11m", ["table", "Rows and cells", "Header cells", "thead and tbody"]),
        L("Captions, Spanning and Table Practice", "11m", ["caption", "colspan", "rowspan", "Data versus layout", "Timetable exercise"])
      ]
    }, {
      t: "Module 5 · HTML Forms",
      lessons: [
        L("Form Structure, Labels and Text Inputs", "12m", ["The form element", "action and method", "Labels", "Text inputs", "Connecting labels to inputs"]),
        L("Radio Buttons, Checkboxes and Select", "12m", ["Radio groups", "Checkboxes", "select and option", "Default values"]),
        L("Textareas, Buttons and Grouping Fields", "11m", ["textarea", "Submit and reset buttons", "fieldset", "legend"]),
        L("Built-in Form Validation", "12m", ["required", "min and max", "minlength and maxlength", "Input types", "Native error messages"]),
        L("Practice: Build a Registration Form", "9m", ["Planning the fields", "Writing the markup", "Adding validation", "Checking accessibility"])
      ]
    }, {
      t: "Module 6 · CSS Fundamentals",
      lessons: [
        L("Introduction to CSS and How to Attach It", "11m", ["What CSS does", "Inline CSS", "Internal CSS", "External CSS", "Which one to use"]),
        L("Syntax, Selectors and Grouping", "11m", ["Anatomy of a rule", "Properties and values", "Element selectors", "Grouping selectors", "CSS comments"]),
        L("Classes, IDs and When to Use Each", "9m", ["The class selector", "The ID selector", "Reusability", "Naming sensibly"]),
        L("Colours: Names, Hex and RGB", "10m", ["Colour keywords", "Hex notation", "rgb and rgba", "Choosing readable colours"]),
        L("Backgrounds and Gradients", "9m", ["background-color", "background-image", "Position and repeat", "Linear gradients"]),
        L("CSS Typography", "12m", ["font-family", "font-size", "font-weight", "line-height", "text-align", "letter-spacing"])
      ]
    }, {
      t: "Module 7 · Box Model, Display and Debugging",
      lessons: [
        L("The Box Model Explained", "12m", ["Content", "Padding", "Border", "Margin", "box-sizing"]),
        L("Margin, Padding, Borders and Radius", "12m", ["Individual sides", "Shorthand properties", "border-radius", "outline", "Centring with margin auto"]),
        L("Width, Height and Content Sizing", "10m", ["width", "height", "Percentage sizing", "Content-driven sizing"]),
        L("Minimum and Maximum Dimensions, Overflow", "12m", ["min-width", "max-width", "min-height", "overflow", "Scrollbars"]),
        L("Display, Visibility and Debugging Your CSS", "12m", ["block and inline", "inline-block", "display none versus visibility", "opacity", "Finding why a style isn't applying"])
      ]
    }, {
      t: "Guided Project · Personal Portfolio Website",
      lessons: [
        L("Reviewing the final design", "10m"),
        L("Project setup: folders, files and reset", "10m"),
        L("Page skeleton and semantic landmarks", "12m"),
        L("Header and navigation markup", "12m"),
        L("Hero and about markup", "12m"),
        L("Skills, projects and education markup", "12m"),
        L("Contact form and footer markup", "12m"),
        L("Global styles, variables and typography", "14m"),
        L("Styling the header", "12m"),
        L("Styling the navigation", "12m"),
        L("Styling the hero", "14m"),
        L("Styling the about and skills sections", "14m"),
        L("Styling the project cards", "14m"),
        L("Styling the education timeline", "14m"),
        L("Styling the contact form and footer", "16m"),
        L("Mobile layout adjustments", "12m"),
        L("Tablet layout adjustments", "10m"),
        L("Building the mobile navigation", "8m"),
        L("Fixing layout and spacing issues", "12m"),
        L("Validating your HTML and CSS", "8m"),
        L("Publishing to GitHub Pages", "12m"),
        L("Explaining your project in an interview", "8m")
      ]
    }]
  },

  "html-css-part-2": {
    icon: "code",
    part: "Intermediate",
    tag: "Web · Intermediate",
    level: "Intermediate",
    title: "Responsive Web Design With Flexbox and CSS Grid",
    sub: "Build professional, responsive websites that hold up on mobile, tablet and desktop — then debug and deploy them properly.",
    series: ["html-css-part-1", "html-css-part-2", "html-css-part-3"],
    next: "html-css-part-3",
    prevCourse: "html-css-part-1",
    project: "Responsive Restaurant Website",
    learn: [
      "Build layouts that adapt to mobile, tablet and desktop",
      "Choose the right CSS unit for every situation",
      "Write media queries and work genuinely mobile-first",
      "Master Flexbox: direction, wrapping, alignment, grow and shrink",
      "Master CSS Grid: fr, minmax, auto-fit, placement and template areas",
      "Build a reusable component set driven by CSS variables",
      "Style forms professionally, including focus and error states",
      "Use calc(), min(), max() and clamp() with confidence",
      "Diagnose overflow, alignment and specificity problems in DevTools",
      "Publish a live website with Git, GitHub and GitHub Pages"
    ],
    who: [
      "Anyone comfortable with basic HTML and CSS",
      "Developers whose layouts break on smaller screens",
      "Students who can build a page but not a responsive one",
      "Anyone who wants their work live on the internet"
    ],
    prereqTitle: "What you should know first",
    prereq: "You should be comfortable with everything in the Beginner section: HTML elements and attributes, semantic structure, forms, CSS selectors, colours, typography and the box model. If you can build and style a static page on your own, you are ready. If not, start with the Beginner section — this one moves faster and assumes those basics are automatic.",
    assignments: [
      "Build a responsive navigation bar",
      "Create a Flexbox pricing section",
      "Build a CSS Grid gallery",
      "Create a responsive form",
      "Recreate a webpage from a screenshot",
      "Publish a website on GitHub"
    ],
    sections: [{
      t: "Module 1 · Responsive Foundations",
      lessons: [
        L("What Is Responsive Design?", "12m", ["Fixed layouts", "Fluid layouts", "Responsive layouts", "Mobile, tablet and desktop"], true),
        L("CSS Units: px, %, em and rem", "13m", ["Pixels", "Percentages", "em", "rem", "Choosing a base size"], true),
        L("Viewport Units and ch", "9m", ["vw and vh", "svh and dvh", "ch", "When each one fits"]),
        L("Media Queries", "14m", ["Media query syntax", "min-width", "max-width", "Choosing breakpoints", "Mobile-first order"]),
        L("Responsive Typography and Spacing", "10m", ["Responsive font sizes", "Fluid spacing", "Maximum content width", "Readable line length"])
      ]
    }, {
      t: "Module 2 · CSS Flexbox",
      lessons: [
        L("Introduction to Flexbox", "13m", ["Flex container", "Flex items", "Main axis", "Cross axis"], true),
        L("Flex Direction and Wrapping", "12m", ["row and column", "Reverse directions", "flex-wrap", "gap"]),
        L("Justify Content and Align Items", "13m", ["justify-content", "align-items", "Centring", "Distributing space"]),
        L("Align Content and Align Self", "10m", ["Multi-line alignment", "align-content", "align-self", "Overriding a single item"]),
        L("Flex Grow, Shrink and Basis", "14m", ["flex-grow", "flex-shrink", "flex-basis", "The flex shorthand"]),
        L("Practice: Navigation and Flexible Sidebars", "10m", ["A responsive nav bar", "A sidebar layout", "Equal-width cards"])
      ]
    }, {
      t: "Module 3 · CSS Grid",
      lessons: [
        L("Introduction to CSS Grid", "13m", ["Grid container", "Rows and columns", "gap", "Implicit tracks"], true),
        L("Fractional Units and Repeat", "12m", ["The fr unit", "repeat()", "Mixing units"]),
        L("minmax, auto-fit and auto-fill", "13m", ["minmax()", "auto-fit", "auto-fill", "Responsive cards without media queries"]),
        L("Grid Placement and Spanning", "12m", ["column-start and column-end", "Row placement", "span", "Featured cards"]),
        L("Grid Template Areas", "12m", ["Named areas", "Page layouts", "Header, sidebar, main and footer"]),
        L("Practice: A Responsive Gallery", "10m", ["Planning the grid", "Building it", "Testing at every breakpoint"])
      ]
    }, {
      t: "Module 4 · Components and Variables",
      lessons: [
        L("Building Reusable Components", "13m", ["Buttons", "Cards", "Badges", "Containers", "Section titles"]),
        L("Pseudo-Classes for State", "13m", ["hover", "focus", "focus-visible", "active", "checked", "disabled"]),
        L("Pseudo-Elements", "12m", ["before", "after", "Decorative elements", "Overlays", "Icons"]),
        L("CSS Variables", "13m", ["Declaring variables", "Colours", "Spacing", "Font sizes", "Shadows and radius"]),
        L("Theming With Variables", "10m", ["Component-level variables", "Fallback values", "A light and dark pass"]),
        L("Practice: A Component Set You Reuse", "9m", ["Spotting repeated patterns", "Naming them", "Documenting the set"])
      ]
    }, {
      t: "Module 5 · Forms, Images and CSS Functions",
      lessons: [
        L("Professional Form Layouts", "14m", ["Two-column forms", "Input groups", "Help text", "Error states", "Focus states"]),
        L("Responsive Images", "13m", ["max-width", "aspect-ratio", "object-fit", "The picture element", "srcset basics"]),
        L("Gradients and Shadows", "12m", ["Linear gradients", "Radial gradients", "box-shadow", "text-shadow", "Layering backgrounds"]),
        L("calc(), min() and max()", "12m", ["calc()", "min()", "max()", "Practical sizing problems"]),
        L("clamp() for Fluid Design", "11m", ["clamp()", "Fluid type", "Fluid spacing", "Setting sensible guard rails"]),
        L("Practice: Recreate a Section From a Screenshot", "10m", ["Measuring the design", "Choosing units", "Matching the spacing"])
      ]
    }, {
      t: "Module 6 · Debugging, Git and Deployment",
      lessons: [
        L("Browser Developer Tools", "13m", ["Inspecting elements", "Editing CSS live", "The box-model panel", "Flexbox overlay", "Grid overlay"]),
        L("Debugging Horizontal Scroll and Overflow", "12m", ["Finding the offending element", "Common causes", "Reliable fixes"]),
        L("Debugging Alignment and Unequal Cards", "12m", ["Flex and grid alignment", "Equal heights", "Baseline problems"]),
        L("Specificity Problems and How to Avoid Them", "9m", ["Calculating specificity", "Avoiding !important", "Flattening selectors"]),
        L("Git and GitHub Basics", "13m", ["Repository", "Commit", "Push", "README", "Project history"]),
        L("Publishing With GitHub Pages", "10m", ["Static hosting", "Enabling Pages", "Relative paths", "Your live link"]),
        L("Deployment Troubleshooting", "7m", ["404 errors", "Broken paths", "Missing assets", "Caching"])
      ]
    }, {
      t: "Guided Project · Responsive Restaurant Website",
      lessons: [
        L("Understanding the restaurant design", "10m"),
        L("Project setup and asset review", "8m"),
        L("Semantic structure: header to footer", "12m"),
        L("Semantic structure: menu and gallery", "12m"),
        L("Semantic structure: forms and contact", "12m"),
        L("Global styles and design variables", "11m"),
        L("Typography and spacing scale", "10m"),
        L("Building the header", "11m"),
        L("Responsive navigation", "11m"),
        L("Hero section", "10m"),
        L("About and statistics section", "12m"),
        L("Featured dish cards", "13m"),
        L("Restaurant menu layout", "13m"),
        L("Menu responsive behaviour", "12m"),
        L("Offers and promotion section", "15m"),
        L("Testimonial section", "14m"),
        L("Responsive image gallery", "14m"),
        L("Reservation form", "12m"),
        L("Contact section", "10m"),
        L("Footer", "10m"),
        L("Mobile breakpoint pass", "17m"),
        L("Tablet breakpoint pass", "15m"),
        L("Debugging layout and overflow issues", "11m"),
        L("Validation and accessibility check", "10m"),
        L("Deployment and final review", "15m")
      ]
    }]
  },

  "html-css-part-3": {
    icon: "code",
    part: "Advanced",
    tag: "Web · Advanced",
    level: "Advanced",
    title: "Advanced CSS Architecture, Accessibility and Professional Projects",
    sub: "Build scalable, accessible, production-quality interfaces with modern CSS — finishing with a multi-page SaaS site and admin dashboard you can present as a case study.",
    series: ["html-css-part-1", "html-css-part-2", "html-css-part-3"],
    prevCourse: "html-css-part-2",
    project: "Multi-Page SaaS Website and Admin Dashboard",
    learn: [
      "Organise CSS so it stays maintainable as a project grows",
      "Apply BEM and refactor an unstructured stylesheet",
      "Control the cascade with layers instead of !important",
      "Build component-level responsiveness with container queries",
      "Use logical properties and intrinsic sizing",
      "Handle advanced Grid, subgrid, positioning and stacking contexts",
      "Animate only what is cheap to animate, and respect reduced motion",
      "Make an interface fully keyboard operable with correct focus handling",
      "Test with a screen reader and fix what you find",
      "Meet contrast requirements and eliminate layout shift",
      "Review code the way a senior engineer would",
      "Prepare for HTML and CSS interviews and timed assignments"
    ],
    who: [
      "Developers comfortable with Flexbox, Grid and responsive design",
      "Anyone preparing for frontend interviews and take-home assignments",
      "Freelancers who need a professional delivery workflow",
      "Developers whose CSS becomes unmanageable on larger projects"
    ],
    prereqTitle: "What you should know first",
    prereq: "You should have completed the Intermediate section or be fluent in Flexbox, CSS Grid, media queries, CSS variables and responsive images. This section spends very little time on syntax — it is about architecture, accessibility, performance and professional workflow. You will also need a GitHub account, which we set up in the Intermediate section.",
    assignments: [
      "Refactor unorganised CSS using BEM",
      "Build a container-query card",
      "Create a responsive dashboard",
      "Build an accessible animated component",
      "Audit an existing website",
      "Complete a timed HTML and CSS assignment"
    ],
    sections: [{
      t: "Module 1 · CSS Architecture",
      lessons: [
        L("Problems in Large CSS Projects", "13m", ["Duplicate CSS", "Naming problems", "Specificity conflicts", "Unused styles", "The cost of poor maintenance"], true),
        L("BEM Naming Convention", "14m", ["Block", "Element", "Modifier", "Naming components consistently"], true),
        L("Refactoring Existing CSS to BEM", "12m", ["Auditing what you have", "Renaming safely", "Removing duplication"]),
        L("Organising CSS Files", "13m", ["Reset", "Base", "Layout", "Components", "Utilities", "Page styles"]),
        L("Cascade Layers", "13m", ["Declaring layers", "Layer order", "Avoiding !important", "Predictable overrides"]),
        L("Practice: Restructure a Messy Stylesheet", "11m", ["Reading unfamiliar CSS", "Planning the refactor", "Verifying nothing broke"])
      ]
    }, {
      t: "Module 2 · Modern Responsive CSS",
      lessons: [
        L("Advanced CSS Variables", "12m", ["Global versus component scope", "Fallback values", "Computed values"]),
        L("Theme Variables and Dark Mode", "12m", ["Theme tokens", "prefers-color-scheme", "Toggling themes", "Contrast in both themes"]),
        L("Logical Properties", "13m", ["Inline and block directions", "Logical margins", "Logical padding", "Logical borders"]),
        L("Container Queries", "14m", ["container-type", "The @container rule", "Component-based responsiveness"], true),
        L("Building a Container-Query Card", "11m", ["Establishing the container", "Component breakpoints", "Testing in context"]),
        L("Intrinsic Layouts", "12m", ["min-content", "max-content", "fit-content", "Content-driven sizing"]),
        L("Practice: A Component That Works Anywhere", "8m", ["Dropping it into three contexts", "Fixing what breaks"])
      ]
    }, {
      t: "Module 3 · Advanced Grid and Positioning",
      lessons: [
        L("Explicit and Implicit Grids", "13m", ["Explicit tracks", "Implicit tracks", "grid-auto-flow", "Dense packing"]),
        L("Magazine and Dashboard Layouts", "14m", ["Asymmetric grids", "Spanning items", "Featured content"]),
        L("Subgrid and Nested Grid", "13m", ["subgrid", "Aligning nested content", "Shared tracks", "Equal card layouts"]),
        L("CSS Positioning", "13m", ["relative", "absolute", "fixed", "sticky", "Containing blocks"]),
        L("What Breaks Fixed and Sticky", "11m", ["transform", "filter", "overflow", "Debugging the cause"]),
        L("Z-Index and Stacking Contexts", "12m", ["Stacking order", "What creates a context", "Overlay problems", "Modal layering"]),
        L("Practice: A Sticky Sidebar and a Modal", "8m", ["Building both", "Testing the layering"])
      ]
    }, {
      t: "Module 4 · Animation and Interaction",
      lessons: [
        L("CSS Transitions", "12m", ["transition-property", "Duration", "Timing functions", "Delay"]),
        L("What Is Cheap to Animate", "11m", ["Compositor-friendly properties", "Layout thrashing", "will-change"]),
        L("CSS Transforms", "12m", ["translate", "scale", "rotate", "skew", "transform-origin"]),
        L("Keyframe Animations", "13m", ["@keyframes", "Duration", "Iteration", "Direction", "Fill mode"]),
        L("Accessible Motion", "12m", ["prefers-reduced-motion", "Safe animation", "Avoiding distraction", "Alternative states"]),
        L("Practice: An Accessible Animated Component", "10m", ["Building it", "Adding the reduced-motion path", "Testing both"])
      ]
    }, {
      t: "Module 5 · Accessibility and Performance",
      lessons: [
        L("Keyboard Navigation", "13m", ["Tab order", "Focus order", "Skip links", "Genuinely interactive elements"]),
        L("Focus Indicators and Focus Management", "12m", [":focus-visible", "Custom indicators", "Focus trapping", "Returning focus"]),
        L("Colour Contrast and Readability", "12m", ["Text contrast ratios", "Buttons", "Error colours", "Link visibility"]),
        L("Accessible Names and ARIA Basics", "13m", ["Labels", "aria-label", "aria-describedby", "When not to reach for ARIA"]),
        L("Testing With a Screen Reader", "13m", ["Turning one on", "Navigating a page", "Common failures", "Fixing them"]),
        L("Website Performance", "13m", ["Optimising images", "Removing unused CSS", "Reducing duplication", "Efficient animation"]),
        L("Fonts, Images and Layout Shift", "12m", ["font-display", "Preloading", "Explicit dimensions", "Reserving space"]),
        L("Print Styles", "8m", ["Print media queries", "Hiding elements", "Page breaks", "Printable reports"])
      ]
    }, {
      t: "Module 6 · Professional Frontend Workflow",
      lessons: [
        L("Converting a Design Into HTML and CSS", "14m", ["Analysing a design", "Building a component inventory", "Spacing systems", "Typography"]),
        L("Pixel-Accurate Development", "13m", ["Measuring layouts", "Consistent spacing", "Fluid dimensions", "Avoiding fragile positioning"]),
        L("Professional Code Review", "14m", ["Semantic review", "Accessibility review", "CSS review", "Responsive review"]),
        L("Reviewing Your Own Work", "10m", ["A review checklist", "The order to check things in", "What people usually miss"]),
        L("HTML and CSS Interview Questions", "13m", ["Common questions", "Debugging questions", "Explaining your decisions"]),
        L("Timed Practical Assignments", "8m", ["The usual format", "Strategy", "Managing the clock", "What reviewers look for"])
      ]
    }, {
      t: "Guided Project · SaaS Website and Admin Dashboard",
      lessons: [
        L("Requirements and design analysis", "18m"),
        L("Project architecture and file structure", "18m"),
        L("Design system: tokens and foundations", "14m"),
        L("Design system: base components", "14m"),
        L("Accessible navigation markup", "16m"),
        L("Navigation styling and mobile menu", "16m"),
        L("Landing page hero markup", "14m"),
        L("Landing page hero styling", "14m"),
        L("Features and benefits section", "16m"),
        L("Pricing cards", "16m"),
        L("Testimonials section", "16m"),
        L("Accessible FAQ with details and summary", "16m"),
        L("Dashboard shell and sidebar", "14m"),
        L("Dashboard grid layout", "14m"),
        L("Dashboard header and user menu", "14m"),
        L("Statistics cards", "14m"),
        L("Responsive data table markup", "14m"),
        L("Responsive data table styling", "14m"),
        L("Account settings form markup", "14m"),
        L("Account settings form styling", "14m"),
        L("Interaction and hover states", "13m"),
        L("Page and component animation", "12m"),
        L("Responsive testing: landing pages", "14m"),
        L("Responsive testing: dashboard", "14m"),
        L("Accessibility audit: keyboard and focus", "13m"),
        L("Accessibility audit: screen reader and contrast", "12m"),
        L("Performance audit", "11m"),
        L("Print styles for the report page", "10m"),
        L("Deployment", "11m"),
        L("Presenting the project as a case study", "10m")
      ]
    }]
  }
}

export const CATALOG = [{
  slug: "html-css-part-1",
  icon: "code",
  name: "HTML & CSS — Beginner",
  tag: "Web · Beginner",
  desc: "Foundations for absolute beginners: HTML, forms, tables, CSS, typography and the box model. Ends with a published portfolio website.",
  level: "Beginner"
}, {
  slug: "html-css-part-2",
  icon: "code",
  name: "HTML & CSS — Intermediate",
  tag: "Web · Intermediate",
  desc: "Responsive design with Flexbox and CSS Grid, reusable components, DevTools debugging and deployment. Ends with a restaurant website.",
  level: "Intermediate"
}, {
  slug: "html-css-part-3",
  icon: "code",
  name: "HTML & CSS — Advanced",
  tag: "Web · Advanced",
  desc: "CSS architecture, container queries, animation, accessibility and performance. Ends with a SaaS site and admin dashboard.",
  level: "Advanced"
}, {
  slug: "javascript",
  icon: "code",
  name: "JavaScript for Frontend Development",
  tag: "Frontend · Beginner to Advanced",
  desc: "The recommended next step after the HTML & CSS series — language fundamentals, the DOM, events, async and real app building.",
  level: "Beginner to Advanced",
  soon: true
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
