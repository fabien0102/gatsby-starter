import { render } from "enzyme";
import "jest";
import * as React from "react";
import SidebarMenu from "./SidebarMenu";

const items = [
  { name: "Home", path: "/", exact: true },
  { name: "About", path: "/about/", exact: true },
  { name: "Blog", path: "/blog/", exact: false },
];

const LinkStub = (props: any) => <div {...props} />;

describe("SidebarMenu component", () => {
  it("should render correctly", () => {

    const wrapper = render(<SidebarMenu Link={LinkStub} pathname="/" items={items} visible />);
    expect(wrapper).toMatchSnapshot();
  });
});
