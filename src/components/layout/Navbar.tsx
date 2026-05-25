import { useState } from 'react'
import { Laptop, Moon, Sparkles, Sun } from 'lucide-react'
import { navigationItems } from '../../data/siteContent'
import type { ResolvedTheme, ThemeMode } from '../../types/theme'
import { NavFlyout } from './NavFlyout'

type NavbarProps = {
  themeMode: ThemeMode
  resolvedTheme: ResolvedTheme
  onThemeChange: () => void
}

const themeLabel = {
  system: 'System',
  dark: 'Dark',
  light: 'Light',
} as const

export function Navbar({ themeMode, resolvedTheme, onThemeChange }: NavbarProps) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const ThemeIcon = themeMode === 'system' ? Laptop : resolvedTheme === 'dark' ? Moon : Sun

  return (
    <header className="site-header page">
      <nav className="navbar font-nav" onMouseLeave={() => setActiveId(null)}>
        <a href="#" className="navbar__brand nav-label" aria-label="AI Productivity home">
          <span className="navbar__brand-mark">
            <Sparkles size={14} aria-hidden />
          </span>
          AI Productivity
        </a>

        <ul className="navbar__list" aria-label="Main navigation">
          {navigationItems.map((item) => (
            <li
              key={item.id}
              className={activeId === item.id ? 'navbar__item navbar__item--active' : 'navbar__item'}
              onMouseEnter={() => setActiveId(item.id)}
            >
              <button type="button" className="navbar__trigger nav-label">
                {item.label}
              </button>
              <div className="navbar__flyout-anchor">
                <NavFlyout links={item.links} visible={activeId === item.id} />
              </div>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <button
            type="button"
            className="navbar__theme-toggle nav-label"
            onClick={onThemeChange}
            aria-label={`Current theme is ${themeLabel[themeMode]}. Change theme.`}
          >
            <ThemeIcon size={14} aria-hidden />
            {themeLabel[themeMode]}
          </button>

          <a href="#contact" className="navbar__cta nav-label">
            Contact
          </a>
        </div>
      </nav>
    </header>
  )
}
