/**
 * Plopfile generator
 *
 * https://github.com/amwmedia/plop
 */

const fs = require('fs');

const authors = JSON.parse(fs.readFileSync('./data/author.json'));

const inputRequired = name => {
  return value => (/.+/.test(value) ? true : `${name} is required`);
};

module.exports = plop => {
  plop.setGenerator('component', {
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name?',
        validate: inputRequired('name')
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}.tsx',
        templateFile: 'templates/component-tsx.template'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}.test.tsx',
        templateFile: 'templates/component-test-tsx.template'
      }
    ]
  });

  plop.setGenerator('page', {
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Page name?',
        validate: inputRequired('name')
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/pages/{{camelCase name}}.tsx',
        templateFile: 'templates/page-tsx.template'
      }
    ]
  });

  plop.setGenerator('blog post', {
    prompts: [
      {
        type: 'input',
        name: 'title',
        message: 'Blog post title?',
        validate: inputRequired('title')
      },
      {
        type: 'input',
        name: 'icon',
        message: 'A beautiful icon for your blog post? (http://react.semantic-ui.com/elements/icon)',
        validate: inputRequired('icon')
      },
      {
        type: 'list',
        name: 'author',
        message: 'The author of blog post?',
        choices: authors.map(author => ({name: author.id, value: author.id}))
      },
      {
        type: 'input',
        name: 'tags',
        message: 'tags? (separate with coma)'
      },
      {
        type: 'confirm',
        name: 'draft',
        message: 'It\'s a draft?'
      }
    ],
    actions: data => {
      // Get current date
      data.createdDate = new Date().toISOString().split('T')[0];

      // Parse tags as yaml array
      if (data.tags) {
        data.tags = `\ntags:\n  - ${data.tags.split(',').join('\n  - ')}`;
      }

      return [
        {
          type: 'add',
          path: 'data/blog/{{createdDate}}--{{dashCase title}}/index.md',
          templateFile: 'templates/blog-post-md.template'
        }
      ];
    }
  });
};
