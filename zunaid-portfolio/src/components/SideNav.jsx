import './SideNav.css'
import { useState, useEffect } from 'react'
import { FiGrid, FiUser, FiCode, FiMonitor, FiEdit, FiBookOpen, FiMail } from 'react-icons/fi'

const links = [
  { id: 'home', title: 'Home', icon: <FiGrid /> },
  { id: 'about', title: 'About', icon: <FiUser /> },
  { id: 'skills', title: 'Skills', icon: <FiCode /> },
  { id: 'projects', title: 'Projects', icon: <FiMonitor /> },
  { id: 'research', title: 'Research', icon: <FiEdit /> },
  { id: 'blogs', title: 'Blogs', icon: <FiBookOpen /> },
  { id: 'contact', title: 'Contact', icon: <FiMail /> },
]

function SideNav() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    function handleScroll() {
      let current = 'home'
      links.forEach((link) => {
        const section = document.getElementById(link.id)
        if (section && section.getBoundingClientRect().top <= 120) {
          current = link.id
        }
      })
      setActive(current)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className="sidenav">
      {links.map((link) => (
        <a
          key={link.id}
          href={'#' + link.id}
          title={link.title}
          aria-label={link.title}
          className={active === link.id ? 'sidenav-link active' : 'sidenav-link'}
          onClick={() => setActive(link.id)}
        >
          {link.icon}
        </a>
      ))}
    </nav>
  )
}

export default SideNav
