import { motion } from 'framer-motion'
import { Rocket, ShieldCheck, Zap } from 'lucide-react'
import { capabilityCards } from '../../data/siteContent'

const icons = [Zap, Rocket, ShieldCheck] as const

export function CapabilitiesSection() {
  return (
    <section className="capabilities-section scroll-load-section" id="capabilities">
      <motion.div
        className="page"
        initial={{ opacity: 0, y: 52 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <div className="scroll-section-heading">
          <p className="font-nav nav-label">Capabilities</p>
          <h2>Turn messy AI experiments into a repeatable operating system</h2>
          <span>
            Three connected capabilities for teams that want better prompts, cleaner workflows, and
            measurable delivery without copying the same playbook everywhere.
          </span>
        </div>

        <div className="capability-grid">
          {capabilityCards.map((card, index) => {
            const Icon = icons[index]

            return (
              <motion.article
                className={`capability-card capability-card--${card.tone}`}
                key={card.title}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{ duration: 0.46, ease: 'easeOut', delay: index * 0.1 }}
              >
                <span className="capability-card__icon">
                  <Icon size={21} aria-hidden />
                </span>
                <p className="capability-card__label font-nav nav-label">{card.label}</p>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <ul>
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
