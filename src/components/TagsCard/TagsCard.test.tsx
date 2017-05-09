import { shallow } from "enzyme";
import "jest";
import * as React from "react";
import { LinkProps } from "react-router";
import TagsCard from "./TagsCard";

import { Card, List } from "semantic-ui-react";
import { markdownRemarkGroupConnectionConnection } from "../../graphql-types";

describe("TagsCard component", () => {
  let LinkStub: any;

  beforeEach(() => {
    LinkStub = (props: LinkProps) =>
      <div>{props.children}</div>;
  });

  it("should list all the tags", () => {
    const tags = [
      { fieldValue: "tag01", totalCount: 2 },
      { fieldValue: "tag02", totalCount: 4 },
      { fieldValue: "tag03", totalCount: 6 },
    ] as markdownRemarkGroupConnectionConnection[];

    const wrapper = shallow(<TagsCard tags={tags} Link={LinkStub} />);

    expect(wrapper.find(List.Item)).toHaveLength(3);
  });

  it("should have on tag active", () => {
    const tags = [
      { fieldValue: "tag01", totalCount: 2 },
      { fieldValue: "tag02", totalCount: 4 },
      { fieldValue: "tag03", totalCount: 6 },
    ] as markdownRemarkGroupConnectionConnection[];

    const wrapper = shallow(<TagsCard tags={tags} Link={LinkStub} tag="tag01"/>);

    expect(wrapper).toMatchSnapshot();
  });
});
