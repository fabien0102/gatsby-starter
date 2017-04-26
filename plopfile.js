/**
 * Plopfile generator
 *
 * https://github.com/amwmedia/plop
 */

module.exports = plop => {
  plop.setGenerator('component', {
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name?',
        validate: value => /.+/.test(value) ? true : 'name is required'
      }
    ],
    actions: data => {
      return [
        {
          type: 'add',
          path: 'src/components/{{pascalCase name}}.tsx',
          templateFile: 'templates/component.tsx.template'
        },
        {
          type: 'add',
          path: 'src/components/{{pascalCase name}}.test.tsx',
          templateFile: 'templates/component.test.tsx.template'
        }
      ];
    }
  });
};
