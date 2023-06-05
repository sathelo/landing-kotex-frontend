export function getRatingColor(rating) {
  if (rating > 7) {
    return '#3bb33b';
  }
  if (rating > 5) {
    return '#666';
  }

  return '#f00';
}

export function formatDuration(duration) {
  const minutes = Math.floor(duration / 60);
  const hours = Math.floor(minutes / 60);

  return `${(hours > 0 ? `${hours} ч ` : '') + (minutes % 60)} мин`;
}

/**
 * Форматирование большого числа в строку вида 124K, 2M
 * @param {number} number
 * @returns {string}
 */
export function formatBigNumber(number) {
  if (number < 1000) {
    return String(number);
  }
  if (number < 10000) {
    return `${Number((number / 1000).toFixed(1))}K`;
  }

  return `${Math.floor(number / 1000)}K`;
}
