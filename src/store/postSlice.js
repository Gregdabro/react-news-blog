import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import postService from "../services/postService"
import { setErrorMessage } from "./errorMessageSlice"

export const getPosts = createAsyncThunk("posts/get", async (_, thunkAPI) => {
  try {
    const response = await postService.getAll()
    return response.data
  } catch (error) {
    thunkAPI.dispatch(setErrorMessage(error.message))
    return thunkAPI.rejectWithValue()
  }
})

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    entities: JSON.parse(localStorage.getItem("posts")) || [],
    loading: false
  },
  reducers: {},
  extraReducers: {
    [getPosts.fulfilled]: (state, action) => {
      state.loading = true
      state.entities = action.payload
      localStorage.setItem("posts", JSON.stringify(action.payload))
    },
    [getPosts.rejected]: (state) => {
      state.loading = false
    },
    [getPosts.pending]: (state) => {
      state.loading = true
    }
  }
})

export const postListSelector = () => (state) => state.posts.entities
export const getPostById = (postId) => (state) => {
  if (state.posts.entities) {
    return state.posts.entities.find((post) => post.id === +postId)
  }
}
export const postsStatusSelector = () => (state) => state.posts.loading

export default postSlice.reducer
