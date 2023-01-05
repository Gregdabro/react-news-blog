import PostListItem from "./PostListItem"
const PostsList = ({ posts }) => {
  return (
    <ul>
      {posts?.map((post) => (
        <PostListItem key={post.id} post={post} />
      ))}
    </ul>
  )
}

export default PostsList
