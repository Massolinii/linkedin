import {
  SET_EXPERIENCES,
  SET_SINGLE_EXPERIENCE,
  ADD_EXPERIENCE,
  UPDATE_EXPERIENCE,
  DELETE_EXPERIENCE,
  SET_EXP_ID,
} from "../action/ExperienceAction";

const initialState = {
  experiences: [],
  singleExperience: {},
  IDs: { userID: "", expID: "" },
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
    case SET_EXP_ID:
      return {
        ...state,
        IDs: { userID: action.payload[0], expID: action.payload[1] },
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
        experiences: [
          ...state.experiences.slice(0, action.payload),
          ...state.experiences.slice(
            action.payload + 1,
            state.experiences.length
          ),
        ],
      };
    default:
      return state;
  }
};

export default ExperienceReducer;
