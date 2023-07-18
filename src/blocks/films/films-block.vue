<template>
  <div class="films">
    <div class="films-info">
      <div class="films-info__header">Фильмы</div>

      <div class="films-info__subtitle">
        Подборка кино для совместного просмотра родителей и&nbsp;подростков
      </div>
    </div>

    <div ref="swiperFilm" class="films-cards" :class="{ swiper: $store.getters.isTablet }">
      <div class="films-cards__wrapper" :class="{ 'swiper-wrapper': $store.getters.isTablet }">
        <div
          v-for="(dataFilm, dataFilmId) in filteredFilms"
          :key="dataFilmId"
          class="films-cards-card"
          :class="{ 'swiper-slide': $store.getters.isTablet }"
        >
          <img
            :src="getStaticUrl(dataFilm.film.image)"
            alt="photo"
            class="films-cards-card__photo"
          />
          <div class="films-cards-card-info">
            <div class="films-cards-card-info__title">{{ dataFilm.film.title }}</div>
            <div class="films-cards-card-info__subtitle">
              {{ dataFilm.film.subtitle }}
            </div>
            <div class="films-cards-card-info__description">
              {{ dataFilm.film.description }}
            </div>
            <a
              v-if="!$store.getters.isTablet"
              :href="dataFilm.film.link"
              target="_blank"
              class="films-cards-card-info-btn"
            >
              <img
                :src="getStaticUrl('btn-gradient.png')"
                alt="btn-watching"
                class="films-cards-card-info-btn__watching btn"
              />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="films-swiper">
      <button
        v-if="$store.getters.isTablet"
        class="films-swiper-btn__left"
        @click="minusToSizeFilms"
      >
        <img
          :src="getStaticUrl('arrow-left-ico--gradient.svg')"
          alt="arrow-left-ico"
          class="films-swiper-btn__ico"
        />
      </button>

      <a
        v-if="isBtnMore"
        :href="!$store.getters.isTablet ? '#' : `${films[currentFilm].film.link}`"
        class="films-btn btn"
        @click="addFilm"
      >
        <div class="films-btn__text">
          {{ !$store.getters.isTablet ? 'Показать больше' : 'Смотреть' }}
        </div>
      </a>

      <button
        v-if="$store.getters.isTablet"
        class="films-swiper-btn__right"
        @click="plusToSizeFilms"
      >
        <img
          :src="getStaticUrl('arrow-right-ico--gradient.svg')"
          alt="arrow-right-ico"
          class="films-swiper-btn__ico"
        />
      </button>
    </div>
  </div>
</template>

<script>
// import Swiper JS
import Swiper, { Navigation } from 'swiper';
// import Swiper styles
import 'swiper/less';

export default {
  name: 'films-block',
  props: {
    films: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentFilm: 0,
      maxFilm: 4,
    };
  },
  computed: {
    sizeFilms() {
      return this.$props.films.lenght;
    },
    isBtnMore() {
      console.log(this.$props.films.length, this.maxFilm);
      return this.$props.films.length && this.$props.films.length >= this.maxFilm;
    },
    filteredFilms() {
      return this.$props.films.slice(0, this.maxFilm);
    },
  },
  mounted() {
    if (this.$store.getters.isTablet) {
      // eslint-disable-next-line no-new
      new Swiper(this.$refs.swiperFilm, {
        modules: [Navigation],
        slidesPerView: 'auto',
        grabCursor: true,
        mousewheel: {
          forceToAxis: true,
        },
        navigation: {
          nextEl: '.films-swiper-btn__right',
          prevEl: '.films-swiper-btn__left',
        },
      });
    }
  },
  methods: {
    plusToSizeFilms() {
      if (this.currentFilm !== this.sizeFilms) this.currentFilm += 1;
    },
    minusToSizeFilms() {
      if (this.currentFilm >= 0) this.currentFilm -= 1;
    },
    addFilm() {
      this.maxFilm += 4;
    },
  },
};
</script>

<style src="./films-block.less" lang="less"></style>
