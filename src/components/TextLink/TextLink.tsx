import type { MouseEventHandler, ReactNode } from 'react'
import './TextLink.scss'

interface TextLinkProps {
  href: string
  children: ReactNode
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

export function TextLink({ href, children, onClick }: TextLinkProps) {
  return (
    <a className="text-link" href={href} onClick={onClick}>
      {children}
      <span className="text-link__arrow" aria-hidden="true">↗</span>
    </a>
  )
}
