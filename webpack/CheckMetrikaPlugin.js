const path = require('path');
const { normalizeAssetName, getUniqueArrayItem } = require('./tools');

class CheckMetrikaPlugin {
  constructor(options = {}) {
    const defaultOptions = {
      isKp: false,
      failOnError: true,
      disabled: false,
    };

    this.options = Object.assign(defaultOptions, options);
  }

  apply(compiler) {
    // eslint-disable-next-line consistent-return
    compiler.hooks.shouldEmit.tap('CheckMetrikaPlugin', (compilation) => {
      const assets = compilation.getAssets();
      let metrikaIds = [];

      for (const asset of assets) {
        const normalName = normalizeAssetName(asset.name);

        if (path.extname(normalName) === '.js') {
          metrikaIds.push(...this.findYmUsages(asset));
        }
      }

      metrikaIds = getUniqueArrayItem(metrikaIds);

      for (const asset of assets) {
        const normalName = normalizeAssetName(asset.name);

        if (path.extname(normalName) === '.html') {
          try {
            this.checkHtml(asset, metrikaIds);
          } catch (e) {
            compilation.errors.push(e.message);
            return this.options.failOnError ? false : undefined;
          }
        }
      }
    });
  }

  // eslint-disable-next-line class-methods-use-this
  findYmUsages(asset) {
    const re = /window.ym\((\d+)/g;
    const source = asset.source.source();

    return [...source.matchAll(re)].map((item) => Number(item[1]));
  }

  checkHtml(asset, usedIds) {
    const re = /ym\((\d+), ?["']init["']/g;
    const source = asset.source.source();
    const initIds = [...source.matchAll(re)].map((item) => Number(item[1]));

    if (initIds.length > 0 && this.options.disabled) {
      throw new Error(
        `Найден код метрики. У плагина CheckMetrikaPlugin необходимо выставить опцию disabled в false`
      );
    }

    for (const id of usedIds) {
      if (!initIds.includes(id)) {
        throw new Error(`Не найден код инициализации метрики ${id}`);
      }
    }

    if (initIds.length > 0 && usedIds.length === 0) {
      throw new Error(`В функцию reachGoal необходимо прописать id метрики`);
    }

    if (this.options.inKp === true && initIds.length === 0 && !this.options.disabled) {
      throw new Error(
        `В файле ${asset.name} отсутствует счётчик метрики. Если в метрике нет необходимости, то нужно у плагина CheckMetrikaPlugin выставить опцию disabled в true`
      );
    }
  }
}

module.exports = CheckMetrikaPlugin;
