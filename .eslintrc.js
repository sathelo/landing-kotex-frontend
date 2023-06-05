module.exports = {
  root: true,
  extends: '@massproject/eslint-config-vue',
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['webpack/**', 'webpack.config.js'],
        optionalDependencies: false,
      },
    ],
  },
};
