import { createSlice } from "@reduxjs/toolkit"
const errorMessageSlice = createSlice({
  name: "error",
  initialState: {
    message: ""
  },
  reducers: {
    setErrorMessage: (state, action) => {
      state.message = action.payload
    },
    clearErrorMessage: (state) => {
      state.message = ""
    }
  }
})
const { reducer: errorMessageReducer, actions } = errorMessageSlice
export const { setErrorMessage, clearErrorMessage } = actions

export const errorMessageSelector = () => (state) => state.error.message

export default errorMessageReducer
