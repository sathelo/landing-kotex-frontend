<template>
  <div class="podcasts">
    <div class="podcasts-info">
      <div class="podcasts-info__header">Подкасты</div>

      <div class="podcasts-info__subtitle">
        Подкасты об&nbsp;отношениях, женском здоровье и&nbsp;первом походе к&nbsp;гинекологу.
        Слушай, когда тебе комфортно
      </div>
    </div>

    <div class="podcasts-cards">
      <div
        v-for="(podcast, id) in podcasts"
        :key="id"
        :class="{
          'podcasts-cards-card--active': podcast.podcast.isActive,
        }"
        class="podcasts-cards-card"
      >
        <img
          :src="getStaticUrl(podcast.podcast.image)"
          alt="photo"
          class="podcasts-cards-card__photo"
        />

        <div class="podcasts-cards-card-info">
          <div class="podcasts-cards-card-info__title">
            {{ podcast.podcast.title }}
          </div>
          <div v-if="podcast.podcast.isActive" class="podcasts-cards-card-info__subtitle">
            {{ podcast.podcast.subtitle }}
          </div>

          <a
            v-if="podcast.podcast.isActive"
            :href="podcast.podcast.link"
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
</template>

<script>
export default {
  name: 'podcasts-block',
  computed: {
    podcasts() {
      return this.$store.state.bunker.podcasts;
    },
  },
};
</script>

<style src="./podcasts-block.less" lang="less"></style>
