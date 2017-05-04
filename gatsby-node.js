const path = require('path');
const slash = require('slash');
const {kebabCase, uniq, get, compact} = require('lodash');

const cleanArray = arr => compact(uniq(arr));

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
    const templates = ['blogPost', 'tagsPage']
      .reduce((mem, templateName) => {
        return Object.assign({}, mem,
        {[templateName]: path.resolve(`src/templates/${kebabCase(templateName)}.tsx`)});
      }, {});

    graphql(
      `
      {
        posts: allMarkdownRemark {
          edges {
            node {
              slug
              frontmatter {
                tags
              }
            }
          }
        }
      }
    `
    ).then(result => {
      if (result.errors) {
        return reject(result.errors);
      }

      // Create blog pages
      result.data.posts.edges
        .filter(edge => edge.node.slug.startsWith('/blog/'))
        .forEach(edge => {
          upsertPage({
            path: edge.node.slug,
            component: slash(templates.blogPost),
            context: {
              slug: edge.node.slug
            }
          });
        });

      // Create tags pages
      result.data.posts.edges
        .reduce((mem, edge) =>
          cleanArray(mem.concat(get(edge, 'node.frontmatter.tags')))
        , [])
        .forEach(tag => {
          upsertPage({
            path: `/tags/${kebabCase(tag)}/`,
            component: slash(templates.tagsPage),
            context: {
              tag
            }
          });
        });

      resolve();
    });
  });
};
