import { ArrowUpRight, BookOpen, MapPin } from 'lucide-react'
import type { EducationItem, Portfolio } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

type EducationProps = {
  items: EducationItem[]
  copy: Portfolio['sectionCopy']['education']
}

export function Education({ items, copy }: EducationProps) {
  return (
    <section className="section section--education" id="education">
      <div className="container">
        <Reveal>
          <SectionHeading {...copy} />
        </Reveal>

        <div className="education-grid">
          {items.map((item, index) => (
            <Reveal key={`${item.degree}-${item.period}`} delay={index * 90}>
              <article className="education-card">
                <div className="education-card__pin" aria-hidden="true" />
                <div className="education-card__top">
                  <span>
                    <BookOpen size={17} aria-hidden="true" />
                  </span>
                  <span className={item.current ? 'is-current' : ''}>
                    {item.current ? copy.currentLabel : copy.previousLabel}
                  </span>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${copy.visitLabel}: ${item.degree}`}
                  >
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                </div>
                <h3>{item.degree}</h3>
                <p>{item.institution}</p>
                <div className="education-card__meta">
                  <span>{item.period}</span>
                  <span>
                    <MapPin size={13} aria-hidden="true" />
                    {item.location}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
