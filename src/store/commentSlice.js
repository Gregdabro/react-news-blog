import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import postService from "../services/postService"
import { setErrorMessage } from "./errorMessageSlice"

export const getComments = createAsyncThunk(
  "comments/get",
  async (postId, thunkAPI) => {
    try {
      const response = await postService.getCommentsByPostId(postId)
      return response.data
    } catch (error) {
      thunkAPI.dispatch(setErrorMessage(error.message))
      return thunkAPI.rejectWithValue()
    }
  }
)

export const commentSlice = createSlice({
  name: "comments",
  initialState: {
    entities: JSON.parse(localStorage.getItem("comments")) || [],
    loading: false
  },
  reducers: {},
  extraReducers: {
    [getComments.fulfilled]: (state, action) => {
      state.loading = false
      state.entities = action.payload
      localStorage.setItem("comments", JSON.stringify(action.payload))
    },
    [getComments.rejected]: (state) => {
      state.loading = false
    },
    [getComments.pending]: (state) => {
      state.loading = true
    }
  }
})

export const commentListSelector = () => (state) => state.comments.entities
export const commentsStatusSelector = () => (state) => state.comments.loading

export default commentSlice.reducer
