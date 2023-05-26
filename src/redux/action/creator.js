import { fatchData } from "../../utils";
import { GET_CREATOR } from "./type";

export const getCreator = () => async (dispatch) => {
  dispatch({
    type: GET_CREATOR,
    payload: await fatchData("/static/creators.json"),
  });
};
