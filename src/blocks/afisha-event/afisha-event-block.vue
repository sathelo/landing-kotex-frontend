<template>
  <section class="afisha-event">
    <div class="afisha-event-heart">
      <img
        :src="getStaticUrl('afisha-event/heart-fill--pink.svg')"
        alt="heart-fill"
        class="afisha-event-heart__fill"
      />
      <img
        :src="getStaticUrl('afisha-event/heart-empty--pink.svg')"
        alt="heart-empty"
        class="afisha-event-heart__empty"
      />
    </div>
    <afisha-event-info-block
      :current-city="currentCity"
      :is-select="isSelect"
      :filtered-cities="filteredCities"
      @selectCity="selectCity"
      @openSelect="openSelect"
      @closeSelect="closeSelect"
    />
    <afisha-event-events-block
      v-if="!isEmptyObj(dataCity)"
      :event-active="eventActive"
      :events="filteredEvents"
      @chooseEvent="chooseEvent"
    />
    <afisha-event-calendar-block
      :months="months"
      :choose-dates="chooseDates"
      @setParamsFirstDay="setParamsFirstDay"
      @setParamsLastDay="setParamsLastDay"
    />
    <afisha-event-cards-block
      v-if="!isEmptyObj(filteredDataCity)"
      :filtered-data-city="filteredDataCity"
      :types="types"
      :limit-card="limitCard"
      :total-cards="totalCards"
      @addCard="addCard"
    />
    <afisha-event-plug-block v-if="isEmptyObj(filteredDataCity)" />
  </section>
</template>

<script>
import { Afisha } from '../../api/afisha-event';

