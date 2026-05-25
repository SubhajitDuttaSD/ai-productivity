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

export const problemCards = [
  {
    icon: 'clock',
    title: 'Developers stuck in approval queues',
    text: 'Your best engineers spend days waiting for access, environments, and ticket approvals instead of writing code.',
  },
  {
    icon: 'wrench',
    title: 'Fragmented tooling causing brittle deploys',
    text: 'Every team uses different tools, pipelines break unpredictably, and on-call means firefighting broken deployments.',
  },
  {
    icon: 'trend',
    title: 'Scaling without standardised golden paths',
    text: 'Adding headcount makes inconsistency worse. Platform standards drift and each new team invents its own way of shipping.',
  },
] as const

export const capabilityCards = [
  {
    label: '01 - Organize',
    title: 'Capture the context behind every decision',
    text: 'Turn scattered notes, prompts, research, and meeting outcomes into a structured knowledge layer your team can reuse.',
    tone: 'blue',
    items: [
      'Central prompt and decision library',
      'Project briefs with reusable context blocks',
      'Source links, owners, and review status',
      'Team-specific operating rules',
      'Clean handoff notes for every workflow',
    ],
  },
  {
    label: '02 - Automate',
    title: 'Convert repeat work into guided workflows',
    text: 'Build repeatable AI-assisted flows for planning, content, research, documentation, and launch tasks without losing human checkpoints.',
    tone: 'yellow',
    items: [
      'Reusable task templates for each team',
      'Agent instructions with approval gates',
      'Draft generation for docs and launch assets',
      'Structured reviews before anything ships',
      'Workflow variants for different project types',
    ],
  },
  {
    label: '03 - Improve',
    title: 'Measure what actually makes the team faster',
    text: 'Track which workflows save time, where reviews slow down, and what should be promoted into your team operating system.',
    tone: 'pink',
    items: [
      'Before and after delivery snapshots',
      'Prompt and workflow quality signals',
      'Reusable patterns promoted from wins',
      'Lightweight audit trail for important outputs',
      'Improvement backlog based on real usage',
    ],
  },
] as const

export const timelinePhases = [
  {
    day: 'Phase 01',
    title: 'Design your platform blueprint',
    text: 'We start by clarifying where friction lives today and what a high-confidence platform path should look like.',
    bullets: [
      'Audit your current delivery and infrastructure.',
      'Align goals across engineering, security, and leadership.',
      'Map common workflows for golden paths.',
    ],
  },
  {
    day: 'Phase 02',
    title: 'Build your MVP developer platform',
    text: 'Next we turn the blueprint into a working platform foundation teams can start using and validating.',
    bullets: [
      'Deploy operational IDP on proven AWS/GCP patterns.',
      'Create self-service workflows and templates.',
      'Instrument feedback loops and adoption metrics.',
    ],
  },
  {
    day: 'Phase 03',
    title: 'Scale adoption across teams',
    text: 'Finally we harden the workflows, document the operating model, and prepare your team to own the platform.',
    bullets: [
      'Roll out paved roads to priority teams.',
      'Create governance without blocking delivery.',
      'Hand over a sustainable platform roadmap.',
    ],
  },
] as const

export const processSteps = [
  'Capture raw context',
  'Generate structured options',
  'Review with your team',
  'Publish repeatable workflows',
] as const

export const scrollShowcaseCards = [
  {
    label: 'Content-as-data',
    title: 'Structure your team knowledge before AI touches it.',
    text: 'Convert decisions, prompts, project context, and reusable instructions into clean blocks that every workflow can understand.',
    code: 'context.block({ owner, source, status, prompt })',
    bullets: ['Reusable context blocks', 'Clear ownership metadata', 'Decision history for every output'],
    previewTitle: 'Context Library',
    previewFields: [
      ['Owner', 'Product Ops'],
      ['Status', 'Ready for reuse'],
      ['Source', 'Sprint planning notes'],
    ],
  },
  {
    label: 'Editorial freedom',
    title: 'Let teams shape workflows without rebuilding the system.',
    text: 'Give each team focused views for research, launch planning, documentation, and review while keeping the source of truth shared.',
    code: 'workflow.view("launch").with(reviewers, rules)',
    bullets: ['Role-specific workspaces', 'Review states for every draft', 'Reusable templates by project type'],
    previewTitle: 'Launch Workspace',
    previewFields: [
      ['View', 'Launch planning'],
      ['Reviewers', '3 assigned'],
      ['Next state', 'Ready for approval'],
    ],
  },
  {
    label: 'Content agent',
    title: 'Ask agents to update, compare, and prepare work safely.',
    text: 'Use structured context and guardrails so agents can suggest changes, summarize patterns, and prepare outputs for human approval.',
    code: 'agent.propose({ task, context, approval: true })',
    bullets: ['Edit visuals with natural language', 'Research trends and topics', 'Prepare changes for revision'],
    previewTitle: 'Agent Proposal',
    previewFields: [
      ['Task', 'Normalize launch notes'],
      ['Confidence', 'High'],
      ['Approval', 'Required'],
    ],
  },
] as const

export const contactLinks = [
  { label: 'hello@aiproductivity.studio', href: 'mailto:hello@aiproductivity.studio' },
  { label: '+91 98765 43210', href: 'tel:+919876543210' },
  { label: 'Bengaluru, India', href: 'https://maps.google.com' },
] as const

export const footerColumns = [
  {
    title: 'Solutions',
    links: ['Agent ops', 'Product teams', 'Engineering', 'Content systems'],
  },
  {
    title: 'Resources',
    links: ['Blog', 'Case studies', 'Templates'],
  },
  {
    title: 'Company',
    links: ['About us', 'Careers', 'Apprenticeship'],
  },
] as const

export const legalLinks = ['Privacy policy', 'Terms of service'] as const
