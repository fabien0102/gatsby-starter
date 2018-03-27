/* eslint-disable no-undef, max-nested-callbacks */
jest.mock('path');
const {createPages, onCreateNode} = require('../gatsby-node');

describe('gatsby-node', () => {
  const boundActionCreators = {};

  describe('createPages', () => {
    let graphql;

    beforeEach(() => {
      boundActionCreators.createPage = jest.fn();
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
                      fields: {
                        slug: '/blog/2017-04-18--welcoming/'
                      }
                    }
                  },
                  {
                    node: {
                      fields: {
                        slug: '/blog/2017-05-02--article-2/'
                      }
                    }
                  },
                  {
                    node: {
                      fields: {
                        slug: '/blog/2017-05-02--article-1/'
                      }
                    }
                  },
                  {
                    node: {
                      fields: {
                        slug: '/docs/dont-take-me/'
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
          expect(boundActionCreators.createPage.mock.calls).toMatchSnapshot();
        });
    });

    it('should throw an error on graphql error', () => {
      graphql.mockReturnValueOnce(
        Promise.resolve({errors: 'something wrong!'})
      );

      expect(createPages({graphql, boundActionCreators}))
        .toThrow();
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
                      fields: {
                        slug: '/blog/2017-04-18--welcoming/'
                      },
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
                      fields: {
                        slug: '/blog/2017-05-02--article-2/'
                      },
                      frontmatter: {
                        tags: [
                          'test'
                        ]
                      }
                    }
                  },
                  {
                    node: {
                      fields: {
                        slug: '/blog/2017-05-02--article-1/'
                      },
                      frontmatter: {
                        tags: [
                          'test'
                        ]
                      }
                    }
                  },
                  {
                    node: {
                      fields: {
                        slug: '/blog/2017-05-02--article-0/'
                      },
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
          expect(boundActionCreators.createPage.mock.calls).toMatchSnapshot();
        });
    });

    describe('pagination', () => {
      const generateData = n => {
        const edges = [...Array(n)].map((val, i) => ({
          node: {
            fields: {
              slug: `/blog/2017-04-18--article-${i + 1}/`
            }
          }
        }));

        return {data: {posts: {edges}}};
      };

      it('should create 1 page with 5 posts', () => {
        graphql.mockReturnValueOnce(Promise.resolve(generateData(5)));
        return createPages({graphql, boundActionCreators})
          .then(() => {
            const pages = boundActionCreators.createPage.mock.calls
              .filter(d => d[0].path && d[0].path.startsWith('/blog/page/'));
            expect(pages).toMatchSnapshot();
          });
      });

      it('should create 2 pages with 15 posts', () => {
        graphql.mockReturnValueOnce(Promise.resolve(generateData(15)));
        return createPages({graphql, boundActionCreators})
          .then(() => {
            const pages = boundActionCreators.createPage.mock.calls
              .filter(d => d[0].path && d[0].path.startsWith('/blog/page/'));
            expect(pages).toMatchSnapshot();
          });
      });

      it('should create 3 pages with 30 posts', () => {
        graphql.mockReturnValueOnce(Promise.resolve(generateData(30)));
        return createPages({graphql, boundActionCreators})
          .then(() => {
            const pages = boundActionCreators.createPage.mock.calls
              .filter(d => d[0].path && d[0].path.startsWith('/blog/page/'));
            expect(pages).toMatchSnapshot();
          });
      });
    });
  });

  describe('onCreateNode', () => {
    let getNode;

    beforeEach(() => {
      boundActionCreators.createNodeField = jest.fn();
      getNode = jest.fn();
    });

    it('should create slugs for MarkdownRemark file', () => {
      getNode.mockReturnValue(
        {
          relativePath: 'blog/2017-04-18--welcoming/index.md'
        }
      );

      const node = {
        internal: {
          type: 'MarkdownRemark'
        },
        parent: 'parent',
        frontmatter: {
          title: 'Welcoming',
          createdDate: '2017-04-18',
          updatedDate: '2017-05-06',
          author: 'Fabien BERNARD',
          tags: ['starter', 'gatsby'],
          image: 'pexels-photo-253092.jpeg',
          draft: false
        }
      };
      onCreateNode({node, boundActionCreators, getNode});

      expect(boundActionCreators.createNodeField.mock.calls).toMatchSnapshot();
    });

    it('should use frontmatter slug for MarkdownRemark file when defined', () => {
      getNode.mockReturnValue(
        {
          relativePath: 'blog/2017-04-18--welcoming/index.md'
        }
      );

      const node = {
        internal: {
          type: 'MarkdownRemark'
        },
        parent: 'parent',
        frontmatter: {
          title: 'Welcoming',
          createdDate: '2017-04-18',
          updatedDate: '2017-05-06',
          author: 'Fabien BERNARD',
          tags: ['starter', 'gatsby'],
          image: 'pexels-photo-253092.jpeg',
          draft: false,
          slug: '2017-04-18/welcoming'
        }
      };
      onCreateNode({node, boundActionCreators, getNode});

      expect(boundActionCreators.createNodeField.mock.calls).toMatchSnapshot();
    });

    it('should do nothing on unknown type', () => {
      getNode.mockReturnValue(
        {
          relativePath: 'blog/2017-04-18--welcoming/index.md'
        }
      );
      const node = {
        internal: {
          type: 'unknown'
        },
        parent: 'parent'
      };
      onCreateNode({node, boundActionCreators, getNode});

      expect(boundActionCreators.createNodeField.mock.calls.length).toBe(0);
    });
  });
});
