import { shallow } from "enzyme";
import React from "react";
import { App } from "./app";

describe("<App />", () => {
  it("renders loading component", () => {
    const wrapper = shallow(<App initialized={false} />);
    expect(wrapper.find(".loading")).toHaveLength(1);
    expect(wrapper.find(".layout")).toHaveLength(0);
  });

  it("renders app once initialized", () => {
    const wrapper = shallow(<App initialized={true} />);
    expect(wrapper.find(".loading")).toHaveLength(0);
    expect(wrapper.find(".layout")).toHaveLength(1);
  });
});
