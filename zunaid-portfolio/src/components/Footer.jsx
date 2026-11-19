import './Footer.css'
import { FiGithub, FiMail, FiArrowUp } from 'react-icons/fi'
import { profile } from '../data'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {year} ZunaidZihan. All rights reserved.
        </p>

        <div className="footer-links">
          <a href="#blogs">Blogs</a>
          <a href="#home" className="to-top">
            Back to top <FiArrowUp />
          </a>
        </div>

        <div className="footer-icons">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="Github">
            <FiGithub />
          </a>
          <a
            href={`https://mail.google.com/mail/?view=cm&to=${profile.email}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Email"
          >
            <FiMail />
          </a>
        </div>

        <p>
          Design By <span className="credit">Zunaid Zihan</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
