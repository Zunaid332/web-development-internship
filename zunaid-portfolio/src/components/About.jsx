import './About.css'
import SectionHeader from './SectionHeader'

function About() {
  return (
    <section className="about topo" id="about">
      <div className="container">
        <SectionHeader />

        <div className="about-grid">
          <div className="about-left">
            <h2 className="boxed-title">About Me</h2>

            <div className="code-card">
              <span className="tag-mark">&lt;p&gt;</span>
              <h3>Hello!</h3>
              <p>
                My name is Zunaid and I study Computer Science &amp; Engineering at AIUB,
                majoring in Information Systems. I work with <span className="teal">HTML</span>,{' '}
                <span className="teal">CSS</span>, <span className="teal">JS</span>,{' '}
                <span className="teal">PHP</span> and <span className="teal">Python</span>.
              </p>
              <p>
                Most of my projects started as coursework, a restaurant management system,
                an electricity demand study and a mango leaf classifier, and each one taught
                me something the lectures didn't.
              </p>
              <p>
                Right now I'm working on my <span className="teal">final-year thesis</span>,
                which looks at how vision-language models sometimes describe objects that
                aren't in an image, and how <span className="teal">CLIP</span> can help catch
                that.
              </p>
              <p>I speak Bangla natively and I'm comfortable working in English.</p>
              <span className="tag-mark">&lt;/p&gt;</span>
            </div>
          </div>

          <div className="about-photo">
            <img src="/about.png" alt="Laptop with code open on a desk" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
