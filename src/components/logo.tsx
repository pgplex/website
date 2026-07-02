export function Logo({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <a href="/" className={`flex items-center ${className ?? ''}`}>
      {/* Full lockup asset — mark + outlined wordmark with the optical
          alignment baked into the SVG (see public/logo-full.svg). `size` is
          the mark's box height, matching the old icon-only sizing; the
          381/120 ratio is the asset's viewBox aspect. Static export with
          images.unoptimized — a plain img avoids the next/image runtime. */}
      <img src="/logo-full.svg" alt="pgplex" width={(size * 381) / 120} height={size} />
    </a>
  )
}
