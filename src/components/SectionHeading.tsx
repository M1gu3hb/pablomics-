type SectionHeadingProps = {
  index: string
  eyebrow: string
  title: string
  description: string
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <div className="section-heading__label">
        <span>{index}</span>
        <span>{eyebrow}</span>
      </div>
      <div className="section-heading__copy">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </header>
  )
}

