const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugins = [
  '', // главная
];

module.exports = (projectName, isProduction) => {
  const buildVersion = Math.floor(Date.now() / 1000);
  const createPage = (subPath) => {
    return new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: path.join(subPath, 'index.html'),
      inject: !isProduction,
      minify: {
        removeComments: true,
      },
      templateParameters: () => {
        const bunkerPath = path.resolve(__dirname, '../__mocks__/bunker.json');
        let bunkerJson = '{}';

        if (fs.existsSync(bunkerPath)) {
          bunkerJson = fs.readFileSync(bunkerPath, 'utf-8').trim();
        }

        return {
          bunkerJson,
          isProduction,
          buildVersion,
          assetsPath: '',
          serverTime: Math.floor(Date.now() / 1000),
          mdaLibraryUrl: 'https://mda.kinopoisk.ru/kp-mda.min.js',
          mdaReloadOnAuthCode: '',
          userJson: '{"isAuthorized": false}',
          csrfToken: 'csrf-token',
          pageSubPath: subPath,
        };
      },
    });
  };
  const createKpPage = (subPath) => {
    return new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: path.resolve(__dirname, '../../../views', projectName, subPath, 'index.html'),
      inject: false,
      minify: {
        removeComments: true,
      },
      templateParameters: () => {
        return {
          buildVersion,
          isProduction: true,
          bunkerJson: '{{{bunkerJson}}}',
          assetsPath: `{{staticPath}}/${projectName}/dist`,
          serverTime: '{{serverTime}}',
          mdaLibraryUrl: '{{mdaLibraryUrl}}',
          mdaReloadOnAuthCode: '{{{mdaReloadOnAuthCode}}}',
          userJson: '{{{userJson}}}',
          csrfToken: '{{pageHbs.csrfToken}}',
          pageSubPath: subPath,
        };
      },
    });
  };

  return htmlPlugins.map((subPath) => {
    if (projectName && isProduction) {
      return createKpPage(subPath);
    }

    return createPage(subPath);
  });
};
