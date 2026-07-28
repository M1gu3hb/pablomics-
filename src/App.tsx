import { useEffect } from 'react'
import { Blog } from './components/Blog'
import { BlogPost } from './components/BlogPost'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { FocusExplorer } from './components/FocusExplorer'
import { Hero } from './components/Hero'
import { Navigation } from './components/Navigation'
import { Research } from './components/Research'
import { Skills } from './components/Skills'
import { blogDesignPreview, blogs } from './data/blogs'
import { portfolio } from './data/portfolio'

export function App() {
  const blogSlug = window.location.pathname.match(/^\/blog\/([^/]+)\/?$/)?.[1]
  const previewRequested =
    new URLSearchParams(window.location.search).get('preview') === '1'
  const publishedBlogPost = blogSlug
    ? blogs.find((post) => post.slug === decodeURIComponent(blogSlug) && post.published)
    : undefined
  const blogPost =
    publishedBlogPost ??
    (previewRequested && blogSlug === blogDesignPreview.slug
      ? blogDesignPreview
      : undefined)
  const isBlogRoute = Boolean(blogSlug)

  useEffect(() => {
    if (isBlogRoute) return

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
  }, [isBlogRoute])

  return (
    <>
      <a className="skip-link" href="#main-content">
        {portfolio.interfaceCopy.skipLink}
      </a>
      <Navigation
        person={portfolio.person}
        socials={portfolio.socials}
        items={portfolio.navigation}
        isBlogRoute={isBlogRoute}
        copy={portfolio.interfaceCopy.navigation}
        themeCopy={portfolio.interfaceCopy.theme}
      />
      {isBlogRoute ? (
        <BlogPost post={blogPost} copy={portfolio.interfaceCopy.blogPost} />
      ) : (
        <main id="main-content">
          <Hero
            person={portfolio.person}
            metrics={portfolio.metrics}
            socials={portfolio.socials}
            copy={portfolio.interfaceCopy.hero}
          />
          <FocusExplorer
            focusAreas={portfolio.focusAreas}
            projects={portfolio.currentQuestions}
            copy={portfolio.sectionCopy.focus}
          />
          <Research
            experiences={portfolio.researchPath}
            copy={portfolio.sectionCopy.research}
          />
          <Skills
            groups={portfolio.toolkit}
            copy={portfolio.sectionCopy.toolkit}
          />
          <Education
            items={portfolio.education}
            copy={portfolio.sectionCopy.education}
          />
          <Blog posts={blogs} copy={portfolio.sectionCopy.blog} />
          <Contact
            person={portfolio.person}
            socials={portfolio.socials}
            copy={portfolio.contactCopy}
          />
        </main>
      )}
    </>
  )
}
