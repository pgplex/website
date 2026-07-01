export function Logo({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <a
      href="/"
      className={`flex items-center gap-2.5 font-semibold tracking-tight ${className ?? ''}`}
    >
      {/* Static export with images.unoptimized — a plain img avoids pulling in
          the next/image runtime for a fixed-size icon. The SVG stays crisp at
          any size; logo.png is kept as the favicon raster. */}
      <img src="/logo.svg" alt="pgplex" width={size} height={size} />
      <span className="font-display">pgplex</span>
    </a>
  )
}
