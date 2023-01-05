import classes from "./header.module.css"
import { ReactComponent as Logo } from "../../../assets/logo.svg"
import { Link } from "react-router-dom"
import Container from "../container/Container"

const Header = () => {
  return (
    <header className={classes.header}>
      <Container>
        <Link to="/">
          <Logo className={classes.logo} />
        </Link>
      </Container>
    </header>
  )
}

export default Header
