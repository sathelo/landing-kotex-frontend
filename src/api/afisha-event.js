import api from '.';

// eslint-disable-next-line import/prefer-default-export
export class Event {
  static async getData(cityId) {
    const res = await api.get(`/afisha/events`, {
      params: { city_id: cityId },
    });
    return res.data;
  }
}
