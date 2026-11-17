import { blogAuthor, blogCover, getExcerpt, getReadTime } from '../blogs'

function BlogCard({ blog }) {
  const link = '#/blog/' + blog.slug

  return (
    <article className="blog-card">
      <a href={link} className="blog-card-img" aria-label={blog.title}>
        <img src={blogCover} alt="" loading="lazy" />
      </a>

      <div className="blog-card-body">
        <h3>
          <a href={link}>{blog.title}</a>
        </h3>
        <p>{getExcerpt(blog)}</p>
        <a href={link} className="read-more">
          <span>Read More</span> &gt;&gt;
        </a>

        <div className="blog-meta">
          <span className="pill">{blog.tags[0]}</span>
          <span>
            <b>Text</b> {blogAuthor}
          </span>
          <span>
            <b>Date</b> {blog.date}
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
