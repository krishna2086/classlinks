import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import linksReducer from "./linksReducer";

export default combineReducers({
  auth: authReducer,
  link:linksReducer,
  errors: errorReducer
});
