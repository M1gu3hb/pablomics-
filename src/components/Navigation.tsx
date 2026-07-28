import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { NavigationItem, Portfolio, SocialLink } from '../data/portfolio'
import { ThemeToggle } from './ThemeToggle'

type NavigationProps = {
  person: {
    initials: string
    name: string
    brandLines: string[]
  }
  socials: SocialLink[]
  items: NavigationItem[]
  isBlogRoute: boolean
  copy: Portfolio['interfaceCopy']['navigation']
  themeCopy: Portfolio['interfaceCopy']['theme']
}

export function Navigation({
  person,
  socials,
  items,
  isBlogRoute,
  copy,
  themeCopy,
}: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const cv = socials.find((social) => social.kind === 'cv')

  useEffect(() => {
    if (isBlogRoute) return

    const sections = items
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
  }, [isBlogRoute, items])

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false)
    window.addEventListener('resize', closeMenu)
    return () => window.removeEventListener('resize', closeMenu)
  }, [])

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label={copy.ariaLabel}>
        <a
          className="brand"
          href={isBlogRoute ? '/' : '#top'}
          aria-label={`${person.name}, ${copy.homeLabel}`}
        >
          <span className="brand__mark" aria-hidden="true">
            {person.initials}
          </span>
          <span className="brand__name">
            {person.brandLines.map((line, index) => (
              <span key={line}>
                {line}
                {index < person.brandLines.length - 1 ? <br /> : null}
              </span>
            ))}
          </span>
        </a>

        <div
          className={`nav-menu ${menuOpen ? 'nav-menu--open' : ''}`}
          id="primary-menu"
        >
          {items.map((item) => (
            <a
              key={item.id}
              className={activeSection === item.id ? 'is-active' : ''}
              href={isBlogRoute ? `/${item.href}` : item.href}
              aria-current={activeSection === item.id ? 'location' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <ThemeToggle copy={themeCopy} />
          {cv ? (
            <a
              className="nav-cv"
              href={cv.href}
              target="_blank"
              rel="noreferrer"
            >
              {copy.cvLabel} <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          ) : null}
          <button
            className="menu-toggle"
            type="button"
            aria-label={
              menuOpen ? copy.closeMenuLabel : copy.openMenuLabel
            }
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
