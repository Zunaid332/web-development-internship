import './Navbar.css'
import { useState } from 'react'
import { FiGithub, FiMail, FiMenu, FiX } from 'react-icons/fi'
import { profile } from '../data'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#research', label: 'Research' },
  { href: '#blogs', label: 'Blogs' },
  { href: '#contact', label: 'Contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a href="#home" className="logo">
          Zunaid<span> Zihan</span>
        </a>

        <nav className={menuOpen ? 'nav-menu show' : 'nav-menu'}>
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-social">
            <a href={profile.github} target="_blank" rel="noreferrer">
              <FiGithub /> Github
            </a>
            <a href={`https://mail.google.com/mail/?view=cm&to=${profile.email}`} target="_blank" rel="noreferrer">
              <FiMail /> Email
            </a>
          </div>
        </nav>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  )
}

export default Navbar
