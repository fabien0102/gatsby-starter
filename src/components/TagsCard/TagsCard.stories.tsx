/* tslint:disable no-var-requires */
const withReadme = require("storybook-readme/with-readme").default;
const TagsCardReadme = require("./README.md");

import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";
import TagsCard from "./TagsCard";
import { markdownRemarkGroupConnectionConnection } from "../../graphql-types";

const tags = [
  { fieldValue: "tag01", totalCount: 2 },
  { fieldValue: "tag02", totalCount: 4 },
  { fieldValue: "tag03", totalCount: 6 },
] as markdownRemarkGroupConnectionConnection[];

storiesOf("TagsCard", module)
  .addDecorator(withReadme(TagsCardReadme))
  .add("default", () => (
    <TagsCard onTagClick={action("tag clicked")} tags={tags} />
  ));
