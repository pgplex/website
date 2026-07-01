import { Logo } from '@/components/logo'

type Product = {
  key: string
  name: string
  tagline: string
  description: string
  tags: string[]
  href: string
  cta: string
  color: string
}

const products: Product[] = [
  {
    key: 'pgconsole',
    name: 'pgconsole',
    tagline: 'SQL GUI editor',
    description:
      'Web-based Postgres development workspace with guardrails. Query, explore, and manage your databases safely from the browser.',
    tags: ['Web UI', 'SQL Editor', 'Access Control'],
    href: 'https://www.pgconsole.com',
    cta: 'Open pgconsole',
    color: '#2f63f0',
  },
  {
    key: 'pgschema',
    name: 'pgschema',
    tagline: 'Declarative schema',
    description:
      'Schema management for Postgres — think Terraform, for your database. Diff, migrate, and version your schema with confidence.',
    tags: ['Schema', 'Migration', 'Diff'],
    href: 'https://github.com/pgplex/pgschema',
    cta: 'View on GitHub',
    color: '#df372d',
  },
  {
    key: 'pgtui',
    name: 'pgtui',
    tagline: 'Terminal UI client',
    description:
      'A beautiful terminal UI for Postgres. Navigate schemas, run queries, and inspect data — all without leaving your terminal.',
    tags: ['Terminal', 'TUI'],
    href: 'https://github.com/pgplex/pgtui',
    cta: 'View on GitHub',
    color: '#2fa85d',
  },
  {
    key: 'pgparser',
    name: 'pgparser',
    tagline: 'SQL parser library',
    description:
      'Thread-safe, Golang-native Postgres parser. Parse, analyze, and transform SQL with zero CGo dependencies.',
    tags: ['Go', 'Parser', 'Library'],
    href: 'https://github.com/pgplex/pgparser',
    cta: 'View on GitHub',
    color: '#d98324',
  },
]

export default function Page() {
  return (
    <main className="flex h-dvh flex-col overflow-hidden bg-bg p-3 sm:p-4">
      <div className="flex h-full min-h-0 flex-col border border-border bg-card shadow-[3px_3px_0_0_#b8b8b8,6px_6px_0_0_#d0d0d0,9px_9px_0_0_#e6e6e6]">
        {/* menu bar */}
        <header className="flex h-14 shrink-0 items-center justify-between border-b border-border px-4 sm:px-5">
          <Logo size={30} className="text-xl" />
          <div className="flex items-center gap-4">
            <span className="hidden text-xs text-ink-dim md:block">
              Modern Toolchain for Postgres Developers
            </span>
            <a
              href="https://github.com/pgplex"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm text-ink-dim transition-colors hover:text-ink"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span className="max-sm:hidden">GitHub</span>
            </a>
          </div>
        </header>

        {/* four large product tiles filling the whole area */}
        <div className="grid min-h-0 flex-1 grid-cols-2 grid-rows-2">
          {products.map((prod, i) => {
            const borderR = i % 2 === 0
            const borderB = i < 2
            return (
              <a
                key={prod.key}
                href={prod.href}
                target="_blank"
                rel="noreferrer"
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

                {/* top row: icon + index */}
                <div className="relative flex items-start justify-between">
                  <img
                    src={`/icons/${prod.key}.svg`}
                    alt=""
                    className="h-auto w-20 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 sm:w-28"
                  />
                  <span className="font-mono text-sm font-medium tabular-nums text-ink-dim sm:text-base">
                    0{i + 1}
                  </span>
                </div>

                {/* bottom: name + tagline + cta */}
                <div className="relative min-w-0">
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
              </a>
            )
          })}
        </div>

        {/* footer */}
        <footer className="flex h-10 shrink-0 items-center justify-end border-t border-border px-4 text-xs text-ink-dim sm:px-5">
          <span>
            &copy; 2026{' '}
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
