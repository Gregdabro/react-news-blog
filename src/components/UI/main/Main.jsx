import classes from "./main.module.css"
import Container from "../container/Container"

const Main = ({ children }) => {
  return (
    <Container>
      <main className={classes.mainSection}>{children}</main>
    </Container>
  )
}

export default Main
