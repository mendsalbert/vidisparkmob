import { combineReducers } from "redux";
import blog from "./blog";
import collectors from "./collectors";
import creator from "./creator";
import data from "./data";
import filter from "./filter";

export default combineReducers({
  data,
  filter,
  creator,
  collectors,
  blog,
});
