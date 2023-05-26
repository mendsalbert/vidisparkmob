import { HOME_1 } from "../action/type";

const home = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case HOME_1:
      return {
        ...state,
        home1: payload,
      };

    default:
      return state;
  }
};
export default home;
