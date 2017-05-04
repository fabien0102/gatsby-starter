import { shallow } from "enzyme";
import "jest";
import * as React from "react";
import TagsCard from "./TagsCard";

import { Card, List } from "semantic-ui-react";
import { markdownRemarkGroupConnectionConnection } from "../../graphql-types";

describe("TagsCard component", () => {
  it("should list all the tags", () => {
    const tags = [
      { fieldValue: "tag01", totalCount: 2 },
      { fieldValue: "tag02", totalCount: 4 },
      { fieldValue: "tag03", totalCount: 6 },
    ] as markdownRemarkGroupConnectionConnection[];

    const wrapper = shallow(<TagsCard tags={tags} />);

    expect(wrapper.find(List.Item)).toHaveLength(3);
  });

  it("should call onTagClick on click", () => {
    const onClick = jest.fn<(tagName: string) => void>();
    const tags = [
      { fieldValue: "tag01", totalCount: 2 },
      { fieldValue: "tag02", totalCount: 4 },
      { fieldValue: "tag03", totalCount: 6 },
    ] as markdownRemarkGroupConnectionConnection[];

    const wrapper = shallow(<TagsCard tags={tags} onTagClick={onClick}/>);
    wrapper.find(List.Item).first().simulate("click");

    expect(onClick.mock.calls).toMatchSnapshot();
  });
});
