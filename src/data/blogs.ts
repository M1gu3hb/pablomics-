/**
 * EDIT THIS FILE TO PUBLISH BLOG ARTICLES.
 *
 * Each object inside `blogs` becomes one article card and one dedicated page
 * at /blog/its-slug. Keep `published: false` while an article is a draft.
 */

export type BlogCategory = 'Research' | 'Methods' | 'Code' | 'Fieldwork'

export type BlogSection = {
  id: string
  title: string
  paragraphs: string[]
  highlights?: string[]
  quote?: string
  callout?: {
    title?: string
    content: string
  }
  code?: {
    language: string
    content: string
  }
}

export type BlogPost = {
  slug: string
  title: string
  summary: string
  introduction: string
  publishedAt: string
  displayDate: string
  readTime: string
  category: BlogCategory
  featured: boolean
  published: boolean
  sections: BlogSection[]
}

/**
 * Copy this template inside `blogs` to create an article:
 *
 * {
 *   slug: 'short-title-with-hyphens',
 *   title: 'The title readers will see',
 *   summary: 'One concise sentence for the card and search description.',
 *   introduction: 'The opening paragraph on the article page.',
 *   publishedAt: '2026-08-15',
 *   displayDate: 'August 15, 2026',
 *   readTime: '6 min read',
 *   category: 'Research',
 *   featured: true,
 *   published: true,
 *   sections: [
 *     {
 *       id: 'first-section',
 *       title: 'First section',
 *       paragraphs: [
 *         'Write one paragraph per quoted line inside this array.',
 *         'Add as many paragraphs as the article needs.',
 *       ],
 *       highlights: ['Optional key point', 'Another optional key point'],
 *       quote: 'An optional pull quote.',
 *       callout: {
 *         title: 'Optional highlighted block title',
 *         content: 'A short result, warning or idea to emphasize.',
 *       },
 *     },
 *   ],
 * },
 */
export const blogs: BlogPost[] = []

/**
 * This unlisted article exists only to preview the finished reading layout at
 * /blog/design-preview?preview=1. It never appears in the public Blog grid.
 */
export const blogDesignPreview: BlogPost = {
  slug: 'design-preview',
  title: 'A research question becomes a computational experiment',
  summary: 'An unlisted article used only to preview the blog reading layout.',
  introduction:
    'Good computational work begins before the code: with a biological question precise enough to test and honest enough to revise.',
  publishedAt: '2026-07-28',
  displayDate: 'Design preview',
  readTime: '5 min read',
  category: 'Methods',
  featured: false,
  published: false,
  sections: [
    {
      id: 'question',
      title: 'Start with the question',
      paragraphs: [
        'A useful research question defines what evidence could change the answer. That constraint shapes the data, the model and the evaluation strategy.',
        'The goal is not to make the pipeline look complicated. It is to make every decision traceable.',
      ],
      highlights: [
        'Define the biological claim.',
        'Choose the evidence that could challenge it.',
        'Record assumptions before fitting a model.',
      ],
      callout: {
        title: 'Working principle',
        content:
          'Every computational choice should remain connected to the biological claim it is meant to test.',
      },
    },
    {
      id: 'implementation',
      title: 'Turn assumptions into code',
      paragraphs: [
        'Once assumptions are explicit, implementation becomes a sequence of testable choices instead of an opaque workflow.',
      ],
      quote:
        'A model is useful when its assumptions remain visible after the code starts running.',
      code: {
        language: 'Julia',
        content:
          'parameters = infer(model, observations)\nvalidate(parameters, held_out_data)',
      },
    },
  ],
}
