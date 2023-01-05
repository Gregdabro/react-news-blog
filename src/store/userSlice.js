import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import userService from "../services/userService"
import { setErrorMessage } from "./errorMessageSlice"

export const getUsers = createAsyncThunk("users/get", async (_, thunkAPI) => {
  try {
    const response = await userService.getAll()
    return response.data
  } catch (error) {
    thunkAPI.dispatch(setErrorMessage(error.message))
    return thunkAPI.rejectWithValue()
  }
})

export const userSlice = createSlice({
  name: "users",
  initialState: {
    entities: JSON.parse(localStorage.getItem("users")) || [],
    loading: false
  },
  reducers: {},
  extraReducers: {
    [getUsers.fulfilled]: (state, action) => {
      state.loading = false
      state.entities = action.payload
      localStorage.setItem("users", JSON.stringify(action.payload))
    },
    [getUsers.rejected]: (state) => {
      state.loading = false
    },
    [getUsers.pending]: (state) => {
      state.loading = true
    }
  }
})

export const userListSelector = () => (state) => state.users.entities
export const getUserById = (userId) => (state) => {
  if (state.users.entities) {
    return state.users.entities.find((user) => user.id === userId)
  }
}
export const usersStatusSelector = () => (state) => state.users.loading

export default userSlice.reducer
