function Profile(props) {
  return (
    <section className="section">
      <div className="profile">
        <h1>Hi, I'm {props.name}</h1>
        <h3>{props.title}</h3>
        <p>{props.about}</p>
      </div>

      <h2>Education</h2>
      {props.education.map((edu) => (
        <div key={edu.school} className="card edu">
          <h3>{edu.school}</h3>
          <p>{edu.degree}</p>
        </div>
      ))}
    </section>
  )
}

export default Profile
