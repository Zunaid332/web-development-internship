import './About.css'
import SectionHeader from './SectionHeader'
import { education } from '../data'

function About() {
  return (
    <section className="about topo" id="about">
      <div className="container">
        <SectionHeader title="About Me" boxed />

        <div className="about-grid">
          <div className="code-card">
            <h3>Hello!</h3>
            <p>
              My name is Zunaid and I study Computer Science &amp; Engineering at AIUB,
              majoring in Information Systems. I work with <span className="teal">HTML</span>,{' '}
              <span className="teal">CSS</span>, <span className="teal">JavaScript</span>,{' '}
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
              aren't in an image, and how CLIP can help catch that.
            </p>
            <p>
            I speak Bangla natively and I'm comfortable working in English.
            </p>
          </div>

          <div className="editor">
            <div className="editor-top">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="file-name">education.js</span>
            </div>

            <pre className="editor-body">
              <span className="kw">const</span> <span className="var">education</span> = [{'\n'}
              {education.map((item, i) => (
                <span key={item.school}>
                  {'  {\n'}
                  {Object.entries(item).map(([key, value]) => (
                    <span key={key}>
                      {'    '}
                      <span className="key">{key}</span>:{' '}
                      <span className="str">"{value}"</span>,{'\n'}
                    </span>
                  ))}
                  {'  }'}
                  {i < education.length - 1 ? ',' : ''}
                  {'\n'}
                </span>
              ))}
              ];
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
