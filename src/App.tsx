import { useEffect } from 'react'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { FocusExplorer } from './components/FocusExplorer'
import { Hero } from './components/Hero'
import { Navigation } from './components/Navigation'
import { Notes } from './components/Notes'
import { Research } from './components/Research'
import { Skills } from './components/Skills'
import { portfolio } from './data/portfolio'

export function App() {
  useEffect(() => {
    const sectionId = window.location.hash.slice(1)
    if (!sectionId) return

    let cancelled = false
    const scrollToSection = () => {
      if (cancelled) return
      document.getElementById(sectionId)?.scrollIntoView()
    }

    const frame = window.requestAnimationFrame(scrollToSection)
    window.addEventListener('load', scrollToSection, { once: true })
    void document.fonts.ready.then(scrollToSection)

    return () => {
      cancelled = true
      window.cancelAnimationFrame(frame)
      window.removeEventListener('load', scrollToSection)
    }
  }, [])

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navigation person={portfolio.person} socials={portfolio.socials} />
      <main id="main-content">
        <Hero
          person={portfolio.person}
          metrics={portfolio.metrics}
          socials={portfolio.socials}
        />
        <FocusExplorer
          focusAreas={portfolio.focusAreas}
          projects={portfolio.projects}
        />
        <Research experiences={portfolio.research} />
        <Skills groups={portfolio.skills} />
        <Education items={portfolio.education} />
        <Notes notes={portfolio.notes} />
        <Contact person={portfolio.person} socials={portfolio.socials} />
      </main>
    </>
  )
}
