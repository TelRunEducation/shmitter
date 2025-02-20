import {UserAction, UserState} from "./types";

const initialState: UserState = {
  name: 'Monster',
  avatarUrl: 'https://gravatar.com/avatar/000?d=monsterid'
}

const userReducer = (
  state = initialState, action) => {
  switch (action.type) {
    case UserAction.CHANGE_AVATAR:
      return {...state, avatarUrl: action.payload || state.avatarUrl};
    case UserAction.CHANGE_NAME:
      return {...state, name: action.payload || state.name}
    default:
      return state;
  }
}
export default userReducer