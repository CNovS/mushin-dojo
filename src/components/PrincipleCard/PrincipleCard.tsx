import './PrincipleCard.scss'

export interface BrandPrinciple {
  title: string
  description: string
  tone: string
}

interface PrincipleCardProps extends BrandPrinciple {
  index: number
}

export function PrincipleCard({ title, description, tone, index }: PrincipleCardProps) {
  return (
    <article className="principle-card">
      <span className="principle-card__index">0{index + 1}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="principle-card__tone">{tone}</p>
    </article>
  )
}
