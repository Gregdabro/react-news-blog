import postsReducer from "./postSlice"
import usersReducer from "./userSlice"
import commentReducer from "./commentSlice"
import errorMessageReducer from "./errorMessageSlice"

const { combineReducers, configureStore } = require("@reduxjs/toolkit")

const rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
  comments: commentReducer,
  error: errorMessageReducer
})

export function createStore() {
  return configureStore({
    reducer: rootReducer
  })
}
