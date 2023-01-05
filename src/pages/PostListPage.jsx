import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  getPosts,
  postListSelector,
  postsStatusSelector
} from "../store/postSlice"
import Pagination from "../components/pagination/Pagination"
import { paginate } from "../utils/paginate"
import {
  getUsers,
  userListSelector,
  usersStatusSelector
} from "../store/userSlice"
import PostList from "../components/posts/PostList"
import {
  clearErrorMessage,
  errorMessageSelector
} from "../store/errorMessageSlice"
import classes from "../components/posts/posts.module.css"
import Button from "../components/UI/buttons/button/Button"
import ErrorMessage from "../components/UI/error/ErrorMessage"

const PostListPage = () => {
  const dispatch = useDispatch()
  const postsStatus = useSelector(postsStatusSelector())
  const usersStatus = useSelector(usersStatusSelector())
  const isLoading = postsStatus && usersStatus
  const error = useSelector(errorMessageSelector())
  const posts = useSelector(postListSelector())
  const users = useSelector(userListSelector())
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 10
  const [postList, setPostList] = useState([])

  useEffect(() => {
    function getTransformData() {
      const data = []
      for (let i = 0; i < posts.length; i++) {
        for (let j = 0; j < users.length; j++) {
          if (posts[i].userId === users[j].id) {
            data.push({ ...posts[i], name: users[j].name })
          }
        }
      }
      return data
    }
    setPostList(getTransformData())
  }, [posts, users])

  const refreshPosts = () => {
    dispatch(getPosts())
    dispatch(getUsers())
  }

  useEffect(() => {
    const loadData = () => {
      dispatch(getPosts())
      dispatch(getUsers())
    }
    dispatch(clearErrorMessage())
    loadData()
    const interval = setInterval(() => {
      loadData()
    }, 60000)
    return () => clearInterval(interval)
  }, [dispatch])

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }
  const count = posts.length
  const postsCrop = paginate(postList, currentPage, pageSize)
  return (
    <>
      {error ? (
        <ErrorMessage error={error} />
      ) : (
        <>
          <div className={classes.top}>
            <h1>Latest news</h1>
            <Button onClick={refreshPosts}>update</Button>
          </div>
          {!isLoading && postsCrop.length > 0 && (
            <>
              <PostList posts={postsCrop} refreshPosts={refreshPosts} />
            </>
          )}
          <Pagination
            totalCount={count}
            limit={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </>
  )
}

export default PostListPage
