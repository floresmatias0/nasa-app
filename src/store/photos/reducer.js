import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_FAILURE,
} from "./actions";

const initialState = {
  content: [],
  contentLoading: true,
  contentError: "",
};

const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTOS_REQUEST:
      return {
        ...state,
        contentLoading: true,
      };
    case GET_PHOTOS_SUCCESS:
      return {
        ...state,
        contentLoading: false,
        content: [action.payload],
      };
    case GET_PHOTOS_FAILURE:
      return {
        ...state,
        contentError: "Error 404 not found",
        contentLoading: false,
      };
    default:
      return state;
  }
};

export default photosReducer;
