import {UserAction} from "./types";

export const changeAvatar = (avatarUrl: string) => ({
  type: UserAction.CHANGE_AVATAR,
  payload: avatarUrl
})

export const changeName = (name: string) => ({
  type: UserAction.CHANGE_NAME,
  payload: name
})
