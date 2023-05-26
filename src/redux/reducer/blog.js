import { GET_BLOG } from "../action/type";

const blog = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_BLOG:
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
};
export default blog;
