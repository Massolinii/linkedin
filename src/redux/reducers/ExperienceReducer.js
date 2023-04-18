import {
    SET_EXPERIENCES,
    SET_SINGLE_EXPERIENCE,
    ADD_EXPERIENCE,
    UPDATE_EXPERIENCE,
    DELETE_EXPERIENCE,
  } from "../action/ExperienceAction";
  
  const initialState = {
    experiences: [],
    singleExperience: {},
  };
  
  const ExperienceReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_EXPERIENCES:
        return {
          ...state,
          experiences: action.payload,
        };
      case SET_SINGLE_EXPERIENCE:
        return {
          ...state,
          singleExperience: action.payload,
        };
      case ADD_EXPERIENCE:
        return {
          ...state,
          experiences: [...state.experiences, action.payload],
        };
      case UPDATE_EXPERIENCE:
        return {
          ...state,
          experiences: state.experiences.map((experience) =>
            experience._id === action.payload._id ? action.payload : experience
          ),
        };
      case DELETE_EXPERIENCE:
        return {
          ...state,
          experiences: state.experiences.filter(
            (experience) => experience._id !== action.payload
          ),
        };
      default:
        return state;
    }
  };
  
  export default ExperienceReducer;