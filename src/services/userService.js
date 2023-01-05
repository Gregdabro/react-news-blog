import httpService from "./httpService"

const userEndpoint = "users/"

const postService = {
  getAll: async () => {
    const response = await httpService.get(userEndpoint)
    return response
  },
  getById: async (id) => {
    const response = await httpService.get(userEndpoint + id)
    return response
  }
}
export default postService
