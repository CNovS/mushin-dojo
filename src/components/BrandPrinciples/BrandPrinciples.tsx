import { Eyebrow } from '../Eyebrow/Eyebrow'
import { PrincipleCard, type BrandPrinciple } from '../PrincipleCard/PrincipleCard'
import './BrandPrinciples.scss'

const brandPrinciples: readonly BrandPrinciple[] = [
  {
    title: 'Serena',
    description: 'Transmitimos calma, estabilidad y paciencia. Cada deportista avanza a su propio ritmo.',
    tone: 'Hablamos de forma pausada y comprensiva, también en momentos de exigencia.',
  },
  {
    title: 'Profesional',
    description: 'Nos apoyamos en el conocimiento y la experiencia. Trabajamos con criterio, sin atajos.',
    tone: 'Explicamos con claridad y rigor, sin sobrecargar de tecnicismos.',
  },
  {
    title: 'Humana',
    description: 'Entendemos que cada proceso es distinto. Escuchamos, acompañamos y nos adaptamos.',
    tone: 'Nos comunicamos de forma cercana y respetuosa, sin juicios.',
  },
  {
    title: 'Consciente',
    description: 'Cada mensaje, decisión y reflexión tiene una intención y un porqué.',
    tone: 'Un tono sobrio y reflexivo que prioriza la honestidad y el valor.',
  },
]

export function BrandPrinciples() {
  return (
    <section className="brand-principles page-wrap">
      <div className="brand-principles__heading">
        <Eyebrow>Nuestra forma de acompañar</Eyebrow>
        <h2>Cuatro rasgos.<br /><span>Una misma intención.</span></h2>
      </div>
      <div className="brand-principles__grid">
        {brandPrinciples.map((principle, index) => (
          <PrincipleCard key={principle.title} {...principle} index={index} />
        ))}
      </div>
    </section>
  )
}
