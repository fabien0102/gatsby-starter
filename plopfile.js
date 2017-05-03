/**
 * Plopfile generator
 *
 * https://github.com/amwmedia/plop
 */

const fs = require('fs');
const {pascalCase, sentenceCase} = require('change-case');

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
      },
      {
        type: 'input',
        name: 'description',
        message: 'Component description?',
        default: data => `${sentenceCase(data.name)} component.`
      },
      {
        type: 'checkbox',
        name: 'files',
        message: 'Wish files do you generate?',
        choices: data => [
          {
            name: `${pascalCase(data.name)}.test.tsx`,
            value: 'test',
            checked: true
          },
          {
            name: `${pascalCase(data.name)}.stories.tsx`,
            value: 'stories',
            checked: true
          }
        ]
      }
    ],
    actions: data => {
      const basePath = data.files.length ?
        'src/components/{{pascalCase name}}/' :
        'src/components/';

      const actions = [
        {
          type: 'add',
          path: `${basePath}{{pascalCase name}}.tsx`,
          templateFile: 'templates/component-tsx.template'
        }
      ];

      // Add test file
      if (data.files.includes('test')) {
        actions.push({
          type: 'add',
          path: `${basePath}{{pascalCase name}}.test.tsx`,
          templateFile: 'templates/component-test-tsx.template'
        });
      }

      // Add stories file
      if (data.files.includes('stories')) {
        actions.push({
          type: 'add',
          path: `${basePath}{{pascalCase name}}.stories.tsx`,
          templateFile: 'templates/component-stories-tsx.template'
        });
        actions.push({
          type: 'add',
          path: `${basePath}README.md`,
          templateFile: 'templates/component-readme-md.template'
        });
      }

      return actions;
    }
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
