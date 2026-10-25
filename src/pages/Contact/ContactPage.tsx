import type { MouseEventHandler } from 'react'
import { Eyebrow } from '../../components/Eyebrow/Eyebrow'
import { TextLink } from '../../components/TextLink/TextLink'
import './ContactPage.scss'
import esfera from '../../../public/assets/referencias/ESFERA.svg'

interface ContactPageProps {
  onNavigate: MouseEventHandler<HTMLAnchorElement>
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  return (
    <main className="contact-page">
      <section className="contact-page__hero page-wrap">
        <Eyebrow>El siguiente paso</Eyebrow>
        <h1>Todo empieza<br />con una <span>conversación.</span></h1>
        <p className="contact-page__intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cuéntanos qué necesitas y encontraremos un momento para hablar.</p>
        <div className="contact-page__details">
          <div><span className="contact-page__label">Escríbenos</span><span className="contact-page__value">[Email de contacto]</span></div>
          <div><span className="contact-page__label">Dónde encontrarnos</span><span className="contact-page__value">[Ciudad o ubicación]</span></div>
        </div>
        <img className="contact-page__sphere" src={esfera} alt="" aria-hidden="true" />
      </section>
      <section className="contact-page__note">
        <div className="page-wrap contact-page__note-inner">
          <p>Un espacio para escuchar,<br /><span>entender y avanzar.</span></p>
          <TextLink href="#/quienes-somos" onClick={onNavigate}>Conoce Mushin Dojo</TextLink>
        </div>
      </section>
    </main>
  )
}
