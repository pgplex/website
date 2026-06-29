import type { ReactNode } from 'react'

export type Product = {
  name: string
  href: string
  description: string
  tags: string[]
  icon: ReactNode
}

export function ProductCard({ name, href, description, tags, icon }: Product) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col gap-3.5 border border-border bg-card px-7 py-8 text-left shadow-[4px_4px_0_var(--color-border)] transition-all duration-150 hover:shadow-[6px_6px_0_var(--color-border-bright)]"
    >
      <div className="flex items-center gap-3">
        <span className="flex size-9 shrink-0 items-center justify-center border border-border-bright bg-accent/6 text-accent">
          {icon}
        </span>
        <h3 className="text-[17px] font-semibold tracking-tight text-ink">{name}</h3>
      </div>
      <p className="grow text-sm leading-[1.65] text-ink-dim">{description}</p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="border border-border-bright px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.08em] text-ink-dim"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  )
}
