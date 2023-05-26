import { GET_COLLECTOR } from "../action/type";

const collectors = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_COLLECTOR:
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
};
export default collectors;
