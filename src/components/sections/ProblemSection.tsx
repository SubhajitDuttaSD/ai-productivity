import { motion } from 'framer-motion'
import { Clock3, TrendingUp, Wrench } from 'lucide-react'
import { problemCards } from '../../data/siteContent'

const icons = {
  clock: Clock3,
  wrench: Wrench,
  trend: TrendingUp,
} as const

export function ProblemSection() {
  return (
    <section className="problem-section scroll-load-section" id="problems">
      <motion.div
        className="page"
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.28 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <div className="scroll-section-heading">
          <p className="font-nav nav-label">The problem</p>
          <h2>Is this your team right now?</h2>
          <span>
            Sound familiar? These are the three patterns we see in almost every engineering team
            trying to scale AI-assisted delivery.
          </span>
        </div>

        <div className="problem-card-grid">
          {problemCards.map((card, index) => {
            const Icon = icons[card.icon]

            return (
              <motion.article
                className="problem-card"
                key={card.title}
                initial={{ opacity: 0, y: 34, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.12 }}
              >
                <span className="problem-card__icon">
                  <Icon size={20} aria-hidden />
                </span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </motion.article>
            )
          })}
        </div>

        <motion.p
          className="problem-section__proof"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.38, ease: 'easeOut', delay: 0.2 }}
        >
          AI Productivity turns these recurring blockers into reusable systems — <strong>so every team
          can move with more clarity.</strong>
        </motion.p>
      </motion.div>
    </section>
  )
}
