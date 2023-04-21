import { combineReducers, configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import UserReducer from "../reducers/UserReducer";
import ExperienceReducer from "../reducers/ExperienceReducer";
import PostReducer from "../reducers/PostReducer";

const bigReducer = combineReducers({
  user: UserReducer,
  experience: ExperienceReducer,
  post: PostReducer
});
const store = configureStore({
  reducer: bigReducer,
}, applyMiddleware(thunk));
export default store;
