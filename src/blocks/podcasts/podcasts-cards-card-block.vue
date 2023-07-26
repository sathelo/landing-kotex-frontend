<template>
  <section class="podcasts-cards-card">
    <img :src="getStaticUrl(podcast.image)" alt="photo" class="podcasts-cards-card__photo" />

    <div class="podcasts-cards-card-info">
      <div class="podcasts-cards-card-info__title">
        {{ podcast.title }}
      </div>
      <div v-if="podcast.subtitle" class="podcasts-cards-card-info__subtitle">
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
      <div v-else class="podcasts-cards-card-info-close">
        <lock-block class="podcasts-cards-card-info-close__lock" s="40px" p="30px" s-image="18px" />
      </div>
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
