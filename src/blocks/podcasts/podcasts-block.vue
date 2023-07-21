<template>
  <div class="podcasts">
    <div class="podcasts-info">
      <div class="podcasts-info__header">Подкасты</div>

      <div class="podcasts-info__subtitle">
        Подкасты об&nbsp;отношениях, женском здоровье и&nbsp;первом походе к&nbsp;гинекологу.
        Слушай, когда тебе комфортно
      </div>
    </div>

    <div ref="swiperPodcast" class="podcasts-cards swiper">
      <div class="podcasts-cards__wrapper swiper-wrapper">
        <div
          v-for="(dataPodcast, dataPodcastId) in podcasts"
          :key="dataPodcastId"
          class="podcasts-cards-card swiper-slide"
        >
          <img
            :src="getStaticUrl(dataPodcast.podcast.image)"
            alt="photo"
            class="podcasts-cards-card__photo"
          />

          <div class="podcasts-cards-card-info">
            <div class="podcasts-cards-card-info__title">
              {{ dataPodcast.podcast.title }}
            </div>
            <div class="podcasts-cards-card-info__subtitle">
              {{ dataPodcast.podcast.subtitle }}
            </div>

            <div class="podcasts-cards-card-info-btn__wrapper">
              <button v-if="$store.getters.isTablet" class="podcast-swiper-button-prev">
                <img
                  :src="getStaticUrl('icons/arrow-left--white.svg')"
                  alt="arrow-left-ico"
                  class="podcast-swiper-btn__ico"
                />
              </button>

              <a
                :href="dataPodcast.podcast.link"
                target="_blank"
                class="podcasts-cards-card-info-btn btn"
              >
                <img
                  :src="getStaticUrl('ui/btn-listen--gradient.png')"
                  alt="btn-listen"
                  class="podcasts-cards-card-info-btn__listen"
                />
              </a>

              <button v-if="$store.getters.isTablet" class="podcast-swiper-button-next">
                <img
                  :src="getStaticUrl('icons/arrow-right--white.svg')"
                  alt="arrow-right-ico"
                  class="podcast-swiper-btn__ico"
                />
              </button>
            </div>
          </div>
        </div>
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
  name: 'podcasts-block',
  props: {
    podcasts: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    // eslint-disable-next-line no-new
    new Swiper(this.$refs.swiperPodcast, {
      modules: [Navigation],
      // initialSlide: 1,
      slidesPerView: 3,
      grabCursor: true,
      loop: true,
      loopAdditionalSlides: this.$props.podcasts.length,
      loopedSlides: this.$props.podcasts.length,
      slideToClickedSlide: false,
      centeredSlides: true,
      centeredSlidesBounds: true,
      mousewheel: {
        forceToAxis: true,
      },
      navigation: {
        nextEl: '.podcast-swiper-button-next',
        prevEl: '.podcast-swiper-button-prev',
      },
    });
  },
};
</script>

<style src="./podcasts-block.less" lang="less" />
