import { ArrowLeft, ArrowUpRight, Clock3 } from 'lucide-react'
import { useEffect } from 'react'
import type { BlogPost as BlogPostData } from '../data/blogs'
import type { Portfolio } from '../data/portfolio'

type BlogPostProps = {
  post?: BlogPostData
  copy: Portfolio['interfaceCopy']['blogPost']
}

export function BlogPost({ post, copy }: BlogPostProps) {
  useEffect(() => {
    if (!post) {
      document.title = copy.notFoundPageTitle
      return
    }

    document.title = `${post.title} — ${copy.titleSuffix}`
    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    )
    const previousDescription = description?.content
    if (description) description.content = post.summary

    return () => {
      document.title = copy.defaultPageTitle
      if (description && previousDescription) {
        description.content = previousDescription
      }
    }
  }, [copy, post])

  if (!post) {
    return (
      <main className="blog-not-found" id="main-content">
        <span>{copy.notFoundEyebrow}</span>
        <h1>{copy.notFoundTitle}</h1>
        <p>{copy.notFoundDescription}</p>
        <a href="/#blog">
          <ArrowLeft size={16} aria-hidden="true" />
          {copy.returnLabel}
        </a>
      </main>
    )
  }

  return (
    <main className="blog-post" id="main-content">
      <header className="blog-post__hero">
        <div className="blog-post__sequence" aria-hidden="true">
          <span>A</span>
          <span>T</span>
          <span>G</span>
          <span>C</span>
          <span>0</span>
          <span>1</span>
        </div>
        <div className="blog-post__hero-inner">
          <a className="blog-post__back" href="/#blog">
            <ArrowLeft size={15} aria-hidden="true" />
            {copy.allArticlesLabel}
          </a>
          <div className="blog-post__meta">
            <span>{post.category}</span>
            <time dateTime={post.publishedAt}>{post.displayDate}</time>
            <span>
              <Clock3 size={13} aria-hidden="true" />
              {post.readTime}
            </span>
          </div>
          <h1>{post.title}</h1>
          <p>{post.introduction}</p>
          <div className="blog-post__specimen" aria-hidden="true">
            <span>{copy.specimenLabel}</span>
            <strong>{copy.specimenCode}</strong>
            <i />
          </div>
        </div>
      </header>

      <div className="blog-post__layout">
        <aside
          className="blog-post__contents"
          aria-label={copy.contentsAriaLabel}
        >
          <span>{copy.contentsLabel}</span>
          <nav>
            {post.sections.map((section, index) => (
              <a href={`#${section.id}`} key={section.id}>
                <span>{(index + 1).toString().padStart(2, '0')}</span>
                {section.title}
              </a>
            ))}
          </nav>
        </aside>

        <article className="blog-post__body">
          {post.sections.map((section, index) => (
            <section id={section.id} key={section.id}>
              <div className="blog-post__section-index">
                {(index + 1).toString().padStart(2, '0')}
              </div>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.highlights?.length ? (
                <ul>
                  {section.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              ) : null}
              {section.quote ? <blockquote>{section.quote}</blockquote> : null}
              {section.callout ? (
                <aside className="blog-callout">
                  {section.callout.title ? (
                    <strong>{section.callout.title}</strong>
                  ) : null}
                  <p>{section.callout.content}</p>
                </aside>
              ) : null}
              {section.code ? (
                <div className="blog-code">
                  <span>{section.code.language}</span>
                  <pre>
                    <code>{section.code.content}</code>
                  </pre>
                </div>
              ) : null}
            </section>
          ))}
        </article>
      </div>

      <footer className="blog-post__footer">
        <div>
          <span>{copy.endLabel}</span>
          <strong>{copy.endDescription}</strong>
        </div>
        <a href="/#blog">
          {copy.backLabel} <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </footer>
    </main>
  )
}
