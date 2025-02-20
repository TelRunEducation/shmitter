import {Action, ActionType, UserState} from "./types";

const userReducer = (state: UserState, action: ActionType) => {
  switch (action.type) {
    case Action.CHANGE_AVATAR:
      return {...state, avatar: action.payload || state.avatarUrl};
    case Action.CHANGE_NAME:
      return {...state, name: action.payload || state.name}
    // case Action.CHANGE_STATS:
    // {
    //   let res = action.payload[statsType] + sum;
    //   res = res < 0 ? 0 : res;
    //   return {...stats, [statsType]: res};
    // }
    default: return state;
  }
}
export default userReducer