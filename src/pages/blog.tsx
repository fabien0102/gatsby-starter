import * as React from "react";
import * as Link from "gatsby-link";
import { Header, Grid, Card, List, Container, Feed, Segment, Comment } from "semantic-ui-react";
import { MarkdownRemarkConnection, ImageSharp } from "../graphql-types";
import BlogTitle from "../components/BlogTitle";
import Tags from "../components/Tags/Tags";

interface BlogProps {
  data: {
    tags: MarkdownRemarkConnection;
    posts: MarkdownRemarkConnection;
  };
}

export default (props: BlogProps) => {
  const tags = props.data.tags.groupBy;
  const posts = props.data.posts.edges;

  const Posts = (
    <Container>
      {posts.map(({ node }) => {
        const { frontmatter, timeToRead, slug, excerpt } = node;
        const avatar = frontmatter.author.avatar.children[0] as ImageSharp;
        const cover = frontmatter.image.children[0] as ImageSharp;

        const extra = (
          <Comment.Group>
            <Comment>
              <Comment.Avatar
                src={avatar.responsiveResolution.src}
                srcSet={avatar.responsiveResolution.srcSet}
              />
              <Comment.Content>
                <Comment.Author style={{ fontWeight: 400 }}>
                  {frontmatter.author.id}
                </Comment.Author>
                <Comment.Metadata style={{ margin: 0 }}>
                  {frontmatter.updatedDate} - {timeToRead} min read
              </Comment.Metadata>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        );

        const description = (
          <Card.Description>
            {excerpt}
            <br />
            <Link to={slug}>Read more…</Link>
          </Card.Description>
        );

        return (
          <Card key={slug}
            fluid
            image={{
              src: cover.responsiveResolution.src,
              srcSet: cover.responsiveResolution.srcSet,
            }}
            header={frontmatter.title}
            extra={extra}
            description={description}
          />
        );
      })}
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
              <Tags tags={tags} />
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
        timeToRead
        slug
        frontmatter {
          title
          updatedDate(formatString: "DD MMMM, YYYY")
          image {
          	children {
              ... on ImageSharp {
                responsiveResolution(width: 700, height: 100) {
                  src
                  srcSet
                }
              }
            }
          }
          author {
            id
            avatar {
              children {
                ... on ImageSharp {
                  responsiveResolution(width: 35, height: 35) {
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
