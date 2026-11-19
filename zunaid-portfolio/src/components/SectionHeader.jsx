import './SectionHeader.css'

// Scroll-mouse icon with a dotted line, then an optional underlined title
function SectionHeader({ title, subtitle }) {
  return (
    <div className="section-header">
      <div className="mouse">
        <span className="mouse-dot"></span>
      </div>
      <div className="dotted-line"></div>

      {title && <h2 className="section-title">{title}</h2>}
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  )
}

export default SectionHeader
