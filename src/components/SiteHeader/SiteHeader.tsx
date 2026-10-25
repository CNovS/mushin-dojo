import { useEffect, useState, type MouseEventHandler } from 'react'
import type { PagePath } from '../../types/navigation'
import { PAGE_LINKS } from '../../types/navigation'
import './SiteHeader.scss'
import logoAzul from '../../../public/assets/logos/MUSHIN DOJO_Logo_Principal_AzulOscuro.svg'

interface SiteHeaderProps {
  pathname: PagePath
  onNavigate: MouseEventHandler<HTMLAnchorElement>
}

export function SiteHeader({ pathname, onNavigate }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => setMenuOpen(false), [pathname])

  return (
    <header className="site-header">
      <a className="site-header__brand" href="#/" onClick={onNavigate} aria-label="Mushin Dojo, inicio">
        <img src={logoAzul} alt="Mushin Dojo" />
      </a>
      <button
        className="site-header__menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span>{menuOpen ? 'Cerrar' : 'Menú'}</span>
        <span className={`site-header__menu-icon${menuOpen ? ' is-open' : ''}`} aria-hidden="true"><i /><i /></span>
      </button>
      <nav id="main-navigation" className={`site-header__navigation${menuOpen ? ' is-open' : ''}`} aria-label="Navegación principal">
        {PAGE_LINKS.map((page) => (
          <a
            key={page.path}
            className={`${pathname === page.path ? 'is-active' : ''}${page.path === '/contacto' ? ' nav-contact' : ''}`}
            href={`#${page.path}`}
            onClick={onNavigate}
            aria-current={pathname === page.path ? 'page' : undefined}
          >
            {page.label}
            {page.path === '/contacto' && <span className="site-header__arrow" aria-hidden="true">↗</span>}
          </a>
        ))}
      </nav>
    </header>
  )
}
