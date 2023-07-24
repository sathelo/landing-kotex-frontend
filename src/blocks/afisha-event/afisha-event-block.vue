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
    <afisha-event-calendar-block
      v-if="!isEmptyObj(dataCity)"
      :afisha-event="afishaEvent"
      :data-city="dataCity"
      :min-card="minCard"
      :max-card="maxCard"
      @moreCard="moreCard"
    />
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
    return {
      cities: [],
      dataCity: [],
      currentCity: {},
      defaultCityId: 0,
      isSelect: false,
      minCard: 0,
      maxCard: 4,
      howMuchWeAdd: 4,
    };
  },
  computed: {
    filteredCities() {
      return this.cities.filter((city) => this.currentCity?.id !== city?.id);
    },
  },
  async mounted() {
    await this.getCities();
    await this.getCityData();
  },
  methods: {
    selectCity(city) {
      this.currentCity = city;
      this.getCityData();
    },
    isEmptyObj(obj) {
      const values = Object.values(obj);
      if (!values.length) return true;
      return !values.filter((v) => v !== undefined && v !== null).length;
    },
    moreCard() {
      this.maxCard += this.howMuchWeAdd;
    },
    async getCities() {
      this.cities = (await Afisha.getCities())?.items;
      this.currentCity = !this.isEmptyObj(this.cities)
        ? this.cities[this.defaultCityId]
        : this.currentCity;
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
  },
};
</script>

<style src="./afisha-event-block.less" lang="less" />
