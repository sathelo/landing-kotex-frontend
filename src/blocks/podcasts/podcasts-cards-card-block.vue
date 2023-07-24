<template>
  <section class="podcasts-cards-card">
    <img :src="getStaticUrl(podcast.image)" alt="photo" class="podcasts-cards-card__photo" />

    <div class="podcasts-cards-card-info">
      <div class="podcasts-cards-card-info__title">
        {{ podcast.title }}
      </div>
      <div class="podcasts-cards-card-info__subtitle">
        {{ podcast.subtitle }}
      </div>
      <a
        v-if="podcast.subtitle"
        :href="podcast.link"
        target="_blank"
        class="podcasts-cards-card-info-btn btn"
      >
        <img
          :src="getStaticUrl('ui/btn-listen--gradient.png')"
          alt="btn-listen"
          class="podcasts-cards-card-info-btn__listen"
        />
      </a>

      <!-- <div class="podcasts-cards-card-info-btn__wrapper">
        <button v-if="$store.getters.isTablet" class="podcast-swiper-button-prev">
          <img
            :src="getStaticUrl('icons/arrow-left--white.svg')"
            alt="arrow-left-ico"
            class="podcast-swiper-btn__ico"
          />
        </button>

        <a :href="podcast.link" target="_blank" class="podcasts-cards-card-info-btn btn">
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
      </div> -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'podcasts-cards-card-block',
  props: {
    podcast: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style src="./podcasts-cards-card-block.less" lang="less" />
