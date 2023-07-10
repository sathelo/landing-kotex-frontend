<template>
  <div class="recommendations">
    <div class="recommendations-info">
      <div class="recommendations-info__header">
        Kotex<sup class="reg">&reg;</sup> рекомендует при первой менструации
      </div>
    </div>

    <div class="recommendations-cards">
      <a
        v-for="(dataRecommendation, dataRecommendationId) in recommendations"
        :key="dataRecommendationId"
        :href="dataRecommendation.recommendation.link"
        :target="dataRecommendation.recommendation.target"
        class="recommendations-cards-card btn"
      >
        <img
          :src="getStaticUrl(dataRecommendation.recommendation.image)"
          alt="photo"
          class="recommendations-cards-card__photo"
        />

        <div class="recommendations-cards-card-info">
          <div
            class="recommendations-cards-card-info__title"
            v-html="dataRecommendation.recommendation.title"
          />
          <reviews-drops-block
            :rating="dataRecommendation.recommendation.rating"
            :max-rating="dataRecommendation.recommendation.maxRating"
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
  props: {
    recommendations: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style src="./recommendations-block.less" lang="less"></style>
