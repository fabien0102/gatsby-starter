# TagsCard component

Component to have a pretty tags list from all posts.

## Source
```
<TagsCard tags={props.data.tags} onTagClick={onTagClick.bind(this)}/>
```

## GraphQL query
```
{
  # Get tags
  tags: allMarkdownRemark(frontmatter: {draft: {ne: true}}) {
    groupBy(field: frontmatter___tags) {
      fieldValue
      totalCount
    }
  }
}
```