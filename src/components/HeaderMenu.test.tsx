import { shallow } from "enzyme";
import "jest";
import * as React from "react";
import HeaderMenu from "./HeaderMenu";

describe("HeaderMenu component", () => {
  it("should have Home as active item", () => {
    const wrapper = shallow(<HeaderMenu pathname="/"/>);
    expect(wrapper.find({active: true}).prop("name")).toBe("Home");
  });

  it("should have About as active item", () => {
    const wrapper = shallow(<HeaderMenu pathname="/about/"/>);
    expect(wrapper.find({active: true}).prop("name")).toBe("About");
  });

  it("should have Blog as active item", () => {
    const wrapper = shallow(<HeaderMenu pathname="/blog/"/>);
    expect(wrapper.find({active: true}).prop("name")).toBe("Blog");
  });
});
