/* tslint:disable no-var-requires */
const withReadme = require("storybook-readme/with-readme").default;
const SidebarMenuReadme = require("./README.md");

import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";
import { withKnobs, text, boolean } from "@kadira/storybook-addon-knobs";
import SidebarMenu from "./SidebarMenu";

const items = [
  { name: "Home", path: "/", exact: true, icon: "home" },
  { name: "About", path: "/about/", exact: true, icon: "info circle" },
  { name: "Blog", path: "/blog/", exact: false, icon: "newspaper" },
];

const LinkStub = (props: any) =>
  <div {...props} onClick={action(props.to.toString())} >{props.children}</div>;

storiesOf("SidebarMenu", module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(SidebarMenuReadme))
  .add("default", () => {
    const pathname = text("pathname", "/");

    return (
      <SidebarMenu Link={LinkStub} items={items} pathname={pathname} visible />
    );
  });
