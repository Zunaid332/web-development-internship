import './Projects.css'
import { useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiArrowUpRight } from 'react-icons/fi'
import SectionHeader from './SectionHeader'
import { projects } from '../data'

// A few fake code lines for the left monitor: [indent, width%, color]
const codeLines = [
  [0, 55, '#c792ea'], [1, 70, '#82aaff'], [1, 40, '#f3c97a'], [2, 62, '#d5dbe1'],
  [2, 48, '#1de9c6'], [1, 30, '#d5dbe1'], [0, 20, '#c792ea'], [0, 0, ''],
  [0, 60, '#82aaff'], [1, 75, '#d5dbe1'], [2, 50, '#f3c97a'], [2, 66, '#1de9c6'],
  [3, 40, '#d5dbe1'], [2, 30, '#c792ea'], [1, 52, '#82aaff'], [0, 18, '#d5dbe1'],
  [0, 0, ''], [0, 46, '#c792ea'], [1, 68, '#f3c97a'], [1, 58, '#d5dbe1'],
  [2, 44, '#1de9c6'], [1, 26, '#82aaff'], [0, 14, '#d5dbe1'],
]

function Projects() {
  const [current, setCurrent] = useState(0)

  const project = projects[current]
  const Icon = project.icon

  function prev() {
    setCurrent(current === 0 ? projects.length - 1 : current - 1)
  }

  function next() {
    setCurrent(current === projects.length - 1 ? 0 : current + 1)
  }

  return (
    <section className="projects" id="projects">
      <div className="container">
        <SectionHeader
          title="Works"
          subtitle="I had the pleasure of working on these projects during my time at AIUB"
        />

        <div className="slider">
          <button className="arrow" onClick={prev} aria-label="Previous project">
            <FiChevronLeft />
          </button>

          <div className="showcase" key={project.title}>
            {/* Back monitor with code */}
            <div className="code-monitor" aria-hidden="true">
              <div className="code-screen">
                {codeLines.map(([indent, width, color], i) => (
                  <span
                    key={i}
                    style={{ marginLeft: indent * 8, width: width + '%', background: color }}
                  ></span>
                ))}
              </div>
              <div className="code-stand"></div>
              <div className="code-base"></div>
            </div>

            {/* Front iMac with the project "website" */}
            <div className="imac">
              <a href={project.link} target="_blank" rel="noreferrer" className="view-link">
                View Code <FiArrowUpRight />
              </a>

              <div className="imac-frame">
                <div className="imac-screen">
                  <div className="site-nav">
                    <b>{project.course}</b>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="site-hero">
                    <div className="site-text">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="site-tech">
                        {project.tech.map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="site-art">
                      <Icon />
                    </div>
                  </div>
                </div>
                <div className="imac-chin">
                  <span></span>
                </div>
              </div>
              <div className="imac-stand"></div>
              <div className="imac-base"></div>
            </div>
          </div>

          <button className="arrow" onClick={next} aria-label="Next project">
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects
