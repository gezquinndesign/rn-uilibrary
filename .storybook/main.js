require('regenerator-runtime/runtime')

const custom = require('../webpack.config')

module.exports = {
  stories: ['../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-react-native-web'],
  framework: '@storybook/react',
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
