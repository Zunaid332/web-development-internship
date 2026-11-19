import './Blogs.css'
import { useState } from 'react'
import SectionHeader from './SectionHeader'
import BlogCard from './BlogCard'
import { blogs } from '../blogs'

function Blogs() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? blogs : blogs.slice(0, 1)

  return (
    <section className="blogs" id="blogs">
      <div className="container">
        <SectionHeader
          title="Blogs"
          subtitle="My projects, research papers and thesis proposal. Open any one to read about it or view the files."
        />

        <div className="blog-list">
          {visible.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>

        <div className="blog-progress">
          <span style={{ width: (visible.length / blogs.length) * 100 + '%' }}></span>
        </div>

        <div className="blogs-actions">
          {blogs.length > 1 && (
            <button className="btn-fill" onClick={() => setShowAll(!showAll)}>
              {showAll ? 'View Less' : 'View More'}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

export default Blogs
