import * as actions from "./actions";
import reducer, { initialState } from "./reducer";

describe("Rerucers/App", () => {
  it("gets initalized", () => {
    expect(reducer(initialState, actions.initSuccess())).toEqual({
      ...initialState,
      initialized: true,
    });
  });
});
