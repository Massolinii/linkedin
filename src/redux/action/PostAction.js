/* AZIONI EXPERIENCE */
export const SET_POST = "SET_POST";
export const SET_SINGLE_POST = "SET_SINGLE_POST";
export const ADD_POST = "ADD_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";
export const SET_POST_ID = "SET_POST_ID";

/* EXPORT AZIONI POST */
export const setPosts = (data) => {
  return {
    type: SET_POST,
    payload: data,
  };
};

export const setSingleExperience = (data) => {
  return {
    type: SET_SINGLE_POST,
    payload: data,
  };
};
export const setExpID = (id) => {
  return {
    type: SET_POST_ID,
    payload: id,
  };
};

export const addExperience = (data) => {
  return {
    type: ADD_POST,
    payload: data,
  };
};

export const updateExperience = (data) => {
  return {
    type: UPDATE_POST,
    payload: data,
  };
};

export const deleteExperience = (i) => {
  return {
    type: DELETE_POST,
    payload: i,
  };
};

const API_KEY =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNjZjQ2YTE4NmE4NzAwMTQzODY3YjciLCJpYXQiOjE2ODE3MTYzMzAsImV4cCI6MTY4MjkyNTkzMH0.W_8jJorRnuOYGtkVo1rTmrMx0Jj18Heth2NyOzc8ytc";


  /* GET - ALL POSTS */
  export const getPosts = async (dispatch, getState) => {
    let state = getState();
    let userID = state.user.thisProfile.userID;
    console.log(userID);
  
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/`,
        {
          headers: {
            "Content-type": "application/json",
            Authorization: API_KEY,
          },
        }
      );
      if (response.ok) {
        let posts = await response.json();
        dispatch(setPosts(posts));
        console.log(posts);
      } else {
        console.log("Error has happened with the GET request");
      }
    } catch (error) {
      console.log("GET Fetch try failed,", error);
    }
  };