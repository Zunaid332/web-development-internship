import './Hero.css'
import { FiMail, FiMapPin, FiBriefcase, FiDownload, FiGithub } from 'react-icons/fi'
import { profile, sidebarSkills, stats } from '../data'

function Hero() {
  return (
    <section className="hero topo" id="home">
      <div className="container hero-grid">
        <aside className="side-card">
          <img src={profile.photo} alt={profile.name} />
          <h3>{profile.name}</h3>
          <p className="side-role">{profile.role}</p>

          <ul className="side-info">
            <li>
              <FiMail /> {profile.email}
            </li>
            <li>
              <FiMapPin /> {profile.location}
            </li>
            <li>
              <FiBriefcase /> Doing internship
            </li>
            <li>
              <FiGithub />
              <a href={profile.github} target="_blank" rel="noreferrer">
                github.com/{profile.githubUser}
              </a>
            </li>
          </ul>

          <div className="side-skills">
            {sidebarSkills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>

          <a href={profile.cv} className="btn-cv" download>
            Download CV <FiDownload />
          </a>
        </aside>

        <div className="hero-text">
          <h1>
            Hey <br />
            I'm <span className="teal">{profile.firstName}</span>,<br />
            CSE Student &amp; <br />
            Web Developer
          </h1>

          <p>
            I study Computer Science at AIUB and build web apps and small machine
            learning projects along the way. Currently I am doing an internship at NexGenix as a frontend developer. 
          </p>

          <a href="#contact" className="lets-talk">
            Let's Talk <FiMail />
          </a>
        </div>

        <div className="stats-card">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
