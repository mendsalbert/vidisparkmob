import { GET_DATA } from "../action/type";

const data = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_DATA:
      return {
        ...state,
        nfts: payload,
      };
    default:
      return state;
  }
};
export default data;
