import { updateState } from "../../utils";
import {
  CREATOR_VARIFY,
  ENDING,
  FILTER_CATAGORY,
  ORDER_FILTER,
  PRICE,
  SINGLE_CATAGORY_FILTER,
  TYPE_FILTER,
} from "../action/type";
const initialState = {
  category: [],
  type: "",
};

const filter = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FILTER_CATAGORY:
      return {
        ...state,
        category: updateState(state.category, payload),
      };
    case SINGLE_CATAGORY_FILTER:
      return {
        ...state,
        category: [payload],
      };
    case ORDER_FILTER:
      return {
        ...state,
        order: payload,
      };
    case TYPE_FILTER:
      return {
        ...state,
        type: payload,
      };
    case CREATOR_VARIFY:
      return {
        ...state,
        creatorVerified: payload,
      };
    case ENDING:
      return {
        ...state,
        ending: payload,
      };
    case PRICE:
      return {
        ...state,
        price: payload,
      };
    default:
      return state;
  }
};
export default filter;
