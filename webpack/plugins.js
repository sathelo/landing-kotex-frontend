const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ExtraWatchWebpackPlugin = require('extra-watch-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const htmlPlugins = require('./htmlPlugins');
const CheckMetrikaPlugin = require('./CheckMetrikaPlugin');
const CheckFilenamesPlugin = require('./CheckFilenamesPlugin');
const checkDist = require('./checkDist');

module.exports = (projectName, isProduction) => {
  const inKp = !!projectName;

  if (inKp) {
    checkDist();
  }

  const plugins = [
    ...htmlPlugins(projectName, isProduction),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env.PROJECT_NAME': JSON.stringify(projectName),
      'process.env.IN_KP': JSON.stringify(inKp),
    }),
    new ESLintPlugin({
      extensions: ['js', 'vue'],
      lintDirtyModulesOnly: !isProduction || !inKp,
      failOnError: true,
      failOnWarning: true,
    }),
    new StylelintPlugin({
      extensions: ['less'],
      lintDirtyModulesOnly: !isProduction || !inKp,
      failOnError: true,
      failOnWarning: true,
    }),
    new CheckFilenamesPlugin({
      failOnError: isProduction,
    }),
    new CheckMetrikaPlugin({
      inKp,
      disabled: false,
      failOnError: isProduction,
    }),
  ];

  if (isProduction) {
    plugins.push(
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: 'css/[name].css?v=[contenthash:8]',
      })
    );
  } else {
    plugins.push(
      new ExtraWatchWebpackPlugin({
        dirs: [path.resolve('__mocks__')],
      })
    );
  }

  if (inKp && isProduction) {
    plugins.push(
      new CopyWebpackPlugin({
        patterns: [{ from: 'static', to: 'static' }],
      })
    );
  } else {
    plugins.push(
      new CopyWebpackPlugin({
        patterns: [
          { from: 'static', to: 'static' },
          { from: '__mocks__', to: '__mocks__' },
        ],
      })
    );
  }

  return plugins;
};
