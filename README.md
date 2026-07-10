# Umidjon Jumaqulov — Portfolio

Personal portfolio of **Umidjon Jumaqulov**, Web & Android developer. It presents profile, skills, projects, and contact links with a responsive UI for desktop and mobile.

## Tech Stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4** (utilities) + **SCSS** (component design system)
- **Framer Motion** — section reveals, parallax, marquee animations
- **Three.js / React Three Fiber / drei** — 3D starfield hero background
- **React Icons / Lucide** — iconography
- **EmailJS** — contact form delivery

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description                    |
| --------------- | ------------------------------ |
| `npm run dev`   | Start the dev server           |
| `npm run build` | Production build               |
| `npm run start` | Serve the production build     |
| `npm run lint`  | Lint with ESLint (Next config) |

## Project structure

```
app/            # App Router: layout, page, globals, API routes
  api/          # Visit counter endpoints (CountAPI-backed)
components/     # One folder per component: Component.tsx + Component.scss
lib/data.ts     # Typed content: skills, projects, socials, nav items
styles/         # Global SCSS + shared media-query mixins
public/         # Images, resume, favicon
```

## Visitor counter

A proxy to CountAPI lets the site increment a global visit counter without revealing the raw CountAPI endpoint to visitors.

- The client calls `POST /api/visit` on page load, then reads `GET /api/count-public` to display the total in the footer.
- A private admin endpoint `GET /api/count` is protected by the `VISIT_SECRET` environment variable:

```bash
curl -H "Authorization: Bearer $VISIT_SECRET" https://DOMAIN.vercel.app/api/count
```

The CountAPI namespace (`umidjon-portfolio/visits`) can be changed in the route handlers under `app/api/`.

## Contact

- Telegram: https://t.me/umidjon0339
- LinkedIn: https://www.linkedin.com/in/ujcodes/
- GitHub: https://github.com/umidjon0339
