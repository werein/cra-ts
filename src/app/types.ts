export interface IAppState {
  readonly initialized: boolean;
}

export enum AppActionTypes {
  INIT_SUCCESS = "@@app/INIT_SUCCESS",
  INIT_FAILURE = "@@app/INIT_FAILURE",
}
