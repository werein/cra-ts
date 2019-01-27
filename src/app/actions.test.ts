import * as actions from "./actions";
import { AppActionTypes } from "./types";

describe("Actions/App", () => {
  it("should create success action", () => {
    const expectedAction = {
      type: AppActionTypes.INIT_SUCCESS,
    };
    expect(actions.initSuccess()).toEqual(expectedAction);
  });

  it("should create failure action", () => {
    const expectedAction = {
      type: AppActionTypes.INIT_FAILURE,
    };
    expect(actions.initFailure()).toEqual(expectedAction);
  });
});
