import { useState } from 'react'
import {
  BookOpen,
  Code2,
  Layers,
  LayoutGrid,
  Sparkles,
} from 'lucide-react'
import { NavFlyout, type FlyoutLink } from './NavFlyout'

type NavItem = {
  id: string
  label: string
  links: FlyoutLink[]
}

const NAV_ITEMS: NavItem[] = [
  {
    id: 'product',
    label: 'Product',
    links: [
      { label: 'Studio', href: '#', icon: LayoutGrid },
      { label: 'Canvas', href: '#', icon: Layers },
      { label: 'Plugins', href: '#', icon: Sparkles },
    ],
  },
  {
    id: 'developers',
    label: 'Developers',
    links: [
      { label: 'Documentation', href: '#', icon: BookOpen },
      { label: 'API Reference', href: '#', icon: Code2 },
      { label: 'Examples', href: '#', icon: LayoutGrid },
    ],
  },
  {
    id: 'resources',
    label: 'Resources',
    links: [
      { label: 'Blog', href: '#', icon: BookOpen },
      { label: 'Guides', href: '#', icon: Layers },
      { label: 'Community', href: '#', icon: Sparkles },
    ],
  },
]

export function Navbar() {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <header className="page">
      <nav
        className="navbar font-nav"
        onMouseLeave={() => setActiveId(null)}
      >
        <a href="#" className="navbar__brand font-nav nav-label">
          Design PoC
        </a>

        <ul className="navbar__list">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.id}
              className={
                activeId === item.id ? 'navbar__item navbar__item--active' : 'navbar__item'
              }
              onMouseEnter={() => setActiveId(item.id)}
            >
              <button type="button" className="navbar__trigger font-nav nav-label">
                {item.label}
              </button>
              <div className="navbar__flyout-anchor">
                <NavFlyout links={item.links} visible={activeId === item.id} />
              </div>
            </li>
          ))}
        </ul>

        <button type="button" className="navbar__cta font-nav nav-label">
          Get started
        </button>
      </nav>
    </header>
  )
}
