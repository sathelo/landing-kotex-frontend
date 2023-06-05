const { normalizeAssetName } = require('./tools');

class CheckFilenamesPlugin {
  constructor(options = {}) {
    const defaultOptions = {
      failOnError: true,
    };

    this.options = Object.assign(defaultOptions, options);
  }

  apply(compiler) {
    // eslint-disable-next-line consistent-return
    compiler.hooks.shouldEmit.tap('CheckFilenamesPlugin', (compilation) => {
      for (const asset of compilation.getAssets()) {
        const re = /[^\w-/\\.]/;
        const normalName = normalizeAssetName(asset.name);
        const match = normalName.match(re);

        if (match) {
          compilation.errors.push(`Файл ${normalName} содержит запрещённые символы "${match[0]}"`);
          return this.options.failOnError ? false : undefined;
        }
      }
    });
  }
}

module.exports = CheckFilenamesPlugin;
