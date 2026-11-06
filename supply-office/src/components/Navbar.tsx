import { useState } from "react";

interface NavbarProps {
  systemName: string;
  isDark: boolean;
  onToggleTheme: () => void;
  onLoginClick: () => void;
}

const links = [
  { label: "Home", href: "#home" },
  { label: "Supplies", href: "#supplies" },
  { label: "About", href: "#about" },
];

function Navbar({ systemName, isDark, onToggleTheme, onLoginClick }: NavbarProps) {
  // Interactive feature: mobile navigation toggle
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">
          {systemName}
        </a>

        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link) => (
              <li className="nav-item" key={link.href}>
                <a className="nav-link" href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="d-flex gap-2">
            <button className="btn btn-outline-secondary" onClick={onToggleTheme}>
              {isDark ? "Light mode" : "Dark mode"}
            </button>
            <button className="btn btn-primary" onClick={onLoginClick}>
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
