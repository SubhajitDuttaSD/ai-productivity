import { motion } from 'framer-motion'
import { ArrowRight, Bot, Workflow } from 'lucide-react'
import { heroStats } from '../../data/siteContent'

export function HeroSection() {
  return (
    <section className="hero-section page">
      <div className="grid-12 hero-section__grid">
        <motion.div
          className="hero-section__copy span-7"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
        >
          <p className="hero-section__eyebrow font-nav nav-label">AI productivity systems</p>
          <h1>Build a smarter operating layer for your team.</h1>
          <p className="hero-section__lead">
            A CSS-heavy proof of concept with strong visual hierarchy, motion-rich interactions, and
            a tokenized layout system ready for real content.
          </p>
          <div className="hero-section__actions">
            <a href="#contact" className="button button--primary font-nav nav-label">
              Start a project
              <ArrowRight size={16} aria-hidden />
            </a>
            <a href="#workflow" className="button button--secondary font-nav nav-label">
              View workflow
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-card span-5"
          initial={{ opacity: 0, y: 24, rotate: -1 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.2 }}
        >
          <div className="hero-card__topline">
            <span className="font-nav nav-label">Live workflow</span>
            <span className="hero-card__status">Active</span>
          </div>
          <div className="hero-card__visual" aria-hidden>
            <div className="hero-card__orb hero-card__orb--brand" />
            <div className="hero-card__orb hero-card__orb--blue" />
            <div className="hero-card__orb hero-card__orb--green" />
          </div>
          <div className="hero-card__rows">
            <div>
              <Bot size={18} aria-hidden />
              <span>Agent collecting product context</span>
            </div>
            <div>
              <Workflow size={18} aria-hidden />
              <span>Workflow ready for team review</span>
            </div>
          </div>
        </motion.div>

        <motion.ul
          className="hero-stats span-12"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.35 }}
        >
          {heroStats.map((stat) => (
            <li key={stat.label}>
              <strong>{stat.value}</strong>
              <span className="font-nav nav-label">{stat.label}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
