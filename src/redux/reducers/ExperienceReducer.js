import {
  SET_EXPERIENCES,
  SET_SINGLE_EXPERIENCE,
  ADD_EXPERIENCE,
  DELETE_EXPERIENCE,
  SET_EXP_ID,
  SET_NEW_EXP,
} from "../action/ExperienceAction";

const initialState = {
  experiences: [],
  singleExperience: {
    role: "",
    company: "",
    startDate: "",
    endDate: null,
    description: "",
    area: "",
    username: "Salcana",
  },
  IDs: { userID: "", expID: "" },
  newExp: {
    role: "",
    company: "",
    startDate: "",
    endDate: null,
    description: "",
    area: "",
    username: "Salcana",
  },
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
    case SET_NEW_EXP:
      return {
        ...state,
        newExp: action.payload,
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
