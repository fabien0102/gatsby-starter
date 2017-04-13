import { shallow } from "enzyme";
import "jest";
import * as React from "react";
import Title from "./Title";

describe("Title component", () => {
  it("should render h1 correctly", () => {
    const title = shallow(<Title>Hello word</Title>);
    expect(title.contains(<h1>Hello word</h1>)).toBeTruthy();
  });
});
