import api from '.';

// eslint-disable-next-line import/prefer-default-export
export class Afisha {
  /**
   * Возвращает список событий по id городу.
   *
   * @this {Afisha}
   * @param {number} cityId - id города.
   * @returns {promise} Список событий.
   */
  static async getListEventsCity(cityId) {
    const res = await api.get(`/afisha/events`, {
      params: { city_id: cityId },
    });
    return res.data;
  }

  /**
   * Возвращает список городов.
   *
   * @this {Afisha}
   * @returns {promise} Cписок городов.
   */
  static async getCities() {
    const res = await api.get(`/cities/list`);
    return res.data;
  }
}
