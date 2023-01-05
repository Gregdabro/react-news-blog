import classes from "./errorMessage.module.css"

const ErrorMessage = ({ error }) => {
  return (
    <>
      <div className={classes.error}>
        <span>An error occurred:</span>
        {error}
      </div>
    </>
  )
}

export default ErrorMessage
