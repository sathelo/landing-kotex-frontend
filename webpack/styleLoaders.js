const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (isProduction) => {
  const loaders = [];

  if (isProduction) {
    loaders.push(MiniCssExtractPlugin.loader);
  } else {
    loaders.push('vue-style-loader');
  }

  loaders.push(
    {
      loader: 'css-loader',
      options: {
        modules: {
          mode: 'icss',
        },
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: [['postcss-preset-env']],
        },
      },
    }
  );

  loaders.push('less-loader');

  return [
    {
      test: /\.less$/,
      use: loaders,
    },
  ];
};
