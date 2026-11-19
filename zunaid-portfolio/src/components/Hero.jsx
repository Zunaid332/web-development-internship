import './Hero.css'
import { FiMail, FiMapPin, FiBriefcase, FiDownload, FiGithub } from 'react-icons/fi'
import { profile, sidebarSkills, stats } from '../data'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <h2 className="hero-big">Developer</h2>

        <div className="hero-grid">
          <aside className="side-card">
            <img src={profile.photo} alt={profile.name} />
            <h3>{profile.firstName}</h3>
            <p className="side-role">{profile.role}</p>

            <ul className="side-info">
              <li>
                <FiMail /> {profile.email}
              </li>
              <li>
                <FiMapPin /> {profile.location}
              </li>
              <li>
                <FiBriefcase /> Intern / Student
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
            <span className="tag-mark">&lt;h1&gt;</span>
            <h1>
              Hey <br />
              I'm <span className="teal">{profile.firstName}</span>,<br />
              Web Developer <span className="tag-mark inline">&lt;/h1&gt;</span>
            </h1>

            <span className="tag-mark">&lt;p&gt;</span>
            <p>
              I study Computer Science at AIUB and build web apps and small machine
              learning projects along the way. Currently I am doing an internship at
              NexGenix as a frontend developer.
            </p>
            <span className="tag-mark">&lt;/p&gt;</span>

            <a href="#contact" className="lets-talk">
              Let's Talk
              <span className="talk-icon">
                <FiMail />
              </span>
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
      </div>
    </section>
  )
}

export default Hero
