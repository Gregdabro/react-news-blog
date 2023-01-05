import classes from "./footer.module.css"
import Container from "../container/Container"

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Container>
        <p>&copy; Post | News 2023</p>
      </Container>
    </footer>
  )
}

export default Footer
