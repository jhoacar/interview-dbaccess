import { all } from "redux-saga/effects";
import courseSagas from "./courses/saga";
import studentSaga from "./students/saga";
import instructorSaga from "./instructors/saga";

export default function* rootSaga() {
  yield all([
    courseSagas(),
    studentSaga(),
    instructorSaga()
  ]);
}
