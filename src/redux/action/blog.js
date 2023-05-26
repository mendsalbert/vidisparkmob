import { fatchData } from "../../utils";
import { GET_BLOG } from "./type";

export const getBlogs = () => async (dispatch) => {
  dispatch({
    type: GET_BLOG,
    payload: await fatchData("/static/blog.json"),
  });
};
