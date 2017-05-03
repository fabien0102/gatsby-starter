import * as React from "react";
import { storiesOf, action } from "@kadira/storybook";
import { WithNotes } from "@kadira/storybook-addon-notes";
import Tags from "./Tags";
import { markdownRemarkGroupConnectionConnection } from "../graphql-types";

const tags = [
  { fieldValue: "tag01", totalCount: 2 },
  { fieldValue: "tag02", totalCount: 4 },
  { fieldValue: "tag03", totalCount: 6 },
] as markdownRemarkGroupConnectionConnection[];

const notes = `
GraphQL query to have tags:

{
  # Get tags
  tags: allMarkdownRemark(frontmatter: {draft: {ne: true}}) {
    groupBy(field: frontmatter___tags) {
      fieldValue
      totalCount
    }
  }
}
</code>
`;

storiesOf("Tags", module)
  .add("default", () => (
    <WithNotes notes={notes}>
      <Tags onTagClick={action("tag clicked")} tags={tags}/>
    </WithNotes>
  ));
