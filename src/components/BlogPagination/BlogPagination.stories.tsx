import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, number } from "@storybook/addon-knobs";
import BlogPagination from "./BlogPagination";
import { resolve } from "path";

const LinkStub = ((props: any) =>
  <div {...props} onClick={action(props.to.toString())} >{props.children}</div>) as any;

storiesOf("BlogPagination", module)
  .addDecorator(withKnobs)
  .addParameters({
    fileName: resolve(__dirname, "README.md"),
  })
  .add("default", () => {
    const activePage = number("activePage", 1);
    const pathname = `/blog/page/${activePage}/`;
    const pageCount = number("pageCount", 10);

    return (
      <BlogPagination pathname={pathname} Link={LinkStub} pageCount={pageCount} />
    );
  });
