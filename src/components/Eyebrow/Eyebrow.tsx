import type { ReactNode } from 'react'
import './Eyebrow.scss'

interface EyebrowProps {
  children: ReactNode
}

export function Eyebrow({ children }: EyebrowProps) {
  return (
    <p className="eyebrow">
      <span className="eyebrow__dot" aria-hidden="true" />
      {children}
    </p>
  )
}
