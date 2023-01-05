import BackButton from "../UI/buttons/backButton/BackButton"
import classes from "./posts.module.css"

const PostCard = ({ title, body, userName }) => {
  return (
    <div className={classes.postCard}>
      <BackButton to="/" />
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.content}>{body}</p>
      <p className={classes.signature}>
        <span>by</span>
        {userName}
      </p>
    </div>
  )
}

export default PostCard
