import { SET_MY_PROFILE, SET_OTHER_PEOPLE } from "../action/UserAction";

const initialState = {
  myProfile: {}, //fetch profile/me
  otherPeople: [],
};
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OTHER_PEOPLE:
      return {
        ...state,
        myProfile: action.payload,
      };
    case SET_MY_PROFILE:
      return {
        ...state,
        otherPeople: action.payload,
      };
    default:
      return state;
  }
};
export default UserReducer;
