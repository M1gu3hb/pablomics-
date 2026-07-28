import { ArrowLeft, ArrowUpRight, Clock3 } from 'lucide-react'
import { useEffect } from 'react'
import type { BlogPost as BlogPostData } from '../data/blogs'

type BlogPostProps = {
  post?: BlogPostData
}

export function BlogPost({ post }: BlogPostProps) {
  useEffect(() => {
    if (!post) {
      document.title = 'Article not found — Pablo Salazar-Mendez'
      return
    }

    document.title = `${post.title} — Pablo Salazar-Mendez`
    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    )
    const previousDescription = description?.content
    if (description) description.content = post.summary

    return () => {
      document.title = 'Pablo Salazar-Mendez — Genomic Sciences'
      if (description && previousDescription) {
        description.content = previousDescription
      }
    }
  }, [post])

  if (!post) {
    return (
      <main className="blog-not-found" id="main-content">
        <span>404 · Research log</span>
        <h1>This article is not in the notebook.</h1>
        <p>
          The link may have changed, or the article may still be a private
          draft.
        </p>
        <a href="/#blog">
          <ArrowLeft size={16} aria-hidden="true" />
          Return to the blog
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
            All articles
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
            <span>Article specimen</span>
            <strong>PSM / BLOG</strong>
            <i />
          </div>
        </div>
      </header>

      <div className="blog-post__layout">
        <aside className="blog-post__contents" aria-label="Article contents">
          <span>On this page</span>
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
          <span>End of entry</span>
          <strong>Continue exploring the research notebook.</strong>
        </div>
        <a href="/#blog">
          Back to the blog <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </footer>
    </main>
  )
}
