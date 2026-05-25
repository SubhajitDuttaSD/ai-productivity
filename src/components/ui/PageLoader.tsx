import { AnimatePresence, motion } from 'framer-motion'

type PageLoaderProps = {
  visible: boolean
}

export function PageLoader({ visible }: PageLoaderProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          aria-live="polite"
          aria-label="Loading website"
        >
          <motion.div
            className="page-loader__panel"
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
          >
            <div className="page-loader__mark" aria-hidden>
              <span />
              <span />
              <span />
            </div>
            <p className="font-nav nav-label">Preparing interface</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
