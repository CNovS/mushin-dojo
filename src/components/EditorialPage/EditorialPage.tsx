import type { MouseEventHandler } from 'react'
import { Eyebrow } from '../Eyebrow/Eyebrow'
import { TextLink } from '../TextLink/TextLink'
import img1 from '../../../public/assets/imagenes/jason-briscoe-HN_4K2diUWs-unsplash.jpg'
import img2 from '../../../public/assets/imagenes/5010-ol7jRS-OQIk-unsplash.jpg'

import './EditorialPage.scss'

export interface EditorialPageContent {
  eyebrow: string
  title: string
  intro: string
  image: 'img1' | 'img2'
  imageAlt: string
  imageNote: string
  storyHeading: string
  paragraphs: readonly [string, string]
}

interface EditorialPageProps {
  content: EditorialPageContent
  onNavigate: MouseEventHandler<HTMLAnchorElement>
  className: string
}

const editorialImages = { img1, img2 } as const

export function EditorialPage({ content, onNavigate, className }: EditorialPageProps) {
  return (
    <main className={`editorial-page ${className}`}>
      <section className="editorial-page__heading page-wrap">
        <Eyebrow>{content.eyebrow}</Eyebrow>
        <div className="editorial-page__heading-grid">
          <h1>{content.title}</h1>
          <p>{content.intro}</p>
        </div>
      </section>
      <figure className="editorial-page__image page-wrap">
        <img
          src={editorialImages[content.image as keyof typeof editorialImages]}
          alt={content.imageAlt}
          width="1600"
          height="744"
          loading="eager"
          decoding="async"
        />
        <figcaption>{content.imageNote}</figcaption>
      </figure>
      <section className="editorial-page__story page-wrap">
        <div className="editorial-page__label"><span>01</span><span>Una pausa</span></div>
        <div className="editorial-page__copy">
          <h2>{content.storyHeading}</h2>
          {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <TextLink href="#/contacto" onClick={onNavigate}>Hablemos</TextLink>
        </div>
      </section>
    </main>
  )
}
