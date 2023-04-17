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

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNjZjQ2YTE4NmE4NzAwMTQzODY3YjciLCJpYXQiOjE2ODE3MTYzMzAsImV4cCI6MTY4MjkyNTkzMH0.W_8jJorRnuOYGtkVo1rTmrMx0Jj18Heth2NyOzc8ytc";

export const getData = async () => {
  try {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/me`,
      {
        headers: {
          "Authorization": API_KEY,
        },
      }
    );
    if (response.ok) {
      let details = await response.json();
      setMyProfile(details);
      console.log(details);
    } else {
      console.log("Error has happened with the request");
    }
  } catch (error) {
    console.log("Fetch try failed,", error);
  }
};
