import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import { contactLinks } from '../../data/siteContent'

const icons = [Mail, Phone, MapPin] as const

export function ContactSection() {
  return (
    <footer className="contact-section" id="contact">
      <div className="page">
        <div className="grid-12 contact-section__grid">
          <motion.div
            className="contact-section__copy span-6"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <p className="section-heading__eyebrow font-nav nav-label">Contact</p>
            <h2>Ready to shape this into your actual website?</h2>
            <p>
              Swap the placeholder content, connect real forms, and extend the design system from
              this CSS-first foundation.
            </p>
          </motion.div>

          <div className="contact-links span-6">
            {contactLinks.map((link, index) => {
              const Icon = icons[index]

              return (
                <a href={link.href} className="contact-link" key={link.label}>
                  <Icon size={18} aria-hidden />
                  <span>{link.label}</span>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
