<template>
  <section ref="filmSwiper" class="films-swiper">
    <div class="films-swiper__wrapper">
      <a
        v-for="(film, filmIndex) in films"
        :key="filmIndex"
        :class="{ 'films-swiper-card--hidden': isEmpty(film) }"
        class="films-swiper-card"
        :href="film.link"
        target="_blank"
      >
        <img :src="getStaticUrl(film.image)" alt="photo" class="films-swiper-card__photo" />
        <div class="films-swiper-card-info">
          <div class="films-swiper-card-info__title">{{ film.title }}</div>
          <div class="films-swiper-card-info__subtitle">
            {{ film.subtitle }}
          </div>
          <div class="films-swiper-card-info__description">
            {{ film.description }}
          </div>
        </div>
      </a>
    </div>

    <div class="films-pagination">
      <button class="films-pagination-btn__left films-pagination-btn--prev">
        <img
          :src="getStaticUrl('icons/arrow-left--gradient.svg')"
          alt="arrow-left-ico"
          class="films-pagination-btn__ico"
        />
      </button>

      <a :href="linkCurrentFilm" target="_blank" class="films-pagination-btn btn">
        <div class="films-pagination-btn__text">Смотреть</div>
      </a>

      <button class="films-pagination-btn__right films-pagination-btn--next">
        <img
          :src="getStaticUrl('icons/arrow-right--gradient.svg')"
          alt="arrow-right-ico"
          class="films-pagination-btn__ico"
        />
      </button>
    </div>
  </section>
</template>

<script>
// import Swiper JS
import Swiper, { Navigation } from 'swiper';
// import Swiper styles
import 'swiper/less';

export default {
  name: 'films-swiper-block',
  props: {
    films: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeSlide: 0,
    };
  },
  computed: {
    linkCurrentFilm() {
      const film = this.$props.films[this.activeSlide];
      const { link } = film;
      return link;
    },
  },
  mounted() {
    const swiper = this.initSwiper();
    swiper.on('slideChange', this.slideChange);
  },
  methods: {
    /**
     * Инициализирует Swiper и возвращает его экземпляр.
     * @returns {Swiper} Экземпляр Swiper.
     */
    initSwiper() {
      const { filmSwiper } = this.$refs;
      return new Swiper(filmSwiper, {
        modules: [Navigation],
        spaceBetween: 24,
        slidesPerView: 'auto',
        grabCursor: true,
        wrapperClass: 'films-swiper__wrapper',
        slideClass: 'films-swiper-card',
        slideActiveClass: 'films-swiper-card--active',
        slidePrevClass: 'films-swiper-card--prev',
        slideNextClass: 'films-swiper-card--next',
        mousewheel: {
          forceToAxis: true,
        },
        navigation: {
          nextEl: '.films-pagination-btn--next',
          prevEl: '.films-pagination-btn--prev',
        },
      });
    },

    /**
     * Обработчик изменения активного слайда.
     * @param {Object} swiper - Экземпляр Swiper.
     */
    slideChange(swiper) {
      this.activeSlide = swiper.activeIndex;
    },

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
  },
};
</script>

<style src="./films-swiper-block.less" lang="less" />
