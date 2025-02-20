import {StatsAction} from "./types";

export const changeFollowers = (sum: number) => ({
  type: StatsAction.CHANGE_FOLLOWERS,
  payload: sum
})

export const changeFollowing = (sum: number) => ({
  type: StatsAction.CHANGE_FOLLOWING,
  payload: sum
})