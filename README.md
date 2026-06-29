# pgplex.com

Marketing site for [pgplex](https://github.com/pgplex) — the modern developer stack for PostgreSQL.

Built with **Next.js** (App Router) + **React 19** + **Tailwind CSS v4**, exported as a
fully static site and deployed to **Cloudflare Pages**.

## Develop

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

## Build

```bash
pnpm build        # static export → ./out
```

`next.config.ts` sets `output: 'export'`, so `pnpm build` emits a static site into `./out`
with no server runtime required.

## Deploy to Cloudflare Pages

### Option A — Git integration (recommended)

Connect the repo in the Cloudflare dashboard (**Workers & Pages → Create → Pages → Connect to Git**)
and use these build settings:

| Setting                | Value          |
| ---------------------- | -------------- |
| Framework preset       | Next.js (Static HTML Export) |
| Build command          | `pnpm build`   |
| Build output directory | `out`          |
| Node version (env var) | `NODE_VERSION = 22` |

Every push to `main` then builds and deploys automatically.

### Option B — Direct upload via Wrangler

```bash
pnpm deploy       # next build && wrangler pages deploy ./out
```

Requires `wrangler login` (or `CLOUDFLARE_API_TOKEN` + `CLOUDFLARE_ACCOUNT_ID` in the env)
and a Pages project named `pgplex`. Preview a production build locally with `pnpm preview`.

A GitHub Actions workflow for Option B lives in `.github/workflows/deploy.yml`.
