# Ikshvaku Solutions — Website

Marketing site for Ikshvaku Solutions. React + Vite + Tailwind CSS v4.

> We champion the bold to achieve the extraordinary.

## Running locally

```bash
npm install
```

```bash
npm run dev
```

Other scripts: `npm run build` (production bundle to `dist/`), `npm run preview`
(serve the built bundle), `npm run lint`.

## Deploying

```bash
npm run build
```

Upload the **contents** of `dist/` to the web root — the files themselves, not
the `dist` folder. On cPanel that is usually `public_html/`.

All six routes are client-side, so the server must fall back to `index.html` for
any path that is not a real file. Otherwise loading or refreshing
`/services`, `/projects`, `/about`, `/careers` or `/contact` returns a 404.
The build already ships the config for this:

- **Apache / cPanel** — `dist/.htaccess` (also sets caching and compression).
  Make sure hidden files are included when you upload, and that the host allows
  `.htaccess` overrides.
- **Netlify** — `dist/_redirects`
- **Vercel** — `vercel.json` in the project root
- **Nginx** — not covered by the build; add to your server block:

  ```nginx
  location / {
    try_files $uri $uri/ /index.html;
  }
  ```

## Design system

The UI follows a paper-and-ink editorial system. Everything is defined once in
[`src/index.css`](src/index.css) — the tokens live in `@theme`, and the component
classes sit inside `@layer components` so Tailwind utilities always win when both
apply to the same element.

| Token | Value | Used for |
| --- | --- | --- |
| `--paper` | `#F2F0EB` | Page ground |
| `--ink` | `#191A1F` | Text, primary buttons, inverted panels |
| `--blue` (`marine`) | `#2F4B8F` | Accent — figures, marks, active states |
| `--clay` | `#B4674A` | Warm accent — eyebrow rules, script asides |

Typefaces: **Space Grotesk** (display), **Manrope** (body), **Caveat** (handwritten
asides). Text colour is only ever ink at an opacity, never a separate grey.

Recurring building blocks: `.glass` / `.glass-quiet` / `.glass-deep` surfaces,
`.section-head` (heading left, `01 — Label` right, hairline under), `.rule-list` /
`.rule-row` for label-and-figure rows, `.eyebrow`, and `.btn-ink` / `.btn-glass` /
`.btn-outline`.

## Layout

`.shell` is the page container: fluid gutters that step 20 → 32 → 40px and settle
at 1200px of content from 1280px up. The site is verified free of horizontal
overflow at 320, 375, 414, 768, 1024, 1440, 1728 and 1920px.

`SectionRail` is the fixed right-hand section navigator on the home page. It only
appears once there is gutter to hold it (1440px+), shows marks alone below 1700px,
and is hidden entirely on coarse pointers.

## Contact details

Phone, WhatsApp, email, address and opening hours are single-sourced in
[`src/config/contact.js`](src/config/contact.js). Change them there — every page
reads from that module.

## Structure

```
src/
  components/   Navbar, Footer, Hero, and the home-page sections
  pages/        One component per route
  config/       contact.js
  hooks/        useReveal — the shared scroll-reveal observer
  index.css     Theme tokens, base layer, component layer
```

Routes: `/`, `/services`, `/projects`, `/about`, `/careers`, `/contact`.

## Contact form — read before launch

`src/pages/ContactPage.jsx` posts to `${VITE_API_URL}/api/contact`, defaulting to
`http://localhost:8000` when the variable is unset. That backend is **not** part
of this repository.

Point it at a real endpoint by creating `.env.production` before building:

```
VITE_API_URL=https://api.your-domain.com
```

Until you do, the submit handler's `catch` shows *"Thank you for your message!"*
even though the request failed — visitors will believe they have contacted you
and no enquiry will arrive. Either wire up the backend, or change that `catch`
to surface a real error and point people at WhatsApp instead.
