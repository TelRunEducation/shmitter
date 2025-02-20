export enum UserAction {
  CHANGE_NAME = 'changeName',
  CHANGE_AVATAR = 'changeAvatar'
}

export enum StatsAction {
  CHANGE_FOLLOWERS = 'changeFollowers',
  CHANGE_FOLLOWING = 'changeFollowing'
}

export type UserState = {
  name: string,
  avatarUrl: string
}

export type StatsState = {
  followers: number,
  following: number
}