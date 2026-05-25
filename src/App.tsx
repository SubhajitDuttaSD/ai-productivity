import { useEffect, useState } from 'react'
import { Navbar } from './components/layout/Navbar'
import { BodySection } from './components/sections/BodySection'
import { CapabilitiesSection } from './components/sections/CapabilitiesSection'
import { ContactSection } from './components/sections/ContactSection'
import { HeroSection } from './components/sections/HeroSection'
import { ProblemSection } from './components/sections/ProblemSection'
import { TimelineSection } from './components/sections/TimelineSection'
import { PageLoader } from './components/ui/PageLoader'
import type { ResolvedTheme, ThemeMode } from './types/theme'

const themeOrder: ThemeMode[] = ['system', 'dark', 'light']

function getSystemTheme(): ResolvedTheme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const storedTheme = window.localStorage.getItem('theme-mode')

    return storedTheme === 'dark' || storedTheme === 'light' || storedTheme === 'system'
      ? storedTheme
      : 'system'
  })
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>(() => getSystemTheme())

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setIsLoading(false), 850)

    return () => window.clearTimeout(timeoutId)
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => setSystemTheme(mediaQuery.matches ? 'dark' : 'light')

    handleChange()
    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    window.localStorage.setItem('theme-mode', themeMode)
  }, [themeMode])

  const resolvedTheme = themeMode === 'system' ? systemTheme : themeMode

  const cycleTheme = () => {
    setThemeMode((currentTheme) => {
      const currentIndex = themeOrder.indexOf(currentTheme)

      return themeOrder[(currentIndex + 1) % themeOrder.length]
    })
  }

  return (
    <div className="app" data-theme-mode={themeMode} data-theme={resolvedTheme}>
      <PageLoader visible={isLoading} />
      <Navbar themeMode={themeMode} resolvedTheme={resolvedTheme} onThemeChange={cycleTheme} />
      <HeroSection />
      <ProblemSection />
      <CapabilitiesSection />
      <BodySection />
      <TimelineSection />
      <ContactSection />
    </div>
  )
}

export default App
