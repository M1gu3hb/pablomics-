import { ArrowUpRight, MapPin } from 'lucide-react'
import { useState } from 'react'
import type { ResearchExperience, SectionCopy } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

type ResearchProps = {
  experiences: ResearchExperience[]
  copy: SectionCopy
}

type Filter = 'all' | 'current' | 'past'

export function Research({ experiences, copy }: ResearchProps) {
  const [filter, setFilter] = useState<Filter>('all')
  const visibleExperiences = experiences.filter((experience) => {
    if (filter === 'current') return experience.current
    if (filter === 'past') return !experience.current
    return true
  })

  return (
    <section className="section section--research" id="research">
      <div className="container">
        <Reveal>
          <SectionHeading {...copy} />
        </Reveal>

        <Reveal className="research-toolbar" delay={70}>
          <div className="segmented-control" aria-label="Filter experiences">
            {(['all', 'current', 'past'] as Filter[]).map((option) => (
              <button
                type="button"
                key={option}
                aria-pressed={filter === option}
                onClick={() => setFilter(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <span>
            {visibleExperiences.length.toString().padStart(2, '0')} entries
          </span>
        </Reveal>

        <div className="timeline">
          {visibleExperiences.map((experience, index) => (
            <Reveal
              className="timeline-entry"
              key={`${experience.shortName}-${experience.period}`}
              delay={index * 60}
            >
              <div className="timeline-entry__year">
                <span>{experience.startYear}</span>
                <i aria-hidden="true" />
              </div>
              <article className="experience-card">
                <div className="experience-card__header">
                  <div>
                    <span
                      className={`experience-status ${
                        experience.current ? 'is-current' : ''
                      }`}
                    >
                      {experience.current ? 'Current' : 'Completed'}
                    </span>
                    <h3>{experience.shortName}</h3>
                  </div>
                  {experience.href ? (
                    <a
                      href={experience.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit ${experience.organization}`}
                    >
                      <ArrowUpRight size={18} aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
                <p className="experience-card__organization">
                  {experience.organization}
                </p>
                <div className="experience-card__body">
                  <div>
                    <span>Role</span>
                    <strong>{experience.role}</strong>
                  </div>
                  <div>
                    <span>Group</span>
                    <strong>{experience.group}</strong>
                  </div>
                  <div>
                    <span>Mentor</span>
                    <strong>{experience.mentor}</strong>
                  </div>
                </div>
                <div className="experience-card__footer">
                  <span>{experience.period}</span>
                  <span>
                    <MapPin size={13} aria-hidden="true" />
                    {experience.location}
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
