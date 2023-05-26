import { fatchData } from "../../utils";
import { GET_DATA } from "./type";

export const getData = () => async (dispatch) => {
  dispatch({
    type: GET_DATA,
    payload: await fatchData("/static/data.json"),
  });
};
