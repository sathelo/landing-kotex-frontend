<template>
  <section class="afisha-event-info">
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
      <div class="afisha-event-info-select__text">{{ cityName }}</div>
      <img
        :src="getStaticUrl('icons/arrow-bottom--black.svg')"
        alt="arrow-bottom-ico"
        class="afisha-event-info-select__ico"
      />

      <div v-if="isSelect" class="afisha-event-info-select--active">
        <div class="afisha-event-info-select-cities">
          <div
            v-for="(city, cityIndex) in filteredCities"
            :key="cityIndex"
            class="afisha-event-info-select-cities-city"
          >
            <div class="afisha-event-info-select-city__name" @click="selectCity(city)">
              {{ city.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'afisha-event-info-block',
  props: {
    currentCity: {
      type: Object,
      required: true,
    },
    filteredCities: {
      type: Array,
      required: true,
    },
    isSelect: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    cityName() {
      return !this.isEmpty(this.$props.currentCity)
        ? this.$props.currentCity.name
        : 'Выберите город';
    },
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: {
    /**
     * Обработчик событий для щелчка за пределами окна выбора города.
     * @param {Event} event - Объект события клика.
     * @emits closeSelect
     */
    handleClickOutside(event) {
      const { choosesCities } = this.$refs;
      if (!choosesCities.contains(event.target)) this.$emit('closeSelect');
    },

    /**
     * Хэндлер закратия окна выбора городов.
     * @emits openSelect
     */
    openSelect() {
      this.$emit('openSelect');
    },

    /**
     * Хэндлер выбора города.
     * @param {object} city - Объект, содержащий свойства и методы выбранного города.
     * @emits selectCity
     */
    selectCity(city) {
      this.$emit('selectCity', city);
    },

    /**
     * Проверка на пустоту содержимого объекта.
     * @param {object} obj - Объект, содержащий свойства и методы.
     * @returns {boolean} Возвращает `true`, если хотя бы 1-о свойство объекта имеет значение, иначе `false`.
     */
    isEmpty(obj) {
      return !Object.keys(obj).length;
    },
  },
};
</script>

<style src="./afisha-event-info-block.less" lang="less" />
