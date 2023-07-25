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
      v-if="!isEmptyObj(dataCity)"
      :filtered-data-city="filteredDataCity"
      :types="types"
      :limit-card="limitCard"
      :total-cards="totalCards"
      @addCard="addCard"
    />
    <afisha-event-plug-block v-if="isEmptyObj(dataCity)" />
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
            .filter((data) => this.contains(data.dates, daysDifference))
            .map((data) => ({
              ...data,
              dates: this.filteredDates(data.dates, daysDifference),
            }))
            .slice(0, this.limitCard)
        : sortedByTags.slice(0, this.limitCard);

      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.totalCards = daysDifference.length
        ? sortedByTags
            .filter((data) => this.contains(data.dates, daysDifference))
            .map((data) => ({
              ...data,
              dates: this.filteredDates(data.dates, daysDifference),
            })).length
        : sortedByTags.length;

      return sortedByDate;
    },
  },
  async mounted() {
    await this.getCities();
  },
  methods: {
    setParamsFirstDay(params) {
      this.chooseDates.fDay = params;
    },
    setParamsLastDay(params) {
      this.chooseDates.lDay = params;
    },
    contains(where, what) {
      return where.some((el) => {
        return what.includes(el);
      });
    },
    filteredDates(where, what) {
      return where.filter((el) => {
        return what.indexOf(el) !== -1;
      });
    },
    selectCity(city) {
      this.currentCity = city;
      this.eventActive = 0; // reset active event
      this.getCityData();
    },
    isEmptyObj(obj) {
      const values = Object.values(obj);
      if (!values.length) return true;
      return !values.filter((v) => v !== undefined && v !== null).length;
    },
    addCard(step) {
      this.limitCard += step;
    },
    async getCities() {
      this.cities = (await Afisha.getCities())?.items;
    },
    async getCityData() {
      this.dataCity = (await Afisha.getListEventsCity(this.currentCity?.id))?.items;
    },
    openSelect() {
      this.isSelect = !this.isSelect;
    },
    closeSelect() {
      this.isSelect = false;
    },
    chooseEvent(eventId) {
      this.eventActive = eventId;
    },
  },
};
</script>

<style src="./afisha-event-block.less" lang="less" />
