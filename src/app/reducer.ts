import { ActionType } from "../types";
import { AppActionTypes, IAppState } from "./types";

export const initialState: IAppState = {
  initialized: false,
};

const reducer = (state: IAppState = initialState, action: ActionType) => {
  switch (action.type) {
    case AppActionTypes.INIT_SUCCESS: {
      return { ...state, initialized: true };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
