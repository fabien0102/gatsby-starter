import { shallow } from "enzyme";
import "jest";
import * as React from "react";
import HeaderMenu from "./HeaderMenu";

const items = [
  {name: "Home", path: "/", exact: true},
  {name: "About", path: "/about/", exact: true},
  {name: "Blog", path: "/blog/", exact: false},
];

const LinkStub = (props: any) => <div {...props} />;

describe("HeaderMenu component", () => {
  it("should nothing active", () => {
    const wrapper = shallow(<HeaderMenu Link={LinkStub} items={items} pathname="/plop" />);
    expect(wrapper.find({active: true}).length).toBe(0);
  });

  it("should have about as active (match exact)", () => {
    const wrapper = shallow(<HeaderMenu Link={LinkStub} items={items} pathname="/about/" />);
    expect(wrapper.find({name: "About"}).prop("active")).toBeTruthy();
  });

  it("should have blog as active (match not exact)", () => {
    const wrapper = shallow(<HeaderMenu Link={LinkStub} items={items} pathname="/blog/toto" />);
    expect(wrapper.find({name: "Blog"}).prop("active")).toBeTruthy();
  });

  it("should have inverted style", () => {
    const wrapper = shallow(<HeaderMenu Link={LinkStub} items={items} pathname="/blog/toto" inverted />);
    expect(wrapper.find({inverted: true}).length).toBe(1);
  });
});
