import {
  ArrowUpRight,
  Download,
  GitBranch,
  Mail,
  MessageCircle,
} from 'lucide-react'
import type { SocialLink } from '../data/portfolio'
import { Reveal } from './Reveal'

type ContactProps = {
  person: {
    name: string
    role: string
    institution: string
    email: string
  }
  socials: SocialLink[]
  copy: {
    eyebrow: string
    prompt: string
    title: string
    footer: string
  }
}

const iconByKind = {
  github: GitBranch,
  email: Mail,
  bluesky: MessageCircle,
  cv: Download,
}

export function Contact({ person, socials, copy }: ContactProps) {
  return (
    <footer className="contact" id="contact">
      <div className="contact__orb contact__orb--one" aria-hidden="true" />
      <div className="contact__orb contact__orb--two" aria-hidden="true" />
      <div className="container contact__inner">
        <Reveal className="contact__eyebrow">
          <span>06</span>
          <span>{copy.eyebrow}</span>
        </Reveal>

        <Reveal className="contact__headline" delay={60}>
          <p>{copy.prompt}</p>
          <h2>{copy.title}</h2>
        </Reveal>

        <Reveal className="contact__grid" delay={120}>
          <div className="contact__profile">
            <span className="contact__initials" aria-hidden="true">
              PSM
            </span>
            <div>
              <strong>{person.name}</strong>
              <span>{person.role}</span>
              <span>{person.institution}</span>
            </div>
          </div>
          <div className="contact__links">
            {socials.map((social) => {
              const Icon = iconByKind[social.kind]
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.kind === 'email' ? undefined : '_blank'}
                  rel={social.kind === 'email' ? undefined : 'noreferrer'}
                >
                  <span>
                    <Icon size={17} aria-hidden="true" />
                    {social.label}
                  </span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              )
            })}
          </div>
        </Reveal>

        <div className="contact__footer">
          <span>© {new Date().getFullYear()} {person.name}</span>
          <span>{copy.footer}</span>
          <a href={`mailto:${person.email}`}>{person.email}</a>
        </div>
      </div>
    </footer>
  )
}
