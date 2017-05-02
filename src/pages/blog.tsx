import * as React from "react";
import * as Link from "gatsby-link";
import { Header, Grid, Card, List, Container, Feed, Segment, Divider } from "semantic-ui-react";
import { MarkdownRemarkConnection } from "../graphql-types";
import BlogTitle from "../components/BlogTitle";

interface BlogProps {
  data: {
    tags: MarkdownRemarkConnection;
    posts: MarkdownRemarkConnection;
  };
}

export default (props: BlogProps) => {
  const tags = props.data.tags.groupBy;
  const posts = props.data.posts.edges;

  const Tags = (
    <Card>
      <Card.Content>
        <Card.Header>
          Tags
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <List>
          {tags.map((tag) =>
            <List.Item>
              <List.Icon name="tag" />
              <List.Content>{tag.fieldValue} ({tag.totalCount})</List.Content>
            </List.Item>,
          )}
        </List>
      </Card.Content>
    </Card>
  );

  const Posts = (
    <Container>
      {posts.map(({ node }) =>
        <Feed>
          <Feed.Event>
            <Feed.Content>
              <Header as="h2">{node.frontmatter.title}</Header>
              <Feed.Summary>
                By <Feed.User>{node.frontmatter.author.id}</Feed.User>
                <Feed.Date>on {node.frontmatter.updatedDate}</Feed.Date>
              </Feed.Summary>
              <Feed.Extra text>{node.excerpt}</Feed.Extra>
              <br />
              <Link to={node.slug}>Read more…</Link>
            </Feed.Content>
          </Feed.Event>
          <Divider />
        </Feed>,
      )}
    </Container>
  );

  return (
    <Container>
      {/* Title */}
      <BlogTitle />

      {/* Content */}
      <Segment vertical>
        <Grid columns={12}>
          <Grid.Column width={9}>
            <Grid.Row>
              {Posts}
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={3} floated="right">
            <Grid.Row>
              {Tags}
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </Segment>
    </Container>
  );
};

export const pageQuery = `
{
  # Get tags
  tags: allMarkdownRemark(frontmatter: {draft: {ne: true}}) {
    groupBy(field: frontmatter___tags) {
      fieldValue
      totalCount
    }
  }

  # Get posts
  posts: allMarkdownRemark(
    sortBy: { order: DESC, fields: [frontmatter___updatedDate] },
    frontmatter: { draft: { ne: true } },
    fileAbsolutePath: { regex: "/blog/" },
  ) {
    edges {
      node {
        excerpt
        slug
        frontmatter {
          title
          updatedDate(formatString: "DD MMMM, YYYY")
          author {
            id
            avatar {
              children {
                ... on ImageSharp {
                  responsiveResolution(width: 35, height: 35) {
                    width
                    height
                    src
                    srcSet
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;
