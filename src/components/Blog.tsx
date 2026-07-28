import { ArrowUpRight, BookOpenText, PenLine } from 'lucide-react'
import type { BlogPost } from '../data/blogs'
import type { SectionCopy } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

type BlogProps = {
  posts: BlogPost[]
  copy: SectionCopy
}

export function Blog({ posts, copy }: BlogProps) {
  const publishedPosts = posts.filter((post) => post.published)

  return (
    <section className="section section--blog" id="blog">
      <div className="container">
        <Reveal>
          <SectionHeading {...copy} />
        </Reveal>

        {publishedPosts.length > 0 ? (
          <div className="blog-grid">
            {publishedPosts.map((post, index) => (
              <Reveal
                className={post.featured ? 'blog-card-wrap is-featured' : 'blog-card-wrap'}
                key={post.slug}
                delay={index * 60}
              >
                <article className="blog-card">
                  <div className="blog-card__meta">
                    <span>{post.category}</span>
                    <time dateTime={post.publishedAt}>{post.displayDate}</time>
                  </div>
                  <div className="blog-card__number" aria-hidden="true">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.summary}</p>
                  <div className="blog-card__footer">
                    <span>{post.readTime}</span>
                    <a href={`/blog/${post.slug}`}>
                      Read article <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="blog-empty" delay={70}>
            <div className="blog-empty__icon">
              <PenLine size={26} aria-hidden="true" />
            </div>
            <div>
              <span>Research blog · Volume 01</span>
              <h3>Writing begins here.</h3>
              <p>
                Articles will appear here as soon as they are published from{' '}
                <code>src/data/blogs.ts</code>.
              </p>
            </div>
            <div className="blog-empty__mark" aria-hidden="true">
              <BookOpenText size={42} />
              <span>PSM</span>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}

