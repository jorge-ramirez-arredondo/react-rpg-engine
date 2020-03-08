const path = require("path");
const { loaderByName, addBeforeLoader } = require('@craco/craco')

module.exports = {
  overrideWebpackConfig: ({
    webpackConfig, cracoConfig, pluginOptions, context: { env, paths }
  }) => {

    const rawLoader = {
      test: pluginOptions.test,
      use: [ "gds-loader" ]
    }

    addBeforeLoader(webpackConfig, loaderByName('file-loader'), rawLoader)

    return webpackConfig
  }
}
