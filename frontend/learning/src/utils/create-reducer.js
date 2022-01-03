import { combineReducers } from "redux";
import common from "@redux/common/reducer";
import auth from "@redux/auth/reducer";
import settings from "@redux/settings/reducer";
import global from "@redux/global/reducer";

export default function createReducer(asyncReducers) {
  return combineReducers({
    auth,
    common,
    settings,
    global,
    ...asyncReducers,
  });
}
