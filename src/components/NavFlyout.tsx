import { AnimatePresence, motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

export type FlyoutLink = {
  label: string
  href: string
  icon: LucideIcon
}

type NavFlyoutProps = {
  links: FlyoutLink[]
  visible: boolean
}

export function NavFlyout({ links, visible }: NavFlyoutProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="navbar__flyout"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.15 }}
        >
          <ul className="navbar__flyout-list">
            {links.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a href={href} className="navbar__flyout-link font-nav">
                  <Icon className="navbar__flyout-icon" aria-hidden />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
