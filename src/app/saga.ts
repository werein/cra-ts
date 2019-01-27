import { put } from "redux-saga/effects";
import * as appAction from "./actions";

export function* performAppInit() {
  try {
    yield put(appAction.initSuccess());
  } catch {
    yield put(appAction.initFailure());
  }
}

export default { performAppInit };
