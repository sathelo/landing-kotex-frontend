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
        <div class="event-info-btn__text">
          {{
            $store.getters.isTablet
              ? `${'Фото с&nbsp;мероприятия тут'}`
              : `${'Все фото с&nbsp;мероприятия ищи тут'}`
          }}
        </div>
        <img :src="getStaticUrl('vk-ico-white.svg')" alt="vk-ico" class="event-info-btn__ico" />
      </a>
    </div>

    <div class="event-broadcast">
      <iframe
        v-if="releaseRecord"
        class="event-broadcast-video"
        :src="releaseRecord"
        title="YouTube video-player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      />

      <div v-else class="event-broadcast-close__wrapper">
        <div v-if="!$store.getters.isTablet" class="event-broadcast-live">
          <div class="event-broadcast-live__status" />
          <div class="event-broadcast-live__text">трансляция</div>
        </div>

        <div class="event-broadcast-close">
          <div class="event-broadcast-close__title">Скоро здесь появится запись трансляции</div>
          <lock-block class="event-broadcast-close__lock" s="40px" p="25px" s-image="16px" />
        </div>
      </div>
    </div>

    <div class="event-swiper">
      <div ref="swiper" class="event-swiper__content swiper">
        <div v-if="photoFromBroadcast" class="event-swiper__wrapper swiper-wrapper">
          <div
            v-for="(photo, photoId) of photoFromBroadcast"
            :key="photoId"
            class="event-swiper__slide swiper-slide"
          >
            <img
              :src="getStaticUrl(`event/image-${photoId + 1}.jpeg`)"
              :alt="`image-${photoId + 1}`"
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
  data() {
    return {
      releaseRecord: 'https://www.youtube.com/embed/MVmgzmuIEAQ',
      photoFromBroadcast: 20,
    };
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
