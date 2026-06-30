'use client'

import { useState } from 'react'

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
  const [active, setActive] = useState(0)
  const p = products[active]

  return (
    <main className="flex h-dvh flex-col overflow-hidden bg-bg p-3 sm:p-4">
      <div className="flex h-full min-h-0 flex-col border border-border bg-card shadow-[6px_6px_0_var(--color-border)]">
        {/* menu bar */}
        <header className="flex h-14 shrink-0 items-center justify-between border-b border-border px-4 sm:px-5">
          <Logo size={22} className="text-[15px]" />
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

        {/* product boxes — the hero. Pick one to reveal its content below. */}
        <div className="grid shrink-0 grid-cols-2 border-b border-border md:grid-cols-4">
          {products.map((prod, i) => {
            const selected = i === active
            return (
              <button
                key={prod.key}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={selected}
                className={`group relative flex flex-col gap-3 border-border p-4 text-left transition-colors max-md:[&:nth-child(odd)]:border-r md:border-r md:last:border-r-0 max-md:[&:nth-child(-n+2)]:border-b sm:p-5 ${
                  selected ? '' : 'hover:bg-bg'
                }`}
                style={selected ? { backgroundColor: `${prod.color}12` } : undefined}
              >
                <span
                  className="absolute inset-x-0 top-0 h-[3px] transition-opacity"
                  style={{ backgroundColor: prod.color, opacity: selected ? 1 : 0 }}
                />
                <span className="flex items-center justify-between">
                  <img
                    src={`/icons/${prod.key}.svg`}
                    alt=""
                    width={40}
                    height={40}
                    className="shrink-0"
                  />
                  <span
                    className="font-mono text-xs tabular-nums text-ink-dim transition-opacity"
                    style={{ opacity: selected ? 1 : 0.45 }}
                  >
                    0{i + 1}
                  </span>
                </span>
                <span className="min-w-0">
                  <span
                    className="block text-base font-semibold tracking-tight text-ink"
                    style={selected ? { color: prod.color } : undefined}
                  >
                    {prod.name}
                  </span>
                  <span className="block truncate text-xs text-ink-dim">{prod.tagline}</span>
                </span>
              </button>
            )
          })}
        </div>

        {/* content for the selected product */}
        <section className="flex min-h-0 flex-1 flex-col justify-center overflow-hidden">
          <div className="flex min-h-0 flex-1 flex-col items-stretch md:flex-row">
            {/* mark */}
            <div
              className="flex shrink-0 items-center justify-center border-border p-6 max-md:border-b md:w-[34%] md:max-w-[380px] md:border-r"
              style={{ backgroundColor: `${p.color}0d` }}
            >
              <img
                src={`/icons/${p.key}.svg`}
                alt={p.name}
                className="h-auto w-20 max-w-[40%] md:w-36"
              />
            </div>
            {/* copy */}
            <div className="flex min-h-0 flex-1 flex-col justify-center gap-4 p-6 sm:gap-5 sm:p-10">
              <div>
                <div className="mb-1.5 text-[11px] uppercase tracking-[0.18em] text-ink-dim">
                  {p.tagline}
                </div>
                <h1
                  className="font-mono text-2xl font-bold tracking-tight sm:text-3xl"
                  style={{ color: p.color }}
                >
                  {p.name}
                </h1>
              </div>
              <p className="max-w-[56ch] text-sm leading-[1.7] text-ink-dim sm:text-[15px]">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-border-bright px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.08em] text-ink-dim"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white shadow-[3px_3px_0_var(--color-border)] transition-transform duration-150 hover:-translate-y-px hover:translate-x-px"
                style={{ backgroundColor: p.color }}
              >
                {p.cta}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* footer */}
        <footer className="flex h-10 shrink-0 items-center justify-between border-t border-border px-4 text-xs text-ink-dim sm:px-5">
          <span className="flex items-center gap-1.5">
            by
            <a
              href="https://www.bytebase.com"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-accent"
            >
              Bytebase
            </a>
          </span>
          <span>&copy; 2026 pgplex</span>
        </footer>
      </div>
    </main>
  )
}
