import { AnimatePresence, motion } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'
import { useRef, useState } from 'react'
import { scrollShowcaseCards } from '../../data/siteContent'

export function SyncedScrollSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const cardRefs = useRef<(HTMLElement | null)[]>([])
  const activeCard = scrollShowcaseCards[activeIndex]

  const scrollToCard = (index: number) => {
    cardRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <section className="sync-showcase page" id="agents">
      <div className="sync-showcase__layout">
        <aside className="sync-showcase__side sync-showcase__side--left">
          <ol className="sync-showcase__nav">
            {scrollShowcaseCards.map((card, index) => (
              <li key={card.label}>
                <button
                  type="button"
                  className={index === activeIndex ? 'sync-showcase__nav-item sync-showcase__nav-item--active' : 'sync-showcase__nav-item'}
                  onClick={() => scrollToCard(index)}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {card.label}
                </button>
              </li>
            ))}
          </ol>

          <AnimatePresence mode="wait">
            <motion.div
              className="sync-showcase__details"
              key={activeCard.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
            >
              <p className="font-nav nav-label">{activeCard.label}</p>
              <h2>{activeCard.title}</h2>
              <p>{activeCard.text}</p>
              <ul>
                {activeCard.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </aside>

        <div className="sync-showcase__middle" aria-label="Scrollable feature story">
          {scrollShowcaseCards.map((card, index) => (
            <motion.article
              className={index === activeIndex ? 'sync-showcase-card sync-showcase-card--active' : 'sync-showcase-card'}
              key={card.title}
              ref={(element) => {
                cardRefs.current[index] = element
              }}
              onViewportEnter={() => setActiveIndex(index)}
              viewport={{ amount: 0.58, margin: '-20% 0px -20% 0px' }}
              initial={{ opacity: 0.25, scale: 0.92, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.42, ease: 'easeOut' }}
            >
              <span className="sync-showcase-card__number font-nav">{String(index + 1).padStart(2, '0')}</span>
              <p className="sync-showcase-card__label font-nav nav-label">{card.label}</p>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <code>{card.code}</code>
            </motion.article>
          ))}
        </div>

        <aside className="sync-showcase__side sync-showcase__side--right">
          <AnimatePresence mode="wait">
            <motion.div
              className="sync-studio"
              key={activeCard.previewTitle}
              initial={{ opacity: 0, x: 24, filter: 'blur(8px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: -24, filter: 'blur(8px)' }}
              transition={{ duration: 0.24, ease: 'easeOut' }}
            >
              <div className="sync-studio__bar">
                <span>
                  <Sparkles size={14} aria-hidden />
                  Studio
                </span>
                <span className="sync-studio__status">Live</span>
              </div>
              <div className="sync-studio__crumb font-nav">Content / {activeCard.previewTitle} /</div>
              <div className="sync-studio__notice">
                <Check size={15} aria-hidden />
                Used in {activeIndex + 5} workflows
              </div>
              <div className="sync-studio__fields">
                {activeCard.previewFields.map(([label, value]) => (
                  <label key={label}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </label>
                ))}
              </div>
              <div className="sync-studio__preview" aria-hidden>
                <div />
              </div>
            </motion.div>
          </AnimatePresence>
        </aside>
      </div>
    </section>
  )
}
