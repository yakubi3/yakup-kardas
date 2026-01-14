import { motion } from 'framer-motion'
import type { CSSProperties } from 'react'

const CIRCUIT_D =
  'M 40 100 C 80 20, 160 20, 200 100 S 320 180, 360 100 C 330 40, 270 40, 240 90 S 150 160, 120 110 C 90 70, 70 70, 40 100'

// Keep these paths structurally similar so SVG morphing works smoothly.
const MORPH_A_D = 'M 60 120 C 120 40, 200 40, 260 120 C 220 160, 160 180, 100 150 C 80 140, 70 135, 60 120'
const MORPH_B_D = 'M 60 120 C 140 10, 220 60, 260 120 C 230 190, 140 190, 100 150 C 80 135, 70 130, 60 120'

type CircuitAnimationProps = {
  /** When true, covers the whole page as a fixed background. */
  fullPage?: boolean
}

export default function CircuitAnimation({ fullPage = false }: CircuitAnimationProps) {
  const circuitStrokeClass = 'dark:stroke-white/20 stroke-gray-400/35'

  const carStyle = {
    offsetPath: `path("${CIRCUIT_D}")`,
    offsetRotate: 'auto',
  } as unknown as CSSProperties

  const containerClassName = fullPage
    ? 'fixed inset-0 pointer-events-none select-none z-0 overflow-hidden opacity-20 sm:opacity-35 blur-sm'
    : 'absolute inset-0 pointer-events-none select-none opacity-30 sm:opacity-50 blur-sm'

  return (
    <div className={containerClassName} aria-hidden="true">
      <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
        {/* Main circuit (draw) */}
        <motion.path
          className={`circuit ${circuitStrokeClass}`}
          d={CIRCUIT_D}
          fill="none"
          strokeWidth={2.5}
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0.6 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.6, ease: 'easeInOut' }}
        />

        {/* Car following the circuit */}
        <motion.circle
          className="car dark:text-white/60 text-gray-600/70"
          r={5}
          fill="currentColor"
          // Uses existing theme text colors via Tailwind.
          style={carStyle as any}
          animate={{ offsetDistance: ['0%', '100%'] } as any}
          transition={{ duration: 7.5, repeat: Infinity, ease: 'linear' }}
        />

        {/* Morphing path (a -> b) */}
        <motion.path
          className={`circuit-a ${circuitStrokeClass}`}
          d={MORPH_A_D}
          fill="none"
          strokeWidth={1.75}
          strokeLinecap="round"
          initial={{ opacity: 0.35 }}
          animate={{ d: MORPH_B_D, opacity: 0.55 }}
          transition={{ duration: 3.2, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        />

        {/* Reference path for the original selector-based snippet */}
        <path className="circuit-b" d={MORPH_B_D} fill="none" stroke="none" />
      </svg>

      {/* Secondary layer for depth (same palette, lower opacity) */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 200"
        preserveAspectRatio="xMidYMid slice"
      >
        <motion.g
          initial={{ opacity: 0.15 }}
          animate={{ opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '50% 50%', transform: 'scale(1.15) translateY(-6px)' } as any}
        >
          <motion.path
            className={circuitStrokeClass}
            d={CIRCUIT_D}
            fill="none"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeDasharray="6 10"
            animate={{ strokeDashoffset: [0, -80] }}
            transition={{ duration: 8.5, repeat: Infinity, ease: 'linear' }}
          />
        </motion.g>
      </svg>
    </div>
  )
}
