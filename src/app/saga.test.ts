import { runSaga } from "redux-saga";
import * as appActions from "./actions";
import { performAppInit } from "./saga";

describe("Sagas/App", () => {
  it("should perform app initaliazation", async () => {
    const dispatched: any[] = [];

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      performAppInit,
    );

    expect(dispatched).toEqual([appActions.initSuccess()]);
  });
});
