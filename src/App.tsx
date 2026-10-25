import { useEffect, useState, type MouseEventHandler } from 'react'
import { SiteFooter } from './components/SiteFooter/SiteFooter'
import { SiteHeader } from './components/SiteHeader/SiteHeader'
import { AboutPage } from './pages/About/AboutPage'
import { ContactPage } from './pages/Contact/ContactPage'
import { HomePage } from './pages/Home/HomePage'
import { WhyMushinPage } from './pages/WhyMushin/WhyMushinPage'
import { getCurrentPagePath, isPagePath, PAGE_LINKS, type PagePath } from './types/navigation'

export default function App() {
  const [pathname, setPathname] = useState<PagePath>(getCurrentPagePath)

  useEffect(() => {
    const handlePopState = () => {
      setPathname(getCurrentPagePath())
      window.scrollTo({ top: 0, behavior: 'instant' })
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const handleNavigation: MouseEventHandler<HTMLAnchorElement> = (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return

    const targetUrl = new URL(event.currentTarget.href)
    if (targetUrl.origin !== window.location.origin || !targetUrl.hash.startsWith('#/')) return

    const nextPath = targetUrl.hash.slice(1)
    if (!isPagePath(nextPath)) return

    event.preventDefault()
    if (nextPath !== pathname) {
      window.history.pushState({}, '', `/#${nextPath}`)
      setPathname(nextPath)
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }

  useEffect(() => {
    const currentPage = PAGE_LINKS.find((page) => page.path === pathname)
    document.title = currentPage && currentPage.path !== '/'
      ? `${currentPage.label} | Mushin Dojo`
      : 'Mushin Dojo'
  }, [pathname])

  const currentPage = (() => {
    switch (pathname) {
      case '/quienes-somos':
        return <AboutPage onNavigate={handleNavigation} />
      case '/por-que-mushin':
        return <WhyMushinPage onNavigate={handleNavigation} />
      case '/contacto':
        return <ContactPage onNavigate={handleNavigation} />
      case '/':
      default:
        return <HomePage onNavigate={handleNavigation} />
    }
  })()

  return (
    <div className="site-shell">
      <SiteHeader pathname={pathname} onNavigate={handleNavigation} />
      {currentPage}
      <SiteFooter onNavigate={handleNavigation} />
    </div>
  )
}
