<template>
  <section class="event-swiper">
    <div ref="swiper" class="event-swiper__content swiper">
      <div v-if="photoFromBroadcast" class="event-swiper__wrapper swiper-wrapper">
        <div
          v-for="(_photo, photoIndex) of photoFromBroadcast"
          :key="photoIndex"
          class="event-swiper__slide swiper-slide"
        >
          <img
            :src="getStaticUrl(`event/image-${photoIndex + 1}.jpeg`)"
            :alt="`image-${photoIndex + 1}`"
            class="swiper-slide__image"
          />
        </div>
      </div>

      <div class="event-swiper__wrapper swiper-wrapper">
        <div
          v-for="(slideData, slideDataId) in slider"
          :key="slideDataId"
          class="event-swiper__slide swiper-slide"
        >
          <lock-block v-if="isEmpty(slideData.slide)" s="40px" p="25px" s-image="16px" />
        </div>
      </div>
    </div>

    <div class="event-swiper-btn">
      <button class="event-swiper-btn__left swiper-button-prev">
        <img
          :src="getStaticUrl('icons/arrow-left--white.svg')"
          alt="arrow-left-ico"
          class="event-swiper-btn__ico"
        />
      </button>

      <button class="event-swiper-btn__right swiper-button-next">
        <img
          :src="getStaticUrl('icons/arrow-right--white.svg')"
          alt="arrow-right-ico"
          class="event-swiper-btn__ico"
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
  name: 'event-slider-block',
  props: {
    slider: {
      type: Array,
      required: true,
    },
    photoFromBroadcast: {
      type: Number,
      required: true,
    },
  },
  mounted() {
    // eslint-disable-next-line no-new
    new Swiper(this.$refs.swiper, {
      modules: [Navigation],
      spaceBetween: 24,
      slidesPerView: 'auto',
      grabCursor: true,
      mousewheel: {
        forceToAxis: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  },
  methods: {
    /**
     * Проверка на пустоту содержимого объекта.
     *
     * @param {Object.<string, *>} obj - Объект, содержащий свойства и методы.
     * @returns {boolean} Возвращает true, если хотя бы 1-о свойство объекта имеет значение, иначе false.
     */
    isEmpty(obj) {
      return !Object.keys(obj).length;
    },
  },
};
</script>

<style src="./event-slider-block.less" lang="less" />
