import type { MouseEventHandler } from 'react'
import { EditorialPage } from '../../components/EditorialPage/EditorialPage'
import { whyMushinPageContent } from '../../content/editorialPages'
import './WhyMushinPage.scss'

interface WhyMushinPageProps {
  onNavigate: MouseEventHandler<HTMLAnchorElement>
}

export function WhyMushinPage({ onNavigate }: WhyMushinPageProps) {
  return <EditorialPage className="why-mushin-page" content={whyMushinPageContent} onNavigate={onNavigate} />
}
