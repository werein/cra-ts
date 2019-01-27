import { createAction as action } from "@martin_hotell/rex-tils";
import { AppActionTypes } from "./types";

export const initSuccess = () => action(AppActionTypes.INIT_SUCCESS);
export const initFailure = () => action(AppActionTypes.INIT_FAILURE);
