# Gatsby 1.0 starter
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

Gatsby 1.0 starter for generate awesome static website working with a nice env development.

## Warning

This starter is currently in wip and not working out of the box.

I'm (@fabien0102) working on my fork to make gatsby works with this architecture.

Steps for bootstrap this wip project:

```bash
# 1.a Clone gatsby
$ git clone git@github.com:fabien0102/gatsby.git
$ cd gatsby
$ git checkout -b 1.0-typescript-support origin/1.0-typescript-support
$ yarn
$ yarn watch # let this console open

# 1.b Or add a remote to your gatsby fork
$ git add remote fabien0102 git@github.com:fabien0102/gatsby.git
$ git checkout -b 1.0-typescript-support fabien0102/1.0-typescript-support
$ yarn
$ yarn watch # let this console open

# 2. Install gatsby-dev-cli
$ npm i -g gatsby-dev-cli@canary
$ gatsby-dev --set-path-to-repo /path/to/my/cloned/version/gatsby

# 3. Clone this starter
$ git clone git@github.com:fabien0102/gatsby-starter.git
$ cd gatsby-starter

# 4. Install dependencies
$ yarn
$ gatsby-dev # let this console open

# 5. Start play
$ cd /path/to/fabien0102-gatsby-starter
$ yarn start
```

## Getting started

Install this starter (assuming Gatsby is installed) by running from your CLI: 

```bash
$ gatsby new my-website https://github.com/fabien0102/gatsby-starter
```

Run `yarn start` to hot-serve your website on http://localhost:8000.

Run `yarn build` to create static site ready to host (`/public`)

## What's inside?

- [ ] Gatsby 1.0 (alpha)
  - [ ] sharp
  - [ ] offline support
  - [ ] glamor
  - [ ] google analytics
  - [ ] manifest
  - [x] typescript
  - [ ] blog in markdown
- [ ] Best practices tools
  - [x] [Jest](https://facebook.github.io/jest/) / [Enzyme](http://airbnb.io/enzyme/)
  - [x] [Typescript](https://www.typescriptlang.org/) / [tslint](https://palantir.github.io/tslint/)
  - [x] [xo linter](https://github.com/sindresorhus/xo)
  - [x] [Hunsky](https://github.com/typicode/husky) & [lint-staged](https://github.com/okonet/lint-staged) for autofix each commit
  - [ ] Travis config
  - [ ] Code climate config
- [x] SEO
  - [x] [Helmet](https://github.com/nfl/react-helmet)
- [x] Lazyboy tools
  - [x] [plop](https://github.com/amwmedia/plop) templates -> `yarn generate`

## Files structure
```
 .
 ├── gatsby-config.js         // gatsby configuration
 ├── package.json             // package configuration (description, scripts, dependencies)
 ├── public                   // static site files after `yarn build`
 ├── README.md
 ├── src                      // sources
 │   ├── components           // all react components (.tsx) and tests (.test.tsx)
 │   ├── html.tsx             // main html
 │   └── pages                // all pages
 │       ├── 404.tsx
 │       └── index.tsx
 ├── templates                // templates for file generation with `yarn generate`
 ├── tsconfig.json            // typescript configuration
 ├── tslint.json              // tslint configuration
 └── yarn.lock
 ```

## Plop generators - `yarn generate`

To avoid any boring copy/past, this starter-kit have a `plopfile.js` and `/templates` to permit 
simple bootstrap of current file pattern (eg. components and blog post).

You can add/update/remove any generator easily, just please note that you need to `git commit --no-verify` if 
you modify any templates (lint-staged not really love the mix with handlebar and typescript file).

Be lazy and have fun!