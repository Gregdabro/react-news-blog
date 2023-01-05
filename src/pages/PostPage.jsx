import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getPostById } from "../store/postSlice"
import { getUserById } from "../store/userSlice"
import { commentListSelector, getComments } from "../store/commentSlice"
import CommentList from "../components/comments/CommentList"
import PostCard from "../components/posts/PostCard"

const PostPage = () => {
  const dispatch = useDispatch()
  const { postId } = useParams()

  const { body, userId, id, title } = useSelector(getPostById(postId))
  const { name } = useSelector(getUserById(userId))
  const comments = useSelector(commentListSelector())

  useEffect(() => {
    dispatch(getComments(id))
  }, [dispatch, id])

  const updateComments = () => {
    dispatch(getComments(id))
  }

  return (
    <>
      <PostCard body={body} title={title} userName={name} />
      <CommentList comments={comments} updateComments={updateComments} />
    </>
  )
}

export default PostPage
