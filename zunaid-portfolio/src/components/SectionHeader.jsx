import './SectionHeader.css'
function SectionHeader({ title, subtitle, boxed }) {
  return (
    <div className="section-header">
      <div className="mouse">
        <span className="mouse-dot"></span>
      </div>
      <div className="dotted-line"></div>

      {boxed ? (
        <h2 className="boxed-title">{title}</h2>
      ) : (
        <h2 className="section-title">{title}</h2>
      )}

      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  )
}

export default SectionHeader
