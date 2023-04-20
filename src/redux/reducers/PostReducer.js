import {
  SET_POSTS,
  SET_SINGLE_POST,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  SET_POST_ID,
} from "../action/PostAction";

const initialState = {
  posts: [],
  singlePost: {},
  IDs: { userID: "", postID: "" },
};

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case SET_SINGLE_POST:
      return {
        ...state,
        singlePost: action.payload,
      };
    case SET_POST_ID:
      return {
        ...state,
        IDs: { userID: action.payload[0], postID: action.payload[1] },
      };
    case ADD_POST:
      return {
        ...state,
        post: [...state.posts, action.payload],
      };
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case DELETE_POST:
      return {
        ...state,
        posts: [
          ...state.posts.slice(0, action.payload),
          ...state.posts.slice(action.payload + 1, state.posts.length),
        ],
      };
    default:
      return state;
  }
};

export default PostReducer;
