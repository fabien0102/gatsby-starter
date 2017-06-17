import * as React from "react";
import Link from "gatsby-link";
import { Header, Container, Segment, Icon, Label, Button, Grid, Card, Image, Item, Comment } from "semantic-ui-react";
import { MarkdownRemark, ImageSharp, MarkdownRemarkConnection } from "../graphql-types";
import BlogTitle from "../components/BlogTitle";

interface BlogPostProps {
  data: {
    post: MarkdownRemark;
    recents: MarkdownRemarkConnection;
  };
}

export default (props: BlogPostProps) => {
  const { frontmatter, html, timeToRead } = props.data.post;
  const avatar = frontmatter.author.avatar.children[0] as ImageSharp;

  const tags = props.data.post.frontmatter.tags
    .map((tag) => <Label key={tag}><Link to={`/blog/tags/${tag}/`}>{tag}</Link></Label>);

  const recents = props.data.recents.edges
    .map(({ node }) => {
      const recentAvatar = node.frontmatter.author.avatar.children[0] as ImageSharp;
      const recentCover = node.frontmatter.image.children[0] as ImageSharp;
      const extra = (
        <Comment.Group>
          <Comment>
            <Comment.Avatar
              src={recentAvatar.responsiveResolution.src}
              srcSet={recentAvatar.responsiveResolution.srcSet}
            />
            <Comment.Content>
              <Comment.Author style={{ fontWeight: 400 }}>
                {frontmatter.author.id}
              </Comment.Author>
              <Comment.Metadata style={{ margin: 0 }}>
                {timeToRead} min read
              </Comment.Metadata>
            </Comment.Content>
          </Comment>
        </Comment.Group>
      );

      return (
        <div key={node.fields.slug} style={{paddingBottom: "1em"}}>
          <Card as={Link}
            to={node.fields.slug}
            image={{
              src: recentCover.responsiveResolution.src,
              srcSet: recentCover.responsiveResolution.srcSet,
            }}
            header={node.frontmatter.title}
            extra={extra}
          />
        </div>
      );
    });

  return (
    <Container>
      <BlogTitle />
      <Segment vertical style={{ border: "none" }}>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" shape="circular"
              src={avatar.responsiveResolution.src}
              srcSet={avatar.responsiveResolution.srcSet}
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
        <Grid padded centered>
          {recents}
        </Grid>
      </Segment>
    </Container>
  );
};

export const pageQuery = graphql`
  query TemplateBlogPost($slug: String!) {
  post: markdownRemark(fields: {slug: {eq: $slug}}) {
    html
    excerpt
    timeToRead
    fields {
      slug
    }
    frontmatter {
      tags
      author {
        id
        bio
        twitter
        avatar {
          children {
            ... on ImageSharp {
              responsiveResolution(width: 80, height: 80, quality: 100) {
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
  recents: allMarkdownRemark(
    filter: {
      fields: {slug: {ne: $slug}}
      frontmatter: {draft: {ne: true}},
      fileAbsolutePath: {regex: "/blog/"},
    },
    sort: {order: DESC, fields: [frontmatter___updatedDate]},
    limit: 4
  ) {
    edges {
      node {
        fields {
          slug
        }
        timeToRead
        frontmatter {
          title
          image {
            children {
              ... on ImageSharp {
                responsiveResolution(width: 300, height: 100) {
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
                  responsiveResolution(width: 36, height: 36) {
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
