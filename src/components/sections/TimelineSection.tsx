import { motion } from 'framer-motion'
import { timelinePhases } from '../../data/siteContent'

export function TimelineSection() {
  return (
    <section className="timeline-section scroll-load-section" id="timeline">
      <div className="page">
        <motion.div
          className="timeline-section__heading"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <p className="font-nav nav-label">Delivery plan</p>
          <h2>Clear phases with deliverables that prove progress at every step.</h2>
        </motion.div>

        <div className="timeline">
          {timelinePhases.map((phase, index) => (
            <motion.article
              className={index % 2 === 0 ? 'timeline-item timeline-item--left' : 'timeline-item timeline-item--right'}
              key={phase.day}
              initial={{ opacity: 0, y: 72, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.52, ease: 'easeOut' }}
            >
              <div className="timeline-item__card">
                <h3>{phase.title}</h3>
                <p>{phase.text}</p>
                <ul>
                  {phase.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
              <div className="timeline-item__marker" aria-hidden />
              <span className="timeline-item__day font-nav">{phase.day}</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
