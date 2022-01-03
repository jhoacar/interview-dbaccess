import { combineReducers } from "redux";

import courses from "./courses/reducer";
import students from "./students/reducer";
import instructors from "./instructors/reducer";

export default function createReducer(asyncReducers) {
  return combineReducers({
    courses,
    students,
    instructors,
    ...asyncReducers,
  });
}
