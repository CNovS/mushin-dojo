import type { MouseEventHandler } from 'react'
import { BrandPrinciples } from '../../components/BrandPrinciples/BrandPrinciples'
import { Eyebrow } from '../../components/Eyebrow/Eyebrow'
import { TextLink } from '../../components/TextLink/TextLink'
import './HomePage.scss'
import ciclistaImg from '../../../public/assets/imagenes/afiq-fatah-2v9jQM2CPjc-unsplash.jpg'
import esfera from '../../../public/assets/referencias/ESFERA.svg'

interface HomePageProps {
  onNavigate: MouseEventHandler<HTMLAnchorElement>
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <main className="home-page">
      <section className="home-page__hero">
        <div className="home-page__hero-copy">
          <Eyebrow>Un espacio para el rendimiento consciente</Eyebrow>
          <h1>Recupera<br />tu <span>centro.</span></h1>
          <p className="home-page__hero-intro">El lugar al que volver cuando todo se acelera.</p>
          <TextLink href="#/quienes-somos" onClick={onNavigate}>Descubre Mushin Dojo</TextLink>
        </div>
        <div className="home-page__visual">
          <img className="home-page__photo" src={ciclistaImg} alt="Ciclista en movimiento durante su entrenamiento" />
          <img className="home-page__sphere" src={esfera} alt="" aria-hidden="true" />
          <span className="home-page__caption">01 — Encuentra tu foco</span>
        </div>
        <div className="home-page__bottom" aria-hidden="true"><span>MENTE · CUERPO · MOVIMIENTO</span><span>DESLIZA PARA EXPLORAR ↓</span></div>
      </section>

      <section className="home-page__intro page-wrap">
        <Eyebrow>Mushin Dojo · Recupera tu centro</Eyebrow>
        <div className="home-page__intro-grid">
          <h2>Un momento para parar.<br /><span>Y volver a lo esencial.</span></h2>
          <div className="home-page__intro-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. En un entorno que no deja de moverse, te acompañamos a encontrar perspectiva, calma y un punto de apoyo propio.</p>
            <TextLink href="#/por-que-mushin" onClick={onNavigate}>Conoce nuestra filosofía</TextLink>
          </div>
        </div>
      </section>

      <BrandPrinciples />

      <section className="home-page__quote">
        <span className="home-page__quote-mark" aria-hidden="true" />
        <p>«El lugar al que volver<br />cuando todo se acelera.»</p>
        <span className="home-page__quote-label">MUSHIN DOJO</span>
      </section>
    </main>
  )
}
