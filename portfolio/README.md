# Personal Portfolio (React)

## How to run
1. Open this folder in VS Code
2. Open terminal and run: `npm install`
3. Then run: `npm run dev`
4. Open the link shown (usually http://localhost:5173)

## Folder structure
```
src/
  App.jsx          -> main component, holds state and data
  App.css          -> all styling
  main.jsx         -> starts the app
  components/
    Navbar.jsx
    Profile.jsx
    Skills.jsx
    Projects.jsx
    Footer.jsx
```

## Requirements covered
- **Components:** Navbar, Profile, Skills, Projects, Footer
- **JSX:** used in every component
- **Props:** App sends name, skills, projects, email etc. to components
- **State:** `useState` for Dark Mode toggle (button in Navbar)
- **Responsive:** CSS grid + media query for mobile
