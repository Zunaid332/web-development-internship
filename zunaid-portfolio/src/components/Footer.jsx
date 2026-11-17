import './Footer.css'
import { FiGithub, FiMail, FiArrowUp } from 'react-icons/fi'
import { profile } from '../data'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>

        <div className="footer-icons">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="Github">
            <FiGithub />
          </a>
          <a href={`https://mail.google.com/mail/?view=cm&to=${profile.email}`} target="_blank" rel="noreferrer" aria-label="Email">
            <FiMail />
          </a>
        </div>

        <a href="#home" className="to-top">
          Back to top <FiArrowUp />
        </a>
      </div>
    </footer>
  )
}

export default Footer
