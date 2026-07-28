import { ArrowRight, FlaskConical } from 'lucide-react'
import { useState } from 'react'
import type { FocusProject } from '../data/portfolio'
import { ResearchVisual } from './ResearchVisual'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

type FocusExplorerProps = {
  focusAreas: {
    code: string
    title: string
    description: string
  }[]
  projects: FocusProject[]
}

export function FocusExplorer({
  focusAreas,
  projects,
}: FocusExplorerProps) {
  const [activeId, setActiveId] = useState<FocusProject['id']>(projects[0].id)
  const activeProject =
    projects.find((project) => project.id === activeId) ?? projects[0]

  return (
    <section className="section section--focus" id="focus">
      <div className="container">
        <Reveal>
          <SectionHeading
            index="01"
            eyebrow="Research focus"
            title="Biology, translated into questions a computer can test."
            description="Three connected areas shape the work: biological context, computational methods and careful evaluation."
          />
        </Reveal>

        <div className="focus-cards">
          {focusAreas.map((area, index) => (
            <Reveal key={area.code} delay={index * 70}>
              <article className="focus-card">
                <div className="focus-card__top">
                  <span>{area.code}</span>
                  <FlaskConical size={18} aria-hidden="true" />
                </div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="project-lab" delay={120}>
          <div className="project-lab__tabs" role="tablist">
            <span className="project-lab__label">Current questions</span>
            {projects.map((project) => (
              <button
                key={project.id}
                type="button"
                role="tab"
                id={`tab-${project.id}`}
                aria-controls={`panel-${project.id}`}
                aria-selected={activeId === project.id}
                onClick={() => setActiveId(project.id)}
              >
                <span>{project.index}</span>
                {project.eyebrow}
              </button>
            ))}
          </div>

          <div
            className="project-lab__panel"
            role="tabpanel"
            id={`panel-${activeProject.id}`}
            aria-labelledby={`tab-${activeProject.id}`}
            key={activeProject.id}
          >
            <div className="project-lab__copy">
              <span className="project-index">{activeProject.index}</span>
              <p className="project-eyebrow">{activeProject.eyebrow}</p>
              <h3>{activeProject.title}</h3>
              <p className="project-description">{activeProject.description}</p>
              <blockquote>
                <span>Working question</span>
                {activeProject.question}
              </blockquote>
              <div className="method-list" aria-label="Methods and topics">
                {activeProject.methods.map((method) => (
                  <span key={method}>{method}</span>
                ))}
              </div>
              <a href="#research">
                See research timeline <ArrowRight size={15} aria-hidden="true" />
              </a>
            </div>
            <ResearchVisual type={activeProject.visual} />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

