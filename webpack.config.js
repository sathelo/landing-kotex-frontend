const path = require('path');
const scriptsLoaders = require('./webpack/scriptLoaders');
const stylesLoaders = require('./webpack/styleLoaders');
const assetsLoaders = require('./webpack/assetLoaders');
const vueLoaders = require('./webpack/vueLoaders');
const plugins = require('./webpack/plugins');
const optimization = require('./webpack/optimization');

const projectName = '';
const nameRepo = `/${process.env.npm_package_name}/`; // for gh-pages

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  const isDevelopment = argv.mode === 'development';
  let myPublicPath = '';

  if (nameRepo && !isDevelopment) myPublicPath = nameRepo;
  else {
    myPublicPath = isProduction ? '../' : '/';
  }

  if (isProduction) {
    process.env.NODE_ENV = 'production';
  }

  return {
    entry: {
      app: './src/main.js',
    },
    output: {
      filename: 'js/[name].js',
      path: path.resolve('dist'),
      publicPath: myPublicPath,
    },
    devServer: {
      client: {
        logging: 'warn',
      },
    },
    devtool: isProduction ? false : 'source-map',
    resolve: {
      alias: {
        '@': path.resolve('src'),
      },
    },
    module: {
      rules: [
        ...vueLoaders(),
        ...scriptsLoaders(),
        ...stylesLoaders(isProduction),
        ...assetsLoaders(isProduction),
      ],
    },
    plugins: plugins(projectName, isProduction),
    optimization: optimization(),
  };
};
