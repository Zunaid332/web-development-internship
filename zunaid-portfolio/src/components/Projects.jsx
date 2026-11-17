import './Projects.css'
import { useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiArrowUpRight } from 'react-icons/fi'
import SectionHeader from './SectionHeader'
import { projects } from '../data'

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
          title="Projects"
          subtitle="I had the pleasure of building these during my time at AIUB"
        />

        <div className="slider">
          <button className="arrow" onClick={prev} aria-label="Previous project">
            <FiChevronLeft />
          </button>

          <div className="slide">
            <div className="monitor">
              <div className="screen">
                <div className="screen-bar">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="screen-content">
                  <Icon />
                  <p>{project.title}</p>
                </div>
              </div>
              <div className="stand"></div>
              <div className="base"></div>
            </div>

            <div className="slide-info">
              <a href={project.link} target="_blank" rel="noreferrer" className="view-link">
                View Code <FiArrowUpRight />
              </a>
              <span className="course">{project.course}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-list">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          <button className="arrow" onClick={next} aria-label="Next project">
            <FiChevronRight />
          </button>
        </div>

        <div className="slider-dots">
          {projects.map((p, index) => (
            <button
              key={p.title}
              className={index === current ? 'active' : ''}
              onClick={() => setCurrent(index)}
              aria-label={`Show ${p.title}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
