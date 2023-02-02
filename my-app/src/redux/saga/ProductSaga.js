
import { takeEvery,put  } from 'redux-saga/effects'
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "../constant";

function* getProduct() {
    let data = yield fetch('http://localhost:3004/products');
    data = yield data.json();
    console.log("API called", data)
    yield put({ type: SET_PRODUCT_LIST, data })
}

function* searchProduct(data) {
  let result = yield fetch(`http://localhost:3004/products?q=${data.query}`);
  data = yield result.json();
    console.log("API called", data);
    console.log("API called result", result);
  yield put({ type: SET_PRODUCT_LIST , data :result});
}


function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProduct)
    yield takeEvery(SEARCH_PRODUCT ,searchProduct)
}

export default productSaga