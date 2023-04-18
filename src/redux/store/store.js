import { combineReducers, configureStore } from "@reduxjs/toolkit";

import UserReducer from "../reducers/UserReducer";
import ExperienceReducer from "../reducers/ExperienceReducer";

const bigReducer = combineReducers({
  user: UserReducer,
  experience: ExperienceReducer,
});
const store = configureStore({
  reducer: bigReducer,
});
export default store;
