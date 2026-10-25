import type { MouseEventHandler } from 'react'
import './SiteFooter.scss'

interface SiteFooterProps {
  onNavigate: MouseEventHandler<HTMLAnchorElement>
}

export function SiteFooter({ onNavigate }: SiteFooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <a href="#/" className="site-footer__brand" onClick={onNavigate} aria-label="Mushin Dojo, inicio">
        <img src="/assets/logos/MUSHIN%20DOJO_Logo_Principal_Crema.svg" alt="Mushin Dojo" />
      </a>
      <span className="site-footer__note">Recupera tu centro.</span>
      <div className="site-footer__legal">
        <img src="/assets/logos/MUSHIN%20DOJO_Si%CC%81mbolo_2_Crema.svg" alt="" aria-hidden="true" />
        <span>© {currentYear} Mushin Dojo<br />Todos los derechos reservados.</span>
      </div>
    </footer>
  )
}
