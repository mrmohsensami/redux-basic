import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  CategoryFetchRequested,
  CategoryFetchSucceeded,
  CategoryFetchFailed,
} from "./actions/actionTypes";

const getCategoriesFromAPI = () => fetch('http://apitester.ir/api/Categories').then(res => res.json());

function* fetchCategories(action) {
  try {
    const categories = yield call(getCategoriesFromAPI);
    yield put({ type: CategoryFetchSucceeded, categories: categories });
  } catch (e) {
    yield put({ type: CategoryFetchFailed, message: e.message });
  }
}

function* mySaga() {
  //اجازه فراخوانی همزمان برای فراخوانی و دریافت لیست محصولات
  yield takeEvery(CategoryFetchRequested, fetchCategories);
}

// function* mySaga() {
//   //فقط آخرین درخواست برای دریافت کاربران در حالت درخواست همزمان اجرا می شود
//   yield takeLatest(CategoryFetchRequested, fetchCategories);
// }

export default mySaga;
