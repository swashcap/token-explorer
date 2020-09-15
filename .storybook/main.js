const path = require('path');

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal(config) {
    // Add Sass support
    // https://storybook.js.org/docs/react/configure/webpack#extending-storybooks-webpack-config
    config.module.rules.push({
      exclude: /node_modules/,
      include: path.resolve(__dirname, '../'),
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    });

    return config;
  },
};
