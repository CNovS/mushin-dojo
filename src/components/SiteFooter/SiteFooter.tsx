import type { MouseEventHandler } from 'react'
import './SiteFooter.scss'
import logoCrema from '../../../public/assets/logos/MUSHIN DOJO_Logo_Principal_Crema.svg'
import simboloCrema from '../../../public/assets/logos/MUSHIN DOJO_Símbolo_2_Crema.svg'

interface SiteFooterProps {
  onNavigate: MouseEventHandler<HTMLAnchorElement>
}

export function SiteFooter({ onNavigate }: SiteFooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <a href="#/" className="site-footer__brand" onClick={onNavigate} aria-label="Mushin Dojo, inicio">
        <img src={logoCrema} alt="Mushin Dojo" />
      </a>
      <span className="site-footer__note">Recupera tu centro.</span>
      <div className="site-footer__legal">
        <img src={simboloCrema} alt="" aria-hidden="true" />
        <span>© {currentYear} Mushin Dojo<br />Todos los derechos reservados.</span>
      </div>
    </footer>
  )
}
