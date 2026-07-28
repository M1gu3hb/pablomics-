import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import { BlogPost } from '../src/components/BlogPost'
import { Contact } from '../src/components/Contact'
import { FocusExplorer } from '../src/components/FocusExplorer'
import type { BlogPost as BlogPostData } from '../src/data/blogs'
import { portfolio } from '../src/data/portfolio'

describe('editable content states', () => {
  it('renders an empty Current Questions state without crashing', () => {
    expect(() =>
      renderToStaticMarkup(
        <FocusExplorer
          focusAreas={[]}
          projects={[]}
          copy={portfolio.sectionCopy.focus}
        />,
      ),
    ).not.toThrow()
  })

  it('renders a highlighted blog callout supplied by blogs.ts', () => {
    const post = {
      slug: 'test-article',
      title: 'Test article',
      summary: 'Summary',
      introduction: 'Introduction',
      publishedAt: '2026-07-28',
      displayDate: 'July 28, 2026',
      readTime: '1 min read',
      category: 'Methods',
      featured: false,
      published: true,
      sections: [
        {
          id: 'result',
          title: 'Result',
          paragraphs: ['A result paragraph.'],
          callout: {
            title: 'Key result',
            content: 'This is the highlighted result.',
          },
        },
      ],
    } as BlogPostData

    const html = renderToStaticMarkup(
      <BlogPost post={post} copy={portfolio.interfaceCopy.blogPost} />,
    )

    expect(html).toContain('Key result')
    expect(html).toContain('This is the highlighted result.')
  })

  it('gives contact links explicit accessible names', () => {
    const html = renderToStaticMarkup(
      <Contact
        person={portfolio.person}
        socials={portfolio.socials}
        copy={portfolio.contactCopy}
      />,
    )

    for (const social of portfolio.socials) {
      expect(html).toContain(`aria-label="${social.label}"`)
    }
  })
})
