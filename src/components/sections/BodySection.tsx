import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { featureCards, processSteps } from '../../data/siteContent'
import { SyncedScrollSection } from './SyncedScrollSection'

const accentClass = {
  brand: 'feature-card--brand',
  blue: 'feature-card--blue',
  green: 'feature-card--green',
} as const

export function BodySection() {
  return (
    <main className="app__main">
      <section className="body-section page" id="platform">
        <div className="section-heading grid-12">
          <p className="section-heading__eyebrow font-nav nav-label span-12">Body system</p>
          <h2 className="span-7">Turn scattered AI work into a repeatable productivity engine.</h2>
          <p className="section-heading__text span-5">
            These cards use stronger hover states than the navbar: color fills, icon motion, and
            elevated borders to make the body feel interactive.
          </p>
        </div>

        <div className="grid-12 feature-grid">
          {featureCards.map((card, index) => (
            <motion.article
              key={card.title}
              className={`feature-card span-4 ${accentClass[card.accent]}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.35, ease: 'easeOut', delay: index * 0.08 }}
            >
              <div className="feature-card__media" aria-hidden />
              <p className="feature-card__eyebrow font-nav nav-label">{card.eyebrow}</p>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <span className="feature-card__link font-nav nav-label">
                Explore
                <ArrowUpRight size={15} aria-hidden />
              </span>
            </motion.article>
          ))}
        </div>
      </section>

      <SyncedScrollSection />

      <section className="workflow-section" id="workflow">
        <div className="page">
          <div className="grid-12 workflow-section__grid">
            <div className="workflow-section__copy span-5">
              <p className="section-heading__eyebrow font-nav nav-label">Workflow</p>
              <h2>Four simple stages, one shared source of truth.</h2>
              <p>
                The darker block proves your tokens can invert cleanly while keeping motion and
                hover interactions consistent.
              </p>
            </div>

            <ol className="workflow-list span-7">
              {processSteps.map((step, index) => (
                <motion.li
                  key={step}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.32, ease: 'easeOut', delay: index * 0.07 }}
                >
                  <span className="workflow-list__number font-nav">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{step}</span>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </main>
  )
}
