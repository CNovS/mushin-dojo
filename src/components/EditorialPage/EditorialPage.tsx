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
  image: string
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

function getImg(image:string){
  if (image == "img1") return img1 
  else return img2
}

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
        <img src={getImg(content.image)} alt={content.imageAlt} />
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
