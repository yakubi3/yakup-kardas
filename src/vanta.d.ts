declare module 'vanta/dist/vanta.net.min' {
  export type VantaNetOptions = {
    el: HTMLElement
    THREE?: unknown
    mouseControls?: boolean
    touchControls?: boolean
    gyroControls?: boolean
    minHeight?: number
    minWidth?: number
    scale?: number
    scaleMobile?: number
    [key: string]: unknown
  }

  export type VantaEffect = {
    destroy: () => void
  }

  export default function NET(options: VantaNetOptions): VantaEffect
}
