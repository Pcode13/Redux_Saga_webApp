import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART } from "../constant";
export const cartData = (data = [], action) => {
  // if (action.type === ADD_TO_CART) {
  //   console.log("reducers called", action);
  //   return action.data;
  // } else {
  //   return "no action matched";
  // }

  switch (action.type) {
    case ADD_TO_CART:
      console.log("reducers called codtin", action);
      return [...data, action.data];
    case REMOVE_TO_CART:
      console.log("REducers Removed to cart", action);
      const remainItem = data.filter((item) => item.id !== action.data);
 console.log("remainItem  Removed to cart", remainItem);
      return [...remainItem];
    case EMPTY_CART:
      console.log("Reducerx Empty cArt", action);
      data = [];
      return [...data];
    default:
      //no case matched
      return data;
  }
};
