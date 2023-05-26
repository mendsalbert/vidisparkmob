import { fatchData } from "../../utils";
import { GET_COLLECTOR } from "./type";

export const getCollector = () => async (dispatch) => {
  dispatch({
    type: GET_COLLECTOR,
    payload: await fatchData("/static/collectors.json"),
  });
};
