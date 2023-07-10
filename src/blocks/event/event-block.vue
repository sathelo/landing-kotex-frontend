<template>
  <div class="event">
    <div class="event-info">
      <div class="event-info__header">Международный День женского здоровья</div>

      <div class="event-info__title">
        с&nbsp;Kotex<sup class="reg">&reg;</sup> на&nbsp;&laquo;Плюс Дача&raquo;
      </div>

      <div class="event-info__subtitle">
        28&nbsp;мая на&nbsp;площадке &laquo;Плюс Дача&raquo; бренд Kotex<sup class="reg">&reg;</sup>
        провёл мероприятие &laquo;Беседа о&nbsp;важном для мам и&nbsp;дочек&raquo;, посвященное
        Международному Дню женского здоровья, а&nbsp;также построению и&nbsp;укреплению отношений
        между родителями и&nbsp;подростками.
      </div>

      <a href="#" target="_blank" class="event-info-btn btn">
        <div class="event-info-btn__text">Все фото с&nbsp;мероприятия ищи тут</div>
        <img :src="getStaticUrl('vk-ico-white.svg')" alt="vk-ico" class="event-info-btn__ico" />
      </a>
    </div>

    <div class="event-broadcast">
      <div class="event-broadcast-live">
        <div class="event-broadcast-live__status" />
        <div class="event-broadcast-live__text">трансляция</div>
      </div>

      <div class="event-broadcast-close">
        <div class="event-broadcast-close__title">Скоро здесь появится запись трансляции</div>
        <lock-block class="event-broadcast-close__lock" />
      </div>
    </div>

    <div class="event-swiper">
      <div ref="swiper" class="event-swiper__content swiper">
        <div class="event-swiper__wrapper swiper-wrapper">
          <div
            v-for="(slideData, slideDataId) in slider"
            :key="slideDataId"
            class="event-swiper__slide swiper-slide"
          >
            <lock-block v-if="isEmpty(slideData.slide)" />
          </div>
        </div>
      </div>

      <div class="event-swiper-btn">
        <button class="event-swiper-btn__left swiper-button-prev">
          <img
            :src="getStaticUrl('arrow-left-ico.svg')"
            alt="arrow-left-ico"
            class="event-swiper-btn__ico"
          />
        </button>

        <button class="event-swiper-btn__right swiper-button-next">
          <img
            :src="getStaticUrl('arrow-right-ico.svg')"
            alt="arrow-right-ico"
            class="event-swiper-btn__ico"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import Swiper JS
import Swiper, { Navigation } from 'swiper';
// import Swiper styles
import 'swiper/less';

export default {
  name: 'event-block',
  props: {
    slider: {
      type: Array,
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
    isEmpty(value) {
      return !Object.keys(value).length;
    },
  },
};
</script>

<style src="./event-block.less" lang="less"></style>
