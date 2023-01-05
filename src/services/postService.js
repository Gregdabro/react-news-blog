import httpService from "./httpService"

const postEndpoint = "posts/"

const postService = {
  getAll: async () => {
    const response = await httpService.get(postEndpoint)
    return response
  },
  getById: async (id) => {
    const response = await httpService.get(postEndpoint + id)
    return response
  },
  getCommentsByPostId: async (postId) => {
    const response = await httpService.get(postEndpoint + postId + "/comments")
    return response
  }
}
export default postService
