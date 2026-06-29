import { ArchitectureDiagram } from '@/components/architecture-diagram'
import { Container } from '@/components/container'
import { Elephant } from '@/components/elephant'
import { Footer } from '@/components/footer'
import { Nav } from '@/components/nav'
import { ProductCard, type Product } from '@/components/product-card'

const products: Product[] = [
  {
    name: 'pgconsole',
    href: 'https://www.pgconsole.com',
    description:
      'Web-based Postgres development workspace with guardrails. Query, explore, and manage your databases safely from the browser.',
    tags: ['Web UI', 'SQL Editor', 'Access Control'],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4M6 8l4 3-4 3M12 16h4" />
      </svg>
    ),
  },
  {
    name: 'pgtui',
    href: 'https://github.com/pgplex/pgtui',
    description:
      'A beautiful terminal UI for Postgres. Navigate schemas, run queries, and inspect data — all without leaving your terminal.',
    tags: ['Terminal', 'TUI'],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    ),
  },
  {
    name: 'pgparser',
    href: 'https://github.com/pgplex/pgparser',
    description:
      'Thread-safe, Golang-native Postgres parser. Parse, analyze, and transform SQL with zero CGo dependencies.',
    tags: ['Go', 'Parser', 'Library'],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
  },
  {
    name: 'pgschema',
    href: 'https://github.com/pgplex/pgschema',
    description:
      'Schema management for Postgres. Diff, migrate, and version your database schema with confidence.',
    tags: ['Schema', 'Migration', 'Diff'],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 17.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0" />
      </svg>
    ),
  },
]

export default function Page() {
  return (
    <>
      <Nav />

      <section className="relative overflow-hidden pt-[140px] text-center max-md:pt-[120px]">
        <Elephant className="pointer-events-none absolute left-1/2 top-[60px] z-0 h-auto w-[clamp(320px,45vw,520px)] -translate-x-1/2 opacity-[0.18]" />

        <Container className="relative z-10">
          <h1 className="mb-5 font-display text-[clamp(40px,6vw,72px)] font-normal leading-[1.1] tracking-tight text-ink max-[480px]:text-[28px]">
            Modern Developer Stack
            <br />
            for PostgreSQL
          </h1>
          <p className="mx-auto mb-14 max-w-[520px] text-base leading-[1.7] text-ink-dim">
            We&apos;re building a modern Postgres toolchain
            <br className="max-md:hidden" /> for everyone — from individual developers
            <br className="max-md:hidden" /> to the enterprise.
          </p>

          <ArchitectureDiagram />

          <div className="mb-20 grid grid-cols-1 gap-4 md:grid-cols-2">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </>
  )
}
