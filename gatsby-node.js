const path = require('path');
const slash = require('slash');

// Create slugs for files.
// Slug will used for blog page path.
exports.onNodeCreate = ({node, boundActionCreators, getNode}) => {
  const {updateNode} = boundActionCreators;
  let slug;
  switch (node.type) {
    case `MarkdownRemark`:
      const fileNode = getNode(node.parent);
      const [basePath, name] = fileNode.relativePath.split('/');
      slug = `/${basePath}/${name}/`;
      break;
  }
  if (slug) {
    updateNode(Object.assign({}, node, {slug}));
  }
};

// Implement the Gatsby API `createPages`.
// This is called after the Gatsby bootstrap is finished
// so you have access to any information necessary to
// programatically create pages.
exports.createPages = ({graphql, boundActionCreators}) => {
  const {upsertPage} = boundActionCreators;

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(
      `src/templates/blog-post.tsx`
    );
    graphql(
      `
      {
        posts: allMarkdownRemark {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
    ).then(result => {
      if (result.errors) {
        return reject(result.errors);
      }

      result.data.posts.edges
        .filter(edge => edge.node.slug.startsWith('/blog/'))
        .forEach(edge => {
          upsertPage({
            path: edge.node.slug,
            component: slash(blogPostTemplate),
            context: {
              slug: edge.node.slug
            }
          });
        });
      resolve();
    });
  });
};
