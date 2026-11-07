function Footer(props) {
  return (
    <footer className="footer">
      <p>Email: {props.email}</p>
      <p>
        GitHub: <a href={props.github}>{props.github}</a>
      </p>
    </footer>
  )
}

export default Footer
