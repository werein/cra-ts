import { ActionsUnion } from "@martin_hotell/rex-tils";
import { RouterAction } from "connected-react-router";
import { Dispatch as ReduxDispatch } from "redux";

import * as appActions from "./app/actions";
import { IAppState } from "./app/types";

export interface IState {
  readonly app: IAppState;
}

export type ActionType = ActionsUnion<typeof appActions>;

export type Dispatch = ReduxDispatch<ActionType | RouterAction>;
