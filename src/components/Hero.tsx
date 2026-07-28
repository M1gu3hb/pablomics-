import { ArrowDown, ArrowUpRight, Braces, MapPin } from 'lucide-react'
import { type PointerEvent, useRef } from 'react'
import type { SocialLink } from '../data/portfolio'
import { Reveal } from './Reveal'

type HeroProps = {
  person: {
    name: string
    role: string
    institution: string
    location: string
    portrait: string
    portraitAlt: string
    eyebrow: string
    headline: string
    introduction: string
    shortBio: string
  }
  metrics: { value: string; label: string }[]
  socials: SocialLink[]
}

export function Hero({ person, metrics, socials }: HeroProps) {
  const frameRef = useRef<HTMLDivElement>(null)

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const frame = frameRef.current
    if (!frame || window.matchMedia('(prefers-reduced-motion: reduce)').matches)
      return

    const bounds = frame.getBoundingClientRect()
    const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5
    const vertical = (event.clientY - bounds.top) / bounds.height - 0.5
    frame.style.setProperty('--tilt-x', `${vertical * -5}deg`)
    frame.style.setProperty('--tilt-y', `${horizontal * 6}deg`)
    frame.style.setProperty('--spot-x', `${(horizontal + 0.5) * 100}%`)
    frame.style.setProperty('--spot-y', `${(vertical + 0.5) * 100}%`)
  }

  const resetTilt = () => {
    const frame = frameRef.current
    if (!frame) return
    frame.style.setProperty('--tilt-x', '0deg')
    frame.style.setProperty('--tilt-y', '0deg')
  }

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__grid">
        <div className="hero__content">
          <Reveal>
            <div className="hero__eyebrow">
              <span className="status-dot" aria-hidden="true" />
              <span>{person.eyebrow}</span>
            </div>
          </Reveal>

          <Reveal delay={70}>
            <h1 id="hero-title">{person.headline}</h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="hero__intro">{person.introduction}</p>
          </Reveal>

          <Reveal className="hero__links" delay={210}>
            {socials
              .filter((social) => social.kind !== 'cv')
              .map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.kind === 'email' ? undefined : '_blank'}
                  rel={social.kind === 'email' ? undefined : 'noreferrer'}
                >
                  {social.label}
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              ))}
          </Reveal>

          <Reveal className="hero__metrics" delay={280}>
            {metrics.map((metric) => (
              <div className="metric" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal className="hero__visual" delay={130}>
          <div
            ref={frameRef}
            className="identity-card"
            onPointerMove={handlePointerMove}
            onPointerLeave={resetTilt}
          >
            <div className="identity-card__shine" aria-hidden="true" />
            <div className="identity-card__topline">
              <span>Research ID</span>
              <span>PSM / 004</span>
            </div>
            <div className="identity-card__portrait">
              <img
                src={person.portrait}
                alt={person.portraitAlt}
                width="4080"
                height="3060"
                fetchPriority="high"
              />
              <span className="portrait-tab">Active</span>
            </div>
            <div className="identity-card__info">
              <div>
                <p>{person.name}</p>
                <span>{person.role}</span>
              </div>
              <span className="identity-card__code" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </span>
            </div>
            <div className="identity-card__location">
              <MapPin size={14} aria-hidden="true" />
              <span>{person.location}</span>
            </div>
          </div>

          <div className="floating-tag floating-tag--code">
            <Braces size={16} aria-hidden="true" />
            <span>Python · Julia</span>
          </div>
          <div className="floating-tag floating-tag--lab">
            <span className="floating-tag__glyph" aria-hidden="true">
              ∿
            </span>
            <span>Network biology</span>
          </div>
        </Reveal>
      </div>

      <div className="hero__footer">
        <p>{person.shortBio}</p>
        <a href="#focus">
          Explore the work <ArrowDown size={15} aria-hidden="true" />
        </a>
      </div>
      <div className="sequence-tape" aria-hidden="true">
        <span>ATG</span>
        <span>GCC</span>
        <span>TTA</span>
        <span>CGC</span>
        <span>AAC</span>
        <span>GGA</span>
        <span>TCT</span>
        <span>CAA</span>
        <span>ATG</span>
        <span>GCC</span>
        <span>TTA</span>
        <span>CGC</span>
      </div>
    </section>
  )
}
