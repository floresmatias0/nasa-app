import {
  GET_ROVERS_REQUEST,
  GET_ROVERS_SUCCESS,
  GET_ROVERS_FAILURE,
} from "./actions";

const initialState = {
  content: [],
  contentLoading: true,
  contentError: "",
};

const roversReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROVERS_REQUEST:
      return {
        ...state,
        contentLoading: true,
      };
    case GET_ROVERS_SUCCESS:
      return {
        ...state,
        contentLoading: false,
        content: state.content.concat(action.payload),
      };
    case GET_ROVERS_FAILURE:
      return {
        ...state,
        contentError: "Error 404 not found",
        contentLoading: false,
      };
    default:
      return state;
  }
};

export default roversReducer;
