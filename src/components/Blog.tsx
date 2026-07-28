import { ArrowUpRight, BookOpenText, PenLine } from 'lucide-react'
import type { BlogPost } from '../data/blogs'
import type { Portfolio } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

type BlogProps = {
  posts: BlogPost[]
  copy: Portfolio['sectionCopy']['blog']
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
                      {copy.readArticleLabel}{' '}
                      <ArrowUpRight size={15} aria-hidden="true" />
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
              <span>{copy.emptyEyebrow}</span>
              <h3>{copy.emptyTitle}</h3>
              <p>{copy.emptyDescription}</p>
            </div>
            <div className="blog-empty__mark" aria-hidden="true">
              <BookOpenText size={42} />
              <span>{copy.emptyMark}</span>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}

