const path = require('path');

module.exports = (isProduction) => {
  const parser = {
    dataUrlCondition: {
      maxSize: isProduction ? 8 * 1024 : -1,
    },
  };

  return [
    {
      test: /\.(png|jpe?g|gif)$/,
      type: 'asset',
      parser,
      generator: {
        filename: 'images/[name][ext]?v=[contenthash:8]',
      },
    },
    {
      test: /\.woff2?$/,
      type: 'asset',
      parser,
      generator: {
        filename: 'fonts/[name][ext]?v=[contenthash:8]',
      },
    },
    {
      test: /\.svg$/,
      oneOf: [
        {
          resourceQuery: /inline/,
          use: [
            'vue-loader',
            path.resolve(__dirname, 'svgToSFCLoader'),
            {
              loader: 'svgo-loader',
              options: {
                configFile: false,
                plugins: [
                  {
                    name: 'preset-default',
                    params: {
                      overrides: {
                        removeViewBox: false,
                      },
                    },
                  },
                  'prefixIds',
                ],
              },
            },
          ],
        },
        {
          type: 'asset',
          use: 'svgo-loader',
          parser,
          generator: {
            filename: 'images/[name][ext]?v=[contenthash:8]',
          },
        },
      ],
    },
  ];
};
