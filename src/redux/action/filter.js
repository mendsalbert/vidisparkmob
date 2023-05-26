import {
  CREATOR_VARIFY,
  ENDING,
  FILTER_CATAGORY,
  ORDER_FILTER,
  PRICE,
  SINGLE_CATAGORY_FILTER,
  TYPE_FILTER,
} from "./type";

export const catagoryfilter = (value) => (dispatch) => {
  dispatch({
    type: FILTER_CATAGORY,
    payload: value,
  });
};
export const singleCatagoryfilter = (value) => (dispatch) => {
  dispatch({
    type: SINGLE_CATAGORY_FILTER,
    payload: value,
  });
};
export const orderFilter = (value) => (dispatch) => {
  dispatch({
    type: ORDER_FILTER,
    payload: value,
  });
};
export const typeFilter = (value) => (dispatch) => {
  dispatch({
    type: TYPE_FILTER,
    payload: value,
  });
};
export const creatorFilter = (value) => (dispatch) => {
  dispatch({
    type: CREATOR_VARIFY,
    payload: value,
  });
};
export const endingFilter = (value) => (dispatch) => {
  dispatch({
    type: ENDING,
    payload: value,
  });
};
export const priceFilter = (value) => (dispatch) => {
  dispatch({
    type: PRICE,
    payload: value,
  });
};
