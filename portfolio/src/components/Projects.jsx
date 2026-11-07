function Projects(props) {
  return (
    <section className="section">
      <h2>My Projects</h2>
      <div className="projects-list">
        {props.projects.map((project) => (
          <div key={project.title} className="card">
            <h3>{project.title}</h3>
            <small className="course">{project.course}</small>
            <p>{project.description}</p>
            <small>Tech: {project.tech}</small>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
