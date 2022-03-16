import * as types from "./actionType";
import { loaduserapi, createUserapi, deleteuserapi, updateuserapi } from "./api";
import {
  take,
  takeEvery,
  takeLatest,
  put,
  all,
  delay,
  fork,
  call,
} from "redux-saga/effects";

import {
  loadUserSuccess,
  loadUserError,
  createUserSuccess,
  createUserError,
  deleteUserSuccess,
  deleteUserError,
  updateUserSuccess,
  updateUserError
} from "./actions";

export function* onLoadUserStartAsync() {
  try {
    const response = yield call(loaduserapi);
    if (response.status === 200) {
      yield delay(500);
      yield put(loadUserSuccess(response.data));
    }
  } catch (error) {
    yield put(loadUserError(error.response.data));
  }
}



// eslint-disable-next-line require-yield
export function* onUpdateUserStartAsync({ payload:{ form} }){
  try {
   
    const response = yield call (updateuserapi,form)
    if (response.status === 200) {
      yield put (updateUserSuccess())
    }
  } catch (error) {
    yield put (updateUserError(error.response.data))
  }
}




export function* onDeleteUserStartAsync(userid) {
  console.log("deletesaga:", userid);
  try {
    const response = yield call(deleteuserapi, userid);
    if (response.status === 200) {
      yield delay(500);
      yield put(deleteUserSuccess(userid));
    }
  } catch (error) {
    yield put(deleteUserError(error.response.data));
  }
}

export function* onDeleteUser() {
  while (true) {
    const { payload: userid } = yield take(types.DELETE_USER);
    yield call(onDeleteUserStartAsync, userid);
  }
}

export function* onCreateUserStartAsync({ payload }) {
  console.log("saga:", payload);
  try {
    const response = yield call(createUserapi, payload);
    if (response.status === 200) {
      yield put(createUserSuccess(response.data));
    }
  } catch (error) {
    yield put(createUserError(error.response.data));
  }
}

export function* onLoadUser() {
  yield takeEvery(types.LOAD_USER_START, onLoadUserStartAsync);
}

export function* onCreateUser() {
  yield takeLatest(types.CREATE_USER, onCreateUserStartAsync);
}



export function* onUpdateUser() {
  yield takeLatest(types.UPDATE_USER, onUpdateUserStartAsync);
}






const userSagas = [fork(onLoadUser), fork(onCreateUser), fork(onDeleteUser), fork(onUpdateUser)];

export default function* rootSags() {
  yield all([...userSagas]);
}