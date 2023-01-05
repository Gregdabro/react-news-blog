import { ReactComponent as ArrowBack } from "../../../../assets/arrow-back.svg"
import classes from "./backButton.module.css"
import { NavLink } from "react-router-dom"
const BackButton = ({ to, label = "Go back" }) => {
  return (
    <NavLink className={classes.backButton} to={to} exact>
      <ArrowBack />
      {label}
    </NavLink>
  )
}

export default BackButton
