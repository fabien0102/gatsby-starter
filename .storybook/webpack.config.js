const path = require("path");
const genDefaultConfig = require("@storybook/react/dist/server/config/defaults/webpack.config.js");

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  // Add typescript loader
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: path.resolve(__dirname, "../src"),
    loader: require.resolve("ts-loader"),
    options: {
      configFile: ".storybook/tsconfig.json"
    }
  });
  config.resolve.extensions.push(".ts", ".tsx");

  // Add markdown loader
  config.module.rules.push({
    test: /\.md$/,
    include: path.resolve(__dirname, "../src"),
    loader: require.resolve("raw-loader")
  });
  config.resolve.extensions.push(".md");

  return config;
};
