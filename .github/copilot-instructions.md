# Copilot Instructions

## Project overview

This is a Create React App single-page portfolio. It is a client-only React 19 application; `src/App.js` composes the page from section components and there is no router or application state store.

## Commands

Install the exact lockfile dependencies:

```powershell
npm ci
```

Run the development server:

```powershell
npm start
```

Create a production build:

```powershell
npm run build
```

Run the Jest/React Testing Library suite once:

```powershell
npm test -- --watchAll=false --runInBand
```

Run one test file:

```powershell
npm test -- --watchAll=false --runInBand src/App.test.js
```

Run one test by name:

```powershell
npm test -- --watchAll=false --runInBand -t "test name"
```

There is no separate lint script. CRA runs ESLint as part of `npm run build`; fix build-blocking errors and relevant `eslintConfig` warnings before finishing changes.

`src/App.test.js` covers the portfolio navigation. It mocks `Testimonials` because this CRA Jest setup cannot resolve Swiper's ESM entry point directly.

## Architecture

- `src/index.js` mounts `App` into `#root` and wraps it in `React.StrictMode`.
- `src/App.js` is the page composition root. Section order is Header, Home, About, Skills, Services, Qualification, Portfolio, Testimonials, Contact, Footer, and ScrollUp.
- `src/components/<section>/` owns each page section. Components in a section generally include the section component, its stylesheet, and, when needed, small presentational components or static data modules.
- `src/assets/` contains imported images and the CV PDF. Static data modules import assets directly rather than constructing public-path URLs.
- `public/index.html` loads the external Boxicons and Unicons icon stylesheets and defines the page metadata and `#root` mount point.
- The portfolio is anchor-based navigation: header links target section IDs such as `#home`, `#about`, `#portfolio`, and `#contact`.
- `src/components/work/` demonstrates the local filtering pattern: `Data.jsx` exports `projectsData` and `projectsNav`; `Works.jsx` holds filter state and `WorkItems.jsx` renders each filtered project.
- `src/components/testimonial/Testimonials.jsx` uses Swiper and imports its CSS and pagination module locally.
- `src/components/contact/Contact.jsx` submits the form directly with `@emailjs/browser` using `sendForm`.

## Repository conventions

- Use JSX components and default exports for section components, typically named after their folder.
- Keep component-specific styles beside the component in a matching `<section>.css` file.
- Shared layout and design tokens belong in `src/App.css`: CSS custom properties, `.container`, `.grid`, `.section`, and `.button` classes. Component CSS uses the established `section__element-modifier` naming pattern.
- Preserve anchor IDs and navigation class names when changing section structure; the header and scroll behavior depend on them.
- Static portfolio content belongs in local `Data.jsx` modules and asset imports, not in ad hoc fetch logic.
- The test setup in `src/setupTests.js` enables jest-dom matchers.
- The contact form currently has EmailJS service, template, and public-key values in source. Do not expand their exposure or commit additional secrets; use the existing integration pattern unless the credential model is intentionally being changed.

## Design decisions

- Keep Poppins as the site font and preserve the animated, wavy profile-photo frame.
- Keep the minimal editorial layout and responsive navigation; use this site's own content and assets rather than copying another portfolio's text or media.
- Keep the main portfolio text in English; only the `/project/rata-in` case study is in Indonesian.

## Current project state

- The Rata.in portfolio card links to `/project/rata-in`; `src/App.js` selects `RataInCaseStudy.jsx` for that path.
- The case study and portfolio card use `src/assets/rata-in-banner.jpg`, with `src/assets/rata-in-logo.jpeg` for the brand mark; `vercel.json` rewrites the deep link to the CRA entry page.
- The case study describes the user's frontend role translating Figma designs into React with Vite and Tailwind CSS. Keep that scope accurate; the referenced Rata.in repository is a separate project.
- The latest `npm run build` and `npm test -- --watchAll=false --runInBand src/App.test.js` passed.
