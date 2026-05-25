import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { footerColumns, legalLinks } from '../../data/siteContent'

export function ContactSection() {
  return (
    <footer className="contact-section" id="contact">
      <div className="page">
        <motion.div
          className="contact-section__grid"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <div className="contact-section__cta">
            <div>
              <h2>Smooth shipping is a few steps away</h2>
              <p>
                Let&apos;s see how we can help your team move faster. From developer platforms to
                AI workflows that get your team shipping again.
              </p>
            </div>
            <a href="mailto:hello@aiproductivity.studio" className="contact-section__button">
              Get in Touch
              <ArrowRight size={15} aria-hidden />
            </a>
          </div>

          <div className="contact-section__middle">
            <div className="contact-section__brand">
              <a href="#" className="contact-section__logo">
                ai productivity
              </a>
              <p>Platform engineering for AI teams. Turn your infrastructure into a competitive advantage.</p>
            </div>

            {footerColumns.map((column) => (
              <div className="contact-section__column" key={column.title}>
                <h3>{column.title}</h3>
                <ul>
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href={`#${link.toLowerCase().replaceAll(' ', '-')}`}>{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="contact-section__legal">
            <p>© AI Productivity 2026. All rights reserved.</p>
            <div>
              {legalLinks.map((link) => (
                <a href={`#${link.toLowerCase().replaceAll(' ', '-')}`} key={link}>
                  {link}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
