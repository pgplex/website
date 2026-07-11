import { Logo } from '@/components/logo'
import { StarBadge } from '@/components/star-badge'

type Product = {
  key: string
  name: string
  tagline: string
  description: string
  tags: string[]
  href: string
  repo: string
  cta: string
  color: string
}

const products: Product[] = [
  {
    key: 'pgconsole',
    name: 'pgconsole',
    tagline: 'Minimal Postgres editor and MCP server with guardrails',
    description:
      'Web-based Postgres development workspace with guardrails. Query, explore, and manage your databases from the browser — or let agents do it through the built-in MCP server, under the same guardrails.',
    tags: ['Web UI', 'SQL Editor', 'MCP Server', 'Access Control'],
    href: 'https://github.com/pgplex/pgconsole',
    repo: 'pgplex/pgconsole',
    cta: 'View on GitHub',
    color: '#2f63f0',
  },
  {
    key: 'pgschema',
    name: 'pgschema',
    tagline: 'Terraform-style, declarative schema migration',
    description:
      'Schema management for Postgres — think Terraform, for your database. Diff, migrate, and version your schema with confidence.',
    tags: ['Schema', 'Migration', 'Diff'],
    href: 'https://github.com/pgplex/pgschema',
    repo: 'pgplex/pgschema',
    cta: 'View on GitHub',
    color: '#df372d',
  },
  {
    key: 'pgtui',
    name: 'pgtui',
    tagline: 'Terminal UI Postgres client',
    description:
      'A beautiful terminal UI for Postgres. Navigate schemas, run queries, and inspect data — all without leaving your terminal.',
    tags: ['Terminal', 'TUI'],
    href: 'https://github.com/pgplex/pgtui',
    repo: 'pgplex/pgtui',
    cta: 'View on GitHub',
    color: '#2fa85d',
  },
  {
    key: 'pgparser',
    name: 'pgparser',
    tagline: 'Golang-native Postgres parser',
    description:
      'Thread-safe, Golang-native Postgres parser. Parse, analyze, and transform SQL with zero CGo dependencies.',
    tags: ['Go', 'Parser', 'Library'],
    href: 'https://github.com/pgplex/pgparser',
    repo: 'pgplex/pgparser',
    cta: 'View on GitHub',
    color: '#d98324',
  },
]

// Fetch star counts at build time (static export), used only as a fallback
// when the client-side fetch in StarBadge fails. Fails soft: on any error the
// badge simply links to the repo without a count instead of breaking the build.
async function getStars(repo: string): Promise<number | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      headers: { Accept: 'application/vnd.github+json' },
      cache: 'force-cache',
    })
    if (!res.ok) return null
    const data = (await res.json()) as { stargazers_count?: number }
    return typeof data.stargazers_count === 'number' ? data.stargazers_count : null
  } catch {
    return null
  }
}

// Conic blend of the four brand colours, rotated so each lands on its card's
// corner: red (pgschema) top-right, orange (pgparser) bottom-right, green
// (pgtui) bottom-left, blue (pgconsole) top-left; red repeats to close the loop.
const NEON_GRADIENT =
  'conic-gradient(from 45deg at 50% 50%, #df372d, #d98324, #2fa85d, #2f63f0, #df372d)'

export default async function Page() {
  const stars = await Promise.all(products.map((p) => getStars(p.repo)))
  return (
    <main className="relative flex h-dvh flex-col overflow-hidden bg-bg p-3 sm:p-4">
      {/* Neon backlight: each card's brand colour anchored to its corner of the
          2×2 grid (TL blue, TR red, BR orange, BL green), blended around the
          frame. Two blurred layers behind the frame — a wide bloom and a
          tighter colour "tube" — read as neon through the gap around the edge. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-3 blur-[60px] sm:inset-4"
        style={{ background: NEON_GRADIENT }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-3 blur-[14px] sm:inset-4"
        style={{ background: NEON_GRADIENT }}
      />
      <div className="relative flex h-full min-h-0 flex-col border border-border-bright bg-card">
        {/* menu bar */}
        <header className="flex h-20 shrink-0 items-center justify-between border-b border-border px-4 sm:h-24 sm:px-6">
          <Logo size={38} className="text-2xl" />
          <span className="hidden font-display text-lg font-medium tracking-tight text-ink md:block lg:text-2xl">
            The Postgres Toolchain for Humans and Agents
          </span>
        </header>

        {/* four large product tiles filling the whole area */}
        <div className="grid min-h-0 flex-1 grid-cols-2 grid-rows-2">
          {products.map((prod, i) => {
            const borderR = i % 2 === 0
            const borderB = i < 2
            const starCount = stars[i]
            return (
              <div
                key={prod.key}
                className={`group relative flex min-h-0 flex-col justify-between overflow-hidden p-6 sm:p-10 ${
                  borderR ? 'border-r border-border' : ''
                } ${borderB ? 'border-b border-border' : ''}`}
              >
                {/* brand-tint wash on hover */}
                <span
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  style={{ backgroundColor: `${prod.color}0d` }}
                />
                {/* top accent bar on hover */}
                <span
                  className="pointer-events-none absolute inset-x-0 top-0 h-[3px] scale-x-0 transition-transform duration-200 group-hover:scale-x-100"
                  style={{ backgroundColor: prod.color }}
                />

                {/* stretched main link: clicking anywhere on the card opens it */}
                <a
                  href={prod.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={prod.cta}
                  className="absolute inset-0 z-0"
                />

                {/* top row: icon + GitHub stars */}
                <div className="pointer-events-none relative z-0 flex items-start justify-between">
                  <img
                    src={`/icons/${prod.key}.svg`}
                    alt=""
                    className="h-auto w-20 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 sm:w-28"
                  />
                  <StarBadge repo={prod.repo} name={prod.name} fallback={starCount} />
                </div>

                {/* bottom: name + tagline + cta */}
                <div className="pointer-events-none relative z-0 min-w-0">
                  <h2
                    className="font-display text-3xl font-semibold tracking-tight text-ink transition-colors sm:text-5xl"
                    style={{ ['--c' as string]: prod.color }}
                  >
                    <span className="transition-colors group-hover:[color:var(--c)]">{prod.name}</span>
                  </h2>
                  <p className="mt-2 truncate text-sm text-ink-dim sm:text-base">{prod.tagline}</p>
                  <span
                    className="mt-3 inline-flex translate-y-1 items-center gap-1.5 text-sm font-medium opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 sm:text-base"
                    style={{ color: prod.color }}
                  >
                    {prod.cta}
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* footer */}
        <footer className="flex h-10 shrink-0 items-center justify-end border-t border-border px-4 text-xs text-ink-dim sm:px-5">
          <span>
            Apache 2.0 &middot; &copy; 2026{' '}
            <a
              href="https://www.bytebase.com"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-accent"
            >
              Bytebase
            </a>
          </span>
        </footer>
      </div>
    </main>
  )
}
