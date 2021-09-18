import { combineReducers } from "redux";
import photosReducer from "./photos/reducer";
import roversReducer from  './rovers/reducer';

export default combineReducers({
    rovers : roversReducer,
    photos: photosReducer
});