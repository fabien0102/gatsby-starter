import * as React from "react";
import { Card, List } from "semantic-ui-react";
import { markdownRemarkGroupConnectionConnection } from "../../graphql-types";

interface TagsCardProps extends React.HTMLProps<HTMLDivElement> {
  tags: markdownRemarkGroupConnectionConnection[];
  onTagClick?: (tagName: string) => void;
}

export default (props: TagsCardProps) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          TagsCard
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <List>
          {props.tags.map((tag) =>
            <List.Item as="a" key={tag.fieldValue} onClick={() => props.onTagClick(tag.fieldValue)}>
              <List.Icon name="tag" />
              <List.Content>{tag.fieldValue} ({tag.totalCount})</List.Content>
            </List.Item>,
          )}
        </List>
      </Card.Content>
    </Card>
  );
};
