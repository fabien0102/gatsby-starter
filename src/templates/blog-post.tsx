import * as React from "react";
import { Header, Container, Segment, Icon } from "semantic-ui-react";
import { MarkdownRemark } from "../graphql-types";
import BlogTitle from "../components/BlogTitle";

interface BlogPostProps {
  data: {
    post: MarkdownRemark;
  };
}

export default (props: BlogPostProps) => {
  const {frontmatter, html} = props.data.post;
  return (
    <Container>
      <BlogTitle />
      <Segment vertical>
        <Header as="h2">
          <Icon name={frontmatter.icon}/>
          <Header.Content>
            {frontmatter.title}
          </Header.Content>
        </Header>
      </Segment>
      <Segment vertical
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
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
        title
        date(formatString: "MMM D, YYYY")
        rawDate: date
      }
    }
  }
`;
