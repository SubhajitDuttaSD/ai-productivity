const CARDS = [
  {
    title: 'Structured content',
    text: 'Model your data once and reuse it across every surface in your product.',
    variant: '',
  },
  {
    title: 'Real-time collaboration',
    text: 'Ship faster with live previews and shared editing for your whole team.',
    variant: 'body-card--accent',
  },
  {
    title: 'Composable APIs',
    text: 'Query, mutate, and subscribe with a single typed client layer.',
    variant: 'body-card--green',
  },
] as const

const DARK_CARDS = [
  {
    title: 'Media pipeline',
    text: 'Transform and deliver assets with automatic optimization.',
  },
  {
    title: 'Access control',
    text: 'Fine-grained roles and permissions for every document type.',
  },
  {
    title: 'Webhooks',
    text: 'React to changes instantly across your infrastructure.',
  },
] as const

function CardGrid({
  cards,
}: {
  cards: readonly { title: string; text: string; variant?: string }[]
}) {
  return (
    <>
      {cards.map((card) => (
        <article
          key={card.title}
          className={`body-card span-4 font-body ${card.variant ?? ''}`}
        >
          <div className="body-card__media" aria-hidden />
          <h3 className="body-card__title">{card.title}</h3>
          <p className="body-card__text">{card.text}</p>
        </article>
      ))}
    </>
  )
}

export function BodyGrid() {
  return (
    <div className="app__main">
      <section className="page body-section">
        <div className="grid-12">
          <header className="body-section__header span-12 font-body">
            <h2>Build with a CSS-first system</h2>
            <p>
              Twelve-column grid, design tokens, and intentional hover contrast
              between navigation and content.
            </p>
          </header>
          <CardGrid cards={CARDS} />
        </div>
      </section>

      <section className="body-section body-section--dark">
        <div className="page">
          <header className="body-section__header font-body">
            <h2>Dark section tokens</h2>
            <p>Inverted palette using the same spacing and grid variables.</p>
          </header>
          <div className="grid-12">
            <CardGrid cards={DARK_CARDS} />
          </div>
        </div>
      </section>
    </div>
  )
}
