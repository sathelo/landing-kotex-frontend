<template>
  <div class="afisha-event">
    <div v-if="!$store.getters.isTablet" class="afisha-event-heart">
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

    <div class="afisha-event-info">
      <div class="afisha-event-info__title">Афиша событий</div>
      <div class="afisha-event-info__subtitle">
        Подборка событий для совместного посещения родителями и&nbsp;подростками
      </div>
      <div
        ref="choosesCities"
        :class="{ 'afisha-event-info-select--chooses': isSelect }"
        class="afisha-event-info-select"
        @click="openSelect"
      >
        <div class="afisha-event-info-select__text">{{ currentCity.name }}</div>
        <img
          :src="getStaticUrl('icons/arrow-bottom--black.svg')"
          alt="arrow-bottom-ico"
          class="afisha-event-info-select__ico"
        />

        <div v-if="isSelect" class="afisha-event-info-select--active">
          <div class="afisha-event-info-select-cities">
            <div
              v-for="(city, cityId) in filteredCities"
              :key="cityId"
              class="afisha-event-info-select-cities-city"
            >
              <div class="afisha-event-info-select-city__name" @click="selectCity(city)">
                {{ city.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <afisha-event-calendar-block
      v-if="!isEmptyObj(dataCity)"
      :afisha-event="afishaEvent"
      :data-city="dataCity"
      :min-card="minCard"
      :max-card="maxCard"
      @moreCard="moreCard"
    />
  </div>
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
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside);
  },
  async mounted() {
    await this.getCities();
    await this.getCityData();
    document.addEventListener('click', this.handleClickOutside);
  },
  methods: {
    openSelect() {
      this.isSelect = !this.isSelect;
    },
    selectCity(city) {
      this.currentCity = city;
      this.getCityData();
    },
    isEmptyObj(obj) {
      const values = Object.values(obj);
      if (!values.length) return true;
      return !values.filter((v) => v !== undefined && v !== null).length;
    },
    handleClickOutside(event) {
      const { choosesCities } = this.$refs;
      if (!choosesCities.contains(event.target)) this.isSelect = false;
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
  },
};
</script>

<style src="./afisha-event-block.less" lang="less"></style>
