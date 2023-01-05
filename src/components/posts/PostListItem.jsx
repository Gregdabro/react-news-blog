import { Link, useRouteMatch } from "react-router-dom"
import classes from "./posts.module.css"

const PostListItem = ({ post }) => {
  const { title, name, id } = post
  const { url } = useRouteMatch()

  return (
    <li className={classes.postListItem}>
      <Link to={`${url}${id}`}>
        <h3 className={classes.title}>{title}</h3>
      </Link>
      <p className={classes.signature}>
        <span>by</span>
        {name}
      </p>
    </li>
  )
}
export default PostListItem
