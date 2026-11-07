function Navbar(props) {
  return (
    <nav className="navbar">
      <h2>{props.name}</h2>
      <div className="nav-links">
        <button
          className={props.page === 'home' ? 'link active' : 'link'}
          onClick={() => props.setPage('home')}
        >
          Home
        </button>
        <button
          className={props.page === 'skills' ? 'link active' : 'link'}
          onClick={() => props.setPage('skills')}
        >
          Skills
        </button>
        <button
          className={props.page === 'projects' ? 'link active' : 'link'}
          onClick={() => props.setPage('projects')}
        >
          Projects
        </button>
        <button className="theme-btn" onClick={props.toggleTheme}>
          {props.darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
