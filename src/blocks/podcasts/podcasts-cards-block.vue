<template>
  <section ref="podcastSwiper" class="podcasts-cards">
    <div class="podcasts-cards__wrapper">
      <podcasts-cards-card-block
        v-for="(podcast, podcastIndex) in podcasts"
        :key="podcastIndex"
        :podcast="podcast"
      />
    </div>
  </section>
</template>

<script>
// import Swiper JS
import Swiper, { Navigation, EffectCoverflow } from 'swiper';
// import Swiper styles
import 'swiper/less';

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
        modules: [Navigation, EffectCoverflow],
        effect: 'coverflow',
        spaceBetween: 16,
        slidesPerView: this.$props.slidesPerView,
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        loopAdditionalSlides: this.$props.slidesPerView - 1,
        loopedSlides: this.$props.slidesPerView - 1,
        wrapperClass: 'podcasts-cards__wrapper',
        slideClass: 'podcasts-cards-card',
        slideActiveClass: 'podcasts-cards-card--active',
        slidePrevClass: 'podcasts-cards-card--prev',
        slideNextClass: 'podcasts-cards-card--next',
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
          slideShadows: false,
        },
        mousewheel: {
          forceToAxis: true,
        },
        navigation: {
          nextEl: '.podcast-swiper-button-next',
          prevEl: '.podcast-swiper-button-prev',
        },
      });
    },
  },
};
</script>

<style src="./podcasts-cards-block.less" lang="less" />
