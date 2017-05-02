# Gatsby 1.0 starter
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

Demo: https://fabien0102-gatsby-starter.netlify.com/

Gatsby 1.0 starter for generate awesome static website working with a nice env development.

## Warning

This starter is currently in wip (see progression to #What's inside session).

## Getting started

Install this starter (assuming Gatsby is installed) by running from your CLI: 

```bash
$ gatsby new my-website https://github.com/fabien0102/gatsby-starter
```

Run `yarn start` (or press `F5` if you are on VSCode) to hot-serve your website on http://localhost:8000.

Run `yarn build` to create static site ready to host (`/public`)

## What's inside?

- [ ] Gatsby 1.0 (alpha)
  - [x] sharp
  - [x] offline support
  - [ ] glamor
  - [ ] google analytics
  - [x] manifest
  - [x] typescript
  - [x] blog in markdown
- [x] Best practices tools
  - [x] [Jest](https://facebook.github.io/jest/) / [Enzyme](http://airbnb.io/enzyme/)
  - [ ] [Storybook](https://storybooks.js.org/)
  - [x] [Typescript](https://www.typescriptlang.org/) / [tslint](https://palantir.github.io/tslint/)
  - [x] [xo linter](https://github.com/sindresorhus/xo)
  - [x] [Hunsky](https://github.com/typicode/husky) & [lint-staged](https://github.com/okonet/lint-staged) for autofix each commit
  - [ ] [Remark-lint](https://github.com/wooorm/remark-lint)
  - [ ] Travis config
  - [ ] Code climate config
- [ ] SEO
  - [ ] [Helmet](https://github.com/nfl/react-helmet)
- [x] [Semantic-ui](http://react.semantic-ui.com) for styling
- [x] Lazyboy tools
  - [x] [plop](https://github.com/amwmedia/plop) templates -> `yarn generate`

## Files structure
```
 .
 ├── gatsby-config.js         // gatsby configuration
 ├── gatsby-node.js           // gatsby node hooks
 ├── package.json             // package configuration (description, scripts, dependencies)
 ├── plopfile.js              // plop generators configuration
 ├── public                   // static site files after `yarn build`
 ├── README.md
 ├── src                      // sources
 │   ├── components           // all react components (.tsx) and tests (.test.tsx)
 │   ├── html.tsx             // main html
 │   ├── layouts              // layouts
 │   │   └── default.tsx
 │   ├── pages                // all pages
 │   │   ├── 404.tsx
 │   │   └── index.tsx
 │   └── templates            // all templates (used for create pages from markdown)
 ├── templates                // templates for file generation with `yarn generate`
 ├── tsconfig.json            // typescript configuration
 ├── tslint.json              // tslint configuration
 └── yarn.lock
 ```

## Plop generators - `yarn generate`

To avoid any boring copy/past, this starter-kit have a `plopfile.js` and `/templates` to permit 
simple bootstrap of current file pattern (eg. components and blog post).

Be lazy and have fun!
