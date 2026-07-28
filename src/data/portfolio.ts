/**
 * EDIT THIS FILE TO UPDATE THE WEBSITE.
 *
 * Every visible piece of portfolio copy, link, statistic, research experience,
 * current question and skill lives here. Blog articles live in ./blogs.ts.
 */

import pabloPortrait from '../assets/pablo-salazar.jpg'

export type SocialLink = {
  label: string
  href: string
  kind: 'github' | 'email' | 'bluesky' | 'cv'
}

export type NavigationItem = {
  label: string
  href: `#${string}`
  id: string
}

export type SectionCopy = {
  index: string
  eyebrow: string
  title: string
  description: string
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
  id: string
  index: string
  eyebrow: string
  title: string
  description: string
  workLabel: string
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

export const portfolio = {
  navigation: [
    { label: 'Focus', href: '#focus', id: 'focus' },
    { label: 'Research', href: '#research', id: 'research' },
    { label: 'Toolkit', href: '#toolkit', id: 'toolkit' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Blog', href: '#blog', id: 'blog' },
  ] satisfies NavigationItem[],
  person: {
    name: 'Pablo Salazar-Mendez',
    initials: 'PSM',
    role: 'Genomic Sciences undergraduate researcher',
    institution: 'National Autonomous University of Mexico',
    location: 'Morelos, Mexico',
    email: 'pablosm@lcg.unam.mx',
    portrait: pabloPortrait,
    portraitAlt: 'Portrait of Pablo Salazar-Mendez',
    eyebrow: 'Undergraduate research · UNAM',
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
  sectionCopy: {
    focus: {
      index: '01',
      eyebrow: 'Research focus',
      title: 'Biology, translated into questions a computer can test.',
      description:
        'Three connected areas shape the work: biological context, computational methods and careful evaluation.',
    },
    research: {
      index: '02',
      eyebrow: 'Research path',
      title: 'Learning inside real research environments.',
      description:
        'A timeline across genomics, systems biology, plant interactions and computational method assessment.',
    },
    toolkit: {
      index: '03',
      eyebrow: 'Working toolkit',
      title: 'Tools are useful. The questions come first.',
      description:
        'A practical toolkit for coding, biological data analysis and method evaluation—shown without made-up proficiency percentages.',
    },
    education: {
      index: '04',
      eyebrow: 'Education',
      title: 'A biological foundation, now sharpened with computation.',
      description:
        'Formal training at UNAM across biology and genomic sciences.',
    },
    blog: {
      index: '05',
      eyebrow: 'Blog',
      title: 'Research, methods and ideas—given room to unfold.',
      description:
        'Long-form articles about computational biology, code, experiments and lessons from the research process.',
    },
  } satisfies Record<string, SectionCopy>,
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
  researchPath: [
    {
      organization: 'International Laboratory for Human Genome Research',
      shortName: 'LIIGH · UNAM',
      location: 'Morelos, Mexico',
      role: 'Research intern',
      group: 'Evolutionary Systems Biology Lab',
      mentor: 'Mariana Gomez-Schiavon',
      period: 'Jun 2026 — Present',
      startYear: '2026',
      current: true,
      href: 'https://mgschiavon.org',
    },
    {
      organization: 'Center for Genomic Sciences',
      shortName: 'CCG · UNAM',
      location: 'Morelos, Mexico',
      role: 'Undergraduate researcher',
      group: 'Computational Systems Biology Lab',
      mentor: 'Dr. Julio A. Freyre-Gonzalez',
      period: 'Jan 2025 — Present',
      startYear: '2025',
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
      period: 'Sep 2025 — May 2026',
      startYear: '2025',
      current: false,
    },
    {
      organization: 'School of Chemistry',
      shortName: 'FQ · UNAM',
      location: 'Mexico City, Mexico',
      role: 'Undergraduate researcher',
      group: 'Organelar Genomics Lab',
      mentor: 'Dr. Miguel Palomar-Olguin',
      period: 'Jan 2023 — Aug 2023',
      startYear: '2023',
      current: false,
    },
  ] satisfies ResearchExperience[],
  currentQuestions: [
    {
      id: 'bayesian-inference',
      index: 'R.01',
      eyebrow: 'Evolutionary systems biology',
      title: 'Bayesian parameter inference in Julia',
      description:
        'Research internship at the International Laboratory for Human Genome Research (UNAM), in the Evolutionary Systems Biology Lab led by Mariana Gomez-Schiavon.',
      workLabel: 'Current implementation',
      question:
        'Implemented Bayesian algorithms in Julia named BayFISH and Poisson Mixture with a Piecewise Deterministic Markov Switching Rate, both focused on inferring the most likely set of parameters of a given model that explains the data.',
      methods: [
        'BayFISH',
        'Poisson mixture',
        'PDMP switching rates',
        'Julia',
      ],
      visual: 'sequence',
    },
    {
      id: 'networks',
      index: 'R.02',
      eyebrow: 'Algorithm assessment',
      title: 'Fair comparison of complex networks',
      description:
        'Benchmarking structural and topological comparison methods through memory, runtime and bias assessment.',
      workLabel: 'Working question',
      question:
        'When two methods disagree, is the difference biological, computational or methodological?',
      methods: ['Benchmarking', 'Network topology', 'Bias assessment', 'Reproducibility'],
      visual: 'network',
    },
  ] satisfies FocusProject[],
  toolkit: [
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
  contactCopy: {
    eyebrow: 'Contact',
    prompt: 'Questions, collaborations or a good dataset?',
    title: 'Let’s compare notes.',
    footer: 'Built for curiosity. Edited from GitHub.',
  },
}
