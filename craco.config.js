const cracoPluginGDSLoader = require("./cracoPlugins/craco-plugin-gds-loader");

module.exports = {
  plugins: [
   { plugin: cracoPluginGDSLoader, options: { test: /\.gds$/ } }
  ]
};
