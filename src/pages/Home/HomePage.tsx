import { useState, type MouseEventHandler } from 'react'
import { BrandPrinciples } from '../../components/BrandPrinciples/BrandPrinciples'
import { Eyebrow } from '../../components/Eyebrow/Eyebrow'
import { TextLink } from '../../components/TextLink/TextLink'
import './HomePage.scss'
import ciclistaImg from '../../../public/assets/imagenes/afiq-fatah-2v9jQM2CPjc-unsplash.jpg'
import logoSymbol from '../../../public/assets/referencias/ESFERA.svg'

interface HomePageProps {
  onNavigate: MouseEventHandler<HTMLAnchorElement>
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [activeSlide, setActiveSlide] = useState(0)
  const slides = [
    { title: 'Recupera tu centro', subtitle: 'Un espacio para volver a lo esencial.', image: logoSymbol, alt: 'Esfera de Mushin Dojo' },
    { title: 'Encuentra tu foco', subtitle: 'Presencia y calma en medio del movimiento.', image: ciclistaImg, alt: 'Ciclista en movimiento durante su entrenamiento' },
  ]

  const changeSlide = (direction: number) => {
    setActiveSlide((current) => (current + direction + slides.length) % slides.length)
  }

  return (
    <main className="home-page">
      <section className="home-page__hero">
        <div className="home-page__carousel" aria-roledescription="carrusel" aria-label="Mushin Dojo">
          <div className="home-page__slide" aria-live="polite" aria-atomic="true">
            <img className="home-page__slide-image" src={slides[activeSlide].image} alt={slides[activeSlide].alt} />
            <div className="home-page__slide-copy">
              <h1>{slides[activeSlide].title}</h1>
              <p>{slides[activeSlide].subtitle}</p>
              <TextLink href="#/quienes-somos" onClick={onNavigate}>Descubre Mushin Dojo</TextLink>
            </div>
          </div>
          <div className="home-page__carousel-controls">
            <button type="button" className="home-page__arrow" aria-label="Diapositiva anterior" onClick={() => changeSlide(-1)}>←</button>
            <button type="button" className="home-page__arrow" aria-label="Diapositiva siguiente" onClick={() => changeSlide(1)}>→</button>
          </div>
          <div className="home-page__carousel-pagination" aria-label={`Diapositiva ${activeSlide + 1} de ${slides.length}`}>
            {slides.map((slide, index) => <button key={slide.title} type="button" aria-label={`Mostrar ${slide.title}`} aria-current={activeSlide === index ? 'true' : undefined} onClick={() => setActiveSlide(index)} />)}
          </div>
        </div>
        <footer className="home-page__hero-footer">
          <div className="home-page__hero-footer-line" />
          <div className="home-page__hero-footer-meta"><span>textoRandom1</span><span>textoRandom2</span></div>
        </footer>
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
