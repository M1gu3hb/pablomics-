/**
 * EDIT THIS FILE TO UPDATE THE WEBSITE.
 *
 * Every visible piece of copy, link, statistic, research experience,
 * project and skill lives here. The components should rarely need edits.
 */

import pabloPortrait from '../assets/pablo-salazar.jpg'

export type SocialLink = {
  label: string
  href: string
  kind: 'github' | 'email' | 'bluesky' | 'cv'
}

export type ResearchExperience = {
  organization: string
  shortName: string
  location: string
  role: string
  group: string
  mentor: string
  period: string
  startYear: string
  current: boolean
  href?: string
}

export type FocusProject = {
  id: 'regulatory' | 'networks'
  index: string
  eyebrow: string
  title: string
  description: string
  question: string
  methods: string[]
  visual: 'sequence' | 'network'
}

export type EducationItem = {
  degree: string
  institution: string
  location: string
  period: string
  current: boolean
  href: string
}

export type Note = {
  title: string
  summary: string
  date: string
  category: 'Research' | 'Code' | 'Field note'
  href?: string
}

export const portfolio = {
  person: {
    name: 'Pablo Salazar-Mendez',
    initials: 'PSM',
    role: 'Genomic Sciences undergraduate researcher',
    institution: 'National Autonomous University of Mexico',
    location: 'Morelos, Mexico',
    email: 'pablosm@lcg.unam.mx',
    portrait: pabloPortrait,
    portraitAlt: 'Portrait of Pablo Salazar-Mendez',
    headline: 'Reading biological systems through code, networks & genomic data.',
    introduction:
      'I am a Genomic Sciences undergraduate student at UNAM interested in computational biology and bioinformatics. My current work explores plant regulatory systems and the fair benchmarking of methods for comparing complex networks.',
    shortBio:
      'I use Python and Julia to turn omic data into biologically and statistically meaningful questions.',
  },
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/pablomics-004',
      kind: 'github',
    },
    {
      label: 'Email',
      href: 'mailto:pablosm@lcg.unam.mx',
      kind: 'email',
    },
    {
      label: 'Bluesky',
      href: 'https://bsky.app/profile/pablomics-004.bsky.social',
      kind: 'bluesky',
    },
    {
      label: 'Download CV',
      href: 'https://docs.google.com/document/d/1jicPtkpFpaje2KxcX6Q22p1kb-Ui2l33lbsNbGqBdqQ/export?format=pdf',
      kind: 'cv',
    },
  ] satisfies SocialLink[],
  metrics: [
    { value: '02', label: 'current research groups' },
    { value: '04', label: 'research environments' },
    { value: '02', label: 'core coding languages' },
  ],
  focusAreas: [
    {
      code: '01',
      title: 'Computational biology',
      description:
        'Connecting biological questions with reproducible computational analysis.',
    },
    {
      code: '02',
      title: 'Network biology',
      description:
        'Studying structure, topology, comparison methods and potential biases.',
    },
    {
      code: '03',
      title: 'Plant regulation',
      description:
        'Exploring regulatory systems during development in Arabidopsis thaliana.',
    },
  ],
  research: [
    {
      organization: 'Center for Genomic Sciences',
      shortName: 'CCG · UNAM',
      location: 'Morelos, Mexico',
      role: 'Undergraduate researcher',
      group: 'Computational Systems Biology Lab',
      mentor: 'Dr. Julio A. Freyre-Gonzalez',
      period: 'Dec 2024 — Present',
      startYear: '2024',
      current: true,
      href: 'http://freyrelab.org/en/',
    },
    {
      organization: 'Institute of Biotechnology',
      shortName: 'IBT · UNAM',
      location: 'Morelos, Mexico',
      role: 'Undergraduate researcher',
      group: 'Plant–Microorganism Interaction Group',
      mentor: 'Dr. Luis Cardenas-Torres',
      period: 'Dec 2025 — Present',
      startYear: '2025',
      current: true,
    },
    {
      organization: 'International Laboratory for Human Genome Research',
      shortName: 'LIIGH · UNAM',
      location: 'Queretaro, Mexico',
      role: 'Observer',
      group: 'Evolutionary Systems Biology Lab',
      mentor: 'Dr. Mariana Gomez-Schiavon',
      period: 'Jan 2025 — Aug 2025',
      startYear: '2025',
      current: false,
      href: 'https://mgschiavon.org',
    },
    {
      organization: 'School of Chemistry',
      shortName: 'FQ · UNAM',
      location: 'Mexico City, Mexico',
      role: 'Undergraduate researcher',
      group: 'Organelar Genomics Lab',
      mentor: 'Dr. Miguel Palomar-Olguin',
      period: 'Jan 2025 — Aug 2025',
      startYear: '2025',
      current: false,
    },
  ] satisfies ResearchExperience[],
  projects: [
    {
      id: 'regulatory',
      index: 'R.01',
      eyebrow: 'Plant regulatory systems',
      title: 'Development in Arabidopsis thaliana',
      description:
        'Applying computational approaches to understand regulatory systems involved in plant development.',
      question:
        'How can omic data reveal biologically meaningful regulatory patterns across development?',
      methods: ['Omic data analysis', 'Regulatory systems', 'Python', 'Julia'],
      visual: 'sequence',
    },
    {
      id: 'networks',
      index: 'R.02',
      eyebrow: 'Algorithm assessment',
      title: 'Fair comparison of complex networks',
      description:
        'Benchmarking structural and topological comparison methods through memory, runtime and bias assessment.',
      question:
        'When two methods disagree, is the difference biological, computational or methodological?',
      methods: ['Benchmarking', 'Network topology', 'Bias assessment', 'Reproducibility'],
      visual: 'network',
    },
  ] satisfies FocusProject[],
  skills: [
    {
      group: 'Languages',
      items: ['Python', 'Julia'],
    },
    {
      group: 'Biological data',
      items: ['Omic datasets', 'Regulatory systems', 'Plant development'],
    },
    {
      group: 'Computational practice',
      items: ['Algorithm benchmarking', 'Network analysis', 'Reproducible research'],
    },
    {
      group: 'Evaluation',
      items: ['Runtime', 'Memory use', 'Method bias', 'Statistical patterns'],
    },
  ],
  education: [
    {
      degree: 'B.Sc. in Genomic Sciences',
      institution: 'National Autonomous University of Mexico',
      location: 'Morelos, Mexico',
      period: '2024 — Present',
      current: true,
      href: 'https://www.lcg.unam.mx',
    },
    {
      degree: 'B.Sc. studies in Biology',
      institution: 'National Autonomous University of Mexico',
      location: 'Mexico City, Mexico',
      period: '2023 — 2024',
      current: false,
      href: 'https://www.fciencias.unam.mx/estudiar-en-ciencias/estudios/licenciaturas/biologia',
    },
  ] satisfies EducationItem[],
  notes: [] satisfies Note[],
}
