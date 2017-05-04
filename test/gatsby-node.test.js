/* eslint-disable no-undef */
jest.mock('path');
const {createPages, onNodeCreate} = require('../gatsby-node');

describe('gatsby-node', () => {
  const boundActionCreators = {};

  describe('createPages', () => {
    let graphql;

    beforeEach(() => {
      boundActionCreators.upsertPage = jest.fn();
      graphql = jest.fn();
    });

    it('should create blog posts', () => {
      graphql.mockReturnValueOnce(
        Promise.resolve(
          {
            data: {
              posts: {
                edges: [
                  {
                    node: {
                      slug: '/blog/2017-04-18--welcoming/'
                    }
                  },
                  {
                    node: {
                      slug: '/blog/2017-05-02--article-2/'
                    }
                  },
                  {
                    node: {
                      slug: '/blog/2017-05-02--article-1/'
                    }
                  },
                  {
                    node: {
                      slug: '/docs/dont-take-me/'
                    }
                  }
                ]
              }
            }
          }
        )
      );

      return createPages({graphql, boundActionCreators})
        .then(() => {
          expect(boundActionCreators.upsertPage.mock.calls).toMatchSnapshot();
        });
    });
  });

  describe('onNodeCreate', () => {
    let getNode;

    beforeEach(() => {
      boundActionCreators.updateNode = jest.fn();
      getNode = jest.fn();
    });

    it('should create slugs for MarkdownRemark file', () => {
      getNode.mockReturnValue(
        {
          relativePath: 'blog/2017-04-18--welcoming/index.md'
        }
      );
      const node = {
        type: 'MarkdownRemark',
        parent: 'parent'
      };
      onNodeCreate({node, boundActionCreators, getNode});

      expect(boundActionCreators.updateNode.mock.calls).toMatchSnapshot();
    });

    it('should do nothing on unknown type', () => {
      getNode.mockReturnValue(
        {
          relativePath: 'blog/2017-04-18--welcoming/index.md'
        }
      );
      const node = {
        type: 'unknown',
        parent: 'parent'
      };
      onNodeCreate({node, boundActionCreators, getNode});

      expect(boundActionCreators.updateNode.mock.calls.length).toBe(0);
    });
  });
});
