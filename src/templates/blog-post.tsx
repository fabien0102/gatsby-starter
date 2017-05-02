import * as React from "react";
import { Header, Container, Segment, Icon, Label, Button, Grid, Card, Image, Item } from "semantic-ui-react";
import { MarkdownRemark } from "../graphql-types";
import BlogTitle from "../components/BlogTitle";

interface BlogPostProps {
  data: {
    post: MarkdownRemark;
  };
}

export default (props: BlogPostProps) => {
  const { frontmatter, html, timeToRead } = props.data.post;

  const tags = props.data.post.frontmatter.tags
    .map((tag) => <Label as="a">{tag}</Label>);

  const recents = [{ title: "", image: "", excerpt: "", slug: "" }]
    .map((post) =>
      (
        <Grid.Row>
          <Card>
            <Image src={post.image} />
            <Card.Header>{post.title}</Card.Header>
            <Card.Content>{post.excerpt}</Card.Content>
          </Card>
        </Grid.Row>
      ));

  return (
    <Container>
      <BlogTitle />
      <Segment vertical style={{ border: "none" }}>
        <Item.Group>
          <Item>
            <Item.Image size="tiny"
              src={frontmatter.author.avatar.children[0].responsiveResolution.src}
              srcSet={frontmatter.author.avatar.children[0].responsiveResolution.srcSet}
            />
            <Item.Content>
              <Item.Description>{frontmatter.author.id}</Item.Description>
              <Item.Meta>{frontmatter.author.bio}</Item.Meta>
              <Item.Extra>{frontmatter.updatedDate} - {timeToRead} min read</Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
        <Header as="h1">{frontmatter.title}</Header>
      </Segment>
      <Segment vertical
        style={{ border: "none" }}
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
      <Segment vertical>
        {tags}
      </Segment>
      <Segment vertical>
        {/* TODO Navigation between posts */}
        <Button basic content="Previous article" icon="left arrow" labelPosition="left" floated="left" />
        <Button basic content="Next article" icon="right arrow" labelPosition="right" floated="right" />

        {/* TODO Add recent posts */}
        <Grid columns={2}>
          <Grid.Row>
            {recents}
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  );
};

export const pageQuery = `
  query TemplateBlogPost($slug: String!) {
    post: markdownRemark(slug: {eq: $slug}) {
      html
      excerpt
      timeToRead
      slug
      frontmatter {
        icon
        tags
        author {
          id
          bio
          twitter
          avatar {
            children {
              ... on ImageSharp {
                responsiveResolution(width: 60, height: 60, quality: 75) {
                  src
                  srcSet
                }
              }
            }
          }
        }
        title
        updatedDate(formatString: "MMM D, YYYY")
      }
    }
  }
`;
