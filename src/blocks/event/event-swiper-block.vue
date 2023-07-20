<template>
  <section class="event-swiper">
    <div ref="eventSwiper" class="event-swiper__content">
      <div class="event-swiper__wrapper">
        <div
          v-for="(photo, photoIndex) of filteredPhotoFromBroadcast"
          :key="photoIndex"
          class="event-swiper-slide"
        >
          <img
            v-if="photo"
            :src="photo"
            :alt="`image-${photoIndex + 1}`"
            class="event-swiper-slide__image"
          />
          <lock-block v-else s="40px" p="25px" s-image="16px" />
        </div>
      </div>
    </div>

    <div class="event-swiper-btn">
      <button class="event-swiper-btn__left event-swiper-btn--prev">
        <img
          :src="getStaticUrl('icons/arrow-left--white.svg')"
          alt="arrow-left-ico"
          class="event-swiper-btn__ico"
        />
      </button>

      <button class="event-swiper-btn__right event-swiper-btn--next">
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
import { getStaticUrl } from '@/lib/tools';
// import Swiper JS
import Swiper, { Navigation } from 'swiper';
// import Swiper styles
import 'swiper/less';

export default {
  name: 'event-slider-block',
  props: {
    photoFromBroadcast: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      filteredPhotoFromBroadcast: [],
    };
  },
  mounted() {
    this.initSwiper();
    this.getPhotosForSwiper();
  },
  methods: {
    /**
     * Инициализирует Swiper и возвращает его экземпляр.
     * @returns {Swiper} Экземпляр Swiper.
     */
    initSwiper() {
      const { eventSwiper } = this.$refs;

      return new Swiper(eventSwiper, {
        modules: [Navigation],
        spaceBetween: 24,
        slidesPerView: 'auto',
        grabCursor: true,
        wrapperClass: 'event-swiper__wrapper',
        slideClass: 'event-swiper-slide',
        slideActiveClass: 'event-swiper-slide--active',
        slidePrevClass: 'event-swiper-slide--prev',
        slideNextClass: 'event-swiper-slide--next',
        mousewheel: {
          forceToAxis: true,
        },
        navigation: {
          nextEl: '.event-swiper-btn--next',
          prevEl: '.event-swiper-btn--prev',
        },
      });
    },

    /**
     * Проверка на пустоту содержимого объекта.
     * @param {object} obj - Объект, содержащий свойства и методы.
     * @returns {boolean} Возвращает `true`, если хотя бы 1-о свойство объекта имеет значение, иначе `false`.
     */
    isEmpty(obj) {
      return !Object.keys(obj).length;
    },

    /**
     * Проверяет существование изображения по заданному URL.
     * @param {string} imageUrl - URL изображения.
     * @returns {Promise<boolean>} Возвращает промис, который завершается в значение `true`, если изображение существует, и в значение `false`, если изображение не существует.
     */
    checkImageExists(imageUrl) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => reject();
        img.src = imageUrl;
      });
    },

    /**
     * Асинхронно фильтрует и добавляет в массив `filteredPhotoFromBroadcast` фотографии из массива `photoFromBroadcast`, если они существуют.
     * @returns {Promise<void>} Возвращает промис, который завершается, когда все изображения были проверены.
     */
    async getPhotosForSwiper() {
      this.$props.photoFromBroadcast.forEach(({ image }) => {
        const staticUrl = getStaticUrl(image);
        const imageExists = this.checkImageExists(staticUrl);
        imageExists
          .then(() => this.filteredPhotoFromBroadcast.push(staticUrl))
          .catch((rejImg) => this.filteredPhotoFromBroadcast.push(rejImg));
      });
    },
  },
};
</script>

<style src="./event-swiper-block.less" lang="less" />
