export const SET_MY_PROFILE = "SET_MY_PROFILE";
export const SET_OTHER_PEOPLE = "SET_OTHER_PEOPLE";

export const setMyProfile = (data) => {
  return {
    type: SET_MY_PROFILE,
    payload: data,
  };
};
export const setOtherPeople = (data) => {
  return {
    type: SET_OTHER_PEOPLE,
    payload: data,
  };
};
