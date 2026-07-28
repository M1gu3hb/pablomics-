import { Asterisk, Braces, ChartNoAxesCombined, Dna } from 'lucide-react'
import type { Portfolio } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

type SkillsProps = {
  groups: {
    group: string
    items: string[]
  }[]
  copy: Portfolio['sectionCopy']['toolkit']
}

const skillIcons = [Braces, Dna, ChartNoAxesCombined, Asterisk]

export function Skills({ groups, copy }: SkillsProps) {
  return (
    <section className="section section--toolkit" id="toolkit">
      <div className="container">
        <Reveal>
          <SectionHeading {...copy} />
        </Reveal>

        <div className="toolkit-board">
          <Reveal className="toolkit-board__intro">
            <span className="toolkit-board__number">{copy.boardIndex}</span>
            <div>
              <p>{copy.boardEyebrow}</p>
              <h3>{copy.boardTitle}</h3>
            </div>
            <div className="dial" aria-hidden="true">
              <span>{copy.dialLabel}</span>
              <i />
            </div>
          </Reveal>

          <div className="skill-groups">
            {groups.map((group, index) => {
              const Icon = skillIcons[index % skillIcons.length]
              return (
                <Reveal key={group.group} delay={index * 60}>
                  <article className="skill-group">
                    <div className="skill-group__heading">
                      <span>
                        <Icon size={17} aria-hidden="true" />
                      </span>
                      <h3>{group.group}</h3>
                      <small>{(index + 1).toString().padStart(2, '0')}</small>
                    </div>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item}>
                          <span aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
