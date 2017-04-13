module.exports = {
  htmlPath: `/src/html.tsx`,
  siteMetadata: {
    title: `My website`
  },
  plugins: [
    // Add pages
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`
      }
    },
    // Add typescript stack into webpack
    `gatsby-plugin-typescript`
  ]
};
