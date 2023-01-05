import CommentListItem from "./CommentListItem"
import Button from "../UI/buttons/button/Button"
import classes from "./comments.module.css"
import { useSelector } from "react-redux"
import { commentsStatusSelector } from "../../store/commentSlice"
import ErrorMessage from "../UI/error/ErrorMessage"
import { errorMessageSelector } from "../../store/errorMessageSlice"
const CommentList = ({ comments, updateComments }) => {
  const isLoading = useSelector(commentsStatusSelector())
  const error = useSelector(errorMessageSelector())
  return (
    <ul className={classes.commentList}>
      <span className={classes.title}>{comments.length} comments</span>
      <div className={classes.buttonWrapper}>
        <Button onClick={updateComments} label="update" />
      </div>
      {error ? (
        <ErrorMessage error={error} />
      ) : (
        <>
          {!isLoading &&
            comments?.map((comment) => (
              <CommentListItem key={comment.id} comment={comment} />
            ))}
        </>
      )}
    </ul>
  )
}

export default CommentList
