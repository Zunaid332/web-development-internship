import { useState } from 'react'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  const [page, setPage] = useState('home')
  const [darkMode, setDarkMode] = useState(false)

  function toggleTheme() {
    setDarkMode(!darkMode)
  }

  const education = [
    {
      school: 'American International University-Bangladesh (AIUB)',
      degree: 'B.Sc. in CSE, Major in Information Systems'
    },
    {
      school: 'BIAM Laboratory School & College, Bogura',
      degree: 'HSC, Rajshahi Board'
    },
  ]

  const mySkills = ['Python', 'JavaScript', 'React', 'PHP', 'HTML', 'CSS', 'MySQL', 'GitHub', 'VS Code']

  const myProjects = [
    {
      title: 'Electricity Demand Prediction in Bangladesh',
      course: 'Machine Learning course',
      description: 'Combined Bangladesh electricity data with NASA POWER weather data to study what affects demand.',
      tech: 'Python, Google Colab',
    },
    {
      title: 'Smart Restaurant Management System',
      course: 'Web Technologies course',
      description: 'A web-based system for customer interaction, content management and database work.',
      tech: 'HTML, CSS, JavaScript, PHP, MySQL',
    },
    {
      title: 'Mango Leaf Detection',
      course: 'Computer Vision course',
      description: 'Analyzed mango leaf images from a Kaggle dataset using CNN-based image classification.',
      tech: 'Python, CNN',
    },
  ]

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Navbar
        name="Zunaid Zihan"
        page={page}
        setPage={setPage}
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />

      <main className="content">
        {page === 'home' && (
          <Profile
            name="Zunaid Zihan"
            title="CSE Student at AIUB"
            about="I am a CSE student majoring in Information Systems. I am interested in web development, machine learning and data analysis, and I am currently learning React."
            education={education}
          />
        )}
        {page === 'skills' && <Skills skills={mySkills} />}
        {page === 'projects' && <Projects projects={myProjects} />}
      </main>

      <Footer email="zunaidzihan333@gmail.com" github="https://github.com/Zunaid332" />
    </div>
  )
}

export default App
