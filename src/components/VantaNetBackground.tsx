import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import NET from 'vanta/dist/vanta.net.min'

type VantaEffect = {
  destroy: () => void
}

type VantaNetBackgroundProps = {
  isDark: boolean
}

function hex(color: string) {
  return Number.parseInt(color.replace('#', ''), 16)
}

export default function VantaNetBackground({ isDark }: VantaNetBackgroundProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const effectRef = useRef<VantaEffect | null>(null)

  const options = useMemo(() => {
    // Premium / brand-aligned settings:
    // - Keep intensity low so the UI colors stay "original".
    // - Use a dual-tone palette close to Tailwind `primary` colors.
    // - Reduce dots/noise for a cleaner look.
    if (isDark) {
      return {
        backgroundColor: hex('#0b1220'),
        backgroundAlpha: 0.0,
        color: hex('#60a5db'),
        color2: hex('#2c5f8d'),
        points: 8.0,
        maxDistance: 23.0,
        spacing: 20.0,
        showDots: false,
        // Cinematic motion
        mouseEase: true,
        speed: 0.65,
        mouseCoeffX: 0.35,
        mouseCoeffY: 0.25,
      }
    }

    return {
      // Light mode needs stronger contrast; use an opaque, softly tinted canvas.
      backgroundColor: hex('#eaf4ff'),
      backgroundAlpha: 1.0,
      color: hex('#0a1a2f'),
      color2: hex('#2c5f8d'),
      // Denser network so it's clearly visible on bright backgrounds.
      points: 12.0,
      maxDistance: 28.0,
      spacing: 16.0,
      showDots: true,
      // Cinematic motion
      mouseEase: true,
      speed: 0.75,
      mouseCoeffX: 0.3,
      mouseCoeffY: 0.22,
    }
  }, [isDark])

  useEffect(() => {
    if (!containerRef.current) return

    // Recreate on theme changes so colors match.
    effectRef.current?.destroy()
    effectRef.current = NET({
      el: containerRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      ...options,
    })

    return () => {
      effectRef.current?.destroy()
      effectRef.current = null
    }
  }, [options])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      {/* Slightly stronger in light mode so it remains visible */}
      <div
        ref={containerRef}
        className="absolute inset-0 opacity-95 dark:opacity-30 [filter:contrast(1.22)_saturate(1.18)] dark:[filter:contrast(1.08)_saturate(1.06)]"
      />

      {/*
        Overlays (keeps the content palette crisp and professional):
        - A subtle brand glow
        - A vignette for depth
        - A soft wash to stabilize contrast across sections
      */}
      {isDark ? (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(96,165,219,0.18),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_42%,rgba(0,0,0,0.62)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/12 to-black/52" />
        </>
      ) : (
        <>
          {/* Light mode: no white wash (it can hide lines); use subtle depth + brand tint */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(44,95,141,0.14),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_48%,rgba(0,0,0,0.10)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent" />
        </>
      )}
    </div>
  )
}
