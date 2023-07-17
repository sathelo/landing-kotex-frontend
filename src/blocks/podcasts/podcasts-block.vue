<template>
  <div class="podcasts">
    <div class="podcasts-info">
      <div class="podcasts-info__header">Подкасты</div>

      <div class="podcasts-info__subtitle">
        Подкасты об&nbsp;отношениях, женском здоровье и&nbsp;первом походе к&nbsp;гинекологу.
        Слушай, когда тебе комфортно
      </div>
    </div>

    <div ref="swiperPodcast" class="podcasts-cards" :class="{ swiper: $store.getters.isTablet }">
      <div class="podcasts-cards__wrapper" :class="{ 'swiper-wrapper': $store.getters.isTablet }">
        <div
          v-for="(dataPodcast, dataPodcastId) in podcasts"
          :key="dataPodcastId"
          :class="{
            'podcasts-cards-card--active': activePodcast === dataPodcastId,
            'swiper-slide': $store.getters.isTablet,
          }"
          class="podcasts-cards-card"
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
            <div v-if="activePodcast === dataPodcastId" class="podcasts-cards-card-info__subtitle">
              {{ dataPodcast.podcast.subtitle }}
            </div>

            <a
              v-if="activePodcast === dataPodcastId"
              :href="dataPodcast.podcast.link"
              target="_blank"
              class="podcasts-cards-card-info-btn btn"
            >
              <img
                :src="getStaticUrl('btn-text-listen-gradient.png')"
                alt="btn-listen"
                class="podcasts-cards-card-info-btn__listen"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Swiper JS
import Swiper from 'swiper';
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
  data() {
    return {
      activePodcast: 1,
    };
  },
  mounted() {
    // eslint-disable-next-line no-new
    new Swiper(this.$refs.swiperPodcast, {
      slidesPerView: 'auto',
      spaceBetween: 16,
      grabCursor: true,
      loop: true,
      mousewheel: {
        forceToAxis: true,
      },
    });
  },
};
</script>

<style src="./podcasts-block.less" lang="less"></style>
