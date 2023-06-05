/**
 * Получение пути до файла, который расположен в папке static
 * @param {string} path - путь до файла от корня папки static
 * @param {boolean} isCssUrl - если true, то будет возвращён путь обёрнутый в url() для использования в стилях
 * @returns {string}
 */
export function getStaticUrl(path, isCssUrl = false) {
  const staticUrl = `${window.ASSETS_PATH}/static/${path}`;
  return isCssUrl ? `url(${staticUrl})` : staticUrl;
}

/**
 * Клонирование простого объекта
 * @param {object} object
 * @returns {object}
 */
export function clone(object) {
  return JSON.parse(JSON.stringify(object));
}

/**
 * Возвращает промис, который зарезолвится через заданное количество милисекунд
 * @param {number} time - время в милисекундах
 * @returns {Promise<unknown>}
 */
export function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

/**
 * Функция заменяет вхождения шаблонных параметров вида {someParam} на соответствующие значения из replacer
 * Например, имея string 'Цена {price} руб.' и replacer { price: 100 } на выходе получится 'Цена 100 руб.'
 * @param {string} string
 * @param {object} replacer
 * @returns {string}
 */
export function replaceParams(string, replacer) {
  return (string || '').replace(/({[^}]+})/g, (match) => {
    const paramName = match.slice(1, -1);

    return replacer && ['string', 'number'].includes(typeof replacer[paramName])
      ? replacer[paramName]
      : '';
  });
}

/**
 * Отправка цели в метрику
 * @param {string} name - название цели
 * @param {object} [params] - параметры визита
 */
export function reachGoal(name, params = {}) {
  if (window.ym) {
    window.ym(null, 'reachGoal', name, params);
  }
}

/**
 * Преобразование оригинальной ссылки из аватарницы в ссылку с другим размером картинки
 * Доступные псевдонимы зависят от конкретного бакета в аватарнице
 * @param {string} url
 * @param {string} alias
 * @returns {string}
 */
export function getAvatarUrl(url, alias) {
  return url.replace(/orig$/, alias);
}

/**
 * Преобразование camelCase в kebab-case
 * @param {string} string
 * @returns {string}
 */
export function camelToKebab(string) {
  return string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}
