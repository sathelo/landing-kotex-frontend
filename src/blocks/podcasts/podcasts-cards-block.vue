<template>
  <section ref="podcastSwiper" class="podcasts-cards">
    <div class="podcasts-cards__wrapper">
      <podcasts-cards-card-block
        v-for="(podcast, podcastIndex) in podcasts"
        :key="podcastIndex"
        :podcast="podcast"
      />
    </div>
    <div class="podcasts-cards__navigation">
      <button class="podcasts-cards-btn--prev">
        <img
          :src="
            isTablet
              ? getStaticUrl('icons/arrow-left--white.svg')
              : getStaticUrl('icons/arrow-left--gradient.svg')
          "
          alt="arrow-left-ico"
          class="podcasts-cards-btn__ico"
        />
      </button>

      <button class="podcasts-cards-btn--next">
        <img
          :src="
            isTablet
              ? getStaticUrl('icons/arrow-right--white.svg')
              : getStaticUrl('icons/arrow-right--gradient.svg')
          "
          alt="arrow-right-ico"
          class="podcasts-cards-btn__ico"
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
import { mapGetters } from 'vuex';

export default {
  name: 'podcasts-cards-block',
  props: {
    podcasts: {
      type: Array,
      required: true,
    },
    slidesPerView: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapGetters({ isTablet: 'isTablet' }),
  },
  mounted() {
    const swiper = this.initSwiper();
    swiper.slideNext();
  },
  methods: {
    /**
     * Инициализирует Swiper и возвращает его экземпляр.
     * @returns {Swiper} Экземпляр Swiper.
     */
    initSwiper() {
      const { podcastSwiper } = this.$refs;

      return new Swiper(podcastSwiper, {
        modules: [Navigation],
        spaceBetween: 16,
        slidesPerView: this.$props.slidesPerView,
        grabCursor: true,
        loop: true,
        loopAdditionalSlides: this.$props.slidesPerView - 1,
        loopedSlides: this.$props.slidesPerView - 1,
        wrapperClass: 'podcasts-cards__wrapper',
        slideClass: 'podcasts-cards-card',
        slideActiveClass: 'podcasts-cards-card--active',
        slidePrevClass: 'podcasts-cards-card--prev',
        slideNextClass: 'podcasts-cards-card--next',
        mousewheel: {
          forceToAxis: true,
        },
        navigation: {
          nextEl: '.podcasts-cards-btn--next',
          prevEl: '.podcasts-cards-btn--prev',
        },
        breakpoints: {
          0: {
            centeredSlides: false,
            slidesPerView: 'auto',
          },
          1024: {
            slidesPerView: this.$props.slidesPerView,
            centeredSlides: true,
          },
        },
      });
    },
  },
};
</script>

<style src="./podcasts-cards-block.less" lang="less" />
