// import { createStore} from 'redux'
import { configureStore } from "@reduxjs/toolkit";
import ProductSaga from "./saga/ProductSaga";
import rootReducers from "./rootReducers";
import createSagaMiddleware from "redux-saga";


const sagaMiddleware =createSagaMiddleware()

const store = configureStore({
    reducer: rootReducers,
    middleware:()=> [sagaMiddleware]
});

sagaMiddleware.run(ProductSaga)
export default store;
