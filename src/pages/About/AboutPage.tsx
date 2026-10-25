import type { MouseEventHandler } from 'react'
import { EditorialPage } from '../../components/EditorialPage/EditorialPage'
import { aboutPageContent } from '../../content/editorialPages'
import './AboutPage.scss'

interface AboutPageProps {
  onNavigate: MouseEventHandler<HTMLAnchorElement>
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return <EditorialPage className="about-page" content={aboutPageContent} onNavigate={onNavigate} />
}
