import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { HeaderMenu } from "./HeaderMenu";
import { Dispatch } from "redux";
import { resolve } from "path";

const items = [
  { name: "Home", path: "/", exact: true },
  { name: "About", path: "/about/", exact: true },
  { name: "Blog", path: "/blog/", exact: false },
];

const LinkStub = (props: any) =>
  <div {...props} onClick={action(props.to.toString())} >{props.children}</div>;
const dispatchStub: Dispatch = (a: any) => { action(a.type)(a); return a; };

storiesOf("HeaderMenu", module)
  .addDecorator(withKnobs)
  .addParameters({
    fileName: resolve(__dirname, "README.md"),
  })
  .add("default", () => {
    const pathname = text("pathname", "/");
    const inverted = boolean("inverted", false);

    return (
      <HeaderMenu Link={LinkStub} items={items} pathname={pathname} inverted={inverted} dispatch={dispatchStub} />
    );
  });
