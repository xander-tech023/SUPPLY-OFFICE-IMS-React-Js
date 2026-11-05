import { useState } from 'react'

// Interactive feature 1: responsive navigation toggle
// Interactive feature 2: theme toggle button (state lives in App)
export default function Navbar({ brand, links, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar navbar-expand-lg sticky-top app-nav">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">
          📦 {brand}
        </a>

        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse ${open ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            {links.map((l) => (
              <li className="nav-item" key={l.href}>
                <a className="nav-link" href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
            <li className="nav-item">
              <button className="btn btn-outline-secondary btn-sm" onClick={onToggleTheme}>
                {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
