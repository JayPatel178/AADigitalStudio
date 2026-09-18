# A & A Design Studio — Premium Architectural & Interior Website

A modern, responsive, multi-page website crafted for **A & A Design Studio** (Ahmedabad, Gujarat). Built with pure semantic **HTML5**, **CSS3**, and **Vanilla JavaScript** without any external UI frameworks or runtime dependencies.

---

## 🏛️ Business Overview Grounding

* **Firm**: A & A Design Studio
* **Established**: 2004 (20+ years of architectural excellence)
* **Location**: A-325, Swarnim Business Hub-1, Near Godrej Garden Township, Opposite Global International School, Tragad Road, Gota, Ahmedabad - 382470, Gujarat, India
* **Google Maps Link**: [A & A Design Studio Ahmedabad on Google Maps](https://www.google.com/maps/search/?api=1&query=A+&+A+Design+Studio+Ahmedabad&query_place_id=ChIJR2Ig-aeDXjkRG6cWUj1yUOw)
* **Specialization**: Luxury Residential Interiors (Villas, Penthouses, 4BHKs), Corporate Offices, Modular Kitchens, Living Room & Master Suite Architecture, and Turnkey Civil Execution.

---

## 📁 File & Directory Architecture

```text
A & A Design Studio/
│
├── index.html                  # 01. Home: Hero, studio stats, services, projects, slider, process, reviews
├── about.html                  # 02. About: 20-year history, philosophy, Ar. Nikunj Patel, team, milestones
├── services.html               # 03. Services: 9 specialized architectural & interior design capabilities
├── projects.html               # 04. Projects: Filterable portfolio with search & count indicator
├── project-details.html        # 05. Project Details: Case study of Modern Urban Residence (Bodakdev Villa)
├── before-after.html           # 06. Before & After: Interactive comparison sliders for 4 transformations
├── skills.html                 # 07. Skills & Expertise: Bioclimatic design, 3D sun simulation, joinery
├── process.html                # 08. How We Work: 6-step turnkey roadmap with deliverables & timeline
├── testimonials.html           # 09. Testimonials: Client carousel and verified reviews across Ahmedabad
├── blog.html                   # 10. Journal: Editorial articles on trends, materials, and small spaces
├── blog-details.html           # 11. Blog Post: In-depth essay with Table of Contents & social sharing
├── contact.html                # 12. Contact: Validated consultation form, studio hours & Google Maps embed
├── privacy-policy.html         # 13. Privacy policy
├── terms.html                  # 14. Terms & conditions
├── cookies.html                # 15. Cookie & theme storage policy
│
├── css/
│   ├── style.css               # Design system, CSS variables (light/dark), layout, cards, forms, footer
│   ├── responsive.css          # Responsive breakpoints (1200px, 992px, 768px, 480px), zero overflow
│   └── animations.css          # Keyframes, scroll reveals, prefers-reduced-motion overrides
│
├── js/
│   ├── theme.js                # Dark/light mode with localStorage persistence & system preference
│   ├── navigation.js           # Sticky blur header, mobile drawer menu, active link indicator
│   ├── slider.js               # Draggable Before/After image comparison slider (mouse, touch, keyboard)
│   ├── projects.js             # Project category filtering & keyword search
│   ├── animations.js           # IntersectionObserver scroll reveals & statistical counter animations
│   ├── contact.js              # Client-side form validation, inline errors, accessible toast feedback
│   └── main.js                 # Testimonial carousel (touch, autoplay), back-to-top, video modal
│
├── images/
│   ├── hero/                   # Hero living room & creative studio workspace visuals
│   ├── projects/               # High-res residential, villa, penthouse, and office project photos
│   ├── before-after/           # Paired pre- and post-transformation images
│   ├── blog/                   # Editorial article cover images
│   ├── team/                   # Principal architect & senior design leadership portraits
│   └── services/               # Specialized service visuals
│
├── sitemap.xml                 # Search engine sitemap with canonical URLs & priorities
├── robots.txt                  # Robots directives
└── README.md                   # Setup guide and customization instructions
```

---

## 🚀 How to Run Locally

Because the project is 100% vanilla HTML, CSS, and JavaScript, you can run it immediately without `npm install` or build steps:

### Method A: Directly via Browser
Double-click `index.html` or drag it into any modern web browser (Chrome, Edge, Safari, Firefox).

### Method B: Via Local Development Server (Recommended)
Using Python (built into Windows/macOS/Linux):
```powershell
# Open terminal in the project directory
python -m http.server 8080
```
Then visit: `http://localhost:8080/` in your browser.

Using Node.js:
```bash
npx serve .
```

---

## 🎨 Design System & Theming

The site implements an editorial color palette defined via CSS variables in `css/style.css`:

### Light Mode
* **Primary Background**: Warm Alabaster White (`#fcfbfa`)
* **Secondary Surface**: Soft Oatmeal / Sand Taupe (`#f4f0e8`)
* **Card Surface**: Pure White (`#ffffff`)
* **Primary Text**: Deep Rich Charcoal (`#181716`)
* **Secondary Text**: Warm Taupe (`#5e5b56`)
* **Accent**: Muted Architectural Bronze / Champagne Gold (`#bfa175`)

### Dark Mode (`[data-theme="dark"]`)
* **Primary Background**: Velvet Charcoal (`#121315`) — *no pure `#000`*
* **Secondary Surface**: Deep Warm Gray (`#1a1b1f`)
* **Card Surface**: Deep Obsidian Charcoal (`#18191e`)
* **Primary Text**: Soft Pearl Off-White (`#f5f4ef`)
* **Secondary Text**: Muted Sand Taupe (`#aba8a1`)
* **Accent**: Luminous Brushed Bronze (`#d4b98c`)

Theme selection persists in `localStorage` (`aa_studio_theme`) and automatically listens for changes to OS-level dark/light modes when unset.

---

## 🔄 Where to Replace Content for Production

### 1. Studio Logo & Brand Mark
All official logo assets are organized in `images/logo/` with dedicated light and dark theme variations:
* **`images/logo/logo-light.png`**: Full official logo (transparent background, charcoal text & warm bronze/gold ribbon) for light mode.
* **`images/logo/logo-dark.png`**: Full official logo (transparent background, luminous ivory text & champagne gold ribbon) for dark mode.
* **`images/logo/logo-mark-light.png`**: Monogram emblem mark (transparent) for light navigation headers.
* **`images/logo/logo-mark-dark.png`**: Monogram emblem mark (transparent) for dark navigation headers.
* **`images/logo/favicon.png`**: Browser tab favicon.
* **`images/logo/studio-logo.png`**: Preserved original master logo upload.
* **Automatic Theme Switching**: Managed cleanly via CSS (`.logo-img-light` / `.logo-img-dark` and `[data-theme="dark"]`), reacting seamlessly to the navigation theme toggle button and system OS preferences.
* **Studio Name & Tagline**: Search for `A & A DESIGN STUDIO` and `INTERIORS • SPACES • LIFESTYLE` to customize.

### 2. Contact Information & Address
Open `contact.html`, `index.html`, and the footer of all HTML pages to update:
* **Address**: `A-325, Swarnim Business Hub-1, Near Godrej Garden Township, Opp. Global International School, Tragad Road, Gota, Ahmedabad - 382470`
* **Phone Numbers**: `+91 98250 84920` / `+91 79 4890 2004`
* **Email Addresses**: `info@aadesignstudio.in` / `consult@aadesignstudio.in`
* **Google Maps Link**: Update the `href` attribute on map buttons to any new Place ID.

### 3. Images & Media
All images are organized by section in the `images/` directory:
* **Hero Visuals**: `images/hero/hero-main.jpg`, `images/hero/hero-studio.jpg`
* **Project Portfolio**: `images/projects/project-1.jpg` through `project-8.jpg`
* **Before & After**: `images/before-after/living-before.jpg`, `living-after.jpg`, etc.
* **Blog Covers**: `images/blog/blog-1.jpg` through `blog-5.jpg`
* **Team Portraits**: `images/team/architect-nikunj.jpg`, `designer-priya.jpg`, etc.

Simply drop your high-resolution photographs into these folders using the same file names, or update the `src` attributes in the HTML files.

### 4. Contact Form Backend Integration
The consultation form in `contact.html` handles accessible client-side validation via `js/contact.js`. To connect to a live backend:
1. In `contact.html`, set the form's `action` attribute to your API endpoint or service (e.g. `https://formspree.io/f/YOUR_ID`, AWS API Gateway, or a Node/Express route).
2. Set `method="POST"`.
3. In `js/contact.js`, replace the simulated `setTimeout` submission block with a `fetch()` call sending the `FormData`.

---

## 🔍 Technical SEO & Local Search

* **Unique Metadata**: Every page includes a unique `<title>`, `<meta name="description">`, and canonical URL.
* **Structured Data (JSON-LD)**:
  * `LocalBusiness` and `HomeAndConstructionBusiness` with Ahmedabad coordinates (`23.1166, 72.5482`), opening hours, and founder.
  * `BreadcrumbList` on all interior pages.
  * `CollectionPage` on portfolio and before/after pages.
  * `BlogPosting` on editorial articles.
  * `HowTo` schema on the 6-stage turnkey process.
* **Crawlability**: Compliant `sitemap.xml` and `robots.txt` included in root.
* **Performance**: `fetchpriority="high"` for the LCP hero image, native `loading="lazy"` on below-the-fold assets, and explicit aspect ratios.
* **Accessibility**: WCAG AA compliant contrast, full keyboard navigation for the comparison sliders, visible focus rings, and `@media (prefers-reduced-motion: reduce)` support.

---

&copy; 2026 A & A Design Studio. All rights reserved.
