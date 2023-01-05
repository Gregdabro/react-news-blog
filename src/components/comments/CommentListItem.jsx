import classes from "./comments.module.css"
const CommentListItem = ({ comment }) => {
  return (
    <li className={classes.commentListItem}>
      <p className={classes.content}>{comment.body}</p>
      <p className={classes.signature}>
        <span>by</span>
        {comment.email}
      </p>
    </li>
  )
}
export default CommentListItem
