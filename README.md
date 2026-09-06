# Personal Website

My personal website built with React, TypeScript, and Tailwind CSS. Visit at [ayokunle.com](https://ayokunle.com).

## Tech Stack

- React 18 + TypeScript + Vite
- Tailwind CSS
- Cloudflare Workers (static assets + `/api/*` in one Worker)
- Vercel AI SDK + OpenRouter for the "Ask About My Work" console
- GitHub Actions → `wrangler deploy` (CI/CD)

## Layout

| Path | What it is |
| --- | --- |
| `src/` | The React SPA |
| `src/lib/agent/` | Console client: `useChat` transport, offline knowledge base, keyword router, Markdown renderer |
| `worker/src/index.ts` | The Worker: serves `./dist` as static assets and handles `GET /api/health`, `POST /api/chat` |
| `public/_headers` | Security + caching headers for static assets (CSP, HSTS, `frame-ancestors`, immutable `/assets/*`) |
| `public/llms.txt`, `public/llms-full.txt` | Agent-readable profile; `llms-full.txt` is also the Worker's system-prompt context |
| `wrangler.jsonc` | Worker config: assets, SPA fallback, `run_worker_first: ["/api/*"]`, vars, KV, custom domain |

## Development

```bash
npm install
npm run dev          # Vite on :5173 — console runs in offline (knowledge-base) mode
npm run dev:full     # vite build + wrangler dev on :8787 — full stack incl. /api/*
npm run typecheck    # app + worker
npm run lint
```

For live chat under `wrangler dev`, create `.dev.vars` (gitignored) with `OPENROUTER_API_KEY=sk-or-...`.
To point the Vite dev server at a running `wrangler dev`, set `VITE_AGENT_API_URL=http://localhost:8787` (see `.env.example`).

## Deployment (Cloudflare Workers)

One-time setup:

```bash
npx wrangler login
npx wrangler secret put OPENROUTER_API_KEY          # never a var, never in the repo
npx wrangler kv namespace create RATE_LIMIT_KV       # paste the id into wrangler.jsonc and uncomment
```

Then either deploy from your machine:

```bash
npm run deploy       # vite build && wrangler deploy
```

or push to `main` — `.github/workflows/deploy.yml` runs typecheck, lint, build and `wrangler deploy`. It needs two repository secrets: `CLOUDFLARE_API_TOKEN` (Workers Scripts: Edit, Workers KV Storage: Edit, Account Settings: Read) and `CLOUDFLARE_ACCOUNT_ID`.

Custom domain: move `ayokunle.com` DNS to Cloudflare, then uncomment the `routes` block in `wrangler.jsonc`. Wrangler creates the DNS records and certificate. Until then the site is reachable at `https://ayokunle-com.<your-subdomain>.workers.dev`.

### How the console behaves

- The client probes `GET /api/health`. If the Worker answers `{ ok: true, configured: true }` the console goes **live** and streams from OpenRouter. The default model is `openrouter/free`, OpenRouter's meta-router that always resolves to a currently available free model; pin a specific id in `wrangler.jsonc` if you want deterministic quality.
- If the secret is not set, the probe fails, or a live request errors (network, 429, 5xx), the console answers from the curated knowledge base in `src/lib/agent/knowledge.ts` and says so.
- The Worker requires an allowed `Origin`, caps bodies at 32 KB / 20 messages / 2,000 chars, strips non-text parts, never logs message contents, and rate-limits to 20 requests per hour per IP once the KV binding is configured.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
