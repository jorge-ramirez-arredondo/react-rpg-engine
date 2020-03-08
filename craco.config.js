const rawWebpackConfigPlugin = require("./cracoPlugins/craco-plugin-gds-loader");

module.exports = {
  plugins: [
   { plugin: rawWebpackConfigPlugin, options: { test: /\.gds$/ } }
  ]
};
