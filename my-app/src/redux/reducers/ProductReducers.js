import { PRODUCT_LIST, SET_PRODUCT_LIST } from "../constant";

export const ProductData = (data = [], action) => {
  // if (action.type === ADD_TO_CART) {
  //   console.log("reducers called", action);
  //   return action.data;
  // } else {
  //   return "no action matched";
  // }

  switch (action.type) {
  
    case SET_PRODUCT_LIST:
      console.log("reducers called codtin", action);
      return [...action.data];
    default:
      //no case matched
      return data;
  }
};
