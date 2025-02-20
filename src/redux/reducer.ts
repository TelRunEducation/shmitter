import {Action, UserState} from "./types";

const initialState: UserState = {
  name: 'Monster',
  avatarUrl: 'https://gravatar.com/avatar/000?d=monsterid'
}

const userReducer = (
  state = initialState, action) => {
  switch (action.type) {
    case Action.CHANGE_AVATAR:
      return {...state, avatarUrl: action.payload || state.avatarUrl};
    case Action.CHANGE_NAME:
      return {...state, name: action.payload || state.name}
    default:
      return state;
  }
}
export default userReducer