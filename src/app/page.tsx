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
    icon: '/icons/pgconsole.svg',
  },
  {
    name: 'pgtui',
    href: 'https://github.com/pgplex/pgtui',
    description:
      'A beautiful terminal UI for Postgres. Navigate schemas, run queries, and inspect data — all without leaving your terminal.',
    tags: ['Terminal', 'TUI'],
    icon: '/icons/pgtui.svg',
  },
  {
    name: 'pgparser',
    href: 'https://github.com/pgplex/pgparser',
    description:
      'Thread-safe, Golang-native Postgres parser. Parse, analyze, and transform SQL with zero CGo dependencies.',
    tags: ['Go', 'Parser', 'Library'],
    icon: '/icons/pgparser.svg',
  },
  {
    name: 'pgschema',
    href: 'https://github.com/pgplex/pgschema',
    description:
      'Schema management for Postgres. Diff, migrate, and version your database schema with confidence.',
    tags: ['Schema', 'Migration', 'Diff'],
    icon: '/icons/pgschema.svg',
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
