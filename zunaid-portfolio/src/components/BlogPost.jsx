import './Blogs.css'
import { useState } from 'react'
import { FiShare } from 'react-icons/fi'
import BlogCard from './BlogCard'
import { blogs, getReadTime } from '../blogs'

// Turns `code` inside a paragraph into <code> elements
function renderText(text) {
  return text.split('`').map((part, i) => (i % 2 ? <code key={i}>{part}</code> : part))
}

function MetaBar({ blog }) {
  const [copied, setCopied] = useState(false)

  async function share() {
    const url = window.location.href
    try {
      if (navigator.share) {
        await navigator.share({ title: blog.title, url })
      } else {
        await navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(() => setCopied(false), 1800)
      }
    } catch {
      // user closed the share sheet
    }
  }

  return (
    <div className="post-meta-bar">
      <div className="blog-meta">
        <span>
          <b>Type</b> {blog.type}
        </span>
        <span>
          <b>By</b> {blog.authors}
        </span>
        <span>
          <b>Read</b> {getReadTime(blog)}
        </span>
      </div>

      <button className="share-btn" onClick={share} aria-label="Share this post">
        {copied && <span className="share-tip">Link copied</span>}
        <FiShare />
      </button>
    </div>
  )
}

function BlogPost({ slug }) {
  const blog = blogs.find((b) => b.slug === slug)

  if (!blog) {
    return (
      <section className="post">
        <div className="container post-inner post-missing">
          <h1>Post not found</h1>
          <a href="#blogs" className="btn-outline">
            Back to Projects
          </a>
        </div>
      </section>
    )
  }

  const others = blogs.filter((b) => b.slug !== slug).slice(0, 5)
  const firstFile = blog.files[0]
  const showPdf = firstFile && firstFile.href.endsWith('.pdf')

  return (
    <>
      <section className="post">
        <div className="container post-inner">
          <h1>{blog.title}</h1>
          <MetaBar blog={blog} />

          <img className="post-cover" src={blog.cover} alt="" />

          <div className="post-content">
            {blog.content.map((block, i) =>
              typeof block === 'string' ? (
                <p key={i}>{renderText(block)}</p>
              ) : (
                <h2 key={i}>{block.heading}</h2>
              )
            )}
          </div>

          <div className="project-files">
            <h2>Project Files</h2>
            {blog.files.map((file) => (
              <div className="project-file" key={file.href}>
                <span>{file.label}</span>
                <div className="project-file-buttons">
                  <a href={file.href} target="_blank" rel="noreferrer" className="btn-fill">
                    View
                  </a>
                  <a href={file.href} download className="btn-outline">
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>

          {showPdf && (
            <iframe className="pdf-preview" src={firstFile.href} title={firstFile.label}></iframe>
          )}

          <div className="post-tags">
            {blog.tags.map((tag) => (
              <span className="pill" key={tag}>
                {tag}
              </span>
            ))}
          </div>

          <MetaBar blog={blog} />
        </div>
      </section>

      <section className="blogs also-like">
        <div className="container">
          <h2 className="also-like-title">More Projects</h2>
          <div className="blog-list">
            {others.map((b) => (
              <BlogCard key={b.slug} blog={b} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogPost
