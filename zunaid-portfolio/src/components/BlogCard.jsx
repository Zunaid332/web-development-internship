import { getExcerpt, getReadTime } from '../blogs'

function BlogCard({ blog }) {
  const link = '#/blog/' + blog.slug

  return (
    <article className="blog-card">
      <a href={link} className="blog-card-img" aria-label={blog.title}>
        <img src={blog.cover} alt="" loading="lazy" />
      </a>

      <div className="blog-card-body">
        <h3>
          <a href={link}>{blog.title}</a>
        </h3>
        <p>{getExcerpt(blog)}</p>
        <div className="card-links">
          <a href={link} className="read-more">
            <span>Read More</span> &gt;&gt;
          </a>
          <a href={blog.files[0].href} target="_blank" rel="noreferrer" className="read-more">
            <span>View PDF</span> &gt;&gt;
          </a>
        </div>

        <div className="blog-meta">
          <span className="pill">{blog.type}</span>
          <span>
            <b>By</b> {blog.authors}
          </span>
          <span>
            <b>Read</b> {getReadTime(blog)}
          </span>
        </div>
      </div>
    </article>
  )
}

export default BlogCard
