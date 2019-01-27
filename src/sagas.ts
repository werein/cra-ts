import { all } from "redux-saga/effects";
import { performAppInit } from "./app/saga";

export default function* sagas() {
  yield all([]);

  yield performAppInit();
}
