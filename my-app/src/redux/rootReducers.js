import { combineReducers } from "redux";

import { cartData } from "./reducers/reducers";
import { ProductData } from "./reducers/ProductReducers";

export default combineReducers({
    cartData,
    ProductData
});
