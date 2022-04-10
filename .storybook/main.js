const custom = require('../webpack.config')

module.exports = {
  stories: ['../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
  webpackFinal: (config) => {
    return {
      ...config,
      resolve: {
        alias: { ...config.resolve.alias, ...custom.resolve.alias },
        extensions: [...config.resolve.extensions, ...custom.resolve.extensions],
      },
      module: { ...config.module, rules: custom.module.rules },
    }
  },
}
