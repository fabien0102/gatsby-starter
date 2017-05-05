const path = require("path");

module.exports = function (storybookBaseConfig, configType) {
  // Add typescript loader
  storybookBaseConfig.module.loaders.push({
    test: /\.tsx?$/,
    loader: "ts-loader",
    include: path.join(__dirname, "../src")
  });

  storybookBaseConfig.resolve.extensions.push(".ts", ".tsx");

  // Add markdown loader
  storybookBaseConfig.module.loaders.push({
    test: /\.md$/,
    loader: "raw-loader"
  });

  return storybookBaseConfig;
};
