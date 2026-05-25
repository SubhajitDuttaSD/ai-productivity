import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

type NavFlyoutProps = {
  links: readonly string[]
  visible: boolean
}

export function NavFlyout({ links, visible }: NavFlyoutProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="navbar__flyout"
          initial={{ opacity: 0, y: 8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 6, scale: 0.98 }}
          transition={{ duration: 0.16, ease: 'easeOut' }}
        >
          <ul className="navbar__flyout-list">
            {links.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase().replaceAll(' ', '-')}`} className="navbar__flyout-link">
                  <span>{link}</span>
                  <ArrowUpRight className="navbar__flyout-icon" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
