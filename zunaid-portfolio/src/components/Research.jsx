import './Research.css'
import { FiGithub, FiDownload } from 'react-icons/fi'
import SectionHeader from './SectionHeader'
import { research, profile } from '../data'

function Research() {
  return (
    <section className="research" id="research">
      <div className="container">
        <SectionHeader
          title="Research"
          subtitle="My thesis and the papers I've worked on"
        />

        <div className="research-list">
          {research.map((item) => {
            const Icon = item.icon
            return (
              <article className="research-item" key={item.title}>
                <div className="thumb">
                  <Icon />
                </div>

                <div className="research-body">
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <div className="meta">
                    <span className="pill">{item.tag}</span>
                    <span>
                      <b>Field</b> {item.field}
                    </span>
                    <span>
                      <b>Status</b> {item.status}
                    </span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <div className="research-buttons">
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn-fill">
            <FiGithub /> Github
          </a>
          <a href={profile.cv} download className="btn-outline">
            <FiDownload /> My CV
          </a>
        </div>
      </div>
    </section>
  )
}

export default Research
