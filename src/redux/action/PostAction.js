/* AZIONI POST */
export const SET_POSTS = "SET_POST";
export const SET_SINGLE_POST = "SET_SINGLE_POST";
export const ADD_POST = "ADD_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";
export const SET_POST_ID = "SET_POST_ID";

/* EXPORT AZIONI POST */
export const setPosts = (data) => {
  return {
    type: SET_POSTS,
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

export const addPost = (data) => {
  return {
    type: ADD_POST,
    payload: data,
  };
};

export const updatePost = (data) => {
  return {
    type: UPDATE_POST,
    payload: data,
  };
};

export const deletePostAction = (post_id) => {
  return {
    type: DELETE_POST,
    payload: post_id,
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

  /* POST - NEW POST*/
  export const createPost = (postText) => {
    return async (dispatch) => {
      let newPostData = {
        text: postText,
      };
  
      try {
        let response = await fetch(
          `https://striveschool-api.herokuapp.com/api/posts/`,
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
              Authorization: API_KEY,
            },
            body: JSON.stringify(newPostData),
          }
        );
  
        if (response.ok) {
          let newPost = await response.json();
          dispatch(addPost(newPost));
        } else {
          console.log("Error has happened with the POST request");
        }
      } catch (error) {
        console.log("POST Fetch try failed,", error);
      }
    };
  };

/* PUT - EDIT POST*/

export const editPost = async (formData, post_id) => {
  try {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/posts/` + post_id,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          Authorization: API_KEY,
        },
        body: JSON.stringify(formData),
      }
    );
    if (response.ok) {
      alert("Post successfully modified.")
    } else {
      alert("There was a problem modifying this Post")
    }
  } catch (error) {
    console.log("Error:", error)
  }
}

/* DELETE - DELETE POST */
export const deletePost = (post_id) => {
  return async (dispatch) => {
      try {
          let resp = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${post_id}`, {
              method: "DELETE",
              headers: {
                  Authorization: API_KEY,
              },
          });

          if (resp.ok) {
              dispatch(deletePostAction(post_id));
          } else {
              console.log("Error has happened with the DELETE request");
          }
      } catch (error) {
          console.log("Error:", error);
      }
  };
};
