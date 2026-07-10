# Shobhit Chauhan — Portfolio

A premium, animated, fully frontend-only portfolio built with **React + Vite** and **Tailwind CSS v4**.

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

## Editing your content

Everything on the site — name, bio, skills, projects, services, experience, testimonials, FAQs, social links, WhatsApp number, email — lives in one file:

```
src/data/data.json
```

You should **never need to touch a component file** to update text. Just edit `data.json` and save.

### Common edits

- **Name / role / bio** -> `personal` object
- **Resume download** -> put your PDF in `public/resume.pdf` (already referenced by `personal.resumeUrl`)
- **Profile photo** -> replace the placeholder block in `Hero.jsx` / `About.jsx` with an `<img src={personal.avatar} />`, and drop your photo in `public/avatar.jpg`
- **Projects** -> edit the `projects` array; add real screenshots to `public/projects/` and update the `image` field, then swap the placeholder div in `ProjectCard` for an `<img>` tag
- **WhatsApp number** -> `personal.whatsapp` (digits only, country code first, e.g. `919000000000`)
- **Email** -> `personal.email` (powers the mailto contact form and footer)

## Structure

```
src/
  components/   Reusable UI: Button, Navbar, Footer, Reveal, ThemeToggle, etc.
  sections/     Page sections: Hero, About, Skills, Projects, Services,
                Experience, Testimonials, Contact
  hooks/        useActiveSection, useMousePosition, useCountUp, useTheme
  utils/        mailto / WhatsApp link builders
  data/         data.json - all editable content
  styles/       index.css - design tokens (colors, fonts) via Tailwind v4 @theme
```

## Notes

- 100% frontend — no backend, no APIs, no database. The contact form opens the
  visitor's email client via a `mailto:` link with the message pre-filled.
- Dark theme by default, with a light theme toggle in the navbar.
- Built with accessibility in mind: visible focus states, semantic landmarks,
  and `prefers-reduced-motion` support.
- Swap the placeholder image blocks for real `<img>` tags once you have final
  photography — they were left as gradient placeholders so the layout works
  immediately without 404s.
