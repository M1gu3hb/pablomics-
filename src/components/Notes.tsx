import { ArrowUpRight, PenLine } from 'lucide-react'
import type { Note } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

type NotesProps = {
  notes: Note[]
}

export function Notes({ notes }: NotesProps) {
  return (
    <section className="section section--notes" id="notes">
      <div className="container">
        <Reveal>
          <SectionHeading
            index="05"
            eyebrow="Field notes"
            title="A place for methods, mistakes and things worth remembering."
            description="Short notes can be published here directly from the website’s single content file."
          />
        </Reveal>

        {notes.length > 0 ? (
          <div className="notes-grid">
            {notes.map((note, index) => (
              <Reveal key={`${note.title}-${note.date}`} delay={index * 60}>
                <article className="note-card">
                  <div className="note-card__meta">
                    <span>{note.category}</span>
                    <time dateTime={note.date}>{note.date}</time>
                  </div>
                  <h3>{note.title}</h3>
                  <p>{note.summary}</p>
                  {note.href ? (
                    <a href={note.href}>
                      Read note <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="notes-empty" delay={70}>
            <div className="notes-empty__icon">
              <PenLine size={26} aria-hidden="true" />
            </div>
            <div>
              <span>Research log · Volume 01</span>
              <h3>Writing begins here.</h3>
              <p>
                No placeholder articles. New notes will appear as soon as they
                are added to <code>src/data/portfolio.ts</code>.
              </p>
            </div>
            <div className="notes-empty__lines" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}

