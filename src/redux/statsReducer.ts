import {StatsAction, StatsState} from "./types";

const initialState: StatsState = {
  followers: 0,
  following: 0
}

const statsReducer = (
  state = initialState, action) => {
  const getNewStatsItem = (stateItem: string, sum: number) => {
    let res = state[stateItem] + sum;
     return res < 0 ? 0 : res
  }
  switch (action.type) {
    case StatsAction.CHANGE_FOLLOWERS: {
      return {...state, followers: getNewStatsItem('followers', action.payload)};
    }
    case StatsAction.CHANGE_FOLLOWING:
      return {...state, following: getNewStatsItem('following', action.payload)}
    default:
      return state;
  }
}
export default statsReducer