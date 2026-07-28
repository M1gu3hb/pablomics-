import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { SocialLink } from '../data/portfolio'
import { ThemeToggle } from './ThemeToggle'

type NavigationProps = {
  person: {
    initials: string
    name: string
  }
  socials: SocialLink[]
}

const navItems = [
  { label: 'Focus', href: '#focus', id: 'focus' },
  { label: 'Research', href: '#research', id: 'research' },
  { label: 'Toolkit', href: '#toolkit', id: 'toolkit' },
  { label: 'Education', href: '#education', id: 'education' },
  { label: 'Notes', href: '#notes', id: 'notes' },
]

export function Navigation({ person, socials }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const cv = socials.find((social) => social.kind === 'cv')

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-18% 0px -68% 0px', threshold: [0, 0.25, 0.6] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false)
    window.addEventListener('resize', closeMenu)
    return () => window.removeEventListener('resize', closeMenu)
  }, [])

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label={`${person.name}, home`}>
          <span className="brand__mark" aria-hidden="true">
            {person.initials}
          </span>
          <span className="brand__name">
            Pablo
            <br />
            Salazar
          </span>
        </a>

        <div
          className={`nav-menu ${menuOpen ? 'nav-menu--open' : ''}`}
          id="primary-menu"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              className={activeSection === item.id ? 'is-active' : ''}
              href={item.href}
              aria-current={activeSection === item.id ? 'location' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <ThemeToggle />
          {cv ? (
            <a
              className="nav-cv"
              href={cv.href}
              target="_blank"
              rel="noreferrer"
            >
              CV <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          ) : null}
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-controls="primary-menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>
    </header>
  )
}