export default {
  name: 'afisha-event-block',
  props: {
    afishaEvent: {
      type: Object,
      required: true,
    },
  },
  data() {
    const { months, types } = this.$props.afishaEvent;
    return {
      months,
      types,
      eventActive: 0,
      cities: [],
      dataCity: [],
      currentCity: {},
      isSelect: false,
      limitCard: 4,
      chooseDates: {
        fDay: {
          year: null,
          month: null,
          day: null,
        },
        lDay: {
          year: null,
          month: null,
          day: null,
        },
      },
    };
  },
  computed: {
    totalCards() {
      return this.sortedDataCity.length;
    },
    filteredEvents() {
      const res = ['all'];
      this.dataCity.forEach((data) => {
        if (!res.includes(data.type)) res.push(data.type);
      });
      return res;
    },
    filteredCities() {
      return this.cities.filter((city) => this.currentCity?.id !== city?.id);
    },
    filteredDataCity() {
      return this.sortedDataCity.slice(0, this.limitCard);
    },
    sortedDataCity() {
      const daysDifference = [];
      if (!this.isEmptyObj(this.chooseDates.fDay)) {
        const { year: fYear, month: fMonth, day: fDay } = this.chooseDates.fDay;
        const startDate = new Date(fYear, fMonth, fDay);
        daysDifference.push(
          `${startDate.getFullYear()}-${
            startDate.getMonth() + 1 < 10
              ? `0${startDate.getMonth() + 1}`
              : startDate.getMonth() + 1
          }-${startDate.getDate() < 10 ? `0${startDate.getDate()}` : startDate.getDate()}`
        );
      }
      if (!this.isEmptyObj(this.chooseDates.fDay) && !this.isEmptyObj(this.chooseDates.lDay)) {
        const { year: fYear, month: fMonth, day: fDay } = this.chooseDates.fDay;
        const { year: lYear, month: lMonth, day: lDay } = this.chooseDates.lDay;
        const startDate = new Date(fYear, fMonth, fDay);
        const endDate = new Date(lYear, lMonth, lDay);
        if (startDate > endDate) {
          while (endDate <= startDate) {
            daysDifference.push(
              `${endDate.getFullYear()}-${
                endDate.getMonth() + 1 < 10 ? `0${endDate.getMonth() + 1}` : endDate.getMonth() + 1
              }-${endDate.getDate() < 10 ? `0${endDate.getDate()}` : endDate.getDate()}`
            );
            endDate.setDate(endDate.getDate() + 1);
          }
        } else {
          while (startDate <= endDate) {
            daysDifference.push(
              `${startDate.getFullYear()}-${
                startDate.getMonth() + 1 < 10
                  ? `0${startDate.getMonth() + 1}`
                  : startDate.getMonth() + 1
              }-${startDate.getDate() < 10 ? `0${startDate.getDate()}` : startDate.getDate()}`
            );
            startDate.setDate(startDate.getDate() + 1);
          }
        }
      }

      const currentEvent = this.filteredEvents[this.eventActive];
      const sortedByTags =
        currentEvent !== 'all'
          ? this.dataCity.filter((data) => data.type === currentEvent)
          : this.dataCity;

      const sortedByDate = daysDifference.length
        ? sortedByTags
            .filter((data) => this.isContains(data.dates, daysDifference))
            .map((data) => ({
              ...data,
              dates: this.filteredDates(data.dates, daysDifference),
            }))
        : sortedByTags;

      return sortedByDate;
    },
  },
  async mounted() {
    await this.getCities();
  },
  methods: {
    /**
    Асинхронно получает список городов с помощью метода getCities из объекта Afisha.
    @returns {Promise<void>}
    */
    async getCities() {
      this.cities = (await Afisha.getCities())?.items;
    },

    /**
    Асинхронно получает данные о событиях в выбранном городе с помощью метода getListEventsCity из объекта Afisha.
    @returns {Promise<void>}
    */
    async getCityData() {
      this.dataCity = (await Afisha.getListEventsCity(this.currentCity?.id))?.items;
    },

    /**
    Устанавливает параметры для выбранной первой даты в объекте chooseDates.
    @param {Object} params - Параметры выбранной первой даты.
    @param {number|null} params.year - Год выбранной первой даты.
    @param {number|null} params.month - Месяц выбранной первой даты.
    @param {number|null} params.day - День выбранной первой даты.
    @returns {void}
    */
    setParamsFirstDay(params) {
      this.chooseDates.fDay = params;
    },

    /**
    Устанавливает параметры для выбранной последней даты в объекте chooseDates.
    @param {Object} params - Параметры выбранной последней даты.
    @param {number|null} params.year - Год выбранной последней даты.
    @param {number|null} params.month - Месяц выбранной последней даты.
    @param {number|null} params.day - День выбранной последней даты.
    @returns {void}
    */
    setParamsLastDay(params) {
      this.chooseDates.lDay = params;
    },

    /**
    Фильтрует элементы массива where, оставляя только те, что содержатся в массиве what.
    @param {Array} where - Массив элементов, который нужно отфильтровать.
    @param {Array} what - Массив элементов, по которому происходит фильтрация.
    @returns {Array} - Новый массив, состоящий только из элементов из массива where, которые содержатся в массиве what.
    */
    filteredDates(where, what) {
      return where.filter((el) => {
        return what.indexOf(el) !== -1;
      });
    },

    /**
    Выбирает город и обновляет данные о событиях в выбранном городе.
    @param {Object} city - Выбранный город.
    @returns {void}
    */
    selectCity(city) {
      this.currentCity = city;
      this.resetFilters();
      this.getCityData();
    },

    /**
    Устанавливает выбранное событие в качестве активного.
    @param {number} eventId - Идентификатор выбранного события.
    @returns {void}
    */
    chooseEvent(eventId) {
      this.eventActive = eventId;
    },

    /**
    Увеличивает максимальное количество отображаемых карточек на странице на заданный шаг.
    @param {number} step - Шаг для увеличения максимального количества отображаемых карточек.
    @returns {void}
    */
    addCard(step) {
      this.limitCard += step;
    },

    /**
    Открывает или закрывает выпадающий список.
    @returns {void}
    */
    openSelect() {
      this.isSelect = !this.isSelect;
    },

    /**
    Закрывает выпадающий список.
    @returns {void}
    */
    closeSelect() {
      this.isSelect = false;
    },

    /**
    Сбрасывает фильтры и устанавливает значение eventActive в 0.
    @returns {void}
    */
    resetFilters() {
      this.eventActive = 0;
    },

    /**
    Проверяет, содержит ли массив what хотя бы один элемент из массива where.
    @param {Array} where - Массив элементов для поиска.
    @param {Array} what - Массив элементов, в котором происходит поиск.
    @returns {boolean} - true, если хотя бы один элемент из массива where содержится в массиве what, иначе false.
    */
    isContains(where, what) {
      return where.some((el) => {
        return what.includes(el);
      });
    },

    /**
    Проверяет, является ли переданный объект пустым (не содержит свойств) или нет.
    @param {Object} obj - Проверяемый объект.
    @returns {boolean} - true, если объект пустой или содержит только undefined или null, иначе false.
    */
    isEmptyObj(obj) {
      const values = Object.values(obj);
      if (!values.length) return true;
      return !values.filter((v) => v !== undefined && v !== null).length;
    },
  },
};
</script>

<style src="./afisha-event-block.less" lang="less" />
