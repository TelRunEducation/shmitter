import {Action} from "./types";

export const changeAvatar = (avatarUrl: string) => ({
  type: Action.CHANGE_AVATAR,
  payload: avatarUrl
})

export const changeName = (name: string) => ({
  type: Action.CHANGE_NAME,
  payload: name
})