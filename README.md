# Asgar.ai Landing Pages

Landing page for [Asgar.ai](https://asgar.ai) — an engine that turns customer intelligence into content that wins AI visibility.

## Tech Stack

- **Frontend:** React 18, TypeScript, Vite, CSS Modules
- **Backend:** Vercel Serverless Function (Nodemailer / Gmail SMTP)
- **Deployment:** Vercel

## Getting Started

```bash
npm install
npm run dev
```

The frontend runs at `http://localhost:5173`.

### Local Backend (Express)

For local email testing, the Express server in `backend/` can be used:

```bash
cd backend
npm install
npm start
```

Set `VITE_API_URL=http://localhost:3001/api/subscribe` in a `.env` file to point the frontend to the local backend.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm test` | Run tests with Vitest |

## Deployment

This project is configured for Vercel. The `api/subscribe.ts` serverless function handles form submissions.

### Required Environment Variables (Vercel Dashboard)

| Variable | Description |
|----------|-------------|
| `SMTP_HOST` | SMTP server host (default: `smtp.gmail.com`) |
| `SMTP_PORT` | SMTP port (default: `587`) |
| `SMTP_USER` | SMTP username / email |
| `SMTP_PASS` | SMTP password or app password |
| `NOTIFICATION_EMAIL` | Recipient for signup notifications |

## Project Structure

```
src/               # React frontend
  components/      # UI components (Hero, CtaSection, Footer, etc.)
  tokens/          # Design tokens (colors, spacing, typography)
  data/            # Static data (footer links)
api/               # Vercel serverless functions
  subscribe.ts     # POST /api/subscribe — email notification handler
backend/           # Express server for local development
public/            # Static assets
geoguide/          # Downloadable PDF guide
```

## License

Proprietary — All rights reserved.
