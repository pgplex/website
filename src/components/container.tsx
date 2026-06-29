import type { ReactNode } from 'react'

/** Centered page-width shell: the single source of the site gutter + max width. */
export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto max-w-page px-6 ${className ?? ''}`}>{children}</div>
}
