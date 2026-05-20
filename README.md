# Umidjon's Portfolio

A modern personal portfolio built with React and Vite. It presents Umidjon Jumaqulov's profile, skills, projects, and contact links with a responsive UI for desktop and mobile.

## Features

- Hero section with animated introduction and smooth scroll action
- Responsive navigation bar with Telegram, LinkedIn, and GitHub links
- Skills section with icon-based, auto-scrolling rows
- Projects section for showcasing work
- Contact section with clickable phone and email links
- Mobile-friendly layout and polished SCSS styling
- Framer Motion animations and icon libraries for UI details

## Tech Stack


- React 18
- Vite
- SCSS
- Framer Motion
- React Icons
- Lucide React
- EmailJS

## Contact

- Telegram: https://t.me/umidjon0339
- LinkedIn: https://www.linkedin.com/in/ujcodes/
- GitHub: https://github.com/umidjon0339

## Visitor counter (private)

This project includes a serverless proxy to CountAPI so the site can increment a global visit counter without revealing the raw CountAPI endpoint or value to public visitors.

- The client calls `/api/visit` on page load (no visible count shown to visitors).
- To view the private count, set a secret in Vercel named `VISIT_SECRET` and use the admin endpoint:

```bash
# Example (replace DOMAIN and SECRET):
curl -H "Authorization: Bearer $VISIT_SECRET" https://DOMAIN.vercel.app/api/count
```

The admin endpoint returns JSON: `{ "count": 123 }` and is protected by the secret so others cannot call it without the token.

Notes:
- You can change the CountAPI namespace (`umidjon-portfolio/visits`) in `/api/visit.js` and `/api/count.js` if you prefer a different key.
- This approach avoids storing your own database while keeping the count value private.

## Displaying the count on the site (two options)

Option A — Private (recommended): do NOT show the raw count on the public site. Instead keep `VISIT_SECRET` in Vercel and call the admin endpoint from a secure context (server or CLI). Example:

```bash
curl -H "Authorization: Bearer $VISIT_SECRET" https://DOMAIN.vercel.app/api/count
```

Option B — Public (convenient): expose a public read endpoint and display it in the UI. This repository includes `api/count-public.js` which returns the current count and a small React component `src/components/VisitCount/VisitCount.jsx` that fetches `/api/count-public` and displays the number. This makes the value visible to everyone — only use if you are okay with that.

If you want the count visible only to you but embedded in the site, consider protecting an admin path with basic auth or adding a small password check server-side before returning the count.