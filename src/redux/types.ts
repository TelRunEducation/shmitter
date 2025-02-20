export enum Action {
  CHANGE_NAME = 'changeName',
  CHANGE_AVATAR = 'changeAvatar',
  CHANGE_STATS = 'changeStatS',
}

export type UserState = {
  name: string,
  avatarUrl: string
}

export type ActionType = {
  type: Action,
  payload: UserState,
}