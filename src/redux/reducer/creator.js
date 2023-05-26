import { GET_CREATOR } from "../action/type";

const creator = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CREATOR:
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
};
export default creator;
