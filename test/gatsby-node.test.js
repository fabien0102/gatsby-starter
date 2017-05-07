/* eslint-disable no-undef, max-nested-callbacks */
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

    it('should create tags pages', () => {
      graphql.mockReturnValueOnce(
        Promise.resolve(
          {
            data: {
              posts: {
                edges: [
                  {
                    node: {
                      slug: '/blog/2017-04-18--welcoming/',
                      frontmatter: {
                        tags: [
                          'starter',
                          'gatsby'
                        ]
                      }
                    }
                  },
                  {
                    node: {
                      slug: '/blog/2017-05-02--article-2/',
                      frontmatter: {
                        tags: [
                          'test'
                        ]
                      }
                    }
                  },
                  {
                    node: {
                      slug: '/blog/2017-05-02--article-1/',
                      frontmatter: {
                        tags: [
                          'test'
                        ]
                      }
                    }
                  },
                  {
                    node: {
                      slug: '/blog/2017-05-02--article-0/',
                      frontmatter: {
                        tags: null
                      }
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

    describe('pagination', () => {
      const generateData = n => {
        const edges = [...Array(n)].map((val, i) => ({
          node: {
            slug: `/blog/2017-04-18--article-${i + 1}/`
          }
        }));

        return {data: {posts: {edges}}};
      };

      it('should create 1 page with 5 posts', () => {
        graphql.mockReturnValueOnce(Promise.resolve(generateData(5)));
        return createPages({graphql, boundActionCreators})
          .then(() => {
            const pages = boundActionCreators.upsertPage.mock.calls
              .filter(d => d[0].path && d[0].path.startsWith('/blog/page/'));
            expect(pages).toMatchSnapshot();
          });
      });

      it('should create 2 pages with 15 posts', () => {
        graphql.mockReturnValueOnce(Promise.resolve(generateData(15)));
        return createPages({graphql, boundActionCreators})
          .then(() => {
            const pages = boundActionCreators.upsertPage.mock.calls
              .filter(d => d[0].path && d[0].path.startsWith('/blog/page/'));
            expect(pages).toMatchSnapshot();
          });
      });

      it('should create 3 pages with 30 posts', () => {
        graphql.mockReturnValueOnce(Promise.resolve(generateData(30)));
        return createPages({graphql, boundActionCreators})
          .then(() => {
            const pages = boundActionCreators.upsertPage.mock.calls
              .filter(d => d[0].path && d[0].path.startsWith('/blog/page/'));
            expect(pages).toMatchSnapshot();
          });
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
