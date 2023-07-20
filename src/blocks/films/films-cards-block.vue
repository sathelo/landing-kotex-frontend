<template>
  <section ref="filmSwiper" class="films-cards">
    <div class="films-cards__wrapper">
      <div
        v-for="(film, filmIndex) in films"
        :key="filmIndex"
        :class="{ 'films-cards-card--hidden': isEmpty(film) }"
        class="films-cards-card"
      >
        <img :src="getStaticUrl(film.image)" alt="photo" class="films-cards-card__photo" />
        <div class="films-cards-card-info">
          <div class="films-cards-card-info__title">{{ film.title }}</div>
          <div class="films-cards-card-info__subtitle">
            {{ film.subtitle }}
          </div>
          <div class="films-cards-card-info__description">
            {{ film.description }}
          </div>
          <a :href="film.link" target="_blank" class="films-cards-card-info-btn">
            <img
              :src="getStaticUrl('ui/btn-watching--gradient.png')"
              alt="btn-watching"
              class="films-cards-card-info-btn__watching btn"
            />
          </a>
        </div>
      </div>
    </div>

    <button :class="{ 'films-btn--hidden': isBtnMore }" class="films-btn btn" @click="addFilm(4)">
      <div class="films-btn__text">Показать больше</div>
    </button>
  </section>
</template>

<script>
export default {
  name: 'films-swiper-block',
  props: {
    films: {
      type: Array,
      required: true,
    },
    limitFilms: {
      type: Number,
      required: true,
    },
    totalFilms: {
      type: Number,
      required: true,
    },
  },
  computed: {
    isBtnMore() {
      return this.$props.films.length && this.$props.totalFilms <= this.$props.limitFilms;
    },
  },
  methods: {
    /**
     * Проверяет, содержит ли объект хотя бы одно пустое значение.
     * @param {Object} obj - Объект, который нужно проверить.
     * @returns {boolean} - Возвращает `true`, если объект содержит хотя бы одно пустое значение, и `false` в противном случае.
     */
    isEmpty(obj) {
      const values = Object.values(obj);
      const emptyTypes = [undefined, null, ''];
      return values.some((value) => emptyTypes.includes(value));
    },

    /**
     * Добавляет заданное количество фильмов к текущему лимиту фильмов и генерирует событие 'addFilm'.
     * @emits addFilm
     * @param {number} step - Количество фильмов для добавления.
     * @returns {void}
     */
    addFilm(step) {
      this.$emit('addFilm', step);
    },
  },
};
</script>

<style src="./films-cards-block.less" lang="less" />
