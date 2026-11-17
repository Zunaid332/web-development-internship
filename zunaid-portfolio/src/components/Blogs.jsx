import './Blogs.css'
import { useState } from 'react'
import SectionHeader from './SectionHeader'
import BlogCard from './BlogCard'
import { blogs, subscribeLink } from '../blogs'

function Blogs() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? blogs : blogs.slice(0, 1)

  return (
    <section className="blogs" id="blogs">
      <div className="container">
        <SectionHeader
          title="Blogs"
          subtitle="My thoughts on technology and web development, welcome to subscribe"
        />

        <div className="blog-list">
          {visible.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>

        <div className="blogs-actions">
          {blogs.length > 1 && (
            <button className="btn-fill" onClick={() => setShowAll(!showAll)}>
              {showAll ? 'View Less' : 'View More'}
            </button>
          )}
          <a href={subscribeLink} target="_blank" rel="noreferrer" className="btn-outline">
            Subscribe
          </a>
        </div>
      </div>
    </section>
  )
}

export default Blogs
