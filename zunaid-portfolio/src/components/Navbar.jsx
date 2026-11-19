import './Navbar.css'
import { useState, useRef, useEffect } from 'react'
import { FiGithub, FiMail, FiSearch } from 'react-icons/fi'
import { profile } from '../data'
import { blogs } from '../blogs'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#blogs', label: 'Blogs' },
]

// Below this width the search bar collapses to an icon
const compactQuery = '(max-width: 820px)'

function SearchBox() {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const boxRef = useRef(null)
  const inputRef = useRef(null)

  const q = query.trim().toLowerCase()
  const results = q
    ? blogs.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.tags.some((t) => t.toLowerCase().includes(q))
      )
    : []

  useEffect(() => {
    function handleClick(e) {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        setOpen(false)
        setExpanded(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  useEffect(() => {
    if (expanded) inputRef.current?.focus()
  }, [expanded])

  function go(slug) {
    window.location.hash = slug ? '#/blog/' + slug : '#blogs'
    setQuery('')
    setOpen(false)
    setExpanded(false)
  }

  function handleSubmit(e) {
    e.preventDefault()
    // On small screens the first tap on the icon just opens the search field
    if (!expanded && window.matchMedia(compactQuery).matches) {
      setExpanded(true)
      return
    }
    if (q) go(results[0]?.slug)
  }

  return (
    <form
      className={expanded ? 'nav-search expanded' : 'nav-search'}
      ref={boxRef}
      onSubmit={handleSubmit}
      role="search"
    >
      <input
        ref={inputRef}
        type="search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
          setOpen(true)
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            setOpen(false)
            setExpanded(false)
          }
        }}
      />
      <button type="submit" aria-label="Search">
        <FiSearch />
      </button>

      {open && q && (
        <ul className="search-results">
          {results.length ? (
            results.map((b) => (
              <li key={b.slug}>
                <button type="button" onClick={() => go(b.slug)}>
                  {b.title}
                </button>
              </li>
            ))
          ) : (
            <li className="no-results">No posts found</li>
          )}
        </ul>
      )}
    </form>
  )
}

function Navbar() {
  const [active, setActive] = useState('#home')

  useEffect(() => {
    function handleScroll() {
      const blogsEl = document.getElementById('blogs')
      const contactEl = document.getElementById('contact')
      const inBlogs =
        blogsEl &&
        blogsEl.getBoundingClientRect().top <= 120 &&
        (!contactEl || contactEl.getBoundingClientRect().top > 120)
      const onPost = window.location.hash.startsWith('#/blog/')
      setActive(inBlogs || onPost ? '#blogs' : '#home')
    }
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('hashchange', handleScroll)
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('hashchange', handleScroll)
    }
  }, [])

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a href="#home" className="logo">
          <span>&lt;C/&gt;</span> ZunaidZihan
        </a>

        <nav className="nav-menu">
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={active === link.href ? 'active' : ''}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <SearchBox />

          <div className="nav-social">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="Github">
              <FiGithub /> <span>Github</span>
            </a>
            <a
              href={`https://mail.google.com/mail/?view=cm&to=${profile.email}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Email"
            >
              <FiMail /> <span>Email</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
