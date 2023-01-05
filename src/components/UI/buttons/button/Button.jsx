import classes from "./button.module.css"
const Button = ({ label, children, ...rest }) => {
  return (
    <button {...rest} className={classes.button}>
      {label || children || "button"}
    </button>
  )
}

export default Button
