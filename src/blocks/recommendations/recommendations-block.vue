<template>
  <div class="recommendations">
    <div class="recommendations-info">
      <div class="recommendations-info__header">
        Kotex<sup class="reg">&reg;</sup> рекомендует при первой менструации
      </div>
    </div>

    <div class="recommendations-cards">
      <a
        v-for="(recommendation, id) in recommendations"
        :key="id"
        :href="recommendation.recommendation.link"
        :target="recommendation.recommendation.target"
        class="recommendations-cards-card btn"
      >
        <img
          :src="getStaticUrl(recommendation.recommendation.image)"
          alt="photo"
          class="recommendations-cards-card__photo"
        />

        <div class="recommendations-cards-card-info">
          <div class="recommendations-cards-card-info__title">
            {{ recommendation.recommendation.title }}
          </div>
          <reviews-drops-block
            :rating="recommendation.recommendation.rating"
            :max-rating="recommendation.recommendation.maxRating"
          />
        </div>
      </a>
    </div>

    <a href="#" target="_blank" class="recommendations-btn btn">
      <div class="recommendations-btn__text">Все продукты</div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'recommendations-block',
  computed: {
    recommendations() {
      return this.$store.state.bunker.recommendations;
    },
  },
};
</script>

<style src="./recommendations-block.less" lang="less"></style>
