import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import SideNav from './components/SideNav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Research from './components/Research'
import Blogs from './components/Blogs'
import BlogPost from './components/BlogPost'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { blogs } from './blogs'

// Blog posts live at #/blog/<slug>; everything else is the home page.
function getBlogSlug() {
  const hash = window.location.hash
  return hash.startsWith('#/blog/') ? decodeURIComponent(hash.slice(7)) : null
}

function App() {
  const [blogSlug, setBlogSlug] = useState(getBlogSlug)

  useEffect(() => {
    function handleHashChange() {
      setBlogSlug(getBlogSlug())
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    if (blogSlug) {
      const blog = blogs.find((b) => b.slug === blogSlug)
      document.title = blog ? `${blog.title} | Zunaid Zihan` : 'Zunaid Zihan'
      window.scrollTo({ top: 0, behavior: 'instant' })
    } else {
      document.title = 'Zunaid Zihan'
      // Coming back from a post: jump to the section in the link (e.g. #contact)
      const target = document.getElementById(window.location.hash.slice(1))
      if (target) target.scrollIntoView({ behavior: 'instant' })
    }
  }, [blogSlug])

  return (
    <>
      <Navbar />
      {blogSlug ? (
        <main>
          <BlogPost slug={blogSlug} />
        </main>
      ) : (
        <>
          <SideNav />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Research />
            <Blogs />
            <Contact />
          </main>
        </>
      )}
      <Footer />
    </>
  )
}

export default App
