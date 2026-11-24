# iconnectplus.in website

React (Vite) marketing + legal site for **iConnect Plus**, ready to deploy on
**Hostinger Node.js**.

## Routes (also used by the Employee App)

| Path | Purpose |
|------|---------|
| `/` | Marketing home |
| `/app` | Employee app / store marketing page |
| `/support` | Support |
| `/legal/privacy` | Privacy Policy |
| `/legal/terms` | Terms of Use |
| `/legal/data-deletion` | Account / data deletion web form |

## Local development

```bash
cd apps/iconnectplus-web
npm install
npm run dev
```

## Production (Hostinger Node.js)

1. Set application root to `apps/iconnectplus-web` (or upload this folder).
2. Build command: `npm install && npm run build`
3. Start command: `npm start`
4. Hostinger sets `PORT` — `server.js` listens on it and serves `dist/` with SPA fallback.

```bash
npm install
npm run build
npm start
```

Point the domain **iconnectplus.in** (and `www`) at this Node app.

## After deploy — mark checklist done

When these URLs return the real pages (not the old SPA catch-all):

- https://iconnectplus.in/legal/privacy
- https://iconnectplus.in/legal/terms
- https://iconnectplus.in/legal/data-deletion
- https://iconnectplus.in/support

Tell Cursor to mark legal checklist items done.
