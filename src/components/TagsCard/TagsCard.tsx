import * as React from "react";
import { Card, List } from "semantic-ui-react";
import { markdownRemarkGroupConnectionConnection } from "../../graphql-types";

interface TagsCardProps extends React.HTMLProps<HTMLDivElement> {
  tags: markdownRemarkGroupConnectionConnection[];
  tag?: string;
  onTagClick?: (tagName: string) => void;
}

// TODO add Link for navigation

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
          {props.tags.map((tag) => {
            const isActive = tag.fieldValue === props.tag;
            const activeStyle = {
              fontWeight: "700",
            };
            return (
              <List.Item as="a" key={tag.fieldValue} onClick={() => props.onTagClick(tag.fieldValue)}>
                <List.Icon name="tag" color={isActive ? "blue" : null} />
                <List.Content style={isActive ? activeStyle : null}>
                  {tag.fieldValue} ({tag.totalCount})
                </List.Content>
              </List.Item>
            );
          })}
        </List>
      </Card.Content>
    </Card>
  );
};
