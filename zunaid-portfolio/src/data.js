import { FiCoffee, FiZap, FiImage, FiMonitor, FiCpu, FiEye, FiBarChart2 } from 'react-icons/fi'
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaPython, FaDatabase } from 'react-icons/fa'

export const profile = {
  name: 'Zunaid Zihan',
  firstName: 'Zunaid',
  role: 'CSE Student, AIUB',
  email: 'zunaidzihan333@gmail.com',
  location: 'Dhaka, Bangladesh',
  github: 'https://github.com/Zunaid332',
  githubUser: 'Zunaid332',
  photo: '/profile.webp',
  cv: '/Zunaid_Zihan_CV.pdf',
}

export const sidebarSkills = ['HTML', 'CSS', 'JS', 'PHP', 'Python', 'MySQL']

export const stats = [
  { number: 3, label: 'Programming Languages' },
  { number: 3, label: 'Course Projects' },
  { number: 1, label: 'Research Paper' },
]

export const education = [
  {
    school: 'AIUB',
    degree: 'B.Sc. in CSE',
    major: 'Information Systems',
    year: '2022 - 2027',
  },
  {
    school: 'BIAM Laboratory School & College',
    level: 'HSC, Rajshahi Board',
    year: '2020',
  },
]

export const skillCards = [
  { title: 'Web Development', tags: 'HTML - CSS - JS - PHP - MySQL', icon: FiMonitor },
  { title: 'Machine Learning', tags: 'Python - CNN - Colab', icon: FiCpu },
]

export const techIcons = [
  { name: 'HTML', icon: FaHtml5, color: '#e44d26' },
  { name: 'CSS', icon: FaCss3Alt, color: '#2a7bd4' },
  { name: 'JS', icon: FaJs, color: '#f0b429' },
  { name: 'PHP', icon: FaPhp, color: '#8a8fd1' },
  { name: 'PYTHON', icon: FaPython, color: '#4b8bbe' },
  { name: 'MYSQL', icon: FaDatabase, color: '#2fa4c2' },
]

export const tools = ['Google Colab', 'GitHub', 'VS Code']

export const projects = [
  {
    title: 'Smart Restaurant Management System',
    course: 'Web Technologies',
    description:
      'A web app for running a restaurant. I worked on the customer side, the content management for staff and the MySQL database behind it.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    icon: FiCoffee,
    link: 'https://github.com/Zunaid332/learning-web-technologies-fall2025-2026-section-G/tree/main/Final_Assignment',
  },
  {
    title: 'Electricity Demand Prediction in Bangladesh',
    course: 'Machine Learning',
    description:
      "I combined Bangladesh's electricity demand data with NASA POWER weather data, then trained and compared models to see which factors actually move demand.",
    tech: ['Python', 'Google Colab'],
    icon: FiZap,
    link: 'https://github.com/Zunaid332',
  },
  {
    title: 'Mango Leaf Detection',
    course: 'Computer Vision',
    description:
      'Image classification on a Kaggle dataset of mango leaves using a CNN, plus some experiments with object detection.',
    tech: ['Python', 'CNN'],
    icon: FiImage,
    link: 'https://github.com/Zunaid332',
  },
]

export const research = [
  {
    title: 'Object Hallucination Detection in Vision-Language Models',
    summary:
      "My final-year thesis. Vision-language models sometimes describe objects that aren't in the image. I'm using CLIP-based visual grounding to check what the model says against what is really there.",
    tag: 'Thesis',
    field: 'Computer Vision',
    status: 'In progress',
    icon: FiEye,
  },
  {
    title: 'Electricity Demand Prediction in Bangladesh',
    summary:
      'Final-term research paper for my Machine Learning course. It looks at how weather affects electricity demand in Bangladesh, using NASA POWER data.',
    tag: 'Research Paper',
    field: 'Machine Learning',
    status: 'Completed',
    icon: FiBarChart2,
  },
]
