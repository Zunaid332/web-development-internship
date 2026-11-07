function Skills(props) {
  return (
    <section className="section">
      <h2>My Skills</h2>
      <div className="skills-list">
        {props.skills.map((skill) => (
          <span key={skill} className="skill">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Skills
