export const navigationItems = [
  {
    id: 'platform',
    label: 'Platform',
    links: ['Agents', 'Workflows', 'Knowledge base'],
  },
  {
    id: 'solutions',
    label: 'Solutions',
    links: ['Product teams', 'Engineering', 'Operations'],
  },
  {
    id: 'resources',
    label: 'Resources',
    links: ['Playbooks', 'Templates', 'Community'],
  },
] as const

export const heroStats = [
  { value: '12x', label: 'faster research loops' },
  { value: '48h', label: 'from idea to live workflow' },
  { value: '99%', label: 'reusable context layer' },
] as const

export const featureCards = [
  {
    eyebrow: 'Context',
    title: 'One workspace for decisions, prompts, and outcomes.',
    text: 'Collect team context, transform it into repeatable prompts, and make every workflow traceable.',
    accent: 'brand',
  },
  {
    eyebrow: 'Automation',
    title: 'Run motion-rich workflows without losing control.',
    text: 'Human checkpoints, reusable agents, and clear review states keep automation understandable.',
    accent: 'blue',
  },
  {
    eyebrow: 'Delivery',
    title: 'Ship the best version of your idea with less churn.',
    text: 'Turn notes into launch assets, documentation, UI copy, and task plans from a shared source.',
    accent: 'green',
  },
] as const

export const processSteps = [
  'Capture raw context',
  'Generate structured options',
  'Review with your team',
  'Publish repeatable workflows',
] as const

export const contactLinks = [
  { label: 'hello@aiproductivity.studio', href: 'mailto:hello@aiproductivity.studio' },
  { label: '+91 98765 43210', href: 'tel:+919876543210' },
  { label: 'Bengaluru, India', href: 'https://maps.google.com' },
] as const
