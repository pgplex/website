import { Container } from '@/components/container'
import { Logo } from '@/components/logo'

export function Footer() {
  return (
    <footer className="border-t border-border py-5">
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo size={16} className="text-sm leading-none" />
          <span className="translate-y-px text-xs leading-none text-ink-dim">by</span>
          <a
            href="https://www.bytebase.com"
            target="_blank"
            rel="noreferrer"
            className="translate-y-px text-xs leading-none text-ink-dim transition-colors hover:text-accent"
          >
            Bytebase
          </a>
        </div>
        <p className="text-xs text-ink-dim">&copy; 2026 pgplex. All rights reserved.</p>
      </Container>
    </footer>
  )
}
