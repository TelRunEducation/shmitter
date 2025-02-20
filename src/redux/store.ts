import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./userReducer";
import statsReducer from "./statsReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    stats: statsReducer,
  }
})

export const avatarSelector = () => store.getState().user.avatarUrl
export const nameSelector = () => store.getState().user.name
export const followerSelector = () => store.getState().stats.followers
export const followingSelector = () => store.getState().stats.following

export default store