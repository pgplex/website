export function Logo({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <a
      href="/"
      className={`flex items-center gap-2.5 font-semibold tracking-tight ${className ?? ''}`}
    >
      {/* Static export with images.unoptimized — a plain img avoids pulling in
          the next/image runtime for a fixed-size icon. */}
      <img src="/logo.png" alt="pgplex" width={size} height={size} />
      <span>pgplex</span>
    </a>
  )
}
